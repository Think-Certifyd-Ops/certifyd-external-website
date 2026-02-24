import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const attioApiKey = Netlify.env.get("ATTIO_API_KEY");
  const loopsApiKey = Netlify.env.get("LOOPS_API_KEY");
  const slackWebhookUrl = Netlify.env.get("SLACK_WEBHOOK_URL");

  try {
    const body = await req.json();
    const { email, firstName, lastName, company, role, industry, interest, source, message } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const results: Record<string, string> = {};
    let attioPersonId: string | null = null;
    let attioPersonUrl: string | null = null;
    let companyRecordId: string | null = null;

    // ── Step 1: Attio — create company + person ─────────────
    if (attioApiKey) {
      try {
        // Create or update company
        const companyRes = await fetch(
          "https://api.attio.com/v2/objects/companies/records?matching_attribute=name",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${attioApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                values: {
                  name: [{ value: company }],
                  description: [{ value: [
                    industry ? `Industry: ${industry}` : null,
                    `Source: ${source || "website"}`,
                  ].filter(Boolean).join(" | ") }],
                },
              },
            }),
          }
        );

        if (companyRes.ok) {
          const companyData = await companyRes.json();
          companyRecordId = companyData?.data?.id?.record_id || null;
          results.attio_company = "ok";
        } else {
          console.error("Attio company creation failed:", await companyRes.text());
          results.attio_company = "failed";
        }

        // Create or update person (description updated later with Loops ID)
        const personRes = await fetch(
          "https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${attioApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                values: {
                  email_addresses: [{ email_address: email }],
                  name: [{ full_name: `${firstName || ""} ${lastName || ""}`.trim(), first_name: firstName || "", last_name: lastName || "" }],
                  ...(role ? { job_title: [{ value: role }] } : {}),
                  ...(companyRecordId
                    ? { company: [{ target_object: "companies", target_record_id: companyRecordId }] }
                    : {}),
                },
              },
            }),
          }
        );

        if (personRes.ok) {
          const personData = await personRes.json();
          attioPersonId = personData?.data?.id?.record_id || null;
          attioPersonUrl = personData?.data?.web_url || null;
          results.attio_person = "ok";
        } else {
          console.error("Attio person creation failed:", await personRes.text());
          results.attio_person = "failed";
        }

        // Add a note with the enquiry details
        if (companyRecordId) {
          const noteLines = [
            `Inbound enquiry from ${firstName} ${lastName} (${email})`,
            role ? `Role: ${role}` : null,
            interest ? `Interest: ${interest}` : null,
            source ? `Form: ${source}` : null,
            message ? `\nMessage:\n${message}` : null,
          ]
            .filter(Boolean)
            .join("\n");

          await fetch("https://api.attio.com/v2/notes", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${attioApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                parent_object: "companies",
                parent_record_id: companyRecordId,
                title: `Website enquiry — ${interest || source || "General"}`,
                format: "plaintext",
                content: noteLines,
              },
            }),
          }).catch((err) => console.error("Attio note failed:", err));
        }
      } catch (err) {
        console.error("Attio integration error:", err);
        results.attio = "error";
      }
    } else {
      results.attio = "not_configured";
    }

    // ── Step 2: Loops — create contact with Attio link ──────
    let loopsContactId: string | null = null;

    if (loopsApiKey) {
      try {
        const loopsRes = await fetch("https://app.loops.so/api/v1/contacts/create", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${loopsApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            firstName: firstName || undefined,
            lastName: lastName || undefined,
            company: company || undefined,
            source: source || "website",
            // Custom properties — store Attio link on Loops contact
            ...(attioPersonUrl ? { attioUrl: attioPersonUrl } : {}),
          }),
        });

        if (loopsRes.ok) {
          const loopsData = await loopsRes.json();
          loopsContactId = loopsData?.id || null;
          results.loops = "ok";
        } else {
          console.error("Loops contact creation failed:", await loopsRes.text());
          results.loops = "failed";
        }
      } catch (err) {
        console.error("Loops integration error:", err);
        results.loops = "error";
      }
    } else {
      results.loops = "not_configured";
    }

    // ── Step 3: Update Attio person description with cross-links ──
    if (attioApiKey && attioPersonId) {
      const descParts = [
        `Form: ${source || "website"}`,
        interest ? interest : null,
        loopsContactId ? `Loops ID: ${loopsContactId}` : null,
        `Loops: https://app.loops.so/contacts?search=${encodeURIComponent(email)}`,
      ].filter(Boolean).join(" | ");

      await fetch(
        `https://api.attio.com/v2/objects/people/records/${attioPersonId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${attioApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              values: {
                description: [{ value: descParts }],
              },
            },
          }),
        }
      ).catch((err) => console.error("Attio person update failed:", err));
    }

    // ── Step 4: Slack notification ─────────────────────────
    if (slackWebhookUrl) {
      const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Unknown";
      const blocks = [
        {
          type: "header",
          text: { type: "plain_text", text: "New Website Enquiry", emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${fullName}` },
            { type: "mrkdwn", text: `*Email:*\n${email}` },
            { type: "mrkdwn", text: `*Company:*\n${company || "—"}` },
            { type: "mrkdwn", text: `*Role:*\n${role || "—"}` },
            { type: "mrkdwn", text: `*Form:*\n${source || "website"}` },
            { type: "mrkdwn", text: `*Interest:*\n${interest || "General"}` },
          ],
        },
        ...(message ? [{
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n${message}` },
        }] : []),
        ...(attioPersonUrl ? [{
          type: "actions",
          elements: [{
            type: "button",
            text: { type: "plain_text", text: "View in Attio" },
            url: attioPersonUrl,
            style: "primary",
          }],
        }] : []),
      ];

      await fetch(slackWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blocks }),
      }).catch((err) => console.error("Slack notification failed:", err));
    }

    return new Response(JSON.stringify({ ok: true, results }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Demo enquiry function error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

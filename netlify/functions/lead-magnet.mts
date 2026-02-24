import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const attioApiKey = Netlify.env.get("ATTIO_API_KEY");
  const attioSlug = Netlify.env.get("ATTIO_WORKSPACE_SLUG") || "certifyd";
  const loopsApiKey = Netlify.env.get("LOOPS_API_KEY");
  const slackWebhookUrl = Netlify.env.get("SLACK_WEBHOOK_URL");

  try {
    const body = await req.json();
    const { email, firstName, lastName, company, source } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const results: Record<string, string> = {};
    let attioPersonUrl: string | null = null;

    // ── Step 1: Attio — create company + person ─────────────
    if (attioApiKey) {
      try {
        let companyRecordId: string | null = null;

        if (company) {
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
                    description: [{ value: `Source: lead-magnet (${source})` }],
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
        }

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
          const personId = personData?.data?.id?.record_id || null;
          attioPersonUrl = personId
            ? `https://app.attio.com/${attioSlug}/person/${personId}/overview`
            : null;
          results.attio_person = "ok";
        } else {
          console.error("Attio person creation failed:", await personRes.text());
          results.attio_person = "failed";
        }

        // Add a note on the company
        if (companyRecordId) {
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
                title: `Lead magnet download — ${source}`,
                format: "plaintext",
                content: `${firstName || ""} ${lastName || ""} (${email}) downloaded: ${source}`,
              },
            }),
          }).catch((err) => console.error("Attio note failed:", err));
        }
      } catch (err) {
        console.error("Attio integration error:", err);
        results.attio = "error";
      }
    }

    // ── Step 2: Loops — create contact + trigger drip ────────
    if (loopsApiKey) {
      try {
        const contactRes = await fetch("https://app.loops.so/api/v1/contacts/create", {
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
            source: "website",
            leadMagnet: source,
            ...(attioPersonUrl ? { attioUrl: attioPersonUrl } : {}),
          }),
        });

        if (!contactRes.ok) {
          console.error("Loops contact creation failed:", await contactRes.text());
          results.loops = "failed";
        } else {
          results.loops = "ok";
        }

        // Send event to trigger the drip sequence
        const eventRes = await fetch("https://app.loops.so/api/v1/events/send", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${loopsApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            eventName: `downloaded_${source.replace(/-/g, "_")}`,
          }),
        });

        if (!eventRes.ok) {
          console.error("Loops event send failed:", await eventRes.text());
        }
      } catch (err) {
        console.error("Loops integration error:", err);
        results.loops = "error";
      }
    }

    // ── Step 3: Slack notification ───────────────────────────
    if (slackWebhookUrl) {
      const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Unknown";
      const blocks = [
        {
          type: "header",
          text: { type: "plain_text", text: "New Lead Magnet Download", emoji: true },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${fullName}` },
            { type: "mrkdwn", text: `*Email:*\n${email}` },
            { type: "mrkdwn", text: `*Company:*\n${company || "—"}` },
            { type: "mrkdwn", text: `*Resource:*\n${source}` },
          ],
        },
        ...(attioPersonUrl ? [{
          type: "actions",
          elements: [{
            type: "button",
            text: { type: "plain_text", text: "View in Attio" },
            url: attioPersonUrl,
            style: "primary" as const,
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
    console.error("Lead magnet function error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const attioApiKey = Netlify.env.get("ATTIO_API_KEY");
  const loopsApiKey = Netlify.env.get("LOOPS_API_KEY");

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

    // ── Attio: Create company + person ──────────────────────
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
                  ...(industry ? { description: [{ value: `Industry: ${industry}` }] } : {}),
                },
              },
            }),
          }
        );

        let companyRecordId: string | null = null;
        if (companyRes.ok) {
          const companyData = await companyRes.json();
          companyRecordId = companyData?.data?.id?.record_id || null;
          results.attio_company = "ok";
        } else {
          console.error("Attio company creation failed:", await companyRes.text());
          results.attio_company = "failed";
        }

        // Create or update person
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
                  name: [{ first_name: firstName || "", last_name: lastName || "" }],
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
          results.attio_person = "ok";
        } else {
          console.error("Attio person creation failed:", await personRes.text());
          results.attio_person = "failed";
        }

        // Add a note with the enquiry details
        if (companyRecordId) {
          const noteLines = [
            `**Inbound enquiry** from ${firstName} ${lastName} (${email})`,
            role ? `Role: ${role}` : null,
            interest ? `Interest: ${interest}` : null,
            source ? `Source: ${source}` : null,
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
                content_plaintext: noteLines,
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

    // ── Loops: Create contact ───────────────────────────────
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
            source: source || "website-demo",
          }),
        });

        results.loops = loopsRes.ok ? "ok" : "failed";
        if (!loopsRes.ok) {
          console.error("Loops contact creation failed:", await loopsRes.text());
        }
      } catch (err) {
        console.error("Loops integration error:", err);
        results.loops = "error";
      }
    } else {
      results.loops = "not_configured";
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

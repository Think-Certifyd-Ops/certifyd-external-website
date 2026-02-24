import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const loopsApiKey = Netlify.env.get("LOOPS_API_KEY");
  if (!loopsApiKey) {
    // Loops not configured yet — silently succeed so the form still works
    return new Response(JSON.stringify({ ok: true, loops: "not_configured" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { email, firstName, lastName, company, source } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create or update contact in Loops
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
      }),
    });

    if (!contactRes.ok) {
      const errorText = await contactRes.text();
      console.error("Loops contact creation failed:", errorText);
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
      const errorText = await eventRes.text();
      console.error("Loops event send failed:", errorText);
    }

    return new Response(JSON.stringify({ ok: true }), {
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

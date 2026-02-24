import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: { email?: string; hp?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Honeypot — bots fill hidden fields, humans don't
  if (body.hp) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Valid email required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const loopsApiKey = Netlify.env.get("LOOPS_API_KEY");
  if (!loopsApiKey) {
    console.error("LOOPS_API_KEY not configured");
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${loopsApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        source: "website-waitlist",
      }),
    });

    // Loops returns 409 if contact already exists — treat as success
    if (res.ok || res.status === 409) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await res.json().catch(() => ({}));
    console.error("Loops API error:", res.status, data);
    return new Response(
      JSON.stringify({ error: "Failed to subscribe. Please try again." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Loops API request failed:", err);
    return new Response(
      JSON.stringify({ error: "Failed to subscribe. Please try again." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
};

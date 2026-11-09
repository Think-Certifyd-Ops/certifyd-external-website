"use client";
import { useState, type FormEvent } from "react";
import { Arrow } from "./Icons";

/**
 * Newsletter sign-up in the footer, in Certifyd's own styling.
 * It replaces the RogerSon newsletter widget (newsletter-widget.js), which drew its own white card into the
 * footer, and posts to the same RogerSon endpoint with the same fields, so the double opt-in and Andrew's
 * follow-up question work as before. data-rogerson-newsletter="certifyd" stops the widget mounting twice
 * if its script is ever added back.
 */
const ENDPOINT = "https://rogerson-signups.netlify.app/.netlify/functions/newsletter-subscribe";
const PRIVACY = "https://rogerson-signups.netlify.app/privacy.html?site=certifyd.io";

export function FooterNewsletter() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!email.checkValidity()) { email.reportValidity(); return; }
    setState("sending");
    setMessage("Adding you...");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.value,
          website: (form.elements.namedItem("website") as HTMLInputElement).value,
          domain: "certifyd.io",
          page: window.location.href,
          source: "portfolio-widget",
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Please try again.");
      setState("done");
      setMessage("Check your inbox. If you're new, confirm first. Andrew will then ask what you need.");
      window.dispatchEvent(new CustomEvent("rogerson:newsletter-subscribed", { detail: { brand: "certifyd" } }));
    } catch (err) {
      setState("idle");
      setMessage(err instanceof Error && err.message ? err.message : "Please try again.");
    }
  }

  return (
    <section className="foot-news" aria-labelledby="foot-news-title" data-rogerson-newsletter="certifyd">
      <div className="foot-news-text">
        <p className="eyebrow">Newsletter</p>
        <h2 id="foot-news-title" className="foot-news-title">What should Certifyd help you do?</h2>
        <p>Join the newsletter for useful updates. After you confirm, Andrew will ask one quick question about what you need.</p>
      </div>
      <div className="foot-news-form">
        {state !== "done" && (
          <form noValidate onSubmit={submit}>
            <label htmlFor="foot-news-email">Email address</label>
            <div className="foot-news-row">
              <input id="foot-news-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="you@company.co.uk" required />
              <input className="trap" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button type="submit" className="btn btn-primary" disabled={state === "sending"}>Join and tell us <Arrow /></button>
            </div>
            <p className="foot-news-fine">You&apos;ll get an email to confirm. Read the <a href={PRIVACY}>privacy notice</a>. Unsubscribe at any time.</p>
          </form>
        )}
        <p className="foot-news-status" role="status" aria-live="polite">{message}</p>
      </div>
    </section>
  );
}

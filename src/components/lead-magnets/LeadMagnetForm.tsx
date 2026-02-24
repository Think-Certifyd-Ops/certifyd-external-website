"use client";

import { useState, useEffect, useRef } from "react";

interface LeadMagnetFormProps {
  /** Identifies which lead magnet this form is for */
  source: string;
  /** URL to the PDF file for download */
  pdfUrl: string;
  /** Button label, e.g. "Download Checklist" */
  buttonLabel?: string;
}

export function LeadMagnetForm({
  source,
  pdfUrl,
  buttonLabel = "Download Now",
}: LeadMagnetFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const downloadTriggered = useRef(false);

  // Auto-trigger PDF download once the form submits successfully
  useEffect(() => {
    if (submitted && !downloadTriggered.current) {
      downloadTriggered.current = true;
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    }
  }, [submitted, pdfUrl]);

  if (submitted) {
    return (
      <div className="bg-navy-light border border-navy-border rounded-sm p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-accent-success/15 flex items-center justify-center mb-5">
          <svg
            className="w-7 h-7 text-accent-success"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-text-on-dark mb-2">
          Your download should start automatically
        </h3>
        <p className="text-text-on-dark-muted text-sm mb-6">
          We&apos;ve also sent a copy to your inbox. If the download didn&apos;t start, click below.
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          {buttonLabel}
        </a>
      </div>
    );
  }

  return (
    <form
      name="lead-magnet"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
          // Submit to Netlify Forms
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(
              formData as unknown as Record<string, string>
            ).toString(),
          });

          if (!res.ok) {
            throw new Error("Form submission failed");
          }

          // Forward to Loops via Netlify Function (best-effort, don't block)
          fetch("/.netlify/functions/lead-magnet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.get("email"),
              firstName: (formData.get("name") as string)?.split(" ")[0] || "",
              lastName: (formData.get("name") as string)?.split(" ").slice(1).join(" ") || "",
              company: formData.get("company"),
              source,
            }),
          }).catch(() => {
            /* Loops integration is best-effort */
          });

          // GA4 event
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            window.gtag("event", "generate_lead", {
              event_category: "lead_magnet",
              event_label: source,
            });
          }

          setSubmitted(true);
        } catch {
          setError(
            "Something went wrong. Please try again or email us at hello@certifyd.io."
          );
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="lead-magnet" />
      <input type="hidden" name="source" value={source} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label
          htmlFor={`lm-name-${source}`}
          className="block text-sm font-medium text-text-on-dark-muted mb-1.5"
        >
          Full Name *
        </label>
        <input
          type="text"
          id={`lm-name-${source}`}
          name="name"
          required
          className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor={`lm-email-${source}`}
          className="block text-sm font-medium text-text-on-dark-muted mb-1.5"
        >
          Work Email *
        </label>
        <input
          type="email"
          id={`lm-email-${source}`}
          name="email"
          required
          className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor={`lm-company-${source}`}
          className="block text-sm font-medium text-text-on-dark-muted mb-1.5"
        >
          Company *
        </label>
        <input
          type="text"
          id={`lm-company-${source}`}
          name="company"
          required
          className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
          placeholder="Your company"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading font-medium hover:bg-certifyd-blue-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : buttonLabel}
      </button>

      <p className="text-xs text-text-on-dark-muted text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}

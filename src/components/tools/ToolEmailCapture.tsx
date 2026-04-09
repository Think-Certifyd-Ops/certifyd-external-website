"use client";

import { useState } from "react";
import { GOOGLE_ADS_CONVERSIONS } from "@/lib/constants";

interface ToolEmailCaptureProps {
  /** Identifies which tool this form is for (e.g. "penalty-calculator") */
  source: string;
  /** Headline above the form */
  headline?: string;
  /** Subtitle below headline */
  subtitle?: string;
  /** Submit button text */
  buttonLabel?: string;
}

export function ToolEmailCapture({
  source,
  headline = "Save your results",
  subtitle = "We'll email you a copy of this report with the full breakdown.",
  buttonLabel = "Email me this report",
}: ToolEmailCaptureProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="bg-accent-success/10 border border-accent-success/30 rounded-sm p-6 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-accent-success/15 flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-accent-success"
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
        <h3 className="font-heading text-lg font-bold text-text-on-dark mb-1">
          Report sent
        </h3>
        <p className="text-sm text-text-on-dark-muted">
          Check your inbox. We&apos;ve included a link to re-run this calculator any time.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-navy-light border border-navy-border rounded-sm p-6">
      <h3 className="font-heading text-lg font-bold text-text-on-dark mb-1">
        {headline}
      </h3>
      <p className="text-sm text-text-on-dark-muted mb-5">{subtitle}</p>

      <form
        name="tool-report"
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
            const res = await fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams(
                formData as unknown as Record<string, string>
              ).toString(),
            });

            if (!res.ok) throw new Error("Form submission failed");

            // Forward to Loops (best-effort)
            let utmData = {};
            try {
              utmData = JSON.parse(
                sessionStorage.getItem("certifyd_utm") || "{}"
              );
            } catch { /* ignore */ }
            fetch("/.netlify/functions/lead-magnet", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: formData.get("email"),
                firstName:
                  (formData.get("name") as string)?.split(" ")[0] || "",
                lastName:
                  (formData.get("name") as string)
                    ?.split(" ")
                    .slice(1)
                    .join(" ") || "",
                company: formData.get("company"),
                source: `tool-${source}`,
                ...utmData,
              }),
            }).catch(() => {});

            // GA4 event
            if (
              typeof window !== "undefined" &&
              typeof window.gtag === "function"
            ) {
              window.gtag("event", "generate_lead", {
                event_category: "tool_report",
                event_label: source,
                ...(GOOGLE_ADS_CONVERSIONS.leadMagnet
                  ? { send_to: GOOGLE_ADS_CONVERSIONS.leadMagnet }
                  : {}),
              });
            }

            setSubmitted(true);
          } catch {
            setError(
              "Something went wrong. Please try again or email us at team@certifyd.io."
            );
          } finally {
            setLoading(false);
          }
        }}
        className="space-y-3"
      >
        <input type="hidden" name="form-name" value="tool-report" />
        <input type="hidden" name="source" value={`tool-${source}`} />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors text-sm"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Work email"
            className="px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors text-sm"
          />
          <input
            type="text"
            name="company"
            required
            placeholder="Company"
            className="px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors text-sm"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : buttonLabel}
        </button>

        <p className="text-xs text-text-on-dark-muted">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}

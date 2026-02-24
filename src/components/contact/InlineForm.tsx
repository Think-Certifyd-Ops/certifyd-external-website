"use client";

import { useState } from "react";

interface InlineFormProps {
  source: string;
}

export function InlineForm({ source }: InlineFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="bg-navy-light border border-navy-border rounded-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-accent-success/15 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-accent-success"
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
        <h3 className="font-heading text-2xl font-bold text-text-on-dark mb-2">
          Message sent
        </h3>
        <p className="text-text-on-dark-muted">
          We typically respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="for-page-enquiry"
      method="POST"
      data-netlify="true"
      onSubmit={(e) => {
        e.preventDefault();
        setError("");
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(
            formData as unknown as Record<string, string>
          ).toString(),
        })
          .then((res) => {
            if (res.ok) {
              setSubmitted(true);
            } else {
              console.error("Form submission failed:", res.status, res.statusText);
              setError("Something went wrong. Please try again or email us directly.");
            }
          })
          .catch((err) => {
            console.error("Form submission error:", err);
            setError("Something went wrong. Please try again or email us directly.");
          });
      }}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="for-page-enquiry" />
      <input type="hidden" name="source" value={source} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inline-name"
            className="block text-sm font-medium text-text-on-dark-muted mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="inline-name"
            name="name"
            required
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="inline-email"
            className="block text-sm font-medium text-text-on-dark-muted mb-2"
          >
            Work Email *
          </label>
          <input
            type="email"
            id="inline-email"
            name="email"
            required
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="inline-company"
            className="block text-sm font-medium text-text-on-dark-muted mb-2"
          >
            Company *
          </label>
          <input
            type="text"
            id="inline-company"
            name="company"
            required
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your company"
          />
        </div>
        <div>
          <label
            htmlFor="inline-role"
            className="block text-sm font-medium text-text-on-dark-muted mb-2"
          >
            Role
          </label>
          <input
            type="text"
            id="inline-role"
            name="role"
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your role"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="inline-message"
          className="block text-sm font-medium text-text-on-dark-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="inline-message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        className="w-full sm:w-auto bg-certifyd-blue text-white px-8 py-3 rounded-sm font-heading font-medium hover:bg-certifyd-blue-light transition-colors"
      >
        Get in Touch
      </button>
    </form>
  );
}

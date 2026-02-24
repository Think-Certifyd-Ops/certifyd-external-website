"use client";

import { useState } from "react";

const INDUSTRIES = [
  "Recruitment",
  "Trades & Home Services",
  "Care & Social Care",
  "Temporary Staffing",
  "Insurance",
  "Financial Services",
  "Government",
  "Other",
];

const INTERESTS = [
  "Book a Demo",
  "General Enquiry",
  "Partnership",
  "Investor Interest",
  "Press / Media",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  if (submitted) {
    return (
      <div className="bg-white border border-warm-border rounded-sm p-12 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-accent-success/10 flex items-center justify-center mb-6">
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
        <h3 className="font-heading text-2xl font-bold text-text-on-light mb-2">
          Message sent
        </h3>
        <p className="text-text-on-light-muted">
          We typically respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
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
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-on-light mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-on-light mb-2"
          >
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-text-on-light mb-2"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your company"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-text-on-light mb-2"
          >
            Role / Job Title
          </label>
          <input
            type="text"
            id="role"
            name="role"
            className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            placeholder="Your role"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-text-on-light mb-2"
        >
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light focus:outline-none focus:border-certifyd-blue transition-colors"
        >
          <option value="">Select your industry</option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-text-on-light mb-2"
        >
          I&apos;m interested in
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light focus:outline-none focus:border-certifyd-blue transition-colors"
        >
          <option value="">Select your interest</option>
          {INTERESTS.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-on-light mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-warm-border rounded-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        className="w-full md:w-auto bg-certifyd-blue text-white px-8 py-3 rounded-sm font-medium hover:bg-certifyd-blue-light transition-colors"
      >
        Get in Touch
      </button>
    </form>
  );
}

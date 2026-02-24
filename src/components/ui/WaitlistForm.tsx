"use client";

import { useState, useRef } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const hpRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          hp: hpRef.current?.value || "",
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-2 text-accent-success ${className || ""}`}>
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
        <span className="font-heading font-medium text-sm">
          You&rsquo;re on the list &mdash; we&rsquo;ll be in touch
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-lg"
      >
        {/* Honeypot — hidden from humans, filled by bots */}
        <input
          ref={hpRef}
          type="text"
          name="hp"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@company.com"
          required
          className="flex-1 px-4 py-3 bg-navy-light border border-navy-border rounded-sm text-white placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors text-sm"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-light transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Joining\u2026" : "Join the waitlist"}
        </button>
      </form>

      {status === "error" && (
        <p className="text-xs text-red-400 mt-2">{errorMsg}</p>
      )}
    </div>
  );
}

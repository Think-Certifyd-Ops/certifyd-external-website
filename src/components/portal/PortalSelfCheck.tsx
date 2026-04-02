"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const QUESTIONS = [
  "Do you have copies of every employee's Right to Work documents?",
  "Are Right to Work checks completed before the employee's first day?",
  "Do you know which documents expire in the next 30 days?",
  "Are follow-up checks scheduled for time-limited right to work holders?",
  "Could you produce a full audit report right now?",
  "Is your checking process consistent and documented?",
  "Do you track visa and BRP expiry dates automatically?",
  "Could you show an auditor every check you've performed in the last 12 months?",
];

export function PortalSelfCheck() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({});

  const answeredCount = Object.values(answers).filter(
    (v) => v !== null
  ).length;
  const yesCount = Object.values(answers).filter((v) => v === true).length;
  const noCount = Object.values(answers).filter((v) => v === false).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  function toggle(index: number, value: boolean) {
    setAnswers((prev) => ({
      ...prev,
      [index]: prev[index] === value ? null : value,
    }));
  }

  function getResult() {
    if (!allAnswered) return null;
    if (noCount === 0)
      return {
        level: "good" as const,
        message:
          "You're in good shape — but staying compliant takes ongoing effort. Portal keeps you there automatically.",
      };
    if (noCount <= 3)
      return {
        level: "warning" as const,
        message:
          "You have compliance gaps that could leave your business exposed. Portal can help close them.",
      };
    return {
      level: "risk" as const,
      message:
        "Your business may have significant compliance gaps. Most businesses in your position don't find out until it's too late.",
    };
  }

  const result = getResult();

  return (
    <div>
      <div className="space-y-3">
        {QUESTIONS.map((q, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 p-4 rounded-sm border transition-all duration-200 ${
              answers[i] === true
                ? "border-accent-success/30 bg-accent-success/5"
                : answers[i] === false
                  ? "border-accent-warning/30 bg-accent-warning/5"
                  : "border-navy-border bg-navy-light/50"
            }`}
          >
            <span className="font-heading text-sm text-text-on-dark-muted shrink-0 w-5 pt-0.5 text-right">
              {i + 1}.
            </span>
            <p className="font-heading text-sm font-medium text-text-on-dark flex-1 leading-snug pt-0.5">
              {q}
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => toggle(i, true)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  answers[i] === true
                    ? "bg-accent-success text-white"
                    : "bg-navy-lighter text-text-on-dark-muted hover:text-white"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => toggle(i, false)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  answers[i] === false
                    ? "bg-accent-warning text-white"
                    : "bg-navy-lighter text-text-on-dark-muted hover:text-white"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      {allAnswered && result && (
        <div
          className={`mt-8 p-6 rounded-sm border ${
            result.level === "good"
              ? "border-accent-success/30 bg-accent-success/10"
              : result.level === "warning"
                ? "border-accent-warning/30 bg-accent-warning/10"
                : "border-red-500/30 bg-red-500/10"
          }`}
        >
          <div className="flex items-start gap-3">
            {result.level === "good" ? (
              <svg
                className="w-5 h-5 text-accent-success shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-accent-warning shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            )}
            <div>
              <p className="text-sm text-text-on-dark leading-relaxed">
                {result.message}
              </p>
              <p className="text-xs text-text-on-dark-muted/60 mt-2">
                This is a general indicator only and does not constitute legal
                or compliance advice.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      {answeredCount > 0 && !allAnswered && (
        <p className="text-xs text-text-on-dark-muted mt-4">
          {answeredCount} of {QUESTIONS.length} answered
        </p>
      )}
      {allAnswered && (
        <p className="text-xs text-text-on-dark-muted mt-4">
          {yesCount}/{QUESTIONS.length} &mdash;{" "}
          {yesCount === QUESTIONS.length
            ? "Fully aligned"
            : `${noCount} gap${noCount !== 1 ? "s" : ""} identified`}
        </p>
      )}

      <div className="mt-8">
        <Button href="/contact/" size="lg">
          Book a demo
        </Button>
      </div>
    </div>
  );
}

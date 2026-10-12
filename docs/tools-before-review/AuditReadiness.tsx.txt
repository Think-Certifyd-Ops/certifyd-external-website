"use client";

import { useState } from "react";
import { FWA_TIMELINE, ENFORCEMENT, formatNumber, formatGBP } from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

interface Question {
  text: string;
  weight: 1 | 2 | 3;
}

const QUESTIONS: Question[] = [
  { text: "Do you have copies of every employee's Right to Work documents?", weight: 3 },
  { text: "Are RTW checks completed before the employee's first day?", weight: 3 },
  { text: "Do you know which documents expire in the next 30 days?", weight: 2 },
  { text: "Are follow-up checks scheduled for time-limited right to work holders?", weight: 3 },
  { text: "Could you produce a full audit report within 24 hours?", weight: 3 },
  { text: "Is your checking process consistent across all hiring managers?", weight: 2 },
  { text: "Do you track visa and BRP expiry dates automatically?", weight: 2 },
  { text: "Could you show an auditor every check performed in the last 2 years?", weight: 3 },
  { text: "Do you have a designated compliance officer or RTW lead?", weight: 1 },
  { text: "Are you prepared for the Fair Work Agency's enforcement powers?", weight: 2 },
  { text: "Do you verify identity documents against the Home Office online checking service?", weight: 2 },
  { text: "Are your RTW records stored securely with controlled access?", weight: 2 },
  { text: "Do you have a process for when a follow-up check reveals an expired right to work?", weight: 3 },
  { text: "Can you demonstrate you treated all candidates equally regardless of nationality?", weight: 2 },
  { text: "Do you train new hiring managers on RTW procedures within their first month?", weight: 1 },
];

const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + q.weight, 0);

type Answer = boolean | null;

interface Result {
  score: number;
  percentage: number;
  level: "ready" | "gaps" | "risk";
  label: string;
  color: string;
  strokeColor: string;
  bgColor: string;
  borderColor: string;
  gaps: { text: string; weight: number; index: number }[];
  priorityFixes: { text: string; weight: number; index: number }[];
}

function getResult(answers: Record<number, Answer>): Result | null {
  const allAnswered = Object.values(answers).filter((v) => v !== null).length === QUESTIONS.length;
  if (!allAnswered) return null;

  let score = 0;
  const gaps: { text: string; weight: number; index: number }[] = [];

  QUESTIONS.forEach((q, i) => {
    if (answers[i] === true) {
      score += q.weight;
    } else if (answers[i] === false) {
      gaps.push({ text: q.text, weight: q.weight, index: i });
    }
  });

  const percentage = Math.round((score / MAX_SCORE) * 100);

  // Sort gaps by weight descending for priority
  const sortedGaps = [...gaps].sort((a, b) => b.weight - a.weight);
  const priorityFixes = sortedGaps.slice(0, 3);

  if (percentage >= 80) {
    return {
      score,
      percentage,
      level: "ready",
      label: "Audit Ready",
      color: "#00B368",
      strokeColor: "stroke-accent-success",
      bgColor: "bg-accent-success/10",
      borderColor: "border-accent-success/30",
      gaps: sortedGaps,
      priorityFixes,
    };
  }

  if (percentage >= 50) {
    return {
      score,
      percentage,
      level: "gaps",
      label: "Gaps Identified",
      color: "#E85D2C",
      strokeColor: "stroke-accent-warning",
      bgColor: "bg-accent-warning/10",
      borderColor: "border-accent-warning/30",
      gaps: sortedGaps,
      priorityFixes,
    };
  }

  return {
    score,
    percentage,
    level: "risk",
    label: "High Risk",
    color: "#EF4444",
    strokeColor: "stroke-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    gaps: sortedGaps,
    priorityFixes,
  };
}

function ProgressRing({ percentage, color }: { percentage: number; color: string }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg className="w-48 h-48 -rotate-90" viewBox="0 0 160 160">
        {/* Background ring */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-navy-border"
        />
        {/* Progress ring */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-4xl font-bold text-text-on-dark">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export function AuditReadiness() {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;

  function toggle(index: number, value: boolean) {
    setAnswers((prev) => ({
      ...prev,
      [index]: prev[index] === value ? null : value,
    }));
  }

  const result = getResult(answers);

  return (
    <div>
      {/* Questions */}
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
            <div className="flex-1 min-w-0">
              <p className="font-heading text-sm font-medium text-text-on-dark leading-snug pt-0.5">
                {q.text}
              </p>
              <span className="inline-block mt-1 text-[10px] font-heading text-text-on-dark-muted/60 uppercase tracking-wider">
                Weight: {q.weight === 3 ? "Critical" : q.weight === 2 ? "Important" : "Good practice"}
              </span>
            </div>
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

      {/* Progress indicator */}
      {answeredCount > 0 && !result && (
        <p className="text-xs text-text-on-dark-muted mt-4">
          {answeredCount} of {QUESTIONS.length} answered
        </p>
      )}

      {/* Results */}
      {result && (
        <div className="mt-10 space-y-8 transition-all duration-300">
          {/* Score ring */}
          <div className={`p-8 rounded-sm border ${result.borderColor} ${result.bgColor}`}>
            <div className="text-center">
              <ProgressRing percentage={result.percentage} color={result.color} />
              <p
                className="font-heading text-xl font-bold mt-4"
                style={{ color: result.color }}
              >
                {result.label}
              </p>
              <p className="text-sm text-text-on-dark-muted mt-2">
                {result.score} / {MAX_SCORE} points
              </p>
            </div>
          </div>

          {/* Priority fixes */}
          {result.priorityFixes.length > 0 && (
            <div className="bg-navy-light border border-navy-border rounded-sm p-6">
              <h3 className="font-heading text-lg font-bold text-text-on-dark mb-4">
                Priority fixes
              </h3>
              <p className="text-sm text-text-on-dark-muted mb-4">
                These are your highest-weight gaps. Fix these first to make the biggest
                impact on your audit readiness.
              </p>
              <div className="space-y-3">
                {result.priorityFixes.map((gap, i) => (
                  <div
                    key={gap.index}
                    className="flex items-start gap-3 p-3 rounded-sm bg-navy-lighter border border-navy-border"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center">
                      <span className="text-xs font-heading font-bold text-red-400">
                        {i + 1}
                      </span>
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-on-dark leading-snug">
                        {gap.text}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-heading text-red-400/80 uppercase tracking-wider">
                        {gap.weight === 3 ? "Critical" : "Important"} &middot; Weight {gap.weight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All gaps */}
          {result.gaps.length > 0 && result.gaps.length > result.priorityFixes.length && (
            <div className="bg-navy-light border border-navy-border rounded-sm p-6">
              <h3 className="font-heading text-base font-bold text-text-on-dark mb-4">
                All compliance gaps ({result.gaps.length})
              </h3>
              <div className="space-y-2">
                {result.gaps.map((gap) => (
                  <div
                    key={gap.index}
                    className="flex items-start gap-3 py-2 border-b border-navy-border/50 last:border-0"
                  >
                    <svg
                      className="w-4 h-4 text-accent-warning shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                    <p className="text-sm text-text-on-dark-muted leading-snug">
                      {gap.text}
                    </p>
                    <span className="shrink-0 text-[10px] font-heading text-text-on-dark-muted/50 uppercase tracking-wider">
                      W{gap.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result.gaps.length === 0 && (
            <div className="bg-accent-success/10 border border-accent-success/30 rounded-sm p-6 text-center">
              <p className="text-sm text-text-on-dark leading-relaxed">
                No gaps identified. Your compliance processes appear strong &mdash;
                but staying audit-ready requires continuous monitoring. Certifyd Portal
                automates the hard parts so nothing slips through.
              </p>
            </div>
          )}

          {/* FWA Timeline */}
          <div className="bg-navy-light border border-navy-border rounded-sm p-6">
            <h3 className="font-heading text-lg font-bold text-text-on-dark mb-6">
              FWA Enforcement Timeline
            </h3>
            <div className="relative pl-6 border-l-2 border-navy-border space-y-6">
              {FWA_TIMELINE.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[calc(1.5rem+5px)] w-2.5 h-2.5 rounded-full bg-certifyd-blue border-2 border-navy-light" />
                  <p className="font-heading text-xs font-medium text-certifyd-blue uppercase tracking-wider">
                    {item.date}
                  </p>
                  <p className="text-sm font-medium text-text-on-dark mt-1">
                    {item.event}
                  </p>
                  <p className="text-xs text-text-on-dark-muted mt-0.5">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Email capture */}
          <ToolEmailCapture
            source="audit-readiness"
            headline="Get your full readiness report"
            subtitle="We'll email you a detailed breakdown of your gaps with recommended actions for each."
          />

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-sm text-text-on-dark-muted mb-4">
              Certifyd Portal automates right-to-work checks, expiry tracking, and
              audit-ready reporting &mdash; so you never fail an inspection.
            </p>
            <Button href="/contact/" size="lg">
              Book a demo
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-text-on-dark-muted/60 text-center">
            This assessment is a general indicator only and does not constitute legal
            or compliance advice. Enforcement standards and audit criteria may vary.
          </p>
        </div>
      )}
    </div>
  );
}

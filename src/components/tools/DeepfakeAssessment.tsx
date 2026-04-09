"use client";

import { useState } from "react";
import {
  DEEPFAKE_STATS,
  formatNumber,
} from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface Question {
  id: number;
  text: string;
  points: number;
  /** true = "Yes" is the risky answer, false = "No" is the risky answer (inverse) */
  yesIsRisk: boolean;
  area: VulnerabilityArea;
  attackScenario: string;
}

type VulnerabilityArea =
  | "financial"
  | "remote"
  | "voice"
  | "publicExposure"
  | "preparedness";

const AREA_LABELS: Record<VulnerabilityArea, string> = {
  financial: "Financial exposure",
  remote: "Remote verification",
  voice: "Voice / audio risk",
  publicExposure: "Public exposure",
  preparedness: "Preparedness",
};

const AREA_MAX: Record<VulnerabilityArea, number> = {
  financial: 19, // Q2 (10) + Q4 (9)
  remote: 21, // Q1 (8) + Q3 (7) + Q5 (6)
  voice: 7, // Q6
  publicExposure: 9, // Q7 (5) + Q8 (4)
  preparedness: 14, // Q9 (8) + Q10 (6)
};

/* ------------------------------------------------------------------ */
/* Questions                                                           */
/* ------------------------------------------------------------------ */

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Do you verify identity via video calls (e.g. remote hiring, client onboarding)?",
    points: 8,
    yesIsRisk: true,
    area: "remote",
    attackScenario:
      "Real-time deepfake on a video call impersonating a candidate or client to gain access.",
  },
  {
    id: 2,
    text: "Do your employees handle financial transactions or approvals on video calls?",
    points: 10,
    yesIsRisk: true,
    area: "financial",
    attackScenario:
      "Deepfake impersonation of a senior executive on a video call to authorise a fraudulent payment.",
  },
  {
    id: 3,
    text: "Do you use WhatsApp or informal channels for identity verification photos?",
    points: 7,
    yesIsRisk: true,
    area: "remote",
    attackScenario:
      "AI-generated ID photos and selfies sent via messaging apps to bypass informal checks.",
  },
  {
    id: 4,
    text: "Can a single person authorise payments above \u00a310,000 without in-person verification?",
    points: 9,
    yesIsRisk: true,
    area: "financial",
    attackScenario:
      "Deepfake voice call or video impersonating the CFO to a finance officer, authorising an urgent transfer.",
  },
  {
    id: 5,
    text: "Do you have remote workers who have never been verified in person?",
    points: 6,
    yesIsRisk: true,
    area: "remote",
    attackScenario:
      "A synthetic identity joins as a remote hire, passes video screening with AI-generated face, and accesses internal systems.",
  },
  {
    id: 6,
    text: "Do you use voice-only calls for authorisation (e.g. phone banking, callback verification)?",
    points: 7,
    yesIsRisk: true,
    area: "voice",
    attackScenario:
      "AI voice clone of a director or account holder used on a phone call to authorise actions.",
  },
  {
    id: 7,
    text: "Is your CEO or CFO\u2019s face/voice publicly available (conferences, YouTube, podcasts)?",
    points: 5,
    yesIsRisk: true,
    area: "publicExposure",
    attackScenario:
      "Public footage used to train a deepfake model of your executive for targeted spear-phishing.",
  },
  {
    id: 8,
    text: "Do you operate across multiple time zones where real-time human verification is impractical?",
    points: 4,
    yesIsRisk: true,
    area: "publicExposure",
    attackScenario:
      "Attackers exploit time zone gaps to impersonate colleagues when the real person is asleep or offline.",
  },
  {
    id: 9,
    text: "Do you have a deepfake detection or identity challenge protocol?",
    points: 8,
    yesIsRisk: false, // inverse: "No" is the risk
    area: "preparedness",
    attackScenario:
      "No detection protocol means deepfake attacks go unnoticed until money has left the account.",
  },
  {
    id: 10,
    text: "Have your staff received training on deepfake awareness in the last 12 months?",
    points: 6,
    yesIsRisk: false, // inverse: "No" is the risk
    area: "preparedness",
    attackScenario:
      "Untrained staff are unable to recognise artefacts or behavioural cues of real-time deepfakes.",
  },
];

const MAX_SCORE = 70;

type RiskLevel = "low" | "medium" | "high" | "critical";

function getRiskLevel(score: number): {
  level: RiskLevel;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
} {
  if (score <= 20)
    return {
      level: "low",
      label: "Low Risk",
      color: "text-accent-success",
      bgColor: "bg-accent-success/15",
      borderColor: "border-accent-success/30",
    };
  if (score <= 40)
    return {
      level: "medium",
      label: "Medium Risk",
      color: "text-accent-warning",
      bgColor: "bg-accent-warning/15",
      borderColor: "border-accent-warning/30",
    };
  if (score <= 55)
    return {
      level: "high",
      label: "High Risk",
      color: "text-red-400",
      bgColor: "bg-red-400/15",
      borderColor: "border-red-400/30",
    };
  return {
    level: "critical",
    label: "Critical Risk",
    color: "text-red-500",
    bgColor: "bg-red-500/15",
    borderColor: "border-red-500/30",
  };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function DeepfakeAssessment() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>(
    () => Object.fromEntries(QUESTIONS.map((q) => [q.id, null]))
  );
  const [showResults, setShowResults] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== null);

  function answer(id: number, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function calculateScore(): number {
    let score = 0;
    for (const q of QUESTIONS) {
      const a = answers[q.id];
      if (a === null) continue;
      if (q.yesIsRisk && a === true) score += q.points;
      if (!q.yesIsRisk && a === false) score += q.points;
    }
    return score;
  }

  function getAreaScore(area: VulnerabilityArea): number {
    let score = 0;
    for (const q of QUESTIONS) {
      if (q.area !== area) continue;
      const a = answers[q.id];
      if (a === null) continue;
      if (q.yesIsRisk && a === true) score += q.points;
      if (!q.yesIsRisk && a === false) score += q.points;
    }
    return score;
  }

  function getVulnerableScenarios(): Question[] {
    return QUESTIONS.filter((q) => {
      const a = answers[q.id];
      if (a === null) return false;
      return (q.yesIsRisk && a === true) || (!q.yesIsRisk && a === false);
    });
  }

  function handleCalculate() {
    if (!allAnswered) return;
    setShowResults(true);
  }

  const score = calculateScore();
  const risk = getRiskLevel(score);

  return (
    <div>
      {/* Quiz form */}
      <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
        <h2 className="font-heading text-xl font-bold text-text-on-dark mb-2">
          Assess your vulnerability
        </h2>
        <p className="text-sm text-text-on-dark-muted mb-8">
          Answer all 10 questions honestly. Your score is calculated instantly
          &mdash; no data leaves your browser.
        </p>

        <div className="space-y-6">
          {QUESTIONS.map((q, idx) => (
            <div
              key={q.id}
              className="bg-navy-lighter/50 border border-navy-border rounded-sm p-5"
            >
              <div className="flex items-start gap-4">
                <span className="font-heading text-xs font-bold text-text-on-dark-muted bg-navy-lighter border border-navy-border rounded-sm w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-on-dark mb-3">
                    {q.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => answer(q.id, true)}
                      className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                        answers[q.id] === true
                          ? q.yesIsRisk
                            ? "bg-accent-warning text-white"
                            : "bg-accent-success text-white"
                          : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => answer(q.id, false)}
                      className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                        answers[q.id] === false
                          ? !q.yesIsRisk
                            ? "bg-accent-warning text-white"
                            : "bg-accent-success text-white"
                          : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calculate button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!allAnswered}
            className="w-full bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading font-medium hover:bg-certifyd-blue-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {allAnswered
              ? "Calculate vulnerability score"
              : `Answer all questions (${QUESTIONS.filter((q) => answers[q.id] !== null).length}/${QUESTIONS.length})`}
          </button>
        </div>
      </div>

      {/* Results */}
      <div
        className={`transition-all duration-300 ${
          showResults
            ? "opacity-100 mt-8"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {showResults && (
          <div className="space-y-6">
            {/* Headline score */}
            <div
              className={`${risk.bgColor} border ${risk.borderColor} rounded-sm p-6 lg:p-8 text-center`}
            >
              <p className="text-sm font-medium text-text-on-dark-muted uppercase tracking-wider mb-2">
                Deepfake vulnerability score
              </p>
              <p className={`font-heading text-5xl lg:text-6xl font-bold ${risk.color}`}>
                {score}
                <span className="text-2xl lg:text-3xl text-text-on-dark-muted">
                  /{MAX_SCORE}
                </span>
              </p>
              <span
                className={`inline-block mt-3 px-4 py-1.5 rounded-sm text-sm font-heading font-bold ${risk.bgColor} ${risk.color} border ${risk.borderColor}`}
              >
                {risk.label}
              </span>
            </div>

            {/* Radar-style area breakdown */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
              <h3 className="font-heading text-lg font-bold text-text-on-dark mb-6">
                Vulnerability breakdown
              </h3>
              <div className="space-y-4">
                {(Object.keys(AREA_LABELS) as VulnerabilityArea[]).map(
                  (area) => {
                    const areaScore = getAreaScore(area);
                    const areaMax = AREA_MAX[area];
                    const pct = areaMax > 0 ? (areaScore / areaMax) * 100 : 0;
                    const barRisk = getRiskLevel(
                      (areaScore / areaMax) * MAX_SCORE
                    );
                    return (
                      <div key={area}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-text-on-dark">
                            {AREA_LABELS[area]}
                          </span>
                          <span
                            className={`text-sm font-heading font-bold ${barRisk.color}`}
                          >
                            {areaScore}/{areaMax}
                          </span>
                        </div>
                        <div className="h-2 bg-navy-lighter rounded-sm overflow-hidden">
                          <div
                            className={`h-full rounded-sm transition-all duration-500 ${
                              pct <= 30
                                ? "bg-accent-success"
                                : pct <= 60
                                  ? "bg-accent-warning"
                                  : "bg-red-400"
                            }`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Arup case study callout */}
            <div className="bg-red-400/10 border border-red-400/30 rounded-sm p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-400/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-red-400"
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
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-text-on-dark mb-1">
                    Real-world case: Arup lost $
                    {formatNumber(DEEPFAKE_STATS.arup25mFraud / 1_000_000)}M in a
                    single deepfake video call (2024)
                  </h3>
                  <p className="text-sm text-text-on-dark-muted">
                    Engineering firm Arup was defrauded of $25 million when an employee
                    joined a video call with deepfake recreations of the CFO and other
                    senior executives. The employee believed the call was genuine and
                    authorised 15 transfers. Every participant on the call except the
                    victim was AI-generated.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  Deepfakes detected (2025)
                </p>
                <p className="font-heading text-2xl font-bold text-text-on-dark">
                  {formatNumber(DEEPFAKE_STATS.detectedDeepfakes2025)}
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  Up from {formatNumber(DEEPFAKE_STATS.detectedDeepfakes2023)} in
                  2023 ({DEEPFAKE_STATS.growthRate}x increase)
                </p>
              </div>
              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  Human detection accuracy
                </p>
                <p className="font-heading text-2xl font-bold text-accent-warning">
                  {(DEEPFAKE_STATS.humanDetectionAccuracy * 100).toFixed(1)}%
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  Drops further in real-world (non-lab) conditions
                </p>
              </div>
              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  EU AI Act deadline
                </p>
                <p className="font-heading text-2xl font-bold text-text-on-dark">
                  {DEEPFAKE_STATS.euAiActDeadline}
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  Mandatory deepfake disclosure &mdash; fines up to 6% of global
                  revenue
                </p>
              </div>
            </div>

            {/* Attack scenarios */}
            {getVulnerableScenarios().length > 0 && (
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
                <h3 className="font-heading text-lg font-bold text-text-on-dark mb-1">
                  Attack scenarios your business is vulnerable to
                </h3>
                <p className="text-sm text-text-on-dark-muted mb-5">
                  Based on your answers, these are the most likely ways a
                  deepfake attack could target your organisation.
                </p>
                <div className="space-y-3">
                  {getVulnerableScenarios().map((q) => (
                    <div
                      key={q.id}
                      className="flex items-start gap-3 bg-navy-lighter/50 border border-navy-border rounded-sm p-4"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-400/15 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m0 3.75h.008v.008H12v-.008ZM21.75 12a9.75 9.75 0 1 1-19.5 0 9.75 9.75 0 0 1 19.5 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-on-dark">
                          {q.attackScenario}
                        </p>
                        <p className="text-xs text-text-on-dark-muted mt-1">
                          Triggered by Q{q.id}: {q.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Email capture */}
            <ToolEmailCapture
              source="deepfake-assessment"
              headline="Get your full vulnerability report"
              subtitle="We'll email you this assessment with remediation guidance for each vulnerability area."
            />

            {/* CTA */}
            <div className="text-center pt-4">
              <p className="text-text-on-dark-muted text-sm mb-4">
                Certifyd Sentinel detects deepfakes in real time &mdash;
                protecting video calls, onboarding, and identity verification.
              </p>
              <Button variant="primary" size="lg" href="/contact/">
                Book a demo
              </Button>
            </div>

            {/* Sources */}
            <div className="pt-4 border-t border-navy-border">
              <p className="text-xs text-text-on-dark-muted">
                <strong>Sources:</strong> Sumsub Identity Fraud Report 2024;
                University College London deepfake detection study (2024);
                Arup incident reported by South China Morning Post (Feb 2024);
                EU Artificial Intelligence Act, Article 50(2). This assessment
                is for informational purposes and does not constitute security
                advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

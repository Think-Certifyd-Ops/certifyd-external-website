"use client";

import { useState } from "react";
import {
  COST_BENCHMARKS,
  SOURCES,
  formatGBP,
  formatNumber,
} from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

const CURRENT_METHODS = [
  { label: "Paper-based", value: "paper" },
  { label: "Spreadsheet", value: "spreadsheet" },
  { label: "Basic digital tool", value: "basic-digital" },
  { label: "Competitor platform", value: "competitor" },
];

interface CalculationResult {
  hiresPerMonth: number;
  minutesPerCheck: number;
  hrRate: number;
  currentMethod: string;
  annualChecks: number;
  manualCostPerCheck: number;
  annualManualCost: number;
  annualCertifydCost: number;
  annualSaving: number;
  hoursWasted: number;
  checksWithErrors: number;
  missedFollowUps: number;
}

export function CostCalculator() {
  const [hiresPerMonth, setHiresPerMonth] = useState<string>("");
  const [minutesPerCheck, setMinutesPerCheck] = useState<string>(
    String(COST_BENCHMARKS.avgMinutesPerCheck)
  );
  const [hrRate, setHrRate] = useState<string>(
    String(COST_BENCHMARKS.avgHrHourlyRate)
  );
  const [currentMethod, setCurrentMethod] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  function calculate() {
    const hires = parseInt(hiresPerMonth, 10);
    const mins = parseFloat(minutesPerCheck);
    const rate = parseFloat(hrRate);
    if (!hires || hires < 1 || !mins || !rate || !currentMethod) return;

    const annualChecks = hires * 12;
    const manualCostPerCheck =
      (mins / 60) * rate + COST_BENCHMARKS.avgCostPerPaperCheck;
    const annualManualCost = annualChecks * manualCostPerCheck;
    const annualCertifydCost = Math.max(
      annualChecks * COST_BENCHMARKS.certifydCostPerCheck,
      COST_BENCHMARKS.certifydMonthly * 12
    );
    const annualSaving = annualManualCost - annualCertifydCost;
    const hoursWasted = (annualChecks * mins) / 60;
    const checksWithErrors = Math.round(
      annualChecks * COST_BENCHMARKS.manualErrorRate
    );
    const missedFollowUps = Math.round(
      annualChecks * COST_BENCHMARKS.followUpMissRate
    );

    setResult({
      hiresPerMonth: hires,
      minutesPerCheck: mins,
      hrRate: rate,
      currentMethod,
      annualChecks,
      manualCostPerCheck,
      annualManualCost,
      annualCertifydCost,
      annualSaving,
      hoursWasted,
      checksWithErrors,
      missedFollowUps,
    });
    setShowResults(true);
  }

  const isValid =
    hiresPerMonth &&
    parseInt(hiresPerMonth, 10) >= 1 &&
    minutesPerCheck &&
    hrRate &&
    currentMethod;

  return (
    <div>
      {/* Calculator form */}
      <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
        <h2 className="font-heading text-xl font-bold text-text-on-dark mb-6">
          Calculate your costs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hires per month */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              New hires per month
            </label>
            <input
              type="number"
              min={1}
              value={hiresPerMonth}
              onChange={(e) => setHiresPerMonth(e.target.value)}
              placeholder="e.g. 15"
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            />
          </div>

          {/* Minutes per check */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Minutes per RTW check
            </label>
            <input
              type="number"
              min={1}
              value={minutesPerCheck}
              onChange={(e) => setMinutesPerCheck(e.target.value)}
              placeholder="22"
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            />
          </div>

          {/* HR hourly rate */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              HR hourly rate
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-on-dark-muted text-sm">
                &pound;
              </span>
              <input
                type="number"
                min={1}
                step={0.5}
                value={hrRate}
                onChange={(e) => setHrRate(e.target.value)}
                placeholder="18.50"
                className="w-full pl-8 pr-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
              />
            </div>
          </div>

          {/* Current method */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Current verification method
            </label>
            <select
              value={currentMethod}
              onChange={(e) => setCurrentMethod(e.target.value)}
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark focus:outline-none focus:border-certifyd-blue transition-colors"
            >
              <option value="" disabled>
                Select current method
              </option>
              {CURRENT_METHODS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Calculate button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={calculate}
            disabled={!isValid}
            className="w-full bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading font-medium hover:bg-certifyd-blue-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calculate savings
          </button>
        </div>
      </div>

      {/* Results */}
      <div
        className={`transition-all duration-300 ${
          showResults && result
            ? "opacity-100 mt-8"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        {result && (
          <div className="space-y-6">
            {/* Headline saving */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8 text-center">
              <p className="text-sm font-medium text-text-on-dark-muted uppercase tracking-wider mb-2">
                Annual saving with Certifyd
              </p>
              <p className="font-heading text-5xl lg:text-6xl font-bold text-accent-success">
                {result.annualSaving > 0
                  ? `Save ${formatGBP(result.annualSaving)}/year`
                  : formatGBP(result.annualSaving)}
              </p>
              <p className="text-text-on-dark-muted mt-3 text-sm">
                Based on {formatNumber(result.annualChecks)} checks per year at{" "}
                {formatGBP(result.manualCostPerCheck)} per manual check
              </p>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Current process */}
              <div className="bg-navy-light border border-accent-warning/30 rounded-sm p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent-warning" />
                  <h3 className="font-heading text-sm font-bold text-text-on-dark uppercase tracking-wider">
                    Current process
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Annual cost
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-warning">
                      {formatGBP(result.annualManualCost)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Time spent per year
                    </p>
                    <p className="font-heading text-2xl font-bold text-text-on-dark">
                      {formatNumber(Math.round(result.hoursWasted))} hours
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Checks with errors
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-warning">
                      {formatNumber(result.checksWithErrors)}
                    </p>
                    <p className="text-xs text-text-on-dark-muted">
                      {Math.round(COST_BENCHMARKS.manualErrorRate * 100)}% error
                      rate
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Missed follow-ups
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-warning">
                      {formatNumber(result.missedFollowUps)}
                    </p>
                    <p className="text-xs text-text-on-dark-muted">
                      {Math.round(COST_BENCHMARKS.followUpMissRate * 100)}% of
                      expiring documents missed
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifyd */}
              <div className="bg-navy-light border border-accent-success/30 rounded-sm p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-accent-success" />
                  <h3 className="font-heading text-sm font-bold text-text-on-dark uppercase tracking-wider">
                    With Certifyd
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Annual cost
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-success">
                      {formatGBP(result.annualCertifydCost)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Time spent per year
                    </p>
                    <p className="font-heading text-2xl font-bold text-text-on-dark">
                      {formatNumber(
                        Math.round((result.annualChecks * 1) / 60)
                      )}{" "}
                      hours
                    </p>
                    <p className="text-xs text-text-on-dark-muted">
                      ~1 minute per check
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Checks with errors
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-success">
                      0
                    </p>
                    <p className="text-xs text-text-on-dark-muted">
                      Automated validation eliminates manual errors
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-on-dark-muted mb-0.5">
                      Missed follow-ups
                    </p>
                    <p className="font-heading text-2xl font-bold text-accent-success">
                      0
                    </p>
                    <p className="text-xs text-text-on-dark-muted">
                      Automated expiry alerts and reminders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Time saved visualization */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6">
              <h3 className="font-heading text-sm font-bold text-text-on-dark mb-4">
                Time reclaimed per year
              </h3>
              <div className="space-y-3">
                {/* Current */}
                <div>
                  <div className="flex items-center justify-between text-xs text-text-on-dark-muted mb-1">
                    <span>Current process</span>
                    <span>
                      {formatNumber(Math.round(result.hoursWasted))} hours
                    </span>
                  </div>
                  <div className="w-full h-3 bg-navy-lighter rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-accent-warning rounded-sm transition-all duration-700"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                {/* Certifyd */}
                <div>
                  <div className="flex items-center justify-between text-xs text-text-on-dark-muted mb-1">
                    <span>With Certifyd</span>
                    <span>
                      {formatNumber(
                        Math.round((result.annualChecks * 1) / 60)
                      )}{" "}
                      hours
                    </span>
                  </div>
                  <div className="w-full h-3 bg-navy-lighter rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-accent-success rounded-sm transition-all duration-700"
                      style={{
                        width: `${Math.max(
                          2,
                          Math.round(
                            ((result.annualChecks * 1) /
                              60 /
                              result.hoursWasted) *
                              100
                          )
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-accent-success font-medium mt-4">
                That&apos;s{" "}
                {formatNumber(
                  Math.round(
                    result.hoursWasted - (result.annualChecks * 1) / 60
                  )
                )}{" "}
                hours your HR team gets back &mdash;{" "}
                {Math.round(
                  (result.hoursWasted - (result.annualChecks * 1) / 60) / 8
                )}{" "}
                working days.
              </p>
            </div>

            {/* Email capture */}
            <ToolEmailCapture
              source="cost-calculator"
              headline="Get this report emailed to you"
              subtitle="We'll send a full cost comparison breakdown, including a business case summary you can share with your team."
            />

            {/* CTA */}
            <div className="text-center pt-4">
              <p className="text-text-on-dark-muted text-sm mb-4">
                See Certifyd in action. 15 minutes, no obligation.
              </p>
              <Button variant="primary" size="lg" href="/contact/">
                Book a demo
              </Button>
            </div>

            {/* Sources */}
            <div className="pt-4 border-t border-navy-border">
              <p className="text-xs text-text-on-dark-muted">
                <strong>Sources:</strong>{" "}
                <a
                  href={SOURCES.homeOfficeVisits.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-text-on-dark transition-colors"
                >
                  {SOURCES.homeOfficeVisits.title}
                </a>
                ;{" "}
                <a
                  href={SOURCES.hmrcNmw.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-text-on-dark transition-colors"
                >
                  {SOURCES.hmrcNmw.title}
                </a>
                . Cost benchmarks based on industry averages. Certifyd pricing
                is indicative &mdash; contact us for a tailored quote.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

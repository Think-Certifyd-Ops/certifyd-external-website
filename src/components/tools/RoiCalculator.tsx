"use client";

import { useState } from "react";
import {
  COST_BENCHMARKS,
  PENALTIES,
  formatGBP,
  formatNumber,
} from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface RoiResult {
  annualCheckVolume: number;
  timeSavedPerCheck: number;
  labourSaving: number;
  errorReduction: number;
  penaltyRiskReduction: number;
  missedFollowUpRisk: number;
  totalAnnualBenefit: number;
  certifydAnnualCost: number;
  currentSpend: number;
  netSaving: number;
  roi: number;
  paybackDays: number;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export function RoiCalculator() {
  const [employees, setEmployees] = useState<string>("");
  const [hiresPerMonth, setHiresPerMonth] = useState<string>("");
  const [hrRate, setHrRate] = useState<string>(
    String(COST_BENCHMARKS.avgHrHourlyRate)
  );
  const [currentSpend, setCurrentSpend] = useState<string>("0");
  const [hadIncident, setHadIncident] = useState(false);
  const [hasFollowUp, setHasFollowUp] = useState(true);

  const [result, setResult] = useState<RoiResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  function calculate() {
    const emp = parseFloat(employees);
    const hires = parseFloat(hiresPerMonth);
    const rate = parseFloat(hrRate);
    const spend = parseFloat(currentSpend) || 0;

    if (!emp || emp < 1 || !hires || hires < 0 || !rate || rate < 1) return;

    const timeSavedPerCheck = COST_BENCHMARKS.avgMinutesPerCheck - 3;
    const annualCheckVolume = hires * 12 + emp * 0.15;
    const labourSaving =
      (annualCheckVolume * timeSavedPerCheck) / 60 * rate;
    const errorReduction =
      annualCheckVolume * COST_BENCHMARKS.manualErrorRate * 500;
    const penaltyRiskReduction =
      emp * 0.02 * PENALTIES.illegalWorkerFirst * 0.1;
    const missedFollowUpRisk = !hasFollowUp ? emp * 0.05 * 15_000 : 0;
    const totalAnnualBenefit =
      labourSaving +
      errorReduction +
      penaltyRiskReduction +
      missedFollowUpRisk;
    const certifydAnnualCost = Math.max(
      COST_BENCHMARKS.certifydMonthly * 12,
      annualCheckVolume * COST_BENCHMARKS.certifydCostPerCheck
    );
    const netSaving =
      totalAnnualBenefit - certifydAnnualCost + spend;
    const roi =
      ((totalAnnualBenefit - certifydAnnualCost) / certifydAnnualCost) * 100;
    const paybackDays = Math.ceil(
      (certifydAnnualCost / totalAnnualBenefit) * 365
    );

    setResult({
      annualCheckVolume: Math.round(annualCheckVolume),
      timeSavedPerCheck,
      labourSaving,
      errorReduction,
      penaltyRiskReduction,
      missedFollowUpRisk,
      totalAnnualBenefit,
      certifydAnnualCost,
      currentSpend: spend,
      netSaving,
      roi,
      paybackDays,
    });
    setShowResults(true);
  }

  const isValid =
    employees &&
    parseFloat(employees) >= 1 &&
    hiresPerMonth &&
    parseFloat(hiresPerMonth) >= 0 &&
    hrRate &&
    parseFloat(hrRate) >= 1;

  return (
    <div>
      {/* Calculator form */}
      <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
        <h2 className="font-heading text-xl font-bold text-text-on-dark mb-6">
          Calculate your ROI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Number of employees */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Number of employees
            </label>
            <input
              type="number"
              min={1}
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              placeholder="e.g. 50"
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            />
          </div>

          {/* New hires per month */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              New hires per month
            </label>
            <input
              type="number"
              min={0}
              value={hiresPerMonth}
              onChange={(e) => setHiresPerMonth(e.target.value)}
              placeholder="e.g. 5"
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
            />
          </div>

          {/* Average HR hourly rate */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Average HR hourly rate
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
                className="w-full pl-8 pr-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
              />
            </div>
          </div>

          {/* Current annual spend */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Current annual spend on verification tools
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-on-dark-muted text-sm">
                &pound;
              </span>
              <input
                type="number"
                min={0}
                value={currentSpend}
                onChange={(e) => setCurrentSpend(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
              />
            </div>
          </div>

          {/* Compliance incident toggle */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Compliance incident in the last 3 years?
            </label>
            <div className="flex items-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => setHadIncident(false)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  !hadIncident
                    ? "bg-accent-success text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setHadIncident(true)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  hadIncident
                    ? "bg-accent-warning text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Follow-up checks toggle */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Follow-up checks for time-limited workers?
            </label>
            <div className="flex items-center gap-3 mt-2">
              <button
                type="button"
                onClick={() => setHasFollowUp(true)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  hasFollowUp
                    ? "bg-accent-success text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setHasFollowUp(false)}
                className={`px-3 py-1 rounded-sm text-xs font-heading font-medium transition-colors ${
                  !hasFollowUp
                    ? "bg-accent-warning text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                No
              </button>
            </div>
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
            Calculate ROI
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
            {/* Headline ROI + payback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8 text-center">
                <p className="text-sm font-medium text-text-on-dark-muted uppercase tracking-wider mb-2">
                  Projected ROI
                </p>
                <p className="font-heading text-5xl lg:text-6xl font-bold text-accent-success">
                  {formatNumber(Math.round(result.roi))}%
                </p>
              </div>
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8 text-center">
                <p className="text-sm font-medium text-text-on-dark-muted uppercase tracking-wider mb-2">
                  Payback period
                </p>
                <p className="font-heading text-5xl lg:text-6xl font-bold text-text-on-dark">
                  {result.paybackDays}
                  <span className="text-2xl lg:text-3xl text-text-on-dark-muted">
                    {" "}
                    days
                  </span>
                </p>
              </div>
            </div>

            {/* Breakdown table */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
              <h3 className="font-heading text-lg font-bold text-text-on-dark mb-5">
                Annual savings breakdown
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-navy-border">
                  <span className="text-sm text-text-on-dark">
                    Labour savings
                    <span className="block text-xs text-text-on-dark-muted">
                      {formatNumber(result.annualCheckVolume)} checks &times;{" "}
                      {result.timeSavedPerCheck} min saved
                    </span>
                  </span>
                  <span className="font-heading text-sm font-bold text-accent-success">
                    {formatGBP(result.labourSaving)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-navy-border">
                  <span className="text-sm text-text-on-dark">
                    Error reduction
                    <span className="block text-xs text-text-on-dark-muted">
                      {(COST_BENCHMARKS.manualErrorRate * 100).toFixed(0)}% error
                      rate &times; &pound;500 avg remediation cost
                    </span>
                  </span>
                  <span className="font-heading text-sm font-bold text-accent-success">
                    {formatGBP(result.errorReduction)}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-navy-border">
                  <span className="text-sm text-text-on-dark">
                    Penalty risk reduction
                    <span className="block text-xs text-text-on-dark-muted">
                      Conservative: 2% exposure &times; 10% catch probability
                    </span>
                  </span>
                  <span className="font-heading text-sm font-bold text-accent-success">
                    {formatGBP(result.penaltyRiskReduction)}
                  </span>
                </div>

                {result.missedFollowUpRisk > 0 && (
                  <div className="flex items-center justify-between py-2 border-b border-navy-border">
                    <span className="text-sm text-text-on-dark">
                      Missed follow-up risk
                      <span className="block text-xs text-text-on-dark-muted">
                        5% of workforce &times; &pound;15,000 avg penalty
                      </span>
                    </span>
                    <span className="font-heading text-sm font-bold text-accent-warning">
                      {formatGBP(result.missedFollowUpRisk)}
                    </span>
                  </div>
                )}

                {result.currentSpend > 0 && (
                  <div className="flex items-center justify-between py-2 border-b border-navy-border">
                    <span className="text-sm text-text-on-dark">
                      Current tool cost eliminated
                    </span>
                    <span className="font-heading text-sm font-bold text-accent-success">
                      {formatGBP(result.currentSpend)}
                    </span>
                  </div>
                )}

                {/* Total benefit */}
                <div className="flex items-center justify-between py-3 bg-navy-lighter/50 rounded-sm px-3 -mx-3">
                  <span className="text-sm font-medium text-text-on-dark">
                    Total annual benefit
                  </span>
                  <span className="font-heading text-base font-bold text-text-on-dark">
                    {formatGBP(
                      result.totalAnnualBenefit + result.currentSpend
                    )}
                  </span>
                </div>

                {/* Certifyd cost */}
                <div className="flex items-center justify-between py-2 border-b border-navy-border">
                  <span className="text-sm text-text-on-dark-muted">
                    Less Certifyd annual cost
                  </span>
                  <span className="font-heading text-sm font-bold text-text-on-dark-muted">
                    &minus;{formatGBP(result.certifydAnnualCost)}
                  </span>
                </div>

                {/* Net saving */}
                <div className="flex items-center justify-between py-3 bg-accent-success/10 border border-accent-success/30 rounded-sm px-3 -mx-3">
                  <span className="text-sm font-bold text-accent-success">
                    Net annual saving
                  </span>
                  <span className="font-heading text-lg font-bold text-accent-success">
                    {formatGBP(result.netSaving)}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual comparison bar */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
              <h3 className="font-heading text-lg font-bold text-text-on-dark mb-5">
                Cost comparison
              </h3>
              {(() => {
                const currentTotal =
                  result.totalAnnualBenefit + result.currentSpend;
                const maxVal = Math.max(currentTotal, result.certifydAnnualCost);
                const currentPct =
                  maxVal > 0 ? (currentTotal / maxVal) * 100 : 0;
                const certifydPct =
                  maxVal > 0
                    ? (result.certifydAnnualCost / maxVal) * 100
                    : 0;
                return (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-on-dark">
                          Current cost of manual process
                        </span>
                        <span className="text-sm font-heading font-bold text-accent-warning">
                          {formatGBP(currentTotal)}
                        </span>
                      </div>
                      <div className="h-4 bg-navy-lighter rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-accent-warning rounded-sm transition-all duration-500"
                          style={{ width: `${currentPct}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-text-on-dark">
                          Certifyd annual cost
                        </span>
                        <span className="text-sm font-heading font-bold text-accent-success">
                          {formatGBP(result.certifydAnnualCost)}
                        </span>
                      </div>
                      <div className="h-4 bg-navy-lighter rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-accent-success rounded-sm transition-all duration-500"
                          style={{ width: `${certifydPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Email capture */}
            <ToolEmailCapture
              source="roi-calculator"
              headline="Get this ROI report emailed to you"
              subtitle="We'll send a detailed breakdown you can share with your team or finance director."
            />

            {/* CTA */}
            <div className="text-center pt-4">
              <p className="text-text-on-dark-muted text-sm mb-4">
                See these savings in action &mdash; Certifyd automates identity
                verification in under 60 seconds.
              </p>
              <Button variant="primary" size="lg" href="/contact/">
                Book a demo
              </Button>
            </div>

            {/* Sources */}
            <div className="pt-4 border-t border-navy-border">
              <p className="text-xs text-text-on-dark-muted">
                <strong>Sources:</strong> CIPD HR benchmarks 2024; Home Office
                civil penalty rates effective 13 February 2024; Certifyd
                internal platform data. Calculations are projections based on
                industry averages and do not constitute financial advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

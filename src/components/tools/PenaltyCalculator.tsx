"use client";

import { useState } from "react";
import {
  SECTORS,
  PENALTIES,
  ENFORCEMENT,
  FWA_TIMELINE,
  SOURCES,
  formatGBP,
  formatNumber,
  getSector,
} from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

const DIGITAL_OPTIONS = [
  { label: "0% — Entirely paper-based", value: 0 },
  { label: "25% — Mostly paper", value: 0.25 },
  { label: "50% — Mixed approach", value: 0.5 },
  { label: "75% — Mostly digital", value: 0.75 },
  { label: "100% — Fully digital", value: 1 },
];

interface CalculationResult {
  employees: number;
  sectorId: string;
  sectorName: string;
  digitalPercentage: number;
  previousBreach: boolean;
  unverifiedWorkers: number;
  perWorkerPenalty: number;
  worstCasePenalty: number;
  sectorVisits2025: number;
  sectorYoyGrowth: number;
}

export function PenaltyCalculator() {
  const [employees, setEmployees] = useState<string>("");
  const [sectorId, setSectorId] = useState("");
  const [digitalPercentage, setDigitalPercentage] = useState<string>("");
  const [previousBreach, setPreviousBreach] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  function calculate() {
    const emp = parseInt(employees, 10);
    if (!emp || emp < 1 || !sectorId || digitalPercentage === "") return;

    const sector = getSector(sectorId);
    if (!sector) return;

    const digPct = parseFloat(digitalPercentage);
    const unverifiedWorkers = Math.round(emp * (1 - digPct));
    const perWorkerPenalty = previousBreach
      ? PENALTIES.illegalWorkerRepeat
      : PENALTIES.illegalWorkerFirst;
    const worstCasePenalty = unverifiedWorkers * perWorkerPenalty;

    setResult({
      employees: emp,
      sectorId,
      sectorName: sector.shortName,
      digitalPercentage: digPct,
      previousBreach,
      unverifiedWorkers,
      perWorkerPenalty,
      worstCasePenalty,
      sectorVisits2025: sector.homeOfficeVisits2025,
      sectorYoyGrowth: sector.yoyGrowth,
    });
    setShowResults(true);
  }

  const isValid =
    employees &&
    parseInt(employees, 10) >= 1 &&
    sectorId &&
    digitalPercentage !== "";

  return (
    <div>
      {/* Calculator form */}
      <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8">
        <h2 className="font-heading text-xl font-bold text-text-on-dark mb-6">
          Calculate your exposure
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

          {/* Sector */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Sector
            </label>
            <select
              value={sectorId}
              onChange={(e) => setSectorId(e.target.value)}
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark focus:outline-none focus:border-certifyd-blue transition-colors"
            >
              <option value="" disabled>
                Select your sector
              </option>
              {SECTORS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Digital percentage */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Percentage verified digitally
            </label>
            <select
              value={digitalPercentage}
              onChange={(e) => setDigitalPercentage(e.target.value)}
              className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark focus:outline-none focus:border-certifyd-blue transition-colors"
            >
              <option value="" disabled>
                Select verification level
              </option>
              {DIGITAL_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Previous breach toggle */}
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Previous breach or penalty?
            </label>
            <div className="flex items-center gap-4 mt-2">
              <button
                type="button"
                onClick={() => setPreviousBreach(false)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                  !previousBreach
                    ? "bg-certifyd-blue text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setPreviousBreach(true)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                  previousBreach
                    ? "bg-accent-warning text-white"
                    : "bg-navy-lighter border border-navy-border text-text-on-dark-muted hover:border-certifyd-blue"
                }`}
              >
                Yes
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
            Calculate penalty exposure
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
            {/* Headline penalty */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-8 text-center">
              <p className="text-sm font-medium text-text-on-dark-muted uppercase tracking-wider mb-2">
                Worst-case penalty exposure
              </p>
              <p className="font-heading text-5xl lg:text-6xl font-bold text-accent-warning">
                {formatGBP(result.worstCasePenalty)}
              </p>
              <p className="text-text-on-dark-muted mt-3 text-sm">
                Based on {formatNumber(result.unverifiedWorkers)} unverified
                worker{result.unverifiedWorkers !== 1 ? "s" : ""} at{" "}
                {formatGBP(result.perWorkerPenalty)} per worker
                {result.previousBreach ? " (repeat offender rate)" : " (first offence rate)"}
              </p>
            </div>

            {/* Breakdown cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  Per-worker penalty
                </p>
                <p className="font-heading text-2xl font-bold text-text-on-dark">
                  {formatGBP(result.perWorkerPenalty)}
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  {result.previousBreach
                    ? "Repeat offence rate (Feb 2024+)"
                    : "First offence rate (Feb 2024+)"}
                </p>
              </div>

              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  Workers at risk
                </p>
                <p className="font-heading text-2xl font-bold text-accent-warning">
                  {formatNumber(result.unverifiedWorkers)}
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  of {formatNumber(result.employees)} total employees
                  unverified
                </p>
              </div>

              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <p className="text-xs font-medium text-text-on-dark-muted uppercase tracking-wider mb-1">
                  {result.sectorName} enforcement trend
                </p>
                <p className="font-heading text-2xl font-bold text-accent-warning">
                  +{Math.round(result.sectorYoyGrowth * 100)}% YoY
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  {formatNumber(result.sectorVisits2025)} Home Office visits in
                  2025
                </p>
              </div>
            </div>

            {/* FWA urgency banner */}
            <div className="bg-accent-warning/10 border border-accent-warning/30 rounded-sm p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-warning/15 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-accent-warning"
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
                    Fair Work Agency launched 7 April 2026
                  </h3>
                  <p className="text-sm text-text-on-dark-muted">
                    The FWA unifies Home Office, HMRC, EASI, and GLAA enforcement under one body.
                    Projected {formatNumber(ENFORCEMENT.projectedVisits2026)} visits in 2026 &mdash;
                    a {Math.round(((ENFORCEMENT.projectedVisits2026 - ENFORCEMENT.totalVisits2025) / ENFORCEMENT.totalVisits2025) * 100)}% increase.
                    Businesses without digital verification are the easiest targets.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {FWA_TIMELINE.slice(0, 3).map((item) => (
                      <span
                        key={item.date}
                        className="inline-block text-xs bg-accent-warning/10 border border-accent-warning/20 text-text-on-dark-muted rounded-sm px-2 py-1"
                      >
                        {item.date}: {item.event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Email capture */}
            <ToolEmailCapture
              source="penalty-calculator"
              headline="Get this report emailed to you"
              subtitle="We'll send a PDF breakdown of your penalty exposure, plus guidance on reducing your risk before the next inspection."
            />

            {/* CTA */}
            <div className="text-center pt-4">
              <p className="text-text-on-dark-muted text-sm mb-4">
                Certifyd digitises Right to Work checks in under 60 seconds &mdash; cutting your exposure to zero.
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
                  href={SOURCES.fwaLaunch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-text-on-dark transition-colors"
                >
                  {SOURCES.fwaLaunch.title}
                </a>
                . Penalty rates effective from 13 February 2024. Calculations
                represent maximum theoretical exposure and do not constitute
                legal advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

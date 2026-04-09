"use client";

import { useState } from "react";
import {
  SECTORS,
  ENFORCEMENT,
  FWA_TIMELINE,
  calculateAuditProbability,
  formatProbability,
  formatNumber,
  formatGBP,
  getSector,
  SOURCES,
  type SectorProfile,
} from "@/lib/tools/enforcement-data";
import { ToolEmailCapture } from "@/components/tools/ToolEmailCapture";
import { Button } from "@/components/ui/Button";

const REGIONS = [
  { id: "london", label: "London", multiplier: 1.3 },
  { id: "south-east", label: "South East", multiplier: 1.1 },
  { id: "other-england", label: "Other England", multiplier: 1.0 },
  { id: "scotland", label: "Scotland", multiplier: 0.8 },
  { id: "wales", label: "Wales", multiplier: 0.8 },
  { id: "northern-ireland", label: "Northern Ireland", multiplier: 0.8 },
] as const;

function getEmployeeMultiplier(count: number): number {
  if (count >= 250) return 3.0;
  if (count >= 100) return 2.0;
  if (count >= 50) return 1.5;
  return 1.0;
}

function getEmployeeBand(count: number): string {
  if (count >= 250) return "250+ employees (3.0x)";
  if (count >= 100) return "100-249 employees (2.0x)";
  if (count >= 50) return "50-99 employees (1.5x)";
  return "Under 50 employees (no adjustment)";
}

function getRiskColor(probability: number): string {
  if (probability < 0.1) return "#00B368";
  if (probability <= 0.3) return "#E85D2C";
  return "#EF4444";
}

function getRiskLabel(probability: number): string {
  if (probability < 0.1) return "Lower Risk";
  if (probability <= 0.3) return "Elevated Risk";
  return "High Risk";
}

interface CalculationResult {
  probability: number;
  projected2026: number;
  sectorAvg: number;
  nationalAvg: number;
  breakdown: { label: string; multiplier: number }[];
  sector: SectorProfile;
}

export function AuditProbability() {
  const [sectorId, setSectorId] = useState("");
  const [employees, setEmployees] = useState("");
  const [checkedFactors, setCheckedFactors] = useState<Set<string>>(new Set());
  const [sponsorLicence, setSponsorLicence] = useState(false);
  const [regionId, setRegionId] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);

  const selectedSector = sectorId ? getSector(sectorId) : undefined;

  function handleSectorChange(newSectorId: string) {
    setSectorId(newSectorId);
    setCheckedFactors(new Set());
    setResult(null);
  }

  function toggleFactor(factorId: string) {
    setCheckedFactors((prev) => {
      const next = new Set(prev);
      if (next.has(factorId)) {
        next.delete(factorId);
      } else {
        next.add(factorId);
      }
      return next;
    });
  }

  function calculate() {
    if (!selectedSector || !employees || !regionId) return;

    const employeeCount = parseInt(employees, 10);
    if (isNaN(employeeCount) || employeeCount < 1) return;

    const region = REGIONS.find((r) => r.id === regionId);
    if (!region) return;

    // Collect all multipliers
    const multipliers: number[] = [];
    const breakdown: { label: string; multiplier: number }[] = [];

    // Sector risk factors
    selectedSector.riskFactors.forEach((rf) => {
      if (checkedFactors.has(rf.id)) {
        multipliers.push(rf.multiplier);
        breakdown.push({ label: rf.label, multiplier: rf.multiplier });
      }
    });

    // Sponsor licence
    if (sponsorLicence) {
      multipliers.push(2.0);
      breakdown.push({ label: "Sponsor licence holder", multiplier: 2.0 });
    }

    // Region
    if (region.multiplier !== 1.0) {
      multipliers.push(region.multiplier);
      breakdown.push({ label: `Region: ${region.label}`, multiplier: region.multiplier });
    }

    // Employee size
    const empMult = getEmployeeMultiplier(employeeCount);
    if (empMult !== 1.0) {
      multipliers.push(empMult);
      breakdown.push({ label: getEmployeeBand(employeeCount), multiplier: empMult });
    }

    const probability = calculateAuditProbability(selectedSector.combinedAuditRate, multipliers);

    // 2026 projection
    const projectionRatio = ENFORCEMENT.projectedVisits2026 / ENFORCEMENT.totalVisits2025;
    const projected2026 = Math.min(probability * projectionRatio, 0.95);

    // National average: total visits / total businesses across all sectors
    const totalBusinesses = SECTORS.reduce((sum, s) => sum + s.totalBusinesses, 0);
    const nationalAvg = ENFORCEMENT.totalVisits2025 / totalBusinesses;

    setResult({
      probability,
      projected2026,
      sectorAvg: selectedSector.combinedAuditRate,
      nationalAvg,
      breakdown: breakdown.sort((a, b) => b.multiplier - a.multiplier),
      sector: selectedSector,
    });
  }

  const canCalculate = sectorId && employees && regionId && parseInt(employees, 10) > 0;

  return (
    <div>
      {/* Inputs */}
      <div className="space-y-6">
        {/* Sector */}
        <div>
          <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
            Your sector
          </label>
          <select
            value={sectorId}
            onChange={(e) => handleSectorChange(e.target.value)}
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark focus:outline-none focus:border-certifyd-blue transition-colors appearance-none"
          >
            <option value="" className="bg-navy-lighter">
              Select your sector
            </option>
            {SECTORS.map((s) => (
              <option key={s.id} value={s.id} className="bg-navy-lighter">
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* Employees */}
        <div>
          <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
            Number of employees
          </label>
          <input
            type="number"
            min="1"
            value={employees}
            onChange={(e) => {
              setEmployees(e.target.value);
              setResult(null);
            }}
            placeholder="e.g. 25"
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark placeholder:text-text-on-dark-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
          />
          {employees && parseInt(employees, 10) > 0 && (
            <p className="text-xs text-text-on-dark-muted/60 mt-1">
              {getEmployeeBand(parseInt(employees, 10))}
            </p>
          )}
        </div>

        {/* Risk factors */}
        {selectedSector && (
          <div>
            <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
              Risk factors for {selectedSector.shortName}
            </label>
            <p className="text-xs text-text-on-dark-muted/60 mb-3">
              Select all that apply to your business.
            </p>
            <div className="space-y-2">
              {selectedSector.riskFactors.map((rf) => (
                <button
                  key={rf.id}
                  type="button"
                  onClick={() => toggleFactor(rf.id)}
                  className={`w-full flex items-start gap-3 p-3 rounded-sm border text-left transition-all duration-200 ${
                    checkedFactors.has(rf.id)
                      ? "border-certifyd-blue/50 bg-certifyd-blue/10"
                      : "border-navy-border bg-navy-lighter hover:border-navy-border/80"
                  }`}
                >
                  <div
                    className={`shrink-0 w-5 h-5 rounded-sm border-2 flex items-center justify-center mt-0.5 transition-colors ${
                      checkedFactors.has(rf.id)
                        ? "border-certifyd-blue bg-certifyd-blue"
                        : "border-navy-border bg-navy-lighter"
                    }`}
                  >
                    {checkedFactors.has(rf.id) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-on-dark leading-snug">
                      {rf.label}
                    </p>
                    <p className="text-xs text-text-on-dark-muted mt-0.5">
                      {rf.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-heading text-text-on-dark-muted/50 uppercase tracking-wider mt-1">
                    {rf.multiplier}x
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sponsor licence */}
        <div>
          <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
            Do you hold a sponsor licence?
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setSponsorLicence(true);
                setResult(null);
              }}
              className={`px-4 py-2 rounded-sm text-sm font-heading font-medium transition-colors ${
                sponsorLicence
                  ? "bg-certifyd-blue text-white"
                  : "bg-navy-lighter text-text-on-dark-muted hover:text-white border border-navy-border"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => {
                setSponsorLicence(false);
                setResult(null);
              }}
              className={`px-4 py-2 rounded-sm text-sm font-heading font-medium transition-colors ${
                !sponsorLicence
                  ? "bg-navy-lighter text-text-on-dark border border-navy-border"
                  : "bg-navy-lighter text-text-on-dark-muted hover:text-white border border-navy-border"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-text-on-dark-muted mb-1.5">
            Geographic region
          </label>
          <select
            value={regionId}
            onChange={(e) => {
              setRegionId(e.target.value);
              setResult(null);
            }}
            className="w-full px-4 py-3 bg-navy-lighter border border-navy-border rounded-sm text-text-on-dark focus:outline-none focus:border-certifyd-blue transition-colors appearance-none"
          >
            <option value="" className="bg-navy-lighter">
              Select your region
            </option>
            {REGIONS.map((r) => (
              <option key={r.id} value={r.id} className="bg-navy-lighter">
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {/* Calculate button */}
        <button
          type="button"
          onClick={calculate}
          disabled={!canCalculate}
          className="w-full bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading font-medium hover:bg-certifyd-blue-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Calculate my probability
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-10 space-y-8 transition-all duration-300">
          {/* Main probability */}
          <div className="bg-navy-light border border-navy-border rounded-sm p-8 text-center">
            <p className="text-sm font-heading text-text-on-dark-muted uppercase tracking-wider mb-2">
              Your estimated audit probability
            </p>
            <p
              className="font-heading text-6xl lg:text-7xl font-bold"
              style={{ color: getRiskColor(result.probability) }}
            >
              {formatProbability(result.probability)}
            </p>
            <p
              className="font-heading text-lg font-medium mt-2"
              style={{ color: getRiskColor(result.probability) }}
            >
              {getRiskLabel(result.probability)}
            </p>
            {result.probability >= 0.01 && (
              <p className="text-sm text-text-on-dark-muted mt-3">
                Roughly{" "}
                <span className="font-medium text-text-on-dark">
                  1 in {Math.max(1, Math.round(1 / result.probability))}
                </span>{" "}
                businesses in your sector
              </p>
            )}
          </div>

          {/* Bar chart comparison */}
          <div className="bg-navy-light border border-navy-border rounded-sm p-6">
            <h3 className="font-heading text-base font-bold text-text-on-dark mb-6">
              How you compare
            </h3>
            <div className="space-y-4">
              {[
                {
                  label: "Your business",
                  value: result.probability,
                  color: getRiskColor(result.probability),
                  highlight: true,
                },
                {
                  label: `${result.sector.shortName} sector average`,
                  value: result.sectorAvg,
                  color: "#3380FF",
                  highlight: false,
                },
                {
                  label: "National average",
                  value: result.nationalAvg,
                  color: "#8B92A8",
                  highlight: false,
                },
              ].map((bar) => {
                const maxVal = Math.max(result.probability, result.sectorAvg, result.nationalAvg);
                const widthPct = maxVal > 0 ? Math.max(2, (bar.value / maxVal) * 100) : 0;
                return (
                  <div key={bar.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-sm ${
                          bar.highlight
                            ? "font-medium text-text-on-dark"
                            : "text-text-on-dark-muted"
                        }`}
                      >
                        {bar.label}
                      </span>
                      <span
                        className={`font-heading text-sm font-medium ${
                          bar.highlight ? "text-text-on-dark" : "text-text-on-dark-muted"
                        }`}
                      >
                        {formatProbability(bar.value)}
                      </span>
                    </div>
                    <div className="h-3 bg-navy-lighter rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm transition-all duration-700 ease-out"
                        style={{
                          width: `${widthPct}%`,
                          backgroundColor: bar.color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enforcement trajectory */}
          <div className="bg-navy-light border border-navy-border rounded-sm p-6">
            <h3 className="font-heading text-base font-bold text-text-on-dark mb-2">
              Enforcement trajectory
            </h3>
            <p className="text-xs text-text-on-dark-muted mb-6">
              Home Office enforcement visits by year
            </p>
            <div className="space-y-2">
              {ENFORCEMENT.trajectory.map((entry) => {
                const maxVisits = Math.max(
                  ...ENFORCEMENT.trajectory.map((e) => e.visits),
                  ENFORCEMENT.projectedVisits2026
                );
                const widthPct = (entry.visits / maxVisits) * 100;
                const isRecent = entry.year >= 2024;
                return (
                  <div key={entry.year} className="flex items-center gap-3">
                    <span className="font-heading text-xs text-text-on-dark-muted w-10 shrink-0">
                      {entry.year}
                    </span>
                    <div className="flex-1 h-5 bg-navy-lighter rounded-sm overflow-hidden">
                      <div
                        className={`h-full rounded-sm transition-all duration-500 ${
                          isRecent ? "bg-certifyd-blue" : "bg-certifyd-blue/40"
                        }`}
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>
                    <span
                      className={`font-heading text-xs w-16 text-right shrink-0 ${
                        isRecent ? "text-text-on-dark font-medium" : "text-text-on-dark-muted"
                      }`}
                    >
                      {formatNumber(entry.visits)}
                    </span>
                  </div>
                );
              })}
              {/* 2026 projection */}
              <div className="flex items-center gap-3">
                <span className="font-heading text-xs text-certifyd-blue font-medium w-10 shrink-0">
                  2026
                </span>
                <div className="flex-1 h-5 bg-navy-lighter rounded-sm overflow-hidden">
                  <div
                    className="h-full rounded-sm bg-certifyd-blue/25 border-r-2 border-certifyd-blue border-dashed"
                    style={{
                      width: `${(ENFORCEMENT.projectedVisits2026 / Math.max(...ENFORCEMENT.trajectory.map((e) => e.visits), ENFORCEMENT.projectedVisits2026)) * 100}%`,
                    }}
                  />
                </div>
                <span className="font-heading text-xs text-certifyd-blue font-medium w-16 text-right shrink-0">
                  ~{formatNumber(ENFORCEMENT.projectedVisits2026)}
                </span>
              </div>
              <p className="text-[10px] text-text-on-dark-muted/50 uppercase tracking-wider mt-1 pl-[52px]">
                2026 figure is a projection based on trend
              </p>
            </div>
          </div>

          {/* 2026 projection callout */}
          <div className="bg-certifyd-blue/10 border border-certifyd-blue/30 rounded-sm p-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-certifyd-blue shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
              <div>
                <p className="font-heading text-sm font-bold text-text-on-dark mb-1">
                  By 2026, your probability rises to{" "}
                  <span className="text-certifyd-blue">
                    {formatProbability(result.projected2026)}
                  </span>
                </p>
                <p className="text-xs text-text-on-dark-muted">
                  The Fair Work Agency launches in April 2026, combining HMRC NMW,
                  EASI, and GLAA enforcement under a single body. Projected{" "}
                  {formatNumber(ENFORCEMENT.projectedVisits2026)} enforcement visits
                  in 2026 (up from {formatNumber(ENFORCEMENT.totalVisits2025)} in
                  2025).
                </p>
              </div>
            </div>
          </div>

          {/* Risk factor breakdown */}
          {result.breakdown.length > 0 && (
            <div className="bg-navy-light border border-navy-border rounded-sm p-6">
              <h3 className="font-heading text-base font-bold text-text-on-dark mb-4">
                Risk factor breakdown
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-navy-border/50">
                  <span className="text-sm text-text-on-dark-muted">
                    Base rate ({result.sector.shortName})
                  </span>
                  <span className="font-heading text-sm font-medium text-text-on-dark">
                    {formatProbability(result.sectorAvg)}
                  </span>
                </div>
                {result.breakdown.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-navy-border/50 last:border-0"
                  >
                    <span className="text-sm text-text-on-dark-muted">{item.label}</span>
                    <span className="font-heading text-sm font-medium text-accent-warning">
                      {item.multiplier}x
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 mt-2 border-t border-navy-border">
                  <span className="text-sm font-medium text-text-on-dark">
                    Adjusted probability
                  </span>
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: getRiskColor(result.probability) }}
                  >
                    {formatProbability(result.probability)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Sources */}
          <div className="space-y-1.5">
            <p className="text-xs font-heading font-medium text-text-on-dark-muted uppercase tracking-wider">
              Sources
            </p>
            <div className="space-y-1">
              {[
                SOURCES.homeOfficeVisits,
                SOURCES.onsBusiness,
                SOURCES.fwaLaunch,
                SOURCES.sponsorRevocations,
              ].map((source) => (
                <p key={source.url} className="text-xs text-text-on-dark-muted">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-text-on-dark-muted/30 hover:decoration-certifyd-blue hover:text-certifyd-blue transition-colors"
                  >
                    {source.title}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Email capture */}
          <ToolEmailCapture
            source="audit-probability"
            headline="Save your probability report"
            subtitle="We'll email you a full breakdown including your risk factors, sector data, and 2026 projections."
          />

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-sm text-text-on-dark-muted mb-4">
              Certifyd Portal keeps you audit-ready with automated right-to-work
              checks, expiry alerts, and instant audit reports.
            </p>
            <Button href="/contact/" size="lg">
              Book a demo
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-text-on-dark-muted/60 text-center">
            Probabilities are estimates based on published enforcement data and
            should not be taken as guarantees. This tool does not constitute legal
            advice.
          </p>
        </div>
      )}
    </div>
  );
}

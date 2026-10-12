/**
 * UK Enforcement Data for Compliance Calculators
 *
 * All figures sourced from published government data.
 * Sources cited inline — see SOURCES constant at bottom.
 */

// ---------------------------------------------------------------------------
// Sector profiles
// ---------------------------------------------------------------------------

export interface SectorProfile {
  id: string;
  name: string;
  shortName: string;
  totalBusinesses: number;
  homeOfficeVisits2025: number;
  homeOfficeVisits2024: number;
  yoyGrowth: number; // decimal, e.g. 0.32 = 32%
  cqcInspections?: number;
  combinedAuditRate: number; // annualised, decimal
  avgWorkforce: number; // median employees for the sector
  riskFactors: RiskFactor[];
}

export interface RiskFactor {
  id: string;
  label: string;
  description: string;
  multiplier: number;
}

export const SECTORS: SectorProfile[] = [
  {
    id: "hospitality",
    name: "Hospitality (Restaurants, Takeaways, Hotels)",
    shortName: "Hospitality",
    totalBusinesses: 177_000,
    homeOfficeVisits2025: 3_559,
    homeOfficeVisits2024: 2_695,
    yoyGrowth: 0.32,
    combinedAuditRate: 0.035,
    avgWorkforce: 12,
    riskFactors: [
      { id: "sponsoredWorkers", label: "Sponsored workers", description: "Employ workers on Skilled Worker visas", multiplier: 3.0 },
      { id: "previousBreach", label: "Previous breach", description: "Previous civil penalty or compliance issue", multiplier: 5.0 },
      { id: "cashIntensive", label: "Cash-intensive", description: "Cash-heavy operation (takeaway, cafe)", multiplier: 2.0 },
      { id: "highTurnover", label: "High staff turnover", description: "Turnover above sector average", multiplier: 1.5 },
      { id: "complaintReceived", label: "Complaint / tip-off", description: "A complaint or tip-off has been received", multiplier: 8.0 },
    ],
  },
  {
    id: "care",
    name: "Care (Residential & Domiciliary)",
    shortName: "Care",
    totalBusinesses: 29_700,
    homeOfficeVisits2025: 1_331,
    homeOfficeVisits2024: 1_008,
    yoyGrowth: 0.32,
    cqcInspections: 9_000, // 2025-26 target
    combinedAuditRate: 0.122,
    avgWorkforce: 25,
    riskFactors: [
      { id: "sponsoredWorkers", label: "Sponsored care workers", description: "Employ workers on Health & Care visas", multiplier: 4.0 },
      { id: "sponsorLicence", label: "Sponsor licence holder", description: "Hold an active sponsor licence", multiplier: 3.0 },
      { id: "previousBreach", label: "Previous CQC or HO issue", description: "Previous enforcement action from any body", multiplier: 5.0 },
      { id: "cqcRequiresImprovement", label: "CQC rating below Good", description: "Rated Requires Improvement or Inadequate", multiplier: 2.5 },
      { id: "highAgencyUse", label: "Heavy agency staff use", description: "Rely on agency or temporary staff", multiplier: 2.0 },
      { id: "complaintReceived", label: "Complaint / whistleblower", description: "A complaint or whistleblower report", multiplier: 8.0 },
    ],
  },
  {
    id: "construction",
    name: "Construction",
    shortName: "Construction",
    totalBusinesses: 60_000, // with employees (385K total, mostly sole traders)
    homeOfficeVisits2025: 290,
    homeOfficeVisits2024: 118,
    yoyGrowth: 1.46,
    combinedAuditRate: 0.008,
    avgWorkforce: 15,
    riskFactors: [
      { id: "sponsoredWorkers", label: "Sponsored workers", description: "Employ workers on Skilled Worker visas", multiplier: 3.0 },
      { id: "previousBreach", label: "Previous breach", description: "Previous enforcement action", multiplier: 5.0 },
      { id: "subcontractorHeavy", label: "Heavy sub-contractor use", description: "Rely on sub-contractors or labour-only", multiplier: 2.5 },
      { id: "largeWorkforce", label: "50+ workers on site", description: "Large workforce on a single site", multiplier: 2.0 },
      { id: "complaintReceived", label: "Complaint / tip-off", description: "A complaint or tip-off has been received", multiplier: 8.0 },
    ],
  },
  {
    id: "cleaning",
    name: "Cleaning & Facilities Management",
    shortName: "Cleaning / FM",
    totalBusinesses: 25_000,
    homeOfficeVisits2025: 500,
    homeOfficeVisits2024: 300,
    yoyGrowth: 0.67,
    combinedAuditRate: 0.025,
    avgWorkforce: 20,
    riskFactors: [
      { id: "sponsoredWorkers", label: "Sponsored workers", description: "Employ workers on Skilled Worker visas", multiplier: 3.0 },
      { id: "previousBreach", label: "Previous breach", description: "Previous enforcement action", multiplier: 5.0 },
      { id: "labourProvider", label: "Labour provider (GLAA)", description: "Act as a labour provider (requires GLAA licence)", multiplier: 3.0 },
      { id: "highTurnover", label: "High staff turnover", description: "Turnover above sector average", multiplier: 2.0 },
      { id: "complaintReceived", label: "Complaint / tip-off", description: "A complaint or tip-off has been received", multiplier: 8.0 },
    ],
  },
  {
    id: "recruitment",
    name: "Recruitment & Staffing Agencies",
    shortName: "Recruitment",
    totalBusinesses: 30_000,
    homeOfficeVisits2025: 200,
    homeOfficeVisits2024: 150,
    yoyGrowth: 0.33,
    combinedAuditRate: 0.018,
    avgWorkforce: 10,
    riskFactors: [
      { id: "suppliesCare", label: "Supply to care sector", description: "Supply workers to care homes or healthcare", multiplier: 3.0 },
      { id: "sponsorLicence", label: "Sponsor licence holder", description: "Hold an active sponsor licence", multiplier: 2.5 },
      { id: "previousBreach", label: "Previous EASI/HO issue", description: "Previous enforcement action", multiplier: 5.0 },
      { id: "umbrellaScheme", label: "Umbrella company schemes", description: "Operate or use umbrella payroll structures", multiplier: 2.0 },
      { id: "complaintReceived", label: "Worker complaint / EASI referral", description: "A worker complaint or EASI referral", multiplier: 8.0 },
    ],
  },
  {
    id: "retail",
    name: "Retail (Food & Non-Food)",
    shortName: "Retail",
    totalBusinesses: 396_000,
    homeOfficeVisits2025: 3_144,
    homeOfficeVisits2024: 1_766,
    yoyGrowth: 0.78,
    combinedAuditRate: 0.012,
    avgWorkforce: 8,
    riskFactors: [
      { id: "sponsoredWorkers", label: "Sponsored workers", description: "Employ workers on Skilled Worker visas", multiplier: 3.0 },
      { id: "previousBreach", label: "Previous breach", description: "Previous enforcement action", multiplier: 5.0 },
      { id: "cashIntensive", label: "Cash-intensive", description: "Cash-heavy retail operation", multiplier: 2.0 },
      { id: "highTurnover", label: "High staff turnover", description: "Turnover above sector average", multiplier: 1.5 },
      { id: "complaintReceived", label: "Complaint / tip-off", description: "A complaint or tip-off has been received", multiplier: 8.0 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Global enforcement stats
// ---------------------------------------------------------------------------

export const ENFORCEMENT = {
  // Home Office visits (calendar year)
  totalVisits2025: 12_831,
  totalVisits2024: 8_122,
  totalVisits2023: 6_464,
  visitGrowthRate: 0.58, // 2024→2025

  // Penalties
  civilPenalties2025: 2_438,
  civilPenaltiesValue2025: 130_000_000,
  maxPenaltyFirst: 45_000,
  maxPenaltyRepeat: 60_000,

  // Arrests
  totalArrests2025: 9_008,

  // HMRC
  hmrcComplianceReviews: 30_000,
  hmrcNmwCases: 5_101,
  hmrcPlannedCaseworkers: 5_500,

  // CQC (2025-26 target)
  cqcAssessmentTarget: 9_000,
  cqcRegulatedLocations: 28_000,

  // GLAA
  glaaLicensedBusinesses: 1_138,
  glaaInspections: 168,

  // Sponsor licences
  sponsorRevocations2025: 1_948,
  sponsorRevocations2024: 937,

  // Trajectory (for projections)
  trajectory: [
    { year: 2019, visits: 6_006 },
    { year: 2020, visits: 1_732 },
    { year: 2021, visits: 1_345 },
    { year: 2022, visits: 3_768 },
    { year: 2023, visits: 6_464 },
    { year: 2024, visits: 8_122 },
    { year: 2025, visits: 12_831 },
  ],
  projectedVisits2026: 18_000,
} as const;

// ---------------------------------------------------------------------------
// Penalty rates
// ---------------------------------------------------------------------------

export const PENALTIES = {
  illegalWorkerFirst: 45_000,
  illegalWorkerRepeat: 60_000,
  nmwPenaltyRate: 2.0, // 200% of arrears
  nmwMaxPerWorker: 20_000,
} as const;

// ---------------------------------------------------------------------------
// FWA timeline
// ---------------------------------------------------------------------------

export const FWA_TIMELINE = [
  { date: "7 Apr 2026", event: "Fair Work Agency launched", detail: "Single enforcement body combining HMRC NMW, EASI, and GLAA" },
  { date: "Mid 2026", event: "Public awareness campaigns", detail: "Workers learn how to report violations directly to FWA" },
  { date: "Jan 2027", event: "Holiday pay enforcement preparation", detail: "Targeting 900,000 workers with unpaid holiday entitlements" },
  { date: "Apr 2027", event: "HMRC NMW unit transfers to FWA", detail: "5,100+ cases per year now under FWA control" },
  { date: "Mid 2027", event: "First enforcement strategy published", detail: "Public sector priorities and inspection targets" },
] as const;

// ---------------------------------------------------------------------------
// Deepfake stats
// ---------------------------------------------------------------------------

export const DEEPFAKE_STATS = {
  detectedDeepfakes2025: 8_000_000,
  detectedDeepfakes2023: 500_000,
  growthRate: 15, // 15x increase
  humanDetectionAccuracy: 0.245, // 24.5%
  labDetectionDrop: 0.45, // drops 45-50% outside lab conditions
  arup25mFraud: 25_000_000, // Arup deepfake video call fraud
  euAiActDeadline: "Aug 2026",
  euAiActFine: 0.06, // 6% global revenue
} as const;

// ---------------------------------------------------------------------------
// Cost benchmarks (for manual verification costs)
// ---------------------------------------------------------------------------

export const COST_BENCHMARKS = {
  avgMinutesPerCheck: 22,
  avgHrHourlyRate: 18.50, // UK median HR assistant
  manualErrorRate: 0.12, // 12% of manual checks have errors
  followUpMissRate: 0.34, // 34% of follow-up checks missed
  avgCostPerPaperCheck: 6.80, // materials, storage, admin
  certifydCostPerCheck: 1.20, // indicative platform cost
  certifydMonthly: 99, // indicative starting price
} as const;

// ---------------------------------------------------------------------------
// Sources (for citations on results pages)
// ---------------------------------------------------------------------------

export const SOURCES = {
  homeOfficeVisits: {
    title: "Home Office — Illegal working enforcement activity to December 2025",
    url: "https://www.gov.uk/government/publications/returns-from-the-uk-and-illegal-working-activity-since-july-2024",
  },
  onsBusiness: {
    title: "ONS — UK business activity, size and location 2025",
    url: "https://www.ons.gov.uk/businessindustryandtrade/business/activitysizeandlocation/bulletins/ukbusinessactivitysizeandlocation/2025",
  },
  cqcStateCare: {
    title: "CQC — State of Care 2024–2025",
    url: "https://www.cqc.org.uk/publications/major-report/state-care/2024-2025",
  },
  glaaAnnual: {
    title: "GLAA — Annual Report 2024–25",
    url: "https://www.gov.uk/government/publications/gangmasters-and-labour-abuse-authority-annual-report-and-accounts-2024-to-2025",
  },
  hmrcNmw: {
    title: "National Minimum Wage Enforcement Report 2024–25",
    url: "https://www.gov.uk/government/publications/national-minimum-wage-low-pay-commission-report-2024",
  },
  fwaLaunch: {
    title: "CIPD — Fair Work Agency changes under the Employment Rights Act 2025",
    url: "https://www.cipd.org/uk/knowledge/employment-law/employment-rights-act-2025-fair-work-agency/",
  },
  sponsorRevocations: {
    title: "Davenport Solicitors — Record spike in sponsor licence revocations",
    url: "https://davenportsolicitors.com/blogs/record-spike-why-the-home-office-is-revoking-so-many-sponsor-licences/",
  },
} as const;

// ---------------------------------------------------------------------------
// Calculation helpers
// ---------------------------------------------------------------------------

/** Calculate adjusted audit probability given a base rate and active risk factors */
export function calculateAuditProbability(
  baseRate: number,
  activeFactorMultipliers: number[]
): number {
  // Multiplicative model — each factor compounds the base rate
  // Cap at 95% to avoid certainty claims
  const combined = activeFactorMultipliers.reduce(
    (prob, mult) => prob * mult,
    baseRate
  );
  return Math.min(combined, 0.95);
}

/** Format a probability as a percentage string */
export function formatProbability(p: number): string {
  if (p < 0.01) return "<1%";
  if (p >= 0.95) return ">95%";
  return `${Math.round(p * 100)}%`;
}

/** Format GBP currency */
export function formatGBP(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format large numbers with commas */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-GB").format(n);
}

/** Get sector by id */
export function getSector(id: string): SectorProfile | undefined {
  return SECTORS.find((s) => s.id === id);
}

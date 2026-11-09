import roles from "@/data/regulations/roles.json";
import { SHOW_REGULATION_DRAFTS } from "@/lib/site";

export type Role = {
  n: number; role: string; aliases: string; slug: string; url: string; sector: string; sector_key: string; segment: string; wave: string; batch: string;
  regulator: string; checks: string; law: string; types: string[]; nations: string; flag: string; replaces: string; status: string;
  reviewer?: string; reviewed_on?: string;
};

export const ALL_ROLES = roles as Role[];
export const isReviewed = (r: Role) => r.status === "reviewed";

/** Roles that get a page in this build: reviewed ones always, drafts only on previews (ENG-125). */
export const PUBLISHED_ROLES = ALL_ROLES.filter((r) => isReviewed(r) || SHOW_REGULATION_DRAFTS);
export const getRole = (slug: string) => PUBLISHED_ROLES.find((r) => r.slug === slug);

export const SECTOR_ORDER = ["health", "care", "ind", "drive", "hosp", "sec", "fac", "con", "gig", "edu"];
export const SECTOR_NAMES: Record<string, string> = Object.fromEntries(ALL_ROLES.map((r) => [r.sector_key, r.sector]));
export const SEGMENT_FOR_SECTOR: Record<string, string> = {
  health: "healthcare-staffing", care: "care-providers", ind: "industrial-logistics-staffing", drive: "industrial-logistics-staffing",
  hosp: "hospitality-events", sec: "security-firms", fac: "facilities-cleaning", con: "construction", gig: "platforms-subcontractors",
};

/** The baseline every role carries, ahead of its own checks. */
export const BASELINE = [
  { name: "Identity check with photo ID", type: "Law" },
  { name: "Right to work, before the first day", type: "Law" },
];

export const TYPE_CLASS: Record<string, string> = { Law: "tag-law", "Regulator guidance": "tag-reg", "Industry scheme": "tag-industry", "Agency choice": "tag-agency" };

export function roleItems(r: Role): string[] {
  return r.checks.split(";").map((s) => s.trim()).filter(Boolean).map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}
export function lawItems(r: Role): string[] {
  return r.law.split(";").map((s) => s.trim()).filter(Boolean);
}
export function relatedRoles(r: Role, n = 4): Role[] {
  return PUBLISHED_ROLES.filter((x) => x.sector_key === r.sector_key && x.slug !== r.slug).slice(0, n);
}
export function rolesForSector(key: string): Role[] {
  return PUBLISHED_ROLES.filter((r) => r.sector_key === key || (key === "ind" && r.sector_key === "drive"));
}

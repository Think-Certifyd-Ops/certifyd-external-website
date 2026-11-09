import roles from "@/data/regulations/roles.json";
import { REGULATIONS_LIVE, SHOW_REGULATION_DRAFTS } from "@/lib/site";
import type { Guide } from "@/data/regulations/guides";

export type Role = {
  n: number; role: string; aliases: string; slug: string; url: string; sector: string; sector_key: string; segment: string; wave: string; batch: string;
  regulator: string; checks: string; law: string; types: string[]; nations: string; flag: string; replaces: string; status: string;
  reviewer?: string; reviewed_on?: string;
};

export const ALL_ROLES = roles as Role[];
export const isReviewed = (r: Role) => r.status === "reviewed";

/** When unreviewed pages were last written from the official sources. */
export const REGULATIONS_UPDATED = "6 November 2026";
/** Indexed by search engines: reviewed pages always, every page while the library is live. */
export const isIndexed = (r: Role) => isReviewed(r) || REGULATIONS_LIVE;
export const guideIndexed = (g: Guide) => g.status === "reviewed" || REGULATIONS_LIVE;
/** The amber "draft" banner only shows on previews when the library is not live. */
export const showDraftBanner = (reviewed: boolean) => !reviewed && !REGULATIONS_LIVE;

/** Roles that get a page in this build: reviewed ones always, the rest while the library is live or on previews (ENG-125). */
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

const plainName = (s: string) => s.toLowerCase().replace(/\s*\(.*?\)\s*/g, " ").trim();
/** Finds the role a shorthand like "As registered nurse" or "As labourer" points to. */
function findRole(ref: string): Role | undefined {
  const q = ref.toLowerCase().trim();
  return ALL_ROLES.find((x) => plainName(x.role) === q)
    ?? ALL_ROLES.find((x) => plainName(x.role).startsWith(q + " "))
    ?? ALL_ROLES.find((x) => plainName(x.role).endsWith(" " + q));
}
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** The role's own checks. "As <role>" items are replaced by that role's checklist, so every page is complete. */
export function roleItems(r: Role, depth = 0): string[] {
  const out: string[] = [];
  for (const part of r.checks.split(";").map((s) => s.trim()).filter(Boolean)) {
    const m = /^as (.+)$/i.exec(part);
    const base = m && depth < 3 ? findRole(m[1]) : undefined;
    if (base && base.slug !== r.slug) out.push(...roleItems(base, depth + 1));
    else out.push(cap(part));
  }
  return [...new Set(out)];
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

import type { SegmentIconKey } from "@/components/site/Icons";

export type SegmentMenuItem = { slug: string; name: string; sub: string; group: "supply" | "employ"; icon: SegmentIconKey; wave: 1 | 2 | 3; sector: string };

/** The eight segment pages, in menu order. `sector` links each one to its roles in the regulations dataset. */
export const SEGMENT_MENU: SegmentMenuItem[] = [
  { slug: "healthcare-staffing", name: "Healthcare staffing agencies", sub: "Nurses and carers cleared before the first shift", group: "supply", icon: "health", wave: 1, sector: "health" },
  { slug: "industrial-logistics-staffing", name: "Industrial and logistics staffing", sub: "Pickers, drivers and forklift drivers ready for tomorrow", group: "supply", icon: "industrial", wave: 1, sector: "ind" },
  { slug: "hospitality-events", name: "Hospitality and events staffing", sub: "Hundreds of new staff cleared before the big weekend", group: "supply", icon: "hospitality", wave: 2, sector: "hosp" },
  { slug: "platforms-subcontractors", name: "Apps and subcontractors", sub: "The person doing the job is the person you checked", group: "supply", icon: "platforms", wave: 3, sector: "gig" },
  { slug: "care-providers", name: "Care providers", sub: "Your own staff and every agency worker, in one list", group: "employ", icon: "care", wave: 1, sector: "care" },
  { slug: "security-firms", name: "Security firms", sub: "SIA licences and five years of work history, chased for you", group: "employ", icon: "security", wave: 2, sector: "sec" },
  { slug: "facilities-cleaning", name: "Facilities and cleaning", sub: "Every client's rules, for every worker you send", group: "employ", icon: "facilities", wave: 2, sector: "fac" },
  { slug: "construction", name: "Construction subcontractors", sub: "Site cards checked before anyone travels", group: "supply", icon: "construction", wave: 3, sector: "con" },
];

export type { ForPage } from "./types";

import { ROLE_PAGES } from "./roles";
import { BUSINESS_PAGES } from "./business";
import { COMPLIANCE_PAGES } from "./compliance";
import { THREAT_PAGES } from "./threats";
import { SAFEGUARDING_PAGES } from "./safeguarding";
import { SCENARIO_PAGES } from "./scenarios";

export const FOR_PAGES = [
  ...ROLE_PAGES,
  ...BUSINESS_PAGES,
  ...COMPLIANCE_PAGES,
  ...THREAT_PAGES,
  ...SAFEGUARDING_PAGES,
  ...SCENARIO_PAGES,
];

export function getAllForPages() {
  return FOR_PAGES;
}

export function getForPageBySlug(slug: string) {
  return FOR_PAGES.find((page) => page.slug === slug);
}

export function getAllForPageSlugs() {
  return FOR_PAGES.map((page) => page.slug);
}

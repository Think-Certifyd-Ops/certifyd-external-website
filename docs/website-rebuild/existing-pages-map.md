# How the existing pages fit the new structure

Draft for the programmatic SEO discussion, 6 November 2026. Nothing below has been redirected yet. The rebuild branch adds the new pages and leaves every existing route live until this map is agreed.

**Short version:** most of the old role and industry pages have a natural new home. Role pages go to `/regulations/{role}/`, and industry and business-type pages go to `/solutions/{segment}/`. The cleaner, trades and "at the door" pages stay relevant: they feed the Facilities and cleaning segment, the Construction segment and the How it works "At the door" step.

## Proposed structure

```
/                                  Home
/how-it-works/                     Ask, chase, check, record, verify at the door
/solutions/                        Index of segments
  /solutions/healthcare-staffing/          wave 1
  /solutions/industrial-logistics-staffing/ wave 1
  /solutions/care-providers/               wave 1
  /solutions/security-firms/               wave 2
  /solutions/hospitality-events/           wave 2
  /solutions/facilities-cleaning/          wave 2
  /solutions/platforms-subcontractors/     wave 3
  /solutions/construction/                 wave 3
/workers/                          For workers (invited and independent)
/regulations/                      Library hub
  /regulations/{role}/             150 roles (noindex until reviewed)
  /regulations/checks/{check}/     About 25 checks
  /regulations/changes/{change}/   Rule changes
  /regulations/tools/              Checklists and calculators (moved resources and tools)
/pricing/
/integrations/                     Kept as a page, not in the main navigation
/blog/ · /podcast/ · /about/ · /contact/ · /careers/ · /security/ · /privacy/ · /terms/ · /cookies/
```

## Route by route

Proposal codes: **Keep** (same URL, new shell) · **Move** (301 to a new URL with the same purpose) · **Merge** (301 into a broader new page) · **Retire** (already noindex; remove links, then 410 or 301).

### Product, outcome and industry pages

| Existing route | Proposal | New home | Notes |
| --- | --- | --- | --- |
| `/` | Keep | New homepage | |
| `/platform/records/` | Merge | `/how-it-works/` (Evidence section) | Expiry and review tracking becomes one step of the journey |
| `/outcomes/verified-worker-check-in/` | Merge | `/how-it-works/#at-the-door` | The door-scan story for cleaners, trades and site visitors lives here |
| `/outcomes/reduce-compliance-admin/` | Merge | `/how-it-works/` (Who does what) | |
| `/outcomes/reduce-compliance-risk/` | Merge | `/regulations/` | Risk content belongs with the rules |
| `/outcomes/import-compliance-records/` | Merge | `/integrations/` | Unlisted until integrations exist |
| `/outcomes/portable-worker-credentials/` | Merge | `/workers/` | |
| `/industries/care/` | Move | `/solutions/care-providers/` | |
| `/industries/nhs/` | Move | `/solutions/healthcare-staffing/` | |
| `/industries/recruitment/` | Merge | `/solutions/` | Splits across healthcare and industrial |
| `/industries/trades/` | Merge | `/solutions/construction/` | Wave 3 page. Until then, point to `/solutions/facilities-cleaning/` |
| `/industries/workforce/` | Merge | `/solutions/` | |
| `/products/id/`, `/products/id/demo/`, `/products/portal/demo/` | Keep, unlisted | | Check whether these are app demos still in use |
| `/contract-activation/` | Keep, unlisted | | Pilot page |
| `/3i/` | Keep (noindex) | | Historical concept |
| `/security/` | Keep | `/security/` | Restyle. Remove unconfirmed claims (ICO number, UK hosting, Cyber Essentials) until the post-raise security work is done |
| `/partners/` | Keep | | |

### `/for/` pages (20 live, 13 archived)

| Existing route | Proposal | New home |
| --- | --- | --- |
| `/for/agency-nurses/` | Move | `/regulations/registered-nurse/` |
| `/for/care-workers/` | Move | `/regulations/care-assistant/` |
| `/for/security-guards/` | Move | `/regulations/security-officer/` |
| `/for/warehouse-workers/` | Move | `/regulations/warehouse-operative/` |
| `/for/cleaners/` | Move | `/regulations/cleaner/` |
| `/for/electricians/` | Move | `/regulations/electrician/` |
| `/for/plumbers/` | Move | `/regulations/plumber/` |
| `/for/builders/` | Move | `/regulations/construction-labourer/` |
| `/for/nannies-au-pairs/` | Move | `/regulations/nanny/` |
| `/for/hospitality-staff/` | Merge | `/solutions/hospitality-events/` |
| `/for/temp-workers/` | Merge | `/solutions/industrial-logistics-staffing/` |
| `/for/cleaning-companies/` | Merge | `/solutions/facilities-cleaning/` |
| `/for/facilities-management/` | Merge | `/solutions/facilities-cleaning/` |
| `/for/hospitality-businesses/` | Merge | `/solutions/hospitality-events/` |
| `/for/contractor-verification/` | Merge | `/solutions/platforms-subcontractors/` |
| `/for/agency-worker-compliance/` | Merge | `/solutions/healthcare-staffing/` (or the industrial page, by traffic) |
| `/for/right-to-work-checks/` | Move | `/regulations/checks/right-to-work/` |
| `/for/safeguarding/` | Move | `/regulations/checks/dbs/` |
| `/for/lone-workers/` | Merge | `/how-it-works/#at-the-door` |
| `/for/remote-workers/` | Merge | `/how-it-works/` |
| 13 archived concepts (deepfakes, CEO fraud, romance scams, school pick-ups and others) | Retire | Already noindex. `/for/delivery-drivers/` → `/regulations/multi-drop-van-driver/` |

The cleaner pages show why this works: a cleaner arriving at a client site needs a role checklist (`/regulations/cleaner/`), the client-site requirements for the cleaning firm (`/solutions/facilities-cleaning/`) and the door check-in (`/how-it-works/#at-the-door`). Each has its own search intent, so one old page becomes three linked ones.

### Resources and tools

| Existing route | Proposal | New home |
| --- | --- | --- |
| `/resources/right-to-work-guide/` | Keep, relink | Listed under `/regulations/tools/`; linked from `/regulations/checks/right-to-work/` |
| `/resources/fair-work-agency-checklist/` | Keep, relink | Linked from `/regulations/changes/fair-work-agency/` |
| `/resources/recruitment-placement-evidence-checklist/` | Keep, relink | `/regulations/tools/` |
| `/resources/worker-record-review-checklist/` | Keep, relink | `/regulations/tools/` |
| `/resources/preview/*` | Keep (noindex) | |
| `/tools/penalty-calculator/` | Keep, relink | From `/regulations/changes/right-to-work-october-2026/` |
| `/tools/cost-calculator/`, `/tools/roi-calculator/` | Merge | `/pricing/` saving calculator (COM-163) |
| `/tools/audit-readiness/`, `/tools/audit-probability/` | Keep, relink | `/regulations/tools/` |
| `/tools/` | Merge | `/regulations/tools/` |

### Blog (88 posts, 33 archived)

Keep every URL. Add links from each live post to its cluster's hub page, and back:

| Cluster | Posts (examples) | Hub page |
| --- | --- | --- |
| Right to work | `right-to-work-checks-2026-update`, `right-to-work-penalties-2026`, `what-is-a-statutory-excuse-rtw`, `right-to-work-follow-up-checks` | `/regulations/checks/right-to-work/` and `/regulations/changes/right-to-work-october-2026/` |
| Agency compliance | `agency-worker-compliance-who-checks`, `recruitment-agency-compliance-risk`, `temp-worker-loophole`, `fair-work-agency-april-2026` | `/solutions/healthcare-staffing/`, `/solutions/industrial-logistics-staffing/` |
| Care | `care-home-cqc-workforce-compliance`, `domiciliary-care-worker-verification`, `safeguarding-gap-care-homes` | `/solutions/care-providers/` and the care roles |
| Facilities and trades | `cleaning-contractor-verification`, `construction-worker-verification-challenges`, `supply-chain-worker-verification` | `/solutions/facilities-cleaning/`, `/solutions/construction/` |
| Checks | `dbs-checks-vs-right-to-work-checks`, `document-fraud-spotting-guide-employers` | `/regulations/checks/dbs/`, `/regulations/checks/right-to-work/` |
| Sectors | `hospitality-right-to-work-compliance`, `education-sector-dbs-rtw-compliance`, `seasonal-worker-compliance-agriculture` | The matching segment and role pages |

The October 2026 posts already match the Home Office position (the change is not retrospective), so they need links, not rewrites.

## Programmatic SEO families

| Family | Pattern | Pages | Search intent it answers |
| --- | --- | --- | --- |
| Role | `/regulations/{role}/` | 150 | "what checks does a {role} need", "{role} DBS check", "{role} compliance requirements" |
| Check | `/regulations/checks/{check}/` | About 25 | "how long does a DBS check last", "SIA licence check" |
| Rule change | `/regulations/changes/{change}/` | 3, then one per material change | "right to work changes October 2026" |
| Role by nation | `/regulations/{role}/{nation}/` | About 40 | "care worker registration Scotland" |
| Segment | `/solutions/{segment}/` | 8 | "{sector} staffing compliance software" |

Two rules keep this from becoming thin content. A page is published only when it has reviewed content of its own (see the thin-page rule in [regulations-page-skeleton.md](regulations-page-skeleton.md)). And no family is multiplied by location. Town-level pages ("care worker checks in Leeds") would add no new facts.

## Before any redirect goes live

1. Agree this map.
2. Pull 90 days of Search Console clicks per old URL. Anything with real traffic gets a manual check of its new home.
3. Add exact 301s (slash and non-slash) to `netlify.toml`, as the October consolidation did.
4. Deploy new pages and redirects together; then check live 301s, canonicals and the sitemap, and resubmit it.

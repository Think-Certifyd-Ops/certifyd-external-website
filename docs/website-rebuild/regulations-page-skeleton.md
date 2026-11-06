# Regulations library: URL structure and page skeleton

Draft, 6 November 2026. Based on the Role-nurse and Requirements boards in the "Certifyd website wireframes" canvas, with Michael's review applied. The role list lives in [regulations-roles.md](regulations-roles.md).

## URL structure

Everything sits under `/regulations/` and is generated at build time from one dataset (`src/data/regulations/roles.json`). This replaces the wireframe's `/compliance/roles/{role}/`.

| URL | What it holds | Pages | When |
| --- | --- | --- | --- |
| `/regulations/` | Hub: search by role or check, sectors, recent rule changes, checklist tools | 1 | With the new site |
| `/regulations/{role}/` | The checks a role needs, with the official source for each | 150 drafted (batch 1: 30) | Each goes live once reviewed |
| `/regulations/checks/{check}/` | One check explained: who can do it, how long it lasts, what to keep on file | About 25 | After batch 1 |
| `/regulations/changes/{change}/` | A rule change and what to do about it | 3 to start | With the new site |
| `/regulations/{role}/{nation}/` | Scotland, Wales or Northern Ireland, where rules differ | About 40 | Wave 2 |

First three rule-change pages: right to work from 1 October 2026, the Fair Work Agency (7 April 2026), and the Oliver McGowan code (6 September 2025).

### Indexing rules

- **Drafts stay hidden.** Every role page is built, but carries `noindex, follow` and is left out of `sitemap.xml` until its `status` is `reviewed`. The hub lists only reviewed roles; drafts are reachable by direct URL for review.
- **Each page shows** its review date, reviewer and dataset release. A draft shows a "Draft: not yet reviewed" banner instead.
- **Thin pages.** 23 roles mostly repeat a parent checklist ("As registered nurse…"). Proposal: give each one its own page only if it has at least two checks of its own. Otherwise it becomes a section of the parent page, with a canonical to the parent.
- **Internal links.** Each role links to its segment page, up to 4 related roles in the same sector, and the check pages it uses. Segment pages link back to their sector's reviewed roles.
- **Structured data.** `BreadcrumbList` and `FAQPage` on every role page; `ItemList` on the hub.

## Role page skeleton: `/regulations/{role}/`

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER  Logo · How it works · Who it's for ▾ · For workers ·          │
│         Regulations · Pricing · Log in · [Book a demo]                │
├──────────────────────────────────────────────────────────────────────┤
│ 1 HERO (paper background)                                             │
│   Regulations / Healthcare / Registered nurse                         │
│   H1  What checks does a registered nurse need?                       │
│   Lead  10 checks before a registered nurse's first shift in England, │
│         with the official source for each.                            │
│   Meta  Reviewed {date} by {reviewer} · {n} official sources          │
│   [England] [Scotland] [Wales] [Northern Ireland]   ← wave 2 tabs     │
├──────────────────────────────────────────────────────────────────────┤
│ 2 THE CHECKLIST (white card)                                          │
│   ✓ Identity check with photo ID ................... [Law]           │
│   ✓ Right to work .................................. [Law]           │
│   ✓ NMC register and revalidation date ............. [Regulator]     │
│   ✓ … every check, two columns, one tag each                          │
│   Key: Law · Regulator guidance · Industry scheme · Agency choice     │
│   [ Work email ] [Email me the checklist]  → lead-magnet function     │
├──────────────────────────────────────────────────────────────────────┤
│ 3 EACH CHECK EXPLAINED (table)                                        │
│   Check | What it involves | When and how often | Type | Source       │
├──────────────────────────────────────────────────────────────────────┤
│ 4 WHAT CHANGED            │ WHERE AGENCIES SLIP                       │
│   Latest rule change for  │ 3 common mistakes, written by the         │
│   this role, linking to   │ reviewer (hidden until they supply them)  │
│   /regulations/changes/…  │                                           │
├──────────────────────────────────────────────────────────────────────┤
│ 5 HOW CERTIFYD COLLECTS IT                                            │
│   H2  We collect every check for you.                                 │
│   One message to the worker, documents on a secure page, you see      │
│   each check clear. [Book a demo] [How it works]  │  film clip 0:27–0:42│
├──────────────────────────────────────────────────────────────────────┤
│ 6 FAQ (3–5 questions, FAQPage schema)                                 │
├──────────────────────────────────────────────────────────────────────┤
│ 7 RELATED              Related roles (same sector) │ Related checks   │
├──────────────────────────────────────────────────────────────────────┤
│ 8 SOURCES AND DISCLAIMER                                              │
│   Guidance, not legal advice. Full source list with dates.            │
├──────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                │
└──────────────────────────────────────────────────────────────────────┘
```

### What changed from the wireframe

| Wireframe | Build | Why |
| --- | --- | --- |
| `/compliance/roles/{role}/` | `/regulations/{role}/` | Andrew, 6 Nov |
| Start now and Message Certifyd buttons | Book a demo (primary) and How it works | Michael: Message Certifyd isn't tested yet; we want demo calls |
| "Right-to-work checks now cover workers on contracts for services… no grace period" | "From 1 October 2026, right-to-work checks also cover worker's contracts, individual subcontractors and online platforms, for work that starts on or after that date." | Michael asked for a fact-check. The Home Office says the change is not retrospective, and no official source says "no grace period" |
| Two-colour headlines | One colour | Michael |
| "Agency nurse shifts this week" jobs strip | Hidden | Needs the Adzuna licence first |
| Three tags | Four tags (adds Industry scheme) | CSCS, Sentinel and BS 7858 aren't law or agency choice |
| `[Reviewer to confirm]` placeholders | Section hidden until filled | No placeholders on live pages |

## Hub skeleton: `/regulations/`

1. **Hero.** H1 "What checks does this role need?" Search box (role or check) with a nation picker.
2. **Sectors.** One card per sector with its count of reviewed roles, then the role cards.
3. **Checks.** A list of check pages (DBS, right to work, NMC, SIA licence, Driver CPC…).
4. **Recent rule changes.** Three cards: right to work (1 October 2026), the Fair Work Agency (7 April 2026), the Oliver McGowan code (6 September 2025).
5. **Can't find your role?** "Tell us the job title and we'll build its checklist with you." Button: Book a demo.
6. **Disclaimer.** "Guidance, not legal advice. Every guide shows its sources, review date and reviewer."

## Data fields per role

From `src/data/regulations/roles.json`. The fields marked * are still to be written per role during review.

| Field | Example | Used for |
| --- | --- | --- |
| `slug`, `role`, `aliases` | `registered-nurse`, Registered nurse (adult), agency nurse, RGN | URL, H1, title tag, search |
| `sector`, `segment`, `wave` | Healthcare, Healthcare staffing, 1 | Breadcrumb, related roles, segment links |
| `regulator` | NMC | Hero meta, check pages |
| `checks` | NMC register and revalidation date; … | Checklist card (draft summary) |
| `law`, `types` | Nursing and Midwifery Order 2001; …, [Law, Regulator guidance] | Sources, tags |
| `nations`, `flag` | Scotland: PVG | Nation tabs, reviewer notes (not shown publicly) |
| `status`, `reviewer`*, `reviewed_on`* | draft | noindex switch, review line |
| `items`* | per check: name, what it involves, when, type, source title, source URL | Checklist and the explained table |
| `faqs`*, `mistakes`* | 3–5 Q&As; 3 mistakes | FAQ, "Where agencies slip" |

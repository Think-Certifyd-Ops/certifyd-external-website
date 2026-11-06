# Certifyd website rebuild, November 2026

Branch `rebuild/website-2026-11`. Built from the "Certifyd website wireframes" canvas, with Michael's review applied.

| File | What it holds |
| --- | --- |
| [michael-review-changes.md](michael-review-changes.md) | Every change from Michael's review, ticked against the build, plus what still needs a person |
| [regulations-roles.md](regulations-roles.md) | The 150 roles for review, generated from `src/data/regulations/roles.json` |
| [regulations-page-skeleton.md](regulations-page-skeleton.md) | URL structure, indexing rules and the `/regulations/{role}/` page layout |
| [existing-pages-map.md](existing-pages-map.md) | How the current 44 routes, 33 `/for/` pages and 88 blog posts fit the new structure (for the programmatic SEO discussion) |

## What's built

| Route | Wireframe board | Notes |
| --- | --- | --- |
| `/` | Home · desktop, Home · mobile | Proof strip and library/integrations sections removed |
| `/how-it-works/` | How it works | |
| `/solutions/` and 8 × `/solutions/{segment}/` | Who it's for menu, 8 segment boards | One template; content in `src/data/site/segments.ts` |
| `/workers/` | For workers | |
| `/pricing/` | Pricing, saving calculator and FAQ | Checks-at-cost section removed |
| `/regulations/` | Requirements library hub | Renamed from /compliance/ |
| `/regulations/{role}/` (150) | Role template · agency nurse | Drafts: preview builds only, always noindex |
| `/regulations/checks/{check}/` (2) | Check template · DBS | Right to work and DBS. Drafts |
| `/regulations/changes/{change}/` (3) | Rule cards | Right to work (Oct 2026), Fair Work Agency, Oliver McGowan. Drafts |
| `/integrations/` | Integration template | Unlisted and noindex until a connection exists |
| Header, footer, mobile bar | Shared header, shared footer | Book a demo everywhere; Message Certifyd behind a switch |

Not built: the five "Start now" self-serve boards (Michael replaced Start now with Book a demo) and the live Message Certifyd flow (kept behind `NEXT_PUBLIC_MESSAGE_CERTIFYD`). Existing pages are unchanged apart from the new header and footer. No redirects have been added yet.

## Switches

| Setting | Where | Default |
| --- | --- | --- |
| Show unreviewed regulations pages | `REGULATIONS_DRAFTS=on` or any Netlify context other than `production` | On for previews, off for the live site |
| Message Certifyd | `NEXT_PUBLIC_MESSAGE_CERTIFYD=on` and `NEXT_PUBLIC_WHATSAPP_NUMBER` | Off |
| Active-worker limits | `PLAN_LIMITS` in `src/lib/site.ts` | Not set (line hidden) |
| Films | `FILMS` in `src/lib/site.ts`; drop the MP4 and VTT into `public/videos/` | Posters only |

To publish a role, set its `status` to `reviewed` and add `reviewer` and `reviewed_on` in `roles.json`. Then run `python3 scripts/build-regulations-review.py` to refresh the review list.

# Certifyd architecture review — 9 October 2026

Review branch only. Nothing deployed. This builds on the approved connected-story homepage and five original outcome pages, preserving their routes, brand, buyer narrative and worker/company record distinction.

The header exposes Platform, five Solutions, Industries, Resources, Security, Log in and Book a demo. Native disclosure controls support keyboard operation, one open group, outside click, Escape and focus restoration. Footer and older navigation data follow the same hierarchy.

`route-consolidation.json` is the seven-route disposition. Exact slash and non-slash 301s in `netlify.toml` point to final destinations; old broad blog/solution catch-alls are removed. The sponsor proxy, API routes, applications, support and legal routes remain intact. Existing consumer products stay accessible outside the primary navigation. There is no suitable workforce replacement for their distinct intent.

The original SEO strategy remains: `/platform/` owns the workforce compliance category; homepage owns brand overview; five outcome pages own specific buyer tasks; `/platform/records/` explains expiry and review tracking. Keep existing guides and sector pages. The full 183-route audit, 90-day GSC/GA evidence and searchable overview live in the Rogerson repository at `client-materials/certifyd/brand-review-2026-10-09/seo-architecture/` on `design/certifyd-brand-review-2026-10-09`.

## Validation

`npm run build`, `npx tsc --noEmit`, and `git diff --check` pass. ESLint has zero errors and 23 existing warnings. `python3 scripts/check-site-architecture.py` checks the static export: 177 pages, 168 sitemap URLs, eight connected routes, seven consolidations, zero errors. It checks exact permanent redirect configuration, final destination existence, sitemap inclusion/exclusion, self-canonicals, noindex demo metadata, one H1 on new pages and internal route links. Netlify HTTP behaviour still needs verification on the deployed hostname.

Safari review: approved static artifact 45/45 checks; integrated source 40/40 checks at 375×812, 390×844, 768×1024, 1366×768, 1440×900. Checks cover overflow, H1 count, 44px new controls, demo states and five outcome first CTAs. Desktop Solutions and mobile menu were manually checked; nested Escape closes the disclosure first, then the mobile menu and restores focus. No booking submitted.

These results do **not** certify the full hero release rule. Integrated homepage CTA is below the fold at 1366×768 (821px), and large hero diagrams extend beyond the first screen, especially on mobile. Real platform captures and complete header/hero fit at 1366×768 and 390×844 remain release work under `rogerson-4869t.6` and the original outcome proof issues. Most diagrams use fictional example records; `roles.png` is an anonymised platform capture. Do not publish this branch as a finished release without that work. Demo conversion measurement remains `rogerson-kak44`.

## Maintenance

The connected content is trusted generated HTML, matching the repository's existing marketing-HTML pattern. Route pages own metadata; `ConnectedPage` scopes behaviour; global listeners are cleaned up on unmount. `scripts/import-connected-review.py /absolute/path/to/connected-story` refreshes HTML, page metadata, header content and assets. Longest filenames are transformed first to avoid the `records.html` suffix corrupting the import route. Review diffs after generation. `node scripts/scope-connected-css.mjs /path/to/connected-story/styles.css` scopes the review stylesheet and reuses the existing heading tokens; it requires the repository's PostCSS and selector-parser dependencies.

Deploy all new destinations and their redirects together after visual proof and release gates pass. Then test live 301s/canonicals/404s, submit sitemap, inspect platform and outcomes in GSC, and compare 7/14/28-day indexing and conversion evidence. Keep permanent redirects for at least a year. See Google's official URL migration and canonical documentation linked from the overview.

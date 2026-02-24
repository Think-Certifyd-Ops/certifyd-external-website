# Certifyd External Website

## Project Overview

- **Framework:** Next.js 16 (App Router) with static export (`output: "export"`)
- **Deployment:** Netlify (static HTML in `/out`)
- **Styling:** Tailwind CSS 4
- **Blog:** MDX files in `content/blog/` rendered with `next-mdx-remote`
- **Base URL:** https://www.certifyd.io

## SEO Best Practices

When creating or editing any page or blog post, apply these standards:

### Page Metadata (TSX pages in `src/app/`)

- Every page MUST have custom `metadata` with:
  - `title` — descriptive, keyword-rich, under 60 characters
  - `description` — compelling, under 160 characters, includes primary keyword
  - `alternates: { canonical: "/page-path/" }` — trailing slash required
  - `openGraph` — title, description, url (full URL with `https://www.certifyd.io`)
- Blog posts get metadata via `generateMetadata` in `src/app/blog/[slug]/page.tsx`

### Blog Post Frontmatter (MDX files in `content/blog/`)

- Required fields: `title`, `date`, `author`, `excerpt`, `category`
- `title` — under 60 characters, keyword-rich
- `excerpt` — under 160 characters, serves as meta description
- `date` — format `YYYY-MM-DD`

### Internal & External Linking

- Every blog post should have **~3 internal links** and **1-2 external authority links**
- Internal links: cross-link to related blog posts, solution pages (`/solutions/`), and industry pages (`/industries/`)
- External links: link to authoritative sources (GOV.UK, CQC, UK Finance, CIPD, Trading Standards, Age UK, Action Fraud, FBI IC3, etc.)
- Links should be contextual and natural within the text, not forced
- Use relative paths for internal links (e.g., `/blog/post-slug/`, `/solutions/person/`)
- Use full URLs for external links with descriptive anchor text
- Solution pages and industry pages use the `RelatedContent` component for structured cross-links

### Structured Data

- Root layout includes `OrganizationSchema` and `WebSiteSchema` (in `src/components/seo/JsonLd.tsx`)
- Blog posts include `BlogPostSchema` and `BreadcrumbSchema`
- All structured data uses JSON-LD format

### Images

- Use Next.js `Image` component where possible (note: `images.unoptimized: true` in config for static export)
- All images should have descriptive `alt` text

### Sitemap & Robots

- `src/app/sitemap.ts` auto-generates sitemap with all static pages + blog posts
- `src/app/robots.ts` generates robots.txt
- Both use `export const dynamic = "force-static"` for static export compatibility

## Key Directories

- `src/app/` — Next.js App Router pages
- `src/components/` — React components (seo/, solutions/, layout/, ui/, about/, graphics/)
- `content/blog/` — MDX blog posts
- `src/lib/` — Utilities (blog.ts for post loading, constants.ts for company data)
- `public/` — Static assets

## Content Categories

Blog posts are categorised as: Company Updates, Identity, Compliance, Recruitment, Trades, Care, Workforce, Thought Leadership, Security.

## Form Submissions & Integrations

All form submissions route through **Netlify Functions** (`.mts`, v2 format) — API keys are never exposed client-side. All functions use `Netlify.env.get()` for environment variables.

| Form | Component | Function | Netlify Forms | Attio | Loops | Slack |
|---|---|---|---|---|---|---|
| **Waitlist** (email only) | `WaitlistForm` | `waitlist.mts` → `/api/waitlist` | No | No | Yes (source: `website-waitlist`) | No |
| **Contact / Demo** (full form) | `ContactForm` | `demo-enquiry.mts` | Yes (`contact`) | Yes (company + person + note) | Yes (contact) | Yes |
| **Industry pages** (full form) | `InlineForm` | `demo-enquiry.mts` | Yes (`for-page-enquiry`) | Yes (company + person + note) | Yes (contact) | Yes |
| **Lead magnet** (name + email + company) | `LeadMagnetForm` | `lead-magnet.mts` | Yes (`lead-magnet`) | Yes (company + person + note) | Yes (contact + drip event) | Yes |
| **Careers** (with CV upload) | Inline in `careers/page.tsx` | None | Yes (`careers`) | No | No | No |

### Routing rules

- **Email-only captures** (waitlist, newsletter) → **Loops only**. Top-of-funnel nurture.
- **Forms with name + company + email** (demos, lead magnets, industry enquiries) → **Attio** (company + person record) **+ Loops** (contact) **+ Slack** (notification with "View in Attio" button).
- **Careers** → Netlify Forms only (internal, no CRM/marketing integration needed).
- Netlify Forms is the primary store for all non-waitlist submissions. Attio/Loops/Slack are forwarded best-effort after the Netlify Form succeeds.

### Environment variables (Netlify Dashboard)

- `LOOPS_API_KEY` — Loops API key (all functions)
- `ATTIO_API_KEY` — Attio API key (`demo-enquiry.mts`, `lead-magnet.mts`)
- `ATTIO_WORKSPACE_SLUG` — Attio workspace slug for constructing record URLs (default: `certifyd`)
- `SLACK_WEBHOOK_URL` — Slack incoming webhook for form notifications (`demo-enquiry.mts`, `lead-magnet.mts`)

### Netlify Functions conventions

- All functions use `.mts` extension (ESM, Netlify Functions v2)
- Signature: `export default async (req: Request, _context: Context) => { ... }`
- Env vars via `Netlify.env.get()` (not `process.env`)
- `netlify/` is excluded from `tsconfig.json` — Netlify's bundler handles compilation
- Attio person URLs are constructed (API doesn't return `web_url`): `https://app.attio.com/{slug}/person/{record_id}/overview`

### Adding a new form

1. Create the component in `src/components/`
2. Create a Netlify Function in `netlify/functions/*.mts` (v2 format)
3. Add a redirect in `netlify.toml` if using a clean `/api/` path
4. Route to Attio + Loops + Slack per the rules above
5. Document the form in this table

## Component Patterns

- `RelatedContent` — reusable 3-column component for solution/industry pages accepting `solutions`, `articles`, and `resources` (external) arrays
- `SolutionCTA` — call-to-action component for solution/industry pages
- `SolutionHero`, `ProblemSection`, `SolutionSteps` — shared layout components
- `WaitlistForm` — inline email capture (email + submit button) with loading/success/error states, honeypot spam protection

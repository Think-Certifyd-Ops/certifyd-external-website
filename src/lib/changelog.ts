import type { ChangelogEntry } from "@/types";

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-02-07",
    version: "1.5.0",
    title: "Polish, content & data fixes",
    summary:
      "Home page hero spacing fixed so CTA stays above the fold. FourStories upgraded to dark section with mini mock UI graphics. HowItWorks screenshots replaced with CSS phone mockups. WithWithout readability improved. Fair Work Agency blog post added. Team photos, favicon, and LinkedIn URLs corrected.",
    changes: [
      {
        category: "added",
        items: [
          "FourStories: Mini graphic headers per card — RTW status, identity check, shift monitor, access badge",
          "HowItWorks: CSS phone mockup graphics for all 4 steps with QR code and Certifyd icon",
          "HomeCTA: Subtitle and mini industry icon badges",
          "Fair Work Agency blog post at /blog/fair-work-agency-april-2026",
          "SolutionCTA: Optional secondary button with custom label and link",
          "Team photos on About page (Andrew, Jason, Michael)",
          "Certifyd blue SVG favicon",
        ],
      },
      {
        category: "changed",
        items: [
          "Hero: Removed min-h-[85vh] and excess padding — buttons now visible without scrolling",
          "FourStories: Switched from light section to dark navy with navy-light cards",
          "HowItWorks: Replaced PNG screenshots with CSS-only phone mockups, visible on all breakpoints",
          "HomeCTA: Added subtitle and industry icon pills above buttons",
          "WithWithout: Better contrast, larger text (15px), coloured left borders, larger number badges",
          "Recruitment CTA: Now links to Fair Work Agency blog post",
          "LinkedIn URLs corrected (company: thinkcertifyd, team profiles updated)",
        ],
      },
      {
        category: "removed",
        items: [
          "Old favicon.ico replaced by SVG icon via metadata",
          "PNG app mockup images removed from HowItWorks section",
        ],
      },
    ],
  },
  {
    date: "2026-02-07",
    version: "1.4.0",
    title: "Hero graphics for all industry and solution pages",
    summary:
      "Every industry and solution page now has a unique, page-specific mock UI graphic in its hero section. SolutionHero upgraded with optional split layout. Seven new graphic components created.",
    changes: [
      {
        category: "added",
        items: [
          "Recruitment hero: Applicant Screening feed with RTW status pills",
          "Trades hero: Door Verification confirmation card",
          "Care hero: Shift Monitor with staff roster and family view badge",
          "Workforce hero: Mini compliance dashboard with audit report badge",
          "Person hero: Overlapping phone mockups with real app screenshots",
          "Business hero: Team verification roster with compliance bar",
          "Compliance hero: Full dashboard with weekly trend chart and report button",
        ],
      },
      {
        category: "changed",
        items: [
          "SolutionHero component now accepts optional children prop for split layout",
          "All 7 sub-page heroes upgraded from text-only to split layout with graphics",
        ],
      },
    ],
  },
  {
    date: "2026-02-07",
    version: "1.3.0",
    title: "Visual upgrade — creative graphics and mock UI elements",
    summary:
      "Major visual overhaul of the home page inspired by growleady.io. Hero redesigned with split layout and live Verification Dashboard mockup. New MetricsBar section. WhatWeDo cards now feature mini mock UI previews. HowItWorks includes real app mockup images. FourStories cards enhanced with severity bars.",
    changes: [
      {
        category: "added",
        items: [
          "Hero: Live Verification Dashboard mock UI with stats, feed, and compliance bar",
          "MetricsBar: New section with real-time metrics (30s, <60s, 100%, 24/7)",
          "WhatWeDo: Mini mock UI previews — QR code, team roster, compliance gauge",
          "HowItWorks: Real Certifyd app mockup images for Scan and Verified steps",
          "FourStories: Warning severity bars across top of each card",
        ],
      },
      {
        category: "changed",
        items: [
          "Hero layout changed from centered text to split (text left, dashboard right)",
          "FourStories stat text upgraded to bolder IBM Plex Mono treatment",
          "Home page section order: Hero → FourStories → MetricsBar → HowItWorks → WhatWeDo → CTA",
        ],
      },
    ],
  },
  {
    date: "2026-02-07",
    version: "1.2.0",
    title: "Solutions & Industries restructure",
    summary:
      "Separated product solutions from industry use cases. Solutions now covers Certify That Person, Certify That Business, and Audit-Ready Compliance. Industries covers Recruitment, Trades, Care Homes, and Workforce. Button hover animation refined to maintain constant width.",
    changes: [
      {
        category: "added",
        items: [
          "3 new solution product pages: Certify That Person, Certify That Business, Audit-Ready Compliance",
          "Industries section in navigation with dropdown",
          "Industries column in footer",
          "What We Do cards now link to their solution product pages",
        ],
      },
      {
        category: "changed",
        items: [
          "Navigation restructured: Solutions = product pages, Industries = use case pages",
          "4 industry pages moved from /solutions/ to /industries/ (Recruitment, Trades, Care Homes, Workforce)",
          "Four Stories and HomeCTA links updated to /industries/ paths",
          "Footer expanded to 5 columns (Logo, Solutions, Industries, Company, Contact)",
          "Button hover animation now maintains constant width — text shifts left, arrow fades in",
        ],
      },
    ],
  },
  {
    date: "2026-02-07",
    version: "1.1.0",
    title: "Design refinements and scroll animations",
    summary:
      "Refined the visual design based on initial review. Buttons redesigned for better contrast on dark backgrounds, interactive hover animations added across the site, and solution pages received a significant visual upgrade.",
    changes: [
      {
        category: "changed",
        items: [
          "Buttons now use IBM Plex Mono and feature an arrow that slides in on hover",
          "Hero and CTA buttons switched from solid blue to white outline on dark backgrounds for better contrast",
          "Four Stories section changed from 2x2 to 4-column layout — tighter, more impactful",
          "Solution page heroes now left-aligned with gradient overlays, badge labels, and larger typography",
          "Problem sections use two-column grid with animated ring-dot indicators",
          "With/Without comparison redesigned as a split-panel layout with slide-in animations",
          "Solution CTAs moved to dark navy with radial glow and outline buttons",
          "How It Works steps on solution pages now use a vertical timeline with hover-fill circles",
        ],
      },
      {
        category: "added",
        items: [
          "ScrollReveal component — intersection observer-based reveal animations across the site",
          "Staggered entrance animations on cards, steps, and grid items",
          "Hover lift effects on story cards and capability cards",
          "This updates/changelog page",
        ],
      },
      {
        category: "removed",
        items: [
          "\"Different industries. Same problem...\" orphan quote from Four Stories section",
          "\"What makes us different...\" line from What We Do section",
          "Solid blue button variant on dark backgrounds",
        ],
      },
    ],
  },
  {
    date: "2026-02-06",
    version: "1.0.0",
    title: "Initial website build",
    summary:
      "Built the Certifyd marketing website from scratch using Next.js 16, Tailwind CSS v4, and a two-tone design system (navy dark sections, warm off-white light sections). Positioned around compliance pain and real-world use cases — not deepfakes.",
    changes: [
      {
        category: "added",
        items: [
          "Home page with hero, four stories (The Hire, The Tradesperson, The Care Home, The Temp), how it works, what we do, and industry CTA sections",
          "4 solution pages: Recruitment & Right-to-Work, Trades & Physical Access, Care Homes, Workforce Compliance",
          "About page with team cards, vision statement, and careers CTA",
          "Contact page with Netlify Forms integration",
          "Careers page with file upload form",
          "Blog system with MDX support and sample post",
          "Responsive header with Solutions dropdown and mobile slide-out menu",
          "Footer with solutions, company links, contact info, and LinkedIn",
          "IBM Plex Mono (headings) + IBM Plex Sans (body) typography",
          "Static export for Netlify deployment",
          "Security headers via netlify.toml",
        ],
      },
    ],
  },
];

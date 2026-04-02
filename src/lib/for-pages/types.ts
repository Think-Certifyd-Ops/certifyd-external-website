export interface ForPage {
  slug: string;
  category:
    | "role"
    | "business"
    | "threat"
    | "safeguarding"
    | "scenario"
    | "compliance";
  parentIndustry: "recruitment" | "trades" | "care" | "workforce";

  // SEO
  title: string;
  metaTitle: string;
  metaDescription: string;

  // Hero
  badge: string;
  headline: string;
  subtitle: string;

  // Hero graphic variant
  heroGraphic?: "verification-card" | "qr-scan" | "compliance-dash" | "shift-monitor";

  // Verification card (shown in hero when heroGraphic is "verification-card" or undefined)
  heroCard: {
    name: string;
    secondaryLabel: string;
    secondaryValue: string;
    context?: string;
  };

  // Search intent paragraph
  searchIntentParagraph: string;

  // Stats
  stats: { value: string; label: string }[];

  // Why it matters (markdown-style prose, rendered as paragraphs)
  whyItMatters: string[];

  // Problems
  problems: string[];

  // Steps
  steps: string[];

  // Testimonial (optional)
  testimonial?: { quote: string; attribution: string };

  // FAQ
  faqs: { question: string; answer: string }[];

  // Cross-links to other /for/ pages
  alsoRelevant: { label: string; slug: string }[];

  // Related content
  relatedSolutions: { label: string; href: string }[];
  relatedArticles: { label: string; href: string }[];
  relatedResources: {
    label: string;
    href: string;
    external: boolean;
  }[];

  // CTA
  ctaTitle: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

export const PRODUCT_DEMOS: Record<string, { label: string; href: string; external?: boolean }> = {
  "/products/portal/":    { label: "Try the Portal demo",   href: "/products/portal/demo/" },
  "/products/verify/":    { label: "Try Screen free",       href: "https://recruiter.certifyd.io", external: true },
  "/products/id/":        { label: "Try the ID demo",       href: "/products/id/demo/" },
  "/products/codewords/": { label: "Try the CodeWords demo", href: "/products/codewords/demo/" },
  "/products/sentinel/":  { label: "Learn about Sentinel",  href: "/products/sentinel/" },
};

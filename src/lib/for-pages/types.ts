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

  // Verification card (shown in hero)
  heroCard: { name: string; company: string };

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

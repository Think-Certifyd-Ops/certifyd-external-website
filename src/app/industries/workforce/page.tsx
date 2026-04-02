import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WorkforceCompliance } from "@/components/graphics/WorkforceCompliance";

export const metadata: Metadata = {
  title: "Temporary Workers & Workforce Compliance for SMEs",
  description:
    "5.5 million UK SMEs face the same fines as FTSE 250 companies. Most have no HR department. Certifyd gives you audit-ready compliance without the headcount.",
  alternates: { canonical: "/industries/workforce/" },
  openGraph: {
    title: "Workforce Compliance for UK SMEs | Certifyd",
    description:
      "5.5 million UK SMEs face the same fines as FTSE 250 companies. Get audit-ready compliance without the HR headcount.",
    url: "https://www.certifyd.io/industries/workforce/",
  },
};

const howItWorksSteps = [
  "Business creates their Certifyd profile",
  "Invites employees and contractors to verify their identity and right-to-work status",
  "Dashboard shows real-time compliance: \u2705 28/30 verified, \u26a0\ufe0f 2 pending, Compliance score: 93%",
  "Fair Work Agency arrives \u2014 \"Here\u2019s our compliance dashboard. Every employee verified. Full audit trail.\"",
];

export default function WorkforcePage() {
  return (
    <>
      <SolutionHero
        badge="Workforce"
        title="Audit-Ready in One Click"
        subtitle="5.5 million UK SMEs face the same fines as FTSE 250 companies. Most have no HR department."
      >
        <WorkforceCompliance />
      </SolutionHero>

      <ProblemSection
        problems={[
          "1.1 million agency and temporary workers in the UK at any given time.",
          "\"Dave couldn\u2019t make it \u2014 I\u2019m covering.\" A stranger gets a lanyard and building access. Nobody checks.",
          "Most businesses spend nothing verifying that agency workers match the paperwork.",
          "SMEs can\u2019t afford background check agencies at \u00a350\u2013200+ per check.",
          "But they still face up to \u00a360,000 in fines per illegal worker \u2014 the same as FTSE 250 companies.",
        ]}
      />

      <SolutionSteps steps={howItWorksSteps} />

      {/* SME Callout */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <blockquote className="border-l-4 border-certifyd-blue pl-6 py-4">
                <p className="text-text-on-light text-lg leading-relaxed font-medium">
                  Compliance without HR headcount. Certifyd gives small businesses
                  the same audit readiness as enterprises &mdash; at a fraction of
                  the cost of background check agencies.
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "Certifyd Portal", href: "/products/portal/" },
          { label: "Certifyd CodeWords", href: "/products/codewords/" },
          { label: "Certifyd Screen", href: "/products/verify/" },
        ]}
        articles={[
          { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
          { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
          { label: "The Fair Work Agency: What You Need to Know", href: "/blog/fair-work-agency-april-2026/" },
        ]}
        resources={[
          { label: "GOV.UK — Right to Work Checks: Employer Guide", href: "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide", external: true },
          { label: "GOV.UK — Employment Agency Standards", href: "https://www.gov.uk/employment-agency-and-employment-business-regulations", external: true },
        ]}
      />

      <SolutionCTA
        title="Get compliance without HR headcount"
        primaryLabel="Try the Portal demo"
        href="/products/portal/demo/"
        secondaryLabel="Book a demo"
        secondaryHref="/contact/"
      />
    </>
  );
}

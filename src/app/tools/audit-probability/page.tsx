import type { Metadata } from "next";
import { AuditProbability } from "@/components/tools/AuditProbability";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import {
  ENFORCEMENT,
  FWA_TIMELINE,
  formatNumber,
} from "@/lib/tools/enforcement-data";

export const metadata: Metadata = {
  title: "When Will You Get Audited? | Compliance Probability Calculator",
  description:
    "Based on Home Office enforcement data, sector analysis, and your risk profile — calculate your business's probability of a compliance audit in 2025-2026.",
  alternates: { canonical: "/tools/audit-probability/" },
  openGraph: {
    title:
      "When Will You Get Audited? | Compliance Probability Calculator | Certifyd",
    description:
      "Based on Home Office enforcement data, sector analysis, and your risk profile — calculate your audit probability.",
    url: "https://www.certifyd.io/tools/audit-probability/",
  },
};

const FAQS = [
  {
    question: "Where does this data come from?",
    answer:
      "All figures are sourced from published government data including the Home Office's illegal working enforcement activity reports, the ONS UK business activity survey, CQC State of Care reports, GLAA Annual Reports, and HMRC National Minimum Wage enforcement data. Links to each source are provided in the results.",
  },
  {
    question: "How is the probability calculated?",
    answer:
      "We start with your sector's base audit rate (enforcement visits divided by total businesses in that sector). We then apply multiplicative risk factor adjustments based on your specific circumstances — sponsor licence status, employee count, geographic region, and sector-specific risk indicators. The result is capped at 95% since no model can claim certainty.",
  },
  {
    question: "Why does holding a sponsor licence increase my probability?",
    answer:
      "The Home Office revoked 1,948 sponsor licences in 2025, more than double the 937 revocations in 2024. Sponsor licence holders face additional compliance obligations and are subject to targeted inspections to verify that sponsored workers' conditions are being met.",
  },
  {
    question: "What happens if the Fair Work Agency visits my business?",
    answer:
      "The FWA has powers to conduct unannounced inspections, request documentation, issue compliance notices, and levy civil penalties. For Right to Work failures, penalties are up to £45,000 per illegal worker for a first offence and £60,000 for repeat offences. The FWA can also refer cases for criminal prosecution.",
  },
  {
    question: "How can I reduce my audit probability?",
    answer:
      "While you can't control whether you're selected for an audit, you can ensure you pass one. Automated Right to Work checking, consistent processes across all hiring managers, proactive expiry tracking, and audit-ready record-keeping are the foundations. Certifyd Portal handles all of these automatically.",
  },
];

export default function AuditProbabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-6">
            Free Calculator
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            What&apos;s Your Audit Probability?
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
            Based on Home Office enforcement data, sector analysis, and your
            risk profile.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <ScrollReveal delay={0}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  {formatNumber(ENFORCEMENT.totalVisits2025)}
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  enforcement visits in 2025
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  {Math.round(ENFORCEMENT.visitGrowthRate * 100)}%
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  year-on-year increase
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  {formatNumber(ENFORCEMENT.civilPenalties2025)}
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  civil penalties issued
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-dark">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <AuditProbability />
          </div>
        </div>
      </section>

      {/* FWA Timeline */}
      <section className="section-dark border-t border-navy-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
                Timeline
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark">
                The Fair Work Agency Is Here
              </h2>
              <p className="text-text-on-dark-muted mt-4 max-w-xl mx-auto">
                A new enforcement body with expanded powers, combining three
                existing agencies under one roof.
              </p>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-navy-border" />

              <div className="space-y-8">
                {FWA_TIMELINE.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="relative pl-16">
                      {/* Dot */}
                      <div className="absolute left-[18px] w-3.5 h-3.5 rounded-full bg-certifyd-blue border-3 border-navy" />

                      <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                        <p className="font-heading text-xs font-medium text-certifyd-blue uppercase tracking-wider mb-1">
                          {item.date}
                        </p>
                        <p className="font-heading text-base font-bold text-text-on-dark">
                          {item.event}
                        </p>
                        <p className="text-sm text-text-on-dark-muted mt-1">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
              Understanding Your Audit Risk
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            You can&apos;t control if they visit. You can control if you pass.
          </h2>
          <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
            Certifyd Portal automates Right to Work checks, tracks every expiry
            date, and generates audit-ready reports in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact/" size="lg">
              Book a demo
            </Button>
            <Button
              href="/tools/audit-readiness/"
              size="lg"
              variant="outline"
            >
              Check your readiness score
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

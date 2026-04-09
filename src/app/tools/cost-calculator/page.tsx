import type { Metadata } from "next";
import { CostCalculator } from "@/components/tools/CostCalculator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { COST_BENCHMARKS } from "@/lib/tools/enforcement-data";

export const metadata: Metadata = {
  title: "RTW Cost Calculator — What Are Manual Checks Really Costing You? | Certifyd",
  description:
    "Calculate the true cost of manual Right to Work checks. With 22 minutes per check, 12% error rates, and 34% of follow-ups missed, see how much time and money you're losing.",
  alternates: { canonical: "/tools/cost-calculator/" },
  openGraph: {
    title: "RTW Cost Calculator | Certifyd",
    description:
      "Calculate the true cost of manual Right to Work checks. 22 minutes per check. 12% error rate. See how much you could save.",
    url: "https://www.certifyd.io/tools/cost-calculator/",
  },
};

const STATS = [
  {
    value: `${COST_BENCHMARKS.avgMinutesPerCheck} min`,
    label: "average time per manual check",
  },
  {
    value: `${Math.round(COST_BENCHMARKS.manualErrorRate * 100)}%`,
    label: "of manual checks contain errors",
  },
  {
    value: `${Math.round(COST_BENCHMARKS.followUpMissRate * 100)}%`,
    label: "of follow-up checks missed",
  },
];

const FAQS = [
  {
    question: "What's included in the cost of a manual RTW check?",
    answer:
      "The true cost goes beyond HR time. It includes: the time to schedule and conduct the check (averaging 22 minutes), printing and photocopying documents, physical storage and filing, administrative follow-up for expiring documents, re-checking when documents are unclear or incomplete, and the opportunity cost of HR time spent on compliance instead of strategic work. Our calculator factors in both direct labour costs and administrative overhead.",
  },
  {
    question: "Why is the manual error rate so high?",
    answer:
      "Manual Right to Work checks require HR staff to verify document authenticity, cross-reference multiple ID types, check expiry dates, and correctly categorise work permissions — all by visual inspection. Industry research consistently shows a 10-15% error rate in manual document verification. Common errors include accepting expired documents, failing to spot forged documents, misrecording permission types, and not scheduling follow-up checks for time-limited workers.",
  },
  {
    question: "What happens when a follow-up check is missed?",
    answer:
      "If an employee's right to work expires and you continue employing them without re-verification, you lose your statutory excuse. This means you're fully exposed to civil penalties (up to £45,000 for a first offence, £60,000 for repeat) if that worker turns out to have no right to work. It's the most common compliance gap — 34% of expiring documents are never re-checked under manual processes.",
  },
  {
    question: "How does Certifyd reduce the cost per check?",
    answer:
      "Certifyd automates the entire verification workflow: document capture via the employee's phone, AI-powered document validation, biometric matching, real-time Home Office database checks (for BRP/eVisa holders), and automated audit trail generation. This reduces the average check time from 22 minutes to under 60 seconds, eliminates manual errors, and automatically schedules and reminds for follow-up checks.",
  },
  {
    question: "Is the Certifyd pricing shown here accurate?",
    answer:
      "The calculator uses indicative pricing to give you a directional comparison. Actual Certifyd pricing depends on your volume, contract length, and specific requirements. Contact us for a tailored quote — we'll work through the numbers with you and build a business case your finance team can approve.",
  },
];

export default function CostCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-5">
                Free Tool
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold">
                RTW Cost Calculator
              </h1>
              <p className="text-lg text-text-on-dark-muted mt-5 max-w-2xl mx-auto">
                Manual Right to Work checks cost more than you think. Calculate
                the true cost of your current process &mdash; including the
                hidden costs most businesses miss.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-navy-border">
            {STATS.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center md:px-8">
                  <p className="font-heading text-3xl font-bold text-text-on-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-on-dark-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-dark py-16 lg:py-20">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <CostCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-16 lg:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
                FAQ
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
                Common questions about RTW costs
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 lg:py-20">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Stop paying the manual tax
            </h2>
            <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
              Certifyd replaces your entire RTW workflow with a single
              platform &mdash; faster, cheaper, and compliant by default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact/">
                Book a demo
              </Button>
              <Button variant="outline" size="lg" href="/tools/penalty-calculator/">
                Calculate your penalty exposure
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

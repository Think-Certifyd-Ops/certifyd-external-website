import type { Metadata } from "next";
import { COST_BENCHMARKS } from "@/lib/tools/enforcement-data";
import { RoiCalculator } from "@/components/tools/RoiCalculator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Identity Verification ROI Calculator | Certifyd",
  description:
    "Calculate your projected savings from switching to automated identity verification. See labour savings, error reduction, and penalty risk reduction in under 60 seconds.",
  alternates: { canonical: "/tools/roi-calculator/" },
  openGraph: {
    title: "Identity Verification ROI Calculator | Certifyd",
    description:
      "Calculate your projected savings from switching to automated identity verification.",
    url: "https://www.certifyd.io/tools/roi-calculator/",
  },
};

const FAQS = [
  {
    question: "How are the savings calculated?",
    answer:
      "We compare the time and cost of manual identity checks against Certifyd's automated process. The model accounts for labour time saved per check, error remediation costs avoided, and the probabilistic cost of compliance penalties. All assumptions are shown in the breakdown.",
  },
  {
    question: "What does '22 minutes per manual check' mean?",
    answer:
      "Industry benchmarks show that a typical manual Right to Work check — including document collection, visual inspection, copying, filing, and follow-up — takes an average of 22 minutes of HR time. Certifyd automates this to approximately 3 minutes of active time.",
  },
  {
    question: "What is the 12% error rate based on?",
    answer:
      "Studies of manual document verification processes consistently find error rates between 8% and 15%. Common errors include accepting expired documents, failing to spot counterfeit IDs, recording incorrect details, and not completing follow-up checks for time-limited permissions. We use a conservative 12% midpoint.",
  },
  {
    question: "Why include penalty risk in the ROI?",
    answer:
      "Compliance penalties are a real cost of doing business. The Home Office issued over £130M in civil penalties in 2025. We use a conservative model — 2% of your workforce having an exposure, with a 10% probability of being caught — to estimate the risk-adjusted value of proper verification.",
  },
  {
    question: "What does 'follow-up checks missed' mean?",
    answer:
      "34% of businesses fail to re-verify workers whose Right to Work permission is time-limited (e.g. visa expiry). Missing these follow-up checks is an offence — penalties are typically £15,000+ per worker. Certifyd automates expiry tracking and re-verification reminders.",
  },
  {
    question: "How much does Certifyd cost?",
    answer:
      "Certifyd pricing starts from £99/month. The calculator uses the higher of your monthly subscription or a per-check cost (£1.20 per check) to model the most accurate annual cost for your volume. Contact us for a custom quote based on your exact needs.",
  },
  {
    question: "Is this calculator accurate for my business?",
    answer:
      "The calculator uses conservative industry averages. Your actual savings may be higher or lower depending on your processes, team structure, and risk profile. We recommend booking a demo to get a personalised assessment.",
  },
];

export default function RoiCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-certifyd-blue mb-4">
              Free tool
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-2xl mx-auto">
              What&apos;s the ROI of Certifyd?
            </h1>
            <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
              Calculate your projected savings from switching to automated
              identity verification. Takes 30 seconds.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-accent-warning">
                  {COST_BENCHMARKS.avgMinutesPerCheck} min
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  average manual check time
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-red-400">
                  {(COST_BENCHMARKS.manualErrorRate * 100).toFixed(0)}%
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  manual check error rate
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark">
                  {(COST_BENCHMARKS.followUpMissRate * 100).toFixed(0)}%
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  of follow-up checks missed
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calculator tool */}
      <section className="section-dark">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <RoiCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-on-light mb-8">
              Frequently asked questions
            </h2>
            <FAQAccordion faqs={FAQS} />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark border-t border-navy-border">
        <div className="section-container text-center py-20">
          <ScrollReveal>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark mb-4">
              See it in action
            </h2>
            <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mb-8">
              The numbers speak for themselves. Book a 15-minute demo and
              we&apos;ll show you exactly how Certifyd fits your workflow.
            </p>
            <Button variant="primary" size="lg" href="/contact/">
              Book a demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

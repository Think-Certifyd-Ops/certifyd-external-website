import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Trades & Physical Access",
  description:
    "Zero regulation for tradespeople entering your home in the UK. Certifyd changes that.",
};

const howItWorksSteps = [
  "Tradesperson arrives \u2014 both open the app",
  "Homeowner scans the tradesperson\u2019s QR code",
  "Instant confirmation: \"John Smith \u2014 Verified by Certifyd. Smith Electrical Ltd. Certified since March 2026.\"",
  "Record created: who arrived, when, where",
  "Auditable trail if anything goes wrong",
];

const alsoWorksFor = [
  "Charity collectors",
  "Utility engineers",
  "Meter readers",
  "Delivery drivers",
  "Anyone at your door claiming to be someone",
];

const beneficiaries = [
  {
    title: "Platforms",
    description:
      "Checkatrade, MyBuilder \u2014 know which tradespeople actually deliver.",
  },
  {
    title: "Trade companies",
    description: "\"We\u2019re reputable \u2014 this proves it.\"",
  },
  {
    title: "Homeowners",
    description: "Know who\u2019s in your house.",
  },
  {
    title: "Tradespeople",
    description:
      "\"I do good work \u2014 I don\u2019t mind being known.\"",
  },
];

export default function TradesPage() {
  return (
    <>
      <SolutionHero
        badge="Trades & Access"
        title="Know Who's at Your Door"
        subtitle="Zero regulation for tradespeople entering your home in the UK. Certifyd changes that."
      />

      <ProblemSection
        problems={[
          "Tradespeople know where you live, what\u2019s in your home, when you\u2019re out.",
          "You know nothing about them. They can send someone else. No one checks.",
          "Trade platforms verify the business \u2014 but can\u2019t verify who actually shows up.",
          "Zero regulation for tradespeople entering private homes in the UK.",
        ]}
      />

      <SolutionSteps steps={howItWorksSteps} />

      {/* Also works for + Who benefits */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Also works for
                </span>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light mb-8 leading-tight">
                Anyone at your door<br />
                <span className="text-certifyd-blue">claiming to be someone.</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {alsoWorksFor.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-warm-gray border border-warm-border rounded-sm text-text-on-light text-sm font-heading"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Who benefits
                </span>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light leading-tight">
                Everyone in the chain<br />
                <span className="text-certifyd-blue">wins.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {beneficiaries.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 80}>
                  <div className="bg-white border border-warm-border rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <h3 className="font-heading text-base font-semibold text-text-on-light mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-on-light-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SolutionCTA title="Bring verification to your platform" />
    </>
  );
}

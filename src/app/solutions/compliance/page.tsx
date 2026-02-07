import type { Metadata } from "next";
import Link from "next/link";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Audit-Ready Compliance",
  description:
    "See who's verified, who's pending, and your compliance score. One-click reports when the regulator arrives.",
};

const howItWorks = [
  "Connect your workforce \u2014 employees, contractors, and agency staff",
  "Dashboard shows real-time compliance: who\u2019s verified, who\u2019s pending, who needs attention",
  "Compliance score updates automatically as your team verifies",
  "One-click reports \u2014 audit-ready when the regulator arrives",
];

const features = [
  {
    title: "Real-Time Dashboard",
    description:
      "See your entire workforce at a glance. \u2705 28/30 verified, \u26a0\ufe0f 2 pending, Compliance score: 93%. No spreadsheets. No guesswork.",
  },
  {
    title: "One-Click Reports",
    description:
      "Fair Work Agency arrives? CQC inspection? \"Here\u2019s our compliance dashboard. Every employee verified. Full audit trail.\" One click.",
  },
  {
    title: "Continuous Monitoring",
    description:
      "Compliance isn\u2019t a one-time check. Certifyd monitors your workforce status continuously and alerts you when action is needed.",
  },
  {
    title: "Built for SMEs",
    description:
      "5.5 million UK SMEs face the same fines as FTSE 250 companies. Certifyd gives you enterprise-grade compliance without the enterprise price tag.",
  },
];

const useCases = [
  { label: "Recruitment", href: "/industries/recruitment/" },
  { label: "Trades & Access", href: "/industries/trades/" },
  { label: "Care Homes", href: "/industries/care/" },
  { label: "Workforce", href: "/industries/workforce/" },
];

export default function CompliancePage() {
  return (
    <>
      <SolutionHero
        badge="Compliance"
        title="Audit-Ready in One Click"
        subtitle="See who's verified, who's pending, and your compliance score. One-click reports when the regulator arrives."
      />

      <SolutionSteps steps={howItWorks} title="How It Works" />

      {/* Features */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-text-on-light-muted" />
              <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                Key Capabilities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-heading text-lg font-semibold text-text-on-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="section-dark">
        <div className="section-container py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark">
                See it in action
              </h2>
              <p className="text-text-on-dark-muted mt-3 text-sm">
                Audit-ready compliance for every industry where verification matters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.label}
                  href={uc.href}
                  className="group border border-navy-border bg-navy-light px-6 py-3 rounded-sm text-sm font-heading font-medium text-text-on-dark hover:border-white/40 hover:bg-navy-lighter transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-0.5 inline-block">
                    {uc.label}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ml-2 inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SolutionCTA title="Get compliance without HR headcount" />
    </>
  );
}

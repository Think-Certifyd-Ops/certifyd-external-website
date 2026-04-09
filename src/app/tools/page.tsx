import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Compliance Tools & Calculators | Certifyd",
  description:
    "Free interactive tools for UK employers: penalty exposure calculator, audit probability estimator, FWA readiness score, deepfake vulnerability assessment, verification cost calculator, and ROI calculator.",
  alternates: { canonical: "/tools/" },
  openGraph: {
    title: "Free Compliance Tools & Calculators | Certifyd",
    description:
      "Calculate your penalty exposure, audit probability, and verification ROI. Based on real Home Office enforcement data.",
    type: "website",
  },
};

const TOOLS = [
  {
    slug: "penalty-calculator",
    badge: "Most Popular",
    badgeColor: "bg-accent-warning/15 border-accent-warning/30 text-accent-warning",
    title: "RTW Penalty Exposure Calculator",
    description:
      "Calculate your maximum fine exposure based on workforce size, sector, and verification coverage. Penalties tripled in February 2024 — up to £60,000 per illegal worker.",
    stat: "£130M",
    statLabel: "in fines issued in 2025",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    slug: "audit-probability",
    badge: "Data-Driven",
    badgeColor: "bg-certifyd-blue/15 border-certifyd-blue/30 text-certifyd-blue-light",
    title: "Audit Probability Estimator",
    description:
      "What are the chances your business gets an enforcement visit this year? Based on published Home Office data, sector analysis, and your risk profile.",
    stat: "12,831",
    statLabel: "enforcement visits in 2025",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    slug: "audit-readiness",
    badge: "2 Minutes",
    badgeColor: "bg-accent-success/15 border-accent-success/30 text-accent-success",
    title: "FWA Audit Readiness Score",
    description:
      "15 questions that tell you if you'd pass a Fair Work Agency inspection. The FWA launched April 2026 — find out where you stand before they find out for you.",
    stat: "Apr 2026",
    statLabel: "FWA now operational",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    slug: "cost-calculator",
    badge: "CFO-Ready",
    badgeColor: "bg-certifyd-blue/15 border-certifyd-blue/30 text-certifyd-blue-light",
    title: "Verification Cost Calculator",
    description:
      "How much is manual right-to-work checking actually costing you? Factor in HR time, materials, error remediation, and missed follow-ups.",
    stat: "22 min",
    statLabel: "average manual RTW check",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: "deepfake-assessment",
    badge: "New Threat",
    badgeColor: "bg-red-500/15 border-red-500/30 text-red-400",
    title: "Deepfake Vulnerability Assessment",
    description:
      "10 questions that reveal your exposure to AI-generated identity fraud. Detected deepfakes surged from 500K to 8M since 2023. How exposed are you?",
    stat: "8M",
    statLabel: "deepfakes detected in 2025",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    slug: "roi-calculator",
    badge: "Business Case",
    badgeColor: "bg-accent-success/15 border-accent-success/30 text-accent-success",
    title: "Identity Verification ROI Calculator",
    description:
      "Build the business case for automated identity verification. Calculate labour savings, error reduction, and penalty risk — with payback period.",
    stat: "12%",
    statLabel: "manual check error rate",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern">
        <div className="section-container text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="px-3 py-1 bg-certifyd-blue/15 border border-certifyd-blue/30 rounded-sm">
              <span className="font-heading text-xs text-certifyd-blue-light font-medium uppercase tracking-wider">
                Free Tools
              </span>
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-on-dark mb-6 leading-tight">
            Compliance Calculators<br />
            &amp; Risk Tools
          </h1>

          <p className="text-lg text-text-on-dark-muted leading-relaxed max-w-2xl mx-auto">
            Built on published Home Office enforcement data, ONS business
            statistics, and CQC inspection records. No guesswork — real numbers
            from real government sources.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-light border-y border-navy-border py-8">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "12,831", label: "HO enforcement visits (2025)" },
              { value: "£130M", label: "in civil penalties issued" },
              { value: "58%", label: "year-on-year increase" },
              { value: "Apr 2026", label: "Fair Work Agency launched" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-2xl md:text-3xl font-bold text-certifyd-blue-light">
                  {s.value}
                </div>
                <div className="text-xs text-text-on-dark-muted mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool cards */}
      <section className="section-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((tool, i) => (
              <ScrollReveal key={tool.slug} delay={i * 80}>
                <Link
                  href={`/tools/${tool.slug}/`}
                  className="group block h-full bg-navy-light border border-navy-border rounded-sm p-6 hover:border-certifyd-blue/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-certifyd-blue/10 flex items-center justify-center text-certifyd-blue">
                      {tool.icon}
                    </div>
                    <div className={`px-2 py-0.5 border rounded-sm ${tool.badgeColor}`}>
                      <span className="font-heading text-[10px] font-medium uppercase tracking-wider">
                        {tool.badge}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-heading text-lg font-bold text-text-on-dark mb-2 group-hover:text-certifyd-blue-light transition-colors">
                    {tool.title}
                  </h2>

                  <p className="text-sm text-text-on-dark-muted mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex items-baseline gap-2 pt-3 border-t border-navy-border">
                    <span className="font-heading text-xl font-bold text-certifyd-blue-light">
                      {tool.stat}
                    </span>
                    <span className="text-xs text-text-on-dark-muted">
                      {tool.statLabel}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust these numbers */}
      <section className="bg-warm-white py-12">
        <div className="section-container max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">
            Why trust these numbers?
          </h2>
          <p className="text-text-on-light-muted leading-relaxed mb-8">
            Every calculation uses published government data. We cite our sources
            on every results page so you can verify the numbers yourself.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Home Office",
                body: "Enforcement visits, arrests, and civil penalty data published quarterly",
              },
              {
                title: "ONS / BEIS",
                body: "UK business population by sector, size, and region — updated annually",
              },
              {
                title: "CQC / GLAA / HMRC",
                body: "Inspection volumes, enforcement actions, and compliance data from each body",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-5 bg-white border border-warm-border rounded-sm"
              >
                <h3 className="font-heading text-sm font-semibold text-text-on-light mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-on-light-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="section-container text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-dark mb-4">
            Need help closing the gaps?
          </h2>
          <p className="text-text-on-dark-muted mb-8">
            These tools show you the risk. Certifyd is how you fix it. Book a
            15-minute demo and we&apos;ll walk through your results together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-certifyd-blue text-white px-8 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors"
            >
              Book a Demo
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/resources/right-to-work-guide/"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-8 py-3 rounded-sm font-heading text-sm font-medium hover:bg-white hover:text-navy transition-colors"
            >
              Download Free Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

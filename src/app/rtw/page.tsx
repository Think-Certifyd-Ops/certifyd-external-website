import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { InlineForm } from "@/components/contact/InlineForm";
import { ComplianceDash } from "@/components/graphics/ComplianceDash";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Right to Work Compliance Dashboard for UK Recruitment Agencies | Certifyd",
  description:
    "RTW compliance dashboard that keeps recruitment agencies audit-ready. Track workers, log checks, manage documents, generate reports. From \u00A399/month. Book a demo.",
  alternates: { canonical: "/rtw/" },
  openGraph: {
    title: "Right to Work Compliance Dashboard | Certifyd",
    description:
      "89% of UK employers think they\u2019re compliant. 80% would fail a Home Office audit. Get audit-ready with Certifyd.",
    url: "https://www.certifyd.io/rtw/",
  },
};

/* ──────────────────── DATA ──────────────────── */

const stats = [
  { value: "617", label: "Penalties issued in Q3 2025" },
  { value: "\u00A334.3M", label: "In fines — and rising" },
  { value: "77%", label: "Year-on-year increase in raids" },
  { value: "\u00A360K", label: "Per illegal worker (repeat offence)" },
  { value: "89%", label: "Of employers think they\u2019re compliant" },
  { value: "80%", label: "Would fail a Home Office audit" },
];

const problems = [
  {
    title: "Spreadsheets and photocopies",
    description:
      "Still tracking Right to Work in Excel? When inspectors arrive, they want instant proof — not a filing cabinet. Manual processes mean missed expiries, lost documents, and no audit trail.",
  },
  {
    title: "Dual enforcement is coming",
    description:
      "The Fair Work Agency launches in April 2026, creating a dual enforcement environment. An RTW raid can now trigger an FWA investigation into wages, holiday pay, and SSP simultaneously. Enforcement pressure is ramping from both directions.",
  },
  {
    title: "Supply chain liability (Section 48)",
    description:
      "Since December 2025, end clients are liable if their agency\u2019s workers aren\u2019t verified. Your clients will demand proof of compliance — can you produce it on demand?",
  },
  {
    title: "The cost of getting it wrong",
    description:
      "Up to \u00A345,000 for a first offence, \u00A360,000 for repeat offences — per illegal worker. In Q3 2025 alone, 617 penalties were issued totalling \u00A334.3 million. Ignorance is not a defence.",
  },
];

const features = [
  {
    title: "Workforce dashboard",
    description:
      "Traffic-light overview: green (verified), amber (expiring), red (overdue). Know your compliance status the moment you log in.",
  },
  {
    title: "RTW check logging",
    description:
      "Log manual or IDSP-verified checks with full audit trails — who checked, when, what documents, what result. Every check recorded.",
  },
  {
    title: "Document storage",
    description:
      "Upload and organise compliance documents, policies, and evidence files. Everything an inspector needs, in one place.",
  },
  {
    title: "Expiry alerts",
    description:
      "Automatic notifications when visas or BRPs approach expiry. Never miss a re-check deadline again.",
  },
  {
    title: "Compliance reports",
    description:
      "One-click PDF and CSV reports formatted for Home Office inspections. Show every check performed, when, by whom, with what evidence.",
  },
  {
    title: "Tamper-proof audit trail",
    description:
      "Every action logged, append-only, SOC-2 aligned. A compliance history that inspectors trust and lawyers rely on.",
  },
  {
    title: "Team access control",
    description:
      "Invite team members with role-based permissions. Admins manage, members log checks — data stays secure.",
  },
  {
    title: "Bulk CSV import",
    description:
      "Upload your existing worker records in minutes. The dashboard immediately highlights compliance gaps.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: 99,
    description: "For small agencies getting started with compliance.",
    features: [
      "Up to 50 workers",
      "Unlimited RTW checks",
      "Document storage",
      "Basic compliance reports",
      "3 team members",
      "Full audit trail",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: 199,
    description: "For growing agencies that need full compliance coverage.",
    features: [
      "Up to 200 workers",
      "Unlimited RTW checks",
      "Document storage",
      "Full compliance reports",
      "10 team members",
      "Full audit trail",
      "Priority support",
      "Bulk CSV import",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 499,
    description: "For large agencies with unlimited needs.",
    features: [
      "Unlimited workers",
      "Unlimited RTW checks",
      "Document storage",
      "Custom compliance reports",
      "Unlimited team members",
      "Full audit trail",
      "Dedicated account manager",
      "Bulk CSV import",
      "API access (coming soon)",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What is a Right to Work check?",
    answer:
      "A Right to Work check is a legal requirement for all UK employers. Before employing someone, you must verify they have the legal right to work in the UK by checking their original documents (passport, visa, BRP) or using a certified Identity Service Provider (IDSP).",
  },
  {
    question: "How is Certifyd different from an IDSP like TrustID or Yoti?",
    answer:
      "IDSPs perform the one-time identity verification check. Certifyd is the compliance management layer that sits above those checks. We track who\u2019s been verified, when checks expire, and generate the audit-ready reports that protect you when inspectors arrive. Think of it as: the IDSP does the check, Certifyd manages the compliance.",
  },
  {
    question:
      "What\u2019s the Fair Work Agency and why does it matter?",
    answer:
      "The Fair Work Agency launches in April 2026, consolidating enforcement powers from HMRC, GLAA, and the Employment Agency Standards Inspectorate. It creates a dual enforcement environment — an RTW raid can trigger an FWA investigation into wages, holiday pay, and SSP simultaneously. Enforcement is ramping from both directions.",
  },
  {
    question: "What are the penalties for non-compliance?",
    answer:
      "Up to \u00A345,000 for a first offence and \u00A360,000 for repeat offences per illegal worker. In Q3 2025 alone, 617 penalties were issued totalling \u00A334.3 million. Enforcement raids are up 77% year-on-year.",
  },
  {
    question: "What is Section 48 supply chain liability?",
    answer:
      "Introduced in December 2025, Section 48 extends Right to Work liability through the supply chain. End clients are now liable if workers placed by their agencies aren\u2019t properly verified. Your clients will demand proof \u2014 Certifyd helps you produce it.",
  },
  {
    question: "Can I migrate from spreadsheets?",
    answer:
      "Yes. Certifyd supports bulk CSV import so you can upload your existing worker records in minutes. Once imported, the dashboard immediately highlights compliance gaps \u2014 who\u2019s verified, who isn\u2019t, and who\u2019s expiring.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. All plans include a 7-day free trial with full access to every feature. No credit card required to start. Book a demo and we\u2019ll walk you through everything.",
  },
  {
    question: "Do I need IDSP certification to use Certifyd?",
    answer:
      "No. Certifyd is a compliance management dashboard \u2014 you don\u2019t need any certification to use it. Whether you use an IDSP for digital checks or do manual document checks, Certifyd tracks and manages everything.",
  },
];

/* ──────────────────── PAGE ──────────────────── */

export default function RtwPage() {
  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "RTW Compliance Dashboard", href: "/rtw/" },
        ]}
      />
      <ServiceSchema
        name="Right to Work Compliance Dashboard"
        description="RTW compliance dashboard for UK recruitment agencies. Track workers, log checks, manage documents, and stay audit-ready."
        slug="rtw"
      />
      <FAQSchema faqs={faqs} />

      {/* ────── HERO ────── */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
                RTW Compliance Dashboard
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-text-on-dark animate-fade-in">
                Right to Work compliance.{" "}
                <span className="text-certifyd-blue">Sorted.</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-xl mt-6 animate-slide-up animation-delay-200">
                The compliance dashboard that keeps UK recruitment agencies
                audit-ready. Track workers, log checks, and generate reports
                &mdash; before the &pound;60K fines land.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
                <a
                  href="#book-demo"
                  className="group inline-flex items-center justify-center px-8 py-3.5 bg-certifyd-blue text-white rounded-sm font-heading font-semibold hover:bg-certifyd-blue-light transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
                    Book a Demo
                  </span>
                  <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white rounded-sm font-heading font-medium hover:bg-white/10 transition-all duration-300"
                >
                  See Pricing
                </a>
              </div>
              <p className="mt-4 text-sm text-text-on-dark-muted/60 animate-slide-up animation-delay-400">
                7-day free trial &middot; No credit card required
              </p>
            </div>

            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none animate-slide-up animation-delay-300">
              <ComplianceDash />
            </div>
          </div>
        </div>
      </section>

      {/* ────── KILLER STAT BANNER ────── */}
      <section className="relative bg-accent-warning overflow-hidden">
        <div className="section-container py-5 lg:py-6">
          <p className="text-center font-heading text-sm lg:text-base font-semibold text-white">
            89% of UK employers think they&apos;re compliant. 80% would fail a
            Home Office audit.{" "}
            <a
              href="#book-demo"
              className="underline underline-offset-2 hover:no-underline"
            >
              Are you sure?
            </a>
          </p>
        </div>
      </section>

      {/* ────── STATS ────── */}
      <section className="relative bg-navy-light overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,89,255,0.08), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />

        <div className="section-container relative z-10 py-14 lg:py-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 rounded-full bg-certifyd-blue animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
              The Numbers
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <StatCounter value={stat.value} label={stat.label} dark={true} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────── THE PROBLEM ────── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  The Problem
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                The enforcement wave is{" "}
                <span className="text-certifyd-blue">here.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <p className="text-lg lg:text-xl text-text-on-light leading-relaxed font-medium">
                The Home Office is intensifying Right to Work enforcement.
                The Fair Work Agency launches in April 2026, creating dual
                enforcement pressure. Section 48 extends liability through your
                supply chain. Spreadsheets won&apos;t protect you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={index * 100}>
                <div className="border border-warm-border rounded-sm p-6 bg-white">
                  <h3 className="font-heading text-base font-bold text-text-on-light mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-text-on-light-muted leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SOLUTION / FEATURES ────── */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,89,255,0.1), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />

        <div className="section-container relative z-10 py-24 lg:py-32">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  The Solution
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Everything you need to stay{" "}
                <span className="text-certifyd-blue">audit-ready.</span>
              </h2>
              <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6">
                Certifyd replaces your spreadsheets with a purpose-built
                compliance dashboard designed for UK recruitment agencies
                managing temporary workers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="bg-navy-light border border-navy-border rounded-sm p-5 hover:border-certifyd-blue/40 transition-colors duration-300">
                  <h3 className="font-heading text-sm font-bold text-text-on-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-text-on-dark-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────── MID-PAGE CTA ────── */}
      <section className="relative bg-certifyd-blue overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.1), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 py-14 lg:py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-white text-center sm:text-left">
                Ready to see it in action?
              </h3>
              <p className="text-white/70 text-sm mt-1 text-center sm:text-left">
                Book a demo and we&apos;ll walk you through everything.
              </p>
            </div>
            <a
              href="#book-demo"
              className="group inline-flex items-center justify-center px-8 py-3.5 bg-white text-certifyd-blue rounded-sm font-heading font-semibold hover:bg-navy hover:text-white transition-all duration-300 shrink-0"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
                Book a Demo
              </span>
              <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ────── PRICING ────── */}
      <section id="pricing" className="section-light scroll-mt-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Pricing
                </span>
                <div className="w-8 h-px bg-certifyd-blue" />
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
                Simple, transparent pricing.
              </h2>
              <p className="text-lg text-text-on-light-muted mt-4 max-w-xl mx-auto">
                All plans include a 7-day free trial. No credit card required to
                start.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <ScrollReveal key={tier.name} delay={index * 100}>
                <div
                  className={`relative flex flex-col rounded-sm border p-6 bg-white ${
                    tier.highlighted
                      ? "border-certifyd-blue ring-2 ring-certifyd-blue/20"
                      : "border-warm-border"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-certifyd-blue px-3 py-0.5 text-xs font-heading font-semibold text-white whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-heading text-lg font-bold text-text-on-light">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-text-on-light-muted mt-1">
                      {tier.description}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="font-heading text-4xl font-bold text-text-on-light">
                        &pound;{tier.price}
                      </span>
                      <span className="text-sm text-text-on-light-muted">
                        /month
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <svg
                          className="w-4 h-4 mt-0.5 text-certifyd-blue shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-text-on-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#book-demo"
                    className={`w-full text-center px-6 py-3 rounded-sm font-heading font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-certifyd-blue text-white hover:bg-certifyd-blue-light"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    Book a Demo
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIAL ────── */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(0,89,255,0.12), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 py-24 lg:py-32">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <svg
                className="w-16 h-16 text-certifyd-blue/30 mx-auto mb-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="font-heading text-2xl lg:text-4xl font-bold text-text-on-dark leading-snug mb-8">
                &ldquo;We were tracking Right to Work in a spreadsheet. When we
                got audited, it took three days to pull everything together.
                With Certifyd, it took thirty seconds.&rdquo;
              </blockquote>
              <cite className="text-sm text-text-on-dark-muted not-italic">
                &mdash; Compliance Manager, UK recruitment agency
              </cite>

              <div className="mt-12">
                <a
                  href="#book-demo"
                  className="group inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white rounded-sm font-heading font-medium hover:bg-white hover:text-navy transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
                    Book a demo
                  </span>
                  <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
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
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ────── FAQ ────── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-12 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  FAQ
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Common questions.
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ────── BOOK A DEMO FORM ────── */}
      <section
        id="book-demo"
        className="relative bg-navy overflow-hidden bg-grid-pattern scroll-mt-20"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(0,89,255,0.1), transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — CTA copy */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-certifyd-blue" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                    Book a Demo
                  </span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark leading-tight mb-6">
                  See Certifyd in action.
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed mb-8">
                  Book a demo and we&apos;ll walk you through the dashboard,
                  show you how it works for your agency, and answer any
                  questions. We typically respond within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-sm text-text-on-dark-muted">
                      <span className="font-semibold text-text-on-dark">
                        30-minute walkthrough
                      </span>{" "}
                      — tailored to your agency&apos;s size and needs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-sm text-text-on-dark-muted">
                      <span className="font-semibold text-text-on-dark">
                        Free compliance assessment
                      </span>{" "}
                      — we&apos;ll identify gaps in your current RTW process
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-sm text-text-on-dark-muted">
                      <span className="font-semibold text-text-on-dark">
                        7-day free trial
                      </span>{" "}
                      — start immediately after the call, no credit card needed
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={100}>
              <InlineForm source="RTW Compliance Dashboard — /rtw" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Certify That Business",
  description:
    "Create your business profile. Add your team. Every employee verified. Every contractor checked.",
};

const howItWorks = [
  "Create your Certifyd business profile",
  "Invite employees and contractors to verify their identity",
  "Team members complete verification in under a minute",
  "Your business profile shows a verified workforce \u2014 visible to clients, partners, and regulators",
];

const features = [
  {
    title: "Verified Workforce",
    description:
      "Every team member linked to your business profile with verified identity. Clients and partners can see your team is who they say they are.",
  },
  {
    title: "Team Management",
    description:
      "Add employees, contractors, and agency staff. Track who\u2019s verified, who\u2019s pending, and who needs attention \u2014 all in one place.",
  },
  {
    title: "Contractor & Agency Verification",
    description:
      "Candidates and contractors verify to stand out. Businesses know exactly who\u2019s arriving before they walk through the door.",
  },
  {
    title: "Business Credibility",
    description:
      "\"We\u2019re reputable \u2014 this proves it.\" A Certifyd business profile is a trust signal for clients, platforms, and procurement teams.",
  },
];

const useCases = [
  { label: "Recruitment", href: "/industries/recruitment/" },
  { label: "Trades & Access", href: "/industries/trades/" },
  { label: "Care Homes", href: "/industries/care/" },
  { label: "Workforce", href: "/industries/workforce/" },
];

export default function CertifyBusinessPage() {
  return (
    <>
      <SolutionHero
        badge="Certify That Business"
        title="Build a Verified Workforce"
        subtitle="Create your business profile. Add your team. Every employee verified. Every contractor checked."
      />

      <SolutionSteps steps={howItWorks} title="How It Works" />

      {/* Features */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Key Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Your team, verified.<br />
                <span className="text-certifyd-blue">Your reputation, proven.</span>
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
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  See It In Action
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Trust scales across<br />
                <span className="text-certifyd-blue">every industry.</span>
              </h2>
              <p className="text-text-on-dark-muted mt-4 text-sm max-w-lg">
                Certify That Business works wherever workforce trust is non-negotiable.
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

      <SolutionCTA title="Build trust into your workforce" />
    </>
  );
}

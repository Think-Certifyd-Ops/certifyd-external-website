import type { Metadata } from "next";
import Link from "next/link";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Certify That Person",
  description:
    "Two-way, real-time identity verification in 30 seconds. Both parties verify. Both parties know.",
};

const howItWorks = [
  "Both people open Certifyd on their phone",
  "One shows their QR code, the other scans it",
  "Instant mutual confirmation \u2014 both parties verified",
  "An auditable, tamper-proof record is created automatically",
];

const features = [
  {
    title: "Two-Way Authentication",
    description:
      "Not just one-way verification. Both parties confirm each other\u2019s identity \u2014 the person checking and the person being checked.",
  },
  {
    title: "30-Second QR Refresh",
    description:
      "QR codes refresh every 30 seconds. No screenshots, no replays, no spoofing. The code you scan is always live.",
  },
  {
    title: "Platform Agnostic",
    description:
      "Works in person, on video calls, over voice calls, via text or WhatsApp. One product. Every channel where identity matters.",
  },
  {
    title: "Auditable Records",
    description:
      "Every verification creates a tamper-proof record \u2014 who, when, where. Ready for audits, disputes, or compliance checks.",
  },
];

const useCases = [
  { label: "Recruitment", href: "/industries/recruitment/" },
  { label: "Trades & Access", href: "/industries/trades/" },
  { label: "Care Homes", href: "/industries/care/" },
  { label: "Workforce", href: "/industries/workforce/" },
];

export default function CertifyPersonPage() {
  return (
    <>
      <SolutionHero
        badge="Certify That Person"
        title="Two-Way Identity Verification in 30 Seconds"
        subtitle="Synchronous, real-time, person-to-person authentication. Both parties verify. Both parties know."
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
                Certify That Person works across every industry where identity matters.
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

      <SolutionCTA title="Verify the person, not just the paperwork" />
    </>
  );
}

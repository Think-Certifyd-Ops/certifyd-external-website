import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ComplianceDash } from "@/components/graphics/ComplianceDash";

export const metadata: Metadata = {
  title: "Getting Started for Organisations — Certifyd",
  description:
    "Deploy Certifyd across your organisation. Invite your team, connect compliance, and get audit-ready in minutes. No integration required.",
  alternates: { canonical: "/onboarding/organisation/" },
  openGraph: {
    title: "Getting Started for Organisations — Certifyd",
    description:
      "Deploy Certifyd across your organisation. Invite your team, connect compliance, and get audit-ready in minutes.",
    url: "https://www.certifyd.io/onboarding/organisation/",
  },
};

const steps = [
  "Register your organisation and set up your admin account",
  "Invite team members \u2014 they\u2019ll register their own devices with verified credentials",
  "Configure your compliance requirements and verification policies",
  "Your first audit report is ready. Real-time visibility from day one.",
];

const features = [
  {
    title: "Admin Dashboard",
    description:
      "See who\u2019s verified, who\u2019s pending, and your compliance score in real time. One view across your entire workforce \u2014 employees, contractors, and agency staff.",
  },
  {
    title: "Team Management",
    description:
      "Invite and manage team members at scale. Each person registers their own device. No IT department needed. No hardware to distribute.",
  },
  {
    title: "Compliance Monitoring",
    description:
      "Real-time compliance dashboard shows your verification coverage. Get alerted when team members need to re-verify or when coverage drops below your threshold.",
  },
  {
    title: "One-Click Audit Reports",
    description:
      "When the regulator arrives, generate a comprehensive compliance report in one click. Every verification, every timestamp, every record \u2014 ready for inspection.",
  },
  {
    title: "No Integration Required",
    description:
      "Certifyd works alongside your existing systems. No API integration, no IT project, no months of deployment. Your team is live in minutes, not months.",
  },
  {
    title: "Scales with Your Organisation",
    description:
      "From a team of 5 to a workforce of 5,000. Add new sites, departments, and teams without complexity. The platform grows with you.",
  },
];

export default function OrganisationOnboardingPage() {
  return (
    <>
      <SolutionHero
        badge="Getting Started"
        title="Protect Your Business in Minutes"
        subtitle="Deploy verifiable identity across your organisation. No IT project, no hardware, no months of implementation. Your team is verified and audit-ready from day one."
      >
        <ComplianceDash />
      </SolutionHero>

      <SolutionSteps steps={steps} title="How to Get Started" />

      {/* Platform Capabilities */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Platform Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Enterprise control.<br />
                <span className="text-certifyd-blue">Zero complexity.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
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

      <SolutionCTA
        title="Ready to protect your organisation?"
        secondaryLabel="Getting started for individuals"
        secondaryHref="/onboarding/person/"
      />
    </>
  );
}

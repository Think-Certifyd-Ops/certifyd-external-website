import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Security & Trust — How Certifyd Protects Your Data",
  description:
    "Certifyd uses device-verified identity authentication to protect identity data. No central credential store. No biometric databases. Just trust, built on provable security.",
  alternates: { canonical: "/security/" },
  openGraph: {
    title: "Security & Trust — How Certifyd Protects Your Data",
    description:
      "Device-verified identity authentication. No central credential store. No biometric databases.",
    url: "https://www.certifyd.io/security/",
  },
};

const securitySteps = [
  "Identity is bound to the user\u2019s physical device via a secure biometric authentication",
  "No passwords or credentials are stored on our servers \u2014 ever",
  "Every verification creates an auditable, verifiably signed record",
  "Audit trails are immutable and available for compliance at any time",
];

const principles = [
  {
    title: "Device-Verified Identity",
    description:
      "Your identity is tied to your physical device through secure biometric authentications. It can\u2019t be copied, phished, or stolen remotely. If someone doesn\u2019t have the device, they can\u2019t impersonate you.",
  },
  {
    title: "No Central Credential Store",
    description:
      "We don\u2019t store passwords, biometrics, or credentials on our servers. There\u2019s no database to breach. Verification credentials are linked to the user\u2019s device and cannot be transferred.",
  },
  {
    title: "End-to-End Verification",
    description:
      "Every verification is a real-time, verified exchange between two devices. Both parties prove their identity to each other simultaneously. Replay attacks and interception are mathematically impossible.",
  },
  {
    title: "Auditable Verification Trail",
    description:
      "Every verification creates an immutable record: who verified whom, when, where, and under what authority. Records cannot be altered after creation. Ready for regulatory audits at any time.",
  },
  {
    title: "Phishing Resistant by Design",
    description:
      "secure biometric authentications are bound to the originating domain. They cannot be used on phishing sites or replayed in man-in-the-middle attacks. The verified protocol prevents spoofing at the protocol level.",
  },
  {
    title: "Privacy by Default",
    description:
      "We collect only what\u2019s necessary. We don\u2019t track behaviour, sell data, or build profiles. Verification data is minimised to the verified identity of identity \u2014 nothing more.",
  },
];

const compliance = [
  {
    title: "UK GDPR",
    description: "Fully compliant with the UK General Data Protection Regulation. Data minimisation, purpose limitation, and user rights are built into the platform.",
  },
  {
    title: "ICO Registered",
    description: "Registered with the UK Information Commissioner\u2019s Office as a data controller.",
  },
  {
    title: "FIDO2 / WebAuthn",
    description: "Built on the FIDO2 standard, the same protocol used by Google, Apple, and Microsoft for passwordless authentication.",
  },
  {
    title: "Data Residency",
    description: "Data is processed and stored within the United Kingdom and European Economic Area. No unexpected international transfers.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <SolutionHero
        badge="Security & Trust"
        title="Your Identity Data Never Leaves Your Device"
        subtitle="Certifyd is built on device-verified identity authentication. No central credential store. No biometric databases. No passwords to steal. Just provable, phishing-resistant identity."
      />

      <SolutionSteps steps={securitySteps} title="How We Protect Data" />

      {/* Security Principles */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Security Architecture
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Built for zero trust.<br />
                <span className="text-certifyd-blue">Not just compliance.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 80}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <h3 className="font-heading text-lg font-semibold text-text-on-light mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="section-dark">
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Compliance & Standards
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Enterprise-grade<br />
                <span className="text-certifyd-blue">by design.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliance.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="border border-navy-border bg-navy-light rounded-sm p-8 hover:border-white/20 transition-all duration-300 h-full">
                  <h3 className="font-heading text-lg font-semibold text-text-on-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-on-dark-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="Security isn't a feature. It's the foundation."
        secondaryLabel="Read our Privacy Policy"
        secondaryHref="/privacy/"
      />
    </>
  );
}

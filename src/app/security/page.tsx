import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Security & Trust — How Certifyd Protects Your Data",
  description:
    "How Certifyd uses device-bound keys, data minimisation, signed events, recovery controls and documented security limitations.",
  alternates: { canonical: "/security/" },
  openGraph: {
    title: "Security & Trust — How Certifyd Protects Your Data",
    description:
      "Device-bound keys, signed events, recovery controls and clear security limitations.",
    url: "https://www.certifyd.io/security/",
  },
};

const securitySteps = [
  "Supported approval flows use device-bound cryptographic keys",
  "Biometric checks are performed by the phone and biometric templates are not sent to Certifyd",
  "Sensitive events create signed or tamper-evident security records where the product supports them",
  "Recovery and revocation are designed to invalidate old trust rather than silently transfer it",
];

const principles = [
  {
    title: "Device-Bound Approval",
    description:
      "Supported flows bind approval to a cryptographic key held by the enrolled device. A valid signature confirms control of that key, not a person\u2019s legal identity or freedom from coercion.",
  },
  {
    title: "Protected Account Credentials",
    description:
      "Where a product uses passwords, the server stores password hashes rather than plaintext. Device private keys and biometric templates are not uploaded to Certifyd.",
  },
  {
    title: "Replay-Resistant Exchanges",
    description:
      "Fresh nonces, short expiry times, signatures and server state are used to detect replay in supported protocols. No security protocol removes every relay, endpoint or implementation risk.",
  },
  {
    title: "Auditable Verification Trail",
    description:
      "Security events record the account, enrolled device, time and result needed for investigation. Some products add a tamper-evident hash chain. Retention and deletion follow the applicable product policy.",
  },
  {
    title: "Phishing Resistant by Design",
    description:
      "Domain-bound WebAuthn credentials and app-bound device keys reduce common credential phishing risks where implemented. Users must still check the request shown on the trusted surface.",
  },
  {
    title: "Privacy by Default",
    description:
      "We aim to collect only the account, device, relationship, request and security data needed for each service. We do not sell personal data or biometric templates.",
  },
];

const compliance = [
  {
    title: "UK GDPR",
    description: "Our controls and processes are designed to support UK GDPR duties including data minimisation, purpose limitation and user rights.",
  },
  {
    title: "ICO Registered",
    description: "Registered with the UK Information Commissioner\u2019s Office as a data controller.",
  },
  {
    title: "Platform Cryptography",
    description: "Products use platform security capabilities such as WebAuthn, Secure Enclave, Android Keystore, App Attest and Play Integrity where appropriate.",
  },
  {
    title: "Documented Processing",
    description: "Our privacy policy describes relevant processing and international-transfer safeguards. Product-specific disclosures are updated as services change.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <SolutionHero
        badge="Security & Trust"
        title="Security With Clear Boundaries"
        subtitle="Certifyd combines device-bound cryptography, signed events, recovery controls and data minimisation. We also state what each result does and does not prove."
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

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Certifyd",
  description:
    "How Certifyd collects, uses, and protects your personal data. GDPR-compliant privacy policy.",
  alternates: { canonical: "/privacy/" },
};

const sections = [
  {
    title: "1. Who We Are",
    content: `Certifyd Ltd ("Certifyd", "we", "us", "our") is the data controller responsible for your personal data. We are registered in England and Wales and our registered office is at Aldwych House, 71-91 Aldwych, London, England WC2B 4HN. You can contact us at team@certifyd.io.`,
  },
  {
    title: "2. What Data We Collect",
    content: `We collect data that you provide directly and data generated through your use of our services:

**Account data** — Name, email address, organisation name, and role when you create an account or request a demo.

**Verification data** — When you use Certifyd for identity verification, we process verified authentication data through your device. We do not store biometric data centrally. Verification records include timestamps, device identifiers, and confirmation of successful verification.

**Usage data** — How you interact with our website and services, including pages visited, features used, and session duration.

**Communications data** — Messages you send us via email, contact forms, or other channels.

**Technical data** — IP address, browser type, operating system, and device information collected automatically when you visit our website.`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We use your data for the following purposes:

- **Providing our services** — Processing verifications, managing your account, and delivering the Certifyd platform.
- **Communicating with you** — Responding to enquiries, sending service updates, and providing support.
- **Improving our services** — Analysing usage patterns to improve functionality, performance, and user experience.
- **Legal compliance** — Meeting our legal obligations, including maintaining audit trails required by employment and safeguarding regulations.
- **Security** — Detecting and preventing fraud, abuse, and security incidents.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following legal bases:

- **Contract performance** — Processing necessary to provide our services to you or your organisation.
- **Legitimate interests** — Processing necessary for our legitimate business interests, such as improving our services and ensuring security, where those interests are not overridden by your rights.
- **Legal obligation** — Processing required to comply with applicable laws and regulations.
- **Consent** — Where you have given specific consent, such as for marketing communications. You can withdraw consent at any time.`,
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell your personal data. We share data only in the following circumstances:

- **With your organisation** — If you use Certifyd through an organisation, your employer or contracting organisation may access verification records and compliance data.
- **Service providers** — We use trusted third-party providers for hosting, analytics, and communications. All providers are bound by data processing agreements.
- **Legal requirements** — We may disclose data where required by law, regulation, or legal process.
- **Business transfers** — In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your data only for as long as necessary for the purposes described in this policy:

- **Account data** — Retained for the duration of your account plus 12 months after deletion.
- **Verification records** — Retained for the period required by applicable regulations (typically 2-6 years depending on the use case).
- **Usage and technical data** — Retained for up to 26 months.
- **Communications** — Retained for up to 3 years after the last communication.`,
  },
  {
    title: "7. Your Rights",
    content: `Under the UK GDPR, you have the following rights:

- **Access** — Request a copy of the personal data we hold about you.
- **Rectification** — Request correction of inaccurate or incomplete data.
- **Erasure** — Request deletion of your data in certain circumstances.
- **Restriction** — Request that we restrict processing of your data.
- **Portability** — Request your data in a structured, machine-readable format.
- **Objection** — Object to processing based on legitimate interests or for direct marketing.
- **Withdraw consent** — Where processing is based on consent, withdraw it at any time.

To exercise any of these rights, contact us at team@certifyd.io. We will respond within one month.`,
  },
  {
    title: "8. International Transfers",
    content: `Your data is primarily processed and stored within the United Kingdom and European Economic Area. Where we transfer data outside these regions, we ensure appropriate safeguards are in place, including standard contractual clauses approved by the UK Information Commissioner's Office (ICO).`,
  },
  {
    title: "9. Cookies",
    content: `We use cookies and similar technologies on our website. For full details on the cookies we use and how to manage them, please see our Cookie Policy.`,
  },
  {
    title: "10. Security",
    content: `We implement appropriate technical and organisational measures to protect your personal data. Our platform uses device-verified identity authentication (WebAuthn/verified credentials), meaning sensitive identity data never leaves your device. For more information, see our Security & Trust page.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this privacy policy from time to time. We will notify you of significant changes by posting a notice on our website or by contacting you directly. The date at the top of this page indicates when this policy was last updated.`,
  },
  {
    title: "12. Contact & Complaints",
    content: `If you have questions about this privacy policy or wish to exercise your rights, contact us at:

**Certifyd Ltd**
Aldwych House, 71-91 Aldwych, London, England WC2B 4HN
Email: team@certifyd.io

You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            Legal
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-on-dark">
            Privacy Policy
          </h1>
          <p className="text-text-on-dark-muted mt-4 text-lg">
            Last updated: February 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="prose-policy space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl font-semibold text-text-on-light mb-4">
                  {section.title}
                </h2>
                <div className="text-sm leading-relaxed text-text-on-light-muted whitespace-pre-line">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <strong key={i} className="text-text-on-light font-medium">
                        {part}
                      </strong>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-warm-border">
            <p className="text-sm text-text-on-light-muted">
              See also:{" "}
              <Link
                href="/cookies/"
                className="text-certifyd-blue hover:underline"
              >
                Cookie Policy
              </Link>
              {" | "}
              <Link
                href="/security/"
                className="text-certifyd-blue hover:underline"
              >
                Security & Trust
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

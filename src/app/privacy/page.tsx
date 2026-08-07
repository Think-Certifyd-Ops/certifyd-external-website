import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Certifyd",
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

**Account data**: Name, email address, organisation name, role and password hash where the service uses password authentication.

**CodeWords data**: Registered-device public keys and fingerprints, platform and app version, push notification tokens, trusted relationships, in-person connection transcript hashes, challenge context and decisions, timestamps, recovery state, app-integrity results and security audit events. We do not receive the private signing keys or biometric templates held by your phone. Push alerts use generic event text and do not include names, request details, decisions, recovery codes or challenge identifiers.

**Other verification data**: Information required for the Certifyd service you choose, which may include verification status, timestamps, device identifiers and signed confirmation records. The relevant product flow explains what it needs before collection.

**Usage data**: How you interact with our website and services, including pages visited, features used and session duration where measurement is enabled.

**Communications data**: Messages you send us through email, contact forms or support channels.

**Technical and security data**: IP address, browser type, operating system, app version, integrity results and limited diagnostic information used to operate and protect the service.

CodeWords does not upload your address book, record calls or audio, store QR camera frames or collect precise location. On Android 11 and earlier, the operating system classifies Bluetooth discovery under a location permission; CodeWords does not read or retain coordinates.`,
  },
  {
    title: "3. How We Use Your Data",
    content: `We use your data for the following purposes:

- **Providing our services**: Managing accounts, registering devices, creating or revoking relationships, delivering challenges and supporting recovery.
- **Communicating with you**: Verifying email, sending security alerts, responding to enquiries and providing support.
- **Improving our services**: Analysing aggregate usage and reliability patterns to improve functionality and user experience.
- **Legal compliance**: Meeting applicable legal obligations and responding to valid requests.
- **Security**: Detecting abuse, enforcing rate limits, validating app integrity and investigating security incidents.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `Under the UK General Data Protection Regulation (UK GDPR), we process your data on the following legal bases:

- **Contract performance**: Processing necessary to provide a service you request.
- **Legitimate interests**: Processing necessary to secure, operate and improve our services where those interests are not overridden by your rights.
- **Legal obligation**: Processing required to comply with applicable law.
- **Consent**: Where you have given specific consent, such as for marketing communications. You can withdraw consent at any time.`,
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell your personal data. We share data only in the following circumstances:

- **With your organisation**: If you use an organisation-managed service, authorised administrators may access the records described in that service.
- **Service providers**: We use contracted providers for hosting, application distribution, push notification delivery, integrity checks, email and support. They process data under our instructions and applicable agreements.
- **Legal requirements**: We may disclose data where required by law or valid legal process.
- **Business transfers**: If ownership of the business changes, data may transfer subject to appropriate notice and safeguards.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data only for as long as needed for the purpose described or a documented legal requirement:

- **CodeWords account, device, relationship, challenge and audit data**: Retained while the account is active. The in-app deletion flow removes the account and associated active-service records. Deleted data may remain in protected backups until those backups age out under the provider schedule.
- **Rate-limit records**: Short-lived pseudonymous security buckets retained for the active protection window and operational cleanup period.
- **App-integrity records**: Retained only as needed to validate the installed app, investigate abuse and support key lifecycle requirements.
- **Website usage and technical data**: Retention depends on the enabled provider and is kept no longer than needed for measurement, reliability or security.
- **Communications**: Retained while needed to answer the request, maintain support history or meet a legal obligation.

Other Certifyd products may require a different documented retention period. We explain that period in the relevant service or agreement.`,
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

To exercise any of these rights, use our account deletion page or contact team@certifyd.io with “Privacy” in the subject. We will respond within the period required by applicable law.`,
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
    content: `We use technical and organisational controls appropriate to each service, including encrypted transport, access control, password hashing, device-bound keys, short-lived challenges, rate limiting, audit events and recovery controls. No system is free of risk. See our Security & Trust page and the CodeWords security model for the controls and limitations relevant to that service.`,
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
            Last updated: 7 August 2026
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
              {" | "}
              <Link
                href="/account-deletion/"
                className="text-certifyd-blue hover:underline"
              >
                Account deletion
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

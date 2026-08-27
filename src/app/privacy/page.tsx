import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Certifyd",
  description: "How Certifyd handles account, device, relationship and challenge data.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    title: "Privacy Policy | Certifyd",
    description: "How Certifyd handles account, device, relationship and challenge data.",
    url: "https://www.certifyd.io/privacy/",
  },
};

const sections = [
  {
    title: "1. Who we are",
    paragraphs: [
      "Certifyd Ltd (Certifyd, we, us or our) is responsible for the personal data described in this policy. We are registered in England and Wales and our registered office is at Aldwych House, 71-91 Aldwych, London, England WC2B 4HN.",
      "For privacy questions or requests, contact team@certifyd.io.",
    ],
  },
  {
    title: "2. Data used by Certifyd CodeWords",
    paragraphs: [
      "Account data includes your email address, account status and the information needed to authenticate and support your account.",
      "Device and security data includes registered public keys, operating system and app version, device capability and integrity signals, registration time, notification tokens, IP address and security events. Private device signing keys remain in platform-protected storage where the phone supports it and are not sent to Certifyd.",
      "Trusted relationship data includes the accounts and registered devices in a relationship, display labels, creation and revocation events, and the assurance information produced during direct device setup.",
      "Challenge data includes the request type, exact request text and any amount, recipient or detail that you choose to include, together with timestamps, expiry, status and signed responses. If a recipient reports a request as unsafe or abusive, we also store a moderation report linked to that request and the two accounts. Do not add information that is not needed to check the action.",
      "The app requests camera access to scan changing QR frames and nearby-device access to discover the matching Bluetooth service during setup. QR camera images are not retained. CodeWords does not need your address book, call audio, microphone recordings or precise location for this flow.",
      "Biometric approval is handled by your phone's operating system. Certifyd receives the result needed to unlock a protected action, not your fingerprint or face template.",
    ],
  },
  {
    title: "3. Website, support and business data",
    paragraphs: [
      "When you visit our website or contact us, we may process your IP address, browser and device information, pages viewed, cookie choices, messages and contact details. If an organisation uses CodeWords, we may also process its name, administrator details, policy choices and support records.",
    ],
  },
  {
    title: "4. Why we use data",
    paragraphs: [
      "We use personal data to create and protect accounts, register and revoke devices, establish trusted relationships, deliver exact-request challenges, show signed results, support recovery and deletion, prevent abuse, investigate security events and provide customer support.",
      "We also use limited website and service data to operate, measure and improve Certifyd, communicate service changes and meet legal obligations. We do not sell personal data.",
    ],
  },
  {
    title: "5. Legal bases",
    paragraphs: [
      "Under UK data protection law, we rely on contract where processing is needed to provide a service you request; legitimate interests to secure, support and improve the service; legal obligation where the law requires processing; and consent for optional marketing or similar uses. You may withdraw consent at any time, without affecting earlier lawful processing.",
    ],
  },
  {
    title: "6. When data is shared",
    paragraphs: [
      "Railway hosts the CodeWords API and PostgreSQL database. Resend sends account, recovery, security and moderation emails. Expo Push Service and Apple Push Notification service deliver generic notifications that do not contain challenge details. Apple also provides App Attest and the operating-system services used for protected keys, biometrics, camera access and Bluetooth. These providers process data for the service they supply under their own security and privacy terms.",
      "A trusted relationship necessarily shares challenge and response information with the two participants in that relationship. A report of unsafe or abusive content is available to authorised Certifyd personnel for moderation and support.",
      "For a business account, an authorised organisation administrator may see account, device, policy and challenge audit information allowed by the organisation's service agreement and product controls. We may also disclose data when required by law, to protect people or the service, or as part of a business transfer subject to appropriate safeguards.",
    ],
  },
  {
    title: "7. Retention and deletion",
    paragraphs: [
      "We keep account, device, relationship and challenge data only for as long as needed to provide and secure the service, resolve disputes and meet legal obligations. Retention can vary by data type and by an organisation's configured policy.",
      "When in-app account deletion completes, the account and its active service records are deleted, including registered devices, trusted relationships, challenges, push tokens, recovery records and associated security events. Service-provider backups may remain until their normal protected backup cycle expires. If the law requires us to retain a separate record, we will restrict it, keep only what is required and explain that retention when confirming the request.",
    ],
  },
  {
    title: "8. International transfers",
    paragraphs: [
      "If personal data is processed outside the United Kingdom, we use an approved transfer mechanism or another lawful safeguard, such as the UK International Data Transfer Agreement or the UK Addendum to standard contractual clauses, where required.",
    ],
  },
  {
    title: "9. Your rights",
    paragraphs: [
      "Depending on the law that applies, you may ask for access, correction, deletion, restriction, portability or an objection to certain processing. You may also withdraw consent and complain to the UK Information Commissioner's Office.",
      "Contact team@certifyd.io to make a request. We may need to verify that the request concerns your account. You can also start account deletion in CodeWords Settings or on our account deletion page.",
    ],
  },
  {
    title: "10. Security and product limits",
    paragraphs: [
      "We use technical and organisational controls intended to protect data, including encrypted transport, access control, protected device keys where supported, signed challenge messages and security monitoring. No service can promise absolute security.",
      "A valid CodeWords confirmation means a previously enrolled phone approved the displayed request. It does not prove a voice, email address, video image or legal identity; prevent coercion; or guarantee that the requested action is safe.",
    ],
  },
  {
    title: "11. Children",
    paragraphs: [
      "CodeWords is not intended for a child to create and manage an account independently where parental consent is required by law. Family use must be supervised by a parent or guardian and must not replace emergency or safeguarding procedures.",
    ],
  },
  {
    title: "12. Changes and contact",
    paragraphs: [
      "We may update this policy as the service, law or our suppliers change. We will post the revised date and give additional notice when a change materially affects your rights or how we use data.",
      "Contact Certifyd Ltd at team@certifyd.io or Aldwych House, 71-91 Aldwych, London, England WC2B 4HN. You can find independent information and complaint routes at ico.org.uk.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full bg-certifyd-blue/15 px-3 py-1 font-heading text-xs font-medium text-certifyd-blue">Legal</span>
          <h1 className="font-heading text-4xl font-bold text-text-on-dark lg:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-text-on-dark-muted">Last updated: 27 August 2026</p>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-14 text-base leading-relaxed text-text-on-light-muted">
            This policy covers Certifyd websites and services, including CodeWords for Personal Use and CodeWords for Business.
          </p>
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 font-heading text-xl font-semibold text-text-on-light">{section.title}</h2>
                <div className="space-y-4 text-sm leading-relaxed text-text-on-light-muted">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-warm-border pt-8 text-sm text-text-on-light-muted">
            <Link href="/cookies/" className="text-certifyd-blue hover:underline">Cookie Policy</Link>
            {" | "}
            <Link href="/terms/" className="text-certifyd-blue hover:underline">Terms of Service</Link>
            {" | "}
            <Link href="/support/codewords/" className="text-certifyd-blue hover:underline">CodeWords Support</Link>
            {" | "}
            <Link href="/account-deletion/" className="text-certifyd-blue hover:underline">Account Deletion</Link>
          </div>
        </div>
      </section>
    </>
  );
}

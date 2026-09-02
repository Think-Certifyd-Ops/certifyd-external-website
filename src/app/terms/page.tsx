import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Certifyd",
  description: "The terms that apply when you use Certifyd CodeWords.",
  alternates: { canonical: "/terms/" },
  openGraph: {
    title: "Terms of Service | Certifyd",
    description: "The terms that apply when you use Certifyd CodeWords.",
    url: "https://certifyd.io/terms/",
  },
};

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By creating an account or using Certifyd CodeWords, you agree to these Terms of Service. If you use CodeWords for an organisation, you confirm that you are authorised to accept these terms for that organisation.",
  },
  {
    title: "2. What CodeWords does",
    body: "CodeWords helps people create trusted device connections and check the exact requests shown in the app. A confirmation means that an enrolled device approved that request. It does not prove that a voice, email, video image or legal identity is genuine.",
  },
  {
    title: "3. Your account and device",
    body: "You must provide accurate account information, protect access to your account and devices, and promptly block or revoke a trusted connection if the phone or relationship should no longer be trusted.",
  },
  {
    title: "4. Acceptable use",
    body: "You must not use Certifyd to impersonate another person, create fraudulent trust records, send abusive or illegal content, coerce an approval, interfere with the service, or support unlawful activity. We may investigate reports and suspend access where needed to protect users or the service.",
  },
  {
    title: "5. Decisions and payments",
    body: "CodeWords is a checking control. It does not execute payments and does not replace your judgement, organisational approvals, independent call-backs or emergency and safeguarding procedures. Stop if a result or situation still feels wrong.",
  },
  {
    title: "6. Availability and liability",
    body: "The service is provided subject to applicable law. No security system can prevent every form of fraud, coercion, device compromise or service interruption. Nothing in these terms excludes liability that cannot lawfully be excluded.",
  },
  {
    title: "7. Privacy and account deletion",
    body: "Our Privacy Policy explains how we use personal data. You can delete your account from CodeWords Settings. Deletion ends trusted connections and removes active service records as described in that policy.",
  },
  {
    title: "8. Changes and contact",
    body: "We may update these terms as the service or law changes and will give additional notice where required. Contact team@certifyd.io with questions about these terms.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full bg-certifyd-blue/15 px-3 py-1 font-heading text-xs font-medium text-certifyd-blue">Legal</span>
          <h1 className="font-heading text-4xl font-bold text-text-on-dark lg:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-text-on-dark-muted">Last updated: 27 August 2026</p>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 font-heading text-xl font-semibold text-text-on-light">{section.title}</h2>
                <p className="text-sm leading-relaxed text-text-on-light-muted">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-warm-border pt-8 text-sm text-text-on-light-muted">
            <Link href="/privacy/" className="text-certifyd-blue hover:underline">Privacy Policy</Link>
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

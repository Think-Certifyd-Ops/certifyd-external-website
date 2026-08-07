import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Certifyd Account",
  description:
    "How to delete a Certifyd CodeWords account in the app or request deletion when you no longer have access to the app.",
  alternates: { canonical: "/account-deletion/" },
  openGraph: {
    title: "Delete Your Certifyd Account",
    description: "In-app and web-assisted account deletion for Certifyd CodeWords.",
    url: "https://www.certifyd.io/account-deletion/",
  },
};

export default function AccountDeletionPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="section-container">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">Privacy control</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-text-on-dark max-w-3xl">Delete your Certifyd account</h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6">
            You can delete a CodeWords account in the app. If you no longer have app access, you can request deletion from this page.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-warm-border rounded-sm p-8">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-3">Fastest route</p>
              <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">Delete in the app</h2>
              <ol className="space-y-3 text-text-on-light-muted list-decimal pl-5">
                <li>Open CodeWords and sign in.</li>
                <li>Open Settings, then Account Management.</li>
                <li>Choose Delete account.</li>
                <li>Enter the current account password, read the effect and confirm.</li>
              </ol>
            </div>
            <div className="bg-white border border-warm-border rounded-sm p-8">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-3">No app access</p>
              <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">Request deletion by email</h2>
              <p className="text-text-on-light-muted leading-relaxed mb-5">
                Email us from the address on the account. Use the subject “Delete my Certifyd CodeWords account.” We will verify the request without asking for your password, biometric or recovery code.
              </p>
              <a className="inline-flex font-semibold text-certifyd-blue hover:underline" href="mailto:team@certifyd.io?subject=Delete%20my%20Certifyd%20CodeWords%20account">
                Request account deletion
              </a>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">What deletion removes</h2>
            <p className="text-text-on-light-muted leading-relaxed mb-5">
              The active CodeWords deletion flow removes the account and its device records, trusted relationships, in-person connection records, challenges, sessions, recovery state and account audit events from active systems. Other people will no longer be able to use the deleted relationship.
            </p>
            <p className="text-text-on-light-muted leading-relaxed mb-5">
              Deleted data may remain in protected service backups until those backups age out under the provider schedule. We may retain limited information only where a documented legal obligation requires it, and will explain that exception when it applies.
            </p>
            <p className="text-text-on-light-muted leading-relaxed">
              Deletion is permanent. A later account is new and cannot recover the deleted phone or trusted relationships.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-warm-border flex flex-wrap gap-6 text-sm">
            <Link className="text-certifyd-blue hover:underline" href="/privacy/">Privacy policy</Link>
            <Link className="text-certifyd-blue hover:underline" href="/support/codewords/">CodeWords support</Link>
          </div>
        </div>
      </section>
    </>
  );
}

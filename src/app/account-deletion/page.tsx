import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Delete Your Certifyd Account",
  description: "Request deletion of your Certifyd account and associated CodeWords data.",
  alternates: { canonical: "/account-deletion/" },
};

export default function AccountDeletionPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-18 lg:pt-40 lg:pb-24">
        <div className="section-container">
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">Account controls</p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-text-on-dark lg:text-6xl">
            Delete your Certifyd account.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-on-dark-muted">
            You can start account deletion in the app or request it from the web.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container max-w-4xl">
          <div className="space-y-8">
            <article className="rounded-sm border border-warm-border bg-white p-8">
              <h2 className="font-heading text-2xl font-bold text-text-on-light">Delete in the app</h2>
              <ol className="mt-5 list-decimal space-y-3 pl-5 text-text-on-light-muted">
                <li>Open Certifyd CodeWords and go to Settings.</li>
                <li>Open Account management, then choose Delete account.</li>
                <li>Confirm with your current account credentials.</li>
              </ol>
            </article>

            <article className="rounded-sm border border-warm-border bg-white p-8">
              <h2 className="font-heading text-2xl font-bold text-text-on-light">Request deletion on the web</h2>
              <p className="mt-4 leading-relaxed text-text-on-light-muted">
                Use the deletion request link and provide the email address on your account. We may ask you to verify control of that address before deletion begins. Never send your password or a biometric record.
              </p>
              <div className="mt-6">
                <Button href="/contact/?subject=Certifyd%20account%20deletion%20request">Request account deletion</Button>
              </div>
            </article>

            <article className="rounded-sm border border-amber-300 bg-amber-50 p-8 text-amber-950">
              <h2 className="font-heading text-2xl font-bold">What deletion changes</h2>
              <p className="mt-4 leading-relaxed">
                Account deletion removes access to your account, revokes its registered devices and ends its trusted relationships. Challenge and security records linked to the account are deleted or de-identified, except for limited records we must retain for fraud prevention, dispute handling or legal obligations. We will explain any required retention when we confirm the request.
              </p>
              <p className="mt-4 leading-relaxed">
                Deletion cannot be used to move trust to a replacement phone. Add the new phone as a new device with the people you trust.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

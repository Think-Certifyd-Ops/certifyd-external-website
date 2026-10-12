import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifyd CodeWords Security",
  description: "What CodeWords checks, how direct device setup works and where the current security limits are.",
  alternates: { canonical: "/security/codewords/" },
  openGraph: {
    title: "Certifyd CodeWords Security",
    description: "What CodeWords checks, how direct device setup works and where the current security limits are.",
    url: "https://certifyd.io/security/codewords/",
  },
};

const controls = [
  {
    title: "Protected device keys",
    body: "Each installation creates signing keys held in platform-protected storage where the phone supports it. The service registers public keys, not the private signing key.",
  },
  {
    title: "Changing signed QR frames",
    body: "The presenting phone changes frames about every 1.2 seconds. The scanner requires three fresh, sequential frames and rejects an expired session.",
  },
  {
    title: "A fresh signed Bluetooth challenge",
    body: "The scanner connects to the matching advertised service and sends a fresh random challenge. The presenting phone signs it, and the scanner and service verify the answer against the public key carried by LiveQR.",
  },
  {
    title: "Request-bound answers",
    body: "The full action, amount, recipient or account details are shown before approval. A signed challenge expires after five minutes and can be answered once.",
  },
  {
    title: "Clear negative signals",
    body: "The enrolled phone can confirm, deny or report pressure. A new phone must be added again and must not silently inherit old trusted relationships.",
  },
  {
    title: "Minimal permissions",
    body: "Camera and nearby-device access support direct setup. CodeWords does not need contact-book upload, call audio, microphone recordings or precise location for this flow.",
  },
];

export default function CodeWordsSecurityPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="section-container">
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">CodeWords security</p>
          <h1 className="mt-4 max-w-4xl font-heading text-4xl font-bold leading-tight text-text-on-dark lg:text-6xl">
            Confirm the enrolled phone and the exact request.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-on-dark-muted">
            CodeWords adds a separate signed challenge when a call, message or email asks you to do something sensitive. It reduces reliance on the channel that may be under attack.
          </p>
          <p className="mt-6 text-sm text-text-on-dark-muted">Protocol summary updated 27 August 2026 • Current release assurance</p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <article key={control.title} className="rounded-sm border border-warm-border bg-white p-7">
                <h2 className="font-heading text-xl font-bold text-text-on-light">{control.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-on-light-muted">{control.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-emerald-400/25 bg-emerald-400/10 p-8">
              <h2 className="font-heading text-2xl font-bold text-emerald-300">A valid confirmation means</h2>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-text-on-dark-muted">
                <li>The previously enrolled phone responded.</li>
                <li>The responder opened CodeWords and approved the request shown.</li>
                <li>The signed answer was fresh and bound to those details.</li>
              </ul>
            </div>
            <div className="rounded-sm border border-amber-300/25 bg-amber-300/10 p-8">
              <h2 className="font-heading text-2xl font-bold text-amber-300">It does not prove</h2>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-text-on-dark-muted">
                <li>That a voice, email address, video image or legal identity is genuine.</li>
                <li>That the phone is not stolen and already unlocked.</li>
                <li>That the person is free from pressure or that the action is safe.</li>
                <li>An exact physical distance between the phones.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-sm border border-certifyd-blue/35 bg-certifyd-blue/10 p-8">
            <h2 className="font-heading text-2xl font-bold text-text-on-dark">What Bluetooth proves today</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-text-on-dark-muted">
              CodeWords exchanges a fresh application-authenticated Bluetooth challenge tied to the LiveQR session. The challenge is signed, but it is not application-encrypted and the phones do not need to pair. This makes passive copying and forgery less useful, but it does not prove an exact distance. A modified app or coordinated relay can still attack the ceremony. The comparison words and number help both people detect a mismatched session before accepting.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-text-on-light">Found a security issue?</h2>
          <p className="mt-4 leading-relaxed text-text-on-light-muted">
            Contact us before sharing exploit details publicly. Include the affected app version and a minimal reproduction. Do not send live QR payloads, private keys, passwords or another person&apos;s challenge content.
          </p>
          <p className="mt-5 text-text-on-light-muted">
            <Link href="/contact/?subject=CodeWords%20security%20report" className="font-semibold text-certifyd-blue hover:underline">Report a CodeWords security issue</Link>
            {" • "}
            <Link href="/support/codewords/" className="font-semibold text-certifyd-blue hover:underline">Get product support</Link>
          </p>
        </div>
      </section>
    </>
  );
}

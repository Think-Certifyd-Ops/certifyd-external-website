import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CodeWords Security Model | Certifyd",
  description:
    "How CodeWords binds an in-person connection, signs later challenges, handles recovery and defines the limits of enrolled-device confirmation.",
  alternates: { canonical: "/security/codewords/" },
  openGraph: {
    title: "CodeWords Security Model | Certifyd",
    description:
      "Protocol controls, threat boundaries, recovery and privacy for Certifyd CodeWords.",
    url: "https://www.certifyd.io/security/codewords/",
  },
};

const controls = [
  {
    title: "Two keys with different jobs",
    body: "Each enrolled phone creates a presence key and a separate approval key. Private keys remain in platform-protected storage where supported. The server receives public keys and signed proofs.",
  },
  {
    title: "One live in-person transcript",
    body: "The QR session carries a fresh signed offer and changes rapidly. The scanner collects multiple signed frames and completes a fresh Bluetooth GATT challenge signed by the same presenting-phone key.",
  },
  {
    title: "Human comparison",
    body: "Both phones derive the same three words and six-digit number from the connection transcript. Both people compare them before approving on their own phone.",
  },
  {
    title: "Action-bound challenges",
    body: "A later challenge names the exact action, both enrolled devices, a fresh nonce and an expiry. The requester and response are signed so a result cannot be moved silently to another request.",
  },
  {
    title: "Revocation instead of inheritance",
    body: "Only one phone may be active on an account. A changed approval key or completed phone recovery revokes old phones, sessions, relationships and pending challenges.",
  },
  {
    title: "Layered server controls",
    body: "Verified email, shared rate limits, app-integrity checks, short-lived sessions and tamper-evident audit events add protection around the device protocol.",
  },
];

const boundaries = [
  ["A saved QR image", "The session is short-lived and the scanner also requires a fresh signed Bluetooth exchange from the QR key."],
  ["A copied Bluetooth advertisement", "An advertisement is not accepted as proof. The scanner sends a fresh nonce over GATT and verifies the presenting phone's signature."],
  ["A replayed challenge response", "The response is bound to one challenge hash, one relationship, the enrolled responder device and an expiry."],
  ["Login on a new phone", "An account with an active phone cannot register another phone. Recovery is delayed and revokes inherited trust."],
  ["Database changes", "Device signatures are checked independently and audit events are hash chained. Database access remains a serious incident and is not treated as harmless."],
];

const limitations = [
  "A valid result confirms control of the enrolled approval key for the exact request. It does not prove a voice, email sender, video image or legal identity.",
  "Bluetooth confirms a direct radio protocol exchange, not a measured physical distance. Signal strength is not used as proof, and a sophisticated real-time relay remains part of the threat model.",
  "The first connection is only as trustworthy as the people and devices present. Meeting the wrong person securely creates the wrong trusted relationship.",
  "Biometrics reduce casual misuse but do not remove coercion, malware, operating-system compromise or abuse of an already unlocked phone.",
  "Recovery depends on the account password, verified email and cooling period. A compromised email account is therefore a serious risk.",
  "CodeWords cannot decide whether a requested payment or action is wise, lawful or safe. It adds a confirmation control and does not replace judgement or organisational approvals.",
];

export default function CodeWordsSecurityPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="section-container">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            CodeWords security
          </span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-text-on-dark max-w-4xl leading-tight">
            An enrolled-device confirmation with clear limits.
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-3xl mt-6 leading-relaxed">
            CodeWords combines an in-person QR and Bluetooth ceremony with device-bound signatures for later requests. This page explains the security result without treating it as proof of a person.
          </p>
          <p className="text-sm text-text-on-dark-muted mt-6">Model version: 1.0. Updated 7 August 2026.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="mb-12">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-4">Protocol controls</p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light">What the design checks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {controls.map((control) => (
              <div key={control.title} className="bg-white border border-warm-border rounded-sm p-7">
                <h3 className="font-heading text-lg font-semibold text-text-on-light mb-3">{control.title}</h3>
                <p className="text-sm text-text-on-light-muted leading-relaxed">{control.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <div className="mb-12">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-4">Attack handling</p>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark">How common attacks are handled</h2>
          </div>
          <div className="divide-y divide-navy-border border-y border-navy-border">
            {boundaries.map(([attack, response]) => (
              <div key={attack} className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                <h3 className="font-heading font-semibold text-text-on-dark">{attack}</h3>
                <p className="md:col-span-2 text-sm text-text-on-dark-muted leading-relaxed">{response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y border-amber-200/70">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="font-heading text-xs font-semibold uppercase tracking-wider text-amber-700 mb-4">Known limitations</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light mb-8">What CodeWords does not prove</h2>
            <ul className="space-y-4">
              {limitations.map((limitation) => (
                <li key={limitation} className="flex gap-4 text-text-on-light-muted leading-relaxed">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                  <span>{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">Data minimisation</h2>
              <p className="text-text-on-light-muted leading-relaxed">
                CodeWords stores account details, device public keys, push notification tokens, relationship records, transcript hashes, challenge state, recovery state, integrity results and security events. Push alerts contain generic event text only. CodeWords does not upload contact books, private keys, biometric templates, call audio, QR camera frames or precise location.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-on-light mb-4">Report a vulnerability</h2>
              <p className="text-text-on-light-muted leading-relaxed mb-4">
                Send a reproducible report to team@certifyd.io with “CodeWords security” in the subject. Do not access another person&apos;s data, disrupt the service or use coercion in testing.
              </p>
              <a className="text-certifyd-blue font-semibold hover:underline" href="mailto:team@certifyd.io?subject=CodeWords%20security%20report">
                Email the security team
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-warm-border flex flex-wrap gap-6 text-sm">
            <Link className="text-certifyd-blue hover:underline" href="/products/codewords/">CodeWords product</Link>
            <Link className="text-certifyd-blue hover:underline" href="/privacy/">Privacy policy</Link>
            <Link className="text-certifyd-blue hover:underline" href="/support/codewords/">CodeWords support</Link>
          </div>
        </div>
      </section>
    </>
  );
}

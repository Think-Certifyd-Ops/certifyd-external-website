import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CodeWords Support | Certifyd",
  description:
    "Help with CodeWords setup, permissions, challenges, phone recovery, revocation, account deletion and security concerns.",
  alternates: { canonical: "/support/codewords/" },
  openGraph: {
    title: "CodeWords Support | Certifyd",
    description: "Setup, challenge, recovery and account help for Certifyd CodeWords.",
    url: "https://www.certifyd.io/support/codewords/",
  },
};

const topics = [
  {
    title: "Connect a trusted phone",
    content: "Meet the other person with both phones unlocked and online. On one phone choose People, Add a trusted person, Show my code. On the other choose Scan their code. Allow camera and Bluetooth, compare the three words and number on both screens, then approve on each phone.",
  },
  {
    title: "Camera or Bluetooth is denied",
    content: "Open the phone's system settings for CodeWords and allow Camera and Nearby devices or Bluetooth. On Android 11 and earlier, Bluetooth discovery is grouped under Location permission, but CodeWords does not read or store coordinates.",
  },
  {
    title: "The short codes do not match",
    content: "Do not approve. Cancel both sessions, keep the phones together and begin again. Matching codes are part of the connection check, not an optional confirmation.",
  },
  {
    title: "Challenge a request",
    content: "Choose Challenge, select a trusted connection, then describe the exact action. Include the recipient and amount for a money request. The other phone can Confirm, Deny or choose I am being pressured before the challenge expires.",
  },
  {
    title: "A phone is lost or replaced",
    content: "Sign in, choose Recover this phone and complete password and verified-email checks. Recovery has a cooling period and revokes every old phone, session, relationship and pending challenge. You must meet trusted people again.",
  },
  {
    title: "Revoke a trusted connection",
    content: "Open People, select the connection and choose Revoke. Pending challenges stop and the connection cannot be restored silently. Meet and reconnect if you trust the person again.",
  },
];

export default function CodeWordsSupportPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="section-container">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">Support</span>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-text-on-dark">CodeWords help</h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6">
            Setup, challenge, recovery and account guidance for the CodeWords mobile app.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <article key={topic.title} className="bg-white border border-warm-border rounded-sm p-7">
                <h2 className="font-heading text-xl font-semibold text-text-on-light mb-3">{topic.title}</h2>
                <p className="text-sm text-text-on-light-muted leading-relaxed">{topic.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-on-dark mb-3">General support</h2>
              <a className="text-certifyd-blue hover:underline" href="mailto:team@certifyd.io?subject=CodeWords%20support">team@certifyd.io</a>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-on-dark mb-3">Security concern</h2>
              <a className="text-certifyd-blue hover:underline" href="mailto:team@certifyd.io?subject=CodeWords%20security%20concern">team@certifyd.io</a>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-on-dark mb-3">Privacy or deletion</h2>
              <Link className="text-certifyd-blue hover:underline" href="/account-deletion/">Account deletion help</Link>
            </div>
          </div>
          <p className="text-sm text-text-on-dark-muted mt-10">
            Never send us a password, recovery code, biometric information, private signing key or full QR payload. Support will not ask you to approve a challenge.
          </p>
        </div>
      </section>
    </>
  );
}

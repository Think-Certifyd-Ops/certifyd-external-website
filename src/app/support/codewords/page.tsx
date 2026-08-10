import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Certifyd CodeWords Support",
  description:
    "Setup, challenge, recovery, privacy and safety help for Certifyd CodeWords.",
  alternates: { canonical: "/support/codewords/" },
};

const help = [
  {
    title: "Add a trusted person",
    body: "Sign in on two supported phones and put them side by side. One person shows their changing LiveQR. The other scans it while Bluetooth is on. Compare the same three words and six-digit number on both screens, then approve on each phone.",
  },
  {
    title: "A scan will not complete",
    body: "Keep both apps open, allow camera and nearby-device access, turn Bluetooth on and keep the phones close. Do not use a screenshot or recording of the QR. Restart the setup if it expires or either phone shows different comparison words.",
  },
  {
    title: "Check a suspicious request",
    body: "Open the trusted person, create a challenge and describe the exact action, amount, recipient or account. The other phone can confirm, deny or report pressure. Wait for the signed answer inside CodeWords before deciding what to do.",
  },
  {
    title: "A result does not look right",
    body: "Do not act. Contact the person through another known route. A CodeWords confirmation means the enrolled phone approved the displayed request. It does not prove a caller's voice, email address, video image or legal identity.",
  },
  {
    title: "A phone is lost, stolen or replaced",
    body: "Revoke the old trusted connection as soon as possible. A replacement phone must be treated as a new device and directly added again. Recovery must not silently transfer old trust to a new phone.",
  },
  {
    title: "Someone is under pressure",
    body: "Stop the action and follow your agreed family or workplace safety plan. Do not confront a caller if doing so could increase risk. Contact emergency services when there is immediate danger.",
  },
];

export default function CodeWordsSupportPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-18 lg:pt-40 lg:pb-24">
        <div className="section-container">
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
            CodeWords support
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-text-on-dark lg:text-6xl">
            Get a safe answer before you act.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-on-dark-muted">
            Help with direct device setup, exact-request challenges, lost phones and account controls.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-2">
            {help.map((item) => (
              <article key={item.title} className="rounded-sm border border-warm-border bg-white p-7">
                <h2 className="font-heading text-xl font-bold text-text-on-light">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-on-light-muted">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-certifyd-blue/25 bg-certifyd-blue/5 p-8">
            <h2 className="font-heading text-2xl font-bold text-text-on-light">Still need help?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-text-on-light-muted">
              Tell us which phone models you are using, the app version and the step that failed. Do not send passwords, live QR images, comparison codes or sensitive challenge details.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact/?subject=CodeWords%20support">Contact CodeWords support</Button>
              <Button href="/account-deletion/" variant="outline">Delete an account</Button>
            </div>
          </div>

          <p className="mt-8 text-sm text-text-on-light-muted">
            Also read the <Link href="/privacy/" className="text-certifyd-blue hover:underline">Privacy Policy</Link> and the <Link href="/products/codewords/" className="text-certifyd-blue hover:underline">CodeWords product limits</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

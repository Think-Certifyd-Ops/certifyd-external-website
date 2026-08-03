import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd CallCheck | Live Video-Call Challenge",
  description:
    "Challenge a suspicious video caller while they are still on screen. Send a one-time link, collect a randomized response and review timestamped evidence once.",
  alternates: { canonical: "/products/callcheck/" },
  openGraph: {
    title: "Certifyd CallCheck | Live Video-Call Challenge",
    description:
      "Add a live challenge and view-once evidence step to a high-risk video call.",
    url: "https://www.certifyd.io/products/callcheck/",
  },
};

const steps = [
  {
    number: "01",
    title: "Create the check",
    text: "Name the call and create a one-time recipient link and requester review link.",
  },
  {
    number: "02",
    title: "Share it live",
    text: "Send the link or show the QR code while the person is still present on the video call.",
  },
  {
    number: "03",
    title: "Run the challenge",
    text: "The recipient completes the randomized selfie, call-screen and spoken-code sequence on their phone.",
  },
  {
    number: "04",
    title: "Review once",
    text: "The requester reviews timestamped images, timing and completed steps once. The images are then deleted.",
  },
];

const useCases = [
  {
    title: "Candidate and executive search calls",
    text: "Add a live challenge when the person on screen needs a higher-assurance check before the process continues.",
  },
  {
    title: "Payment and instruction changes",
    text: "Give finance or operations teams a second channel before acting on an unusual request made over video.",
  },
  {
    title: "Sensitive professional meetings",
    text: "Create a reviewable spot check for legal, financial or regulated conversations when something feels wrong.",
  },
];

export default function CallCheckPage() {
  return (
    <>
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 45%, rgba(0,89,255,0.14), transparent 58%), radial-gradient(ellipse at 80% 75%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
                Certifyd CallCheck
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-none text-text-on-dark max-w-3xl">
                Challenge a suspicious caller while they are still on screen.
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6 leading-relaxed">
                Send a one-time link during the video call. The person completes a randomized response on their phone, then you review the timestamped evidence once before the images are deleted.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="https://certifyd-callcheck.vercel.app/" size="lg">
                  Try the working check
                </Button>
                <Button href="/contact/" variant="outline" size="lg">
                  Discuss a pilot
                </Button>
              </div>
              <p className="mt-5 text-xs text-text-on-dark-muted max-w-xl">
                CallCheck is a human-reviewed spot check. It does not claim to identify every synthetic caller or replace formal identity and KYC controls.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-navy-border pb-4">
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">Call CC-4821</p>
                    <p className="text-xs text-text-on-dark-muted mt-1">Randomized live challenge</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-heading rounded-full bg-certifyd-blue/15 text-certifyd-blue-light">
                    Ready
                  </span>
                </div>
                <div className="space-y-3 pt-5">
                  {[
                    ["1", "Front-camera capture", "Complete"],
                    ["2", "Video-call screen", "Complete"],
                    ["3", "Spoken code", "Matched"],
                    ["4", "Requester evidence", "View once"],
                  ].map(([number, label, state]) => (
                    <div key={number} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border border-navy-border rounded-sm p-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-certifyd-blue/15 font-heading text-[10px] text-certifyd-blue-light">
                        {number}
                      </span>
                      <span className="text-sm text-white">{label}</span>
                      <span className="font-heading text-[10px] text-text-on-dark-muted">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                The live check
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-text-on-light mt-4">
                Add friction at the moment a high-risk call feels wrong.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 70}>
                <div className="h-full border border-warm-border bg-white rounded-sm p-6">
                  <span className="font-heading text-xs font-semibold text-certifyd-blue">{step.number}</span>
                  <h3 className="font-sans text-lg font-semibold text-text-on-light mt-4">{step.title}</h3>
                  <p className="text-sm text-text-on-light-muted leading-relaxed mt-3">{step.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue-light">
                Where it fits
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-text-on-dark mt-4">
                A second channel for calls that carry real consequences.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <ScrollReveal key={useCase.title} delay={index * 80}>
                <div className="h-full bg-navy-light border border-navy-border rounded-sm p-7">
                  <h3 className="font-sans text-lg font-semibold text-white">{useCase.title}</h3>
                  <p className="text-sm text-text-on-dark-muted leading-relaxed mt-3">{useCase.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="Run one live CallCheck and decide whether it improves the decision."
        href="https://certifyd-callcheck.vercel.app/"
        primaryLabel="Try the working check"
        secondaryLabel="Discuss a pilot"
        secondaryHref="/contact/"
      />
    </>
  );
}

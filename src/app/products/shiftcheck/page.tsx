import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd ShiftCheck | Last-Mile Worker Identity Verification",
  description:
    "Prove that the approved worker is the person who arrived. Biometric enrolment, site check-in and a reviewable event trail for contingent workforces.",
  alternates: { canonical: "/products/shiftcheck/" },
  openGraph: {
    title: "Certifyd ShiftCheck | Last-Mile Worker Identity Verification",
    description:
      "Connect the approved worker record to the person who arrives at the site.",
    url: "https://www.certifyd.io/products/shiftcheck/",
  },
};

const steps = [
  {
    number: "01",
    title: "Receive the approved record",
    text: "Your workforce system remains the source of truth. ShiftCheck receives the minimum record needed for the assignment.",
  },
  {
    number: "02",
    title: "Enrol the worker",
    text: "The worker opens a secure link, gives biometric consent and captures a live reference on their own phone.",
  },
  {
    number: "03",
    title: "Check in at the site",
    text: "A kiosk or device runs the arrival check against the enrolled worker for that location and assignment.",
  },
  {
    number: "04",
    title: "Review the event",
    text: "Operations can review the decision, timestamp, location and any manual override from one event trail.",
  },
];

const audiences = [
  {
    title: "Neutral vendors and MSPs",
    text: "Add arrival assurance without replacing the workforce management system your clients already use.",
  },
  {
    title: "Staffing suppliers",
    text: "Connect the compliant worker record to the person who attends the shift, induction or assignment.",
  },
  {
    title: "Multi-site operators",
    text: "Give local teams a simple check while central operations retain the reviewable record.",
  },
];

export default function ShiftCheckPage() {
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
                Certifyd ShiftCheck
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-none text-text-on-dark max-w-3xl">
                Prove the approved worker is the person who arrived.
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6 leading-relaxed">
                ShiftCheck closes the gap between a compliant worker record and the person at the site. Enrol once, check in at arrival, and retain a reviewable event trail.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="https://certifyd-shiftcheck.vercel.app/shiftcheck" size="lg">
                  Try the working demo
                </Button>
                <Button href="/contact/" variant="outline" size="lg">
                  Discuss a pilot
                </Button>
              </div>
              <p className="mt-5 text-xs text-text-on-dark-muted max-w-xl">
                The public demo uses a mock biometric mode and fictional worker data. Live integrations and biometric processing are agreed for each pilot.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-navy-border pb-4">
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">Warehouse 04</p>
                    <p className="text-xs text-text-on-dark-muted mt-1">Arrival check</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-heading rounded-full bg-accent-success/15 text-accent-success">
                    Match confirmed
                  </span>
                </div>
                <div className="space-y-4 pt-5">
                  {[
                    ["Worker record", "retinue_worker_123"],
                    ["Assignment", "Night shift, 22:00"],
                    ["Liveness", "Passed"],
                    ["Identity match", "Confirmed"],
                    ["Event", "Recorded for review"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-text-on-dark-muted">{label}</span>
                      <span className="font-heading text-xs text-white text-right">{value}</span>
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
                The workflow
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-text-on-light mt-4">
                Keep the system of record. Add arrival assurance.
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
                Built for workforces that cross company and site boundaries.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <ScrollReveal key={audience.title} delay={index * 80}>
                <div className="h-full bg-navy-light border border-navy-border rounded-sm p-7">
                  <h3 className="font-sans text-lg font-semibold text-white">{audience.title}</h3>
                  <p className="text-sm text-text-on-dark-muted leading-relaxed mt-3">{audience.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="Test ShiftCheck against one real arrival workflow."
        href="/contact/"
        primaryLabel="Discuss a pilot"
        secondaryLabel="Open the demo"
        secondaryHref="https://certifyd-shiftcheck.vercel.app/shiftcheck"
      />
    </>
  );
}


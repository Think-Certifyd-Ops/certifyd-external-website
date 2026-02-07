"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── Shared phone frame ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-28 h-48 rounded-2xl border border-navy-border bg-navy-lighter overflow-hidden shadow-lg shadow-certifyd-blue/5">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-navy rounded-b-lg z-10" />
      {/* Screen content */}
      <div className="pt-5 px-2 pb-2 h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* ── Step 1: Open — Two small phones with Certifyd icon ── */
function OpenGraphic() {
  return (
    <div className="mt-6 flex items-end justify-center gap-2">
      <div className="w-20 h-36 rounded-xl border border-navy-border bg-navy-lighter overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-navy rounded-b-md" />
        <div className="h-full flex items-center justify-center">
          <div className="w-8 h-8 rounded-md bg-certifyd-blue flex items-center justify-center">
            <span className="text-white font-heading text-[10px] font-bold">C</span>
          </div>
        </div>
      </div>
      <div className="w-20 h-36 rounded-xl border border-navy-border bg-navy-lighter overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-navy rounded-b-md" />
        <div className="h-full flex items-center justify-center">
          <div className="w-8 h-8 rounded-md bg-certifyd-blue flex items-center justify-center">
            <span className="text-white font-heading text-[10px] font-bold">C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Scan — Phone with QR code + Certifyd icon in centre ── */
function ScanGraphic() {
  const qrPattern = [
    [1,1,1,0,1,0,1,1,1],
    [1,0,1,0,0,0,1,0,1],
    [1,1,1,0,1,0,1,1,1],
    [0,0,0,0,1,0,0,0,0],
    [1,0,1,1,0,1,1,0,1],
    [0,0,0,0,1,0,0,0,0],
    [1,1,1,0,0,0,1,1,1],
    [1,0,1,0,1,0,1,0,1],
    [1,1,1,0,1,0,1,1,1],
  ];

  return (
    <div className="mt-6">
      <PhoneFrame>
        <div className="text-[8px] font-heading text-text-on-dark-muted uppercase tracking-wider mb-2">
          Scan to Verify
        </div>
        <div className="relative">
          <div className="grid grid-cols-9 gap-[2px]">
            {qrPattern.flat().map((cell, i) => (
              <div
                key={i}
                className={`w-[6px] h-[6px] rounded-[1px] ${
                  cell ? "bg-certifyd-blue" : "bg-transparent"
                }`}
              />
            ))}
          </div>
          {/* Certifyd icon overlay in centre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-certifyd-blue flex items-center justify-center border border-navy-lighter">
              <span className="text-white font-heading text-[6px] font-bold">C</span>
            </div>
          </div>
        </div>
        <div className="text-[7px] text-text-on-dark-muted mt-2">
          Refreshes in 30s
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ── Step 3: Verified — Phone showing confirmation ── */
function VerifiedGraphic() {
  return (
    <div className="mt-6">
      <PhoneFrame>
        <svg className="w-8 h-8 text-accent-success mb-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className="text-[9px] font-heading font-semibold text-accent-success">
          Identity Verified
        </div>
        <div className="text-[7px] text-text-on-dark-muted mt-1">
          Jane Smith
        </div>
        <div className="w-12 h-px bg-navy-border my-1.5" />
        <div className="text-[7px] text-text-on-dark-muted">
          Both confirmed
        </div>
      </PhoneFrame>
    </div>
  );
}

/* ── Step 4: Recorded — Phone showing audit record ── */
function RecordedGraphic() {
  return (
    <div className="mt-6">
      <PhoneFrame>
        <svg className="w-6 h-6 text-certifyd-blue mb-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <div className="text-[9px] font-heading font-semibold text-certifyd-blue">
          Record Created
        </div>
        <div className="w-full mt-2 space-y-1">
          <div className="h-1 bg-navy-border rounded-full w-full" />
          <div className="h-1 bg-navy-border rounded-full w-3/4" />
          <div className="h-1 bg-navy-border rounded-full w-5/6" />
        </div>
        <div className="text-[7px] text-text-on-dark-muted mt-1.5">
          Tamper-proof
        </div>
      </PhoneFrame>
    </div>
  );
}

const STEP_GRAPHICS = [OpenGraphic, ScanGraphic, VerifiedGraphic, RecordedGraphic];

const STEPS = [
  {
    number: 1,
    title: "Open",
    description: "Both people have Certifyd on their phone.",
  },
  {
    number: 2,
    title: "Scan",
    description: "One shows their QR code, the other scans it.",
  },
  {
    number: 3,
    title: "Verified",
    description:
      "Both get instant confirmation of who they\u2019re talking to.",
  },
  {
    number: 4,
    title: "Recorded",
    description: "An auditable, tamper-proof record is created.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-dark">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="Simple by Design"
            title="Verified in Seconds"
            align="center"
            dark={true}
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
          {STEPS.map((step, index) => {
            const Graphic = STEP_GRAPHICS[index];
            return (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="relative text-center">
                  {index < STEPS.length - 1 && (
                    <div
                      className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] border-t border-dashed border-navy-border"
                      aria-hidden="true"
                    />
                  )}

                  <div className="w-12 h-12 rounded-full border-2 border-certifyd-blue/40 text-certifyd-blue flex items-center justify-center font-heading font-bold text-lg mx-auto relative z-10 hover:bg-certifyd-blue hover:text-white transition-all duration-300">
                    {step.number}
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-text-on-dark mt-4">
                    {step.title}
                  </h3>

                  <p className="text-text-on-dark-muted text-sm mt-2">
                    {step.description}
                  </p>

                  {Graphic && <Graphic />}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={600}>
          <p className="text-text-on-dark-muted text-center mt-12 max-w-2xl mx-auto text-sm">
            Works everywhere &mdash; in person, on video calls, at your front
            door. One product. Every situation where identity matters.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

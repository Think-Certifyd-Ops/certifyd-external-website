"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── Certifyd "C" icon (inline SVG from brand assets) ── */
function CertifydIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1388 1388" fill="none">
      <rect x="236.629" y="243.054" width="1149.87" height="1127.91" fill="#0059FF" />
      <rect x="-4.924" y="1.5" width="1149.87" height="1127.91" fill="#0059FF" />
      <rect x="284.719" y="291.144" width="812.137" height="781.491" fill="white" />
      <rect x="476.684" y="483.108" width="428.209" height="406.25" fill="#0059FF" />
      <rect x="608.441" y="592.906" width="164.696" height="186.655" fill="white" />
      <rect x="696" y="648" width="226" height="77" fill="white" />
    </svg>
  );
}

/* ── Phone frame ── */
function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-32 h-52 lg:w-36 lg:h-60 rounded-2xl border border-navy-border bg-navy-lighter overflow-hidden shadow-lg shadow-certifyd-blue/5 ${className ?? ""}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-navy rounded-b-lg z-10" />
      <div className="pt-6 px-3 pb-3 h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* ── Phone content for each step × each party ── */

function PhoneAppIcon() {
  return (
    <PhoneFrame>
      <CertifydIcon className="w-12 h-12" />
      <div className="text-[9px] font-heading text-text-on-dark-muted uppercase tracking-wider mt-2">
        Certifyd
      </div>
    </PhoneFrame>
  );
}

function PhoneShareLink() {
  return (
    <PhoneFrame>
      <div className="text-[9px] font-heading text-text-on-dark-muted uppercase tracking-wider mb-3">
        Share Credential
      </div>
      {/* Share icon */}
      <svg
        className="w-8 h-8 text-certifyd-blue mb-2"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z"
        />
      </svg>
      <div className="text-[8px] text-text-on-dark-muted mt-1">
        Send verified link
      </div>
    </PhoneFrame>
  );
}

function PhoneReceiveLink() {
  return (
    <PhoneFrame>
      <div className="text-[9px] font-heading text-text-on-dark-muted uppercase tracking-wider mb-3">
        Link Received
      </div>
      {/* Email/notification icon */}
      <svg
        className="w-8 h-8 text-certifyd-blue mb-2"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
      <div className="text-[8px] text-text-on-dark-muted mt-1">
        Tap to view identity
      </div>
    </PhoneFrame>
  );
}

function PhoneVerified({ name }: { name: string }) {
  return (
    <PhoneFrame className="verified-phone">
      <svg
        className="w-10 h-10 text-accent-success mb-2"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <div className="text-[11px] font-heading font-semibold text-accent-success">
        Identity Verified
      </div>
      <div className="text-[9px] text-text-on-dark-muted mt-1">{name}</div>
      <div className="w-14 h-px bg-navy-border my-2" />
      <div className="text-[9px] text-text-on-dark-muted">Confirmed</div>
    </PhoneFrame>
  );
}

function PhoneRecord() {
  return (
    <PhoneFrame>
      <svg
        className="w-8 h-8 text-certifyd-blue mb-2"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
      <div className="text-[11px] font-heading font-semibold text-certifyd-blue">
        Record Created
      </div>
      <div className="w-full mt-3 space-y-1.5">
        <div className="h-1.5 bg-navy-border rounded-full w-full" />
        <div className="h-1.5 bg-navy-border rounded-full w-3/4" />
        <div className="h-1.5 bg-navy-border rounded-full w-5/6" />
      </div>
      <div className="text-[9px] text-text-on-dark-muted mt-2">Auditable</div>
    </PhoneFrame>
  );
}

/* ── Step data ── */

const STEPS = [
  {
    number: 1,
    title: "Open",
    you: { label: "You open Certifyd", Phone: PhoneAppIcon },
    them: { label: "They open Certifyd", Phone: PhoneAppIcon },
  },
  {
    number: 2,
    title: "Share",
    you: { label: "They share their verified credential", Phone: PhoneShareLink },
    them: { label: "You receive a verified link", Phone: PhoneReceiveLink },
  },
  {
    number: 3,
    title: "Verified",
    you: {
      label: "You see who they are",
      Phone: () => <PhoneVerified name="Jane Smith" />,
    },
    them: {
      label: "They see you verified them",
      Phone: () => <PhoneVerified name="You" />,
    },
  },
  {
    number: 4,
    title: "Recorded",
    you: { label: "An auditable record is created", Phone: PhoneRecord },
    them: { label: "Both parties. One truth.", Phone: PhoneRecord },
  },
];

/* ── Step number circle ── */
function StepCircle({ number }: { number: number }) {
  return (
    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-certifyd-blue/40 text-certifyd-blue flex items-center justify-center font-heading font-bold text-base lg:text-lg group-hover:bg-certifyd-blue group-hover:text-white transition-all duration-300">
      {number}
    </div>
  );
}

/* ── Party badge (mobile) ── */
function PartyBadge({ party }: { party: "you" | "them" }) {
  return (
    <span
      className={`inline-block text-[10px] font-heading font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
        party === "you"
          ? "bg-certifyd-blue/15 text-certifyd-blue"
          : "bg-white/10 text-text-on-dark-muted"
      }`}
    >
      {party === "you" ? "You" : "Them"}
    </span>
  );
}

/* ── Main section ── */
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

        {/* Desktop column labels */}
        <ScrollReveal delay={200}>
          <div className="hidden md:grid grid-cols-[1fr_48px_1fr] max-w-4xl mx-auto mt-10 mb-2">
            <div className="text-right pr-6">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-certifyd-blue">
                You
              </span>
            </div>
            <div />
            <div className="text-left pl-6">
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-text-on-dark-muted">
                Them
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Desktop: split-screen grid ── */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="group grid grid-cols-[1fr_48px_1fr] items-center py-10 lg:py-14 relative">
                {/* Connecting line (not on last step) */}
                {index < STEPS.length - 1 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-[calc(50%+24px)] h-[calc(100%-24px)] w-px bg-gradient-to-b from-navy-border to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Left column — You */}
                <ScrollReveal direction="left" delay={index * 150}>
                  <div className="flex flex-col items-end gap-4 pr-6">
                    <step.you.Phone />
                    <div className="text-right">
                      <h3 className="font-heading text-sm font-semibold text-text-on-dark">
                        {step.you.label}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Centre timeline */}
                <div className="flex flex-col items-center relative z-10">
                  <StepCircle number={step.number} />
                  <span className="text-[10px] font-heading font-medium text-text-on-dark-muted mt-1 uppercase tracking-wider">
                    {step.title}
                  </span>
                </div>

                {/* Right column — Them */}
                <ScrollReveal direction="right" delay={index * 150 + 150}>
                  <div className="flex flex-col items-start gap-4 pl-6">
                    <step.them.Phone />
                    <div className="text-left">
                      <h3 className="font-heading text-sm font-semibold text-text-on-dark">
                        {step.them.label}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Connection flash on Step 3 */}
                {step.number === 3 && (
                  <div
                    className="absolute top-1/2 left-[calc(25%)] right-[calc(25%)] h-px overflow-hidden -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="connection-flash w-12 h-full bg-gradient-to-r from-transparent via-certifyd-blue to-transparent" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Mobile: stacked cards with party badges ── */}
        <div className="md:hidden mt-10 space-y-6">
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 120}>
              <div className="group">
                {/* Step header */}
                <div className="flex items-center gap-3 mb-4">
                  <StepCircle number={step.number} />
                  <span className="font-heading text-lg font-semibold text-text-on-dark">
                    {step.title}
                  </span>
                </div>

                {/* You card */}
                <div className="border-l-2 border-certifyd-blue/40 pl-4 ml-5 mb-3">
                  <PartyBadge party="you" />
                  <div className="mt-3 flex items-center gap-4">
                    <div className="shrink-0">
                      <step.you.Phone />
                    </div>
                    <p className="font-heading text-sm text-text-on-dark">
                      {step.you.label}
                    </p>
                  </div>
                </div>

                {/* Them card */}
                <div className="border-l-2 border-white/10 pl-4 ml-5">
                  <PartyBadge party="them" />
                  <div className="mt-3 flex items-center gap-4">
                    <div className="shrink-0">
                      <step.them.Phone />
                    </div>
                    <p className="font-heading text-sm text-text-on-dark">
                      {step.them.label}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
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

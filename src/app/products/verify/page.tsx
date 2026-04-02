import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd Screen — Pre-Meeting Identity Verification for Recruiters",
  description:
    "Get the admin done before the call starts. Pre-screening for recruiters — candidates verify identity, declare RTW, and answer questions before the interview.",
  alternates: { canonical: "/products/verify/" },
  openGraph: {
    title: "Certifyd Screen — Pre-Meeting Identity Verification for Recruiters",
    description:
      "Pre-screening for recruiters. Candidates verify identity before the interview. Selfie, RTW, sponsorship status — done before you join.",
    url: "https://www.certifyd.io/products/verify/",
  },
};

const timelineSteps = [
  {
    label: "Create a screening",
    detail: "Set up a meeting. Add the video link, toggle requirements — RTW, sponsorship, selfie, custom questions.",
    color: "bg-certifyd-blue",
  },
  {
    label: "Share the link",
    detail: "Send the candidate a single verification link. Email, WhatsApp, SMS — any channel.",
    color: "bg-certifyd-blue",
  },
  {
    label: "Candidate completes",
    detail: "They open the link, take a selfie, declare their details, answer your questions. On any device.",
    color: "bg-certifyd-blue",
  },
  {
    label: "You start the call",
    detail: "Everything's done. Green badges on their card. Interview starts with zero admin.",
    color: "bg-accent-success",
  },
];

const features = [
  {
    title: "Configurable Requirements",
    description:
      "RTW declarations, sponsorship status, IR35 employment status, custom yes/no questions — build exactly what you need for each meeting type.",
    wide: true,
    status: "live" as const,
  },
  {
    title: "Candidate Self-Service",
    description:
      "Share a link. The candidate opens it on any device, completes the requirements at their own pace, and submits. No app. No account.",
    wide: false,
    status: "live" as const,
  },
  {
    title: "Pre-Meeting Dashboard",
    description:
      "See at a glance who has completed verification, who hasn't started, and who's partially done. Prioritise your calendar accordingly.",
    wide: false,
    status: "live" as const,
  },
  {
    title: "Selfie Capture",
    description:
      "Candidates take a live selfie as part of the process. Match the face to the person on the call. Know who you're talking to before you start.",
    wide: true,
    status: "live" as const,
  },
  {
    title: "Meeting Redirect",
    description:
      "Once verification is complete, candidates are automatically redirected to the video meeting URL. Seamless flow from screening to conversation.",
    wide: false,
    status: "live" as const,
  },
];

export default function CertifydScreenPage() {
  return (
    <>
      {/* ── Hero — text left + angled recruiter dashboard right ── */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left column — text */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6 animate-fade-in">
                Certifyd Screen
              </span>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-[1.05] text-text-on-dark animate-fade-in">
                Get the Admin Done<br />
                <span className="text-certifyd-blue">Before the Call Starts.</span>
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-xl mt-6 animate-slide-up animation-delay-200">
                Pre-meeting screening for recruiters. Candidates verify their identity, declare right to work, and answer your questions — before the interview even begins.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 animate-slide-up animation-delay-400">
                <Button href="https://recruiter.certifyd.io" size="lg">Try free</Button>
                <Button href="/contact/" variant="outline" size="lg">Book a demo</Button>
              </div>
            </div>

            {/* Right column — recruiter dashboard mockup */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end animate-slide-up animation-delay-300">
              <div className="transform rotate-[3deg] shadow-2xl rounded-lg w-full max-w-[560px]">
                <div className="bg-white rounded-lg overflow-hidden border border-warm-border">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-warm-border bg-warm-white">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] text-text-on-light-muted font-heading">screen.certifyd.io</span>
                  </div>
                  {/* App header */}
                  <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-warm-border">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-certifyd-blue rounded flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">C</span>
                      </div>
                      <span className="font-heading text-xs font-bold text-text-on-light">Certifyd</span>
                      <span className="font-heading text-xs font-bold text-certifyd-blue">Screen</span>
                    </div>
                    <div className="bg-certifyd-blue text-white text-[9px] font-heading font-medium px-2.5 py-1 rounded-md">
                      + New Meeting
                    </div>
                  </div>
                  {/* Meeting cards */}
                  <div className="px-5 py-4 space-y-3">
                    {[
                      {
                        title: "Senior Developer Interview",
                        date: "Today, 14:00",
                        candidates: [
                          { name: "Sarah Chen", badges: ["RTW", "Selfie"], status: "verified" },
                          { name: "James Okafor", badges: ["RTW", "Selfie", "Sponsorship"], status: "verified" },
                          { name: "Priya Sharma", badges: ["RTW"], status: "pending" },
                        ],
                      },
                      {
                        title: "Product Manager Screen",
                        date: "Tomorrow, 10:30",
                        candidates: [
                          { name: "Michael Torres", badges: ["RTW", "Selfie", "Sponsorship"], status: "verified" },
                        ],
                      },
                      {
                        title: "QA Lead — Final Round",
                        date: "Wed, 15:00",
                        candidates: [
                          { name: "Emma Wilson", badges: ["Selfie"], status: "pending" },
                          { name: "Alex Kim", badges: ["RTW", "Selfie"], status: "verified" },
                        ],
                      },
                    ].map((meeting) => (
                      <div key={meeting.title} className="bg-warm-white rounded-md p-3.5 border border-warm-border">
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="font-heading text-xs font-semibold text-text-on-light">{meeting.title}</span>
                          <span className="text-[10px] text-text-on-light-muted">{meeting.date}</span>
                        </div>
                        <div className="space-y-1.5">
                          {meeting.candidates.map((c) => (
                            <div key={c.name} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${c.status === "verified" ? "bg-accent-success" : "bg-accent-warning"}`} />
                                <span className="text-[11px] text-text-on-light">{c.name}</span>
                              </div>
                              <div className="flex gap-1">
                                {c.badges.map((b) => (
                                  <span key={b} className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${
                                    c.status === "verified"
                                      ? "bg-accent-success/15 text-accent-success"
                                      : "bg-accent-warning/15 text-accent-warning"
                                  }`}>
                                    {b}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Time math ── */}
      <section className="bg-navy-light border-y border-navy-border">
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 font-heading text-text-on-dark-muted text-lg lg:text-2xl mb-6">
                <span className="bg-navy-lighter px-4 py-2 rounded-md border border-navy-border">10 min</span>
                <span className="text-certifyd-blue text-3xl lg:text-4xl font-bold">&times;</span>
                <span className="bg-navy-lighter px-4 py-2 rounded-md border border-navy-border">20 interviews</span>
                <span className="text-certifyd-blue text-3xl lg:text-4xl font-bold">&times;</span>
                <span className="bg-navy-lighter px-4 py-2 rounded-md border border-navy-border">48 weeks</span>
                <span className="text-certifyd-blue text-3xl lg:text-4xl font-bold">=</span>
              </div>
              <p className="font-heading text-7xl lg:text-[120px] font-bold text-certifyd-blue leading-none">
                160 hours
              </p>
              <p className="text-text-on-dark-muted text-base lg:text-lg mt-4 max-w-lg mx-auto">
                per year wasted on admin before the interview even starts.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Product Tour — Recruiter + Candidate side-by-side ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Product Tour
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-heading font-semibold uppercase tracking-wider rounded-full bg-accent-success/15 text-accent-success">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
                  Live
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-2xl leading-tight">
                What you set up.<br />
                <span className="text-certifyd-blue">What they experience.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* ── Recruiter side ── */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider rounded-full bg-certifyd-blue/10 text-certifyd-blue">
                    Recruiter
                  </span>
                  <span className="text-sm text-text-on-light-muted">What you see</span>
                </div>

                {/* Step 1: Meeting Details form */}
                <div className="bg-white border border-warm-border rounded-lg overflow-hidden shadow-sm mb-4">
                  <div className="px-5 py-3 border-b border-warm-border bg-warm-white/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-certifyd-blue rounded flex items-center justify-center">
                        <span className="text-[8px] text-white font-bold">C</span>
                      </div>
                      <span className="font-heading text-[11px] font-bold text-text-on-light">Certifyd</span>
                      <span className="font-heading text-[11px] font-bold text-certifyd-blue">Screen</span>
                    </div>
                  </div>
                  <div className="p-5">
                    {/* Step indicator */}
                    <div className="flex items-center gap-0 mb-5">
                      <div className="w-7 h-7 rounded-full bg-certifyd-blue flex items-center justify-center text-[10px] text-white font-bold">1</div>
                      <div className="w-10 h-px bg-certifyd-blue" />
                      <div className="w-7 h-7 rounded-full border-2 border-warm-border flex items-center justify-center text-[10px] text-text-on-light-muted font-bold">2</div>
                      <div className="w-10 h-px bg-warm-border" />
                      <div className="w-7 h-7 rounded-full border-2 border-warm-border flex items-center justify-center text-[10px] text-text-on-light-muted font-bold">3</div>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-text-on-light mb-1">Meeting Details</h3>
                    <p className="text-[11px] text-text-on-light-muted mb-4">Set up the meeting you want candidates to verify for.</p>

                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-text-on-light-muted">Meeting Title</label>
                        <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">Screening Interview With Andrew</div>
                      </div>
                      <div>
                        <label className="text-[10px] text-text-on-light-muted">Meeting URL *</label>
                        <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">https://meet.google.com/afy-yvae-hih</div>
                        <p className="text-[10px] text-accent-success mt-1">Valid meeting link detected</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[10px] text-text-on-light-muted">Candidate Name</label>
                          <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">Andrew Speer</div>
                        </div>
                        <div>
                          <label className="text-[10px] text-text-on-light-muted">Candidate Email</label>
                          <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">andrew@example.com</div>
                        </div>
                      </div>
                      <div className="bg-certifyd-blue rounded-md py-2.5 text-center text-xs text-white font-heading font-medium">
                        Next: Configure Requirements
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Requirements toggles */}
                <div className="bg-white border border-warm-border rounded-lg overflow-hidden shadow-sm mb-4">
                  <div className="p-5">
                    {/* Step indicator */}
                    <div className="flex items-center gap-0 mb-5">
                      <div className="w-7 h-7 rounded-full bg-accent-success flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                      </div>
                      <div className="w-10 h-px bg-accent-success" />
                      <div className="w-7 h-7 rounded-full bg-certifyd-blue flex items-center justify-center text-[10px] text-white font-bold">2</div>
                      <div className="w-10 h-px bg-warm-border" />
                      <div className="w-7 h-7 rounded-full border-2 border-warm-border flex items-center justify-center text-[10px] text-text-on-light-muted font-bold">3</div>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-text-on-light mb-1">Verification Requirements</h3>
                    <p className="text-[11px] text-text-on-light-muted mb-4">Choose what the candidate must complete before joining.</p>

                    <div className="space-y-3">
                      {[
                        { label: "Right to Work", desc: "Declaration checkbox with proof document selection", on: true },
                        { label: "Sponsorship Status", desc: "Do you now or will you in the future require sponsorship to work in the UK?", on: false },
                        { label: "IR35 / Employment Status", desc: "What is your employment status for this engagement?", on: false },
                      ].map((req) => (
                        <div key={req.label} className="flex items-center justify-between border border-warm-border rounded-md p-3">
                          <div>
                            <p className="font-heading text-xs font-semibold text-text-on-light">{req.label}</p>
                            <p className="text-[10px] text-text-on-light-muted mt-0.5">{req.desc}</p>
                          </div>
                          <div className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors ${req.on ? "bg-certifyd-blue justify-end" : "bg-gray-200 justify-start"}`}>
                            <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3: Meeting created — verification link */}
                <div className="bg-white border border-warm-border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <p className="text-[10px] text-certifyd-blue font-heading">← Back to meetings</p>
                        <h3 className="font-heading text-sm font-bold text-text-on-light mt-1">Screening Interview With Andrew</h3>
                        <p className="text-[10px] text-text-on-light-muted">Wednesday, 1 April 2026</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2.5 py-1 rounded-md border border-warm-border text-text-on-light font-heading font-medium">Open Meeting</span>
                      </div>
                    </div>

                    <div className="mt-4 bg-warm-white border border-warm-border rounded-md p-4">
                      <p className="text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Verification Link</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-white border border-certifyd-blue/20 rounded-md px-3 py-2 text-[10px] text-certifyd-blue font-heading truncate">
                          https://screen.certifyd.io/v/7193a707-414a...
                        </div>
                        <span className="bg-certifyd-blue text-white text-[10px] font-heading font-medium px-3 py-2 rounded-md shrink-0">Copy</span>
                      </div>
                      <p className="text-[10px] text-text-on-light-muted mt-1.5">Share this link with the candidate. They&apos;ll verify before joining your meeting.</p>
                    </div>

                    <div className="mt-3">
                      <p className="text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Requirements</p>
                      <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-certifyd-blue/10 text-certifyd-blue font-heading font-medium">Right to Work</span>
                    </div>

                    <div className="mt-3">
                      <p className="text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Candidates (0)</p>
                      <div className="bg-warm-white border border-warm-border rounded-md p-4 text-center">
                        <p className="text-[11px] text-text-on-light-muted">No candidates have verified yet.</p>
                        <p className="text-[10px] text-text-on-light-muted/70">Share the verification link above.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ── Candidate side ── */}
            <ScrollReveal delay={200}>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider rounded-full bg-accent-success/10 text-accent-success">
                    Candidate
                  </span>
                  <span className="text-sm text-text-on-light-muted">What they see</span>
                </div>

                <div className="flex flex-col items-center gap-6">
                  {/* Candidate Step 1: Verify Your Identity landing */}
                  <div className="w-full max-w-[320px] bg-white border border-warm-border rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-5">
                        <div className="w-6 h-6 bg-certifyd-blue rounded flex items-center justify-center">
                          <span className="text-[9px] text-white font-bold">C</span>
                        </div>
                        <span className="font-heading text-sm font-bold text-text-on-light">Certifyd</span>
                        <span className="font-heading text-sm font-bold text-certifyd-blue">Screen</span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-text-on-light mb-1">Verify Your Identity</h3>
                      <p className="text-[11px] text-text-on-light-muted">For: Screening Interview With Andrew</p>

                      <div className="mt-5 bg-warm-white border border-warm-border rounded-md p-4 text-left">
                        <p className="text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-3">What&apos;s Required</p>
                        <div className="space-y-2.5">
                          {["Selfie photo", "Name & email", "Right to Work"].map((item, i) => (
                            <div key={item} className="flex items-center gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-certifyd-blue/10 flex items-center justify-center shrink-0">
                                <span className="text-[9px] text-certifyd-blue font-heading font-bold">{i + 1}</span>
                              </div>
                              <span className="text-xs text-text-on-light">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 bg-certifyd-blue rounded-md py-3 text-center text-sm text-white font-heading font-medium">
                        Begin Verification
                      </div>
                      <p className="text-[9px] text-text-on-light-muted mt-3">Your data is processed securely by Certifyd. By proceeding you agree to identity verification.</p>
                    </div>
                  </div>

                  {/* Arrow down */}
                  <div className="flex flex-col items-center">
                    <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                  </div>

                  {/* Candidate Step 2: Selfie capture */}
                  <div className="w-full max-w-[320px] bg-white border border-warm-border rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-5 h-5 bg-certifyd-blue rounded flex items-center justify-center">
                          <span className="text-[8px] text-white font-bold">C</span>
                        </div>
                        <span className="font-heading text-xs font-bold text-text-on-light">Certifyd</span>
                        <span className="font-heading text-xs font-bold text-certifyd-blue">Screen</span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-on-light mb-1">Take a Selfie</h3>
                      <p className="text-[11px] text-text-on-light-muted mb-4">Position your face in the frame</p>
                      {/* Camera viewfinder */}
                      <div className="relative aspect-[4/3] bg-gray-100 rounded-lg border-2 border-warm-border mx-auto mb-4 flex items-center justify-center">
                        <div className="w-20 h-24 rounded-full border-2 border-dashed border-certifyd-blue/30" />
                        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-certifyd-blue/40 rounded-tl" />
                        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-certifyd-blue/40 rounded-tr" />
                        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-certifyd-blue/40 rounded-bl" />
                        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-certifyd-blue/40 rounded-br" />
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-1 border border-warm-border rounded-md py-2.5 text-center text-xs text-text-on-light font-heading font-medium">Back</div>
                        <div className="flex-1 bg-certifyd-blue rounded-md py-2.5 text-center text-xs text-white font-heading font-medium">Take Photo</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow down */}
                  <div className="flex flex-col items-center">
                    <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                  </div>

                  {/* Candidate Step 3: Details + RTW + Submit */}
                  <div className="w-full max-w-[320px] bg-white border border-warm-border rounded-lg shadow-sm overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-5 h-5 bg-certifyd-blue rounded flex items-center justify-center">
                          <span className="text-[8px] text-white font-bold">C</span>
                        </div>
                        <span className="font-heading text-xs font-bold text-text-on-light">Certifyd</span>
                        <span className="font-heading text-xs font-bold text-certifyd-blue">Screen</span>
                      </div>

                      {/* Selfie thumbnail + heading */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-warm-border flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-text-on-light-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                        </div>
                        <div>
                          <h3 className="font-heading text-sm font-bold text-text-on-light">Your Details</h3>
                          <p className="text-[10px] text-text-on-light-muted">Complete the form below</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="text-[10px] text-text-on-light-muted">Full Name</label>
                          <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">Andrew Speer</div>
                        </div>
                        <div>
                          <label className="text-[10px] text-text-on-light-muted">Email</label>
                          <div className="mt-1 bg-warm-white border border-warm-border rounded-md px-3 py-2 text-xs text-text-on-light">andrew@example.com</div>
                        </div>
                        <div className="bg-certifyd-blue/5 border border-certifyd-blue/15 rounded-md p-3">
                          <p className="font-heading text-xs font-semibold text-certifyd-blue mb-2">Right to Work</p>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded border-2 border-warm-border bg-white shrink-0" />
                            <span className="text-[11px] text-text-on-light">I confirm I have the right to work in the United Kingdom</span>
                          </div>
                        </div>
                        <div className="bg-certifyd-blue rounded-md py-3 text-center text-sm text-white font-heading font-medium">
                          Submit &amp; Join Meeting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How it works flow ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  How It Works
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                Four steps.<br />
                <span className="text-certifyd-blue">Zero wasted time.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-certifyd-blue/30 hidden lg:block" aria-hidden="true" />

            {timelineSteps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 120}>
                <div className="relative text-center lg:text-left">
                  <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center mx-auto lg:mx-0 mb-4 relative z-10`}>
                    <span className="font-heading text-sm font-bold text-white">{i + 1}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-text-on-dark mb-2">
                    {step.label}
                  </h3>
                  <p className="text-text-on-dark-muted text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Key Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Everything ready.<br />
                <span className="text-certifyd-blue">Before you even join.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 1: wide + 2 narrow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {features.slice(0, 3).map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80} className={f.wide ? "lg:col-span-2" : ""}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-sm bg-certifyd-blue" />
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-lg font-semibold text-text-on-light">
                      {f.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-heading font-semibold uppercase tracking-wider rounded-full bg-accent-success/10 text-accent-success">
                      <span className="w-1 h-1 rounded-full bg-accent-success" />
                      Live
                    </span>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: wide + narrow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {features.slice(3).map((f, i) => (
              <ScrollReveal key={f.title} delay={240 + i * 80} className={f.wide ? "lg:col-span-2" : ""}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full relative">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-sm bg-certifyd-blue" />
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-lg font-semibold text-text-on-light">
                      {f.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-heading font-semibold uppercase tracking-wider rounded-full bg-accent-success/10 text-accent-success">
                      <span className="w-1 h-1 rounded-full bg-accent-success" />
                      Live
                    </span>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sentinel teaser — what happens during the meeting ── */}
      <section className="section-dark">
        <div className="section-container py-16 lg:py-20">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Coming Soon
                </span>
                <div className="w-8 h-px bg-certifyd-blue" />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark mb-3">
                Screen handles before the meeting.<br />
                <span className="text-certifyd-blue">Sentinel handles during.</span>
              </h2>
              <p className="text-text-on-dark-muted text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                Compliant meeting recording, real-time AI monitoring, and automatic flagging of regulatory risks — all while you focus on the conversation.
              </p>
              <Button href="/products/sentinel/" variant="outline" size="lg">
                Learn about Sentinel
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── "Already live" — Social proof ── */}
      <section className="bg-certifyd-blue">
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-3">
                Certifyd Screen is live.
              </h2>
              <p className="text-white/80 text-lg mb-12">
                Used by recruiters across the UK to save hours every week.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button href="https://recruiter.certifyd.io" size="lg" className="!bg-white !text-certifyd-blue hover:!bg-white/90">Try free</Button>
                <Button href="/contact/" variant="outline" size="lg" className="!border-white/60 !text-white hover:!bg-white hover:!text-certifyd-blue">Book a demo</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "Certifyd Portal", href: "/products/portal/" },
          { label: "Certifyd Sentinel", href: "/products/sentinel/" },
          { label: "Certifyd CodeWords", href: "/products/codewords/" },
        ]}
        articles={[
          { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
          { label: "Pre-Screening Best Practices", href: "/blog/what-are-right-to-work-checks/" },
        ]}
        resources={[
          { label: "UK Right to Work Checks", href: "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide", external: true },
        ]}
      />

      <SolutionCTA
        title="Stop wasting the first 10 minutes of every interview."
        href="https://recruiter.certifyd.io"
        secondaryLabel="See all products"
        secondaryHref="/products/"
      />
    </>
  );
}

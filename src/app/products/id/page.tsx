import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { DoorVerification } from "@/components/graphics/DoorVerification";

export const metadata: Metadata = {
  title: "Certifyd ID — Simple Identity Verification for Home Access",
  description:
    "Know who's at your door. Simple identity verification for tradespeople, delivery drivers, and care workers. Scan their QR code. Know they're real.",
  alternates: { canonical: "/products/id/" },
  openGraph: {
    title: "Certifyd ID — Know Who's At Your Door",
    description:
      "Simple identity verification for anyone coming to your home. Scan their QR code. Know they're real.",
    url: "https://www.certifyd.io/products/id/",
  },
};

const scenarios = [
  {
    text: "What if the plumber isn't from British Gas?",
    detail:
      "Anyone can buy a uniform. Anyone can print a lanyard. They arrive at your door with a toolbox and a smile — and you'd never know the difference.",
    icon: "wrench",
    colSpan: "lg:col-span-7",
  },
  {
    text: "What if that care worker isn't who they say?",
    detail:
      "Your elderly parent opens the door to a stranger. They flash an ID card that took five minutes to make. Your parent lets them in.",
    icon: "heart",
    colSpan: "lg:col-span-5",
  },
  {
    text: "What if the meter reader was never sent?",
    detail:
      "No appointment. No notice. They're insistent. They have a clipboard. That's all it takes to get through the door.",
    icon: "gauge",
    colSpan: "lg:col-span-5",
  },
];

const useCases = [
  {
    name: "Tradespeople",
    description: "Plumbers, electricians, builders at your door",
    icon: "wrench",
  },
  {
    name: "Delivery Drivers",
    description: "Verify the person, not just the uniform",
    icon: "truck",
  },
  {
    name: "Care Workers",
    description: "Know who's caring for your family",
    icon: "heart",
  },
  {
    name: "Estate Agents",
    description: "Safe viewings for buyers and sellers",
    icon: "home",
  },
  {
    name: "Home Viewings",
    description: "Verify everyone entering your property",
    icon: "key",
  },
  {
    name: "Meter Readers",
    description: "No more guessing at the door",
    icon: "gauge",
  },
];

const testimonials = [
  {
    quote:
      "I used to just open the door and hope for the best. Now I scan first.",
    name: "Sarah",
    role: "Homeowner",
  },
  {
    quote:
      "Our clients' families finally have peace of mind about who's visiting.",
    name: "Mark",
    role: "Care Agency Manager",
  },
  {
    quote:
      "Our engineers love it — it builds trust before they even step inside.",
    name: "Rachel",
    role: "Utility Company Ops Lead",
  },
];

function ScenarioIcon({ type }: { type: string }) {
  switch (type) {
    case "wrench":
      return (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      );
    case "gauge":
      return (
        <svg
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l4 2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.05 11a9 9 0 1 1 .5 4m-.5-4h3m-3 0V7"
          />
        </svg>
      );
    case "truck":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h.001M1.5 14.25l1.875-7.5h7.5l1.875 3.75M1.5 14.25h15m3.75 0h.75a1.125 1.125 0 0 0 1.125-1.125V11.25a1.125 1.125 0 0 0-1.125-1.125h-2.25l-1.875-3.75h-3.375"
          />
        </svg>
      );
    case "home":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      );
    case "key":
      return (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function CertifydIDPage() {
  return (
    <>
      {/* ── Hero — Warmer gradient, balanced grid ── */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(255,200,100,0.06), transparent 60%), radial-gradient(ellipse at 60% 40%, rgba(0,89,255,0.10), transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6 animate-fade-in">
                Certifyd ID
              </span>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] text-text-on-dark animate-fade-in">
                Know Who&apos;s<br />
                <span className="text-certifyd-blue">At Your Door.</span>
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-lg mt-6 animate-slide-up animation-delay-200">
                Simple identity verification for anyone coming to your home —
                tradespeople, delivery drivers, care workers. Scan their QR
                code. Know they&apos;re real.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-slide-up animation-delay-300">
                <Button href="/contact/" size="lg">
                  Book a demo
                </Button>
                <Button href="/products/id/demo/" variant="outline" size="lg">
                  Try the demo
                </Button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-6 lg:mt-8">
              <DoorVerification />
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem narrative — Illustrated scenario cards (1+2 layout) ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mb-12 lg:mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
                A lanyard isn&apos;t<br />
                <span className="text-accent-warning">proof of anything.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {scenarios.map((s, i) => (
              <ScrollReveal key={i} delay={i * 100} className={s.colSpan}>
                <div
                  className="bg-white border border-warm-border rounded-sm p-8 lg:p-10 h-full hover:shadow-md transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,200,100,0.04) 0%, rgba(255,255,255,1) 100%)",
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent-warning/10 text-accent-warning flex items-center justify-center mb-5">
                    <ScenarioIcon type={s.icon} />
                  </div>
                  <p className="font-heading text-lg lg:text-xl font-semibold text-text-on-light leading-snug mb-3">
                    {s.text}
                  </p>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works — Phone mockup frames ── */}
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
                Three steps.<br />
                <span className="text-certifyd-blue">Total certainty.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 — QR code on screen */}
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="w-52 mx-auto mb-6">
                  <div className="bg-navy-light border-2 border-navy-border rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-3">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-3 px-1">
                        <span className="text-[8px] text-text-on-dark-muted">
                          9:41
                        </span>
                        <div className="flex gap-1">
                          <span className="w-3 h-1.5 rounded-sm bg-text-on-dark-muted/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark-muted/40" />
                        </div>
                      </div>
                      <p className="font-heading text-[10px] font-semibold text-text-on-dark text-center mb-2">
                        My Certifyd ID
                      </p>
                      <p className="text-[8px] text-text-on-dark-muted text-center mb-3">
                        Show this to the homeowner
                      </p>
                      {/* QR code mockup */}
                      <div className="aspect-square bg-white rounded-lg mx-3 mb-3 p-3 flex items-center justify-center">
                        <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-0.5">
                          {/* Stylised QR pattern */}
                          {[
                            1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1,
                            1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0,
                            1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1,
                            1,
                          ].map((filled, idx) => (
                            <div
                              key={idx}
                              className={`rounded-[1px] ${filled ? "bg-navy" : "bg-transparent"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="inline-block text-[8px] text-certifyd-blue font-heading font-medium px-2 py-0.5 bg-certifyd-blue/10 rounded-full">
                          Live QR Code
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-certifyd-blue flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-sm font-bold text-white">
                    1
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-text-on-dark mb-2">
                  They show their QR code
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-xs mx-auto">
                  The tradesperson, driver, or care worker opens Certifyd on
                  their phone and shows you their live QR code.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 2 — Camera scanning */}
            <ScrollReveal delay={120}>
              <div className="text-center">
                <div className="w-52 mx-auto mb-6">
                  <div className="bg-navy-light border-2 border-navy-border rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-3">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-3 px-1">
                        <span className="text-[8px] text-text-on-dark-muted">
                          9:41
                        </span>
                        <div className="flex gap-1">
                          <span className="w-3 h-1.5 rounded-sm bg-text-on-dark-muted/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark-muted/40" />
                        </div>
                      </div>
                      <p className="font-heading text-[10px] font-semibold text-text-on-dark text-center mb-2">
                        Scan QR Code
                      </p>
                      <p className="text-[8px] text-text-on-dark-muted text-center mb-3">
                        Point your camera at the code
                      </p>
                      {/* Camera viewfinder */}
                      <div className="relative aspect-[3/4] bg-navy-lighter rounded-lg border-2 border-certifyd-blue/50 mb-3 flex items-center justify-center">
                        {/* QR target outline */}
                        <div className="w-16 h-16 border-2 border-dashed border-certifyd-blue/40 rounded-md" />
                        {/* Corner brackets */}
                        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-certifyd-blue rounded-tl" />
                        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-certifyd-blue rounded-tr" />
                        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-certifyd-blue rounded-bl" />
                        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-certifyd-blue rounded-br" />
                        {/* Scan line */}
                        <div className="absolute left-3 right-3 top-1/2 h-0.5 bg-certifyd-blue/60 rounded-full" />
                      </div>
                      <div className="text-center">
                        <span className="inline-block text-[8px] text-text-on-dark-muted font-heading px-2 py-0.5">
                          No app needed — uses your camera
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-certifyd-blue flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-sm font-bold text-white">
                    2
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-text-on-dark mb-2">
                  You scan it
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-xs mx-auto">
                  Point your phone camera at the code. No app download needed —
                  it works through the browser.
                </p>
              </div>
            </ScrollReveal>

            {/* Step 3 — Green confirmation */}
            <ScrollReveal delay={240}>
              <div className="text-center">
                <div className="w-52 mx-auto mb-6">
                  <div className="bg-navy-light border-2 border-navy-border rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-3">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-3 px-1">
                        <span className="text-[8px] text-text-on-dark-muted">
                          9:41
                        </span>
                        <div className="flex gap-1">
                          <span className="w-3 h-1.5 rounded-sm bg-text-on-dark-muted/40" />
                          <span className="w-1.5 h-1.5 rounded-full bg-text-on-dark-muted/40" />
                        </div>
                      </div>
                      <p className="font-heading text-[10px] font-semibold text-accent-success text-center mb-2">
                        Verified
                      </p>
                      <p className="text-[8px] text-text-on-dark-muted text-center mb-3">
                        Identity confirmed by Certifyd
                      </p>
                      {/* Green check confirmation */}
                      <div className="aspect-[3/4] bg-navy-lighter rounded-lg mb-3 flex flex-col items-center justify-center px-4">
                        <div className="w-16 h-16 rounded-full bg-accent-success/15 flex items-center justify-center mb-3">
                          <svg
                            className="w-9 h-9 text-accent-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                        <div className="text-[10px] font-heading font-bold text-accent-success uppercase tracking-wider mb-2">
                          Identity Verified
                        </div>
                        <div className="w-full space-y-1.5">
                          <div className="bg-navy-light/50 rounded px-2 py-1">
                            <span className="text-[7px] text-certifyd-blue uppercase tracking-wider font-semibold">
                              Name
                            </span>
                            <div className="text-[9px] text-text-on-dark">
                              John Smith
                            </div>
                          </div>
                          <div className="bg-navy-light/50 rounded px-2 py-1">
                            <span className="text-[7px] text-certifyd-blue uppercase tracking-wider font-semibold">
                              Company
                            </span>
                            <div className="text-[9px] text-text-on-dark">
                              Smith Electrical Ltd
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="inline-block text-[8px] text-accent-success font-heading font-medium px-2 py-0.5 bg-accent-success/10 rounded-full">
                          Safe to open the door
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-success flex items-center justify-center mx-auto mb-3">
                  <span className="font-heading text-sm font-bold text-white">
                    3
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-text-on-dark mb-2">
                  Instant confirmation
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-xs mx-auto">
                  Green check = verified. Name, company, and certification date.
                  Or a warning — and you don&apos;t open the door.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Use cases — Scenario grid with cards ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Use Cases
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Anyone who comes<br />
                <span className="text-certifyd-blue">to your door.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((uc) => (
                <div
                  key={uc.name}
                  className="bg-white border border-warm-border rounded-sm p-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-certifyd-blue/10 text-certifyd-blue flex items-center justify-center mb-3">
                    <ScenarioIcon type={uc.icon} />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-text-on-light mb-1">
                    {uc.name}
                  </h3>
                  <p className="text-text-on-light-muted text-xs leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who uses ID? — Testimonial cards ── */}
      <section className="section-light" style={{ backgroundColor: "#FDFBF8" }}>
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-warning/50" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-warning">
                  Real People
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Who uses<br />
                <span className="text-certifyd-blue">ID?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div
                  className="bg-white border border-warm-border rounded-sm p-8 h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,200,100,0.03) 0%, rgba(255,255,255,1) 100%)",
                  }}
                >
                  {/* Quote mark */}
                  <svg
                    className="w-8 h-8 text-accent-warning/25 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                  </svg>
                  <p className="text-text-on-light italic text-base leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-heading text-sm font-semibold text-text-on-light">
                      {t.name}
                    </p>
                    <p className="text-text-on-light-muted text-xs">
                      {t.role}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        solutions={[
          {
            label: "Certifyd CodeWords — Corporate version",
            href: "/products/codewords/",
          },
          { label: "Certifyd Screen", href: "/products/verify/" },
          { label: "Certifyd Portal", href: "/products/portal/" },
        ]}
        articles={[
          {
            label: "Two-Way Verification Explained",
            href: "/blog/two-way-verification-explained/",
          },
          {
            label: "The Arup Deepfake Attack",
            href: "/blog/arup-deepfake-attack/",
          },
        ]}
        resources={[
          {
            label: "UK Identity Verification Standards",
            href: "https://www.gov.uk/government/publications/identity-proofing-and-verification-of-an-individual",
            external: true,
          },
        ]}
      />

      <SolutionCTA
        title="Stop guessing. Start verifying."
        href="/contact/"
        secondaryLabel="See Certifyd CodeWords for corporate use"
        secondaryHref="/products/codewords/"
      />
    </>
  );
}

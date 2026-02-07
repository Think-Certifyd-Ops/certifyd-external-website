"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface WithWithoutProps {
  without: string[];
  with_certifyd: string[];
}

export function WithWithout({ without, with_certifyd }: WithWithoutProps) {
  return (
    <section className="bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,89,255,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <ScrollReveal>
          <div className="mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-certifyd-blue" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                The Difference
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
              Before and after<br />
              <span className="text-certifyd-blue">Certifyd.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-navy-border">
          {/* Without */}
          <ScrollReveal direction="left" className="h-full">
            <div className="bg-navy-light p-8 lg:p-10 h-full border-b lg:border-b-0 lg:border-r border-navy-border">
              <div className="flex items-center gap-3 mb-8">
                <svg className="w-5 h-5 text-accent-warning" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                <h3 className="font-heading text-lg font-semibold text-accent-warning">
                  Without Certifyd
                </h3>
              </div>
              <ol className="space-y-5">
                {without.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="font-heading text-xs font-bold text-text-on-dark-muted bg-navy-lighter w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-text-on-dark-muted text-sm leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* With */}
          <ScrollReveal direction="right" className="h-full">
            <div className="bg-navy-light p-8 lg:p-10 h-full relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(0,89,255,0.06), transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-5 h-5 text-accent-success" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h3 className="font-heading text-lg font-semibold text-accent-success">
                    With Certifyd
                  </h3>
                </div>
                <ol className="space-y-5">
                  {with_certifyd.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="font-heading text-xs font-bold text-certifyd-blue bg-certifyd-blue/15 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-text-on-dark text-sm leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

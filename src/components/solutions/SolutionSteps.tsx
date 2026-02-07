"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SolutionStepsProps {
  steps: string[];
  title?: string;
}

export function SolutionSteps({ steps, title = "How It Works" }: SolutionStepsProps) {
  return (
    <section className="bg-navy relative overflow-hidden bg-grid-pattern">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,89,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-px bg-certifyd-blue" />
            <h2 className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl">
          {/* Vertical connecting line */}
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-certifyd-blue/40 via-certifyd-blue/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="flex items-start gap-6 group">
                  <div className="w-8 h-8 rounded-full border-2 border-certifyd-blue/40 flex items-center justify-center shrink-0 relative z-10 bg-navy group-hover:bg-certifyd-blue group-hover:border-certifyd-blue transition-all duration-300">
                    <span className="font-heading text-xs font-bold text-certifyd-blue group-hover:text-white transition-colors duration-300">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-text-on-dark text-base leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

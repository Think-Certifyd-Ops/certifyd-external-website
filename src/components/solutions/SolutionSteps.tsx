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
        {/* Big title */}
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-certifyd-blue" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                {title}
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
              Simple verification.<br />
              <span className="text-certifyd-blue">Every time.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Horizontal steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-certifyd-blue/40 via-certifyd-blue/20 to-certifyd-blue/40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 120}>
                <div className="group relative">
                  {/* Step number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full border-2 border-certifyd-blue/30 flex items-center justify-center mb-6 bg-navy group-hover:bg-certifyd-blue group-hover:border-certifyd-blue transition-all duration-500">
                    <span className="font-heading text-2xl font-bold text-certifyd-blue group-hover:text-white transition-colors duration-500">
                      {index + 1}
                    </span>
                  </div>

                  {/* Step text */}
                  <p className="text-text-on-dark text-base leading-relaxed">
                    {step}
                  </p>

                  {/* Mobile connecting line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-16 w-px h-6 bg-certifyd-blue/20" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

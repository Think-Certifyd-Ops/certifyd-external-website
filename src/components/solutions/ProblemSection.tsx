"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProblemSectionProps {
  problems: string[];
}

export function ProblemSection({ problems }: ProblemSectionProps) {
  return (
    <section className="section-light">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-14 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent-warning" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-warning">
                The Problem
              </span>
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
              This is broken.<br />
              <span className="text-accent-warning">Here&apos;s why.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <div className="flex items-start gap-4 group">
                <div className="w-6 h-6 rounded-full border-2 border-accent-warning/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent-warning transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent-warning" />
                </div>
                <p className="text-text-on-light text-base leading-relaxed">
                  {problem}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

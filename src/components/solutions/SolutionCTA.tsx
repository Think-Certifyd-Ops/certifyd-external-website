"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface SolutionCTAProps {
  title: string;
  href?: string;
}

export function SolutionCTA({ title, href = "/contact/" }: SolutionCTAProps) {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,89,255,0.1), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark mb-8">
              {title}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="outline" size="lg" href={href}>
                Get in touch
              </Button>
              <Button variant="ghost" size="lg" href="/" className="text-text-on-dark-muted hover:text-white">
                Back to home
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

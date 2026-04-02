"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HomeCTA() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,89,255,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark leading-tight">
              Ready to close the
              <br />
              <span className="text-certifyd-blue">identity gap?</span>
            </h2>

            <p className="text-text-on-dark-muted mt-6 max-w-lg mx-auto leading-relaxed">
              See how Certifyd fits your business. Book a 15-minute call with
              our team — no commitment, no sales pitch.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button href="/contact/" size="lg">
                Book a demo
              </Button>
              <Button href="/products/" variant="outline" size="lg">
                Explore solutions
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

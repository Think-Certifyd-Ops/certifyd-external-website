import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="section-dark bg-grid-pattern relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(0,89,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-24 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-heading font-medium uppercase tracking-wider text-certifyd-blue mb-6 animate-fade-in">
            Identity infrastructure for business
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-on-dark animate-fade-in">
            Protect your business
            <br />
            against{" "}
            <span className="text-certifyd-blue">identity fraud.</span>
          </h1>

          <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mt-6 leading-relaxed animate-slide-up animation-delay-200">
            Certifyd gives businesses the tools to verify people, stay
            compliant, and close the identity gaps that put them at risk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up animation-delay-300">
            <Button href="/contact/" size="lg">
              Book a demo
            </Button>
            <Button href="/products/" variant="outline" size="lg">
              See solutions
            </Button>
          </div>

          <p className="text-xs text-text-on-dark-muted/50 mt-8 animate-slide-up animation-delay-400">
            Trusted by recruitment agencies, care providers, and trades
            businesses across the UK.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="section-dark bg-grid-pattern relative min-h-[85vh] flex items-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(0,89,255,0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center py-24">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight text-text-on-dark animate-fade-in">
          The identity layer for businesses that can&apos;t afford to get it
          wrong.
        </h1>

        <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-2xl mt-6 animate-slide-up animation-delay-200">
          Affordable identity verification that works before the offer, before
          the interview, before you let someone through the door.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-slide-up animation-delay-400">
          <Button variant="outline" size="lg" href="#how-it-works">
            See how it works
          </Button>
          <Button variant="ghost" size="lg" href="/contact/" className="text-text-on-dark-muted hover:text-white">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

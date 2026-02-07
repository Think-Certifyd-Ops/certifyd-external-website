interface SolutionHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export function SolutionHero({ title, subtitle, badge }: SolutionHeroProps) {
  return (
    <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Dramatic gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,89,255,0.06), transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Geometric accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

      <div className="section-container relative z-10">
        {badge && (
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold max-w-4xl leading-tight text-text-on-dark animate-fade-in">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-2xl mt-6 animate-slide-up animation-delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

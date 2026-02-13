import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllForPageSlugs, getForPageBySlug } from "@/lib/for-pages";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { InlineForm } from "@/components/contact/InlineForm";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
  HowToSchema,
} from "@/components/seo/JsonLd";
import { VerificationCard } from "@/components/graphics/VerificationCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllForPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getForPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/for/${slug}/` },
    openGraph: {
      title: `${page.metaTitle} | Certifyd`,
      description: page.metaDescription,
      url: `https://www.certifyd.io/for/${slug}/`,
    },
  };
}

export default async function ForPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getForPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: page.title, href: `/for/${slug}/` },
        ]}
      />
      <ServiceSchema
        name={page.title}
        description={page.metaDescription}
        slug={slug}
      />
      <FAQSchema faqs={page.faqs} />
      <HowToSchema
        name={`How to verify identity — ${page.title}`}
        steps={page.steps}
      />

      {/* Hero */}
      <SolutionHero
        badge={page.badge}
        title={page.headline}
        subtitle={page.subtitle}
      >
        <VerificationCard
          name={page.heroCard.name}
          company={page.heroCard.company}
        />
      </SolutionHero>

      {/* Stats — dark MetricsBar-style */}
      {page.stats.length > 0 && (
        <section className="relative bg-navy-light overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(0,89,255,0.08), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/30 to-transparent" />

          <div className="section-container relative z-10 py-14 lg:py-16">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-certifyd-blue animate-pulse" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                The Numbers
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {page.stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 100}>
                  <StatCounter
                    value={stat.value}
                    label={stat.label}
                    dark={true}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search Intent + Why It Matters — combined editorial section */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Why This Matters
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                The reality of{" "}
                <span className="text-certifyd-blue">
                  {page.badge.toLowerCase()}
                </span>{" "}
                in the UK.
              </h2>
            </div>
          </ScrollReveal>

          {/* Lead paragraph — featured snippet target */}
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <p className="text-lg lg:text-xl text-text-on-light leading-relaxed font-medium">
                {page.searchIntentParagraph}
              </p>
            </div>
          </ScrollReveal>

          {/* Why It Matters prose with left border accent */}
          <div className="max-w-3xl space-y-6 border-l-2 border-certifyd-blue/20 pl-8">
            {page.whyItMatters.map((paragraph, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <p className="text-text-on-light-muted leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA link */}
          <ScrollReveal delay={300}>
            <div className="mt-12">
              <a
                href="#get-started"
                className="group inline-flex items-center font-heading text-sm font-medium text-certifyd-blue hover:text-certifyd-blue-dark transition-colors"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  Get started with Certifyd
                </span>
                <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problems */}
      <ProblemSection problems={page.problems} />

      {/* How It Works */}
      <SolutionSteps steps={page.steps} />

      {/* Mid-page CTA banner */}
      <section className="relative bg-certifyd-blue overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.1), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 py-14 lg:py-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-white text-center sm:text-left">
                Ready to see it in action?
              </h3>
              <p className="text-white/70 text-sm mt-1 text-center sm:text-left">
                Book a demo or tell us about your needs.
              </p>
            </div>
            <a
              href="#get-started"
              className="group inline-flex items-center justify-center px-8 py-3.5 bg-white text-certifyd-blue rounded-sm font-heading font-semibold hover:bg-navy hover:text-white transition-all duration-300 shrink-0"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
                Book a demo
              </span>
              <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial — dark, dramatic */}
      {page.testimonial && (
        <section className="relative bg-navy overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,89,255,0.12), transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div className="section-container relative z-10 py-24 lg:py-32">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <svg
                  className="w-16 h-16 text-certifyd-blue/30 mx-auto mb-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-heading text-2xl lg:text-4xl font-bold text-text-on-dark leading-snug mb-8">
                  &ldquo;{page.testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-sm text-text-on-dark-muted not-italic">
                  — {page.testimonial.attribution}
                </cite>

                <div className="mt-12">
                  <a
                    href="#get-started"
                    className="group inline-flex items-center justify-center px-8 py-3 border border-white/40 text-white rounded-sm font-heading font-medium hover:bg-white hover:text-navy transition-all duration-300"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
                      Get started
                    </span>
                    <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="section-light">
          <div className="section-container">
            <ScrollReveal>
              <div className="mb-12 lg:mb-14">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-certifyd-blue" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                    FAQ
                  </span>
                </div>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                  Common questions.
                </h2>
              </div>
            </ScrollReveal>
            <FAQAccordion faqs={page.faqs} />
          </div>
        </section>
      )}

      {/* Also Relevant */}
      {page.alsoRelevant.length > 0 && (
        <section className="bg-warm-white border-t border-warm-border">
          <div className="section-container py-16 lg:py-20">
            <ScrollReveal>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-text-on-light-muted" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                    Also Relevant
                  </span>
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-text-on-light">
                  Explore more use cases.
                </h3>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.alsoRelevant.map((link, index) => (
                <ScrollReveal key={link.slug} delay={index * 80}>
                  <Link
                    href={`/for/${link.slug}/`}
                    className="group flex items-center justify-between bg-white border border-warm-border rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 hover:border-certifyd-blue transition-all duration-300"
                  >
                    <span className="font-heading text-sm font-semibold text-text-on-light group-hover:text-certifyd-blue transition-colors duration-300">
                      {link.label}
                    </span>
                    <svg
                      className="w-4 h-4 text-text-on-light-muted opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-certifyd-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Content */}
      <RelatedContent
        solutions={page.relatedSolutions}
        articles={page.relatedArticles}
        resources={page.relatedResources}
      />

      {/* Form + CTA */}
      <section
        id="get-started"
        className="relative bg-navy overflow-hidden bg-grid-pattern scroll-mt-20"
      >
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — CTA copy */}
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-certifyd-blue" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                    Get Started
                  </span>
                </div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark leading-tight mb-6">
                  {page.ctaTitle}
                </h2>
                <p className="text-text-on-dark-muted leading-relaxed mb-8">
                  Book a demo to see how Certifyd works for your team, or tell
                  us about your verification needs and we&apos;ll get back to
                  you within 24 hours.
                </p>

                {page.ctaSecondaryLabel && page.ctaSecondaryHref && (
                  <Link
                    href={page.ctaSecondaryHref}
                    className="group inline-flex items-center text-sm font-heading font-medium text-certifyd-blue hover:text-certifyd-blue-light transition-colors"
                  >
                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                      {page.ctaSecondaryLabel}
                    </span>
                    <span className="inline-flex items-center ml-1 w-4 shrink-0 opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={100}>
              <InlineForm source={page.title} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

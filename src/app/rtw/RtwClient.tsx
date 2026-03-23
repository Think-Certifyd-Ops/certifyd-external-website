"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InlineForm } from "@/components/contact/InlineForm";

const tiers = [
  {
    name: "Starter",
    price: "99",
    priceLabel: "\u00A399",
    priceSuffix: "/month",
    description: "For small businesses getting started with compliance.",
    features: [
      "Up to 50 workers",
      "Store unlimited RTW and document checks",
      "Basic compliance reports",
      "3 team members",
      "Full audit trail",
      "Email support",
    ],
    highlighted: false,
    ctaLabel: "Book a Demo",
  },
  {
    name: "Professional",
    price: "199",
    priceLabel: "\u00A3199",
    priceSuffix: "/month",
    description: "For growing businesses that need full compliance coverage.",
    features: [
      "Up to 200 workers",
      "Store unlimited RTW and document checks",
      "Full compliance reports",
      "10 team members",
      "Full audit trail",
      "Priority support",
      "Bulk CSV import",
    ],
    highlighted: true,
    ctaLabel: "Book a Demo",
  },
  {
    name: "Enterprise",
    price: null,
    priceLabel: "Let\u2019s talk",
    priceSuffix: null,
    description: "For larger organisations with custom requirements.",
    features: [
      "Unlimited workers",
      "Store unlimited RTW and document checks",
      "Custom compliance reports",
      "Unlimited team members",
      "Full audit trail",
      "Dedicated account manager",
      "Bulk CSV import",
      "API access (coming soon)",
    ],
    highlighted: false,
    ctaLabel: "Get in Touch",
  },
];

interface RtwPricingSectionProps {
  selectedPlan: string | null;
  onSelectPlan: (plan: string) => void;
}

export function RtwPricingSection({
  selectedPlan,
  onSelectPlan,
}: RtwPricingSectionProps) {
  return (
    <section id="pricing" className="section-light scroll-mt-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="mb-14 lg:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-certifyd-blue" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                Pricing
              </span>
              <div className="w-8 h-px bg-certifyd-blue" />
            </div>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
              Simple, transparent pricing.
            </h2>
            <p className="text-lg text-text-on-light-muted mt-4 max-w-xl mx-auto">
              Undercut the enterprise players. Beat the manual spreadsheet.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <ScrollReveal key={tier.name} delay={index * 100}>
              <div
                className={`relative flex flex-col rounded-sm border p-6 bg-white ${
                  tier.highlighted
                    ? "border-certifyd-blue ring-2 ring-certifyd-blue/20"
                    : "border-warm-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-certifyd-blue px-3 py-0.5 text-xs font-heading font-semibold text-white whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-lg font-bold text-text-on-light">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-text-on-light-muted mt-1">
                    {tier.description}
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-text-on-light">
                      {tier.priceLabel}
                    </span>
                    {tier.priceSuffix && (
                      <span className="text-sm text-text-on-light-muted">
                        {tier.priceSuffix}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-certifyd-blue shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-text-on-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#book-demo"
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full text-center px-6 py-3 rounded-sm font-heading font-semibold transition-all duration-300 block ${
                    tier.highlighted
                      ? "bg-certifyd-blue text-white hover:bg-certifyd-blue-light"
                      : "bg-navy text-white hover:bg-navy-light"
                  }`}
                >
                  {tier.ctaLabel}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

interface RtwDemoSectionProps {
  selectedPlan: string | null;
}

export function RtwDemoSection({ selectedPlan }: RtwDemoSectionProps) {
  const source = selectedPlan
    ? `RTW Compliance Dashboard — /rtw (${selectedPlan} plan)`
    : "RTW Compliance Dashboard — /rtw";

  return (
    <section
      id="book-demo"
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
                  Book a Demo
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark leading-tight mb-6">
                See Certifyd in action.
              </h2>

              {selectedPlan && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-certifyd-blue/15 border border-certifyd-blue/30 rounded-sm mb-6">
                  <span className="text-sm font-heading font-medium text-certifyd-blue">
                    Selected plan: {selectedPlan}
                  </span>
                </div>
              )}

              <p className="text-text-on-dark-muted leading-relaxed mb-8">
                Tell us about your business and what concerns you about RTW
                compliance. We&apos;ll show you how Certifyd can help and answer
                any questions. We typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="text-sm text-text-on-dark-muted">
                    <span className="font-semibold text-text-on-dark">
                      Tell us your concerns
                    </span>{" "}
                    &mdash; we&apos;ll tailor the conversation to your business
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="text-sm text-text-on-dark-muted">
                    <span className="font-semibold text-text-on-dark">
                      See the dashboard live
                    </span>{" "}
                    &mdash; a real walkthrough, not a slide deck
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-certifyd-blue mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="text-sm text-text-on-dark-muted">
                    <span className="font-semibold text-text-on-dark">
                      Get set up fast
                    </span>{" "}
                    &mdash; we&apos;ll onboard your team and import your existing
                    records
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal delay={100}>
            <InlineForm source={source} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function RtwInteractiveWrapper() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <>
      <RtwPricingSection
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
      />
      <RtwDemoSection selectedPlan={selectedPlan} />
    </>
  );
}

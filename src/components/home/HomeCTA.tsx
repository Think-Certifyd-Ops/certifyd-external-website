"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const INDUSTRIES = [
  { label: "Recruitment", href: "/industries/recruitment/" },
  { label: "Trades", href: "/industries/trades/" },
  { label: "Care Homes", href: "/industries/care/" },
  { label: "Workforce", href: "/industries/workforce/" },
];

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

      <div className="section-container relative z-10 py-20 lg:py-28 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark">
            Find out how Certifyd works for your industry
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.label}
                href={industry.href}
                className="group border border-navy-border bg-navy-light px-6 py-3 rounded-sm text-sm font-heading font-medium text-text-on-dark hover:border-white/40 hover:bg-navy-lighter transition-all duration-300"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5 inline-block">
                  {industry.label}
                </span>
                <svg
                  className="w-3.5 h-3.5 ml-2 inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-10">
            <Button variant="outline" size="lg" href="/contact/">
              Get in touch
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

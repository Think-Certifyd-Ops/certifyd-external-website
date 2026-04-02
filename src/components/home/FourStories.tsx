"use client";

import Link from "next/link";
import { TRUST_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustMosaic() {
  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="The Trust Problem"
            title="Every Business Runs on Trust. That Trust Is Broken."
            align="center"
            dark={false}
          />
        </ScrollReveal>

        <div className="mt-14 space-y-6 lg:space-y-0">
          {TRUST_CATEGORIES.map((category, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <ScrollReveal key={category.badge} delay={index * 80}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-10 gap-0 ${
                    index > 0 ? "lg:mt-1" : ""
                  }`}
                >
                  {/* Stat side */}
                  <div
                    className={`flex flex-col justify-center p-8 lg:p-12 bg-navy text-text-on-dark ${
                      isReversed
                        ? "lg:col-span-4 lg:order-2"
                        : "lg:col-span-6 lg:order-1"
                    } ${index === 0 ? "rounded-t-sm lg:rounded-tr-none lg:rounded-l-sm" : ""} ${
                      index === TRUST_CATEGORIES.length - 1
                        ? "lg:rounded-b-none lg:rounded-bl-sm"
                        : ""
                    }`}
                  >
                    <span className="inline-block self-start text-[10px] font-heading font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
                      {category.badge}
                    </span>
                    <p className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none">
                      {category.statHighlight}
                    </p>
                    <p className="font-heading text-sm lg:text-base text-text-on-dark-muted mt-3">
                      {category.statSubtitle}
                    </p>
                  </div>

                  {/* Story side */}
                  <div
                    className={`flex flex-col justify-center p-8 lg:p-12 bg-white border border-warm-border ${
                      isReversed
                        ? "lg:col-span-6 lg:order-1"
                        : "lg:col-span-4 lg:order-2"
                    }`}
                  >
                    <p className="text-text-on-light-muted text-base leading-relaxed">
                      {category.story}
                    </p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium mt-6 group/link"
                    >
                      <span className="transition-transform duration-300 group-hover/link:-translate-x-0.5">
                        Learn more
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1"
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
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Keep backward-compatible export name */
export { TrustMosaic as FourStories };

"use client";

import { useState } from "react";
import Link from "next/link";
import { TRUST_CATEGORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── Mini graphics — dark "UI mockup" elements showing failure states ── */

function HireGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          RTW Status
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-accent-warning/20 flex items-center justify-center text-accent-warning text-[10px] font-bold">
          !
        </span>
        <span className="text-xs text-accent-warning font-heading font-medium">
          Graduate Visa — Needs Sponsorship
        </span>
      </div>
    </div>
  );
}

function TradesGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Identity Check
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-accent-warning/20 flex items-center justify-center text-accent-warning text-xs font-bold">
          ?
        </span>
        <span className="text-xs text-accent-warning font-heading font-medium">
          Unknown — No Verification
        </span>
      </div>
    </div>
  );
}

function CareGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Staff on Shift
        </span>
      </div>
      <div className="flex items-center gap-3">
        {["?", "?", "?"].map((q, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-navy-lighter border border-navy-border flex items-center justify-center text-text-on-dark-muted text-[10px] font-bold">
              {q}
            </span>
            <span className="text-[10px] text-text-on-dark-muted">Unknown</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkforceGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Access Badge
        </span>
      </div>
      <div className="inline-flex items-center gap-1.5 border border-accent-warning/40 rounded px-2 py-1">
        <svg className="w-3 h-3 text-accent-warning" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
        </svg>
        <span className="text-[10px] font-heading font-bold text-accent-warning uppercase tracking-wider">
          Unverified
        </span>
      </div>
    </div>
  );
}

function ThreatsGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Video Call
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-6 rounded-sm bg-navy-lighter border border-navy-border flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-accent-warning" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" />
          </svg>
        </div>
        <span className="text-xs text-accent-warning font-heading font-medium">
          ⚠ Identity Not Verified
        </span>
      </div>
    </div>
  );
}

function SafeguardingGraphic() {
  return (
    <div className="bg-navy rounded-md p-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Front Door
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-accent-warning/20 flex items-center justify-center text-accent-warning text-xs font-bold">
          ?
        </span>
        <span className="text-xs text-accent-warning font-heading font-medium">
          Unknown Visitor
        </span>
      </div>
    </div>
  );
}

const GRAPHICS = [
  HireGraphic,
  TradesGraphic,
  CareGraphic,
  WorkforceGraphic,
  ThreatsGraphic,
  SafeguardingGraphic,
];

/* ── Chevron icon ── */
function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

/* ── Main section ── */
export function TrustMosaic() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function toggleCard(index: number) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {TRUST_CATEGORIES.map((category, index) => {
            const Graphic = GRAPHICS[index];
            const isExpanded = expandedIndex === index;

            return (
              <ScrollReveal key={category.badge} delay={index * 100}>
                <div
                  className={`group flex flex-col bg-white border rounded-sm p-6 h-full transition-all duration-300 ${
                    isExpanded
                      ? "border-certifyd-blue/30 shadow-lg"
                      : "border-warm-border hover:-translate-y-1 hover:border-certifyd-blue/20 hover:shadow-md"
                  }`}
                >
                  {/* Category badge */}
                  <span className="inline-block self-start text-[10px] font-heading font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
                    {category.badge}
                  </span>

                  {/* Stat */}
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-warm-charcoal leading-none">
                    {category.statHighlight}
                  </p>
                  <p className="font-heading text-sm text-text-on-light-muted mt-1.5">
                    {category.statSubtitle}
                  </p>

                  {/* Mini graphic */}
                  <div className="mt-4 flex-1">
                    {Graphic && <Graphic />}
                  </div>

                  {/* Expand/collapse trigger */}
                  <button
                    onClick={() => toggleCard(index)}
                    aria-expanded={isExpanded}
                    className="flex items-center gap-1.5 text-certifyd-blue text-sm font-heading font-medium mt-4 transition-colors duration-200 hover:text-certifyd-blue-dark"
                  >
                    <span>{isExpanded ? "Collapse" : "Read the story"}</span>
                    <ChevronIcon expanded={isExpanded} />
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isExpanded ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-warm-border pt-4">
                      <p className="text-text-on-light-muted text-sm leading-relaxed">
                        {category.story}
                      </p>
                      <Link
                        href={category.href}
                        className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium mt-4 group/link"
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

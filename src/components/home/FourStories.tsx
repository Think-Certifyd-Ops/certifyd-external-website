"use client";

import Link from "next/link";
import { FOUR_STORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* Mini graphic headers — one per story card */
function HireGraphic() {
  return (
    <div className="bg-navy-lighter rounded-md p-3 mb-5">
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
    <div className="bg-navy-lighter rounded-md p-3 mb-5">
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
    <div className="bg-navy-lighter rounded-md p-3 mb-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-heading font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Staff on Shift
        </span>
      </div>
      <div className="flex items-center gap-3">
        {["?", "?", "?"].map((q, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-navy border border-navy-border flex items-center justify-center text-text-on-dark-muted text-[10px] font-bold">
              {q}
            </span>
            <span className="text-[10px] text-text-on-dark-muted">Unknown</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TempGraphic() {
  return (
    <div className="bg-navy-lighter rounded-md p-3 mb-5">
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

const GRAPHICS = [HireGraphic, TradesGraphic, CareGraphic, TempGraphic];

export function FourStories() {
  return (
    <section className="section-dark">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="The Trust Problem"
            title="Every Business Runs on Trust. That Trust Is Broken."
            align="center"
            dark={true}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {FOUR_STORIES.map((story, index) => {
            const Graphic = GRAPHICS[index];
            return (
              <ScrollReveal key={story.title} delay={index * 100}>
                <Link
                  href={story.href}
                  className="group block bg-navy-light border border-navy-border rounded-sm overflow-hidden hover:border-certifyd-blue/30 hover:shadow-lg hover:shadow-certifyd-blue/5 hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="p-6">
                    {Graphic && <Graphic />}

                    <h3 className="font-heading text-base font-semibold text-text-on-dark mb-3">
                      {story.title}
                    </h3>
                    <p className="text-text-on-dark-muted text-sm leading-relaxed mb-4">
                      {story.story}
                    </p>
                    <p className="font-heading text-sm font-bold text-accent-warning mb-4">
                      {story.stat}
                    </p>
                    <span className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium">
                      <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                        Learn more
                      </span>
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

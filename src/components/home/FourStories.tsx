"use client";

import Link from "next/link";
import { FOUR_STORIES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FourStories() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {FOUR_STORIES.map((story, index) => (
            <ScrollReveal key={story.title} delay={index * 100}>
              <Link
                href={story.href}
                className="group block bg-white border border-warm-border rounded-sm p-6 hover:border-certifyd-blue/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <h3 className="font-heading text-base font-semibold text-text-on-light mb-3">
                  {story.title}
                </h3>
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-4">
                  {story.story}
                </p>
                <p className="text-xs font-semibold text-accent-warning mb-4">
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
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

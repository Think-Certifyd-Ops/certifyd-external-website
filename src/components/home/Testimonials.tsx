"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "I do six viewings a day in empty houses with people I\u2019ve never met. My only safety measure is texting my colleague the address. That\u2019s it.",
    attribution: "Estate agent, South London",
  },
  {
    quote:
      "We ask \u2018right to work?\u2019 and they say yes. Three weeks later \u2014 graduate visa, needs \u00a320k sponsorship. We had to start over.",
    attribution: "HR Manager, tech company",
  },
  {
    quote:
      "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
    attribution: "Manager, residential care home",
  },
  {
    quote:
      "Saturday night, full restaurant, two new agency staff I\u2019ve never seen before walk in. They put on aprons and start working. I\u2019m not stopping to check IDs.",
    attribution: "General Manager, restaurant group",
  },
  {
    quote:
      "My clients give me their house keys and alarm codes. They trust me completely. But when I started, nobody verified who I was \u2014 I could have been anyone.",
    attribution: "Self-employed cleaner",
  },
  {
    quote:
      "Monday morning, 30 new temps arrive at the gate. Half the time, the person doesn\u2019t match the name. We wave them through anyway because we\u2019ve got orders to ship.",
    attribution: "Shift Manager, distribution centre",
  },
];

function QuoteCard({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <div className="w-[340px] shrink-0 bg-white border border-warm-border rounded-sm p-6 hover:-translate-y-1 transition-transform duration-300">
      <svg
        className="w-8 h-8 text-certifyd-blue/20 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-sm text-text-on-light leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="text-xs text-text-on-light-muted not-italic font-heading">
        &mdash; {attribution}
      </cite>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-light overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            badge="The Reality"
            title="Real stories. Real businesses. No names needed."
            align="center"
            dark={false}
          />
        </ScrollReveal>
      </div>

      <div className="mt-12 group">
        <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 gap-6 px-6">
            {TESTIMONIALS.map((t, i) => (
              <QuoteCard key={i} quote={t.quote} attribution={t.attribution} />
            ))}
          </div>
          <div className="flex shrink-0 gap-6 px-6" aria-hidden="true">
            {TESTIMONIALS.map((t, i) => (
              <QuoteCard
                key={`dup-${i}`}
                quote={t.quote}
                attribution={t.attribution}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

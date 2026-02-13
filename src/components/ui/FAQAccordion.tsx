"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl divide-y divide-warm-border">
      {faqs.map((faq, index) => (
        <ScrollReveal key={index} delay={index * 60}>
          <div>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
              aria-expanded={openIndex === index}
            >
              <h3 className="font-heading text-base font-semibold text-text-on-light group-hover:text-certifyd-blue transition-colors duration-300 pr-4">
                {faq.question}
              </h3>
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                  openIndex === index
                    ? "border-certifyd-blue bg-certifyd-blue rotate-45"
                    : "border-warm-border group-hover:border-certifyd-blue"
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-colors duration-300 ${
                    openIndex === index
                      ? "text-white"
                      : "text-text-on-light-muted group-hover:text-certifyd-blue"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                openIndex === index ? "max-h-96 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-text-on-light-muted leading-relaxed pr-12">
                {faq.answer}
              </p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PRODUCTS = [
  {
    name: "Portal",
    description: "Right to Work compliance for SMEs. Audit-ready in minutes, not months.",
    cta: "Start free trial",
    href: "/products/portal/",
    dark: true,
    span: "md:col-span-7",
  },
  {
    name: "Screen",
    description: "Pre-meeting identity checks so you know who you're talking to before the call starts.",
    cta: "Try free",
    href: "/products/verify/",
    dark: false,
    span: "md:col-span-5",
  },
  {
    name: "Sentinel",
    description: "Compliant meeting recording with AI-powered monitoring and real-time flagging.",
    cta: "Join waitlist",
    href: "/products/sentinel/",
    dark: true,
    span: "md:col-span-4",
  },
  {
    name: "CodeWords",
    description: "Verify anyone on any channel — QR codes, word codes, or number codes.",
    cta: "Book demo",
    href: "/products/codewords/",
    dark: false,
    span: "md:col-span-4",
  },
  {
    name: "ID",
    description: "Know who's at your door. Instant verification for home visits and deliveries.",
    cta: "Book demo",
    href: "/products/id/",
    dark: true,
    span: "md:col-span-4",
  },
];

export function ProductSuite() {
  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="Solutions"
            title="Five products. One identity platform."
            subtitle="Each product tackles a different identity risk — from hiring compliance to doorstep verification. Use one or use them all."
            align="center"
            dark={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-14">
          {PRODUCTS.map((product, index) => {
            const isTopRow = index < 2;
            const colSpan =
              index === 0
                ? "md:col-span-7"
                : index === 1
                  ? "md:col-span-5"
                  : "md:col-span-4";

            return (
              <ScrollReveal
                key={product.name}
                delay={index * 80}
                className={`${colSpan} ${isTopRow ? "md:min-h-[240px]" : ""}`}
              >
                <Link
                  href={product.href}
                  className={`group flex flex-col justify-between h-full rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    product.dark
                      ? "bg-navy text-text-on-dark hover:shadow-navy/30"
                      : "bg-white border border-warm-border text-text-on-light hover:border-certifyd-blue/20"
                  }`}
                >
                  <div>
                    <span
                      className={`inline-block text-xs font-heading font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 ${
                        product.dark
                          ? "bg-certifyd-blue/15 text-certifyd-blue"
                          : "bg-certifyd-blue/10 text-certifyd-blue"
                      }`}
                    >
                      {product.name}
                    </span>

                    <p
                      className={`text-sm leading-relaxed ${
                        product.dark
                          ? "text-text-on-dark-muted"
                          : "text-text-on-light-muted"
                      }`}
                    >
                      {product.description}
                    </p>
                  </div>

                  <span className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium mt-6 group-hover:gap-2 transition-all duration-300">
                    {product.cta}
                    <svg
                      className="w-4 h-4 ml-1 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CAPABILITIES = [
  {
    title: "Certify That Person",
    description:
      "Two-way, real-time identity verification. QR code refreshes every 30 seconds. Works across any communication channel.",
    href: "/solutions/person/",
    icon: (
      <svg className="w-7 h-7 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Certify That Business",
    description:
      "Businesses create their profile, add team members, and build a verified workforce. Candidates and contractors verify to stand out.",
    href: "/solutions/business/",
    icon: (
      <svg className="w-7 h-7 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Audit-Ready Compliance",
    description:
      "See who\u2019s verified, who\u2019s pending, and your compliance score. One-click reports. Audit-ready when it matters.",
    href: "/solutions/compliance/",
    icon: (
      <svg className="w-7 h-7 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export function WhatWeDo() {
  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="What We Do"
            title="One Platform. Three Capabilities."
            align="center"
            dark={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {CAPABILITIES.map((cap, index) => (
            <ScrollReveal key={cap.title} delay={index * 120}>
              <Link
                href={cap.href}
                className="group block bg-white border border-warm-border rounded-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 hover:border-certifyd-blue/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-sm bg-certifyd-blue/10 flex items-center justify-center mb-6">
                  {cap.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-text-on-light mb-3">
                  {cap.title}
                </h3>
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-4">
                  {cap.description}
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

"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";

const METRICS = [
  { value: "30", suffix: "s", label: "Verification time" },
  { value: "<60", suffix: "s", label: "Right-to-work check" },
  { value: "100", suffix: "%", label: "Audit trail coverage" },
  { value: "24/7", suffix: "", label: "Continuous monitoring" },
];

export function MetricsBar() {
  return (
    <section className="relative overflow-hidden border-y border-navy-border bg-navy">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,89,255,0.04) 0%, transparent 50%, rgba(0,89,255,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-14 lg:py-16">
        {/* Live badge */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-success">
              Real-Time Metrics
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 100}>
              {metric.value === "24/7" ? (
                <div className="text-center">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue">
                    24/7
                  </div>
                  <p className="text-sm mt-2 text-text-on-dark-muted">
                    {metric.label}
                  </p>
                </div>
              ) : metric.value === "<60" ? (
                <div className="text-center">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue">
                    &lt;60s
                  </div>
                  <p className="text-sm mt-2 text-text-on-dark-muted">
                    {metric.label}
                  </p>
                </div>
              ) : (
                <StatCounter
                  value={`${metric.value}${metric.suffix}`}
                  label={metric.label}
                  dark={true}
                />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance badges */}
        <ScrollReveal delay={400}>
          <div className="border-t border-navy-border mt-12 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {[
                { icon: "shield", label: "GDPR Compliant" },
                { icon: "server", label: "UK Data Residency" },
                { icon: "lock", label: "Tamper-Proof Records" },
                { icon: "clipboard", label: "Audit-Ready" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 border border-navy-border rounded-full px-4 py-2"
                >
                  <svg
                    className="w-3.5 h-3.5 text-certifyd-blue shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {badge.icon === "shield" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    )}
                    {badge.icon === "server" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                    )}
                    {badge.icon === "lock" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    )}
                    {badge.icon === "clipboard" && (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                    )}
                  </svg>
                  <span className="text-xs font-heading font-medium text-text-on-dark-muted">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

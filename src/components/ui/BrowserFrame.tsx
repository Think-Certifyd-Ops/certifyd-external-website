"use client";

import Link from "next/link";

interface BrowserFrameProps {
  url: string;
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url, backHref, backLabel, children }: BrowserFrameProps) {
  return (
    <div className="min-h-screen bg-navy bg-grid-pattern">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(0,89,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-6 pt-24 lg:pt-28 pb-6 lg:pb-10">
        {/* Back link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-certifyd-blue hover:text-certifyd-blue-light transition-colors font-heading font-medium mb-5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          {backLabel}
        </Link>

        {/* Browser window */}
        <div className="bg-navy-light border border-navy-border rounded-lg overflow-hidden shadow-2xl shadow-black/40">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-2.5 bg-navy-lighter border-b border-navy-border">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            {/* URL bar */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 bg-navy-light/80 border border-navy-border rounded-md px-3 py-1 max-w-sm w-full">
                <svg className="w-3 h-3 text-accent-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="text-[11px] text-text-on-dark-muted font-heading truncate">{url}</span>
              </div>
            </div>
            <div className="w-[52px]" />
          </div>

          {/* Content — scrollable */}
          <div className="overflow-y-auto max-h-[75vh] lg:max-h-[78vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

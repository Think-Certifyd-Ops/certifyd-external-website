"use client";

import Link from "next/link";

interface PhoneFrameProps {
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}

export function PhoneFrame({ backHref, backLabel, children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-navy bg-grid-pattern flex flex-col items-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(0,89,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-sm mx-auto px-4 pt-24 lg:pt-28 pb-6 lg:pb-10">
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

        {/* Phone shell */}
        <div className="relative bg-[#1A1A1A] rounded-[2.5rem] p-2 shadow-2xl shadow-black/50 border border-white/10">
          {/* Outer bezel highlight */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none" />

          {/* Screen */}
          <div className="relative bg-navy-light rounded-[2rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="flex justify-center pt-2.5 pb-1 bg-navy-light relative z-20">
              <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1A1A2E] border border-white/10" />
              </div>
            </div>

            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pb-2 bg-navy-light relative z-20">
              <span className="text-[10px] text-text-on-dark-muted font-medium">9:41</span>
              <div className="flex items-center gap-1">
                {/* Signal */}
                <svg className="w-3.5 h-3.5 text-text-on-dark-muted" viewBox="0 0 16 16" fill="currentColor">
                  <rect x="1" y="11" width="2" height="4" rx="0.5" opacity="0.3" />
                  <rect x="5" y="8" width="2" height="7" rx="0.5" opacity="0.5" />
                  <rect x="9" y="5" width="2" height="10" rx="0.5" opacity="0.7" />
                  <rect x="13" y="2" width="2" height="13" rx="0.5" />
                </svg>
                {/* WiFi */}
                <svg className="w-3.5 h-3.5 text-text-on-dark-muted" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 12.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  <path d="M4.5 10.5a5 5 0 017 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M2 8a8 8 0 0112 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                </svg>
                {/* Battery */}
                <div className="flex items-center gap-0.5">
                  <div className="w-5 h-2.5 rounded-sm border border-text-on-dark-muted/60 p-[1px]">
                    <div className="h-full w-3/4 bg-text-on-dark-muted rounded-[1px]" />
                  </div>
                  <div className="w-0.5 h-1 bg-text-on-dark-muted/60 rounded-r" />
                </div>
              </div>
            </div>

            {/* Content — scrollable */}
            <div className="overflow-y-auto" style={{ maxHeight: "calc(80vh - 6rem)" }}>
              {children}
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-2 bg-navy-light">
              <div className="w-32 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

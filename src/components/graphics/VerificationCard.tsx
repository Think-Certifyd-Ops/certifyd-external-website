interface VerificationCardProps {
  name: string;
  secondaryLabel: string;
  secondaryValue: string;
  context?: string;
  certifiedSince?: string;
}

export function VerificationCard({
  name,
  secondaryLabel,
  secondaryValue,
  context = "Arrived: 09:15 AM",
  certifiedSince = "January 2026",
}: VerificationCardProps) {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative bg-navy-light border border-navy-border rounded-lg overflow-hidden -rotate-1 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Verification Result
          </span>
          <svg
            className="w-4 h-4 text-accent-success"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        {/* Confirmed banner */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-accent-success/15 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-accent-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-accent-success uppercase tracking-wider">
                Identity Verified
              </div>
              <div className="text-[10px] text-text-on-dark-muted">
                Confirmed by Certifyd
              </div>
            </div>
          </div>

          {/* Person details */}
          <div className="bg-navy-lighter rounded-md p-4 space-y-3">
            <div>
              <div className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">
                Name
              </div>
              <div className="text-base text-text-on-dark font-medium">
                {name}
              </div>
            </div>
            <div className="border-t border-navy-border/50 pt-3">
              <div className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">
                {secondaryLabel}
              </div>
              <div className="text-base text-text-on-dark font-medium">
                {secondaryValue}
              </div>
            </div>
            <div className="border-t border-navy-border/50 pt-3">
              <div className="text-[10px] text-certifyd-blue uppercase tracking-wider font-semibold mb-0.5">
                Certified Since
              </div>
              <div className="text-sm text-text-on-dark">{certifiedSince}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <span className="text-[10px] text-text-on-dark-muted font-medium">
            {context}
          </span>
          <span className="text-[10px] text-accent-success font-medium">
            Record Created
          </span>
        </div>
      </div>
    </div>
  );
}

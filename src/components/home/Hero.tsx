import { Button } from "@/components/ui/Button";

const VERIFICATION_FEED = [
  {
    name: "Sarah Johnson",
    type: "Identity",
    time: "2m ago",
    status: "verified" as const,
  },
  {
    name: "David Chen",
    type: "Right to Work",
    time: "5m ago",
    status: "verified" as const,
  },
  {
    name: "Smith Electrical",
    type: "Business",
    time: "12m ago",
    status: "verified" as const,
  },
  {
    name: "James Wilson",
    type: "Identity",
    time: "Just now",
    status: "pending" as const,
  },
];

function VerificationDashboard() {
  return (
    <div className="relative group">
      {/* Blue glow behind card */}
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative bg-navy-light border border-navy-border rounded-lg overflow-hidden group-hover:rotate-1 transition-transform duration-500 ease-out shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Certifyd Dashboard
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-accent-success font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            Live
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 p-5">
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-certifyd-blue">
              247
            </div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">
              Verified
            </div>
          </div>
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-accent-warning">
              12
            </div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">
              Pending
            </div>
          </div>
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-accent-success">
              98%
            </div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">
              Score
            </div>
          </div>
        </div>

        {/* Recent Verifications */}
        <div className="px-5 pb-2">
          <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-3">
            Recent Verifications
          </div>
          <div className="space-y-0">
            {VERIFICATION_FEED.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-2.5 border-t border-navy-border/50"
              >
                <div className="flex items-center gap-2.5">
                  {item.status === "verified" ? (
                    <svg
                      className="w-4 h-4 text-accent-success shrink-0"
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
                  ) : (
                    <svg
                      className="w-4 h-4 text-accent-warning shrink-0 animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  )}
                  <div>
                    <span className="text-sm text-text-on-dark font-medium">
                      {item.name}
                    </span>
                    <span className="text-xs text-text-on-dark-muted ml-2">
                      {item.type}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-text-on-dark-muted whitespace-nowrap">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance bar */}
        <div className="px-5 pb-5 pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider">
              Compliance Score
            </span>
            <span className="font-heading text-sm font-bold text-certifyd-blue">
              93%
            </span>
          </div>
          <div className="w-full h-2 bg-navy-lighter rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-certifyd-blue to-certifyd-blue-light rounded-full"
              style={{ width: "93%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="section-dark bg-grid-pattern relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(0,89,255,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pb-8 lg:pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-on-dark animate-fade-in">
              The identity layer for businesses that can&apos;t afford to get it
              wrong.
            </h1>

            <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-xl mt-6 animate-slide-up animation-delay-200">
              Affordable identity verification that works before the offer,
              before the interview, before you let someone through the door.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 animate-slide-up animation-delay-400">
              <Button variant="outline" size="lg" href="#how-it-works">
                See how it works
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="/contact/"
                className="text-text-on-dark-muted hover:text-white"
              >
                Book a demo
              </Button>
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none animate-slide-up animation-delay-300">
            <VerificationDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

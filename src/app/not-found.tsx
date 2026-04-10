import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Identity Not Verified | Certifyd",
  description: "This page couldn't be verified. It may have been moved, renamed, or never existed in the first place.",
};

export default function NotFound() {
  return (
    <section className="section-dark min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background grid noise */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Animated scan line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent animate-pulse" style={{ top: "38%" }} />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-warning/20 to-transparent animate-pulse" style={{ top: "62%", animationDelay: "1s" }} />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Verification failed badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-warning/15 border border-accent-warning/30 rounded-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-accent-warning animate-pulse" />
            <span className="font-heading text-xs text-accent-warning font-medium uppercase tracking-wider">
              Verification Failed
            </span>
          </div>

          {/* The 404 */}
          <div className="relative mb-6">
            <span className="font-heading text-[10rem] md:text-[14rem] font-bold leading-none text-navy-lighter select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-accent-warning/40 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-accent-warning"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-text-on-dark mb-3">
            Identity not verified
          </h1>
          <p className="text-text-on-dark-muted leading-relaxed mb-10 max-w-md mx-auto">
            This page couldn&apos;t be verified. It may have been moved,
            renamed, or never existed in the first place. Unlike our checks,
            this one came back empty.
          </p>

          {/* Fake verification log */}
          <div className="bg-navy-light border border-navy-border rounded-sm p-5 mb-10 text-left max-w-md mx-auto font-heading text-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-navy-border">
              <div className="w-2 h-2 rounded-full bg-accent-warning" />
              <span className="text-text-on-dark-muted uppercase tracking-wider">
                Verification Log
              </span>
            </div>
            <div className="space-y-1.5 text-text-on-dark-muted">
              <div>
                <span className="text-text-on-dark-muted/50">09:41:03</span>{" "}
                <span className="text-certifyd-blue-light">GET</span>{" "}
                <span className="text-text-on-dark">request received</span>
              </div>
              <div>
                <span className="text-text-on-dark-muted/50">09:41:03</span>{" "}
                <span className="text-certifyd-blue-light">SCAN</span>{" "}
                <span className="text-text-on-dark">checking routes...</span>
              </div>
              <div>
                <span className="text-text-on-dark-muted/50">09:41:04</span>{" "}
                <span className="text-certifyd-blue-light">MATCH</span>{" "}
                <span className="text-accent-warning">no match found</span>
              </div>
              <div>
                <span className="text-text-on-dark-muted/50">09:41:04</span>{" "}
                <span className="text-certifyd-blue-light">RESULT</span>{" "}
                <span className="text-accent-warning">VERIFICATION FAILED</span>
              </div>
            </div>
          </div>

          {/* Navigation options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-certifyd-blue text-white px-8 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Go Home
            </Link>
            <Link
              href="/tools/"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-8 py-3 rounded-sm font-heading text-sm font-medium hover:bg-white hover:text-navy transition-colors"
            >
              Try Our Free Tools
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-8 py-3 rounded-sm font-heading text-sm font-medium hover:bg-white hover:text-navy transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

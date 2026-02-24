import type { Metadata } from "next";
import { LeadMagnetForm } from "@/components/lead-magnets/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Fair Work Agency Compliance Checklist | Certifyd",
  description:
    "Free 10-point compliance checklist for UK employers. Are you ready for the Fair Work Agency launching April 2026? Download now.",
  openGraph: {
    title: "Fair Work Agency Compliance Checklist",
    description:
      "10 things every UK employer must check before April 2026. Free download.",
    type: "website",
  },
};

export default function FairWorkAgencyChecklistPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Value proposition */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-accent-warning/15 border border-accent-warning/30 rounded-sm">
                  <span className="font-heading text-xs text-accent-warning font-medium uppercase tracking-wider">
                    Free Download
                  </span>
                </div>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-on-dark mb-6 leading-tight">
                Fair Work Agency<br />
                Compliance Checklist
              </h1>

              <p className="text-lg text-text-on-dark-muted mb-8 leading-relaxed max-w-lg">
                10 things every UK employer must check before the Fair Work
                Agency launches in April 2026. Penalties up to{" "}
                <strong className="text-accent-warning">£45,000 per worker</strong>.
                Are you ready?
              </p>

              {/* What's inside */}
              <div className="space-y-3 mb-8">
                <h3 className="font-heading text-sm font-semibold text-text-on-dark uppercase tracking-wider">
                  What&apos;s inside
                </h3>
                {[
                  "Pre-hire verification requirements",
                  "During-employment compliance obligations",
                  "Audit readiness assessment",
                  "Key penalty amounts and dates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-success/15 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-accent-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-text-on-dark-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-navy-light border border-navy-border rounded-sm p-8">
              <h2 className="font-heading text-xl font-bold text-text-on-dark mb-1">
                Get the free checklist
              </h2>
              <p className="text-sm text-text-on-dark-muted mb-6">
                Enter your details and we&apos;ll send it straight to your inbox.
              </p>
              <LeadMagnetForm
                source="fair-work-agency-checklist"
                pdfUrl="/resources/preview/fair-work-agency-checklist"
                buttonLabel="Download Checklist"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / urgency strip */}
      <section className="bg-warm-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "£45,000", label: "Fine per illegal worker" },
              { value: "5 years", label: "Potential prison sentence" },
              { value: "April 2026", label: "Fair Work Agency launches" },
              { value: "Any size", label: "Business — no exemptions" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl md:text-3xl font-bold text-accent-warning">
                  {stat.value}
                </div>
                <div className="text-sm text-text-on-light-muted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief content preview */}
      <section className="section-light">
        <div className="section-container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-light mb-8 text-center">
            What the Fair Work Agency Means for You
          </h2>

          <div className="space-y-6 text-text-on-light-muted leading-relaxed">
            <p>
              The <strong className="text-text-on-light">Fair Work Agency</strong> is
              the UK government&apos;s new single enforcement body for employment
              law. It amalgamates multiple agencies into one — with the power to
              conduct <strong className="text-text-on-light">unannounced visits</strong>{" "}
              to any business and audit right-to-work compliance.
            </p>
            <p>
              Most UK employers assume they&apos;re compliant because they ask
              candidates &ldquo;Do you have the right to work?&rdquo; at interview.
              That is <strong className="text-text-on-light">not</strong> a compliance
              check. If you can&apos;t prove you verified documents before Day 1, you
              have no statutory excuse — and no defence in an audit.
            </p>
            <p>
              This checklist covers the 10 most critical compliance requirements
              — from document verification to audit readiness — so you know
              exactly where your business stands.
            </p>
          </div>

          <div className="mt-10 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              Get the Free Checklist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

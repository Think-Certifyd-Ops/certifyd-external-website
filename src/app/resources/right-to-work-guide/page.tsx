import type { Metadata } from "next";
import { LeadMagnetForm } from "@/components/lead-magnets/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Right-to-Work Audit Readiness Guide | Certifyd",
  description:
    "A practical 5-part guide for UK employers covering the three-step check, common mistakes, the vagueness problem, and audit readiness scoring.",
  openGraph: {
    title: "Right-to-Work Audit Readiness Guide",
    description:
      "Are you audit-ready? A practical guide for UK employers. Free download.",
    type: "website",
  },
};

export default function RightToWorkGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Value proposition */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-certifyd-blue/15 border border-certifyd-blue/30 rounded-sm">
                  <span className="font-heading text-xs text-certifyd-blue-light font-medium uppercase tracking-wider">
                    Free Guide
                  </span>
                </div>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-on-dark mb-6 leading-tight">
                Right-to-Work<br />
                Audit Readiness Guide
              </h1>

              <p className="text-lg text-text-on-dark-muted mb-8 leading-relaxed max-w-lg">
                A practical 5-part guide for UK employers. From the three-step
                check to audit readiness scoring — everything you need to build a
                compliant system.
              </p>

              {/* What's inside */}
              <div className="space-y-3 mb-8">
                <h3 className="font-heading text-sm font-semibold text-text-on-dark uppercase tracking-wider">
                  Inside the guide
                </h3>
                {[
                  "The three-step right-to-work check explained",
                  "6 common mistakes that cost employers thousands",
                  "The vagueness problem — the hidden hiring risk",
                  "Self-assessment audit readiness scorecard",
                  "How to build a compliant system by company size",
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
                Get the free guide
              </h2>
              <p className="text-sm text-text-on-dark-muted mb-6">
                Enter your details and we&apos;ll send it straight to your inbox.
              </p>
              <LeadMagnetForm
                source="right-to-work-guide"
                pdfUrl="/resources/preview/right-to-work-guide"
                buttonLabel="Download Guide"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why this matters strip */}
      <section className="bg-warm-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                ),
                title: "No statutory excuse",
                body: "Without documented checks, you have zero defence in an audit",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Unannounced visits",
                body: "The Fair Work Agency can inspect any business, any time",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Get audit-ready",
                body: "This guide shows you exactly where you stand and what to fix",
              },
            ].map((card) => (
              <div key={card.title} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-certifyd-blue/10 flex items-center justify-center text-certifyd-blue mb-4">
                  {card.icon}
                </div>
                <h3 className="font-heading text-base font-semibold text-text-on-light mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-on-light-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content preview */}
      <section className="section-light">
        <div className="section-container max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-on-light mb-8 text-center">
            What You&apos;ll Learn
          </h2>

          <div className="space-y-6">
            {[
              {
                part: "Part 1",
                title: "The Three-Step Right-to-Work Check",
                desc: "Obtain, Check, Copy & Record — the exact process that gives you a statutory excuse.",
              },
              {
                part: "Part 2",
                title: "Common Mistakes That Cost Employers",
                desc: "Six errors we see repeatedly — from accepting verbal confirmation to missing follow-up checks.",
              },
              {
                part: "Part 3",
                title: "The Vagueness Problem",
                desc: "The biggest hidden risk in UK hiring: candidates who give technically true but misleading answers about their right to work.",
              },
              {
                part: "Part 4",
                title: "Audit Readiness Scorecard",
                desc: "10 yes/no questions to assess your current compliance posture. Score yourself honestly.",
              },
              {
                part: "Part 5",
                title: "Building a Compliant System",
                desc: "What you actually need based on your company size — from spreadsheets to full platform integration.",
              },
            ].map((section) => (
              <div
                key={section.part}
                className="flex gap-5 items-start p-5 bg-white border border-warm-border rounded-sm"
              >
                <div className="w-10 h-10 bg-certifyd-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading text-xs font-bold">
                    {section.part.replace("Part ", "")}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-text-on-light mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-text-on-light-muted">
                    {section.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#top"
              className="inline-flex items-center gap-2 bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading text-sm font-medium hover:bg-certifyd-blue-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
              Get the Free Guide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

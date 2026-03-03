import type { Metadata } from "next";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Partners & Programmes — Certifyd",
  description:
    "Certifyd partners with leading technology programmes to accelerate identity verification innovation. NVIDIA Inception Programme member.",
  alternates: { canonical: "/partners/" },
  openGraph: {
    title: "Partners & Programmes — Certifyd",
    description:
      "Certifyd partners with leading technology programmes to accelerate identity verification innovation.",
    url: "https://www.certifyd.io/partners/",
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            Partners &amp; Programmes
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
            We work with world-class technology partners to push the boundaries
            of identity verification and bring enterprise-grade trust
            infrastructure to every business.
          </p>
        </div>
      </section>

      {/* Programme Memberships */}
      <section className="section-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
              Programme Memberships
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
              Backed by the Best in AI
            </h2>
          </div>

          {/* NVIDIA Inception Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-warm-border rounded-sm p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="/logos/partners/nvidia-inception.png"
                    alt="NVIDIA Inception Programme"
                    className="h-16 md:h-20 w-auto"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-text-on-light mb-3">
                    NVIDIA Inception Programme
                  </h3>
                  <p className="text-text-on-light-muted leading-relaxed mb-4">
                    Certifyd has been accepted into the{" "}
                    <a
                      href="https://www.nvidia.com/en-eu/deep-learning-ai/startups/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-certifyd-blue hover:underline"
                    >
                      NVIDIA Inception Programme
                    </a>
                    , a programme designed to nurture cutting-edge startups that
                    are revolutionising industries with AI and data science.
                  </p>
                  <p className="text-text-on-light-muted leading-relaxed mb-6">
                    As a member, Certifyd gains access to NVIDIA&apos;s
                    deep learning expertise, GPU technology, and go-to-market
                    support — accelerating our development of AI-powered identity
                    verification that&apos;s faster, more secure, and more
                    accessible than ever before.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-xs font-heading font-medium text-warm-charcoal">
                      <svg className="w-3.5 h-3.5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                      </svg>
                      AI &amp; Deep Learning
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-xs font-heading font-medium text-warm-charcoal">
                      <svg className="w-3.5 h-3.5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
                      </svg>
                      GPU Infrastructure
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-xs font-heading font-medium text-warm-charcoal">
                      <svg className="w-3.5 h-3.5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                      </svg>
                      Go-to-Market Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SolutionCTA
        title="Interested in partnering with Certifyd?"
        secondaryLabel="Learn about our solutions"
        secondaryHref="/solutions/business/"
      />
    </>
  );
}

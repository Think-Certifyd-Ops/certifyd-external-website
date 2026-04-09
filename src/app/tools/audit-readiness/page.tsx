import type { Metadata } from "next";
import { AuditReadiness } from "@/components/tools/AuditReadiness";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { ENFORCEMENT, formatNumber, formatGBP } from "@/lib/tools/enforcement-data";

export const metadata: Metadata = {
  title: "FWA Audit Readiness Score | Free Compliance Assessment",
  description:
    "15 questions. 2 minutes. Find out if your business would pass a Fair Work Agency inspection. Free audit readiness assessment from Certifyd.",
  alternates: { canonical: "/tools/audit-readiness/" },
  openGraph: {
    title: "FWA Audit Readiness Score | Free Compliance Assessment | Certifyd",
    description:
      "15 questions. 2 minutes. Find out if your business would pass a Fair Work Agency inspection.",
    url: "https://www.certifyd.io/tools/audit-readiness/",
  },
};

const FAQS = [
  {
    question: "What is the Fair Work Agency?",
    answer:
      "The Fair Work Agency (FWA) is a new single enforcement body launched in April 2026, combining the enforcement powers of HMRC's National Minimum Wage unit, the Employment Agency Standards Inspectorate (EASI), and the Gangmasters and Labour Abuse Authority (GLAA). It has broader inspection powers and can conduct unannounced visits to any employer.",
  },
  {
    question: "What happens during an FWA audit?",
    answer:
      "An FWA audit typically involves inspectors requesting copies of all Right to Work documents, checking that follow-up checks have been completed for time-limited workers, reviewing your checking process for consistency, and verifying that records are stored securely. Inspectors can arrive unannounced and expect you to produce documentation quickly.",
  },
  {
    question: "What are the penalties for failing an audit?",
    answer:
      "Civil penalties for employing an illegal worker are up to £45,000 per worker for a first offence and up to £60,000 for repeat offences. Beyond financial penalties, businesses risk criminal prosecution, sponsor licence revocation, reputational damage, and loss of contracts.",
  },
  {
    question: "How is the readiness score calculated?",
    answer:
      "Each of the 15 questions is weighted based on its importance to audit compliance. Critical items like having RTW documents and completing pre-employment checks carry a weight of 3, important items carry a weight of 2, and good-practice items carry a weight of 1. Your percentage score is your total points divided by the maximum possible score of 33.",
  },
  {
    question: "Can this tool guarantee I'll pass an audit?",
    answer:
      "No. This is a general readiness indicator based on common compliance requirements, not a legal assessment. Audit standards may vary depending on your sector, the enforcement body involved, and specific circumstances. For legal advice, consult a qualified immigration or employment lawyer.",
  },
];

export default function AuditReadinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-6">
            Free Assessment
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            How Audit-Ready Is Your Business?
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
            15 questions. 2 minutes. Find out if you&apos;d pass an FWA
            inspection.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <ScrollReveal delay={0}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  Apr 2026
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  Fair Work Agency launched
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  {formatNumber(ENFORCEMENT.totalVisits2025)}
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  enforcement visits in 2025
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <p className="font-heading text-2xl lg:text-3xl font-bold text-certifyd-blue">
                  {formatGBP(ENFORCEMENT.civilPenaltiesValue2025)}
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  in penalties issued
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-dark">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <AuditReadiness />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
              Common Questions About FWA Audits
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Don&apos;t wait for an inspection to find out
          </h2>
          <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
            Certifyd Portal automates Right to Work checks, tracks every expiry
            date, and generates audit-ready reports in seconds &mdash; so
            you&apos;re always prepared.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact/" size="lg">
              Book a demo
            </Button>
            <Button href="/products/portal/" size="lg" variant="outline">
              Learn about Portal
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

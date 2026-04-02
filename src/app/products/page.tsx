import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Solutions — Certifyd Identity Infrastructure",
  description:
    "The identity layer for businesses that can't afford to get it wrong. Five solutions covering compliance, pre-meeting verification, meeting recording, corporate authentication, and home access.",
  alternates: { canonical: "/products/" },
  openGraph: {
    title: "Solutions — Certifyd Identity Infrastructure",
    description:
      "Five solutions covering compliance, verification, meeting recording, and corporate authentication.",
    url: "https://www.certifyd.io/products/",
  },
};

const products = [
  {
    name: "Certifyd Portal",
    slug: "/products/portal/",
    tagline: "Would you pass a Home Office audit today?",
    description:
      "Right to Work compliance workflow for SMEs. Employee document uploads, expiry tracking, automated chase sequences, and one-click audit reports. Wraps your existing IDSP. From £29/month.",
    badge: "Start free trial",
    badgeColor: "bg-accent-success/15 text-accent-success",
    cta: "Start free trial",
  },
  {
    name: "Certifyd Screen",
    slug: "/products/verify/",
    tagline: "Get the admin done before the call starts.",
    description:
      "Pre-meeting identity verification that saves recruiters 160+ hours a year. Create a meeting, set requirements, share a link. Candidates complete selfie, documents, and declarations before the interview. Live now.",
    badge: "Live",
    badgeColor: "bg-accent-success/15 text-accent-success",
    cta: "Try free",
  },
  {
    name: "Certifyd Sentinel",
    slug: "/products/sentinel/",
    tagline: "Every meeting. Recorded. Compliant. Searchable.",
    description:
      "FCA-compliant meeting recording and AI monitoring. Automatic capture across Zoom, Teams, and Google Meet. Immutable archive, compliance keyword flagging, deepfake detection, and a central searchable dashboard.",
    badge: "Waitlist",
    badgeColor: "bg-certifyd-blue/15 text-certifyd-blue",
    cta: "Join waitlist",
  },
  {
    name: "Certifyd CodeWords",
    slug: "/products/codewords/",
    tagline: "Verify anyone. Any channel. In seconds.",
    description:
      "Professional identity verification across every channel. QR codes for video calls, 3-word codes for phone calls and Slack, 6-digit number codes for quick checks. Multiple methods, one platform. Stop BEC attacks and CEO fraud.",
    badge: "Coming soon",
    badgeColor: "bg-certifyd-blue/15 text-certifyd-blue",
    cta: "Book demo",
  },
  {
    name: "Certifyd ID",
    slug: "/products/id/",
    tagline: "Know who's at your door.",
    description:
      "Simple identity verification for home access. Tradespeople, delivery drivers, care workers — scan their QR code and know they're real. No apps, no hardware. The simple version of Certifyd for everyday use.",
    badge: "Coming soon",
    badgeColor: "bg-certifyd-blue/15 text-certifyd-blue",
    cta: "Book demo",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            Solutions
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold max-w-4xl leading-tight text-text-on-dark animate-fade-in">
            The Identity Layer for Businesses That Can&apos;t Afford to Get It Wrong.
          </h1>
          <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-2xl mt-6 animate-slide-up animation-delay-200">
            Five products. One platform. From Right to Work compliance to catching CEO fraud on a phone call — Certifyd covers the full spectrum of business identity risk.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-light">
        <div className="section-container">
          <div className="grid grid-cols-1 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 80}>
                <Link href={product.slug} className="group block">
                  <div className="bg-white border border-warm-border rounded-sm p-8 lg:p-10 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="lg:max-w-2xl">
                        <div className="flex items-center gap-3 mb-3">
                          <h2 className="font-heading text-xl lg:text-2xl font-bold text-text-on-light group-hover:text-certifyd-blue transition-colors duration-300">
                            {product.name}
                          </h2>
                          <span className={`inline-block px-2.5 py-0.5 text-xs font-heading font-medium rounded-full ${product.badgeColor}`}>
                            {product.badge}
                          </span>
                        </div>
                        <p className="font-heading text-base font-medium text-certifyd-blue mb-3">
                          {product.tagline}
                        </p>
                        <p className="text-text-on-light-muted text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="shrink-0 self-center">
                        <span className="inline-flex items-center text-sm font-heading font-medium text-certifyd-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {product.cta}
                          <svg
                            className="w-4 h-4 ml-1.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="Not sure which product you need? Let's talk."
        secondaryLabel="Back to home"
        secondaryHref="/"
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { TeamCards } from "@/components/about/TeamCards";
import { Vision } from "@/components/about/Vision";

export const metadata: Metadata = {
  title: "About Certifyd — Identity Verification Leadership Team",
  description:
    "Meet the team behind Certifyd. Deep experience building mission-critical infrastructure for the world's largest institutions — now solving identity verification for every business.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Certifyd — Identity Verification Leadership Team",
    description:
      "Meet the team behind Certifyd. Deep experience building mission-critical infrastructure — now solving identity verification for every business.",
    url: "https://www.certifyd.io/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            Built by people who understand what&apos;s at stake.
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
            A team with deep experience building mission-critical infrastructure
            for the world&apos;s largest institutions — now solving the identity
            trust problem for every business.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
              The Team
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
              Institutional DNA. Startup Speed.
            </h2>
          </div>
          <TeamCards />
        </div>
      </section>

      {/* Vision */}
      <Vision />

      {/* What We Build */}
      <section className="section-light border-t border-warm-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                Our Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products/codewords/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    Certifyd CodeWords &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/portal/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    Certifyd Portal &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/portal/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    Certifyd Portal &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                From Our Blog
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog/identity-as-infrastructure/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    What Is Identity-as-Infrastructure? &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/trust-layer-missing/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    The Trust Layer That&apos;s Missing &rarr;
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/welcome-to-certifyd/"
                    className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                  >
                    Welcome to Certifyd &rarr;
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                Get In Touch
              </h3>
              <p className="text-sm text-text-on-light-muted mb-4">
                Want to learn more about how we can help your business?
              </p>
              <Link
                href="/contact/"
                className="inline-block text-sm text-certifyd-blue font-medium hover:text-certifyd-blue-light transition-colors"
              >
                Book a Demo &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-dark">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            We&apos;re hiring
          </h2>
          <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
            We&apos;re building the identity layer for businesses. If that
            sounds interesting, we&apos;d like to hear from you.
          </p>
          <Link
            href="/careers/"
            className="inline-block bg-certifyd-blue text-white px-8 py-3 rounded-sm font-medium hover:bg-certifyd-blue-light transition-colors"
          >
            View Opportunities
          </Link>
        </div>
      </section>
    </>
  );
}

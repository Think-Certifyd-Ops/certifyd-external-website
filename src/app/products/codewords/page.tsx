import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RelatedContent } from "@/components/solutions/RelatedContent";

export const metadata: Metadata = {
  title: "Certifyd CodeWords | Challenge Trusted Phones",
  description:
    "Connect trusted phones in person, then challenge sensitive requests and confirm whether the enrolled phone approved the exact action.",
  alternates: { canonical: "/products/codewords/" },
  openGraph: {
    title: "Certifyd CodeWords | Meet Once. Check Any Time.",
    description:
      "Connect trusted phones in person, then use a separate challenge before acting on a sensitive request.",
    url: "https://www.certifyd.io/products/codewords/",
  },
};

const steps = [
  {
    number: "01",
    title: "Meet in person",
    body: "Open CodeWords on two phones while you are together. One phone presents a fast-changing QR session and the other scans it.",
  },
  {
    number: "02",
    title: "Connect both phones",
    body: "Bluetooth completes a fresh signed device challenge. Both people compare the same three words and six-digit number, then approve on their own phone.",
  },
  {
    number: "03",
    title: "Challenge from anywhere",
    body: "Later, send the exact money, account, access or safety request. The enrolled phone can confirm it, deny it or report pressure.",
  },
];

const safeguards = [
  "One active phone per account",
  "Separate device keys for presence and approval",
  "Rotating QR sessions with replay protection",
  "Authenticated Bluetooth during in-person setup",
  "Signed challenges with short expiry times",
  "Recovery revokes old phones and trusted connections",
];

export default function CertifydCodeWordsPage() {
  return (
    <>
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(0,89,255,0.16), transparent 58%), radial-gradient(ellipse at 85% 75%, rgba(0,89,255,0.08), transparent 48%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue">
                  Certifyd CodeWords
                </span>
                <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-white/5 text-text-on-dark-muted">
                  Family and Work
                </span>
              </div>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] text-text-on-dark">
                Meet once.<br />
                <span className="text-certifyd-blue">Check any time.</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-2xl mt-6 leading-relaxed">
                Connect trusted phones while you are together. Later, challenge a sensitive request and see whether the enrolled phone approved that exact request.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact/" size="lg">Join the first release</Button>
                <Button href="/security/codewords/" variant="outline" size="lg">Read the security model</Button>
              </div>
            </div>

            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative mx-auto max-w-sm aspect-square rounded-3xl bg-certifyd-blue p-10 shadow-2xl shadow-black/30">
                <div className="absolute left-[17%] top-[17%] h-[42%] w-[42%] border-l-[36px] border-t-[36px] border-white" />
                <div className="absolute bottom-[17%] right-[17%] h-[42%] w-[42%] border-b-[36px] border-r-[36px] border-white" />
                <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  How it works
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-2xl leading-tight">
                Trust starts together.<br />
                <span className="text-certifyd-blue">The challenge works remotely.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="h-full bg-white border border-warm-border border-t-4 border-t-certifyd-blue rounded-sm p-8">
                  <p className="font-heading text-sm font-bold text-certifyd-blue mb-8">{step.number}</p>
                  <h3 className="font-heading text-2xl font-bold text-text-on-light mb-4">{step.title}</h3>
                  <p className="text-text-on-light-muted leading-relaxed">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="h-full border border-navy-border bg-navy-light rounded-sm p-8 lg:p-10">
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-4">Family</p>
                <h2 className="font-heading text-3xl font-bold text-text-on-dark mb-4">A familiar check for unusual requests</h2>
                <p className="text-text-on-dark-muted leading-relaxed">
                  Connect with a parent, child, partner or trusted friend before an urgent call arrives. Challenge money, account or safety requests on a separate channel.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="h-full border border-navy-border bg-navy-light rounded-sm p-8 lg:p-10">
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue mb-4">Work</p>
                <h2 className="font-heading text-3xl font-bold text-text-on-dark mb-4">A second channel for sensitive actions</h2>
                <p className="text-text-on-dark-muted leading-relaxed">
                  Connect trusted colleagues in person, then add a separate confirmation step for payment, file, access and account-change requests.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="mb-10 lg:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-text-on-light-muted" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                    Security you can understand
                  </span>
                </div>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
                  The phone signs.<br />
                  <span className="text-certifyd-blue">You decide.</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {safeguards.map((safeguard, index) => (
                <ScrollReveal key={safeguard} delay={index * 60}>
                  <div className="h-full bg-white border border-warm-border rounded-sm p-5 flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-certifyd-blue" />
                    <p className="text-sm font-medium text-text-on-light">{safeguard}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 border-y border-amber-200/70">
        <div className="section-container py-14 lg:py-16">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">What a confirmation means</p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light mb-4">
                CodeWords confirms an enrolled phone and the exact request shown in the app.
              </h2>
              <p className="text-text-on-light-muted leading-relaxed">
                It does not prove that a voice, email, video image or legal identity is genuine. Coercion, a compromised unlocked phone and a mistaken first connection remain possible. If anything feels wrong, stop and verify another way.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "CodeWords security model", href: "/security/codewords/" },
          { label: "CodeWords support", href: "/support/codewords/" },
          { label: "Account deletion", href: "/account-deletion/" },
        ]}
        articles={[
          { label: "The Arup Deepfake Attack: Lessons for Every Business", href: "/blog/arup-deepfake-attack/" },
          { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
        ]}
        resources={[
          { label: "FBI IC3: Business Email Compromise", href: "https://www.ic3.gov/PSA/2024/PSA240911", external: true },
          { label: "UK Finance: Annual Fraud Report", href: "https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications/annual-fraud-report-2024", external: true },
        ]}
      />

      <section className="section-dark">
        <div className="section-container text-center py-20 lg:py-24">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark mb-5">Connect before the urgent request arrives.</h2>
          <p className="mx-auto max-w-2xl text-text-on-dark-muted mb-8">
            CodeWords requires two compatible phones, an internet connection, and camera and Bluetooth access during the first in-person setup.
          </p>
          <Button href="/contact/" size="lg">Join the first release</Button>
        </div>
      </section>
    </>
  );
}

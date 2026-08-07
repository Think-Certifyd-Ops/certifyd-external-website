import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

type Scenario = {
  title: string;
  body: string;
};

type Step = {
  number: string;
  title: string;
  body: string;
};

type AudiencePageProps = {
  audience: "family" | "business";
  eyebrow: string;
  headline: string;
  intro: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel: string;
  secondaryHref: string;
  proofNote: string;
  requestLabel: string;
  requestText: string;
  scenariosTitle: string;
  scenariosIntro: string;
  scenarios: Scenario[];
  steps: Step[];
  distinctionTitle: string;
  distinctionBody: string;
  faqs: { question: string; answer: string }[];
};

const safeguards = [
  "Trusted phones connect while both people are together",
  "A rotating QR session and Bluetooth check device proximity",
  "Each approval is signed by a key held on the enrolled phone",
  "Biometrics protect sensitive approvals on supported devices",
  "Challenges name the exact request and expire after a short time",
  "Device recovery revokes the old phone and trusted connections",
];

export function CodeWordsAudiencePage({
  audience,
  eyebrow,
  headline,
  intro,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  proofNote,
  requestLabel,
  requestText,
  scenariosTitle,
  scenariosIntro,
  scenarios,
  steps,
  distinctionTitle,
  distinctionBody,
  faqs,
}: AudiencePageProps) {
  const isFamily = audience === "family";

  return (
    <>
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 18% 42%, rgba(0,89,255,0.16), transparent 58%), radial-gradient(ellipse at 86% 72%, rgba(0,89,255,0.08), transparent 48%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
                {eyebrow}
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.03] text-text-on-dark max-w-4xl">
                {headline}
              </h1>
              <p className="text-lg lg:text-xl text-text-on-dark-muted max-w-2xl mt-6 leading-relaxed">
                {intro}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {primaryHref ? (
                  <Button href={primaryHref} size="lg">{primaryLabel}</Button>
                ) : (
                  <Button href="#early-access" size="lg">{primaryLabel}</Button>
                )}
                <Button href={secondaryHref} variant="outline" size="lg">
                  {secondaryLabel}
                </Button>
              </div>
              <p className="mt-5 text-xs text-text-on-dark-muted max-w-2xl">
                {proofNote}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 lg:p-7 shadow-2xl shadow-black/25">
                <div className="flex items-start justify-between gap-4 border-b border-navy-border pb-5">
                  <div>
                    <p className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue-light">
                      New CodeWords challenge
                    </p>
                    <p className="text-xs text-text-on-dark-muted mt-2">From a trusted connection</p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 text-[10px] font-heading rounded-full bg-certifyd-blue/15 text-certifyd-blue-light">
                    04:52 left
                  </span>
                </div>
                <div className="py-6">
                  <p className="text-xs font-heading uppercase tracking-wider text-text-on-dark-muted">
                    {requestLabel}
                  </p>
                  <p className="text-xl font-semibold text-white mt-2 leading-snug">
                    {requestText}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-sm bg-certifyd-blue px-4 py-3 text-center font-heading text-sm font-semibold text-white">
                    Approve
                  </div>
                  <div className="rounded-sm border border-navy-border px-4 py-3 text-center font-heading text-sm font-semibold text-white">
                    Deny
                  </div>
                </div>
                <p className="mt-4 text-center text-[11px] text-text-on-dark-muted">
                  Biometric approval required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                When to use it
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-[-0.03em] text-text-on-light mt-4 leading-tight">
                {scenariosTitle}
              </h2>
              <p className="text-lg text-text-on-light-muted mt-5 leading-relaxed">
                {scenariosIntro}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} delay={index * 70}>
                <div className="h-full border border-warm-border border-t-4 border-t-certifyd-blue bg-white rounded-sm p-7 lg:p-8">
                  <h3 className="font-heading text-xl font-bold text-text-on-light">
                    {scenario.title}
                  </h3>
                  <p className="text-text-on-light-muted leading-relaxed mt-3">
                    {scenario.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue-light">
                One relationship, three steps
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-[-0.03em] text-text-on-dark mt-4 leading-tight">
                Meet once. Check from anywhere.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 80}>
                <div className="h-full bg-navy-light border border-navy-border rounded-sm p-7 lg:p-8">
                  <span className="font-heading text-sm font-bold text-certifyd-blue-light">
                    {step.number}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-8">
                    {step.title}
                  </h3>
                  <p className="text-text-on-dark-muted leading-relaxed mt-4">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <ScrollReveal className="lg:col-span-5">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                Why it is different
              </span>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-[-0.03em] text-text-on-light mt-4 leading-tight">
                {distinctionTitle}
              </h2>
              <p className="text-text-on-light-muted leading-relaxed mt-5">
                {distinctionBody}
              </p>
              <Button href="/security/codewords/" className="mt-7">
                Read the security model
              </Button>
            </ScrollReveal>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {safeguards.map((safeguard, index) => (
                <ScrollReveal key={safeguard} delay={index * 55}>
                  <div className="h-full bg-white border border-warm-border rounded-sm p-5 flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-certifyd-blue" />
                    <p className="text-sm font-medium text-text-on-light leading-relaxed">
                      {safeguard}
                    </p>
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
              <p className="font-heading text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3">
                What an approval means
              </p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light mb-4">
                CodeWords confirms that the enrolled phone approved the exact request shown in the app.
              </h2>
              <p className="text-text-on-light-muted leading-relaxed">
                It does not prove that a voice, message, video image, or legal identity is genuine. A person may be under pressure, an unlocked phone may be compromised, or the wrong person may have been trusted at the first meeting. Stop if anything still feels wrong.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
              Questions
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light mt-4 mb-8">
              What people ask before they start
            </h2>
          </ScrollReveal>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <section id="early-access" className="section-dark scroll-mt-24">
        <div className="section-container py-20 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark leading-tight">
              {isFamily
                ? "Give your family a safer way to check."
                : "Add a trusted check before the next sensitive request."}
            </h2>
            <p className="text-lg text-text-on-dark-muted mt-5 mb-8 max-w-2xl">
              {isFamily
                ? "Join the first family release and we will let you know when CodeWords is ready to install."
                : "Book a short call to choose one high-risk workflow for a CodeWords pilot."}
            </p>
            {isFamily ? (
              <WaitlistForm
                placeholder="you@example.com"
                buttonLabel="Join the family release"
                eventLabel="codewords-family"
                source="codewords-family-waitlist"
                successMessage="You are on the list. We will be in touch."
              />
            ) : (
              <div className="flex flex-wrap gap-4">
                <Button href="https://cal.com/andrew-speer/certifyd-discovery" size="lg">
                  Book a 20-minute pilot call
                </Button>
                <Button href="/contact/" variant="outline" size="lg">
                  Send an enquiry
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

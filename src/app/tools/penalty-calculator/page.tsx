import type { Metadata } from "next";
import { PenaltyCalculator } from "@/components/tools/PenaltyCalculator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { ENFORCEMENT, formatGBP, formatNumber } from "@/lib/tools/enforcement-data";

export const metadata: Metadata = {
  title: "RTW Penalty Exposure Calculator — How Much Could You Be Fined? | Certifyd",
  description:
    "Calculate your worst-case Right to Work penalty exposure. With fines up to £60,000 per illegal worker and 12,831 Home Office visits in 2025, find out what's at stake for your business.",
  alternates: { canonical: "/tools/penalty-calculator/" },
  openGraph: {
    title: "RTW Penalty Exposure Calculator | Certifyd",
    description:
      "Calculate your worst-case Right to Work penalty exposure. Fines up to £60,000 per worker. 12,831 Home Office visits in 2025.",
    url: "https://www.certifyd.io/tools/penalty-calculator/",
  },
};

const STATS = [
  {
    value: formatGBP(ENFORCEMENT.civilPenaltiesValue2025),
    label: "in fines issued (2025)",
  },
  {
    value: formatNumber(ENFORCEMENT.totalVisits2025),
    label: "Home Office visits (2025)",
  },
  {
    value: `${Math.round(ENFORCEMENT.visitGrowthRate * 100)}%`,
    label: "YoY increase in visits",
  },
];

const FAQS = [
  {
    question: "How much is a Right to Work fine?",
    answer:
      "Since February 2024, the civil penalty for employing an illegal worker is up to £45,000 per worker for a first offence and £60,000 per worker for a repeat offence. These tripled from the previous rates of £15,000 and £20,000. The penalty is per worker, so the total exposure scales linearly with the number of employees you can't prove you verified.",
  },
  {
    question: "What counts as a 'repeat' offence?",
    answer:
      "A repeat offence applies if your business has received a civil penalty for employing an illegal worker within the three years preceding the new breach. This applies to the employing entity — if you operate multiple companies, a penalty against one does not automatically make the others repeat offenders.",
  },
  {
    question: "Can a digital Right to Work check protect me from fines?",
    answer:
      "Yes. Conducting a compliant Right to Work check — whether manual or digital — before the employee starts work gives you a 'statutory excuse'. This means that even if the worker later turns out to have no right to work, you have a defence against a civil penalty. Digital Identity Document Verification Technology (IDVT) checks conducted through a certified provider like Certifyd provide the strongest form of statutory excuse.",
  },
  {
    question: "What triggers a Home Office visit?",
    answer:
      "The Home Office uses intelligence-led targeting. Common triggers include: tip-offs or complaints (from former employees, competitors, or the public), data sharing between government departments (HMRC, DWP), sector-wide enforcement campaigns, sponsor licence compliance checks, and previous enforcement history. The Fair Work Agency, launched in April 2026, further consolidates these intelligence sources.",
  },
  {
    question: "Are these calculations guaranteed?",
    answer:
      "No. This calculator shows your maximum theoretical penalty exposure based on published government penalty rates. Actual penalties may be reduced through mitigating factors such as cooperation, remedial action, or partial compliance. The figures do not constitute legal advice — consult a specialist immigration solicitor for guidance specific to your circumstances.",
  },
];

export default function PenaltyCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-warning/10 text-accent-warning mb-5">
                Free Tool
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold">
                RTW Penalty Exposure Calculator
              </h1>
              <p className="text-lg text-text-on-dark-muted mt-5 max-w-2xl mx-auto">
                Find out how much your business could be fined for non-compliant
                Right to Work checks. Penalty rates tripled in February 2024 &mdash;
                most businesses haven&apos;t recalculated their risk.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-navy-border">
            {STATS.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center md:px-8">
                  <p className="font-heading text-3xl font-bold text-text-on-dark">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-on-dark-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-dark py-16 lg:py-20">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <PenaltyCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light py-16 lg:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
                FAQ
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
                Common questions about RTW penalties
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 lg:py-20">
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Don&apos;t wait for an inspection to find out
            </h2>
            <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
              Certifyd digitises your Right to Work checks, giving you a
              statutory excuse for every employee &mdash; in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact/">
                Book a demo
              </Button>
              <Button variant="outline" size="lg" href="/tools/cost-calculator/">
                Calculate your costs
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

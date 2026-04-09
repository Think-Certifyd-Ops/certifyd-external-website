import type { Metadata } from "next";
import { DEEPFAKE_STATS, formatNumber } from "@/lib/tools/enforcement-data";
import { DeepfakeAssessment } from "@/components/tools/DeepfakeAssessment";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Deepfake Vulnerability Assessment | Free Security Tool | Certifyd",
  description:
    "10 questions that reveal your business's exposure to AI-generated identity fraud. Free deepfake vulnerability assessment with personalised attack scenarios and remediation guidance.",
  alternates: { canonical: "/tools/deepfake-assessment/" },
  openGraph: {
    title: "Deepfake Vulnerability Assessment | Free Security Tool | Certifyd",
    description:
      "10 questions that reveal your business's exposure to AI-generated identity fraud. Free deepfake vulnerability assessment.",
    url: "https://www.certifyd.io/tools/deepfake-assessment/",
  },
};

const FAQS = [
  {
    question: "What is a deepfake and why should my business care?",
    answer:
      "A deepfake is an AI-generated video, image, or audio clip that convincingly impersonates a real person. Businesses should care because deepfakes are now used in fraud, impersonation attacks on video calls, and social engineering. In 2024, engineering firm Arup lost $25 million to a single deepfake video call. The technology is cheap, fast, and improving every month.",
  },
  {
    question: "How accurate is this assessment?",
    answer:
      "This assessment identifies structural vulnerabilities in your identity verification and authorisation processes. It is based on real-world attack patterns and published research. It is not a penetration test or technical audit — it highlights process gaps that deepfake attackers exploit.",
  },
  {
    question: "What is the EU AI Act and does it apply to my business?",
    answer:
      "The EU AI Act comes into force in August 2026. It requires any entity deploying AI-generated content (including deepfakes) to disclose that fact. It also creates obligations for businesses to detect and label synthetic media. Non-compliance fines are up to 6% of global annual revenue. If you trade with or employ people in the EU, it likely applies to you.",
  },
  {
    question: "Can humans really only detect 24.5% of deepfakes?",
    answer:
      "Yes. A 2024 study by University College London found that humans correctly identified deepfake videos only 24.5% of the time in controlled lab conditions. In real-world settings — poor lighting, compressed video, time pressure — detection rates drop even further. This is why automated detection tools are essential.",
  },
  {
    question: "How does Certifyd protect against deepfakes?",
    answer:
      "Certifyd Sentinel uses multi-layered liveness detection, biometric verification, and AI-powered deepfake analysis to verify identity in real time. It works during video calls, remote onboarding, and identity checks — catching synthetic media that human eyes miss.",
  },
  {
    question: "Is my data stored when I use this tool?",
    answer:
      "No. All calculations happen in your browser. No answers or scores are sent to our servers. If you choose to email yourself the report, only the email address, name, and company you provide are stored.",
  },
];

export default function DeepfakeAssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <ScrollReveal>
            <p className="font-heading text-xs font-medium uppercase tracking-widest text-certifyd-blue mb-4">
              Free security tool
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
              How Vulnerable Is Your Business to Deepfakes?
            </h1>
            <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
              10 questions that reveal your exposure to AI-generated identity
              fraud. Takes 2 minutes. No signup required.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="section-dark border-y border-navy-border">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark">
                  {formatNumber(DEEPFAKE_STATS.detectedDeepfakes2025)}
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  deepfakes detected in 2025
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-accent-warning">
                  ${formatNumber(DEEPFAKE_STATS.arup25mFraud / 1_000_000)}M
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  stolen in a single deepfake attack
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <p className="font-heading text-2xl lg:text-3xl font-bold text-red-400">
                  {(DEEPFAKE_STATS.humanDetectionAccuracy * 100).toFixed(1)}%
                </p>
                <p className="text-sm text-text-on-dark-muted mt-1">
                  human detection accuracy
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Assessment tool */}
      <section className="section-dark">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <DeepfakeAssessment />
          </ScrollReveal>
        </div>
      </section>

      {/* The Arup Case */}
      <section className="section-dark border-t border-navy-border">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="font-heading text-xs font-medium uppercase tracking-widest text-red-400">
                Case study
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark">
                The Arup Attack: $25M Lost in One Video Call
              </h2>
              <div className="space-y-4 text-text-on-dark-muted leading-relaxed">
                <p>
                  In January 2024, a finance worker at Arup — one of the
                  world&apos;s largest engineering consultancies — joined a video
                  call with what appeared to be the company&apos;s Chief Financial
                  Officer and several senior colleagues.
                </p>
                <p>
                  The CFO instructed the worker to process an urgent series of
                  transactions. The worker complied, authorising 15 transfers
                  totalling $25 million to five Hong Kong bank accounts.
                </p>
                <p>
                  Every single participant on that call — except the victim — was
                  a deepfake. The attackers had used publicly available footage of
                  the real executives to create real-time AI-generated avatars
                  convincing enough to pass scrutiny on a live video call.
                </p>
                <p>
                  The fraud was only discovered days later when the worker raised
                  the transaction through normal channels.
                </p>
              </div>
              <div className="bg-navy-light border border-navy-border rounded-sm p-5">
                <h3 className="font-heading text-sm font-bold text-text-on-dark mb-3">
                  What went wrong
                </h3>
                <ul className="space-y-2">
                  {[
                    "No multi-factor identity challenge on the video call",
                    "Single person authorised a $25M transfer without in-person verification",
                    "Executive footage was freely available from public conferences",
                    "No deepfake detection technology was in place",
                    "Staff had not been trained on deepfake awareness",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-on-dark-muted"
                    >
                      <svg
                        className="w-4 h-4 text-red-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-light">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-text-on-light mb-8">
              Frequently asked questions
            </h2>
            <FAQAccordion faqs={FAQS} />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark border-t border-navy-border">
        <div className="section-container text-center py-20">
          <ScrollReveal>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark mb-4">
              Don&apos;t wait for a $25M lesson
            </h2>
            <p className="text-lg text-text-on-dark-muted max-w-xl mx-auto mb-8">
              Certifyd Sentinel detects deepfakes in real time &mdash; protecting
              your video calls, onboarding, and identity verification from
              AI-generated fraud.
            </p>
            <Button variant="primary" size="lg" href="/contact/">
              Book a demo
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

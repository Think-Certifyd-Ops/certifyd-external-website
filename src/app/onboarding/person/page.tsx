import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QRScanGraphic } from "@/components/graphics/QRScanGraphic";

export const metadata: Metadata = {
  title: "Getting Started for Individuals — Certifyd",
  description:
    "Set up your Certifyd identity in minutes. Create your account, register your device, and start verifying. No passwords, no hassle.",
  alternates: { canonical: "/onboarding/person/" },
  openGraph: {
    title: "Getting Started for Individuals — Certifyd",
    description:
      "Set up your Certifyd identity in minutes. Create your account, register your device, and start verifying.",
    url: "https://www.certifyd.io/onboarding/person/",
  },
};

const steps = [
  "Download the Certifyd app and create your account",
  "Register your device with a secure biometric authentication \u2014 no passwords needed",
  "Link to your employer or organisation (if applicable)",
  "You\u2019re verified. Scan or show your QR code to prove your identity in 30 seconds.",
];

const features = [
  {
    title: "Prove Who You Are",
    description:
      "When you arrive at a job, a client\u2019s home, or a meeting \u2014 verify your identity instantly. No ID cards, no paperwork, no delays.",
  },
  {
    title: "Two-Way Verification",
    description:
      "You verify them, they verify you. Both parties confirm each other\u2019s identity simultaneously. You always know who you\u2019re dealing with.",
  },
  {
    title: "Works Everywhere",
    description:
      "In person, on video calls, over the phone, via text. One app, every channel where identity matters.",
  },
  {
    title: "Your Data Stays on Your Device",
    description:
      "Your identity is tied to your physical device through a verified credential. It can\u2019t be copied, phished, or stolen. You\u2019re in control.",
  },
];

export default function PersonOnboardingPage() {
  return (
    <>
      <SolutionHero
        badge="Getting Started"
        title="Verify Your Identity in Minutes"
        subtitle="Set up your Certifyd identity once. Use it everywhere. No passwords, no ID cards, no friction \u2014 just verified identity that you are who you say you are."
      >
        <QRScanGraphic />
      </SolutionHero>

      <SolutionSteps steps={steps} title="How to Get Started" />

      {/* What You Can Do */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  What You Can Do
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                One identity.<br />
                <span className="text-certifyd-blue">Every situation.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <h3 className="font-heading text-lg font-semibold text-text-on-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA
        title="Ready to get verified?"
        secondaryLabel="Getting started for organisations"
        secondaryHref="/onboarding/organisation/"
      />
    </>
  );
}

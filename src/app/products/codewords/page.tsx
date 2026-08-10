import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RelatedContent } from "@/components/solutions/RelatedContent";

export const metadata: Metadata = {
  title: "Certifyd CodeWords | Check suspicious requests with people you trust",
  description:
    "Add a trusted phone while you are together. Later, challenge an unusual money, account or safety request and see what that enrolled phone approved.",
  alternates: { canonical: "/products/codewords/" },
  openGraph: {
    title: "Certifyd CodeWords | Meet once. Check any time.",
    description:
      "A separate way for families and teams to check suspicious requests before anyone acts.",
    url: "https://www.certifyd.io/products/codewords/",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Add someone side by side",
    body: "One phone shows changing, signed LiveQR frames. The other scans them and checks for the matching nearby Bluetooth signal.",
  },
  {
    number: "02",
    title: "Compare the same words",
    body: "Both people compare three words and a six-digit number, then approve the direct device setup on their own phone.",
  },
  {
    number: "03",
    title: "Challenge the exact request",
    body: "Later, ask about the payment, password reset, file share or safety request itself. The other phone can confirm, deny or report pressure.",
  },
];

const familyExamples = [
  "Are you asking me to send £420 for the deposit?",
  "Are you asking me to buy gift cards during this call?",
  "Are you safe and asking me to collect you?",
];

const workExamples = [
  "Are you asking me to change the supplier bank account?",
  "Are you asking me to share the payroll file with this address?",
  "Are you asking me to reset the administrator password?",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 shrink-0 text-certifyd-blue" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" />
    </svg>
  );
}

function PhoneShot({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[330px] overflow-hidden rounded-[2rem] border border-navy-border/60 bg-white shadow-2xl shadow-black/30">
      <Image
        src={src}
        alt={alt}
        width={1320}
        height={2868}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function CodeWordsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 18% 40%, rgba(0,89,255,0.18), transparent 55%), radial-gradient(ellipse at 82% 75%, rgba(0,89,255,0.08), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="mb-6 inline-block rounded-full bg-certifyd-blue/15 px-3 py-1 font-heading text-xs font-medium text-certifyd-blue">
                Certifyd CodeWords
              </span>
              <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[1.04] text-text-on-dark lg:text-7xl">
                Meet once.<br />
                <span className="text-certifyd-blue">Check any time.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-on-dark-muted lg:text-xl">
                Add a trusted phone while you are together. Later, challenge an unusual request and see whether that enrolled phone approved the exact details.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/products/codewords/family/" size="lg">
                  Explore Family
                </Button>
                <Button href="/products/codewords/demo/" variant="outline" size="lg">
                  Try the challenge demo
                </Button>
                <Button href="/products/codewords/business/" variant="outline" size="lg">
                  Explore Work
                </Button>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-text-on-dark-muted">
                CodeWords confirms an enrolled phone and a specific request. It does not prove a voice, email sender or legal identity.
              </p>
            </div>

            <div className="lg:col-span-5">
              <PhoneShot
                src="/images/products/codewords/codewords-family-home.png"
                alt="Certifyd CodeWords Family home screen with an incoming challenge and trusted person count"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                How it works
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-text-on-light lg:text-5xl">
                Trust starts before the suspicious call.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-text-on-light-muted">
                Caller ID, a familiar voice and an email address can all be imitated. CodeWords creates a separate relationship between two enrolled phones first.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {setupSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 100}>
                <div className="h-full rounded-sm border border-warm-border bg-white p-8">
                  <p className="font-heading text-sm font-bold text-certifyd-blue">{step.number}</p>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-text-on-light">{step.title}</h3>
                  <p className="mt-4 leading-relaxed text-text-on-light-muted">{step.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
            <PhoneShot
              src="/images/products/codewords/codewords-direct-setup.png"
              alt="Direct device setup screen explaining LiveQR, Bluetooth and word comparison"
            />
            <ScrollReveal>
              <div>
                <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Two signals, one human check
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight text-text-on-light lg:text-4xl">
                  A saved QR screenshot is not enough.
                </h2>
                <p className="mt-5 leading-relaxed text-text-on-light-muted">
                  The beta scans three fresh, sequential QR frames and looks for a matching Bluetooth service advertised by the presenting phone. Both people then compare the same short code before accepting.
                </p>
                <div className="mt-7 rounded-sm border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                  Current beta limitation: Bluetooth is a second nearby-device signal. It is not cryptographic proof of distance, and a modified client or coordinated relay remains possible.
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="family" className="section-dark scroll-mt-28">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <div>
                <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  CodeWords for Family
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight text-text-on-dark lg:text-5xl">
                  A calmer answer to “Is that really you?”
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-on-dark-muted">
                  Add a parent, partner, adult child or close friend before an emergency. If a future request feels wrong, stop the conversation and challenge the exact action in CodeWords.
                </p>
                <div className="mt-8 space-y-4">
                  {familyExamples.map((example) => (
                    <div key={example} className="flex gap-3 rounded-sm border border-navy-border bg-navy-light p-4 text-text-on-dark">
                      <CheckIcon />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/products/codewords/family/" size="lg">
                    Explore CodeWords for Family
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <div className="lg:col-span-5">
              <PhoneShot
                src="/images/products/codewords/codewords-incoming-challenge.png"
                alt="Incoming CodeWords challenge asking about an exact venue deposit request"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-light scroll-mt-28">
        <div className="section-container">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <PhoneShot
                src="/images/products/codewords/codewords-confirmed-result.png"
                alt="CodeWords result confirming that an enrolled phone approved a password reset request"
              />
            </div>
            <ScrollReveal className="order-1 lg:order-2 lg:col-span-7">
              <div>
                <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  CodeWords for Work
                </p>
                <h2 className="font-heading text-3xl font-bold leading-tight text-text-on-light lg:text-5xl">
                  A separate approval path for sensitive requests.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-on-light-muted">
                  A familiar colleague can still appear in a spoofed email or cloned voice call. CodeWords lets a trusted colleague review the exact request on their enrolled phone before the team acts.
                </p>
                <div className="mt-8 space-y-4">
                  {workExamples.map((example) => (
                    <div key={example} className="flex gap-3 rounded-sm border border-warm-border bg-white p-4 text-text-on-light">
                      <CheckIcon />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-text-on-light-muted">
                  Work challenges are an additional control. They do not execute payments or replace your existing dual approval, callback or account-security process.
                </p>
                <div className="mt-8">
                  <Button href="/products/codewords/business/" size="lg">
                    Explore CodeWords for Work
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                What a result means
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-text-on-dark lg:text-5xl">
                Confirm the device and the request, not the caller’s identity.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 p-8">
              <h3 className="font-heading text-xl font-bold text-emerald-300">A valid confirmation means</h3>
              <ul className="mt-6 space-y-4 text-text-on-dark-muted">
                <li>The previously enrolled phone responded.</li>
                <li>The responder opened CodeWords and approved the displayed request.</li>
                <li>The signed answer is fresh, time-limited and bound to those details.</li>
              </ul>
            </div>
            <div className="rounded-sm border border-amber-400/30 bg-amber-400/10 p-8">
              <h3 className="font-heading text-xl font-bold text-amber-300">It does not prove</h3>
              <ul className="mt-6 space-y-4 text-text-on-dark-muted">
                <li>That a voice, video image, email address or legal identity is genuine.</li>
                <li>That the phone is not stolen and already unlocked.</li>
                <li>That the person is free from coercion or that the requested action is safe.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "Certifyd ID", href: "/products/id/" },
          { label: "Certifyd Sentinel", href: "/products/sentinel/" },
          { label: "Certifyd Screen", href: "/products/verify/" },
        ]}
        articles={[
          { label: "The Arup Deepfake Attack: Lessons for Every Business", href: "/blog/arup-deepfake-attack/" },
          { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
        ]}
        resources={[
          { label: "Read the CodeWords security model", href: "/security/codewords/", external: false },
          { label: "Get CodeWords support", href: "/support/codewords/", external: false },
          { label: "Read the Certifyd privacy policy", href: "/privacy/", external: false },
        ]}
      />

      <section className="relative overflow-hidden bg-certifyd-blue">
        <div className="section-container py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-bold text-white lg:text-5xl">
            Add trust before you need to question it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Join the Family beta with someone you know, or talk to us about a controlled Work pilot.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact/?subject=CodeWords%20Family%20beta" variant="outline" size="lg">
              Join the Family beta
            </Button>
            <Button href="/contact/?subject=CodeWords%20Work%20pilot" variant="ghost" size="lg" className="text-white hover:text-navy">
              Discuss a Work pilot
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

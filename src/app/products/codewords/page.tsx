import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd CodeWords — Professional Identity Verification Across Every Channel",
  description:
    "Verify anyone, any channel, in seconds. QR codes for video calls, 3-word codes for phone calls, number codes for quick checks. One platform, three verification methods.",
  alternates: { canonical: "/products/codewords/" },
  openGraph: {
    title: "Certifyd CodeWords — Professional Identity Verification",
    description:
      "Verify anyone, any channel, in seconds. QR codes, word codes, and number codes. One platform.",
    url: "https://www.certifyd.io/products/codewords/",
  },
};

const attackPanels = [
  { text: "Your CFO calls.", icon: "phone" },
  { text: "\"Transfer £50,000 — urgent.\"", icon: "alert" },
  { text: "But is it really them?", icon: "question" },
  { text: "Ask for their CodeWord.", icon: "shield" },
  { text: "Wrong code = hang up.", icon: "x" },
];

const comparisonRows = [
  { criteria: "Verification speed", codewords: "10 seconds", callback: "Minutes", securityQ: "30+ seconds", voiceRec: "Varies" },
  { criteria: "Forgeable?", codewords: "No", callback: "Yes", securityQ: "Yes", voiceRec: "Yes (AI)" },
  { criteria: "Training needed?", codewords: "None", callback: "Procedure docs", securityQ: "Q&A setup", voiceRec: "Enrolment" },
  { criteria: "Works on phone?", codewords: "Yes", callback: "Partially", securityQ: "Yes", voiceRec: "Yes" },
  { criteria: "60s refresh?", codewords: "Yes", callback: "No", securityQ: "No", voiceRec: "N/A" },
  { criteria: "Audit trail?", codewords: "Full", callback: "Manual", securityQ: "None", voiceRec: "Partial" },
];

/* ── Icon helpers for comparison table ── */
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-accent-success inline-block" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-500 inline-block" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
function AmberDot() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5">
      <span className="w-3 h-3 rounded-full bg-amber-500" />
    </span>
  );
}

/** Map comparison cell text to icons where appropriate */
function ComparisonCell({ value, isCodewords }: { value: string; isCodewords?: boolean }) {
  // Binary positive values
  if (value === "Yes" || value === "Full") {
    return <CheckIcon />;
  }
  // Binary negative values
  if (value === "No" || value === "None") {
    return <XIcon />;
  }
  // Amber / partial
  if (value === "Manual") {
    return <AmberDot />;
  }
  // Non-binary — keep text
  return (
    <span className={isCodewords ? "font-semibold text-certifyd-blue" : ""}>
      {value}
    </span>
  );
}

export default function CertifydCodeWordsPage() {
  return (
    <>
      {/* CSS keyframes for rotating codes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cw-rotate-words {
          0%, 30% { opacity: 1; transform: translateY(0); }
          33%, 63% { opacity: 0; transform: translateY(-8px); }
          66%, 96% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 0; transform: translateY(8px); }
        }
        @keyframes cw-rotate-words-2 {
          0%, 30% { opacity: 0; transform: translateY(8px); }
          33%, 63% { opacity: 1; transform: translateY(0); }
          66%, 96% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        @keyframes cw-rotate-words-3 {
          0%, 30% { opacity: 0; transform: translateY(-8px); }
          33%, 63% { opacity: 0; transform: translateY(8px); }
          66%, 96% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(0); }
        }
        .cw-word-1 { animation: cw-rotate-words 9s ease-in-out infinite; }
        .cw-word-2 { animation: cw-rotate-words-2 9s ease-in-out infinite; }
        .cw-word-3 { animation: cw-rotate-words-3 9s ease-in-out infinite; }
      `}} />

      {/* ── Hero — side-by-side: text left + method cards right ── */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left column — text */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6 animate-fade-in">
                Certifyd CodeWords
              </span>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] text-text-on-dark animate-fade-in">
                Verify Anyone.<br />
                Any Channel.<br />
                <span className="text-certifyd-blue">In Seconds.</span>
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-xl mt-6 animate-slide-up animation-delay-200">
                QR codes for video calls. 3-word codes for phone calls and Slack. Number codes for quick checks. One platform, three verification methods.
              </p>

              <div className="mt-8 animate-slide-up animation-delay-400">
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact/" size="lg">Book a demo</Button>
                  <Button href="/products/codewords/demo/" variant="outline" size="lg">Try the demo</Button>
                </div>
              </div>
            </div>

            {/* Right column — method cards (larger, more prominent) */}
            <div className="lg:col-span-7 mt-12 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 animate-slide-up animation-delay-300">
                {/* QR Code */}
                <div className="bg-navy-light border border-navy-border rounded-lg p-7 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-md flex items-center justify-center">
                    <svg className="w-14 h-14 text-navy" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" />
                    </svg>
                  </div>
                  <p className="font-heading text-sm font-semibold text-text-on-dark-muted uppercase tracking-wider">QR Scan</p>
                </div>

                {/* 3-Word Code with rotation */}
                <div className="bg-navy-light border border-navy-border rounded-lg p-7 text-center">
                  <div className="h-20 mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="absolute font-heading text-xl font-bold text-certifyd-blue cw-word-1">TIGER CASTLE NINE</span>
                    <span className="absolute font-heading text-xl font-bold text-certifyd-blue cw-word-2">OCEAN RIVER FIVE</span>
                    <span className="absolute font-heading text-xl font-bold text-certifyd-blue cw-word-3">DELTA STORM THREE</span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-text-on-dark-muted uppercase tracking-wider">Word Code</p>
                </div>

                {/* Number Code with rotation */}
                <div className="bg-navy-light border border-navy-border rounded-lg p-7 text-center">
                  <div className="h-20 mb-4 flex items-center justify-center relative overflow-hidden">
                    <span className="absolute font-heading text-4xl font-bold text-certifyd-blue tracking-widest cw-word-1">847 291</span>
                    <span className="absolute font-heading text-4xl font-bold text-certifyd-blue tracking-widest cw-word-2">563 018</span>
                    <span className="absolute font-heading text-4xl font-bold text-certifyd-blue tracking-widest cw-word-3">924 750</span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-text-on-dark-muted uppercase tracking-wider">Number Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── $2.7B stat — asymmetric split (60/40) ── */}
      <section className="bg-certifyd-blue">
        <div className="section-container py-16 lg:py-20">
          <ScrollReveal>
            <div className="lg:grid lg:grid-cols-5 lg:gap-8 lg:items-center">
              {/* Left — massive stat (3 cols = 60%) */}
              <div className="lg:col-span-3 mb-8 lg:mb-0">
                <p className="font-heading text-7xl lg:text-8xl font-bold text-white leading-none mb-3">
                  $2.7 BILLION
                </p>
                <p className="text-white/60 text-sm lg:text-base font-heading">
                  FBI IC3, 2024
                </p>
              </div>

              {/* Right — narrative (2 cols = 40%) */}
              <div className="lg:col-span-2">
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                  Business Email Compromise is the single most costly cybercrime category. A single fraudulent phone call or email can drain an entire account. CodeWords makes it impossible.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── "Pick your method" — differentiated cards ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Three Methods
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Pick your method.<br />
                <span className="text-certifyd-blue">Match the channel.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* QR Scan — featured card (taller, takes 5 cols) */}
            <ScrollReveal delay={0} className="lg:col-span-5">
              <div className="bg-certifyd-blue/5 border border-certifyd-blue/20 border-t-4 border-t-certifyd-blue rounded-sm p-10 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-certifyd-blue" />
                  <span className="font-heading text-[10px] font-semibold text-certifyd-blue uppercase tracking-wider">Featured</span>
                </div>
                <h3 className="font-heading text-3xl font-bold text-text-on-light mb-4">
                  QR Scan
                </h3>
                <p className="text-text-on-light-muted text-base leading-relaxed mb-8 flex-1">
                  On a video call? Show your QR code. They scan it. Both verified. The fastest way to establish trust face-to-face, whether in-person or on screen.
                </p>
                <div>
                  <p className="font-heading text-[10px] font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {["Zoom / Teams / Meet", "In-person meetings"].map((tag) => (
                      <span key={tag} className="inline-block px-2.5 py-1 bg-warm-white border border-warm-border rounded-full text-xs text-text-on-light-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 3-Word Code */}
            <ScrollReveal delay={100} className="lg:col-span-4">
              <div className="bg-accent-success/5 border border-accent-success/20 border-t-4 border-t-accent-success rounded-sm p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-text-on-light mb-4">
                  3-Word Code
                </h3>
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-6 flex-1">
                  On a phone call or Slack? Read your code. They verify it.
                </p>
                <div>
                  <p className="font-heading text-[10px] font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {["Phone calls", "Voice channels", "Messaging apps"].map((tag) => (
                      <span key={tag} className="inline-block px-2.5 py-1 bg-warm-white border border-warm-border rounded-full text-xs text-text-on-light-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Number Code */}
            <ScrollReveal delay={200} className="lg:col-span-3">
              <div className="bg-amber-50 border border-amber-200/50 border-t-4 border-t-amber-500 rounded-sm p-8 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-text-on-light mb-4">
                  Number Code
                </h3>
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-6 flex-1">
                  Need it fast? 6-digit code. 60-second refresh.
                </p>
                <div>
                  <p className="font-heading text-[10px] font-semibold text-text-on-light-muted uppercase tracking-wider mb-2">Best for</p>
                  <div className="flex flex-wrap gap-2">
                    {["Quick checks", "High-frequency verification"].map((tag) => (
                      <span key={tag} className="inline-block px-2.5 py-1 bg-warm-white border border-warm-border rounded-full text-xs text-text-on-light-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Attack scenario — color gradient progression ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  The Threat
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                It only takes<br />
                <span className="text-certifyd-blue">one phone call.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Vertical narrative panels with color gradient */}
          <div className="relative max-w-lg">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-certifyd-blue/20" aria-hidden="true" />

            {attackPanels.map((panel, i) => {
              // Color progression: 0-1 green (safe), 2 amber (suspicious), 3 blue (solution), 4 red (consequence)
              const circleStyles = [
                "bg-accent-success/15 border border-accent-success/30",   // panel 1 — green
                "bg-accent-success/15 border border-accent-success/30",   // panel 2 — green
                "bg-amber-500/15 border border-amber-500/30",             // panel 3 — amber
                "bg-certifyd-blue/15 border border-certifyd-blue/30",     // panel 4 — blue
                "bg-red-500/15 border border-red-500/30",                 // panel 5 — red
              ];
              const textStyles = [
                "text-accent-success",       // panel 1 — green
                "text-accent-success",       // panel 2 — green
                "text-amber-400",            // panel 3 — amber
                "text-certifyd-blue",        // panel 4 — blue
                "text-red-400",              // panel 5 — red
              ];
              const labelStyles = [
                "text-text-on-dark",         // panel 1 — neutral text
                "text-text-on-dark",         // panel 2 — neutral text
                "text-amber-300",            // panel 3 — amber text
                "text-certifyd-blue",        // panel 4 — blue text
                "text-red-400",              // panel 5 — red text
              ];

              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="relative flex gap-6 mb-6 last:mb-0">
                    <div className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${circleStyles[i]}`}>
                      <span className={`font-heading text-xs font-bold ${textStyles[i]}`}>
                        {i + 1}
                      </span>
                    </div>
                    <p className={`font-heading text-lg lg:text-xl font-semibold pt-2 ${labelStyles[i]}`}>
                      {panel.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison table — visual redesign ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Comparison
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                CodeWords vs.<br />
                <span className="text-certifyd-blue">everything else.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-certifyd-blue/20">
                    <th className="text-left font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider py-3 pr-4"></th>
                    <th className="text-left font-heading text-sm font-bold text-certifyd-blue uppercase tracking-wider py-3 px-4 bg-certifyd-blue/5 rounded-t-sm">CodeWords</th>
                    <th className="text-left font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Callback</th>
                    <th className="text-left font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Security Q&apos;s</th>
                    <th className="text-left font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Voice Rec.</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.criteria} className="border-b border-warm-border">
                      <td className="font-heading text-sm font-medium text-text-on-light py-3 pr-4">{row.criteria}</td>
                      <td className="text-sm py-3 px-4 bg-certifyd-blue/5">
                        <ComparisonCell value={row.codewords} isCodewords />
                      </td>
                      <td className="text-sm text-text-on-light-muted py-3 px-4">
                        <ComparisonCell value={row.callback} />
                      </td>
                      <td className="text-sm text-text-on-light-muted py-3 px-4">
                        <ComparisonCell value={row.securityQ} />
                      </td>
                      <td className="text-sm text-text-on-light-muted py-3 px-4">
                        <ComparisonCell value={row.voiceRec} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="section-dark">
        <div className="section-container py-14 lg:py-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue mb-1">60s</p>
                <p className="text-sm text-text-on-dark-muted">code refresh cycle</p>
              </div>
              <div>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue mb-1">10s</p>
                <p className="text-sm text-text-on-dark-muted">to verify any caller</p>
              </div>
              <div>
                <p className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue mb-1">0</p>
                <p className="text-sm text-text-on-dark-muted">hardware required</p>
              </div>
            </div>
          </ScrollReveal>
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
          { label: "FBI IC3: Business Email Compromise", href: "https://www.ic3.gov/PSA/2024/PSA240911", external: true },
          { label: "UK Finance: Authorised Push Payment Fraud", href: "https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications/annual-fraud-report-2024", external: true },
        ]}
      />

      <SolutionCTA
        title="The next fraud call is coming. Will your team know it's fake?"
        secondaryLabel="See all products"
        secondaryHref="/products/"
      />
    </>
  );
}

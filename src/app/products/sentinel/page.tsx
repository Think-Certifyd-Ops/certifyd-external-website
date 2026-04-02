import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd Sentinel — Compliant Meeting Recording & AI Monitoring",
  description:
    "Every meeting. Recorded. Compliant. Searchable. Regulatory compliance infrastructure for FCA-regulated firms, legal teams, and sales leaders.",
  alternates: { canonical: "/products/sentinel/" },
  openGraph: {
    title: "Certifyd Sentinel — Compliant Meeting Recording & AI Monitoring",
    description:
      "Every meeting. Recorded. Compliant. Searchable. Regulatory compliance infrastructure for regulated firms.",
    url: "https://www.certifyd.io/products/sentinel/",
  },
};

const lifecycleStages = [
  { icon: "calendar", label: "Calendar sync", detail: "Connects to your calendar" },
  { icon: "bot", label: "Bot joins", detail: "Automatically joins every meeting" },
  { icon: "record", label: "Records + transcribes", detail: "Full audio, video, and text" },
  { icon: "scan", label: "AI scans", detail: "Compliance keyword monitoring" },
  { icon: "archive", label: "Archives immutably", detail: "WORM storage, tamper-proof" },
  { icon: "search", label: "Searchable forever", detail: "Find anything in seconds" },
];

const transcriptLines = [
  {
    speaker: "Advisor",
    text: "I guarantee this return will be at least 8% annually.",
    flag: "red",
    tooltip: "Compliance violation: guaranteed returns language",
  },
  {
    speaker: "Client",
    text: "That sounds great. So there's no risk?",
    flag: null,
    tooltip: null,
  },
  {
    speaker: "Advisor",
    text: "Well, past performance indicates you can expect similar results going forward.",
    flag: "amber",
    tooltip: "Warning: past performance used as future indicator",
  },
  {
    speaker: "Client",
    text: "OK, let's go ahead with it.",
    flag: null,
    tooltip: null,
  },
  {
    speaker: "Advisor",
    text: "Before we proceed, let me read you the risk warning as required.",
    flag: "green",
    tooltip: "Compliant: risk warning delivered",
  },
];

const sentinelFlags = [
  {
    timestamp: "14:32:08",
    severity: "HIGH",
    severityColor: "bg-red-500",
    severityText: "text-red-400",
    description: "Guaranteed returns language detected",
    action: "Review required",
  },
  {
    timestamp: "14:35:22",
    severity: "MEDIUM",
    severityColor: "bg-accent-warning",
    severityText: "text-accent-warning",
    description: "Unregistered participant joined",
    action: "Verify identity",
  },
  {
    timestamp: "14:41:15",
    severity: "LOW",
    severityColor: "bg-certifyd-blue",
    severityText: "text-certifyd-blue",
    description: "Risk disclosure completed",
    action: "No action needed",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  ),
  bot: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    </svg>
  ),
  record: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  scan: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
    </svg>
  ),
  archive: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
};

export default function CertifydSentinelPage() {
  return (
    <>
      {/* ── Dark cinematic hero ── */}
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(0,89,255,0.12), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />

        <div className="section-container relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6 animate-fade-in">
                Certifyd Sentinel
              </span>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] text-text-on-dark animate-fade-in">
                Every Meeting.<br />
                Recorded.<br />
                <span className="text-certifyd-blue">Compliant.</span>
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-lg mt-6 animate-slide-up animation-delay-200">
                Compliance-led meeting recording and AI monitoring. Automatic capture, immutable archive, real-time compliance flagging. Regulatory infrastructure, not just recording.
              </p>
              <div className="mt-8 animate-slide-up animation-delay-300">
                <Button href="#waitlist" size="lg">Join the waitlist</Button>
              </div>
            </div>

            {/* Inline dashboard mockup */}
            <div className="hidden lg:block lg:col-span-6 lg:mt-4 animate-slide-up animation-delay-300">
              <div className="bg-navy-light border border-navy-border rounded-lg overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">Sentinel Dashboard</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-heading font-semibold text-accent-success bg-accent-success/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-success sentinel-pulse" />
                      Monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-accent-warning font-medium bg-accent-warning/10 px-2 py-0.5 rounded-full">
                      3 flagged
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-accent-success font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-success sentinel-pulse" />
                      Live
                    </span>
                  </div>
                </div>
                {/* Search bar */}
                <div className="px-5 pt-4 pb-2">
                  <div className="bg-navy-lighter rounded-md px-3 py-2 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-text-on-dark-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <span className="text-[11px] text-text-on-dark-muted/50">Search all recordings...</span>
                  </div>
                </div>
                {/* Meeting list */}
                <div className="px-5 py-3 space-y-2">
                  {[
                    { name: "Q1 Portfolio Review — J. Henderson", time: "Today 14:30", status: "green" },
                    { name: "New Client Onboarding — S. Patel", time: "Today 11:00", status: "amber" },
                    { name: "Investment Strategy — M. Roberts", time: "Yesterday 15:00", status: "red" },
                    { name: "Compliance Check-in — L. Thompson", time: "Yesterday 10:30", status: "green" },
                    { name: "Annual Review — K. Williams", time: "Mon 09:00", status: "green" },
                  ].map((meeting) => (
                    <div key={meeting.name} className="flex items-center justify-between py-2 border-b border-navy-border/50 last:border-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`w-2 h-2 rounded-full shrink-0 ${meeting.status === "green" ? "bg-accent-success" : meeting.status === "amber" ? "bg-accent-warning" : "bg-red-500"}`} />
                        <span className="text-[11px] text-text-on-dark truncate">{meeting.name}</span>
                      </div>
                      <span className="text-[10px] text-text-on-dark-muted shrink-0 ml-3">{meeting.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulation callout bar ── */}
      <section className="bg-accent-warning/10 border-y border-accent-warning/20">
        <div className="section-container py-10 lg:py-12">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm lg:text-base text-text-on-light leading-relaxed">
                <span className="font-heading font-semibold">FCA SYSC 10A.1</span> requires recording of relevant conversations.{" "}
                <span className="font-heading font-semibold">MiFID II</span> mandates 5&ndash;7 year retention.{" "}
                Most firms still rely on someone remembering to click &lsquo;record&rsquo;.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Meeting lifecycle (dark) ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Meeting Lifecycle
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                From calendar invite<br />
                <span className="text-certifyd-blue">to permanent record.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Horizontal connected stages */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 relative">
            {lifecycleStages.map((stage, i) => (
              <ScrollReveal key={stage.label} delay={i * 80}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-certifyd-blue/10 border border-certifyd-blue/20 flex items-center justify-center mx-auto mb-3 text-certifyd-blue">
                    {iconMap[stage.icon]}
                  </div>
                  <h3 className="font-heading text-xs font-semibold text-text-on-dark uppercase tracking-wider mb-1">
                    {stage.label}
                  </h3>
                  <p className="text-[11px] text-text-on-dark-muted leading-snug">
                    {stage.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transcript mockup ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  AI Monitoring In Action
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                Every word. Monitored.<br />
                <span className="text-certifyd-blue">Every risk. Flagged.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-navy-light border border-navy-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
                <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
                  Live Transcript — Q1 Portfolio Review
                </span>
                <span className="text-[10px] text-text-on-dark-muted">14:32:08</span>
              </div>

              <div className="divide-y divide-navy-border/50">
                {transcriptLines.map((line, i) => {
                  const isLast = i === transcriptLines.length - 1;
                  return (
                    <div key={i} className="px-5 py-3 flex items-start gap-4">
                      <div className="shrink-0 w-16">
                        <span className="font-heading text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider">
                          {line.speaker}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {isLast ? (
                          <p className={`text-sm leading-relaxed ${line.flag === "red" ? "text-red-400" : line.flag === "amber" ? "text-accent-warning" : line.flag === "green" ? "text-accent-success" : "text-text-on-dark-muted"} sentinel-typing`}>
                            &ldquo;{line.text}&rdquo;
                          </p>
                        ) : (
                          <p className={`text-sm leading-relaxed ${line.flag === "red" ? "text-red-400" : line.flag === "amber" ? "text-accent-warning" : line.flag === "green" ? "text-accent-success" : "text-text-on-dark-muted"}`}>
                            &ldquo;{line.text}&rdquo;
                          </p>
                        )}
                      </div>
                      <div className="shrink-0">
                        {line.flag && (
                          <div className="group relative">
                            <span className={`inline-block w-2.5 h-2.5 rounded-full mt-1.5 ${line.flag === "red" ? "bg-red-500" : line.flag === "amber" ? "bg-accent-warning" : "bg-accent-success"}`} />
                            <span className="absolute right-0 top-full mt-1 whitespace-nowrap bg-navy-lighter border border-navy-border px-2 py-1 rounded text-[10px] text-text-on-dark-muted opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              {line.tooltip}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Feature bento (dark) ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Key Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                Regulatory infrastructure.<br />
                <span className="text-certifyd-blue">Not just meeting recording.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Asymmetric bento: 1 large + 2 medium + 3 small */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-navy-light border border-navy-border border-l-4 border-l-accent-warning rounded-sm p-8 lg:p-10 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  <span className="font-heading text-xs font-semibold text-certifyd-blue uppercase tracking-wider">Core</span>
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-text-on-dark mb-3">
                  Immutable Recording Archive
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed max-w-lg">
                  Every recording is stored with WORM (Write Once Read Many) immutability and cryptographic integrity checks. Timestamped. Tamper-proof. Chain-of-custody audit trail. Ready for regulatory inspection at any time.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-navy-light border border-navy-border border-l-4 border-l-accent-warning rounded-sm p-8 hover:shadow-md transition-all duration-300 h-full">
                <h3 className="font-heading text-lg font-semibold text-text-on-dark mb-3">
                  AI Compliance Monitoring
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed">
                  Define your compliance keywords, banned phrases, and risk indicators. Sentinel monitors transcripts in real time and flags violations automatically.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <ScrollReveal delay={160} className="lg:col-span-2">
              <div className="bg-navy-light border border-navy-border border-l-4 border-l-accent-success rounded-sm p-8 hover:shadow-md transition-all duration-300 h-full">
                <h3 className="font-heading text-lg font-semibold text-text-on-dark mb-3">
                  Central Searchable Dashboard
                </h3>
                <p className="text-text-on-dark-muted text-sm leading-relaxed">
                  Search across every meeting your organisation has ever had. Filter by date, participant, keyword, or compliance flag. Find anything in seconds.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Auto-Join All Platforms", desc: "Zoom, Teams, Google Meet. Sentinel connects to your calendar and joins every meeting automatically.", borderColor: "border-l-accent-success" },
              { title: "CRM & API Integration", desc: "Push meeting data, transcripts, and compliance flags to your CRM or data warehouse via REST API.", borderColor: "border-l-accent-success" },
              { title: "Deepfake Detection", desc: "AI-powered analysis on video feeds to detect synthetic media. A security layer running silently on every call.", borderColor: "border-l-certifyd-blue" },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={240 + i * 80}>
                <div className={`bg-navy-light border border-navy-border border-l-4 ${f.borderColor} rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full`}>
                  <h3 className="font-heading text-base font-semibold text-text-on-dark mb-2">
                    {f.title}
                  </h3>
                  <p className="text-text-on-dark-muted text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Sentinel catches ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 lg:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Real-Time Alerts
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-xl leading-tight">
                What Sentinel catches.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              {sentinelFlags.map((flag, i) => (
                <ScrollReveal key={flag.timestamp} delay={150 + i * 100}>
                  <div className="bg-navy-light border border-navy-border rounded-md px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <span className="font-heading text-xs text-text-on-dark-muted tracking-wider shrink-0 tabular-nums">
                      {flag.timestamp}
                    </span>
                    <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider shrink-0 w-fit ${flag.severityColor} ${flag.severity === "HIGH" ? "text-white" : flag.severity === "MEDIUM" ? "text-navy" : "text-white"}`}>
                      {flag.severity}
                    </span>
                    <span className="text-sm text-text-on-dark flex-1">
                      {flag.description}
                    </span>
                    <span className={`font-heading text-xs font-medium shrink-0 ${flag.severityText}`}>
                      {flag.action}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Waitlist section ── */}
      <section id="waitlist" className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark mb-4">
                Sentinel launches<br />
                <span className="text-certifyd-blue">Q3 2026.</span>
              </h2>
              <p className="text-text-on-dark-muted text-sm mb-8 max-w-md">
                Join the waitlist for early access. Be the first to know when Sentinel is ready for your organisation.
              </p>
              <WaitlistForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "Certifyd Screen", href: "/products/verify/" },
          { label: "Certifyd CodeWords", href: "/products/codewords/" },
          { label: "Certifyd Portal", href: "/products/portal/" },
        ]}
        articles={[
          { label: "The Arup Deepfake Attack: Lessons for Every Business", href: "/blog/arup-deepfake-attack/" },
          { label: "Platform-Agnostic Verification", href: "/blog/platform-agnostic-verification/" },
        ]}
        resources={[
          { label: "FCA Recording Requirements", href: "https://www.fca.org.uk/firms/recording-telephone-conversations-electronic-communications", external: true },
        ]}
      />

      <SolutionCTA
        title="Don't wait for the regulator to ask for the tape."
        secondaryLabel="See all products"
        secondaryHref="/products/"
      />
    </>
  );
}

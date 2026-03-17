import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { GraphLayersGraphic } from "@/components/graphics/GraphLayersGraphic";
import { GraphNodesGraphic } from "@/components/graphics/GraphNodesGraphic";
import { AnalyticsEngineGraphic } from "@/components/graphics/AnalyticsEngineGraphic";
import { APIResponseGraphic } from "@/components/graphics/APIResponseGraphic";

export const metadata: Metadata = {
  title: "Identity Intelligence Infrastructure (3I) — Certifyd",
  description:
    "Graph-powered identity intelligence that sees what individual checks miss. Continuous trust scoring, anomaly detection, and relationship analysis — built on GPU-accelerated graph infrastructure.",
  alternates: { canonical: "/3i/" },
  openGraph: {
    title: "Identity Intelligence Infrastructure (3I) — Certifyd",
    description:
      "Graph-powered identity intelligence that sees what individual checks miss. Three layers. One intelligence engine.",
    url: "https://www.certifyd.io/3i/",
  },
};

const layers = [
  {
    number: "01",
    badge: "Foundation",
    title: "Graph Intelligence",
    hook: "Identity as a network, not a record.",
    description:
      "Traditional systems store identity as isolated attributes — a name, a document, a check. Our graph models identity as a living network of interconnected entities and events. Each interaction adds structure. Each connection reveals context that flat databases can't see.",
    capabilities: [
      "Entity resolution across devices, sessions, and contact points",
      "Relationship mapping between people, documents, and organisations",
      "Cross-identity pattern detection (shared infrastructure, reused data)",
      "Temporal graph analysis — how identity behaviour evolves over time",
    ],
  },
  {
    number: "02",
    badge: "Intelligence",
    title: "AI Analytics & Inference",
    hook: "From relationships to risk signals.",
    description:
      "The AI layer transforms graph structure into actionable intelligence. Rather than evaluating signals in isolation, it considers combinations — behavioural consistency, device usage, network proximity, and temporal change. GPU-accelerated graph neural networks enable real-time inference across millions of identity relationships.",
    capabilities: [
      "Multi-signal identity confidence scoring (biometric + behavioural + device + network)",
      "Anomaly detection against learned behavioural baselines",
      "Synthetic identity and coordinated fraud ring detection",
      "Link prediction to surface hidden relationships before they're exploited",
    ],
  },
  {
    number: "03",
    badge: "Surface",
    title: "Identity Intelligence Infrastructure",
    hook: "Complexity in. Clear signals out.",
    description:
      "External systems don't need to understand graphs or models. They need clear signals to make decisions. The 3I layer translates deep intelligence into API-driven outputs — trust scores, risk flags, continuity assessments, and entity linkage insights delivered in milliseconds.",
    capabilities: [
      "Real-time trust score queries via REST and GraphQL",
      "Webhook event streams for identity state changes",
      "Contextual risk indicators — not binary pass/fail, but nuanced signals",
      "Audit trail export for compliance and regulatory reporting",
    ],
  },
];

const problems = [
  {
    stat: "Single checkpoint",
    description: "Traditional verification happens once. After that, identity is assumed — never re-confirmed across sessions, devices, or contexts.",
  },
  {
    stat: "Isolated signals",
    description: "Document checks, liveness scans, and background screens each work alone. No system connects the dots between them.",
  },
  {
    stat: "Invisible networks",
    description: "Two accounts share an address. A passport appears under two names. A device links five identities. Flat databases can't see these patterns.",
  },
  {
    stat: "Static trust",
    description: "Trust is granted once and forgotten. There's no mechanism to detect when identity has been transferred, spoofed, or gradually compromised.",
  },
];

const capabilities = [
  {
    title: "Continuous Identity Assurance",
    description: "Trust isn't a one-time gate. It's reinforced or degraded with every interaction, building a living picture of identity over time.",
  },
  {
    title: "Coordinated Fraud Detection",
    description: "Spot fraud rings, shared accounts, and synthetic identities by analysing the network — not just individual claims.",
  },
  {
    title: "Contextual Risk Scoring",
    description: "A login that looks valid in isolation gets flagged when viewed in context. A consistent user gets fast-tracked. Decisions informed by behaviour, not just attributes.",
  },
  {
    title: "Cross-Session Continuity",
    description: "Detect when the same human is present across sessions, devices, and contexts — or when they're not.",
  },
  {
    title: "Behavioural Baselines",
    description: "Learn how a real person behaves, moves, and interacts. Detect subtle breaks in continuity that traditional systems miss.",
  },
  {
    title: "Privacy-First Architecture",
    description: "On-device biometric processing. Hash-based identity matching. Intelligence without unnecessary data exposure.",
  },
];

const stats = [
  { value: "<100ms", label: "Real-time trust score inference" },
  { value: "1000x", label: "Parallel graph traversals vs CPU" },
  { value: "Multi-signal", label: "Biometric + behavioural + device + network" },
];

export default function ThreeIPage() {
  return (
    <>
      {/* Hero */}
      <SolutionHero
        badge="Identity Intelligence Infrastructure"
        title="Three layers. One intelligence engine."
        subtitle="Beyond verification. Continuous identity intelligence that learns, connects, and protects — powered by graph infrastructure and GPU-accelerated AI."
      >
        <GraphLayersGraphic />
      </SolutionHero>

      {/* The Problem — What Verification Misses */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  The Problem
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-2xl leading-tight">
                Verification checks a moment.<br />
                <span className="text-certifyd-blue">Intelligence sees the whole picture.</span>
              </h2>
              <p className="text-text-on-light-muted mt-6 text-base max-w-2xl leading-relaxed">
                Most identity systems perform a biometric check or document scan tied to a single session. Once that check is complete, there is no ability to understand whether subsequent interactions truly belong to the same individual — or whether identity has been transferred, spoofed, or gradually compromised.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.stat} delay={index * 80}>
                <div className="border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full border border-accent-warning/40 flex items-center justify-center">
                      <span className="font-heading text-xs font-bold text-accent-warning">{index + 1}</span>
                    </span>
                    <h3 className="font-heading text-base font-semibold text-text-on-light">
                      {problem.stat}
                    </h3>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy border-y border-navy-border">
        <div className="section-container py-12 lg:py-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-certifyd-blue">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-on-dark-muted mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Layers Deep Dive */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-20 lg:mb-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Architecture
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Three layers.<br />
                <span className="text-certifyd-blue">Each independently valuable.</span>
              </h2>
              <p className="text-text-on-dark-muted mt-6 text-base max-w-2xl leading-relaxed">
                The platform is structured into three distinct but complementary layers. While they operate together as a unified system, each layer is independently valuable and can be productised in its own right.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-24 lg:space-y-32">
            {/* Layer 1 — Graph Foundation */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <ScrollReveal direction="left" className="lg:w-1/2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
                    Layer {layers[0].number} — {layers[0].badge}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark mb-2">
                    {layers[0].title}
                  </h3>
                  <p className="font-heading text-base text-certifyd-blue mb-4">{layers[0].hook}</p>
                  <p className="text-text-on-dark-muted text-[15px] leading-relaxed mb-6">
                    {layers[0].description}
                  </p>
                  <ul className="space-y-3">
                    {layers[0].capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-certifyd-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-text-on-dark/80 text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                <GraphNodesGraphic />
              </ScrollReveal>
            </div>

            {/* Layer 2 — AI Analytics (reversed layout) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <ScrollReveal direction="right" className="lg:w-1/2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
                    Layer {layers[1].number} — {layers[1].badge}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark mb-2">
                    {layers[1].title}
                  </h3>
                  <p className="font-heading text-base text-certifyd-blue mb-4">{layers[1].hook}</p>
                  <p className="text-text-on-dark-muted text-[15px] leading-relaxed mb-6">
                    {layers[1].description}
                  </p>
                  <ul className="space-y-3">
                    {layers[1].capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-certifyd-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-text-on-dark/80 text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                <AnalyticsEngineGraphic />
              </ScrollReveal>
            </div>

            {/* Layer 3 — 3I API */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <ScrollReveal direction="left" className="lg:w-1/2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-4">
                    Layer {layers[2].number} — {layers[2].badge}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark mb-2">
                    {layers[2].title}
                  </h3>
                  <p className="font-heading text-base text-certifyd-blue mb-4">{layers[2].hook}</p>
                  <p className="text-text-on-dark-muted text-[15px] leading-relaxed mb-6">
                    {layers[2].description}
                  </p>
                  <ul className="space-y-3">
                    {layers[2].capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-certifyd-blue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-text-on-dark/80 text-sm">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="lg:w-1/2 w-full max-w-md lg:max-w-none">
                <APIResponseGraphic />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What This Enables */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                What this<br />
                <span className="text-certifyd-blue">makes possible.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={cap.title} delay={index * 60}>
                <div className="bg-white border border-warm-border rounded-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <h3 className="font-heading text-base font-semibold text-text-on-light mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why GPU-Native */}
      <section className="bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,89,255,0.06) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10 py-20 lg:py-28">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Infrastructure
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Built for GPU.<br />
                <span className="text-certifyd-blue">Not bolted on.</span>
              </h2>
              <p className="text-text-on-dark-muted mt-6 text-base max-w-2xl leading-relaxed">
                Identity graph traversal and neural network inference are inherently parallel workloads. GPU acceleration isn't a marketing label — it's an architectural requirement. Traversing millions of identity relationships in real-time, running graph neural networks for anomaly detection, and computing trust scores across dense entity networks demands the kind of parallel compute that only GPU infrastructure provides.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Graph Traversal",
                  description: "Parallel exploration of identity relationships across millions of nodes. What takes CPU-bound systems seconds happens in milliseconds.",
                },
                {
                  title: "Neural Network Inference",
                  description: "Graph neural networks evaluate identity signals in context — behavioural patterns, device fingerprints, and network structure — simultaneously.",
                },
                {
                  title: "Real-Time Scoring",
                  description: "Trust scores computed on every interaction, not batch-processed overnight. Identity intelligence that's current, not historical.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-navy-light border border-navy-border rounded-sm p-8">
                  <h3 className="font-heading text-base font-semibold text-text-on-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-on-dark-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Data Flow — Technical Architecture */}
      <section className="bg-navy border-y border-navy-border">
        <div className="section-container py-16 lg:py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark">
                Data Flow
              </h2>
              <p className="text-text-on-dark-muted mt-2 text-sm">
                From raw identity signals to actionable intelligence
              </p>
            </div>

            {/* Flow diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
              {[
                { label: "Data Ingestion", sub: "Biometric, behavioural, device" },
                { label: "Graph Engine", sub: "GPU-accelerated" },
                { label: "AI / ML Layer", sub: "GNN inference" },
                { label: "3I API", sub: "REST + GraphQL" },
                { label: "Downstream", sub: "Your systems" },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="bg-navy-light border border-navy-border rounded-lg px-6 py-4 text-center min-w-[140px]">
                    <div className="font-heading text-xs font-semibold text-text-on-dark whitespace-nowrap">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-text-on-dark-muted mt-1 whitespace-nowrap">
                      {step.sub}
                    </div>
                  </div>
                  {index < 4 && (
                    <svg className="w-6 h-6 text-certifyd-blue/50 shrink-0 hidden lg:block mx-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                  {index < 4 && (
                    <svg className="w-5 h-5 text-certifyd-blue/50 shrink-0 lg:hidden rotate-90 my-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="section-light">
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light mb-4">
                From verification to intelligence.
              </h2>
              <p className="text-text-on-light-muted mb-8 text-base leading-relaxed">
                Certifyd&apos;s 3I platform is currently in development as part of NVIDIA Inception. We&apos;re working with early partners to validate the architecture across workforce identity, fraud detection, and compliance automation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="lg" href="/contact/">
                  Talk to us
                </Button>
                <Button variant="ghost" size="lg" href="/solutions/person/" className="text-text-on-light-muted hover:text-certifyd-blue">
                  See current product
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SolutionCTA title="See identity intelligence in action" />
    </>
  );
}

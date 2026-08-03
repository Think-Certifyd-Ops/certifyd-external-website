import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Certifyd Agent Watch | AI Tool and OAuth Access Review",
  description:
    "See which AI tools and third-party apps your team connected to Google Workspace, what each grant can do and which access needs review.",
  alternates: { canonical: "/products/agent-watch/" },
  openGraph: {
    title: "Certifyd Agent Watch | AI Tool and OAuth Access Review",
    description:
      "Turn third-party access metadata into an AI tool register and reviewable access map.",
    url: "https://www.certifyd.io/products/agent-watch/",
  },
};

const outputs = [
  {
    title: "Connected-tool inventory",
    text: "See the AI assistants, automation tools and other third-party apps connected across active users.",
  },
  {
    title: "Scope and exposure map",
    text: "Translate OAuth scopes into clear capabilities such as reading data, sending, writing or holding admin access.",
  },
  {
    title: "Review and revoke",
    text: "Record a review decision and remove a Google Workspace grant from the same workflow when action is needed.",
  },
  {
    title: "Exportable evidence",
    text: "Create a register and audit trail for internal policy, client due diligence, insurance or regulator questions.",
  },
];

export default function AgentWatchPage() {
  return (
    <>
      <section className="relative bg-navy bg-grid-pattern pt-32 pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 45%, rgba(0,89,255,0.14), transparent 58%), radial-gradient(ellipse at 78% 70%, rgba(0,89,255,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
                Certifyd Agent Watch
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-none text-text-on-dark max-w-3xl">
                See what your team has connected to Google Workspace.
              </h1>
              <p className="text-lg text-text-on-dark-muted max-w-2xl mt-6 leading-relaxed">
                Find the AI tools, automation platforms and other third-party grants already operating across your users. Review what each app can do and keep an evidence trail of the decision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="https://certifyd-agent.netlify.app/#demo" size="lg">
                  See the sample access map
                </Button>
                <Button href="https://certifyd-agent.netlify.app/#access" variant="outline" size="lg">
                  Request a guided scan
                </Button>
              </div>
              <p className="mt-5 text-xs text-text-on-dark-muted max-w-xl">
                Current design-partner scans support Google Workspace. Microsoft 365 support is not yet available. Agent Watch reads grant metadata, never message or document content.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-navy-light border border-navy-border rounded-sm p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-navy-border pb-4">
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">Access review</p>
                    <p className="text-xs text-text-on-dark-muted mt-1">Sample Google Workspace</p>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-heading rounded-full bg-accent-warning/15 text-accent-warning">
                    3 need review
                  </span>
                </div>
                <div className="space-y-3 pt-5">
                  {[
                    ["ChatGPT", "Drive read", "Review"],
                    ["Meeting assistant", "Calendar + Meet", "Approved"],
                    ["Automation platform", "Mail read + send", "Review"],
                    ["Former user grant", "Broad Drive", "Remove"],
                  ].map(([app, scope, status]) => (
                    <div key={app} className="grid grid-cols-[1fr_auto] gap-3 border border-navy-border rounded-sm p-3">
                      <div>
                        <p className="font-sans text-sm font-medium text-white">{app}</p>
                        <p className="text-xs text-text-on-dark-muted mt-1">{scope}</p>
                      </div>
                      <span className="font-heading text-[10px] text-certifyd-blue-light self-center">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                The evidence
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-text-on-light mt-4">
                Move from unknown access to a reviewable register.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {outputs.map((output, index) => (
              <ScrollReveal key={output.title} delay={index * 70}>
                <div className="h-full border border-warm-border bg-white rounded-sm p-7">
                  <h3 className="font-sans text-lg font-semibold text-text-on-light">{output.title}</h3>
                  <p className="text-sm text-text-on-light-muted leading-relaxed mt-3">{output.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue-light">
                Trust boundary
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold tracking-[-0.03em] text-text-on-dark mt-4">
                Metadata only. Never content.
              </h2>
              <p className="text-text-on-dark-muted leading-relaxed mt-5">
                Agent Watch uses the access records already available to a Google Workspace administrator. It does not read emails, files, prompts or meeting content.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={90}>
            <div className="bg-navy-light border border-navy-border rounded-sm p-7">
              <h3 className="font-sans text-lg font-semibold text-white">Current design-partner scope</h3>
              <ul className="mt-5 space-y-3 text-sm text-text-on-dark-muted">
                <li>Google Workspace grant inventory and capability mapping</li>
                <li>Sample-data walkthrough before any administrator connection</li>
                <li>Guided access review with exportable evidence</li>
                <li>Microsoft 365 discovery interview, not a working connector</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SolutionCTA
        title="Run one guided access review and see what is already connected."
        href="https://certifyd-agent.netlify.app/#access"
        primaryLabel="Request a guided scan"
        secondaryLabel="See the sample map"
        secondaryHref="https://certifyd-agent.netlify.app/#demo"
      />
    </>
  );
}


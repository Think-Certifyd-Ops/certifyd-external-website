import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Right-to-Work Audit Readiness Guide — PDF Preview",
  robots: "noindex",
};

export default function RightToWorkGuide() {
  return (
    <div className="print-document bg-white min-h-screen">
      {/* Cover / Header */}
      <div className="bg-navy text-text-on-dark px-12 py-16 print:px-8 print:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-certifyd-blue rounded-sm flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">C</span>
            </div>
            <span className="font-heading text-sm tracking-wider text-text-on-dark-muted uppercase">
              Certifyd
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 print:text-4xl">
            Right-to-Work<br />Audit Readiness Guide
          </h1>
          <p className="text-xl text-text-on-dark-muted font-body print:text-lg">
            A Practical Guide for UK Employers
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="px-4 py-2 bg-certifyd-blue/15 border border-certifyd-blue/30 rounded-sm">
              <span className="font-heading text-sm text-certifyd-blue-light font-medium">
                5-Part Guide
              </span>
            </div>
            <span className="text-sm text-text-on-dark-muted">
              certifyd.io
            </span>
          </div>
        </div>
      </div>

      {/* Why This Matters */}
      <div className="max-w-3xl mx-auto px-12 py-12 print:px-8 print:py-8">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6">
          Why This Matters Now
        </h2>
        <p className="text-text-on-light mb-4 leading-relaxed">
          Every UK employer has a legal duty to prevent illegal working. With the{" "}
          <strong>Fair Work Agency</strong> launching in April 2026, enforcement is about
          to get significantly tougher.
        </p>

        <div className="bg-warm-white border border-warm-border rounded-sm p-6 my-6 print:p-5">
          <h4 className="font-heading text-sm font-bold text-navy mb-3 uppercase tracking-wide">
            What most employers don&apos;t realise
          </h4>
          <ul className="space-y-2">
            {[
              "The Fair Work Agency can conduct unannounced visits to any business",
              "Penalties apply even if you didn't know the employee lacked the right to work",
              "Your only defence is proving you conducted the correct checks — a statutory excuse",
              "Without records, you have no defence. Period.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-text-on-light">
                <span className="text-accent-warning mt-0.5">&#x26A0;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Part 1: Three-Step Check */}
      <div className="max-w-3xl mx-auto px-12 pb-12 print:px-8 print:pb-8">
        <PartHeader number={1} title="The Three-Step Right-to-Work Check" />
        <p className="text-text-on-light-muted text-sm mb-6">
          Every check follows the same process. Get this right and you have a statutory excuse.
        </p>

        <div className="space-y-6">
          <StepCard
            step="Obtain"
            color="blue"
            items={[
              "Ask the employee to provide original documents from the acceptable documents list",
              "Never accept photocopies, screenshots, or scans as the primary check",
              "For BRP or visa holders: use the Home Office online service (share code)",
            ]}
          />
          <StepCard
            step="Check"
            color="blue"
            items={[
              "Confirm documents are genuine and belong to the person presenting them",
              "Check photos match the individual, dates of birth are consistent",
              "Verify expiry dates — expired documents are not valid",
              "Check any work restrictions (hours, types of work)",
            ]}
          />
          <StepCard
            step="Copy & Record"
            color="blue"
            items={[
              "Make a clear copy of every document checked",
              "Record the date the check was performed (this is critical)",
              "Store securely for duration of employment + 2 years",
              "For online checks: save the profile page showing right to work",
            ]}
          />
        </div>
      </div>

      {/* Part 2: Common Mistakes */}
      <div className="max-w-3xl mx-auto px-12 pb-12 print:px-8 print:pb-8 print:break-before-page">
        <PartHeader number={2} title="Common Mistakes That Cost Employers" />

        <div className="border border-warm-border rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy text-text-on-dark">
                <th className="text-left font-heading font-semibold p-3 print:p-2">Mistake</th>
                <th className="text-left font-heading font-semibold p-3 print:p-2">Risk</th>
                <th className="text-left font-heading font-semibold p-3 print:p-2">How to Avoid</th>
              </tr>
            </thead>
            <tbody className="text-text-on-light">
              {[
                ["Accepting \"yes\" at interview", "No statutory excuse", "Always verify with documents before Day 1"],
                ["Not checking visa conditions", "Employee may be restricted", "Read the full visa, not just expiry"],
                ["Missing follow-up checks", "Statutory excuse expires", "Diary expiry dates, check 4 weeks before"],
                ["Inconsistent checking", "Discrimination claim", "Same process for every hire, documented"],
                ["Expired BRPs", "Invalid document", "Reject expired BRPs, request share code"],
                ["No records", "Zero defence in audit", "If you can't prove you checked, you didn't"],
              ].map(([mistake, risk, fix], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                  <td className="p-3 font-medium print:p-2">{mistake}</td>
                  <td className="p-3 text-accent-warning print:p-2">{risk}</td>
                  <td className="p-3 text-text-on-light-muted print:p-2">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part 3: The Vagueness Problem */}
      <div className="max-w-3xl mx-auto px-12 pb-12 print:px-8 print:pb-8">
        <PartHeader number={3} title="The Vagueness Problem" />
        <p className="text-text-on-light mb-4 text-sm leading-relaxed">
          The biggest hidden risk in UK hiring: candidates who give technically true but
          misleading answers about their right to work.
        </p>

        <div className="bg-navy rounded-sm p-6 my-6 print:p-5">
          <p className="text-text-on-dark-muted text-sm mb-3 italic">Common scenario:</p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="font-heading text-xs text-certifyd-blue font-bold min-w-[80px]">Interviewer:</span>
              <span className="text-text-on-dark text-sm">&quot;Do you have the right to work in the UK?&quot;</span>
            </div>
            <div className="flex gap-3">
              <span className="font-heading text-xs text-accent-success font-bold min-w-[80px]">Candidate:</span>
              <span className="text-text-on-dark text-sm">&quot;Yes.&quot;</span>
            </div>
          </div>
          <p className="text-text-on-dark-muted text-sm mt-4">
            The candidate has a graduate visa with 18 months remaining. They technically have the
            right to work — today. But they&apos;ll need sponsorship costing £15,000-£20,000 before it expires.
          </p>
        </div>

        <h4 className="font-heading text-base font-semibold text-navy mb-3">The solution: pre-screen at application stage</h4>
        <p className="text-text-on-light-muted text-sm mb-4">
          Not names or nationalities — just visa status categories. This isn&apos;t discriminatory —
          right-to-work status is a legitimate employment requirement.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { status: "Full unrestricted rights", color: "bg-accent-success" },
            { status: "Time-limited (months remaining)", color: "bg-certifyd-blue" },
            { status: "Requires sponsorship", color: "bg-accent-warning" },
            { status: "Needs further verification", color: "bg-text-on-light-muted" },
          ].map((item) => (
            <div key={item.status} className="flex items-center gap-3 p-3 bg-warm-white rounded-sm border border-warm-border">
              <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
              <span className="text-sm text-text-on-light">{item.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Part 4: Audit Readiness Scorecard */}
      <div className="max-w-3xl mx-auto px-12 pb-12 print:px-8 print:pb-8 print:break-before-page">
        <PartHeader number={4} title="Your Audit Readiness Scorecard" />
        <p className="text-text-on-light-muted text-sm mb-6">Rate your business honestly:</p>

        <div className="space-y-3">
          {[
            "Do you check right-to-work for every new hire?",
            "Do you check before Day 1 (not after)?",
            "Do you have copies of documents for all current employees?",
            "Do you record the date of every check?",
            "Do you have a system for visa expiry tracking?",
            "Are your records accessible within 24 hours?",
            "Do all hiring managers know the process?",
            "Is your process the same regardless of nationality?",
            "Do you conduct follow-up checks for time-limited visas?",
            "Could you produce a compliance report right now?",
          ].map((question, i) => (
            <div key={i} className="flex items-center gap-4 py-2 border-b border-warm-gray">
              <div className="w-6 h-6 border-2 border-warm-border rounded-sm flex-shrink-0" />
              <span className="text-sm text-text-on-light flex-1">{question}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-accent-success/10 border border-accent-success/20 rounded-sm p-4 text-center">
            <div className="font-heading text-lg font-bold text-accent-success">8-10</div>
            <div className="text-xs text-text-on-light-muted mt-1">Well prepared</div>
          </div>
          <div className="bg-certifyd-blue/10 border border-certifyd-blue/20 rounded-sm p-4 text-center">
            <div className="font-heading text-lg font-bold text-certifyd-blue">5-7</div>
            <div className="text-xs text-text-on-light-muted mt-1">Gaps to address</div>
          </div>
          <div className="bg-accent-warning/10 border border-accent-warning/20 rounded-sm p-4 text-center">
            <div className="font-heading text-lg font-bold text-accent-warning">Under 5</div>
            <div className="text-xs text-text-on-light-muted mt-1">Act now</div>
          </div>
        </div>
      </div>

      {/* Part 5: Building a Compliant System */}
      <div className="max-w-3xl mx-auto px-12 pb-8 print:px-8">
        <PartHeader number={5} title="Building a Compliant System" />

        <div className="space-y-4">
          {[
            {
              size: "1-50 employees",
              items: [
                "Centralise records in one secure location",
                "Create a simple spreadsheet: employee, check date, document type, expiry",
                "Set calendar reminders for visa expiries",
              ],
            },
            {
              size: "50-500 employees",
              items: [
                "Manual tracking breaks down at this scale",
                "Invest in a compliance platform with centralised records, expiry alerts, audit reporting",
              ],
            },
            {
              size: "500+ employees",
              items: [
                "Compliance embedded in HR systems, API integration with ATS",
                "Pre-screening at application stage, real-time dashboard",
              ],
            },
          ].map((tier) => (
            <div key={tier.size} className="bg-warm-white border border-warm-border rounded-sm p-5 print:p-4">
              <h4 className="font-heading text-sm font-bold text-navy mb-2">{tier.size}</h4>
              <ul className="space-y-1">
                {tier.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-on-light-muted">
                    <span className="text-certifyd-blue mt-1">&#x2022;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="max-w-3xl mx-auto px-12 pb-16 print:px-8 print:pb-8">
        <div className="border-t border-warm-border pt-8">
          <h3 className="font-heading text-xl font-bold text-navy mb-2">
            How Certifyd Helps
          </h3>
          <p className="text-text-on-light-muted text-sm leading-relaxed mb-6">
            Certifyd replaces manual right-to-work checks with automated, audit-ready identity
            verification. Pre-screening at application stage. 30-second QR verification. Automatic
            expiry tracking. One-click compliance reports. Enterprise compliance at SME prices.
          </p>
          <div className="flex items-center gap-6">
            <div className="bg-certifyd-blue text-white px-6 py-3 rounded-sm font-heading text-sm font-medium">
              Book a Demo — certifyd.io/contact
            </div>
            <span className="text-sm text-text-on-light-muted">certifyd.io</span>
          </div>
        </div>
        <p className="text-xs text-text-on-light-muted mt-8">
          Certifyd — Two-way identity verification for businesses that can&apos;t afford to get it wrong.
        </p>
      </div>
    </div>
  );
}

function PartHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 bg-certifyd-blue rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-heading text-sm font-bold">{number}</span>
      </div>
      <h2 className="font-heading text-2xl font-bold text-navy">{title}</h2>
    </div>
  );
}

function StepCard({
  step,
  color: _color,
  items,
}: {
  step: string;
  color: string;
  items: string[];
}) {
  return (
    <div className="bg-warm-white border border-warm-border rounded-sm p-5 print:p-4">
      <h4 className="font-heading text-base font-bold text-navy mb-3">
        Step: {step}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-text-on-light-muted">
            <span className="text-certifyd-blue mt-1">&#x2022;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

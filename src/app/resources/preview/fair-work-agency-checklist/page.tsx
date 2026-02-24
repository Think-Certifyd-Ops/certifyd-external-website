import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair Work Agency Compliance Checklist — PDF Preview",
  robots: "noindex",
};

export default function FairWorkAgencyChecklist() {
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
            Fair Work Agency<br />Compliance Checklist
          </h1>
          <p className="text-xl text-text-on-dark-muted font-body print:text-lg">
            10 Things Every UK Employer Must Check Before April 2026
          </p>
          <div className="mt-8 flex items-center gap-6">
            <div className="px-4 py-2 bg-accent-warning/15 border border-accent-warning/30 rounded-sm">
              <span className="font-heading text-sm text-accent-warning font-medium">
                April 2026 Deadline
              </span>
            </div>
            <span className="text-sm text-text-on-dark-muted">
              certifyd.io
            </span>
          </div>
        </div>
      </div>

      {/* What's Changing */}
      <div className="max-w-3xl mx-auto px-12 py-12 print:px-8 print:py-8">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6">
          What&apos;s Changing?
        </h2>
        <p className="text-text-on-light mb-4 leading-relaxed">
          The <strong>Fair Work Agency</strong> launches in April 2026, amalgamating all UK
          employment enforcement bodies into a single agency with the power to{" "}
          <strong>walk into any business</strong> and audit right-to-work compliance —
          regardless of size.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8 print:gap-3">
          {[
            { amount: "£45,000", label: "per illegal worker (first breach)" },
            { amount: "£60,000", label: "per illegal worker (repeat breach)" },
            { amount: "5 years", label: "prison (criminal prosecution)" },
            { amount: "All UK", label: "employers — any size business" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-warm-white border border-warm-border rounded-sm p-5 print:p-4"
            >
              <div className="font-heading text-2xl font-bold text-accent-warning print:text-xl">
                {stat.amount}
              </div>
              <div className="text-sm text-text-on-light-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="max-w-3xl mx-auto px-12 pb-12 print:px-8 print:pb-8">
        <h2 className="font-heading text-2xl font-bold text-navy mb-2">
          Your 10-Point Compliance Checklist
        </h2>

        {/* Before You Hire */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 bg-certifyd-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-navy uppercase tracking-wide">
              Before You Hire
            </h3>
          </div>

          <ChecklistItem number={1} title="Verify right-to-work documents before the employee's first day">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>You must see original documents, not copies</li>
              <li>Check validity dates on visas and BRPs</li>
              <li>Record the date you performed the check</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={2} title="Know which documents to accept">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>UK/Irish passport or birth certificate + NI number = straightforward</li>
              <li>Biometric Residence Permit, visa, or share code = check carefully</li>
              <li>If in doubt, use the Home Office online checking service</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={3} title="Don't rely on verbal confirmation of right-to-work status">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>&quot;Do you have the right to work?&quot; is not a compliance check</li>
              <li>Candidates on graduate/dependent visas often answer &quot;yes&quot; without context</li>
              <li>Verify the specific visa type and any restrictions</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={4} title="Understand sponsorship obligations">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Sponsor Licence: £536 (small) / £1,476 (medium/large). Processing: 8-12 weeks</li>
              <li>Total sponsorship cost: £15,000-£20,000 per person</li>
            </ul>
          </ChecklistItem>
        </div>

        {/* During Employment */}
        <div className="mt-10 print:mt-6 print:break-before-page">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 bg-certifyd-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-navy uppercase tracking-wide">
              During Employment
            </h3>
          </div>

          <ChecklistItem number={5} title="Set up follow-up checks for time-limited immigration status">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Diary the visa expiry date — re-check at least 4 weeks before</li>
              <li>Failure to follow up = loss of your statutory excuse</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={6} title="Keep records for the duration of employment + 2 years">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Store copies of all documents checked (or record of online check)</li>
              <li>Record the date of each check — this is your evidence in an audit</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={7} title="Apply checks consistently to all employees">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Checking some employees but not others = discrimination risk</li>
              <li>Document your process so it&apos;s clearly non-discriminatory</li>
            </ul>
          </ChecklistItem>
        </div>

        {/* Audit Readiness */}
        <div className="mt-10 print:mt-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 bg-certifyd-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-navy uppercase tracking-wide">
              Audit Readiness
            </h3>
          </div>

          <ChecklistItem number={8} title="Audit your existing workforce">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Do you have right-to-work records for every current employee?</li>
              <li>Are any time-limited permissions about to expire?</li>
              <li>Can you produce these records within 24 hours of an inspection?</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={9} title="Train your hiring managers">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Everyone involved in hiring must understand the process</li>
              <li>Common mistakes: accepting expired documents, not checking visa conditions</li>
            </ul>
          </ChecklistItem>

          <ChecklistItem number={10} title="Implement a central compliance system">
            <ul className="list-disc list-inside text-sm text-text-on-light-muted space-y-1 mt-2">
              <li>Spreadsheets and filing cabinets won&apos;t survive an audit at scale</li>
              <li>You need: centralised records, automated expiry alerts, audit-ready reports</li>
              <li>The Fair Work Agency expects a <strong>system</strong>, not just good intentions</li>
            </ul>
          </ChecklistItem>
        </div>
      </div>

      {/* Key Dates */}
      <div className="max-w-3xl mx-auto px-12 pb-8 print:px-8 print:break-before-page">
        <div className="bg-navy rounded-sm p-8 text-text-on-dark print:p-6">
          <h3 className="font-heading text-xl font-bold mb-4">Key Dates</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="font-heading text-sm font-bold text-certifyd-blue whitespace-nowrap min-w-[120px]">
                April 2026
              </div>
              <div className="text-sm text-text-on-dark-muted">
                Fair Work Agency launches with initial enforcement powers
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-heading text-sm font-bold text-certifyd-blue whitespace-nowrap min-w-[120px]">
                January 2027
              </div>
              <div className="text-sm text-text-on-dark-muted">
                Full audit and inspection powers come into effect
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-heading text-sm font-bold text-accent-success whitespace-nowrap min-w-[120px]">
                Now
              </div>
              <div className="text-sm text-text-on-dark-muted">
                The best time to get your house in order
              </div>
            </div>
          </div>
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

function ChecklistItem({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 py-4 border-b border-warm-gray print:py-3">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-7 h-7 border-2 border-warm-border rounded-sm flex items-center justify-center">
          <span className="font-heading text-xs font-bold text-text-on-light-muted">
            {number}
          </span>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-heading text-base font-semibold text-text-on-light">
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

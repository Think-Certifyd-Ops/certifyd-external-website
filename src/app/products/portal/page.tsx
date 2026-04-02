import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { PortalSelfCheck } from "@/components/portal/PortalSelfCheck";

export const metadata: Metadata = {
  title: "Certifyd Portal — Right to Work Compliance for SMEs",
  description:
    "Would you pass a Home Office audit today? RTW compliance dashboard with employee document uploads, expiry tracking, and one-click audit reports. From £29/month.",
  alternates: { canonical: "/products/portal/" },
  openGraph: {
    title: "Certifyd Portal — Right to Work Compliance for SMEs",
    description:
      "Would you pass a Home Office audit today? RTW compliance dashboard with one-click audit reports. From £29/month.",
    url: "https://www.certifyd.io/products/portal/",
  },
};

const penaltyStats = [
  { value: "\u00A345k\u2013\u00A360k", label: "fine per illegal worker" },
  { value: "2,438", label: "civil penalties issued in 2025" },
  { value: "\u00A3130M+", label: "total fines levied" },
  { value: "5 years", label: "max prison sentence" },
  { value: "72 hours", label: "Home Office audit notice" },
  { value: "3x increase", label: "in enforcement raids since 2023" },
];

const useCases = [
  { label: "Care Homes", href: "/for/care-homes/" },
  { label: "Staffing Agencies", href: "/for/staffing-agencies/" },
  { label: "Hospitality Businesses", href: "/for/hospitality-businesses/" },
  { label: "Cleaning Companies", href: "/for/cleaning-companies/" },
  { label: "Recruitment Agencies", href: "/for/recruitment-agencies/" },
];

/* Static preview data to mimic the real demo dashboard */
const previewEmployees = [
  { name: "Sarah Chen", role: "Software Engineer", status: "verified" as const, docs: "2/2" },
  { name: "James Okafor", role: "Care Worker", status: "verified" as const, docs: "4/4" },
  { name: "Maria Santos", role: "Nurse", status: "pending" as const, docs: "3/5" },
  { name: "David Brown", role: "Chef", status: "missing" as const, docs: "0/4" },
  { name: "Emma Wilson", role: "Receptionist", status: "verified" as const, docs: "4/4" },
  { name: "Ahmed Hassan", role: "Care Worker", status: "pending" as const, docs: "3/4" },
];

const previewStatusStyles = {
  verified: { bg: "bg-accent-success/15", text: "text-accent-success", label: "Verified" },
  pending: { bg: "bg-accent-warning/15", text: "text-accent-warning", label: "Pending" },
  missing: { bg: "bg-gray-200", text: "text-gray-500", label: "Missing" },
};

export default function CertifydPortalPage() {
  return (
    <>
      {/* ── Hero — Dashboard preview as centrepiece ── */}
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
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6 animate-fade-in">
              Certifyd Portal
            </span>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.05] text-text-on-dark animate-fade-in">
              Would You Pass<br />
              a Home Office<br />
              <span className="text-certifyd-blue">Audit Today?</span>
            </h1>
            <p className="text-lg text-text-on-dark-muted max-w-lg mx-auto mt-6 animate-slide-up animation-delay-200">
              Right to Work compliance for SMEs. Employee uploads, expiry tracking, automated chasing, and one-click audit reports.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-300">
              <Button href="/contact/" size="lg">Book a demo</Button>
              <Button href="/products/portal/demo/" variant="outline" size="lg">Try the demo</Button>
            </div>
          </div>

          {/* Dashboard preview — mimics the real demo page */}
          <div className="max-w-4xl mx-auto animate-slide-up animation-delay-400">
            <div className="relative group">
              <div
                className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative bg-warm-white border border-navy-border rounded-lg overflow-hidden shadow-2xl">
                {/* App header */}
                <div className="bg-navy border-b border-navy-border">
                  <div className="px-5 py-3 flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-white">Certifyd Portal</span>
                    <span className="text-[11px] text-text-on-dark-muted">Sunrise Care Ltd</span>
                  </div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 p-4 bg-warm-white border-b border-warm-border">
                  {[
                    { label: "Documents", value: "43", color: "text-text-on-light" },
                    { label: "Verified", value: "35", color: "text-accent-success" },
                    { label: "Pending", value: "5", color: "text-accent-warning" },
                    { label: "Expired", value: "3", color: "text-red-500" },
                    { label: "Missing", value: "4", color: "text-gray-400" },
                    { label: "Score", value: "81%", color: "text-certifyd-blue" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-warm-border rounded-sm p-2.5 text-center">
                      <p className="text-[9px] font-heading font-semibold uppercase tracking-wider text-text-on-light-muted">{stat.label}</p>
                      <p className={`font-heading text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Mini employee table */}
                <div className="p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-warm-border">
                        <th className="text-left text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-2 px-3">Name</th>
                        <th className="text-left text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-2 px-3 hidden sm:table-cell">Role</th>
                        <th className="text-left text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-2 px-3">Docs</th>
                        <th className="text-left text-[9px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-2 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewEmployees.map((emp) => {
                        const style = previewStatusStyles[emp.status];
                        return (
                          <tr key={emp.name} className="border-b border-warm-border/60 last:border-0">
                            <td className="py-2 px-3 text-xs font-medium text-text-on-light">{emp.name}</td>
                            <td className="py-2 px-3 text-xs text-text-on-light-muted hidden sm:table-cell">{emp.role}</td>
                            <td className="py-2 px-3 text-xs text-text-on-light-muted">{emp.docs}</td>
                            <td className="py-2 px-3">
                              <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-heading font-medium ${style.bg} ${style.text}`}>
                                {style.label}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Penalty stat bar — Horizontal scrolling ticker ── */}
      <section className="bg-accent-warning/10 border-y border-accent-warning/20">
        <div className="py-10 lg:py-12 overflow-hidden whitespace-nowrap">
          <div className="flex gap-12 animate-marquee">
            {penaltyStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 shrink-0 px-4">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-accent-warning">
                  {stat.value}
                </p>
                <p className="text-sm text-text-on-light-muted whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
            {penaltyStats.map((stat) => (
              <div key={`dup-${stat.label}`} className="flex items-center gap-4 shrink-0 px-4">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-accent-warning">
                  {stat.value}
                </p>
                <p className="text-sm text-text-on-light-muted whitespace-nowrap">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After — "The spreadsheet is not a strategy" ── */}
      <section id="how-it-breaks" className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
                The spreadsheet<br />
                <span className="text-accent-warning">is not a strategy.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Before — Without Portal */}
            <ScrollReveal>
              <div className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-accent-warning/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent-warning" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-text-on-light">Without Portal</h3>
                </div>

                {/* Fake spreadsheet */}
                <div className="bg-warm-white border border-warm-border rounded-md p-4 mb-6 overflow-hidden">
                  <div className="grid grid-cols-4 gap-px text-[10px] font-heading">
                    <div className="bg-gray-100 p-1.5 font-semibold text-text-on-light-muted">Name</div>
                    <div className="bg-gray-100 p-1.5 font-semibold text-text-on-light-muted">RTW Status</div>
                    <div className="bg-gray-100 p-1.5 font-semibold text-text-on-light-muted">Expiry</div>
                    <div className="bg-gray-100 p-1.5 font-semibold text-text-on-light-muted">Chased?</div>

                    <div className="bg-white p-1.5 text-text-on-light">Sarah C.</div>
                    <div className="bg-white p-1.5 text-accent-success">Done</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">N/A</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">—</div>

                    <div className="bg-white p-1.5 text-text-on-light">James O.</div>
                    <div className="bg-white p-1.5 text-accent-warning">Pending?</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">???</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">Think so</div>

                    <div className="bg-red-50 p-1.5 text-text-on-light">Maria S.</div>
                    <div className="bg-red-50 p-1.5 text-red-500 font-semibold">OVERDUE</div>
                    <div className="bg-red-50 p-1.5 text-red-500">15 Mar</div>
                    <div className="bg-red-50 p-1.5 text-red-500">No</div>

                    <div className="bg-white p-1.5 text-text-on-light">David B.</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">—</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">—</div>
                    <div className="bg-white p-1.5 text-text-on-light-muted">—</div>
                  </div>
                  <p className="text-[9px] text-text-on-light-muted/60 mt-2 italic">Last updated: 3 months ago</p>
                </div>

                <div className="space-y-3">
                  {[
                    "You send a welcome email. RTW docs get lost in the pack.",
                    "You email them to chase. They don't reply. You move on.",
                    "Weeks pass. They start work. The spreadsheet says 'pending'.",
                    "Nobody checks. Until the Home Office does.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-accent-warning/15 flex items-center justify-center mt-0.5">
                        <span className="text-[10px] text-accent-warning font-heading font-bold">{i + 1}</span>
                      </span>
                      <p className="text-sm text-text-on-light-muted leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* After — With Portal */}
            <ScrollReveal delay={150}>
              <div className="bg-certifyd-blue/5 border border-certifyd-blue/20 rounded-sm p-6 lg:p-8 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-certifyd-blue/15 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-text-on-light">With Portal</h3>
                </div>

                {/* Clean mini dashboard */}
                <div className="bg-white border border-certifyd-blue/10 rounded-md p-4 mb-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider">Compliance Dashboard</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-accent-success font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-accent-success/10 rounded p-2 text-center">
                      <p className="font-heading text-lg font-bold text-accent-success">28</p>
                      <p className="text-[9px] text-text-on-light-muted">Verified</p>
                    </div>
                    <div className="bg-accent-warning/10 rounded p-2 text-center">
                      <p className="font-heading text-lg font-bold text-accent-warning">2</p>
                      <p className="text-[9px] text-text-on-light-muted">Pending</p>
                    </div>
                    <div className="bg-certifyd-blue/10 rounded p-2 text-center">
                      <p className="font-heading text-lg font-bold text-certifyd-blue">93%</p>
                      <p className="text-[9px] text-text-on-light-muted">Score</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-accent-success mt-2">Last updated: Just now</p>
                </div>

                <div className="space-y-3">
                  {[
                    "Employees upload documents themselves via a secure link.",
                    "Expiry dates are tracked automatically. You never miss one.",
                    "Chase sequences fire without you lifting a finger.",
                    "One click generates an audit-ready compliance report.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-certifyd-blue/15 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      <p className="text-sm text-text-on-light leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Bento feature grid — with icons ── */}
      <section className="section-light border-t border-warm-border">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Key Capabilities
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light max-w-xl leading-tight">
                Compliance on autopilot.<br />
                <span className="text-certifyd-blue">Not on spreadsheets.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Row 1: Hero feature (8 cols) + 2 stacked (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            {/* Hero feature card — One-Click Audit Reports */}
            <ScrollReveal className="lg:col-span-8">
              <div className="bg-white border border-warm-border rounded-sm p-8 lg:p-10 hover:shadow-md transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  <span className="font-heading text-xs font-semibold text-certifyd-blue uppercase tracking-wider">Flagship</span>
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-text-on-light mb-3">
                  One-Click Audit Reports
                </h3>
                <p className="text-text-on-light-muted text-sm leading-relaxed mb-6 max-w-md">
                  Home Office knocks on your door? Generate a complete, date-stamped compliance report in one click. Every document, every check, every date — instantly.
                </p>
                {/* Inline mock report */}
                <div className="bg-warm-white border border-warm-border rounded-md p-5 max-w-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-wider text-text-on-light-muted">Audit Report</span>
                    <span className="text-[10px] text-accent-success font-medium">Generated just now</span>
                  </div>
                  <div className="space-y-2.5">
                    {["Sarah Chen — BRP verified, expires Dec 2026", "James Okafor — UK passport, no expiry", "Maria Santos — Visa pending renewal \u26A0\uFE0F", "David Park — Settled status verified", "Elena Vasquez — BRP verified, expires Mar 2027"].map((line) => (
                      <div key={line} className="flex items-start gap-2 text-[11px] text-text-on-light-muted">
                        <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-certifyd-blue" />
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-warm-border flex items-center justify-between">
                    <span className="text-[10px] text-text-on-light-muted">5 of 30 employees shown</span>
                    <span className="text-[10px] text-certifyd-blue font-medium">Download full PDF</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2 stacked cards */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <ScrollReveal delay={100}>
                <div className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    {/* Bell/email icon */}
                    <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <h3 className="font-heading text-lg font-bold text-text-on-light">
                      Automated Chase Sequences
                    </h3>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed mb-6">
                    Missing a document? Portal sends reminder emails automatically. Escalating frequency. You don&apos;t lift a finger.
                  </p>
                  {/* Email timeline visual */}
                  <div className="space-y-3">
                    {[
                      { day: "Day 1", label: "Friendly reminder", color: "bg-certifyd-blue" },
                      { day: "Day 5", label: "Second request", color: "bg-accent-warning" },
                      { day: "Day 10", label: "Urgent: escalated to manager", color: "bg-red-500" },
                    ].map((email) => (
                      <div key={email.day} className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${email.color} shrink-0`} />
                        <div>
                          <span className="font-heading text-[10px] font-semibold text-text-on-light-muted uppercase tracking-wider">{email.day}</span>
                          <p className="text-xs text-text-on-light-muted">{email.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    {/* Calendar icon */}
                    <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <h3 className="font-heading text-lg font-bold text-text-on-light">
                      Expiry Tracking
                    </h3>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    Every document has a deadline. Portal tracks them all and alerts you before anything expires — 60, 30, and 7 days out.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Row 2: 3 equal cards with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Employee Self-Service",
                desc: "Email employees a secure link. They upload their documents directly. No scanning, no filing cabinets.",
                icon: (
                  <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                ),
              },
              {
                title: "IDSP Wrapper",
                desc: "Portal wraps your existing identity service provider. One compliance layer on top of the tools you already use.",
                icon: (
                  <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "Live Dashboard",
                desc: "See your entire workforce at a glance. Who's compliant, who's pending, who's overdue. Red, amber, green.",
                icon: (
                  <svg className="w-5 h-5 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={200 + i * 80}>
                <div className="bg-white border border-warm-border rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    {feature.icon}
                    <h3 className="font-heading text-base font-semibold text-text-on-light">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-text-on-light-muted text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance self-check — Interactive ── */}
      <section className="section-dark">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Self-Check
                </span>
              </div>
              <h2 className="font-heading text-2xl lg:text-4xl font-bold text-text-on-dark leading-tight mb-2">
                Are you audit-ready?
              </h2>
              <p className="text-text-on-dark-muted text-sm mb-8">
                Answer honestly. It takes 30 seconds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl">
              <PortalSelfCheck />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-px bg-text-on-light-muted" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                    Pricing
                  </span>
                  <div className="w-8 h-px bg-text-on-light-muted" />
                </div>
                <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-light leading-tight">
                  Simple pricing.<br />
                  <span className="text-certifyd-blue">No surprises.</span>
                </h2>
              </div>

              {/* Pricing card */}
              <div className="bg-white border-2 border-certifyd-blue/20 rounded-sm p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-8 border-b border-warm-border">
                  <div>
                    <span className="inline-block px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-3">
                      Portal
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-5xl lg:text-6xl font-bold text-text-on-light">&pound;29</span>
                      <span className="font-heading text-lg text-text-on-light-muted">/month</span>
                    </div>
                    <p className="text-sm text-text-on-light-muted mt-1">No enterprise contracts. No procurement.</p>
                  </div>
                  <Button href="/contact/" size="lg">Book a demo</Button>
                </div>

                {/* Feature checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Employee self-service uploads",
                    "Automated chase sequences",
                    "Expiry tracking & alerts",
                    "One-click audit reports",
                    "Live compliance dashboard",
                    "IDSP wrapper integration",
                    "Unlimited employees",
                    "Email & chat support",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 text-certifyd-blue shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-text-on-light">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Vita callout */}
                <div className="mt-8 p-4 bg-certifyd-blue/5 border border-certifyd-blue/15 rounded-sm">
                  <p className="text-sm text-text-on-light">
                    <span className="font-heading font-semibold">Vita customers:</span>{" "}
                    Portal is free while you&apos;re on your Vita plan.{" "}
                    <Link href="/contact/" className="text-certifyd-blue underline underline-offset-2 decoration-certifyd-blue/30 hover:decoration-certifyd-blue transition-colors">
                      Talk to us
                    </Link>
                  </p>
                </div>
              </div>

              <p className="text-center text-xs text-text-on-light-muted mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Industry pills ── */}
      <section className="section-dark">
        <div className="section-container py-20 lg:py-28">
          <ScrollReveal>
            <div className="mb-14 lg:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-certifyd-blue" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                  Built For
                </span>
              </div>
              <h2 className="font-heading text-3xl lg:text-5xl font-bold text-text-on-dark max-w-2xl leading-tight">
                Any business that<br />
                <span className="text-certifyd-blue">employs people.</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {useCases.map((uc) => (
                <Link
                  key={uc.label}
                  href={uc.href}
                  className="group border border-navy-border bg-navy-light px-6 py-3 rounded-sm text-sm font-heading font-medium text-text-on-dark hover:border-white/40 hover:bg-navy-lighter transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-0.5 inline-block">
                    {uc.label}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 ml-2 inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent
        solutions={[
          { label: "Certifyd ID", href: "/products/id/" },
          { label: "Certifyd Screen", href: "/products/verify/" },
          { label: "Certifyd Sentinel", href: "/products/sentinel/" },
        ]}
        articles={[
          { label: "Right to Work Checks Explained", href: "/blog/what-are-right-to-work-checks/" },
          { label: "The Fair Work Agency: What SMEs Need to Know", href: "/blog/fair-work-agency-what-smes-need-to-know/" },
        ]}
        resources={[
          { label: "Home Office: Right to Work Checks Guide", href: "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide", external: true },
        ]}
      />

      <SolutionCTA
        title="Don't wait for the audit. Be ready now."
        href="/contact/"
        secondaryLabel="See all products"
        secondaryHref="/products/"
      />
    </>
  );
}

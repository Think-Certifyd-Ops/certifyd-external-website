"use client";

import { useState } from "react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";

/* ── Types ── */

type DocStatus = "verified" | "pending" | "expired" | "missing";
type DocCategory = "rtw" | "dbs" | "training" | "professional" | "licence";

interface Document {
  type: string;
  category: DocCategory;
  status: DocStatus;
  expiryDate: string | null;
  uploadedDate: string | null;
}

interface ChaseEvent {
  date: string;
  event: string;
}

interface ScheduledReminder {
  date: string;
  label: string;
  status: "sent" | "scheduled";
}

interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  documents: Document[];
  chaseHistory: ChaseEvent[];
  scheduledReminders: ScheduledReminder[];
}

/* ── Mock data ── */

const employees: Employee[] = [
  {
    id: 1, name: "Sarah Chen", email: "s.chen@sunrisecare.co.uk", role: "Software Engineer", department: "Engineering",
    documents: [
      { type: "UK Passport", category: "rtw", status: "verified", expiryDate: null, uploadedDate: "2026-03-01" },
      { type: "Enhanced DBS", category: "dbs", status: "verified", expiryDate: "2028-06-15", uploadedDate: "2025-06-15" },
    ],
    chaseHistory: [{ date: "2026-02-28", event: "Upload link sent" }, { date: "2026-03-01", event: "Documents uploaded by employee" }],
    scheduledReminders: [],
  },
  {
    id: 2, name: "James Okafor", email: "j.okafor@sunrisecare.co.uk", role: "Care Worker", department: "Care",
    documents: [
      { type: "Biometric Residence Permit", category: "rtw", status: "verified", expiryDate: "2026-12-01", uploadedDate: "2026-03-10" },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "verified", expiryDate: "2027-09-20", uploadedDate: "2024-09-20" },
      { type: "Safeguarding Level 2", category: "training", status: "verified", expiryDate: "2027-03-10", uploadedDate: "2026-03-10" },
      { type: "Manual Handling", category: "training", status: "verified", expiryDate: "2026-11-15", uploadedDate: "2025-11-15" },
    ],
    chaseHistory: [{ date: "2026-03-05", event: "Upload link sent" }, { date: "2026-03-08", event: "Reminder sent (Day 3)" }, { date: "2026-03-10", event: "Documents uploaded by employee" }],
    scheduledReminders: [],
  },
  {
    id: 3, name: "Maria Santos", email: "m.santos@sunrisecare.co.uk", role: "Nurse", department: "Care",
    documents: [
      { type: "Visa", category: "rtw", status: "pending", expiryDate: "2026-04-15", uploadedDate: null },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "verified", expiryDate: "2027-01-20", uploadedDate: "2024-01-20" },
      { type: "NMC Registration", category: "professional", status: "verified", expiryDate: "2026-11-30", uploadedDate: "2025-11-30" },
      { type: "Safeguarding Level 3", category: "training", status: "expired", expiryDate: "2026-03-01", uploadedDate: "2023-03-01" },
      { type: "First Aid at Work", category: "training", status: "verified", expiryDate: "2027-02-28", uploadedDate: "2024-02-28" },
    ],
    chaseHistory: [{ date: "2026-03-20", event: "Upload link sent" }, { date: "2026-03-23", event: "Reminder sent (Day 3)" }, { date: "2026-03-28", event: "Urgent reminder sent (Day 8)" }],
    scheduledReminders: [
      { date: "2026-04-01", label: "Final warning — Visa upload", status: "scheduled" },
      { date: "2026-04-05", label: "Escalation to department manager", status: "scheduled" },
    ],
  },
  {
    id: 4, name: "David Brown", email: "d.brown@sunrisecare.co.uk", role: "Chef", department: "Kitchen",
    documents: [
      { type: "Right to Work", category: "rtw", status: "missing", expiryDate: null, uploadedDate: null },
      { type: "Basic DBS", category: "dbs", status: "missing", expiryDate: null, uploadedDate: null },
      { type: "Food Hygiene Level 3", category: "training", status: "missing", expiryDate: null, uploadedDate: null },
      { type: "Fire Safety", category: "training", status: "missing", expiryDate: null, uploadedDate: null },
    ],
    chaseHistory: [],
    scheduledReminders: [
      { date: "2026-04-01", label: "Initial upload link — all documents", status: "scheduled" },
    ],
  },
  {
    id: 5, name: "Emma Wilson", email: "e.wilson@sunrisecare.co.uk", role: "Receptionist", department: "Admin",
    documents: [
      { type: "UK Passport", category: "rtw", status: "verified", expiryDate: null, uploadedDate: "2026-02-15" },
      { type: "Basic DBS", category: "dbs", status: "verified", expiryDate: "2028-02-15", uploadedDate: "2025-02-15" },
      { type: "Fire Safety", category: "training", status: "verified", expiryDate: "2027-01-10", uploadedDate: "2025-01-10" },
      { type: "GDPR / Data Protection", category: "training", status: "verified", expiryDate: "2026-09-30", uploadedDate: "2025-09-30" },
    ],
    chaseHistory: [{ date: "2026-02-14", event: "Upload link sent" }, { date: "2026-02-15", event: "Documents uploaded by employee" }],
    scheduledReminders: [],
  },
  {
    id: 6, name: "Ahmed Hassan", email: "a.hassan@sunrisecare.co.uk", role: "Care Worker", department: "Care",
    documents: [
      { type: "Share Code verified", category: "rtw", status: "verified", expiryDate: "2027-06-30", uploadedDate: "2026-01-20" },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "verified", expiryDate: "2027-05-18", uploadedDate: "2024-05-18" },
      { type: "Safeguarding Level 2", category: "training", status: "verified", expiryDate: "2027-08-22", uploadedDate: "2024-08-22" },
      { type: "Manual Handling", category: "training", status: "pending", expiryDate: null, uploadedDate: null },
    ],
    chaseHistory: [{ date: "2026-01-18", event: "Upload link sent" }, { date: "2026-01-20", event: "RTW document uploaded" }, { date: "2026-03-25", event: "Manual Handling training upload link sent" }, { date: "2026-03-28", event: "Reminder sent (Day 3)" }],
    scheduledReminders: [
      { date: "2026-04-02", label: "Second reminder — Manual Handling", status: "scheduled" },
    ],
  },
  {
    id: 7, name: "Lucy Taylor", email: "l.taylor@sunrisecare.co.uk", role: "Activities Coordinator", department: "Care",
    documents: [
      { type: "UK Birth Certificate + NI Letter", category: "rtw", status: "verified", expiryDate: null, uploadedDate: "2026-02-22" },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "verified", expiryDate: "2028-01-12", uploadedDate: "2025-01-12" },
      { type: "Safeguarding Level 2", category: "training", status: "verified", expiryDate: "2027-04-15", uploadedDate: "2024-04-15" },
    ],
    chaseHistory: [{ date: "2026-02-20", event: "Upload link sent" }, { date: "2026-02-22", event: "Documents uploaded by employee" }],
    scheduledReminders: [],
  },
  {
    id: 8, name: "Tomasz Kowalski", email: "t.kowalski@sunrisecare.co.uk", role: "Maintenance", department: "Facilities",
    documents: [
      { type: "EU Settlement Scheme — Settled", category: "rtw", status: "verified", expiryDate: null, uploadedDate: "2026-03-05" },
      { type: "Basic DBS", category: "dbs", status: "verified", expiryDate: "2027-11-05", uploadedDate: "2024-11-05" },
      { type: "Manual Handling", category: "training", status: "verified", expiryDate: "2026-08-20", uploadedDate: "2024-08-20" },
      { type: "COSHH", category: "training", status: "expired", expiryDate: "2026-02-28", uploadedDate: "2024-02-28" },
    ],
    chaseHistory: [{ date: "2026-03-01", event: "COSHH training EXPIRED — chase sent" }, { date: "2026-03-03", event: "Upload link sent" }, { date: "2026-03-05", event: "RTW document uploaded" }, { date: "2026-03-10", event: "COSHH reminder sent" }],
    scheduledReminders: [
      { date: "2026-04-01", label: "COSHH escalation reminder", status: "scheduled" },
    ],
  },
  {
    id: 9, name: "Fatima Al-Rashid", email: "f.alrashid@sunrisecare.co.uk", role: "Senior Nurse", department: "Care",
    documents: [
      { type: "Visa", category: "rtw", status: "expired", expiryDate: "2026-03-01", uploadedDate: "2025-09-15" },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "verified", expiryDate: "2027-07-14", uploadedDate: "2024-07-14" },
      { type: "NMC Registration", category: "professional", status: "verified", expiryDate: "2026-09-30", uploadedDate: "2025-09-30" },
      { type: "Safeguarding Level 3", category: "training", status: "verified", expiryDate: "2027-06-01", uploadedDate: "2024-06-01" },
      { type: "First Aid at Work", category: "training", status: "verified", expiryDate: "2026-12-15", uploadedDate: "2023-12-15" },
    ],
    chaseHistory: [{ date: "2026-02-01", event: "Visa expiry warning sent (30 days)" }, { date: "2026-02-15", event: "Visa expiry warning sent (14 days)" }, { date: "2026-03-01", event: "Visa EXPIRED — urgent chase sent" }, { date: "2026-03-05", event: "Escalation reminder sent" }, { date: "2026-03-15", event: "Escalated to department manager" }],
    scheduledReminders: [
      { date: "2026-04-01", label: "Manager follow-up — Visa renewal", status: "scheduled" },
    ],
  },
  {
    id: 10, name: "Priya Sharma", email: "p.sharma@sunrisecare.co.uk", role: "Night Carer", department: "Care",
    documents: [
      { type: "Biometric Residence Permit", category: "rtw", status: "verified", expiryDate: "2027-03-15", uploadedDate: "2026-03-12" },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "pending", expiryDate: null, uploadedDate: null },
      { type: "Safeguarding Level 2", category: "training", status: "verified", expiryDate: "2027-09-01", uploadedDate: "2024-09-01" },
    ],
    chaseHistory: [{ date: "2026-03-10", event: "Upload link sent" }, { date: "2026-03-12", event: "RTW uploaded" }, { date: "2026-03-20", event: "DBS application submitted — awaiting result" }],
    scheduledReminders: [
      { date: "2026-04-03", label: "DBS result follow-up", status: "scheduled" },
    ],
  },
  {
    id: 11, name: "Michael O'Brien", email: "m.obrien@sunrisecare.co.uk", role: "Driver", department: "Transport",
    documents: [
      { type: "Irish Passport", category: "rtw", status: "verified", expiryDate: null, uploadedDate: "2026-01-10" },
      { type: "Enhanced DBS", category: "dbs", status: "verified", expiryDate: "2027-10-30", uploadedDate: "2024-10-30" },
      { type: "Driving Licence", category: "licence", status: "verified", expiryDate: "2026-07-08", uploadedDate: "2025-07-08" },
      { type: "Manual Handling", category: "training", status: "verified", expiryDate: "2026-10-20", uploadedDate: "2024-10-20" },
    ],
    chaseHistory: [{ date: "2026-01-08", event: "Upload link sent" }, { date: "2026-01-10", event: "Documents uploaded by employee" }],
    scheduledReminders: [],
  },
  {
    id: 12, name: "Grace Mensah", email: "g.mensah@sunrisecare.co.uk", role: "Care Worker", department: "Care",
    documents: [
      { type: "Right to Work", category: "rtw", status: "pending", expiryDate: null, uploadedDate: null },
      { type: "Enhanced DBS + Barred List", category: "dbs", status: "pending", expiryDate: null, uploadedDate: null },
      { type: "Safeguarding Level 2", category: "training", status: "pending", expiryDate: null, uploadedDate: null },
    ],
    chaseHistory: [{ date: "2026-03-25", event: "Upload links sent for all documents" }, { date: "2026-03-28", event: "Reminder sent (Day 3)" }],
    scheduledReminders: [
      { date: "2026-04-02", label: "Second reminder — all documents", status: "scheduled" },
      { date: "2026-04-07", label: "Escalation to manager", status: "scheduled" },
    ],
  },
];

/* ── Config ── */

const statusConfig: Record<DocStatus, { label: string; color: string; bg: string }> = {
  verified: { label: "Verified", color: "text-accent-success", bg: "bg-accent-success/15" },
  pending: { label: "Pending", color: "text-accent-warning", bg: "bg-accent-warning/15" },
  expired: { label: "Expired", color: "text-red-500", bg: "bg-red-500/15" },
  missing: { label: "Missing", color: "text-text-on-light-muted", bg: "bg-warm-white" },
};

const categoryConfig: Record<DocCategory, { label: string; short: string }> = {
  rtw: { label: "Right to Work", short: "RTW" },
  dbs: { label: "DBS Check", short: "DBS" },
  training: { label: "Training", short: "Training" },
  professional: { label: "Professional Registration", short: "Professional" },
  licence: { label: "Licence", short: "Licence" },
};

const statusPriority: Record<DocStatus, number> = { expired: 0, missing: 1, pending: 2, verified: 3 };

/* ── Derived data ── */

const allDocs = employees.flatMap((e) => e.documents.map((d) => ({ ...d, employeeId: e.id, employeeName: e.name })));

function worstStatus(docs: Document[]): DocStatus {
  return docs.reduce<DocStatus>((worst, d) => (statusPriority[d.status] < statusPriority[worst] ? d.status : worst), "verified");
}

function earliestExpiry(docs: Document[]): string | null {
  const expiring = docs.filter((d) => d.expiryDate && d.status !== "expired").map((d) => d.expiryDate!).sort();
  return expiring[0] ?? null;
}

const docCounts = {
  total: allDocs.length,
  verified: allDocs.filter((d) => d.status === "verified").length,
  pending: allDocs.filter((d) => d.status === "pending").length,
  expired: allDocs.filter((d) => d.status === "expired").length,
  missing: allDocs.filter((d) => d.status === "missing").length,
};

const score = Math.round((docCounts.verified / docCounts.total) * 100);

/* ── Helpers ── */

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function daysUntil(d: string | null) {
  if (!d) return null;
  return Math.ceil((new Date(d).getTime() - Date.now()) / 86400000);
}

function daysSince(d: string) {
  return Math.abs(Math.floor((Date.now() - new Date(d).getTime()) / 86400000));
}

/* ── Expiring documents ── */

const expiringSoon = allDocs.filter((d) => {
  const days = daysUntil(d.expiryDate);
  return days !== null && days > 0 && days <= 60;
}).sort((a, b) => daysUntil(a.expiryDate)! - daysUntil(b.expiryDate)!);

/* ── Chase info for expiring docs ── */

function getChaseInfo(employeeId: number, docType: string) {
  const emp = employees.find((e) => e.id === employeeId);
  if (!emp) return null;

  const lastChase = [...emp.chaseHistory].reverse().find(
    (ch) => ch.event.toLowerCase().includes("reminder") || ch.event.toLowerCase().includes("chase") || ch.event.toLowerCase().includes("warning")
  );
  const nextReminder = emp.scheduledReminders.find((r) => r.status === "scheduled");

  return { lastChase, nextReminder };
}

/* ── Views ── */

type View = "dashboard" | "employee" | "report" | "send-link";

export default function PortalDemoPage() {
  const [view, setView] = useState<View>("dashboard");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [statusFilter, setStatusFilter] = useState<DocStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<DocCategory | "all">("all");
  const [gateEmail, setGateEmail] = useState("");
  const [gateSubmitted, setGateSubmitted] = useState(false);

  const selected = employees.find((e) => e.id === selectedId) ?? null;

  const filtered = employees.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.role.toLowerCase().includes(search.toLowerCase());
    const docsInCategory = categoryFilter === "all" ? e.documents : e.documents.filter((d) => d.category === categoryFilter);
    const worst = worstStatus(docsInCategory.length > 0 ? docsInCategory : e.documents);
    const matchesStatus = statusFilter === "all" || worst === statusFilter;
    return matchesSearch && matchesStatus && (categoryFilter === "all" || docsInCategory.length > 0);
  });

  function openEmployee(id: number) {
    setSelectedId(id);
    setView("employee");
  }

  function goBack() {
    setView("dashboard");
    setSelectedId(null);
    setLinkSent(false);
  }

  function empDocSummary(emp: Employee) {
    const docs = categoryFilter === "all" ? emp.documents : emp.documents.filter((d) => d.category === categoryFilter);
    const v = docs.filter((d) => d.status === "verified").length;
    return { verified: v, total: docs.length };
  }

  /* ── Email gate ── */
  if (!gateSubmitted) {
    return (
      <BrowserFrame url="portal.certifyd.io" backHref="/products/portal/" backLabel="Back to Certifyd Portal">
        <div className="bg-warm-white min-h-[60vh] flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className="w-12 h-12 rounded-full bg-certifyd-blue/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl font-bold text-text-on-light mb-2">
              Try the Portal Demo
            </h2>
            <p className="text-sm text-text-on-light-muted mb-8">
              Explore a fully working compliance dashboard with sample data. Enter your email to get started.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (gateEmail.trim()) setGateSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                value={gateEmail}
                onChange={(e) => setGateEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 bg-white border border-warm-border rounded-sm text-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-dark transition-colors whitespace-nowrap"
              >
                Launch demo
              </button>
            </form>
            <p className="text-[11px] text-text-on-light-muted mt-3">
              No account needed. We&apos;ll only use this to follow up if you&apos;re interested.
            </p>
          </div>
        </div>
      </BrowserFrame>
    );
  }

  return (
    <BrowserFrame url="portal.certifyd.io" backHref="/products/portal/" backLabel="Back to Certifyd Portal">
      <div className="bg-warm-white">
      {/* Top bar */}
      <div className="bg-navy border-b border-navy-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-sm font-bold text-white">Certifyd Portal</span>
          </div>
          <span className="text-[11px] text-text-on-dark-muted hidden sm:block">Sunrise Care Ltd</span>
        </div>
      </div>

      {/* Main content — fixed min-height to prevent layout jumping */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-8 min-h-[700px]">
        {view === "dashboard" && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
              <div className="bg-white border border-warm-border rounded-sm p-4">
                <p className="text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-1">Documents</p>
                <p className="font-heading text-2xl font-bold text-text-on-light">{docCounts.total}</p>
              </div>
              <div className="bg-white border border-warm-border rounded-sm p-4">
                <p className="text-[10px] font-heading font-semibold text-accent-success uppercase tracking-wider mb-1">Verified</p>
                <p className="font-heading text-2xl font-bold text-accent-success">{docCounts.verified}</p>
              </div>
              <div className="bg-white border border-warm-border rounded-sm p-4">
                <p className="text-[10px] font-heading font-semibold text-accent-warning uppercase tracking-wider mb-1">Pending</p>
                <p className="font-heading text-2xl font-bold text-accent-warning">{docCounts.pending}</p>
              </div>
              <div className="bg-white border border-warm-border rounded-sm p-4">
                <p className="text-[10px] font-heading font-semibold text-red-500 uppercase tracking-wider mb-1">Expired</p>
                <p className="font-heading text-2xl font-bold text-red-500">{docCounts.expired}</p>
              </div>
              <div className="bg-white border border-warm-border rounded-sm p-4">
                <p className="text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider mb-1">Missing</p>
                <p className="font-heading text-2xl font-bold text-text-on-light-muted">{docCounts.missing}</p>
              </div>
              <div className="bg-white border border-warm-border rounded-sm p-4 col-span-2 lg:col-span-1">
                <p className="text-[10px] font-heading font-semibold text-certifyd-blue uppercase tracking-wider mb-1">Score</p>
                <p className="font-heading text-2xl font-bold text-certifyd-blue">{score}%</p>
                <div className="w-full h-1.5 bg-warm-white rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-certifyd-blue rounded-full transition-all" style={{ width: `${score}%` }} />
                </div>
              </div>
            </div>

            {/* Expiry alerts with chase sequence info */}
            {expiringSoon.length > 0 && (
              <div className="bg-accent-warning/10 border border-accent-warning/20 rounded-sm p-4 mb-6">
                <p className="font-heading text-xs font-semibold text-accent-warning uppercase tracking-wider mb-3">
                  Expiring Within 60 Days ({expiringSoon.length})
                </p>
                <div className="space-y-3">
                  {expiringSoon.map((d, i) => {
                    const chase = getChaseInfo(d.employeeId, d.type);
                    return (
                      <div key={i} className="border-b border-accent-warning/10 last:border-0 pb-2 last:pb-0">
                        <button onClick={() => openEmployee(d.employeeId)} className="block text-sm text-text-on-light hover:text-certifyd-blue transition-colors text-left">
                          <span className="font-medium">{d.employeeName}</span>
                          <span className="text-text-on-light-muted"> — {d.type}</span>
                          <span className="text-[10px] text-text-on-light-muted ml-1">({categoryConfig[d.category].short})</span>
                          <span className="text-text-on-light-muted"> — expires {formatDate(d.expiryDate)}</span>
                          <span className="text-accent-warning font-medium"> ({daysUntil(d.expiryDate)} days)</span>
                        </button>
                        {/* Chase sequence info */}
                        {chase && (chase.lastChase || chase.nextReminder) && (
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 ml-0">
                            {chase.lastChase && (
                              <span className="text-[11px] text-text-on-light-muted flex items-center gap-1">
                                <svg className="w-3 h-3 text-certifyd-blue shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                Reminder sent {daysSince(chase.lastChase.date)} day{daysSince(chase.lastChase.date) !== 1 ? "s" : ""} ago
                              </span>
                            )}
                            {chase.nextReminder && (
                              <span className="text-[11px] text-text-on-light-muted flex items-center gap-1">
                                <svg className="w-3 h-3 text-accent-warning shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Next: {chase.nextReminder.label} in {daysUntil(chase.nextReminder.date)} day{(daysUntil(chase.nextReminder.date) ?? 0) !== 1 ? "s" : ""}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(["all", "rtw", "dbs", "training", "professional", "licence"] as const).map((cat) => {
                const count = cat === "all" ? docCounts.total : allDocs.filter((d) => d.category === cat).length;
                if (cat !== "all" && count === 0) return null;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-sm text-xs font-heading font-medium transition-colors ${
                      categoryFilter === cat
                        ? "bg-certifyd-blue text-white"
                        : "bg-white border border-warm-border text-text-on-light-muted hover:border-certifyd-blue/40"
                    }`}
                  >
                    {cat === "all" ? "All Categories" : categoryConfig[cat].label}
                    <span className="ml-1.5 opacity-60">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex-1 relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-on-light-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search employees..."
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-warm-border rounded-sm text-sm text-text-on-light placeholder:text-text-on-light-muted/50 focus:outline-none focus:border-certifyd-blue transition-colors"
                />
              </div>
              <div className="flex gap-2">
                {(["all", "verified", "pending", "expired", "missing"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setStatusFilter(f)}
                    className={`px-3 py-2 rounded-sm text-xs font-heading font-medium transition-colors ${
                      statusFilter === f
                        ? "bg-certifyd-blue text-white"
                        : "bg-white border border-warm-border text-text-on-light-muted hover:border-certifyd-blue/40"
                    }`}
                  >
                    {f === "all" ? "All" : statusConfig[f].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Employee table */}
            <div className="bg-white border border-warm-border rounded-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b border-warm-border bg-warm-white/50">
                      <th className="text-left text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Name</th>
                      <th className="text-left text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4 hidden sm:table-cell">Role</th>
                      <th className="text-left text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Documents</th>
                      <th className="text-left text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4">Status</th>
                      <th className="text-left text-[10px] font-heading font-semibold text-text-on-light-muted uppercase tracking-wider py-3 px-4 hidden md:table-cell">Next Expiry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((emp) => {
                      const docs = categoryFilter === "all" ? emp.documents : emp.documents.filter((d) => d.category === categoryFilter);
                      const worst = worstStatus(docs);
                      const summary = empDocSummary(emp);
                      const nextExp = earliestExpiry(docs);
                      const nextDays = daysUntil(nextExp);
                      return (
                        <tr
                          key={emp.id}
                          onClick={() => openEmployee(emp.id)}
                          className="border-b border-warm-border last:border-0 hover:bg-certifyd-blue/[0.02] cursor-pointer transition-colors"
                        >
                          <td className="py-3 px-4">
                            <p className="text-sm font-medium text-text-on-light">{emp.name}</p>
                            <p className="text-[11px] text-text-on-light-muted sm:hidden">{emp.role}</p>
                          </td>
                          <td className="py-3 px-4 hidden sm:table-cell">
                            <p className="text-sm text-text-on-light-muted">{emp.role}</p>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium ${summary.verified === summary.total ? "text-accent-success" : "text-text-on-light"}`}>
                                {summary.verified}/{summary.total}
                              </span>
                              <div className="flex gap-0.5">
                                {docs.map((d, i) => (
                                  <span
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      d.status === "verified" ? "bg-accent-success" :
                                      d.status === "pending" ? "bg-accent-warning" :
                                      d.status === "expired" ? "bg-red-500" :
                                      "bg-gray-300"
                                    }`}
                                    title={`${d.type}: ${d.status}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-heading font-medium ${statusConfig[worst].bg} ${statusConfig[worst].color}`}>
                              {statusConfig[worst].label}
                            </span>
                          </td>
                          <td className="py-3 px-4 hidden md:table-cell">
                            {nextExp ? (
                              <span className={`text-sm ${(nextDays ?? 999) <= 30 ? "text-accent-warning font-medium" : (nextDays ?? 999) <= 0 ? "text-red-500 font-medium" : "text-text-on-light-muted"}`}>
                                {formatDate(nextExp)}
                              </span>
                            ) : (
                              <span className="text-sm text-text-on-light-muted">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                    {/* Empty rows to maintain height when fewer results show */}
                    {filtered.length < 8 && Array.from({ length: 8 - filtered.length }).map((_, i) => (
                      <tr key={`empty-${i}`} className="border-b border-warm-border/30 last:border-0">
                        <td className="py-3 px-4" colSpan={5}>&nbsp;</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => { setView("send-link"); setLinkSent(false); }}
                className="px-5 py-2.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-dark transition-colors"
              >
                Send Upload Links
              </button>
              <button
                onClick={() => setView("report")}
                className="px-5 py-2.5 bg-white border border-warm-border text-text-on-light rounded-sm font-heading font-medium text-sm hover:border-certifyd-blue/40 transition-colors"
              >
                Generate Compliance Report
              </button>
            </div>
          </>
        )}

        {/* ── Employee Detail ── */}
        {view === "employee" && selected && (
          <>
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-certifyd-blue hover:text-certifyd-blue-dark transition-colors font-heading font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Back to Dashboard
            </button>

            <div className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-heading text-xl font-bold text-text-on-light">{selected.name}</h2>
                  <p className="text-sm text-text-on-light-muted">{selected.role} &middot; {selected.department} &middot; {selected.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  {(() => {
                    const worst = worstStatus(selected.documents);
                    return (
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-medium ${statusConfig[worst].bg} ${statusConfig[worst].color}`}>
                        {statusConfig[worst].label}
                      </span>
                    );
                  })()}
                  <span className="text-xs text-text-on-light-muted font-heading">
                    {selected.documents.filter((d) => d.status === "verified").length}/{selected.documents.length} verified
                  </span>
                </div>
              </div>

              {/* Documents grid */}
              <div className="mb-6">
                <h3 className="font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider mb-3">Documents ({selected.documents.length})</h3>
                <div className="space-y-3">
                  {selected.documents.map((doc, i) => (
                    <div key={i} className="border border-warm-border rounded-sm p-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <p className="text-sm font-medium text-text-on-light">{doc.type}</p>
                          <p className="text-[10px] text-certifyd-blue font-heading font-semibold uppercase tracking-wider">{categoryConfig[doc.category].label}</p>
                        </div>
                        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-heading font-medium shrink-0 ${statusConfig[doc.status].bg} ${statusConfig[doc.status].color}`}>
                          {statusConfig[doc.status].label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-6 gap-y-1">
                        <div>
                          <span className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Uploaded: </span>
                          <span className="text-xs text-text-on-light">{formatDate(doc.uploadedDate)}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Expires: </span>
                          <span className={`text-xs ${doc.status === "expired" ? "text-red-500 font-medium" : (daysUntil(doc.expiryDate) ?? 999) <= 30 ? "text-accent-warning font-medium" : "text-text-on-light"}`}>
                            {doc.expiryDate ? formatDate(doc.expiryDate) : "No expiry"}
                            {doc.expiryDate && daysUntil(doc.expiryDate) !== null && (
                              <span className="ml-1">
                                ({daysUntil(doc.expiryDate)! <= 0 ? "overdue" : `${daysUntil(doc.expiryDate)} days`})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chase history */}
              <div className="mb-6">
                <h3 className="font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider mb-3">Chase History</h3>
                {selected.chaseHistory.length > 0 ? (
                  <div className="space-y-2">
                    {selected.chaseHistory.map((ch, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[11px] text-text-on-light-muted font-heading shrink-0 w-20">{formatDate(ch.date)}</span>
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            ch.event.toLowerCase().includes("expired") || ch.event.toLowerCase().includes("urgent") ? "bg-red-500" :
                            ch.event.toLowerCase().includes("reminder") || ch.event.toLowerCase().includes("escalat") ? "bg-accent-warning" :
                            ch.event.toLowerCase().includes("uploaded") || ch.event.toLowerCase().includes("verified") ? "bg-accent-success" :
                            "bg-certifyd-blue"
                          }`} />
                          <span className="text-sm text-text-on-light">{ch.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-text-on-light-muted">No chase history. Upload link has not been sent.</p>
                )}
              </div>

              {/* Scheduled reminders */}
              {selected.scheduledReminders.length > 0 && (
                <div>
                  <h3 className="font-heading text-xs font-semibold text-certifyd-blue uppercase tracking-wider mb-3">
                    Upcoming Reminders
                  </h3>
                  <div className="space-y-2 bg-certifyd-blue/5 border border-certifyd-blue/15 rounded-sm p-4">
                    {selected.scheduledReminders.map((r, i) => {
                      const days = daysUntil(r.date);
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-[11px] text-text-on-light-muted font-heading shrink-0 w-20">{formatDate(r.date)}</span>
                          <div className="flex items-center gap-2 flex-1">
                            <svg className="w-3.5 h-3.5 text-certifyd-blue shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="text-sm text-text-on-light">{r.label}</span>
                          </div>
                          <span className="text-[10px] text-certifyd-blue font-heading font-medium shrink-0">
                            in {days} day{days !== 1 ? "s" : ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-dark transition-colors">
                Send Chase Email
              </button>
              {worstStatus(selected.documents) === "verified" && (
                <button className="px-5 py-2.5 bg-white border border-warm-border text-text-on-light rounded-sm font-heading font-medium text-sm hover:border-certifyd-blue/40 transition-colors">
                  Mark All as Reviewed
                </button>
              )}
            </div>
          </>
        )}

        {/* ── Compliance Report ── */}
        {view === "report" && (
          <>
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-certifyd-blue hover:text-certifyd-blue-dark transition-colors font-heading font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Back to Dashboard
            </button>

            <div className="bg-white border border-warm-border rounded-sm max-w-3xl">
              {/* Report header */}
              <div className="border-b border-warm-border p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading text-lg font-bold text-text-on-light">Workforce Compliance Report</h2>
                    <p className="text-xs text-text-on-light-muted mt-1">Generated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} at {new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}</p>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-heading font-medium ${score >= 80 ? "bg-accent-success/15 text-accent-success" : score >= 60 ? "bg-accent-warning/15 text-accent-warning" : "bg-red-500/15 text-red-500"}`}>
                    {score >= 80 ? "Audit-Ready" : score >= 60 ? "Needs Attention" : "At Risk"}
                  </span>
                </div>
                <p className="text-sm text-text-on-light-muted">Organisation: <span className="font-medium text-text-on-light">Sunrise Care Ltd</span></p>
              </div>

              {/* Summary */}
              <div className="border-b border-warm-border p-6 lg:p-8">
                <h3 className="font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider mb-4">Summary</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="font-heading text-2xl font-bold text-text-on-light">{employees.length}</p>
                    <p className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Employees</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-text-on-light">{docCounts.total}</p>
                    <p className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Documents Tracked</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-accent-success">{docCounts.verified}</p>
                    <p className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Verified ({Math.round((docCounts.verified / docCounts.total) * 100)}%)</p>
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold text-red-500">{docCounts.expired + docCounts.missing}</p>
                    <p className="text-[10px] text-text-on-light-muted uppercase tracking-wider">Action Required</p>
                  </div>
                </div>

                {/* Category breakdown */}
                <h3 className="font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider mb-3">By Category</h3>
                <div className="space-y-2">
                  {(["rtw", "dbs", "training", "professional", "licence"] as DocCategory[]).map((cat) => {
                    const catDocs = allDocs.filter((d) => d.category === cat);
                    if (catDocs.length === 0) return null;
                    const catVerified = catDocs.filter((d) => d.status === "verified").length;
                    const catPct = Math.round((catVerified / catDocs.length) * 100);
                    return (
                      <div key={cat} className="flex items-center gap-3">
                        <span className="text-xs font-heading font-medium text-text-on-light w-36 shrink-0">{categoryConfig[cat].label}</span>
                        <div className="flex-1 h-2 bg-warm-white rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${catPct === 100 ? "bg-accent-success" : catPct >= 70 ? "bg-certifyd-blue" : "bg-accent-warning"}`} style={{ width: `${catPct}%` }} />
                        </div>
                        <span className="text-xs text-text-on-light-muted font-heading w-16 text-right">{catVerified}/{catDocs.length}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expiring soon */}
              {expiringSoon.length > 0 && (
                <div className="border-b border-warm-border p-6 lg:p-8">
                  <h3 className="font-heading text-xs font-semibold text-accent-warning uppercase tracking-wider mb-3">Expiring Within 60 Days</h3>
                  <div className="space-y-1">
                    {expiringSoon.map((d, i) => (
                      <p key={i} className="text-sm text-text-on-light">
                        <span className="font-medium">{d.employeeName}</span> — {d.type}
                        <span className="text-[10px] text-text-on-light-muted ml-1">({categoryConfig[d.category].short})</span>
                        — expires {formatDate(d.expiryDate)}
                        <span className="text-accent-warning font-medium"> ({daysUntil(d.expiryDate)} days)</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Full employee list */}
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-xs font-semibold text-text-on-light-muted uppercase tracking-wider mb-4">Employee Details</h3>
                <div className="space-y-4">
                  {employees.map((e) => (
                    <div key={e.id}>
                      <p className="text-sm font-medium text-text-on-light mb-1">
                        {e.name} <span className="font-normal text-text-on-light-muted">— {e.role}, {e.department}</span>
                      </p>
                      <div className="ml-4 space-y-0.5">
                        {e.documents.map((d, i) => (
                          <p key={i} className="text-xs">
                            <span className="text-text-on-light-muted">{categoryConfig[d.category].short}:</span>{" "}
                            <span className="text-text-on-light">{d.type}</span>{" "}
                            <span className={statusConfig[d.status].color}>— {statusConfig[d.status].label}</span>
                            {d.expiryDate && <span className="text-text-on-light-muted"> — {formatDate(d.expiryDate)}</span>}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="px-5 py-2.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-dark transition-colors">
                Download PDF
              </button>
              <button className="px-5 py-2.5 bg-white border border-warm-border text-text-on-light rounded-sm font-heading font-medium text-sm hover:border-certifyd-blue/40 transition-colors">
                Print
              </button>
            </div>
          </>
        )}

        {/* ── Send Upload Link ── */}
        {view === "send-link" && (
          <>
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-certifyd-blue hover:text-certifyd-blue-dark transition-colors font-heading font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Back to Dashboard
            </button>

            <div className="bg-white border border-warm-border rounded-sm p-6 lg:p-8 max-w-2xl">
              <h2 className="font-heading text-lg font-bold text-text-on-light mb-2">Send Upload Links</h2>
              <p className="text-sm text-text-on-light-muted mb-6">
                Send secure document upload links to employees with pending, expired, or missing compliance documents.
              </p>

              {!linkSent ? (
                <>
                  <div className="border border-warm-border rounded-sm divide-y divide-warm-border mb-6">
                    {employees.filter((e) => e.documents.some((d) => d.status !== "verified")).map((e) => {
                      const outstanding = e.documents.filter((d) => d.status !== "verified");
                      return (
                        <div key={e.id} className="px-4 py-3">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-medium text-text-on-light">{e.name}</p>
                            <span className="text-[10px] text-accent-warning font-heading font-medium">{outstanding.length} outstanding</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {outstanding.map((d, i) => (
                              <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded font-heading font-medium ${statusConfig[d.status].bg} ${statusConfig[d.status].color}`}>
                                {d.type}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => setLinkSent(true)}
                    className="px-5 py-2.5 bg-certifyd-blue text-white rounded-sm font-heading font-medium text-sm hover:bg-certifyd-blue-dark transition-colors"
                  >
                    Send {employees.filter((e) => e.documents.some((d) => d.status !== "verified")).length} Upload Links
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-accent-success/10 border border-accent-success/20 rounded-sm">
                  <svg className="w-5 h-5 text-accent-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-text-on-light">Upload links sent successfully</p>
                    <p className="text-[11px] text-text-on-light-muted">Each employee will receive a personalised link for their outstanding documents.</p>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
      </div>
    </BrowserFrame>
  );
}

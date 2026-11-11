import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { ALL_ROLES, PUBLISHED_ROLES, SECTOR_NAMES, SECTOR_ORDER, isIndexed, isReviewed, showDraftBanner } from "@/lib/regulations";
import { GUIDES } from "@/data/regulations/guides";
import { REGULATIONS_LIVE, SHOW_REGULATION_DRAFTS } from "@/lib/site";
import { DemoButton } from "@/components/site/Buttons";
import { RoleSearch } from "@/components/site/RoleSearch";

const anyIndexed = ALL_ROLES.some(isIndexed);
const base = pageMetadata(
  "What checks does this job need? UK regulations library | Certifyd",
  "The checks every role needs before starting work in the UK, from right to work and DBS to professional registers and licences, with the official source for each.",
  "/regulations/",
);
// The hub stays out of search until at least one role page is indexed.
export const metadata: Metadata = anyIndexed ? base : { ...base, robots: { index: false, follow: true } };

export default function Regulations() {
  const guides = GUIDES.filter((g) => g.status === "reviewed" || SHOW_REGULATION_DRAFTS);
  const checks = guides.filter((g) => g.kind === "check");
  const changes = guides.filter((g) => g.kind === "change");
  const sectors = SECTOR_ORDER.map((k) => ({ key: k, name: SECTOR_NAMES[k], roles: PUBLISHED_ROLES.filter((r) => r.sector_key === k), all: ALL_ROLES.filter((r) => r.sector_key === k) }));
  return (
    <div className="cd page">
      <section aria-labelledby="lib-title" className="section on-paper" style={{ paddingBottom: 64 }}>
        <div className="wrap stack gap-24">
          <p className="eyebrow">Regulations library</p>
          <h1 id="lib-title" className="h1">What checks does this job need?</h1>
          <p className="lead">Pick a job to see the checks it needs before someone starts work in the UK. That covers right to work, DBS (criminal record) checks, official registers and licences. Each check links to the official source.</p>
          {PUBLISHED_ROLES.length > 0 && <RoleSearch roles={PUBLISHED_ROLES.map((r) => ({ slug: r.slug, role: r.role, aliases: r.aliases, sector: r.sector }))} />}
          {SHOW_REGULATION_DRAFTS && !REGULATIONS_LIVE && !anyIndexed && <p className="banner-draft" role="note"><strong>Preview.</strong> All {ALL_ROLES.length} role guides are drafts waiting for review. The live site shows only reviewed guides.</p>}
        </div>
      </section>

      <section aria-labelledby="roles-title" className="section on-white">
        <div className="wrap stack gap-40">
          <div className="head-row"><h2 id="roles-title" className="h2">Checklists for {ALL_ROLES.length} jobs in {sectors.length} industries.</h2></div>
          {sectors.map((s) => (
            <div key={s.key} id={s.key} className="stack gap-16">
              <h3 className="h3">{s.name} <span className="note-line">· {s.all.length} roles</span></h3>
              <div className="grid-4" style={{ gap: 12 }}>
                {s.roles.length > 0
                  ? s.roles.map((r) => <Link key={r.slug} href={`/regulations/${r.slug}/`} className="card-flat stack gap-6" style={{ padding: 16, textDecoration: "none", color: "#0F1A2B" }}><strong style={{ fontSize: 16 }}>{r.role}</strong><span className="note-line">{r.regulator}{showDraftBanner(isReviewed(r)) ? " · draft" : ""}</span></Link>)
                  : s.all.slice(0, 8).map((r) => <div key={r.slug} className="card-flat stack gap-6" style={{ padding: 16 }}><strong style={{ fontSize: 16 }}>{r.role}</strong><span className="note-line">In review</span></div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {(checks.length > 0 || changes.length > 0) && (
        <section aria-labelledby="checks-title" className="section">
          <div className="wrap grid-2" style={{ alignItems: "start" }}>
            {checks.length > 0 && <div className="stack gap-16"><p className="eyebrow">Checks</p><h2 id="checks-title" className="h2">What each check is, and what to keep.</h2><div className="card-flat" style={{ padding: "8px 24px" }}>{checks.map((g) => <Link key={g.slug} href={`/regulations/checks/${g.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}><strong style={{ flex: 1 }}>{g.title}</strong><span aria-hidden="true">→</span></Link>)}</div></div>}
            {changes.length > 0 && <div className="stack gap-16"><p className="eyebrow">What changed</p><h2 className="h2">New rules that change your checks.</h2><div className="stack gap-12">{changes.map((g) => <Link key={g.slug} href={`/regulations/changes/${g.slug}/`} className="card-flat pad stack gap-8" style={{ textDecoration: "none", color: "#0F1A2B" }}><span className="note-line">{g.date}</span><h3 className="h4">{g.title}</h3><p className="small">{g.lead}</p></Link>)}</div></div>}
          </div>
        </section>
      )}

      <section aria-labelledby="tools-title" className="section on-blue">
        <div className="wrap grid-2" style={{ alignItems: "stretch" }}>
          <div className="card stack gap-12" style={{ padding: 32 }}><p className="eyebrow">Free guides</p><h2 id="tools-title" className="h3">Checklists your team can use today</h2><p className="body">Our right-to-work guide, plus checklists for the records the Fair Work Agency expects and the proof to keep for each worker you place.</p><div className="btn-row"><Link href="/resources/right-to-work-guide/" className="btn btn-primary">Right-to-work guide</Link><Link href="/tools/" className="btn btn-secondary">All tools</Link></div></div>
          <div className="card stack gap-12" style={{ padding: 32 }}><p className="eyebrow">Can&apos;t find the job?</p><h2 className="h3">Tell us the job title</h2><p className="body">We&apos;ll work out what it needs, and Certifyd starts collecting the documents straight away.</p><div className="btn-row"><DemoButton /></div></div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 24 }}><div className="wrap"><p className="disclaimer">This is guidance, not legal advice. Every guide shows its official sources and when it was last updated.</p></div></section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/story/metadata";
import { SEGMENTS, getSegment } from "@/data/site/segments";
import { rolesForSector } from "@/lib/regulations";
import { CtaPair, DemoButton } from "@/components/site/Buttons";
import { CloseBand } from "@/components/site/CloseBand";
import { Faqs } from "@/components/site/Faqs";
import { FilmSlot } from "@/components/site/Film";
import { Board } from "@/components/site/Illustrations";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ segment: string }> };
export function generateStaticParams() { return SEGMENTS.map((s) => ({ segment: s.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSegment((await params).segment);
  return s ? pageMetadata(s.metaTitle, s.metaDescription, `/solutions/${s.slug}/`) : {};
}

export default async function SegmentPage({ params }: Props) {
  const s = getSegment((await params).segment);
  if (!s) notFound();
  const roles = rolesForSector(s.sector).slice(0, 8);
  return (
    <div className="cd page">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Who it's for", href: "/solutions/" }, { name: s.crumb, href: `/solutions/${s.slug}/` }]} />

      <section aria-labelledby="seg-title" className="section on-paper" style={{ paddingTop: 48 }}>
        <div className="wrap split">
          <div className="text" style={{ gap: 22 }}>
            <nav aria-label="Breadcrumb"><ol className="crumbs"><li><Link href="/solutions/">Who it&apos;s for</Link></li><li aria-hidden="true">/</li><li aria-current="page">{s.crumb}</li></ol></nav>
            {s.eyebrow && <p className="eyebrow">{s.eyebrow}</p>}
            <h1 id="seg-title" className="h1">{s.title}</h1>
            <p className="lead">{s.lead}</p>
            <CtaPair />
          </div>
          <div className="visual">{s.hero.kind === "film" ? <FilmSlot film={s.hero.film} /> : <Board eyebrow={s.hero.eyebrow} title={s.hero.title} rows={s.hero.rows} tiles={s.hero.tiles} />}</div>
        </div>
      </section>

      <section aria-labelledby="week-title" className="section on-white">
        <div className="wrap stack gap-32">
          <h2 id="week-title" className="h2">{s.week.title}</h2>
          <div className="grid-2">
            <div className="card-flat card-muted pad stack gap-6"><p className="eyebrow" style={{ color: "#4F5A6B", marginBottom: 8 }}>Today</p>{s.week.today.map((x) => <div key={x} className="row"><span className="status bad" aria-hidden="true">✕</span><span>{x}</span></div>)}</div>
            <div className="card card-strong pad stack gap-6"><p className="eyebrow" style={{ marginBottom: 8 }}>With Certifyd</p>{s.week.with.map((x) => <div key={x} className="row"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></div>)}</div>
          </div>
        </div>
      </section>

      {s.steps && (
        <section aria-labelledby="steps-title" className="section">
          <div className="wrap stack gap-32">
            <div className="stack gap-12"><p className="eyebrow">{s.steps.eyebrow}</p><h2 id="steps-title" className="h2">{s.steps.title}</h2></div>
            <ol className="plain grid-3" style={{ gap: 16 }}>{s.steps.items.map((x, i) => <li key={x.title} className={`${i === s.steps!.items.length - 1 ? "card card-strong" : "card-flat"} pad stack gap-8`}><span className="num">{x.who}</span><h3 className="h4">{x.title}</h3><p className="small">{x.body}</p></li>)}</ol>
          </div>
        </section>
      )}

      {s.standards && (
        <section aria-labelledby="std-title" className={`section ${s.steps ? "on-white" : ""}`}>
          <div className="wrap split" style={{ alignItems: "flex-start" }}>
            <div className="text"><p className="eyebrow">{s.standards.eyebrow}</p><h2 id="std-title" className="h2">{s.standards.title}</h2><p className="body">{s.standards.body}</p>{s.standards.source && <a href={s.standards.source.href} className="small">Source: {s.standards.source.title}</a>}{s.standards.link && <Link href={s.standards.link} className="btn btn-ghost self-start">See the checks for each job →</Link>}</div>
            <div className="visual">
              {s.standards.numbered
                ? <div className="grid-2" style={{ gap: 12 }}>{s.standards.items.map((x, i) => <div key={x} className="card-flat" style={{ padding: "16px 18px", display: "flex", gap: 12, alignItems: "center" }}><span className="num">{i + 1}</span><strong>{x}</strong></div>)}</div>
                : <div className="card-flat" style={{ padding: "8px 24px" }}><p className="eyebrow" style={{ color: "#4F5A6B", margin: "14px 0 6px" }}>What you need for every worker</p>{s.standards.items.map((x) => <div key={x} className="row"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></div>)}</div>}
            </div>
          </div>
        </section>
      )}

      {s.roles && (
        <section aria-labelledby="roles-title" className={`section ${s.standards && !s.steps ? "on-white" : ""}`}>
          <div className="wrap stack gap-28">
            <h2 id="roles-title" className="h2">{s.roles.title}</h2>
            <div className={s.roles.cards.length > 4 ? "grid-3" : "grid-4"} style={{ gap: 16 }}>
              {s.roles.cards.map((c) => <div key={c.name} className="card-flat pad stack gap-6"><h3 className="h4" style={{ marginBottom: 6 }}>{c.name}</h3>{c.note && <p className="note-line" style={{ margin: 0 }}>{c.note}</p>}{c.items.length === 1 ? <p className="small">{c.items[0]}</p> : c.items.map((x) => <div key={x} className="row"><span>{x}</span></div>)}</div>)}
            </div>
            <p className="body">{s.roles.footer}</p>
            {roles.length > 0 && <div className="stack gap-10"><p className="eyebrow">Checklists by job</p><div className="btn-row" style={{ gap: 8 }}>{roles.map((r) => <Link key={r.slug} href={`/regulations/${r.slug}/`} className="tag tag-plain" style={{ fontSize: 13, padding: "8px 10px", textDecoration: "none" }}>{r.role}</Link>)}<Link href="/regulations/" className="btn btn-ghost">All jobs →</Link></div></div>}
          </div>
        </section>
      )}

      {s.rules && (
        <section aria-labelledby="rules-title" className="section on-white">
          <div className="wrap stack gap-28">
            <h2 id="rules-title" className="h2">{s.rules.title}</h2>
            <div className="grid-3">{s.rules.cards.map((c) => <div key={c.title} className="card-flat pad stack gap-8"><span className="note-line">{c.label}</span><h3 className="h4">{c.title}</h3><p className="small">{c.body}</p>{c.source && <a href={c.source.href} className="small" style={{ marginTop: "auto" }}>Source: {c.source.title}</a>}</div>)}</div>
            <p className="note-line">Guidance, not legal advice.</p>
          </div>
        </section>
      )}

      {s.feature && (
        <section aria-labelledby="feature-title" className="section">
          <div className="wrap split split-reverse">
            <div className="text"><p className="eyebrow">{s.feature.eyebrow}</p><h2 id="feature-title" className="h2">{s.feature.title}</h2><p className="body">{s.feature.body}</p></div>
            <div className="visual"><Board {...s.feature.board} /></div>
          </div>
        </section>
      )}

      {s.invite && (
        <section aria-labelledby="invite-title" className="section">
          <div className="wrap split">
            <div className="text"><p className="eyebrow">{s.invite.eyebrow}</p><h2 id="invite-title" className="h2">{s.invite.title}</h2><p className="body">{s.invite.body}</p><div className="btn-row"><DemoButton label="Book a demo to invite them" /></div></div>
            <div className="visual"><FilmSlot film={s.invite.film} /></div>
          </div>
        </section>
      )}

      {s.pricingNote && (
        <section aria-labelledby="note-title" className="section-tight on-white">
          <div className="wrap"><div className="card head-row" style={{ padding: 36, alignItems: "center" }}><div className="stack gap-8" style={{ flex: "1 1 460px" }}><h2 id="note-title" className="h3">{s.pricingNote.title}</h2><p className="small">{s.pricingNote.body}</p></div><Link href="/pricing/" className="btn btn-secondary">See pricing</Link></div></div>
        </section>
      )}

      <section aria-labelledby="start-title" className="section on-white">
        <div className="wrap">
          <div className="card" style={{ padding: 48, display: "flex", flexWrap: "wrap", gap: 40 }}>
            <div className="stack gap-16" style={{ flex: "1 1 400px" }}><p className="eyebrow">Getting started</p><h2 id="start-title" className="h2">{s.start.title}</h2><p className="body">{s.start.body}</p><CtaPair demoLabel="Book a 20-minute demo" /></div>
            <div className="stack" style={{ flex: "1 1 360px" }}><p className="eyebrow" style={{ color: "#4F5A6B", marginBottom: 8 }}>In your first month, you&apos;ll see</p>{s.start.outcomes.map((x) => <div key={x} className="row"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></div>)}</div>
          </div>
        </div>
      </section>

      <Faqs title={s.faqTitle} items={s.faqs} />
      <CloseBand title={s.close} />
    </div>
  );
}

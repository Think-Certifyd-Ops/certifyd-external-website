import Link from "next/link";
import type { Guide } from "@/data/regulations/guides";
import { CloseBand } from "./CloseBand";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { REGULATIONS_UPDATED, showDraftBanner } from "@/lib/regulations";

export function GuidePage({ g }: { g: Guide }) {
  const base = g.kind === "check" ? "checks" : "changes";
  const crumb = g.kind === "check" ? "Checks" : "Rule changes";
  return (
    <div className="cd page">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Regulations", href: "/regulations/" }, { name: g.title, href: `/regulations/${base}/${g.slug}/` }]} />
      <section aria-labelledby="g-title" className="section on-paper" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="wrap stack gap-20 max-920">
          <nav aria-label="Breadcrumb"><ol className="crumbs"><li><Link href="/regulations/">Regulations</Link></li><li aria-hidden="true">/</li><li>{crumb}</li><li aria-hidden="true">/</li><li aria-current="page">{g.title}</li></ol></nav>
          {showDraftBanner(g.status === "reviewed") && <p className="banner-draft" role="note"><strong>Draft for review.</strong> Written from the official sources below on 6 November 2026, but not yet checked by a person. It isn&apos;t indexed or listed on the live site.</p>}
          {g.date && <p className="eyebrow">{g.date}</p>}
          <h1 id="g-title" className="h1">{g.h1}</h1>
          <p className="lead">{g.lead}</p>
          <div className="in-short" role="note"><strong>In short</strong><p>{g.inShort}</p></div>
        </div>
      </section>
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap stack gap-24 max-920">
          {g.sections.map((s) => (
            <div key={s.h} className="card-flat pad-lg stack gap-12">
              <h2 className="h3">{s.h}</h2>
              {s.p?.map((x) => <p key={x} className="body">{x}</p>)}
              {s.list && <ul className="plain">{s.list.map((x) => <li key={x} className="row row-top"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></li>)}</ul>}
            </div>
          ))}
          <div className="stack gap-8"><h2 className="h4">Official sources</h2><ul className="plain stack gap-6">{g.sources.map((s) => <li key={s.href}><a href={s.href}>{s.title}</a></li>)}</ul></div>
          <p className="disclaimer">{g.status === "reviewed" ? "" : `Updated ${REGULATIONS_UPDATED}. `}This is guidance, not legal advice. Your organisation is still responsible for its own decisions.</p>
        </div>
      </section>
      <CloseBand title="Keep every worker's checks up to date." />
    </div>
  );
}

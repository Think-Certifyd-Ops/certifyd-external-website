import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/story/metadata";
import { BASELINE, PUBLISHED_ROLES, SEGMENT_FOR_SECTOR, TYPE_CLASS, getRole, isReviewed, lawItems, relatedRoles, roleItems } from "@/lib/regulations";
import { GUIDES } from "@/data/regulations/guides";
import { SHOW_REGULATION_DRAFTS } from "@/lib/site";
import { DemoButton } from "@/components/site/Buttons";
import { FilmSlot } from "@/components/site/Film";
import { Faqs } from "@/components/site/Faqs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

type Props = { params: Promise<{ role: string }> };
export const dynamicParams = false;
// Static export needs at least one path; with no published roles the fallback renders a 404.
export function generateStaticParams() { return PUBLISHED_ROLES.length ? PUBLISHED_ROLES.map((r) => ({ role: r.slug })) : [{ role: "registered-nurse" }]; }

const article = (s: string) => (/^[aeiou]/i.test(s) ? "an" : "a");
const lower = (s: string) => s.replace(/\s*\(.*?\)\s*/g, " ").trim().replace(/^[A-Z](?![A-Z])/, (c) => c.toLowerCase());

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRole((await params).role);
  if (!r) return {};
  const name = lower(r.role);
  const meta = pageMetadata(`What checks does ${article(name)} ${name} need? | Certifyd`, `The checks ${article(name)} ${name} needs before starting work in the UK, from right to work to ${r.regulator === "None" || r.regulator.startsWith("None") ? "role training" : r.regulator + " registration"}, with the official source for each.`, `/regulations/${r.slug}/`);
  return isReviewed(r) ? meta : { ...meta, robots: { index: false, follow: true } };
}

export default async function RolePage({ params }: Props) {
  const r = getRole((await params).role);
  if (!r) notFound();
  const name = lower(r.role);
  const items = roleItems(r);
  const total = BASELINE.length + items.length;
  const related = relatedRoles(r);
  const segment = SEGMENT_FOR_SECTOR[r.sector_key];
  const checkGuides = GUIDES.filter((g) => g.kind === "check" && (g.status === "reviewed" || SHOW_REGULATION_DRAFTS));
  const rtwChange = GUIDES.find((g) => g.slug === "right-to-work-october-2026" && (g.status === "reviewed" || SHOW_REGULATION_DRAFTS));
  const faqs = [
    { q: `Does ${article(name)} ${name} need a right-to-work check?`, a: "Yes. Every worker needs a right-to-work check before they start. From 1 October 2026 that includes people on worker's contracts, individual subcontractors and people found through online platforms, for work that starts on or after that date." },
    { q: `Who regulates ${name}s?`, a: r.regulator.startsWith("None") ? `There is no statutory register for this role. ${r.regulator.includes("(") ? r.regulator.replace(/^None\s*/, "").replace(/[()]/g, "") + "." : "Checks come from the setting and the duties."}` : `${r.regulator}. Check the register before the first shift and again when the registration renews.` },
  ];
  return (
    <div className="cd page">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Regulations", href: "/regulations/" }, { name: r.role, href: `/regulations/${r.slug}/` }]} />

      <section aria-labelledby="role-title" className="section on-paper" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="wrap stack gap-20">
          <nav aria-label="Breadcrumb"><ol className="crumbs"><li><Link href="/regulations/">Regulations</Link></li><li aria-hidden="true">/</li><li><Link href={`/regulations/#${r.sector_key}`}>{r.sector}</Link></li><li aria-hidden="true">/</li><li aria-current="page">{r.role}</li></ol></nav>
          {!isReviewed(r) && <p className="banner-draft" role="note"><strong>Draft for review.</strong> This guide hasn&apos;t been checked by a person yet, so don&apos;t rely on it. It isn&apos;t indexed or listed on the live site.{r.flag ? ` Reviewer note: ${r.flag}.` : ""}</p>}
          <h1 id="role-title" className="h1">What checks does {article(name)} {name} need?</h1>
          <p className="lead">{total} checks before {article(name)} {name}&apos;s first shift in the UK, with the legal basis for each.</p>
          <div className="note-line" style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
            <span>{isReviewed(r) ? `Reviewed ${r.reviewed_on} by ${r.reviewer}` : "Not yet reviewed"}</span><span aria-hidden="true">·</span><span>Regulator: {r.regulator}</span>{r.aliases && <><span aria-hidden="true">·</span><span>Also called: {r.aliases}</span></>}
          </div>
        </div>
      </section>

      <section aria-labelledby="list-title" className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card stack gap-20" style={{ padding: 32 }}>
            <div className="head-row" style={{ alignItems: "center" }}><h2 id="list-title" className="h3">The checklist</h2><div className="btn-row" style={{ gap: 8 }}>{r.types.map((t) => <span key={t} className={`tag ${TYPE_CLASS[t]}`}>{t}</span>)}</div></div>
            <div className="grid-2" style={{ gap: "0 40px" }}>
              {[...BASELINE.map((b) => ({ name: b.name, tag: b.type })), ...items.map((x) => ({ name: x, tag: "" }))].map((x) => <div key={x.name} className="row"><span className="status ok" aria-hidden="true">✓</span><span style={{ flex: 1 }}>{x.name}</span>{x.tag && <span className={`tag ${TYPE_CLASS[x.tag]}`}>{x.tag}</span>}</div>)}
            </div>
            <p className="note-line" style={{ margin: 0 }}>Agencies also give a Key Information Document and agreed terms before finding work, and confirm qualifications under the Conduct Regulations 2003.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="law-title" className="section">
        <div className="wrap stack gap-24">
          <h2 id="law-title" className="h2">The rules behind the checklist.</h2>
          <div className="table-box"><table className="table"><thead><tr><th scope="col">Rule</th><th scope="col">Applies to</th></tr></thead><tbody>
            <tr><td><strong>Immigration, Asylum and Nationality Act 2006, as amended from 1 October 2026</strong></td><td>Right to work, for every worker</td></tr>
            <tr><td><strong>Conduct of Employment Agencies and Employment Businesses Regulations 2003</strong></td><td>Identity, qualifications and terms, when an agency supplies the worker</td></tr>
            {lawItems(r).map((l) => <tr key={l}><td><strong>{l}</strong></td><td>{r.role}</td></tr>)}
          </tbody></table></div>
          {r.nations && !r.nations.startsWith("As ") && <p className="body"><strong>Across the UK:</strong> {r.nations}.</p>}
        </div>
      </section>

      {rtwChange && (
        <section aria-labelledby="changed-title" className="section on-white">
          <div className="wrap stack gap-16 max-820">
            <p className="eyebrow">What changed</p>
            <h2 id="changed-title" className="h2">Right-to-work checks changed on 1 October 2026.</h2>
            <p className="body">Right-to-work checks now also cover worker&apos;s contracts, individual subcontractors and online platforms, for work that starts on or after that date. Digital checks must go through a registered provider, and you need to be sure the person working is the person you checked.</p>
            <Link href={`/regulations/changes/${rtwChange.slug}/`} className="btn btn-ghost self-start">Read the full change →</Link>
          </div>
        </section>
      )}

      <section aria-labelledby="sees-title" className="section">
        <div className="wrap split">
          <div className="text">
            <p className="eyebrow">How Certifyd collects it</p>
            <h2 id="sees-title" className="h2">We collect every check for you.</h2>
            <p className="body">Your {name} gets one message, replies in the app they already use, and uploads documents on a secure page. You see each check clear, and we chase anything missing.</p>
            <div className="btn-row"><DemoButton /><Link href="/how-it-works/" className="btn btn-secondary">How it works</Link></div>
          </div>
          <div className="visual"><FilmSlot film="care" chapter={{ t: "0:27", name: "Workers respond" }} /></div>
        </div>
      </section>

      <Faqs id="rfaq-title" title={`What agencies ask about ${name} checks.`} items={faqs} />

      <section aria-label="Related" className="section-tight">
        <div className="wrap grid-2">
          <div className="card-flat pad"><h2 className="h4" style={{ marginBottom: 10 }}>Related roles</h2>{related.map((x) => <Link key={x.slug} href={`/regulations/${x.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>{x.role}</Link>)}{segment && <Link href={`/solutions/${segment}/`} className="row" style={{ textDecoration: "none" }}>How Certifyd works for {r.sector.toLowerCase()} →</Link>}</div>
          <div className="card-flat pad"><h2 className="h4" style={{ marginBottom: 10 }}>Related checks</h2>{checkGuides.map((g) => <Link key={g.slug} href={`/regulations/checks/${g.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>{g.title}</Link>)}<Link href="/resources/right-to-work-guide/" className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>Right-to-work guide for employers</Link></div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 16 }}><div className="wrap"><p className="disclaimer">Guidance, not legal advice. Your organisation stays responsible for its own decisions. Check types: Law, Regulator guidance, Industry scheme (a client or sector requirement the law doesn&apos;t set) and Agency choice.</p></div></section>
    </div>
  );
}

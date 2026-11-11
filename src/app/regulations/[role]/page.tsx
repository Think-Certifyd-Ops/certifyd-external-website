import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/story/metadata";
import { BASELINE, PUBLISHED_ROLES, REGULATIONS_UPDATED, SEGMENT_FOR_SECTOR, TYPE_CLASS, getRole, isIndexed, isReviewed, lawItems, relatedRoles, roleItems, showDraftBanner } from "@/lib/regulations";
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

// "an" before a vowel sound, including letters said with one ("an HGV driver", "an SIA officer").
const article = (s: string) => (/^[aeiou]/i.test(s) || /^[AEFHILMNORSX][A-Z0-9]*\b/.test(s.split(" ")[0]) && /^[A-Z0-9]{2,}$/.test(s.split(" ")[0]) ? "an" : "a");
const lower = (s: string) => s.replace(/\s*\(.*?\)\s*/g, " ").trim().replace(/^[A-Z](?![A-Z])/, (c) => c.toLowerCase());
const joinAnd = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`);

/** Plain names for the official bodies on role pages. */
const BODY_NAMES: Record<string, string> = {
  HSE: "Health and Safety Executive", HCPC: "Health and Care Professions Council", NMC: "Nursing and Midwifery Council", SIA: "Security Industry Authority",
  CQC: "Care Quality Commission", DfE: "Department for Education", DVSA: "Driver and Vehicle Standards Agency", DVLA: "Driver and Vehicle Licensing Agency",
  GDC: "General Dental Council", DfT: "Department for Transport", FSA: "Food Standards Agency", GPhC: "General Pharmaceutical Council", GMC: "General Medical Council",
  GOC: "General Optical Council", TRA: "Teaching Regulation Agency", SGSA: "Sports Grounds Safety Authority", ORR: "Office of Rail and Road", TfL: "Transport for London",
};
function explainBody(s: string) {
  if (/^None\b/.test(s)) return s === "None" || s === "None (unregistered)" ? "No official register" : s.replace(/^None/, "No official register");
  let out = s;
  for (const [k, v] of Object.entries(BODY_NAMES)) { const re = new RegExp(`\\b${k}\\b`); if (re.test(out)) { out = out.startsWith(`${k} (`) ? out.replace(`${k} (`, `${k}, the ${v} (`) : out.replace(re, `${k} (${v})`); break; } }
  return out;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getRole((await params).role);
  if (!r) return {};
  const name = lower(r.role);
  const meta = pageMetadata(`What checks does ${article(name)} ${name} need? | Certifyd`, `The checks ${article(name)} ${name} needs before starting work in the UK, from right to work to ${r.regulator === "None" || r.regulator.startsWith("None") ? "role training" : r.regulator + " registration"}, with the official source for each.`, `/regulations/${r.slug}/`);
  return isIndexed(r) ? meta : { ...meta, robots: { index: false, follow: true } };
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
    { q: `Does ${article(name)} ${name} need a right-to-work check?`, a: "Yes. Every worker needs a right-to-work check before they start. Since 1 October 2026, this also covers subcontractors and people who find work through apps, for work that starts on or after that date." },
    { q: `Who regulates ${name}s?`, a: r.regulator.startsWith("None") ? `There is no official register for this job. ${r.regulator.includes("(") ? r.regulator.replace(/^None\s*/, "").replace(/[()]/g, "") + "." : "The checks depend on where they work and what they do."}` : `${explainBody(r.regulator)}. Check they're on the register before their first shift, and again each time their registration renews.` },
  ];
  return (
    <div className="cd page">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Regulations", href: "/regulations/" }, { name: r.role, href: `/regulations/${r.slug}/` }]} />

      <section aria-labelledby="role-title" className="section on-paper" style={{ paddingTop: 40, paddingBottom: 48 }}>
        <div className="wrap stack gap-20">
          <nav aria-label="Breadcrumb"><ol className="crumbs"><li><Link href="/regulations/">Regulations</Link></li><li aria-hidden="true">/</li><li><Link href={`/regulations/#${r.sector_key}`}>{r.sector}</Link></li><li aria-hidden="true">/</li><li aria-current="page">{r.role}</li></ol></nav>
          {showDraftBanner(isReviewed(r)) && <p className="banner-draft" role="note"><strong>Draft for review.</strong> This guide hasn&apos;t been checked by a person yet, so don&apos;t rely on it. It isn&apos;t indexed or listed on the live site.{r.flag ? ` Reviewer note: ${r.flag}.` : ""}</p>}
          <h1 id="role-title" className="h1">What checks does {article(name)} {name} need?</h1>
          <p className="lead">{article(name).replace(/^a/, "A")} {name} needs {total} checks before their first shift in the UK. Here&apos;s each one, and the law behind it.</p>
          <div className="in-short" role="note"><strong>In short</strong><p>Before {article(name)} {name} starts, check their ID and their right to work in the UK. Then check {joinAnd(items.slice(0, 3).map(lower))}.{items.length > 3 ? ` There ${items.length - 3 === 1 ? "is 1 more check" : `are ${items.length - 3} more checks`} on the list below.` : ""} Keep proof of every check, and check again when anything runs out.</p></div>
          <div className="note-line" style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
            <span>{isReviewed(r) ? `Reviewed ${r.reviewed_on} by ${r.reviewer}` : `Updated ${REGULATIONS_UPDATED}`}</span><span aria-hidden="true">·</span><span>Official body: {explainBody(r.regulator)}</span>{r.aliases && <><span aria-hidden="true">·</span><span>Also called: {r.aliases}</span></>}
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
            <p className="small" style={{ margin: 0 }}>If an agency supplies the worker, it must first give them a Key Information Document, which sums up their pay and terms. The agency must also agree terms with them and confirm their qualifications (Conduct Regulations 2003).</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="law-title" className="section">
        <div className="wrap stack gap-24">
          <h2 id="law-title" className="h2">The laws behind this checklist.</h2>
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
            <p className="body">Right-to-work checks now cover more people, including subcontractors and people who find work through apps. This applies to work that starts on or after that date. Online checks must go through a registered provider. You also need to be sure the person doing the work is the person you checked.</p>
            <Link href={`/regulations/changes/${rtwChange.slug}/`} className="btn btn-ghost self-start">Read the full change →</Link>
          </div>
        </section>
      )}

      <section aria-labelledby="sees-title" className="section">
        <div className="wrap split">
          <div className="text">
            <p className="eyebrow">How Certifyd collects it</p>
            <h2 id="sees-title" className="h2">We collect every check for you.</h2>
            <p className="body">We send your {name} one message. They reply in the app they already use and add their documents on a secure page. You see each check as it&apos;s done, and we chase anything missing.</p>
            <div className="btn-row"><DemoButton /><Link href="/how-it-works/" className="btn btn-secondary">How it works</Link></div>
          </div>
          <div className="visual"><FilmSlot film="workers" /></div>
        </div>
      </section>

      <Faqs id="rfaq-title" title={`Common questions about ${name} checks.`} items={faqs} />

      <section aria-label="Related" className="section-tight">
        <div className="wrap grid-2">
          <div className="card-flat pad"><h2 className="h4" style={{ marginBottom: 10 }}>Similar jobs</h2>{related.map((x) => <Link key={x.slug} href={`/regulations/${x.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>{x.role}</Link>)}{segment && <Link href={`/solutions/${segment}/`} className="row" style={{ textDecoration: "none" }}>How Certifyd works for {r.sector.toLowerCase()} →</Link>}</div>
          <div className="card-flat pad"><h2 className="h4" style={{ marginBottom: 10 }}>More about these checks</h2>{checkGuides.map((g) => <Link key={g.slug} href={`/regulations/checks/${g.slug}/`} className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>{g.title}</Link>)}<Link href="/resources/right-to-work-guide/" className="row" style={{ textDecoration: "none", color: "#0F1A2B" }}>Right-to-work guide for employers</Link></div>
        </div>
      </section>

      <section className="section-tight" style={{ paddingTop: 16 }}><div className="wrap"><p className="disclaimer">This is guidance, not legal advice. Your organisation is still responsible for its own decisions. The labels show where each check comes from. Law: the law says so. Regulator guidance: the official body expects it. Industry scheme: clients or the industry ask for it, but the law doesn&apos;t. Agency choice: good practice your agency picks.</p></div></section>
    </div>
  );
}

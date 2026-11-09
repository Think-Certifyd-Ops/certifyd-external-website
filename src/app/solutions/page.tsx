import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { SEGMENT_MENU } from "@/data/site/segment-menu";
import { SegmentIcons } from "@/components/site/Icons";
import { CloseBand } from "@/components/site/CloseBand";

export const metadata = pageMetadata(
  "Who Certifyd is for: teams that onboard at volume | Certifyd",
  "Certifyd is built for anyone who onboards and manages compliance for workers at volume: staffing agencies, care providers, security, hospitality and more.",
  "/solutions/",
);

export default function Solutions() {
  const groups = [
    { key: "supply", title: "If you supply workers" },
    { key: "employ", title: "If you employ workers" },
  ] as const;
  return (
    <div className="cd page">
      <section aria-labelledby="sol-title" className="section on-paper" style={{ paddingBottom: 48 }}>
        <div className="wrap stack gap-20 max-920" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <p className="eyebrow">Who it&apos;s for</p>
          <h1 id="sol-title" className="h1">If you bring on new workers every week, Certifyd is built for you.</h1>
          <p className="lead">Any role, any document. Pick your team below, or tell us the job titles you hire for and we&apos;ll set Certifyd up around them.</p>
        </div>
      </section>
      {groups.map((g) => (
        <section key={g.key} aria-labelledby={`g-${g.key}`} className="section-tight">
          <div className="wrap stack gap-20">
            <h2 id={`g-${g.key}`} className="h3">{g.title}</h2>
            <div className="grid-2" style={{ gap: 16 }}>
              {SEGMENT_MENU.filter((s) => s.group === g.key).map((s) => {
                const Icon = SegmentIcons[s.icon];
                return <Link key={s.slug} href={`/solutions/${s.slug}/`} className="seg-tile"><span className="seg-icon"><Icon /></span><span className="stack gap-6" style={{ flex: 1 }}><strong style={{ fontSize: 18 }}>{s.name}</strong><span className="small">{s.sub}.</span></span></Link>;
              })}
            </div>
          </div>
        </section>
      ))}
      <CloseBand title="Not on the list? Tell us the job title, and we'll set up its checklist with you." />
    </div>
  );
}

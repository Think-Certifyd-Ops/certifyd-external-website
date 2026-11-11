"use client";
import { useState } from "react";

type Item = { label: string; s: "V" | "C" | "R" | "E" | "W" };
const STATE = {
  V: { icon: "✓", word: "Checked", cls: "ok" },
  C: { icon: "◔", word: "Checking", cls: "pend" },
  R: { icon: "↻", word: "Chasing reference", cls: "warn" },
  E: { icon: "↻", word: "Chasing past employer", cls: "warn" },
  W: { icon: "↻", word: "Waiting on worker", cls: "warn" },
} as const;

const ROLES: { label: string; items: Item[] }[] = [
  { label: "Registered nurse", items: [{ label: "Right to work", s: "V" }, { label: "Photo ID and face match", s: "V" }, { label: "NMC register check", s: "V" }, { label: "Enhanced DBS with adults' barred list", s: "C" }, { label: "References covering 3 years", s: "R" }, { label: "Health clearance", s: "W" }, { label: "Mandatory training", s: "V" }] },
  { label: "Forklift driver", items: [{ label: "Right to work", s: "V" }, { label: "Photo ID and face match", s: "V" }, { label: "Forklift training for each truck type", s: "C" }, { label: "Written permission to drive it", s: "V" }, { label: "Site induction", s: "W" }, { label: "Two references", s: "R" }, { label: "Health declaration", s: "V" }] },
  { label: "Security officer", items: [{ label: "Right to work", s: "V" }, { label: "Photo ID and face match", s: "V" }, { label: "SIA licence check", s: "V" }, { label: "Five years of work history", s: "E" }, { label: "Basic DBS", s: "C" }, { label: "Credit check", s: "V" }, { label: "References", s: "R" }] },
  { label: "Chef", items: [{ label: "Right to work", s: "V" }, { label: "Photo ID and face match", s: "V" }, { label: "Food hygiene training", s: "V" }, { label: "Allergen awareness training", s: "W" }, { label: "Two references", s: "R" }, { label: "Health declaration", s: "V" }] },
];

export function RolePicker({ intro, after }: { intro: React.ReactNode; after: React.ReactNode }) {
  const [i, setI] = useState(0);
  const role = ROLES[i];
  const done = role.items.filter((x) => x.s === "V").length;
  const chasing = role.items.filter((x) => "REW".includes(x.s)).length;
  return (
    <div className="wrap split" style={{ alignItems: "flex-start" }}>
      <div className="text">
        {intro}
        <div role="group" aria-label="Choose a job" className="btn-row" style={{ gap: 10 }}>
          {ROLES.map((r, k) => <button key={r.label} type="button" className="pill" aria-pressed={k === i} onClick={() => setI(k)}>{r.label}</button>)}
        </div>
        {after}
      </div>
      <div className="visual"><div className="card pad stack gap-6" aria-live="polite" data-role-card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <div><p className="eyebrow" style={{ fontSize: 11 }}>Ready-made checklist</p><h3 className="h3" style={{ marginTop: 4 }}>{role.label}</h3></div>
          <span className="tag tag-demo">DEMO</span>
        </div>
        {role.items.map((it) => { const st = STATE[it.s]; return <div key={it.label} className="row"><span style={{ flex: 1 }}>{it.label}</span><span className={`status ${st.cls}`}>{st.icon} {st.word}</span></div>; })}
        <p className="note-line" style={{ margin: "10px 0 0" }}>{done} of {role.items.length} verified · we&apos;re chasing {chasing}</p>
      </div></div>
    </div>
  );
}

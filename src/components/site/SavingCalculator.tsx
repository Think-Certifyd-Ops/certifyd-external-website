"use client";
import Link from "next/link";
import { useState } from "react";
import { DEMO_HREF } from "@/lib/site";

/** COM-163: every input editable, shown as an estimate. */
export function SavingCalculator() {
  const [v, setV] = useState({ starters: 30, admin: 4, share: 75, cost: 33600, hours: 1650 });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: Number(e.target.value) });
  const fmt = (n: number) => Math.round(n).toLocaleString("en-GB");
  const saved = Math.max(0, v.starters * v.admin * (v.share / 100));
  const fte = v.hours > 0 ? (saved * 12) / v.hours : 0;
  const people = fte < 1 ? `about ${Math.round(fte * 100)}% of one person's working time` : `about ${fte.toFixed(1)} full-time people`;
  return (
    <>
      <div className="card" style={{ padding: 40, display: "flex", flexWrap: "wrap", gap: "40px 56px", alignItems: "center" }}>
        <form style={{ flex: "1.1 1 420px", minWidth: 0 }} className="stack gap-32" onSubmit={(e) => e.preventDefault()}>
          <div className="field" style={{ gap: 12 }}><label htmlFor="c-starters" style={{ fontSize: 18 }}>How many people do you onboard a month?</label><div style={{ display: "flex", alignItems: "center", gap: 20 }}><input id="c-starters" type="range" min={5} max={200} step={5} value={v.starters} onChange={set("starters")} style={{ flex: 1 }} /><span className="mono" style={{ fontSize: 30, fontWeight: 700, minWidth: 72, textAlign: "right" }}>{v.starters}</span></div></div>
          <div className="field" style={{ gap: 12 }}><label htmlFor="c-admin" style={{ fontSize: 18 }}>How many hours of paperwork does each one take today?</label><div style={{ display: "flex", alignItems: "center", gap: 20 }}><input id="c-admin" type="range" min={1} max={10} step={0.5} value={v.admin} onChange={set("admin")} style={{ flex: 1 }} /><span className="mono" style={{ fontSize: 30, fontWeight: 700, minWidth: 72, textAlign: "right" }}>{v.admin}h</span></div><span className="help">Chasing, checking and filing, across everyone who touches the file.</span></div>
        </form>
        <div aria-live="polite" className="stack gap-10" style={{ flex: "1 1 360px", minWidth: 0, background: "#E9F3FE", borderRadius: 16, padding: 32 }}>
          <p className="eyebrow">You&apos;d get back about</p>
          <p style={{ margin: 0, display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}><span className="num" style={{ fontSize: 64, lineHeight: 1 }}>{fmt(saved)}</span><span style={{ fontSize: 20, fontWeight: 600 }}>hours a month</span></p>
          <p className="body" style={{ color: "#0F1A2B" }}>That&apos;s {people}, worth about <strong>£{fmt(fte * v.cost)}</strong> a year.</p>
          <Link href={DEMO_HREF} className="btn btn-primary self-start" data-demo-cta="true" style={{ marginTop: 8 }}>Talk these numbers through with us</Link>
        </div>
      </div>
      <details className="faq">
        <summary>How we work this out</summary>
        <div className="grid-3" style={{ marginTop: 18 }}>
          <div className="field"><label htmlFor="c-share">Share of that time we take off you (%)</label><input id="c-share" type="number" min={0} max={100} step={5} value={v.share} onChange={set("share")} /><span className="help">Your team still reviews and signs off.</span></div>
          <div className="field"><label htmlFor="c-cost">Cost of one coordinator a year (£)</label><input id="c-cost" type="number" min={15000} step={500} value={v.cost} onChange={set("cost")} /><span className="help">Salary plus employer costs.</span></div>
          <div className="field"><label htmlFor="c-hours">Working hours a year, per person</label><input id="c-hours" type="number" min={1000} step={10} value={v.hours} onChange={set("hours")} /></div>
        </div>
        <p className="small" style={{ marginTop: 14 }}>An estimate from the numbers you enter. Check fees are left out, because you pay those today too.</p>
      </details>
    </>
  );
}

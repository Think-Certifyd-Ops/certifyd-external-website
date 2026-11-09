"use client";
import { useRef, useState } from "react";

export type TabDef = { n: string; label: string; sub: string };

/** Product tour tabs: buttons with role=tab, arrow keys move between them. Panels are rendered on the server. */
export function TourTabs({ tabs, panels, label }: { tabs: TabDef[]; panels: React.ReactNode[]; label: string }) {
  const [i, setI] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const move = (to: number) => { const n = (to + tabs.length) % tabs.length; setI(n); refs.current[n]?.focus(); };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
      <div role="tablist" aria-label={label} aria-orientation="vertical" style={{ flex: "0 1 330px", minWidth: 260, display: "flex", flexDirection: "column", gap: 10 }}
        onKeyDown={(e) => { if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); move(i + 1); } if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); move(i - 1); } }}>
        {tabs.map((t, k) => (
          <button key={t.label} ref={(el) => { refs.current[k] = el; }} type="button" role="tab" id={`tour-tab-${k}`} aria-controls={`tour-panel-${k}`} aria-selected={k === i} tabIndex={k === i ? 0 : -1} className="tour-tab" onClick={() => setI(k)}>
            <span className="mono">{t.n}</span><strong style={{ fontSize: 18 }}>{t.label}</strong><span className="small">{t.sub}</span>
          </button>
        ))}
      </div>
      {panels.map((p, k) => (
        <div key={k} role="tabpanel" id={`tour-panel-${k}`} aria-labelledby={`tour-tab-${k}`} hidden={k !== i} style={{ flex: "1 1 560px", minWidth: 0 }}>{p}</div>
      ))}
    </div>
  );
}

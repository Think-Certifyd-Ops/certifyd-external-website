/* Still illustrations with no server-only code, so client components (the film slot, the step picker)
   can use them. They stand in for the films until the MP4s are in /public/videos. */

export type BoardRow = { name: string; sub: string; status: string; kind: "ok" | "pend" | "warn" | "bad" };

/** A white status card on torn blue paper, used on segment pages. */
export function Board({ eyebrow, title, rows, tiles }: { eyebrow: string; title: string; rows: BoardRow[]; tiles?: { n: number; l: string; kind: "ok" | "pend" | "warn" | "bad" }[] }) {
  const icon = { ok: "✓", pend: "◔", warn: "◷", bad: "✕" } as const;
  return (
    <div className="backdrop">
      <div className="torn" />
      <div className="card pad board">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}><div><p className="eyebrow" style={{ fontSize: 11 }}>{eyebrow}</p><strong>{title}</strong></div><span className="tag tag-demo">DEMO</span></div>
        {tiles && <div style={{ display: "grid", gridTemplateColumns: `repeat(${tiles.length}, minmax(0, 1fr))`, gap: 8 }}>{tiles.map((t) => <div key={t.l} className={`tile tile-${t.kind}`}><span className="n">{t.n}</span><span className="l">{t.l}</span></div>)}</div>}
        <div>{rows.map((r) => <div key={r.name + r.sub} className="row"><div style={{ flex: 1 }}><strong>{r.name}</strong><br /><span style={{ color: "#4F5A6B", fontSize: 13 }}>{r.sub}</span></div><span className={`status ${r.kind}`}>{icon[r.kind]} {r.status}</span></div>)}</div>
      </div>
    </div>
  );
}

/** A worker's chat with Certifyd, as a card on torn blue paper. */
export function ChatStill({ eyebrow = "Worker chat" }: { eyebrow?: string }) {
  return (
    <div className="backdrop" role="img" aria-label="Illustration: Certifyd messages a new worker, who opens a secure page and completes their right-to-work check">
      <div className="torn" />
      <div className="card pad board">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}><div><p className="eyebrow" style={{ fontSize: 11 }}>{eyebrow}</p><strong>Certifyd for Northline Staffing</strong></div><span className="tag tag-demo">DEMO</span></div>
        <div className="msg">Hi Dan, Northline Staffing asked me to collect your documents for the Leeds distribution centre.</div>
        <div className="msg">First, your right to work. It opens on a secure page.<br /><span className="btn-mini">Open secure check →</span></div>
        <div className="msg msg-me">Done ✓</div>
        <p className="msg-ok">Right to work checked ✓</p>
        <div className="msg">Now a photo of your forklift certificate, front and back.</div>
      </div>
    </div>
  );
}

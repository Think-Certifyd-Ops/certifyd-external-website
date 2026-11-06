/* Illustration kit from the wireframes: navy-bezel phone, navy-bar browser window, torn blue paper,
   dashed connector. Drawn in HTML and CSS so the cards are live, not flat images.
   The square behind the connector is gone (Michael, 6 Nov). */
import { QrCode } from "./QrCode";

export type BoardRow = { name: string; sub: string; status: string; kind: "ok" | "pend" | "warn" | "bad" };

export function Connector({ left, top }: { left: number; top: number }) {
  return (
    <svg className="connector" style={{ left, top }} width="70" height="60" viewBox="0 0 70 60" aria-hidden="true">
      <path d="M2 8 C 22 6, 30 30, 40 34 S 58 44, 62 46" fill="none" stroke="#1E4FD0" strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round" />
      <path d="M56 40 L66 48 L54 52 Z" fill="#1E4FD0" />
    </svg>
  );
}

/** Hero: a worker's chat on the left, the team's shared view on the right. */
export function HeroScene({ label = "Illustration: a worker's Certifyd chat on a phone, linked to the team's shared view of every worker" }: { label?: string }) {
  return (
    <div className="ill hide-sm" style={{ height: 600 }} role="img" aria-label={label}>
      <div className="torn" style={{ left: -14, top: 80, width: 284, height: 500 }} />
      <div className="torn torn-b" style={{ right: -14, top: 150, width: 360, height: 400 }} />
      <div className="dev-phone" style={{ left: 10, top: 24, width: 236, height: 548 }}>
        <div className="dev-screen">
          <div className="dev-app"><strong>Certifyd</strong><span>for Northline Staffing</span></div>
          <div className="msg arrive">Hi Dan, Northline Staffing asked me to collect your documents for the Leeds distribution centre.</div>
          <div className="msg arrive" style={{ animationDelay: "600ms" }}>First, your right to work. It opens on a secure page.<br /><span className="btn-mini">Open secure check →</span></div>
          <div className="msg msg-me arrive" style={{ animationDelay: "1200ms" }}>Done ✓</div>
          <p className="msg-ok arrive" style={{ animationDelay: "1600ms" }}>Right to work checked ✓</p>
          <div className="msg arrive" style={{ animationDelay: "2000ms" }}>Now a photo of your forklift certificate, front and back.</div>
          <p style={{ margin: "auto 0 0", textAlign: "center", fontSize: 12, color: "#4F5A6B" }}>Reply on WhatsApp, text or email</p>
        </div>
      </div>
      <Connector left={252} top={236} />
      <div className="dev-window" style={{ right: 8, top: 170, width: 330 }}>
        <div className="dev-bar"><i /><i /><i /></div>
        <div className="dev-body">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}><p className="dev-title">Every worker, every site, on the record.</p><span className="tag tag-demo">DEMO</span></div>
          <div>
            <div className="mrow"><span className="avatar">JT</span><span className="mrow-name"><strong>Jamie Taylor</strong><span>Nurse · Willowbank</span></span><span className="st st-ok">Cleared</span></div>
            <div className="mrow"><span className="avatar">DP</span><span className="mrow-name"><strong>Dan Price</strong><span>Forklift · Leeds DC</span></span><span className="st st-pend">Checking</span></div>
            <div className="mrow"><span className="avatar">AK</span><span className="mrow-name"><strong>Amira Khan</strong><span>Security · Riverside</span></span><span className="st st-warn">Licence due</span></div>
          </div>
          <p style={{ margin: 0, fontSize: 13, color: "#4F5A6B" }}>Shared with recruitment, compliance and the site.</p>
        </div>
      </div>
    </div>
  );
}

/** The chase: documents scattered across chats, inboxes and paper. */
export function ChaseScene() {
  return (
    <div className="scatter" role="img" aria-label="Illustration: the same worker's documents scattered across a chat, an inbox and a paper file, each asking which version is the latest">
      <div className="torn" style={{ inset: "40px 20px 30px 40px" }} />
      <div className="card pad" style={{ left: "6%", top: 30, width: 270, transform: "rotate(-4deg)" }}>
        <p className="note-line" style={{ margin: "0 0 8px" }}>WhatsApp · consultant&apos;s phone</p>
        <div className="msg">passport_photo(2).jpg</div>
        <div className="msg msg-me" style={{ marginTop: 8 }}>Is this the latest one?</div>
      </div>
      <div className="card pad" style={{ right: "4%", top: 120, width: 290, transform: "rotate(3deg)" }}>
        <p className="note-line" style={{ margin: "0 0 8px" }}>Inbox · compliance@</p>
        <div className="row"><span style={{ flex: 1 }}>RE: RE: FW: DBS cert</span><span className="note-line">3 versions</span></div>
        <div className="row"><span style={{ flex: 1 }}>Training certs (final)</span><span className="status warn">Expired</span></div>
      </div>
      <div className="card pad" style={{ left: "16%", bottom: 40, width: 300, transform: "rotate(-1.5deg)" }}>
        <p className="note-line" style={{ margin: "0 0 8px" }}>Paper file · branch office</p>
        <div className="row"><span style={{ flex: 1 }}>Reference 2</span><span className="status bad">Missing</span></div>
        <div className="row"><span style={{ flex: 1 }}>Right to work</span><span className="status pend">Which date?</span></div>
      </div>
    </div>
  );
}

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

/** A worker's pass with a real QR code. */
export async function PassCard({ initials, name, role, org, status, qrLabel, compact = false }: { initials: string; name: string; role: string; org: string; status: string; qrLabel: string; compact?: boolean }) {
  return (
    <div className="dev-phone static" style={{ width: compact ? 250 : 280, minHeight: 430, boxShadow: "0 0 0 2px #8FB0FF" }}>
      <div className="dev-screen" style={{ alignItems: "center", textAlign: "center", gap: 12 }}>
        <div className="dev-app" style={{ width: "100%", textAlign: "left" }}><strong>Your pass</strong><span>{org}</span></div>
        <span className="avatar" style={{ width: 56, height: 56, fontSize: 16 }}>{initials}</span>
        <strong style={{ fontSize: 17 }}>{name}</strong>
        <span className="small" style={{ marginTop: -8 }}>{role}</span>
        <QrCode value="https://certifyd.io/how-it-works/" label={qrLabel} size={136} />
        <span className="st st-ok">{status}</span>
        <span className="small" style={{ fontSize: 12.5 }}>Live code. It refreshes, so a screenshot won&apos;t work.</span>
      </div>
    </div>
  );
}

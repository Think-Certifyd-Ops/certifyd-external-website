"use client";
import { useState } from "react";
import { FILMS, type FilmKey } from "@/lib/site";
import { FilmSlot } from "./Film";
import { Board, ChatStill, type BoardRow } from "./Stills";

const STEPS: { n: string; name: string; body: string; film?: FilmKey }[] = [
  { n: "01", name: "You ask once", body: "Pick the job and invite your worker. We send them one message with a secure link, by WhatsApp, text or email.", film: "askOnce" },
  { n: "02", name: "Your worker replies", body: "They answer in the app they already use, in their own language. They add their ID on a secure page, never in the chat.", film: "workers" },
  { n: "03", name: "We chase, you see who needs you", body: "We chase anything missing, as often as you choose. You see who is cleared, and who needs a person to look." },
  { n: "04", name: "Reception checks the person", body: "Reception scans the worker's pass with a phone camera, checks their face matches the photo, and saves the check-in.", film: "door" },
  { n: "05", name: "You're ready for inspection", body: "Every message, document, check and decision is saved. Download one worker's file, or everyone's, in one click.", film: "audit" },
];

/** Pictures for each step until the film is in. */
const STILL_ROWS: Record<string, { eyebrow: string; title: string; rows: BoardRow[] }> = {
  "01": { eyebrow: "New worker", title: "Dan Price · Forklift driver", rows: [
    { name: "Checklist", sub: "Forklift driver, Leeds distribution centre", status: "8 checks", kind: "ok" },
    { name: "Invite sent", sub: "WhatsApp, Mon 09:01", status: "Sent", kind: "ok" },
    { name: "Worker reply", sub: "Waiting for Dan", status: "Waiting", kind: "pend" },
  ] },
  "03": { eyebrow: "Needs a person", title: "2 of 24 workers this week", rows: [
    { name: "Amira Khan", sub: "Security · SIA licence runs out in 12 days", status: "Due soon", kind: "warn" },
    { name: "Tom Hughes", sub: "Care · Reference 2 not returned", status: "Chasing", kind: "pend" },
    { name: "22 other workers", sub: "Every check cleared", status: "Cleared", kind: "ok" },
  ] },
  "04": { eyebrow: "At reception", title: "Riverside site · Mon 07:52", rows: [
    { name: "Pass scanned", sub: "Dan Price · Forklift driver", status: "Valid", kind: "ok" },
    { name: "Face check", sub: "Matches the profile photo", status: "Matched", kind: "ok" },
    { name: "Check-in", sub: "Recorded by reception", status: "On record", kind: "ok" },
  ] },
  "05": { eyebrow: "Worker file", title: "Jamie Taylor · Registered nurse", rows: [
    { name: "Right to work", sub: "Checked 3 Nov 2026, face match passed", status: "Cleared", kind: "ok" },
    { name: "NMC register", sub: "Active, no conditions", status: "Cleared", kind: "ok" },
    { name: "DBS", sub: "Update Service, no change", status: "Cleared", kind: "ok" },
    { name: "Training", sub: "Next expiry March 2027, reminder set", status: "Cleared", kind: "ok" },
  ] },
};

export function StepPicker() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
      <ol className="plain stack gap-10" style={{ flex: "1 1 340px", minWidth: 0 }}>
        {STEPS.map((x, k) => (
          <li key={x.n}>
            <button type="button" className="step-btn" aria-pressed={k === i} onClick={() => setI(k)}>
              <span className="step-head"><span className="num">{x.n}</span><strong>{x.name}</strong>{x.film && FILMS[x.film].available && <span className="note-line">▶ {FILMS[x.film].length}</span>}</span>
              {k === i && <span style={{ fontSize: 16, lineHeight: 1.5, color: "#3C4657" }}>{x.body}</span>}
            </button>
          </li>
        ))}
      </ol>
      <div style={{ flex: "1.4 1 520px", minWidth: 0 }}>{s.film ? <FilmSlot key={s.film} film={s.film} still={STILL_ROWS[s.n] ? <Board {...STILL_ROWS[s.n]} /> : <ChatStill />} /> : <Board {...STILL_ROWS[s.n]} />}</div>
    </div>
  );
}

type Who = "you" | "us" | "worker";
const LOG: { when: string; who: Who; text: string }[] = [
  { when: "Mon 09:00", who: "you", text: "Invite Jamie as a registered nurse for Willowbank Care Home." },
  { when: "Mon 09:01", who: "us", text: "Messages Jamie on WhatsApp with a secure link." },
  { when: "Mon 09:12", who: "worker", text: "Adds a passport and share code on the secure page." },
  { when: "Mon 09:13", who: "us", text: "Runs the right-to-work check and photo match. Passed." },
  { when: "Mon 09:15", who: "us", text: "Checks the NMC register. Active, no conditions." },
  { when: "Mon 09:20", who: "worker", text: "Agrees to a DBS Update Service check." },
  { when: "Mon 09:21", who: "us", text: "Runs the Update Service check. No change." },
  { when: "Mon 09:30", who: "us", text: "Emails both people giving references." },
  { when: "Tue 10:00", who: "us", text: "Reminds the one who hasn't replied." },
  { when: "Tue 14:05", who: "worker", text: "Uploads training certificates." },
  { when: "Tue 14:06", who: "us", text: "Reads the end dates and sets reminders." },
  { when: "Wed 11:40", who: "us", text: "Second reference arrives. Jamie is ready for your team to review." },
  { when: "Wed 16:20", who: "you", text: "Check the file and clear Jamie for Monday's shift." },
];
const TAG: Record<Who, { label: string; style: React.CSSProperties }> = {
  you: { label: "Your team", style: { background: "#0F1A2B", color: "#FFFFFF" } },
  us: { label: "Certifyd", style: { background: "#0059FF", color: "#FFFFFF" } },
  worker: { label: "Jamie", style: { background: "#FFFFFF", color: "#0F1A2B", border: "1px solid #0F1A2B" } },
};

export function CaseLog() {
  const [who, setWho] = useState<"all" | Who>("all");
  const feed = LOG.filter((e) => who === "all" || e.who === who);
  const count = (w: Who) => LOG.filter((e) => e.who === w).length;
  const filters: { key: "all" | Who; label: string }[] = [{ key: "all", label: "Everything" }, { key: "you", label: "Your team" }, { key: "us", label: "Certifyd" }, { key: "worker", label: "Jamie" }];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>
      <div className="card stack gap-16" style={{ flex: "1.7 1 560px", minWidth: 0, padding: "28px 32px" }}>
        <div className="head-row" style={{ alignItems: "center" }}><div><p className="eyebrow" style={{ fontSize: 11 }}>Example case</p><strong style={{ fontSize: 17 }}>Jamie Taylor, registered nurse, for Willowbank Care Home</strong></div><span className="tag tag-demo">DEMO</span></div>
        <div role="group" aria-label="Show actions by" className="btn-row" style={{ gap: 8 }}>{filters.map((f) => <button key={f.key} type="button" className="pill" aria-pressed={f.key === who} style={{ minHeight: 40, fontSize: 14 }} onClick={() => setWho(f.key)}>{f.label}</button>)}</div>
        <ol className="plain" aria-live="polite">
          {feed.map((e) => (
            <li key={e.when + e.text} style={{ display: "grid", gridTemplateColumns: "92px 112px minmax(0, 1fr)", gap: 16, alignItems: "start", padding: "12px 0", borderBottom: "1px solid #E1E7F0" }}>
              <span className="note-line" style={{ paddingTop: 3 }}>{e.when}</span>
              <span><span className="tag" style={TAG[e.who].style}>{TAG[e.who].label}</span></span>
              <span style={{ fontSize: 16, lineHeight: 1.45 }}>{e.text}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="stack gap-12" style={{ flex: "1 1 280px", minWidth: 0 }}>
        <div style={{ background: "#0F1A2B", color: "#FFFFFF", borderRadius: 12, padding: "22px 24px" }} className="stack gap-6"><span className="mono" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{count("you")}</span><span style={{ fontSize: 16, fontWeight: 600 }}>things your team did</span></div>
        <div style={{ background: "#0059FF", color: "#FFFFFF", borderRadius: 12, padding: "22px 24px" }} className="stack gap-6"><span className="mono" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{count("us")}</span><span style={{ fontSize: 16, fontWeight: 600 }}>things Certifyd did</span></div>
        <div className="card-flat stack gap-6" style={{ padding: "22px 24px" }}><span className="mono" style={{ fontSize: 48, fontWeight: 700, lineHeight: 1 }}>{count("worker")}</span><span style={{ fontSize: 16, fontWeight: 600 }}>replies from Jamie</span></div>
        <p className="small">The last step is always yours. Certifyd never clears a worker for you.</p>
      </div>
    </div>
  );
}

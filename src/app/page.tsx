import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { CloseBand } from "@/components/site/CloseBand";
import { DemoButton, MessageCertifydButton } from "@/components/site/Buttons";
import { FilmBand } from "@/components/site/Film";
import { ChaseScene, HeroScene, PassCard } from "@/components/site/Illustrations";
import { RolePicker } from "@/components/site/RolePicker";
import { TourTabs } from "@/components/site/Tabs";
import { SegmentIcons } from "@/components/site/Icons";
import { SEGMENT_MENU } from "@/data/site/segment-menu";
import { ANY_FILM, CONTACT_HREF } from "@/lib/site";

export const metadata = pageMetadata(
  "Worker compliance, without the chasing | Certifyd",
  "Certifyd collects, checks and tracks everything a worker needs before they start, in one view your whole team shares. Book a 20-minute demo.",
  "/",
);

const HOME_SEGMENTS = ["healthcare-staffing", "industrial-logistics-staffing", "hospitality-events", "care-providers", "security-firms", "facilities-cleaning"];
const RTW_SOURCE = "https://www.gov.uk/government/publications/illegal-working-penalties-codes-of-practice-for-employers";

export default function Home() {
  const segs = HOME_SEGMENTS.map((slug) => SEGMENT_MENU.find((s) => s.slug === slug)!);
  return (
    <div className="cd page">
      {/* 1 Hero */}
      <section aria-labelledby="hero-title" className="on-paper" style={{ padding: "56px 0", minHeight: 720, display: "flex", alignItems: "center" }}>
        <div className="wrap wrap-wide" style={{ display: "grid", gridTemplateColumns: "minmax(0, 620px) minmax(0, 1fr)", gap: 56, alignItems: "center" }} data-hero-grid>
          <div className="stack gap-24">
            <p className="eyebrow">For agencies, care providers and employers</p>
            <h1 id="hero-title" className="h1" style={{ fontSize: "clamp(34px, 3.4vw, 46px)" }}>Every worker&apos;s documents, collected, checked and kept up to date.</h1>
            <p className="lead">We message your workers, check their documents and remind you before anything runs out. Your whole team sees it all in one place.</p>
            <div className="btn-row"><DemoButton /><Link href="/how-it-works/" className="btn btn-secondary">See how it works</Link><MessageCertifydButton /></div>
            <p className="hint">A 20-minute demo, built around the roles you hire for.</p>
          </div>
          <HeroScene />
        </div>
      </section>

      {/* 2 Who it's for: moved up to sit under the hero; the proof strip is gone (Michael) */}
      <section aria-labelledby="who-title" className="section">
        <div className="wrap stack gap-32">
          <div className="head-row">
            <div className="stack gap-12 max-780"><p className="eyebrow">Who it&apos;s for</p><h2 id="who-title" className="h2">Made for teams that take on new workers every week.</h2></div>
            <Link href="/solutions/" className="btn btn-ghost">See every team we work with →</Link>
          </div>
          <div className="grid-3" style={{ gap: 16 }}>
            {segs.map((s) => {
              const Icon = SegmentIcons[s.icon];
              return (
                <Link key={s.slug} href={`/solutions/${s.slug}/`} className="seg-tile">
                  <span className="seg-icon"><Icon /></span>
                  <span className="stack gap-6" style={{ flex: 1 }}>
                    <span className={`tag ${s.group === "supply" ? "tag-agency" : "tag-plain"}`} style={{ alignSelf: "flex-start" }}>{s.group === "supply" ? "You supply workers" : "You employ workers"}</span>
                    <strong style={{ fontSize: 18 }}>{s.name}</strong>
                    <span className="small">{s.sub}.</span>
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="body">Somewhere else? If you onboard workers at volume, <Link href={CONTACT_HREF}>contact us</Link> and we&apos;ll set Certifyd up for your roles.</p>
        </div>
      </section>

      {/* 3 The chase: sells the painkiller, not a missed shift */}
      <section aria-labelledby="chase-title" className="on-soft" style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
        <div data-chase-text style={{ flex: "1 1 520px", display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "80px 56px 80px 40px" }}>
          <div className="stack gap-24" style={{ maxWidth: 520 }}>
            <p className="eyebrow">The chase</p>
            <h2 id="chase-title" className="h2">One missing document can break the rules and cost you a client.</h2>
            <ol className="plain stack gap-16" style={{ fontSize: 18, lineHeight: 1.45 }}>
              <li style={{ display: "flex", gap: 12 }}><span aria-hidden="true" className="num">01</span>Documents land in WhatsApp chats, inboxes and paper files.</li>
              <li style={{ display: "flex", gap: 12 }}><span aria-hidden="true" className="num">02</span>An expired licence or a missing reference only shows up at audit.</li>
              <li style={{ display: "flex", gap: 12 }}><span aria-hidden="true" className="num">03</span>One gap can mean a civil penalty, a failed client audit or a contract you can&apos;t deliver.</li>
            </ol>
            <p className="small">From 1 October 2026, right-to-work checks also cover worker&apos;s contracts, individual subcontractors and online platforms, for work that starts on or after that date. Civil penalties reach up to £60,000 per illegal worker. <a href={RTW_SOURCE}>Home Office code of practice</a>.</p>
          </div>
        </div>
        <div style={{ flex: "1.2 1 560px", padding: "56px 40px" }}><ChaseScene /></div>
      </section>

      {/* 4 Film on the blue band (kept as designed). Hidden until a film is in /public/videos. */}
      {ANY_FILM && (
        <section aria-labelledby="film-title" className="section on-blue">
          <div className="wrap"><FilmBand /></div>
        </section>
      )}

      {/* 5 Ask once: templated roles */}
      <section aria-labelledby="ask-title" className="section on-white">
        <RolePicker
          intro={<>
            <p className="eyebrow">Ask once</p>
            <h2 id="ask-title" className="h2">Tell us the job. We know which checks it needs.</h2>
            <p className="body">Every common role comes as a ready-made template. Say you&apos;re hiring a nurse or a forklift driver, and Certifyd asks your worker for everything that role needs, then chases anything missing on the schedule you set.</p>
          </>}
          after={
            <div className="stack gap-12" style={{ borderTop: "1px solid #BFD3EE", paddingTop: 22, marginTop: 6 }}>
              <h3 className="h4">Hiring for a role that isn&apos;t here?</h3>
              <p className="body">Send us your checklist and we&apos;ll set it up. Starting from scratch? We&apos;ll draft one from the rules for that role, and you sign it off.</p>
              <div className="btn-row" style={{ gap: 6 }}>{["Right to work", "DBS", "NMC PIN", "SIA licence", "CSCS card", "Driver CPC", "Food hygiene", "Personal licence"].map((t) => <span key={t} className="tag tag-plain">{t}</span>)}<span className="tag tag-agency">+ whatever your roles need</span></div>
              <Link href="/regulations/" className="btn btn-ghost self-start">Look up any role in the library →</Link>
            </div>
          }
        />
      </section>

      {/* 6 Product tour: dark band */}
      <section aria-labelledby="tour-title" className="section on-ink">
        <div className="wrap stack gap-40">
          <div className="stack gap-12 max-820"><p className="eyebrow">Inside Certifyd</p><h2 id="tour-title" className="h2">Your whole team sees the same up-to-date list of every worker.</h2></div>
          <TourTabs
            label="Product tour"
            tabs={[
              { n: "01", label: "Shared view", sub: "Everyone sees the same journey" },
              { n: "02", label: "Exceptions", sub: "Only the workers who need you" },
              { n: "03", label: "Evidence", sub: "Every check, ready for an audit" },
              { n: "04", label: "At the door", sub: "One pass, scanned on any phone" },
            ]}
            panels={[<SharedView key="a" />, <Exceptions key="b" />, <Evidence key="c" />, <AtTheDoor key="d" />]}
          />
          <Link href="/how-it-works/" className="btn btn-secondary self-start">See how it works, step by step</Link>
        </div>
      </section>

      {/* 7 Security: one-colour headline, no unconfirmed claims */}
      <section aria-labelledby="safe-title" className="section">
        <div className="wrap stack gap-32">
          <div className="stack gap-12 max-820"><p className="eyebrow">Security and privacy</p><h2 id="safe-title" className="h2">We keep workers&apos; documents safe. You choose who sees them.</h2></div>
          <div className="grid-4" style={{ gap: 16 }}>
            {[
              { i: "lock", t: "Documents never go through the chat", b: "The chat only sends links. ID, passports and certificates go onto a secure, encrypted page." },
              { i: "shieldCheck", t: "Checks run through registered providers", b: "Right-to-work and identity checks use registered providers, and DBS applications go through a registered body." },
              { i: "people", t: "You decide who sees what", b: "Your team sees the documents it needs. Client sites see who's cleared, not the papers behind it." },
              { i: "clock", t: "Deleted on your schedule", b: "Set how long each record is kept. When the time's up, it's deleted and the deletion is logged." },
            ].map((c) => { const Icon = SegmentIcons[c.i as "lock"]; return <div key={c.t} className="card-flat pad stack gap-10"><span className="seg-icon"><Icon /></span><h3 className="h4">{c.t}</h3><p className="small">{c.b}</p></div>; })}
          </div>
        </div>
      </section>

      {/* 8 Close: the whole business, compliant all the time */}
      <CloseBand tone="ink" title="Be ready for any inspection, on any day." lead="Every worker, every check and every renewal date in one place. When an inspector or a client asks, you can show them straight away." contactLabel="Contact us" />
    </div>
  );
}

function SharedView() {
  const tl: [string, string, string, string][] = [
    ["Mon 09:12", "Invited by Priya in recruitment", "who-team", "Your team"], ["Mon 09:20", "Dan started the chat on WhatsApp", "who-worker", "Dan"],
    ["Mon 09:24", "Right to work checked on a secure page", "who-cd", "Certifyd"], ["Mon 09:31", "Forklift certificate uploaded and checked", "who-cd", "Certifyd"],
    ["Tue 10:05", "Second reference chased", "who-cd", "Certifyd"], ["Tue 14:40", "Signed off by Sam in compliance", "who-team", "Your team"], ["Wed 05:52", "Checked in at the Leeds gate", "who-team", "Client site"],
  ];
  return (
    <div className="stack gap-24">
      <div className="stack gap-10 max-780"><h3 className="h3">Everyone sees the same journey, as it happens.</h3><p className="body">Recruiters, compliance, branch managers and your client sites all look at one record for each worker: what&apos;s done, what&apos;s missing and who&apos;s on it. Nobody has to ask where a worker is up to.</p></div>
      <div className="card pad stack gap-6">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 4 }}><div><strong style={{ fontSize: 17 }}>Dan Price</strong><br /><span className="small">Forklift operator · Leeds distribution centre</span></div><span className="tag tag-demo">DEMO</span></div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 6 }}><span className="note-line">Shared with</span>{["Recruitment", "Compliance", "Leeds branch", "Client site"].map((x) => <span key={x} className="who who-team">{x}</span>)}</div>
        {tl.map(([t, text, cls, who]) => <div key={t + text} className="tl"><span className="t">{t}</span><span style={{ flex: 1 }}>{text}</span><span className={`who ${cls}`}>{who}</span></div>)}
      </div>
    </div>
  );
}

function Exceptions() {
  const rows = [
    { av: "TH", name: "Tom Hughes", why: "Reference dates don't match his work history", act: <span className="btn btn-primary" style={{ minHeight: 38, fontSize: 14, padding: "0 14px" }}>Review</span> },
    { av: "MN", name: "Marta Nowak", why: "Secure ID check not started after 2 reminders", act: <span className="tag tag-draft">Certifyd following up</span> },
    { av: "AK", name: "Amira Khan", why: "SIA licence expires in 14 days", act: <span className="tag tag-agency">Reminder sent</span> },
  ];
  return (
    <div className="stack gap-24">
      <div className="stack gap-10 max-780"><h3 className="h3">Your team only hears about the workers who need a decision.</h3><p className="body">We send the reminders, chase the referees and check what comes back. Anything that needs a person lands on one list, with the reason.</p></div>
      <div className="card pad stack gap-6">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}><strong style={{ fontSize: 17 }}>Needs your attention · 3</strong><span className="tag tag-demo">DEMO</span></div>
        {rows.map((r) => <div key={r.name} className="row row-top"><span className="avatar">{r.av}</span><div style={{ flex: 1 }}><strong>{r.name}</strong><br /><span style={{ color: "#4F5A6B" }}>{r.why}</span></div>{r.act}</div>)}
        <p className="note-line" style={{ margin: "8px 0 0" }}>36 other workers are cleared or moving without you.</p>
      </div>
    </div>
  );
}

function Evidence() {
  const rows = [["Right-to-work check", "28 Oct 2026"], ["Identity check", "28 Oct 2026"], ["NMC register check", "29 Oct 2026"], ["Enhanced DBS, Update Service", "29 Oct 2026"], ["Signed off by Sam Ellis, compliance", "29 Oct 2026"], ["Checked in at Willowbank reception", "30 Oct, 08:02"]];
  return (
    <div className="stack gap-24">
      <div className="stack gap-10 max-780"><h3 className="h3">Show an auditor or a client every check in one click.</h3><p className="body">Each worker&apos;s evidence pack lists every check, when it ran, who signed it off and the proof behind it, ready to download.</p></div>
      <div className="card pad stack gap-6">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}><strong style={{ fontSize: 17 }}>Evidence pack · Jamie Taylor, nurse</strong><span className="tag tag-demo">DEMO</span></div>
        {rows.map(([a, b]) => <div key={a} className="row"><span style={{ flex: 1 }}>{a}</span><span className="note-line">{b}</span><span className="status ok">✓</span></div>)}
        <span className="btn btn-primary self-start" style={{ minHeight: 44, fontSize: 15, marginTop: 8 }}>Download evidence pack ↓</span>
      </div>
    </div>
  );
}

function AtTheDoor() {
  return (
    <div className="stack gap-24" id="at-the-door">
      <div className="stack gap-10 max-780"><h3 className="h3">Workers share their credentials at the door with one tap.</h3><p className="body">Each worker carries one pass on their phone. Whoever is on the door scans it with an ordinary phone camera and sees the face, the role and every check for that site and that day. Nothing to install, and the check-in goes on the record.</p></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "stretch" }}>
        <PassCard initials="AK" name="Amira Khan" role="Security officer" org="Northline Staffing" status="Cleared for Riverside Arena, today" qrLabel="QR code on Amira's pass" compact />
        <div className="card pad stack gap-10" style={{ flex: "1 1 300px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><p className="eyebrow" style={{ fontSize: 11 }}>Scanned at the Riverside Arena gate</p><span className="tag tag-demo">DEMO</span></div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}><span aria-hidden="true" style={{ width: 52, height: 52, borderRadius: "50%", background: "#0F1A2B", flex: "none" }} /><div style={{ flex: 1 }}><strong style={{ fontSize: 17 }}>Amira Khan</strong><br /><span className="small">Does the face match? Check before you record.</span></div></div>
          <div>{[["Identity", "✓ Checked"], ["Right to work", "✓ Checked"], ["SIA front-line licence", "✓ Valid"], ["Booked for this site today", "✓ Yes"]].map(([a, b]) => <div key={a} className="row"><span style={{ flex: 1 }}>{a}</span><span className="status ok">{b}</span></div>)}</div>
          <span className="btn btn-primary" style={{ minHeight: 44, fontSize: 15 }}>Record check-in</span>
        </div>
      </div>
    </div>
  );
}


import { pageMetadata } from "@/lib/story/metadata";
import { CtaPair } from "@/components/site/Buttons";
import { CloseBand } from "@/components/site/CloseBand";
import { HeroScene } from "@/components/site/Illustrations";
import { CaseLog, StepPicker } from "@/components/site/HowParts";
import { HowToSchema } from "@/components/seo/JsonLd";

export const metadata = pageMetadata(
  "How Certifyd works: ask once, we do the rest | Certifyd",
  "You set the rules and make the calls. Certifyd does the asking, checking, chasing and recording, from the first message to the evidence pack.",
  "/how-it-works/",
);

const GET = [
  { n: "01", k: "Collect", t: "We gather everything, without the chasing.", s: "Your workers reply where they already are.", items: [["Invites by WhatsApp, text or email", "Your worker replies in the app they already use, in their own language."], ["A secure page for ID", "Passports, share codes and health forms never touch the chat."], ["Workers in from a spreadsheet", "Bring your existing workers in, and export their status and evidence back out."]] },
  { n: "02", k: "Check", t: "We check it against the rules for each role.", s: "Any role, any document, on your schedule.", items: [["Right-to-work checks", "Run through a registered provider, with the face match kept on file."], ["DBS and register checks", "NMC, SIA, DVLA and other lookups, plus new DBS applications, handled for you."], ["Your checklist, or one we draft", "Send us what each role needs, or we draft it from the rules and you sign it off."], ["Reminders before anything expires", "30, 14 and 7 days out, to the worker first and to you if nothing happens."]] },
  { n: "03", k: "Share", t: "Everyone who needs it sees the same record.", s: "From your office to the door of the site.", items: [["One shared view for your team", "Recruiters, compliance and branch managers follow the same journey for every worker."], ["A pass to show at the door", "Workers share their credentials in one tap, scanned with any phone camera."], ["A free view for your clients", "Sites see who is cleared for each shift, not the papers behind it."], ["Evidence packs", "One worker or your whole workforce, ready for an audit in one click."]] },
];
const NEVER = [
  ["Ask for documents in chat", "IDs, share codes, health details and bank details only go through the secure page."],
  ["Clear a worker", "A named person at your organisation signs off every worker."],
  ["Promise you're compliant", "We run checks through registered providers and keep the evidence. You stay responsible."],
  ["Keep chats forever", "Workers are told chats are recorded, and each record type is deleted on a set schedule."],
];

export default function HowItWorks() {
  return (
    <div className="cd page">
      <section aria-labelledby="how-title" className="section on-paper" style={{ paddingBottom: 56 }}>
        <div className="wrap wrap-wide" style={{ display: "grid", gridTemplateColumns: "minmax(0, 640px) minmax(0, 1fr)", gap: 56, alignItems: "center" }} data-hero-grid>
          <div className="stack gap-24">
            <p className="eyebrow">How it works</p>
            {/* Two lines, each ending on a full stop: the one two-tone headline Michael kept */}
            <h1 id="how-title" className="h1" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>Ask once.<br /><span className="accent nowrap-lg">Certifyd does the rest.</span></h1>
            <p className="lead">You set the rules and make the calls. We do the asking, checking, chasing and recording, from the first message to the evidence pack.</p>
            <CtaPair />
          </div>
          <HeroScene label="Illustration: the worker opens a secure check from the chat, and the team's view shows them cleared" />
        </div>
      </section>

      <section aria-labelledby="steps-title" className="section on-white">
        <div className="wrap stack gap-32">
          <h2 id="steps-title" className="h2 nowrap-lg" style={{ fontSize: "clamp(24px, 2.6vw, 36px)" }}>Follow one new starter from invite to evidence pack.</h2>
          <StepPicker />
        </div>
      </section>

      <section aria-labelledby="who-title" className="section">
        <div className="wrap stack gap-28">
          <div className="stack gap-12 max-820"><p className="eyebrow">Who does what</p><h2 id="who-title" className="h2">We do the chasing, so your team stays compliant.</h2><p className="body">Here is one nurse&apos;s case, from invite to cleared. Filter it to see how little lands on your desk.</p></div>
          <CaseLog />
        </div>
      </section>

      <section aria-labelledby="get-title" className="section on-white">
        <div className="wrap stack gap-32">
          <div className="stack gap-12 max-820"><p className="eyebrow">What you get</p><h2 id="get-title" className="h2">You get all of it from your very first starter.</h2></div>
          <div className="grid-3" style={{ alignItems: "stretch" }}>
            {GET.map((g, i) => (
              <div key={g.k} className={`card stack gap-10 ${i === 2 ? "card-strong" : ""}`} style={{ padding: 28 }}>
                <span className="num" style={{ fontSize: 14 }}>{g.n}</span>
                <p className="eyebrow">{g.k}</p>
                <h3 className="h3">{g.t}</h3>
                <p className="small" style={{ marginBottom: 6 }}>{g.s}</p>
                <div>{g.items.map(([a, b]) => <div key={a} className="row row-top" style={{ flexDirection: "column", gap: 4 }}><strong style={{ fontSize: 15 }}>{a}</strong><span className="small">{b}</span></div>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="never-title" className="section">
        <div className="wrap stack gap-28">
          <h2 id="never-title" className="h2">Four things we will never do.</h2>
          <div className="grid-4">{NEVER.map(([a, b]) => <div key={a} className="card-flat pad stack gap-8"><h3 className="h4">{a}</h3><p className="small">{b}</p></div>)}</div>
        </div>
      </section>

      <CloseBand title="Join Certifyd and stay compliant every day, not just on audit day." />
      <HowToSchema name="How Certifyd onboards a new worker" steps={["You pick the role and invite your worker.", "Your worker replies and uploads documents on a secure page.", "Certifyd checks and chases; your team sees the exceptions.", "Reception scans the worker's pass and records the check.", "Every check and decision is on the record, ready for audit."]} />
    </div>
  );
}

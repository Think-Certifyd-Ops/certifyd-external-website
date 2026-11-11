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
  { n: "01", k: "Collect", t: "We get every document from your workers.", s: "They reply in the app they already use.", items: [["Invites by WhatsApp, text or email", "Your worker replies in the app they already use, in their own language."], ["A secure page for ID", "Passports, share codes and health forms never go in the chat."], ["Bring in your current workers", "Upload a spreadsheet of the workers you already have. You can download their files again at any time."]] },
  { n: "02", k: "Check", t: "We check each document against the rules for the job.", s: "Any job, any document, as often as you choose.", items: [["Right-to-work checks", "Done through a registered provider. We keep the photo match on file."], ["DBS and official register checks", "We look people up on the NMC, SIA, DVLA and other official lists, and handle new DBS (criminal record) checks for you."], ["Your checklist, or one we write", "Send us what each job needs. Or we write it from the rules and you check it."], ["Reminders before anything runs out", "30, 14 and 7 days before. The worker hears first, then you if nothing happens."]] },
  { n: "03", k: "Share", t: "Everyone who needs it sees the same file.", s: "From your office to the door of the site.", items: [["One list for your whole team", "Recruiters, your compliance team and branch managers all see each worker's progress."], ["A pass to show at the door", "Workers show they're cleared with one tap. Anyone can scan it with a phone camera."], ["Free for your clients to see", "Sites see who is cleared for each shift, but not their private papers."], ["Worker files", "Download one worker's file, or everyone's, in one click."]] },
];
const NEVER = [
  ["Ask for documents in chat", "IDs, share codes, health details and bank details only go through the secure page."],
  ["Clear a worker for you", "A named person at your organisation approves every worker."],
  ["Promise you're following the law", "We use registered providers for checks and keep the proof. But your organisation is still responsible."],
  ["Keep chats forever", "We tell workers their chats are saved. Each kind of record is deleted after a set time."],
];

export default function HowItWorks() {
  return (
    <div className="cd page">
      <section aria-labelledby="how-title" className="section on-paper" style={{ paddingBottom: 56 }}>
        <div className="wrap wrap-wide" style={{ display: "grid", gridTemplateColumns: "minmax(0, 640px) minmax(0, 1fr)", gap: 56, alignItems: "center" }} data-hero-grid>
          <div className="stack gap-24">
            <p className="eyebrow">How it works</p>
            {/* Two lines, each ending on a full stop: the one two-tone headline Michael kept */}
            <h1 id="how-title" className="h1" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>Ask once.<br /><span className="accent nowrap-lg">We do the rest.</span></h1>
            <p className="lead">You decide what each job needs and who gets cleared. We ask for the documents, check them, chase what&apos;s missing and keep it all on file.</p>
            <CtaPair />
          </div>
          <HeroScene label="Illustration: the worker opens a secure check from the chat, and the team's view shows them cleared" />
        </div>
      </section>

      <section aria-labelledby="steps-title" className="section on-white">
        <div className="wrap stack gap-32">
          <h2 id="steps-title" className="h2 nowrap-lg" style={{ fontSize: "clamp(24px, 2.6vw, 36px)" }}>Follow one new worker from first message to finished file.</h2>
          <StepPicker />
        </div>
      </section>

      <section aria-labelledby="who-title" className="section">
        <div className="wrap stack gap-28">
          <div className="stack gap-12 max-820"><p className="eyebrow">Who does what</p><h2 id="who-title" className="h2">We chase the missing documents, so your team doesn&apos;t have to.</h2><p className="body">Here is one nurse, from first message to cleared. Use the filter to see how little your team has to do.</p></div>
          <CaseLog />
        </div>
      </section>

      <section aria-labelledby="get-title" className="section on-white">
        <div className="wrap stack gap-32">
          <div className="stack gap-12 max-820"><p className="eyebrow">What you get</p><h2 id="get-title" className="h2">You get every part of Certifyd from your first worker.</h2></div>
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

      <CloseBand title="Be ready for any inspection, on any day." />
      <HowToSchema name="How Certifyd onboards a new worker" steps={["You pick the role and invite your worker.", "Your worker replies and uploads documents on a secure page.", "Certifyd checks the documents and chases what's missing. Your team sees who needs them.", "Reception scans the worker's pass and saves the check-in.", "Every check and decision is saved, ready for an inspection."]} />
    </div>
  );
}

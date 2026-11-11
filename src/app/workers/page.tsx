import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { CONTACT_HREF, MESSAGE_CERTIFYD_ON, WHATSAPP_HREF } from "@/lib/site";
import { FilmSlot } from "@/components/site/Film";
import { Faqs } from "@/components/site/Faqs";
import { PassCard } from "@/components/site/Illustrations";

export const metadata = pageMetadata(
  "Got a message from Certifyd? Help for workers | Certifyd",
  "Your agency or employer asked Certifyd to collect your documents before you start. It's free, takes a few minutes and works from your phone.",
  "/workers/",
);

const FAQS = [
  { q: "Do I need WhatsApp?", a: "No. You can use the link in your text or email instead. WhatsApp is there if you prefer it." },
  { q: "Does it cost me anything?", a: "No. Whoever invited you pays for Certifyd and for any checks." },
  { q: "I don't have a share code. What do I do?", a: "You get one from GOV.UK in a few minutes. We'll send you the link and tell you which option to pick." },
  { q: "Who can see my documents?", a: "The agency or employer that invited you. The sites you work at see that you're cleared, not your documents." },
  { q: "Can I reply in my own language?", a: "Yes. Write to us in your language and we'll reply in it." },
];

export default function Workers() {
  return (
    <div className="cd page">
      <section aria-labelledby="wk-title" className="section on-paper" style={{ paddingTop: 72 }}>
        <div className="wrap split">
          <div className="text" style={{ gap: 22 }}>
            <p className="eyebrow">For workers</p>
            <h1 id="wk-title" className="h1">Got a message from Certifyd?</h1>
            <p className="lead">Your agency or employer asked us to collect the documents you need before you start. It takes a few minutes, it&apos;s free, and you can do it from your phone.</p>
            <div className="btn-row"><a href="#invited" className="btn btn-primary">Open my invite</a><a href="#independent" className="btn btn-secondary">Not with an agency yet?</a></div>
          </div>
          <div className="visual"><FilmSlot film="workers" /></div>
        </div>
      </section>

      <section aria-labelledby="real-title" className="section on-white">
        <div className="wrap stack gap-28">
          <h2 id="real-title" className="h2">How to tell the message is real.</h2>
          <div className="grid-3">
            {[["01", "It names who sent it", "Every message says which agency or employer asked us to contact you. If you don't recognise the name, don't reply."], ["02", "You can check with them", "Call them on the number you already have. They can see exactly what we've asked you for."], ["03", "We never ask in the chat", "Your passport, bank details and passwords only go through a secure Certifyd page. Never by message."]].map(([n, t, b]) => <div key={n} className="card-flat pad stack gap-8"><span className="num">{n}</span><h3 className="h4">{t}</h3><p className="small">{b}</p></div>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="routes-title" className="section">
        <div className="wrap stack gap-32">
          <h2 id="routes-title" className="h2">Start from your invite, or sign up yourself.</h2>
          <div className="grid-2">
            <div id="invited" className="card card-strong stack gap-16" style={{ padding: 32 }}>
              <h3 className="h3">You&apos;ve been invited</h3>
              <ol className="plain">{["Open the link in your message, email or text", "Check your details and say yes to the checks", "Upload your documents on the secure page", "We tell you if anything is missing, and when you're done"].map((x, i) => <li key={x} className="row"><span className="num">{i + 1}</span><span>{x}</span></li>)}</ol>
              <p className="small">You don&apos;t need WhatsApp. Text and email links work the same way, and you can pick up where you left off. Can&apos;t find your link? Ask the agency or employer that invited you to send it again.</p>
            </div>
            <div id="independent" className="card-flat stack gap-16" style={{ padding: 32 }}>
              <h3 className="h3">You&apos;re not with an agency yet</h3>
              <p className="body">Soon you&apos;ll be able to register free and keep your documents in one place, ready for the day an agency or employer asks for them.</p>
              <div>{["Free, with no payment ever", "Any job title", "You choose who sees your record"].map((x) => <div key={x} className="row"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></div>)}</div>
              <Link href={`${CONTACT_HREF}`} className="btn btn-secondary self-start">Ask us about it</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="need-title" className="section on-white">
        <div className="wrap split" style={{ alignItems: "flex-start" }}>
          <div className="text">
            <p className="eyebrow">Get ready</p>
            <h2 id="need-title" className="h2">Have these ready and you&apos;ll finish faster.</h2>
            <p className="body">Every job is a little different. Your checklist shows exactly what your agency or employer needs from you, and nothing more.</p>
            <Link href="/regulations/" className="btn btn-ghost self-start">Look up what your job needs →</Link>
          </div>
          <div className="visual"><div className="card pad">
            {[["Passport or photo ID", "a photo is fine"], ["Share code, if you're not a British or Irish citizen", "from GOV.UK"], ["Any licence or card your job needs", "we check it for you"], ["Training and qualification certificates", "photos are fine"], ["DBS certificate number, if you have one", "only if your job needs it"], ["Contact details for your referees", "we contact them"]].map(([a, b]) => <div key={a} className="row"><span style={{ flex: 1 }}>{a}</span><span className="note-line">{b}</span></div>)}
          </div></div>
        </div>
      </section>

      <section aria-labelledby="yours-title" className="section">
        <div className="wrap split split-reverse">
          <div className="text">
            <p className="eyebrow">Your record</p>
            <h2 id="yours-title" className="h2">You can see everything we keep about you, and you choose who else can.</h2>
            <p className="body">You can see everything we hold about you. Whoever invited you sees your documents. The sites you work at see your status, not your documents. We delete records on a set schedule.</p>
            <Link href="/privacy/" className="btn btn-ghost self-start">Read how we handle your data →</Link>
          </div>
          <div className="visual"><div className="backdrop" style={{ display: "flex", justifyContent: "center" }}><div className="torn" /><div style={{ position: "relative" }}><PassCard initials="DP" name="Dan Price" role="Forklift operator" org="Northline Staffing" status="Cleared for Leeds DC, today" qrLabel="QR code on Dan's demo pass" /></div></div></div>
        </div>
      </section>

      {MESSAGE_CERTIFYD_ON && (
        <section aria-labelledby="msg-title" className="section-tight on-white">
          <div className="wrap head-row"><h2 id="msg-title" className="h3">Prefer WhatsApp? Message Certifyd and we&apos;ll point you to the right place.</h2><a href={WHATSAPP_HREF} className="btn btn-primary">Message Certifyd</a></div>
        </section>
      )}

      <Faqs id="wfaq-title" title="Questions workers ask us." items={FAQS} />

      <section aria-labelledby="help-title" className="section on-blue">
        <div className="wrap head-row" style={{ alignItems: "center" }}>
          <h2 id="help-title" className="h2" style={{ maxWidth: 720 }}>Stuck on a step? We&apos;ll talk you through it.</h2>
          <Link href={CONTACT_HREF} className="btn btn-primary">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}

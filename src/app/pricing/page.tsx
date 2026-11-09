import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { CONTACT_HREF, PLAN_LIMITS } from "@/lib/site";
import { ContactButton, DemoButton } from "@/components/site/Buttons";
import { CloseBand } from "@/components/site/CloseBand";
import { Faqs } from "@/components/site/Faqs";
import { SavingCalculator } from "@/components/site/SavingCalculator";

export const metadata = pageMetadata(
  "Pricing: one monthly plan, nothing for workers | Certifyd",
  "One monthly plan for your organisation, sized to the workers you manage. Your workers never pay. See plans and work out the time you'd get back.",
  "/pricing/",
);

const limit = (n: number | null) => (n ? [`Up to ${n.toLocaleString("en-GB")} active workers`] : []);
const PLANS = [
  { name: "Starter", price: "£299", from: false, blurb: "For teams starting with one or two roles.", items: [...limit(PLAN_LIMITS.starter), "Role templates and chasing", "Evidence packs"], strong: false },
  { name: "Professional", price: "£1,200", from: false, blurb: "For teams onboarding every week across several sites or clients.", items: [...limit(PLAN_LIMITS.professional), "Everything in Starter", "A free view for your clients and sites", "CSV import and export"], strong: true },
  { name: "Enterprise", price: "£5,000", from: true, blurb: "For large employers, agencies and groups with their own systems.", items: ["Workers at volume", "Set-up around your tiers and teams", "Named onboarding lead"], strong: false },
];

// "Is there a setup fee?" follows Michael's review: none on Starter or Professional, possibly on Enterprise.
const FAQS = [
  { q: "How long is the contract?", a: "Month to month, with 30 days' notice. There's no long contract to sign." },
  { q: "Is there a setup fee?", a: "Not on Starter or Professional: we set up your roles, checklists and sites with you as part of your plan. Enterprise set-up depends on your tiers and the number of workers, so it may be priced as a consultancy project. We'll agree it with you up front." },
  { q: "What counts as an active worker?", a: "Anyone with an open record that month, whether they're being onboarded or already cleared and working for you. Workers you archive stop counting." },
  { q: "Can we change plan later?", a: "Yes. Move up or down whenever you like, and the change applies from your next bill." },
  { q: "What happens to our data if we leave?", a: "You download every record and evidence pack first. Then we delete everything on the date you choose and confirm it in writing." },
  { q: "Do prices include VAT?", a: "No. All prices are shown without VAT." },
];

export default function Pricing() {
  return (
    <div className="cd page">
      <section aria-labelledby="price-title" className="section on-paper" style={{ paddingBottom: 56 }}>
        <div className="wrap stack gap-20">
          <p className="eyebrow">Pricing</p>
          <h1 id="price-title" className="h1">Simple pricing, and nothing for your workers to pay.</h1>
          <p className="lead">One monthly plan for your organisation, sized to the workers you manage.</p>
        </div>
      </section>

      <section aria-label="Plans" className="section-tight" style={{ paddingTop: 0 }}>
        <div className="wrap grid-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`${p.strong ? "card card-strong" : "card-flat"} stack gap-16`} style={{ padding: 32 }}>
              <div className="head-row" style={{ alignItems: "center" }}><h2 className="h3">{p.name}</h2>{p.strong && <span className="tag tag-plain">Most popular</span>}</div>
              <p style={{ margin: 0 }}>{p.from && <span className="small">From </span>}<span className="mono" style={{ fontSize: 40, fontWeight: 700 }}>{p.price}</span><span className="small"> a month</span></p>
              <p className="small">{p.blurb}</p>
              <div>{p.items.map((x) => <div key={x} className="row"><span className="status ok" aria-hidden="true">✓</span><span>{x}</span></div>)}</div>
              <div style={{ marginTop: "auto" }}>{p.name === "Enterprise" ? <ContactButton label="Talk to us" /> : <DemoButton variant={p.strong ? "primary" : "secondary"} />}</div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="calc-title" className="section on-white">
        <div className="wrap stack gap-28">
          <div className="stack gap-12"><p className="eyebrow">Saving calculator</p><h2 id="calc-title" className="h2">See how much time you&apos;d get back.</h2><p className="body">Two questions. Move the sliders to match your team.</p></div>
          <SavingCalculator />
        </div>
      </section>

      <Faqs id="faq-title" title="Teams usually ask us these before they sign up." items={FAQS} intro={<p className="body">Something else on your mind? <Link href={CONTACT_HREF}>Contact us</Link> and a person will reply.</p>} />

      <CloseBand title="Worker compliance, without the chasing." />
    </div>
  );
}

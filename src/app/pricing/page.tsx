import Link from "next/link";
import { pageMetadata } from "@/lib/story/metadata";
import { CONTACT_HREF } from "@/lib/site";
import { ContactButton, DemoButton } from "@/components/site/Buttons";
import { CloseBand } from "@/components/site/CloseBand";
import { Faqs } from "@/components/site/Faqs";
import { SavingCalculator } from "@/components/site/SavingCalculator";

export const metadata = pageMetadata(
  "Pricing: one monthly plan, nothing for workers | Certifyd",
  "One monthly plan for your organisation, sized to the workers you manage. Your workers never pay. Work out the time you'd get back, then book a demo for a price.",
  "/pricing/",
);

// Plan prices came off the page on 9 Nov 2026 (Andrew). We quote a price on the demo call.
const FAQS = [
  { q: "How long is the contract?", a: "Month to month, with 30 days' notice. There's no long contract to sign." },
  { q: "How much does it cost?", a: "One monthly fee for your organisation, set by how many workers you manage. Book a 20-minute demo and we'll give you a price for your team on the call." },
  { q: "Is there a setup fee?", a: "Not for most teams. Setting up your jobs, checklists and sites is part of your plan. For very large groups with their own systems, set-up may cost extra. If so, we'll agree the price with you first." },
  { q: "Which workers count towards the price?", a: "Anyone with an open file that month, whether they're just starting or already working for you. When you close a worker's file, they stop counting." },
  { q: "Can we change plan later?", a: "Yes. Move up or down whenever you like, and the change applies from your next bill." },
  { q: "What happens to our data if we leave?", a: "First you download every worker's file. Then we delete everything on the date you choose, and confirm it in writing." },
  { q: "Do prices include VAT?", a: "No. Every price we quote is without VAT." },
];

export default function Pricing() {
  return (
    <div className="cd page">
      <section aria-labelledby="price-title" className="section on-paper" style={{ paddingBottom: 56 }}>
        <div className="wrap stack gap-20">
          <p className="eyebrow">Pricing</p>
          <h1 id="price-title" className="h1">One monthly price. Your workers pay nothing.</h1>
          <p className="lead">You pay one monthly fee, based on how many workers you have. Book a demo and we&apos;ll give you a price for your team.</p>
          <div className="btn-row"><DemoButton /><ContactButton /></div>
        </div>
      </section>

      <section aria-labelledby="calc-title" className="section on-white">
        <div className="wrap stack gap-28">
          <div className="stack gap-12"><p className="eyebrow">Saving calculator</p><h2 id="calc-title" className="h2">See how much time you&apos;d get back.</h2><p className="body">Two questions. Move the sliders to match your team.</p></div>
          <SavingCalculator />
        </div>
      </section>

      <Faqs id="faq-title" title="Questions teams ask before they join." items={FAQS} intro={<p className="body">Something else on your mind? <Link href={CONTACT_HREF}>Contact us</Link> and a person will reply.</p>} />

      <CloseBand title="Get a price for your team on a 20-minute call." />
    </div>
  );
}

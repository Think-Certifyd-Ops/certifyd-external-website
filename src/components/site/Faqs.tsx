import { FAQSchema } from "@/components/seo/JsonLd";

export type Faq = { q: string; a: string };

export function Faqs({ title, items, id = "faq-title", intro }: { title: string; items: Faq[]; id?: string; intro?: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="section">
      <div className="wrap stack gap-20 max-920">
        <h2 id={id} className="h2">{title}</h2>
        {intro}
        {items.map((f, i) => (
          <details key={f.q} className="faq" open={i === 0}>
            <summary>{f.q}</summary>
            <p className="body">{f.a}</p>
          </details>
        ))}
      </div>
      <FAQSchema faqs={items.map((f) => ({ question: f.q, answer: f.a }))} />
    </section>
  );
}

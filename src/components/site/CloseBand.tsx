import { CtaPair } from "./Buttons";

/** Closing band. Headline in one colour, white on the dark or blue ground. */
export function CloseBand({ title, lead, tone = "blue", demoLabel = "Book a 20-minute demo", contactLabel, id = "close-title" }: { title: string; lead?: string; tone?: "blue" | "ink"; demoLabel?: string; contactLabel?: string; id?: string }) {
  return (
    <section aria-labelledby={id} className={`section on-${tone}`}>
      <div className="wrap stack gap-24" style={{ alignItems: "flex-start" }}>
        <h2 id={id} className={tone === "ink" ? "h1" : "h2"} style={{ maxWidth: 960 }}>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
        <CtaPair demoLabel={demoLabel} contactLabel={contactLabel} />
      </div>
    </section>
  );
}

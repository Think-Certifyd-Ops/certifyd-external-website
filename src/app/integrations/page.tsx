import type { Metadata } from "next";
import { pageMetadata } from "@/lib/story/metadata";
import { CtaPair } from "@/components/site/Buttons";

// Kept as a page but off the navigation and out of search: no integrations are built yet (Michael, 6 Nov).
export const metadata: Metadata = { ...pageMetadata("Integrations | Certifyd", "Bring workers into Certifyd from a spreadsheet and export their status and evidence packs. Tell us which systems you use.", "/integrations/"), robots: { index: false, follow: true } };

export default function Integrations() {
  return (
    <div className="cd page">
      <section aria-labelledby="int-title" className="section on-paper">
        <div className="wrap stack gap-24 max-820">
          <p className="eyebrow">Integrations</p>
          <h1 id="int-title" className="h1">Bring your workers in, and take their status with you.</h1>
          <p className="lead">Today you can import workers from a spreadsheet and export their status and evidence packs. Connections to recruitment CRMs and HR systems come next, starting with the systems our customers use most.</p>
          <p className="body">Tell us which system you use and we&apos;ll show you how Certifyd fits around it.</p>
          <CtaPair />
        </div>
      </section>
    </div>
  );
}

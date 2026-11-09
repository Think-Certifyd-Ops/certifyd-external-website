import Link from "next/link";
import { DEMO_HREF, SHOW_REGULATION_DRAFTS } from "@/lib/site";
import { GUIDES } from "@/data/regulations/guides";
import { SEGMENT_MENU } from "@/data/site/segment-menu";
import { ContactButton, DemoButton } from "./Buttons";
import { FooterNewsletter } from "./FooterNewsletter";
import { Arrow } from "./Icons";

export function SiteFooter() {
  const live = (slug: string) => GUIDES.some((g) => g.slug === slug && (g.status === "reviewed" || SHOW_REGULATION_DRAFTS));
  return (
    <>
      <footer className="cd site-footer">
        <div className="wrap">
          <FooterNewsletter />
          <div className="foot-cols">
            <div className="foot-brand">
              <img src="/images/site/logo-white.svg" alt="Certifyd" width={140} height={26} style={{ height: 26, width: "auto", alignSelf: "flex-start" }} />
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "#C9D6EA", maxWidth: 300 }}>Worker compliance, without the chasing.</p>
              <div className="btn-row on-ink" style={{ background: "transparent" }}><DemoButton /><ContactButton /></div>
            </div>
            <div className="foot-col">
              <p className="eyebrow">Product</p>
              <Link href="/how-it-works/">How it works</Link>
              <Link href="/pricing/">Pricing</Link>
              <Link href="/security/">Security</Link>
              <Link href="/workers/">For workers</Link>
            </div>
            <div className="foot-col">
              <p className="eyebrow">Who it&apos;s for</p>
              {SEGMENT_MENU.filter((s) => s.wave < 3).map((s) => <Link key={s.slug} href={`/solutions/${s.slug}/`}>{s.name.replace(" agencies", "")}</Link>)}
              <Link href="/solutions/">All teams</Link>
            </div>
            <div className="foot-col">
              <p className="eyebrow">Regulations</p>
              <Link href="/regulations/">Roles</Link>
              {live("right-to-work") && <Link href="/regulations/checks/right-to-work/">Checks</Link>}
              {live("right-to-work-october-2026") && <Link href="/regulations/changes/right-to-work-october-2026/">Rule changes</Link>}
              <Link href="/resources/right-to-work-guide/">Guides and checklists</Link>
            </div>
            <div className="foot-col">
              <p className="eyebrow">Company</p>
              <Link href="/about/">About</Link>
              <Link href="/contact/">Contact</Link>
              <Link href="/blog/">Blog</Link>
              <Link href="/careers/">Careers</Link>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/cookies/">Cookies</Link>
            </div>
          </div>
          <div className="foot-base">
            <span>© 2026 Certifyd</span>
            <span>Regulations pages are guidance, not legal advice. Your organisation stays responsible for its decisions.</span>
          </div>
        </div>
      </footer>
      <div className="cd mobile-bar"><Link href={DEMO_HREF} className="btn btn-primary" data-demo-cta="true">Book a demo <Arrow /></Link></div>
    </>
  );
}

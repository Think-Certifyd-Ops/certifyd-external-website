"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DEMO_HREF, LOGIN_HREF } from "@/lib/site";
import { SEGMENT_MENU } from "@/data/site/segment-menu";
import { MessageCertifydButton } from "./Buttons";
import { Arrow, Burger, Chevron } from "./Icons";

// Integrations stay off the main navigation until a connection exists (Michael, 6 Nov).
const LINKS = [
  { href: "/how-it-works/", label: "How it works" },
  { href: "/workers/", label: "For workers" },
  { href: "/regulations/", label: "Regulations" },
  { href: "/pricing/", label: "Pricing" },
];

export function SiteHeader() {
  const path = usePathname() ?? "/";
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  // Close the menus when the route changes (state adjusted during render, as React recommends).
  const [seenPath, setSeenPath] = useState(path);
  if (seenPath !== path) { setSeenPath(path); setMenu(false); setMobile(false); }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setMenu(false); setMobile(false); btn.current?.focus(); } };
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setMenu(false); };
    document.addEventListener("keydown", onKey); document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, []);

  const current = (href: string) => path.startsWith(href);
  const supply = SEGMENT_MENU.filter((s) => s.group === "supply");
  const employ = SEGMENT_MENU.filter((s) => s.group === "employ");

  return (
    <header ref={ref} className="cd site-header">
      <nav aria-label="Main" className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Certifyd home"><img src="/images/connected/logo.svg" alt="Certifyd" width={150} height={27} /></Link>
        <div className="nav-links">
          <Link href="/how-it-works/" aria-current={current("/how-it-works/") ? "page" : undefined}>How it works</Link>
          <div>
            <button ref={btn} type="button" aria-expanded={menu} aria-controls="menu-solutions" className={current("/solutions/") ? "is-current" : undefined} onClick={(e) => { e.stopPropagation(); setMenu((v) => !v); }}>Who it&apos;s for <Chevron /></button>
          </div>
          {LINKS.slice(1).map((l) => <Link key={l.href} href={l.href} aria-current={current(l.href) ? "page" : undefined}>{l.label}</Link>)}
        </div>
        <div className="nav-actions">
          <a className="login" href={LOGIN_HREF}>Log in</a>
          <MessageCertifydButton />
          <Link href={DEMO_HREF} className="btn btn-primary" data-demo-cta="true">Book a demo <Arrow /></Link>
          <button type="button" className="burger" aria-expanded={mobile} aria-controls="mobile-menu" aria-label={mobile ? "Close menu" : "Open menu"} onClick={() => setMobile((v) => !v)}><Burger /></button>
        </div>
      </nav>

      {menu && (
        <div id="menu-solutions" className="menu-panel">
          <div className="menu-grid">
            <div className="stack gap-6"><p className="eyebrow" style={{ marginBottom: 8 }}>If you supply workers to other businesses</p>{supply.map((s) => <Link key={s.slug} href={`/solutions/${s.slug}/`} className="menu-item"><strong>{s.name}</strong><span>{s.sub}</span></Link>)}</div>
            <div className="stack gap-6"><p className="eyebrow" style={{ marginBottom: 8 }}>If you employ your own workers</p>{employ.map((s) => <Link key={s.slug} href={`/solutions/${s.slug}/`} className="menu-item"><strong>{s.name}</strong><span>{s.sub}</span></Link>)}</div>
            <div className="menu-aside">
              <p className="eyebrow">Not on the list?</p>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.45, fontWeight: 600 }}>Tell us any job title, and we&apos;ll set up its checklist with you.</p>
              <div className="btn-row"><Link href={DEMO_HREF} className="btn btn-primary" data-demo-cta="true">Book a demo <Arrow /></Link><Link href="/solutions/" className="btn btn-ghost">Every team we work with</Link></div>
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div id="mobile-menu" className="mobile-menu">
          <Link href="/how-it-works/">How it works</Link>
          <Link href="/solutions/">Who it&apos;s for</Link>
          <div className="sub stack">{SEGMENT_MENU.map((s) => <Link key={s.slug} href={`/solutions/${s.slug}/`}>{s.name}</Link>)}</div>
          {LINKS.slice(1).map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          <a href={LOGIN_HREF}>Log in</a>
        </div>
      )}
    </header>
  );
}

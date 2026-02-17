"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import type { NavItem } from "@/types";

/* ── Icon Components ── */

function IconPerson({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function IconBuilding({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconClipboardCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
    </svg>
  );
}

function IconShieldCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconGlobe({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconUsers({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function IconBriefcase({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
  );
}

function IconExclamationTriangle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  );
}

function IconHeart({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function IconCompass({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
    </svg>
  );
}

function IconBookOpen({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconRocket({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

/* ── Icon Mappings ── */

const PRODUCT_ICONS: Record<string, React.FC<{ className?: string }>> = {
  "Certify That Person": IconPerson,
  "Certify That Business": IconBuilding,
  "Audit-Ready Compliance": IconClipboardCheck,
  "Security & Trust": IconShieldCheck,
};

const COLUMN_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Sectors: IconGlobe,
  Roles: IconUsers,
  "Business Types": IconBriefcase,
  Compliance: IconClipboardCheck,
  Threats: IconExclamationTriangle,
  Safeguarding: IconHeart,
  Scenarios: IconCompass,
};

const RESOURCE_ICONS: Record<string, React.FC<{ className?: string }>> = {
  Blog: IconBookOpen,
  "Getting Started": IconRocket,
};

/* ── Helpers ── */

function isMegaMenu(item: NavItem): boolean {
  return !!item.children?.some((child) => child.children);
}

/* ── Header ── */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const openDropdown = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const dropdownOpen = activeDropdown !== null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || dropdownOpen
            ? "bg-navy/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/logos/certifyd-logo-white.svg"
                alt={COMPANY.name}
                className="h-10 w-auto"
                style={{ width: "148px" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  {item.children ? (
                    <>
                      {/* Trigger */}
                      <button
                        type="button"
                        className={`flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(item.href) || activeDropdown === item.label
                            ? "text-white"
                            : "text-text-on-dark-muted hover:text-white"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-3 w-3 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isMegaMenu(item) ? (
                        /* ── Mega-menu panel ── */
                        <div
                          className={`fixed left-0 right-0 top-16 lg:top-20 transition-all duration-200 ease-out ${
                            activeDropdown === item.label
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                          onMouseEnter={cancelClose}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
                            <div className="rounded-sm border border-white/[0.08] bg-[#0d1528] shadow-2xl py-6 px-6">
                              <div
                                className={`grid ${
                                  item.children!.length === 3
                                    ? "grid-cols-3 gap-4 max-w-3xl"
                                    : "grid-cols-4 gap-4"
                                }`}
                              >
                                {item.children!.map((column, colIdx) => {
                                  const ColIcon = COLUMN_ICONS[column.label];
                                  return (
                                    <div
                                      key={column.label}
                                      className={colIdx > 0 ? "border-l border-white/[0.06] pl-4" : ""}
                                    >
                                      {/* Column header */}
                                      <div className="flex items-center gap-2 mb-3 px-3">
                                        {ColIcon && (
                                          <ColIcon className="h-4 w-4 text-certifyd-blue" />
                                        )}
                                        <h3 className="font-heading text-[11px] font-semibold uppercase tracking-wider text-certifyd-blue">
                                          {column.label}
                                        </h3>
                                      </div>
                                      {/* Column items */}
                                      <ul className="space-y-0.5">
                                        {column.children?.map((child) => (
                                          <li key={child.href}>
                                            <Link
                                              href={child.href}
                                              className={`group/link flex items-center gap-2.5 rounded-sm px-3 py-2 text-[13px] transition-all duration-150 ${
                                                isActive(child.href)
                                                  ? "text-white bg-white/[0.06]"
                                                  : "text-text-on-dark-muted hover:text-white hover:bg-white/[0.06]"
                                              }`}
                                            >
                                              <svg
                                                className="h-3 w-3 shrink-0 text-certifyd-blue/40 transition-all duration-150 group-hover/link:text-certifyd-blue group-hover/link:translate-x-0.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                                />
                                              </svg>
                                              {child.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* ── Simple dropdown ── */
                        <div
                          className={`absolute left-1/2 top-full pt-3 -translate-x-1/2 transition-all duration-200 ease-out ${
                            activeDropdown === item.label
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 -translate-y-2 pointer-events-none"
                          }`}
                          onMouseEnter={cancelClose}
                          onMouseLeave={scheduleClose}
                        >
                          <div className="w-72 rounded-sm border border-white/[0.06] bg-navy shadow-2xl">
                            <div className="py-2">
                              {item.children!.map((child) => {
                                const ItemIcon =
                                  PRODUCT_ICONS[child.label] || RESOURCE_ICONS[child.label];
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`group/link flex items-start gap-3 px-4 py-3 transition-all duration-150 ${
                                      isActive(child.href)
                                        ? "text-white bg-white/[0.06]"
                                        : "text-text-on-dark-muted hover:text-white hover:bg-white/[0.06]"
                                    }`}
                                  >
                                    {ItemIcon && (
                                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-certifyd-blue/10 text-certifyd-blue transition-colors group-hover/link:bg-certifyd-blue/20">
                                        <ItemIcon className="h-4 w-4" />
                                      </div>
                                    )}
                                    <div className="min-w-0">
                                      <span className="block text-sm font-medium">
                                        {child.label}
                                      </span>
                                      {child.description && (
                                        <span className="block text-xs text-text-on-dark-muted mt-0.5 leading-relaxed">
                                          {child.description}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-white"
                          : "text-text-on-dark-muted hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact/"
                className="hidden rounded-sm bg-certifyd-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-certifyd-blue-light lg:inline-block"
              >
                Book a Demo
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-sm p-2 text-text-on-dark-muted transition-colors hover:text-white lg:hidden"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Click-away overlay */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40 hidden lg:block"
          onClick={() => setActiveDropdown(null)}
          aria-hidden="true"
        />
      )}

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

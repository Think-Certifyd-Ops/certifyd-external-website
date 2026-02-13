"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedTop, setExpandedTop] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Close menu on route change only
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onCloseRef.current();
      setExpandedTop(null);
      setExpandedSub(null);
    }
  }, [pathname]);

  // Reset expanded state when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedTop(null);
      setExpandedSub(null);
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleTop = (label: string) => {
    setExpandedTop((prev) => (prev === label ? null : label));
    setExpandedSub(null);
  };

  const toggleSub = (label: string) => {
    setExpandedSub((prev) => (prev === label ? null : label));
  };

  const hasMegaChildren = (children?: { children?: unknown[] }[]) =>
    children?.some((child) => child.children);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[calc(100vw-3rem)] bg-navy shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-navy-border">
            <img
              src="/logos/certifyd-logo-white.svg"
              alt={COMPANY.name}
              className="h-7 w-auto"
              style={{ width: "100px" }}
            />
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm p-2 text-text-on-dark-muted transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      {/* Top-level accordion trigger */}
                      <button
                        type="button"
                        onClick={() => toggleTop(item.label)}
                        className={`flex w-full items-center justify-between rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                          expandedTop === item.label
                            ? "text-white bg-white/[0.06]"
                            : "text-text-on-dark-muted hover:text-white hover:bg-white/[0.06]"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            expandedTop === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Expanded content */}
                      {expandedTop === item.label && (
                        <div className="mt-1 pb-2">
                          {hasMegaChildren(item.children) ? (
                            /* Two-level accordion: columns are sub-accordions */
                            <ul className="space-y-0.5 ml-2">
                              {item.children.map((column) => (
                                <li key={column.label}>
                                  {/* Sub-accordion trigger */}
                                  <button
                                    type="button"
                                    onClick={() => toggleSub(column.label)}
                                    className={`flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                                      expandedSub === column.label
                                        ? "text-certifyd-blue"
                                        : "text-text-on-dark-muted hover:text-white"
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="font-heading text-[10px] font-semibold uppercase tracking-wider">
                                        {column.label}
                                      </span>
                                      <span className="text-[10px] text-text-on-dark-muted/50">
                                        {column.children?.length}
                                      </span>
                                    </span>
                                    <svg
                                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                                        expandedSub === column.label ? "rotate-180" : ""
                                      }`}
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>

                                  {/* Sub-accordion children */}
                                  {expandedSub === column.label && (
                                    <ul className="ml-3 border-l border-certifyd-blue/20 pl-3 pb-1">
                                      {column.children?.map((child) => (
                                        <li key={child.href}>
                                          <Link
                                            href={child.href}
                                            onClick={onClose}
                                            className={`block rounded-sm px-2 py-1.5 text-sm transition-colors ${
                                              isActive(child.href)
                                                ? "text-white"
                                                : "text-text-on-dark-muted hover:text-white"
                                            }`}
                                          >
                                            {child.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            /* Simple one-level children */
                            <ul className="ml-2 border-l border-navy-border pl-3">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                                      isActive(child.href)
                                        ? "text-white"
                                        : "text-text-on-dark-muted hover:text-white"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-white bg-white/[0.06]"
                          : "text-text-on-dark-muted hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="border-t border-navy-border px-6 py-6">
            <Link
              href="/contact/"
              onClick={onClose}
              className="block w-full rounded-sm bg-certifyd-blue px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-certifyd-blue-light"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

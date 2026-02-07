import Link from "next/link";
import { COMPANY } from "@/lib/constants";

const solutionLinks = [
  { label: "Certify That Person", href: "/solutions/person/" },
  { label: "Certify That Business", href: "/solutions/business/" },
  { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
];

const industryLinks = [
  { label: "Recruitment", href: "/industries/recruitment/" },
  { label: "Trades", href: "/industries/trades/" },
  { label: "Care Homes", href: "/industries/care/" },
  { label: "Workforce", href: "/industries/workforce/" },
];

const companyLinks = [
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
  { label: "Careers", href: "/careers/" },
  { label: "Updates", href: "/updates/" },
];

export function Footer() {
  return (
    <footer className="bg-navy border-t border-navy-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-16">
          {/* Column 1: Logo + Tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logos/certifyd-logo-white.svg"
                alt={COMPANY.name}
                className="h-8 w-auto"
                style={{ width: "120px" }}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-on-dark-muted">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-text-on-dark-muted">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-text-on-dark-muted">
              Industries
            </h3>
            <ul className="space-y-3">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-text-on-dark-muted">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-text-on-dark-muted">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-text-on-dark-muted transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <p className="text-sm leading-relaxed text-text-on-dark-muted">
                  {COMPANY.address}
                </p>
              </li>
              <li>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-on-dark-muted transition-colors hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-border py-6">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-text-on-dark-muted">
              &copy; {new Date().getFullYear()} Certifyd Ltd. All rights
              reserved.
            </p>
            <p className="text-xs text-text-on-dark-muted">
              {COMPANY.address}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

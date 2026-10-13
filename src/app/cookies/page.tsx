import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = siteMetadata({
  title: "Cookie Policy — Certifyd",
  description:
    "Information about the cookies Certifyd uses, why we use them, and how to manage your preferences.",
  alternates: { canonical: "/cookies/" },
});

const sections = [
  {
    title: "1. What Are Cookies",
    content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the site owners. We use cookies and similar technologies (such as local storage and pixel tags) to improve your experience on our website.`,
  },
  {
    title: "2. Cookies We Use",
    content: `We use the following categories of cookies:

**Essential cookies** — These cookies are necessary for the website to function and cannot be switched off. They are typically set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms. Without these cookies, the site cannot function properly.

**Analytics cookies** — These cookies help us understand how visitors interact with our website by collecting information about pages visited, time spent, and navigation patterns. This data is aggregated and anonymised. We use this information to improve our website and services.

**Functional cookies** — These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings. If you do not allow these cookies, some features may not function as intended.`,
  },
  {
    title: "3. Third-Party Cookies",
    content: `Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:

- **Analytics providers** — To understand website usage and improve our services.
- **Hosting providers** — Our website is hosted on infrastructure that may set technical cookies necessary for delivery and security.

We do not use third-party advertising cookies or sell cookie data to advertisers.`,
  },
  {
    title: "4. Managing Your Preferences",
    content: `You can manage cookies through your browser settings. Most browsers allow you to:

- View what cookies are stored and delete them individually
- Block third-party cookies
- Block cookies from specific sites
- Block all cookies
- Delete all cookies when you close your browser

Please note that blocking all cookies may affect the functionality of our website and other sites you visit.

**Browser-specific instructions:**
- Chrome: Settings > Privacy and Security > Cookies
- Firefox: Settings > Privacy & Security > Cookies and Site Data
- Safari: Preferences > Privacy > Cookies and Website Data
- Edge: Settings > Cookies and Site Permissions`,
  },
  {
    title: "5. Changes to This Policy",
    content: `We may update this cookie policy from time to time to reflect changes in our practices or in applicable regulations. The date at the top of this page indicates when this policy was last updated.`,
  },
  {
    title: "6. Contact",
    content: `If you have questions about our use of cookies, contact us at:

**Certifyd Ltd**
Aldwych House, 71-91 Aldwych, London, England WC2B 4HN
Email: team@certifyd.io`,
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-certifyd-blue/40 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-heading font-medium rounded-full bg-certifyd-blue/15 text-certifyd-blue mb-6">
            Legal
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-text-on-dark">
            Cookie Policy
          </h1>
          <p className="text-text-on-dark-muted mt-4 text-lg">
            Last updated: February 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl font-semibold text-text-on-light mb-4">
                  {section.title}
                </h2>
                <div className="text-sm leading-relaxed text-text-on-light-muted whitespace-pre-line">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 0 ? (
                      part
                    ) : (
                      <strong key={i} className="text-text-on-light font-medium">
                        {part}
                      </strong>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-warm-border">
            <p className="text-sm text-text-on-light-muted">
              See also:{" "}
              <Link
                href="/privacy/"
                className="text-certifyd-blue hover:underline"
              >
                Privacy Policy
              </Link>
              {" | "}
              <Link
                href="/security/"
                className="text-certifyd-blue hover:underline"
              >
                Security & Trust
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

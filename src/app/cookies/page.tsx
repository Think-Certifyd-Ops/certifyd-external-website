import { siteMetadata } from "@/lib/story/metadata";
import type { Metadata } from "next";
import {CookieChoices} from "@/components/measurement/CookieChoices";
import Link from "next/link";

export const metadata: Metadata = siteMetadata({
  title: "Cookie Policy — Certifyd",
  description:
    "Information about the cookies Certifyd uses, why we use them, and how to manage your preferences.",
  alternates: { canonical: "/cookies/" },
});

const sections = [
  {title:"1. Cookies and similar storage",content:"Cookies and browser storage can remember a choice or support a website process. This notice covers the public Certifyd website; embedded services such as Cal.com also have their own notices."},
  {title:"2. Your privacy choice",content:"The rg_privacy_choice cookie records your analytics and marketing preferences for up to 180 days. A choice record containing its identifier, version, time and page is sent to the shared RogerSon consent service. The privacy controls remain available through Cookie settings. Advertising tags are disabled on this website."},
  {title:"3. Optional analytics and campaign context",content:"Google Analytics loads after analytics permission. It measures pages and events using pseudonymous identifiers; this is not a promise of anonymous data. Our custom demo and lead events exclude names, email addresses, messages and booking identifiers. With permission, sessionStorage entries certifyd_utm and certifyd_demo_entry keep limited landing, referring-domain, campaign and placement context for the tab session. Withdrawing analytics permission clears that optional session context and the known analytics cookies."},
  {title:"4. Enquiries, newsletters and booking services",content:"The current page and form placement can accompany an enquiry you choose to submit. Netlify handles website forms; the privacy notice explains contact, guide and newsletter processing. The Cal.com calendar may use its own technical storage and service worker for the booking flow. Blocking an embedded service in your browser can affect its operation; you can use the separate Cal.com link on the contact page."},
  {title:"5. Change or withdraw a choice",content:"Use Cookie settings on any page, or the button below, to review your choice. Reject non-essential leaves optional analytics disabled. You can withdraw a previous analytics choice there; the page reloads when needed to stop previously activated analytics. Browser settings also let you inspect, block or delete site data."},
  {title:"6. Contact",content:"For questions about this website’s storage or your data, contact Certifyd Ltd at team@certifyd.io or Aldwych House, 71-91 Aldwych, London, England WC2B 4HN."},
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
            Last updated: 13 October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-8"><CookieChoices/></div>
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

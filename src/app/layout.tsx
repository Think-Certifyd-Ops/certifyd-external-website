import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/marketing.css";
import "@/styles/connected.css";
import "@/styles/story.css";
import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import {DemoClickTracking} from "@/components/measurement/DemoClickTracking";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";
import {ConsentWidget} from "@/components/measurement/ConsentWidget";
import {ConsentAttribution} from "@/components/measurement/ConsentAttribution";
import {InternalNavigation} from "@/components/measurement/InternalNavigation";
import {PageBreadcrumbs} from "@/components/seo/PageBreadcrumbs";

const ibmPlexMono = localFont({src:"../../public/images/connected/ibm-plex-mono-700.woff2",variable:"--font-ibm-plex-mono",weight:"700",display:"swap"});
const ibmPlexSans = localFont({src:"../../public/images/connected/ibm-plex-sans.woff2",variable:"--font-ibm-plex-sans",weight:"100 900",display:"swap"});

export const metadata: Metadata = {
  metadataBase: new URL("https://certifyd.io"),
  title: {
    default:
      "Certifyd | Workplace credentials and compliance",
    template: "%s",
  },
  description:
    "Manage workforce credentials, company records, expiry dates and site attendance with Certifyd.",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/podcast/feed.xml",
    },
  },
  openGraph: {
    title: "Certifyd | Workplace credentials and compliance",
    description:
      "Manage workforce credentials, company records, expiry dates and site attendance with Certifyd.",
    url: "https://certifyd.io",
    siteName: "Certifyd",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifyd | Workplace credentials and compliance",
    description:
      "Manage workforce credentials, company records, expiry dates and site attendance with Certifyd.",
  },
  icons: {
    icon: "/logos/certifyd-icon-blue.svg",
    apple: "/logos/certifyd-icon-blue.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="roger-group-consent-default"
          dangerouslySetInnerHTML={{ __html: "window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});" }}
        />
        <ConsentWidget/>
        <Script
          id="rogerson-newsletter"
          src="https://rogerson-signups.netlify.app/newsletter-widget.js"
          strategy="afterInteractive"
          data-brand="Certifyd"
          data-domain="certifyd.io"
          data-slug="certifyd"
        />
        <script type="text/plain" data-consent="analytics" data-consent-src="https://www.googletagmanager.com/gtag/js?id=G-FNMZS9PQ1S" />
        <script type="text/plain" data-consent="analytics" dangerouslySetInnerHTML={{__html:"window.gtag('js',new Date());window.gtag('config','G-FNMZS9PQ1S');"}} />
      </head>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <a className="site-skip-link" href="#page-content">Skip to main content</a>
        <MarketingHeader />
        <DemoClickTracking/>
        <ConsentAttribution/>
        <InternalNavigation/>
        <main id="page-content" tabIndex={-1}><PageBreadcrumbs/>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

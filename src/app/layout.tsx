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
        <Script
          id="roger-group-consent"
          src="https://rogerson-signups.netlify.app/consent-widget.js"
          strategy="afterInteractive"
          data-brand="Certifyd"
          data-domain="certifyd.io"
          data-analytics="true"
          data-marketing="false"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FNMZS9PQ1S"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNMZS9PQ1S');
          `}
        </Script>
        {/* Capture UTM params + gclid for Google Ads attribution */}
        <Script id="utm-capture" strategy="afterInteractive">
          {`
            (function(){
              try {
                var params = new URLSearchParams(window.location.search);
                var keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','gclid'];
                if(sessionStorage.getItem('certifyd_utm')) return;
                var stored = {_landing:window.location.pathname};
                try { if(document.referrer) stored._referrer = new URL(document.referrer).hostname; } catch(e){}
                keys.forEach(function(k){
                  var v = params.get(k);
                  if(v && v.length <= 200 && /^[a-z0-9_.:/ -]+$/i.test(v)) stored[k] = v;
                });
                if(Object.keys(stored).length > 0){
                  sessionStorage.setItem('certifyd_utm', JSON.stringify(stored));
                }
              } catch(e){}
            })();
          `}
        </Script>
      </head>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <a className="site-skip-link" href="#page-content">Skip to main content</a>
        <MarketingHeader />
        <DemoClickTracking/>
        <main id="page-content" tabIndex={-1}><PageBreadcrumbs/>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

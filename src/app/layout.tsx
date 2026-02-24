import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.certifyd.io"),
  title: {
    default:
      "Certifyd — Identity Verification for Businesses | Right-to-Work & Compliance",
    template: "%s | Certifyd",
  },
  description:
    "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready — in 30 seconds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Certifyd — Identity Verification for Businesses",
    description:
      "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready — in 30 seconds.",
    url: "https://www.certifyd.io",
    siteName: "Certifyd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/logos/Blue Certifyd Icon.png",
        width: 512,
        height: 512,
        alt: "Certifyd — Identity Verification for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Certifyd — Identity Verification for Businesses",
    description:
      "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready — in 30 seconds.",
    images: ["/logos/Blue Certifyd Icon.png"],
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
      </head>
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <OrganizationSchema />
        <WebSiteSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

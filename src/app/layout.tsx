import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: {
    default: "Certifyd — The Identity Layer for Businesses",
    template: "%s | Certifyd",
  },
  description:
    "Affordable identity verification that works before the offer, before the interview, before you let someone through the door.",
  openGraph: {
    title: "Certifyd — The Identity Layer for Businesses",
    description:
      "Affordable identity verification that works before the offer, before the interview, before you let someone through the door.",
    url: "https://www.certifyd.io",
    siteName: "Certifyd",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifyd — The Identity Layer for Businesses",
    description:
      "Affordable identity verification that works before the offer, before the interview, before you let someone through the door.",
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
      <body
        className={`${ibmPlexMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

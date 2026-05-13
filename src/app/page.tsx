import type { Metadata } from "next";
import { ScrollReveal } from "@/components/marketing/ScrollReveal";
import { homepageBody } from "./_marketing-html/homepage";

export const metadata: Metadata = {
  title: "Certifyd — Workers carry their credentials. Certifyd when it matters.",
  description:
    "Live workforce compliance for care providers, NHS trusts, and staffing agencies. Two-way verification in seconds. Audit-ready, always.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Certifyd — Workers carry their credentials. Certifyd when it matters.",
    description:
      "Live workforce compliance for care providers, NHS trusts, and staffing agencies. Two-way verification in seconds. Audit-ready, always.",
    url: "https://www.certifyd.io",
  },
};

export default function Home() {
  return (
    <>
      <div className="marketing">
        <a className="skip" href="#hero">
          Skip to main content
        </a>
        <div dangerouslySetInnerHTML={{ __html: homepageBody }} />
      </div>
      <ScrollReveal />
    </>
  );
}

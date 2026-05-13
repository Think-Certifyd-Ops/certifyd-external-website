import type { Metadata } from "next";
import { ScrollReveal } from "@/components/marketing/ScrollReveal";
import { careBody } from "../../_marketing-html/care";

export const metadata: Metadata = {
  title:
    "Certifyd for Care Providers · Live workforce compliance for CQC-regulated care",
  description:
    "DBS, Care Certificate, training - verified live, every shift. CQC-ready audit trail without the chase. For care providers and domiciliary agencies.",
  alternates: { canonical: "/industries/care" },
  openGraph: {
    title: "Certifyd for Care Providers",
    description:
      "DBS, Care Certificate, training - verified live, every shift. CQC-ready audit trail without the chase.",
    url: "https://www.certifyd.io/industries/care",
  },
};

export default function CareProvidersPage() {
  return (
    <>
      <div className="marketing">
        <a className="skip" href="#hero">
          Skip to main content
        </a>
        <div dangerouslySetInnerHTML={{ __html: careBody }} />
      </div>
      <ScrollReveal />
    </>
  );
}

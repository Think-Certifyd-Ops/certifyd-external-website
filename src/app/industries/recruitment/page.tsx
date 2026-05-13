import type { Metadata } from "next";
import { ScrollReveal } from "@/components/marketing/ScrollReveal";
import { recruitmentBody } from "../../_marketing-html/recruitment";

export const metadata: Metadata = {
  title:
    "Certifyd for Recruitment Agencies · Workers turn up compliant, clients see the proof",
  description:
    "Right to Work, DBS, references, qualifications - verified once, carried everywhere. REC-aligned audit trail. No more workers rejected at the gate.",
  alternates: { canonical: "/industries/recruitment" },
  openGraph: {
    title: "Certifyd for Recruitment Agencies",
    description:
      "Right to Work, DBS, references, qualifications - verified once, carried everywhere. REC-aligned audit trail.",
    url: "https://www.certifyd.io/industries/recruitment",
  },
};

export default function RecruitmentPage() {
  return (
    <>
      <div className="marketing">
        <a className="skip" href="#hero">
          Skip to main content
        </a>
        <div dangerouslySetInnerHTML={{ __html: recruitmentBody }} />
      </div>
      <ScrollReveal />
    </>
  );
}

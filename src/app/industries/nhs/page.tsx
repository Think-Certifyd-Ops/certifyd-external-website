import type { Metadata } from "next";
import { ScrollReveal } from "@/components/marketing/ScrollReveal";
import { nhsBody } from "../../_marketing-html/nhs";

export const metadata: Metadata = {
  title: "Certifyd for NHS Trusts · The Staff Passport gap, trust-controlled",
  description:
    "Verify NMC, GMC, mandatory training and ID before the shift starts. Built for bank, agency, and substantive staff. DSPT-aligned, audit-ready.",
  alternates: { canonical: "/industries/nhs" },
  openGraph: {
    title: "Certifyd for NHS Trusts",
    description:
      "The Staff Passport gap, trust-controlled. NMC, GMC, mandatory training - verified live, every shift. DSPT-aligned.",
    url: "https://www.certifyd.io/industries/nhs",
  },
};

export default function NhsTrustsPage() {
  return (
    <>
      <div className="marketing">
        <a className="skip" href="#hero">
          Skip to main content
        </a>
        <div dangerouslySetInnerHTML={{ __html: nhsBody }} />
      </div>
      <ScrollReveal />
    </>
  );
}

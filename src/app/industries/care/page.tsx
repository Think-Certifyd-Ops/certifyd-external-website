import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { ShiftMonitor } from "@/components/graphics/ShiftMonitor";

export const metadata: Metadata = {
  title: "Care Homes & Vulnerable Populations — Staff Verification",
  description:
    "Rotating agency staff. Vulnerable residents. Families left in the dark. Certifyd changes that with real-time staff verification and CQC-ready audit trails.",
  alternates: { canonical: "/industries/care/" },
  openGraph: {
    title: "Care Home Staff Verification | Certifyd",
    description:
      "Real-time staff verification for care homes. Know who's looking after your family. CQC-ready audit trails.",
    url: "https://www.certifyd.io/industries/care/",
  },
};

export default function CarePage() {
  const howItWorksSteps = [
    "Agency staff scan in with QR code on arrival \u2014 verified identity, time, and location",
    "Care home dashboard shows who\u2019s on shift, when they arrived, and compliance status",
    "Families can see who\u2019s looking after their parent \u2014 \"Sarah Johnson, Verified by Certifyd, Arrived 22:00\"",
    "Families can authorise visitors \u2014 friends and relatives verified and logged before entry",
    "CQC audit-ready records maintained for every shift",
  ];

  return (
    <>
      <SolutionHero
        badge="Care Homes"
        title="Know Who's Looking After Your Family"
        subtitle="Rotating agency staff. Vulnerable residents. Families left in the dark."
      >
        <ShiftMonitor />
      </SolutionHero>

      <ProblemSection
        problems={[
          "Care homes rely on agency staff for nights and weekends \u2014 often different people every shift.",
          "Families have no idea who\u2019s looking after their elderly parent. They can\u2019t check. They can\u2019t verify.",
          "39% of adult safeguarding concerns in care settings involve staff or volunteers.",
          "1.5 million people work in adult social care in England \u2014 many rotating between multiple sites.",
          "A staff member can give a false name. Nobody checked. Nobody could.",
        ]}
      />

      <SolutionSteps steps={howItWorksSteps} />

      <RelatedContent
        solutions={[
          { label: "Certifyd Portal", href: "/products/portal/" },
          { label: "Certifyd CodeWords", href: "/products/codewords/" },
          { label: "Certifyd ID", href: "/products/id/" },
        ]}
        articles={[
          { label: "The Care Home Staffing Crisis", href: "/blog/care-home-staffing-crisis/" },
          { label: "The Safeguarding Gap in Care Homes", href: "/blog/safeguarding-gap-care-homes/" },
          { label: "Why Audit Trails Matter for Compliance", href: "/blog/audit-trails-compliance/" },
        ]}
        resources={[
          { label: "CQC — Regulation 19: Fit and Proper Persons Employed", href: "https://www.cqc.org.uk/guidance-providers/regulations/regulation-19-fit-proper-persons-employed", external: true },
          { label: "CQC — Safeguarding People", href: "https://www.cqc.org.uk/guidance-providers/all-services/safeguarding-people", external: true },
        ]}
      />

      <SolutionCTA
        title="Protect your residents"
        primaryLabel="Try the Portal demo"
        href="/products/portal/demo/"
        secondaryLabel="Book a demo"
        secondaryHref="/contact/"
      />
    </>
  );
}

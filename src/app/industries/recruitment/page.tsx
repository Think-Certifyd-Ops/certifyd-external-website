import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { WithWithout } from "@/components/solutions/WithWithout";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { RecruitmentScreening } from "@/components/graphics/RecruitmentScreening";

export const metadata: Metadata = {
  title: "Recruitment & Right-to-Work Verification",
  description:
    "Pre-screen right-to-work status at application stage. Before interviews. Before emotional investment. Before fines. Avoid up to £60,000 civil penalties.",
  alternates: { canonical: "/industries/recruitment/" },
  openGraph: {
    title: "Recruitment & Right-to-Work Verification | Certifyd",
    description:
      "Pre-screen right-to-work status at application stage. Avoid up to £60,000 civil penalties per illegal worker.",
    url: "https://www.certifyd.io/industries/recruitment/",
  },
};

export default function RecruitmentPage() {
  return (
    <>
      <SolutionHero
        badge="Recruitment"
        title="From 3 Weeks of Wasted Time to 30 Seconds"
        subtitle="Pre-screen right-to-work status at application stage. Before interviews. Before emotional investment. Before fines."
      >
        <RecruitmentScreening />
      </SolutionHero>

      <ProblemSection
        problems={[
          "Candidates give technically-true-but-misleading answers to \"right to work?\" questions.",
          "HR discovers weeks later: graduate visa, dependent visa, needs sponsorship.",
          "Up to \u00a360,000 civil penalty per illegal worker. Criminal prosecution up to 5 years.",
          "Fair Work Agency (April 2026): walk-in audit powers for every UK business.",
        ]}
      />

      <WithWithout
        without={[
          "Post job \u2014 2,000 applicants",
          "\"Right to work?\" \"Yes.\"",
          "3 weeks of interviews and assessment",
          "Discover visa issue at offer stage",
          "Start over or risk \u00a360k fine",
          "No audit trail of due diligence",
        ]}
        with_certifyd={[
          "Post job with \"Apply via Certifyd\"",
          "Candidate verifies in 30 seconds",
          "Anonymised status shown: \u2705 Full rights / \u26a0\ufe0f Graduate visa / \u26a0\ufe0f Needs sponsorship",
          "Filter before investing time",
          "Interview only qualified candidates",
          "Audit trail automatic and complete",
        ]}
      />

      <RelatedContent
        solutions={[
          { label: "Certifyd Portal", href: "/products/portal/" },
          { label: "Certifyd Screen", href: "/products/verify/" },
          { label: "Certifyd Sentinel", href: "/products/sentinel/" },
          { label: "Certifyd CodeWords", href: "/products/codewords/" },
        ]}
        articles={[
          { label: "The Real Cost of a Bad Hire", href: "/blog/real-cost-bad-hire/" },
          { label: "5 Signs Your Right-to-Work Process Has Gaps", href: "/blog/right-to-work-gap-signs/" },
          { label: "Deepfake Candidates: The New Recruitment Threat", href: "/blog/deepfake-candidates-recruitment/" },
        ]}
        resources={[
          { label: "GOV.UK — Right to Work Checks: Employer Guide", href: "https://www.gov.uk/government/publications/right-to-work-checks-employers-guide", external: true },
          { label: "GOV.UK — Penalties for Employing Illegal Workers", href: "https://www.gov.uk/government/publications/illegal-working-penalties", external: true },
          { label: "ACAS — Recruitment and Induction", href: "https://www.acas.org.uk/hiring-someone", external: true },
        ]}
      />

      <SolutionCTA
        title="Prepare for the Fair Work Agency"
        primaryLabel="Try Screen free"
        href="https://recruiter.certifyd.io"
        secondaryLabel="Book a demo"
        secondaryHref="/contact/"
      />
    </>
  );
}

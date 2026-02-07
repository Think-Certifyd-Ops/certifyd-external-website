import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { WithWithout } from "@/components/solutions/WithWithout";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RecruitmentScreening } from "@/components/graphics/RecruitmentScreening";

export const metadata: Metadata = {
  title: "Recruitment & Right-to-Work",
  description:
    "Pre-screen right-to-work status at application stage. Before interviews. Before emotional investment. Before fines.",
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

      <SolutionCTA
        title="Prepare for the Fair Work Agency"
        secondaryLabel="Read more about the Fair Work Agency"
        secondaryHref="/blog/fair-work-agency-april-2026"
      />
    </>
  );
}

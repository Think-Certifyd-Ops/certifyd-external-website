import { OnboardingLanding } from "@/components/OnboardingLanding";
import { onboardingPages } from "@/lib/onboarding-pages";
import { pageMetadata } from "@/lib/story/metadata";

const topic = "candidate-document-collection";
const page = onboardingPages[topic];

export const metadata = pageMetadata(page.title, page.description, page.path);

export default function Page() {
  return <OnboardingLanding topic={topic} />;
}

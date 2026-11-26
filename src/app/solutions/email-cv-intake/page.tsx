import { pageMetadata } from "@/lib/story/metadata";
import { OnboardingLanding } from "@/components/OnboardingLanding";
export const metadata=pageMetadata("Email and CV intake automation","Bring emailed CVs and application returns into a shared onboarding queue with clear next actions.","/solutions/email-cv-intake/");
export default function Page(){return <OnboardingLanding slug="solutions/email-cv-intake"/>}

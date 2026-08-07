import type { Metadata } from "next";
import { CodeWordsAudiencePage } from "@/components/codewords/CodeWordsAudiencePage";

export const metadata: Metadata = {
  title: "CodeWords for Families | Check Trusted Requests",
  description:
    "Connect trusted family phones in person, then challenge unusual money, account, and safety requests through the enrolled phone.",
  alternates: { canonical: "/products/codewords/family/" },
  openGraph: {
    title: "CodeWords for Families | Meet Once. Check Any Time.",
    description:
      "Give your family a separate way to check unusual calls, messages, money requests, and emergencies.",
    url: "https://www.certifyd.io/products/codewords/family/",
  },
};

const scenarios = [
  {
    title: "An urgent request for money",
    body: "A caller or message says a family member needs money now. Send a CodeWords challenge that names the amount and reason before you transfer anything.",
  },
  {
    title: "A new bank or account detail",
    body: "Challenge a request to share a password, reveal a one-time code, change an account, or send money to new details.",
  },
  {
    title: "A worrying call or message",
    body: "Check through the trusted phone when the voice, number, writing style, or story feels different from the person you know.",
  },
  {
    title: "A safety or collection change",
    body: "Confirm an unexpected request about a child, older relative, journey, collection, or change of plan before anyone acts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect in person",
    body: "Meet with the person you trust. One phone shows a rotating QR session while the other scans it and Bluetooth checks that both devices are nearby.",
  },
  {
    number: "02",
    title: "Approve the connection",
    body: "Both people compare the same words and number, then use their phone to approve. The relationship is bound to those enrolled devices.",
  },
  {
    number: "03",
    title: "Challenge unusual requests",
    body: "Later, describe the exact request in CodeWords. The trusted phone can approve it, deny it, or report that the person is under pressure.",
  },
];

const faqs = [
  {
    question: "Does CodeWords listen to calls or read messages?",
    answer: "No. You open CodeWords when you choose to challenge a request. The app does not need to listen to your calls or read your private messages.",
  },
  {
    question: "Why do we have to meet first?",
    answer: "The first in-person connection gives both people a chance to confirm who they are trusting and which phones belong in the relationship before an urgent request arrives.",
  },
  {
    question: "What happens if someone loses or replaces a phone?",
    answer: "The old device and its trusted connections are revoked during recovery. The person creates a new account and reconnects with trusted people in person.",
  },
  {
    question: "Can a scammer still pressure someone to approve?",
    answer: "Yes. No app can remove coercion. CodeWords offers deny and pressure responses, but you should stop and use another check whenever an approval or situation feels wrong.",
  },
];

export default function CodeWordsFamilyPage() {
  return (
    <CodeWordsAudiencePage
      audience="family"
      eyebrow="CodeWords for personal and family use"
      headline="When a message feels wrong, check with the phone you trust."
      intro="Connect with family and close friends while you are together. If an unusual call, text, or email arrives later, challenge the exact request through their enrolled phone before you act."
      primaryLabel="Join the family release"
      secondaryLabel="See CodeWords for business"
      secondaryHref="/products/codewords/business/"
      proofNote="CodeWords confirms an enrolled phone and a specific request. It does not identify a voice, message, or video on its own."
      requestLabel="Money request"
      requestText="Approve sending £240 for the train home?"
      scenariosTitle="Pause the requests that use panic against you."
      scenariosIntro="CodeWords gives you a familiar second channel when a request is urgent, unusual, or expensive enough to deserve a check."
      scenarios={scenarios}
      steps={steps}
      distinctionTitle="A private check built before the crisis."
      distinctionBody="A shared secret can be overheard or copied. A code sent in the same chat can be intercepted. CodeWords uses the trusted phone you connected in person, then asks that phone to approve the exact request through a separate channel."
      faqs={faqs}
    />
  );
}

import type { Metadata } from "next";
import { CodeWordsAudiencePage } from "@/components/codewords/CodeWordsAudiencePage";

export const metadata: Metadata = {
  title: "CodeWords for Personal Use | Check Unusual Requests",
  description:
    "Connect with family and close friends in person, then check unusual money, account, and safety requests through their trusted phone.",
  alternates: { canonical: "/products/codewords/family/" },
  openGraph: {
    title: "CodeWords for Personal Use | Meet Once. Check Any Time.",
    description:
      "Give family and close friends a separate way to check unusual calls, messages, money requests, and emergencies.",
    url: "https://certifyd.io/products/codewords/family/",
  },
};

const scenarios = [
  {
    title: "A family emergency that needs money now",
    body: "A caller or message says someone you love needs help immediately. Challenge the amount and reason in CodeWords before you transfer anything.",
  },
  {
    title: "A friend contacts you from a new number",
    body: "The name and story sound right, but the number is unfamiliar. Check the request through the phone you connected with your friend in person.",
  },
  {
    title: "A request for a code or account detail",
    body: "Pause before sharing a password, one-time code, bank detail, or personal information, even when the request appears to come from someone you know.",
  },
  {
    title: "A last-minute safety or collection change",
    body: "Check an unexpected change involving a child, older relative, journey, collection, or meeting place before anyone acts.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect while you are together",
    body: "One phone shows changing signed QR frames. The other scans them and exchanges a fresh signed Bluetooth challenge with the nearby phone.",
  },
  {
    number: "02",
    title: "Approve the connection",
    body: "Both people compare the same words and number, then use their phone to approve. The relationship is bound to those enrolled devices.",
  },
  {
    number: "03",
    title: "Stop and check unusual requests",
    body: "Later, describe the exact request in CodeWords. Your trusted person can approve it, deny it, or say that they are under pressure.",
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
      audience="personal"
      eyebrow="CodeWords for Personal Use"
      headline="When someone you trust asks for help, check somewhere safer."
      intro="Connect with family and close friends while you are together. If an unusual call, text, or email arrives later, check the exact request through their trusted phone before you act."
      primaryLabel="Get App Store updates"
      secondaryLabel="See CodeWords for business"
      secondaryHref="/products/codewords/business/"
      proofNote="CodeWords confirms an enrolled phone and a specific request. It does not identify a voice, message, or video on its own."
      requestLabel="Money request"
      requestText="Approve sending £240 for the train home?"
      scenariosTitle="Take urgency out of the decision."
      scenariosIntro="Use CodeWords when a request is unusual, urgent, or important enough to deserve a separate check with the person you know."
      scenarios={scenarios}
      steps={steps}
      distinctionTitle="Trust is set up before the crisis."
      distinctionBody="A shared secret can be overheard or copied. A code sent in the same chat can be intercepted. CodeWords uses the phone you connected in person, then asks that phone to approve the exact request through a separate signed path."
      habitTitle="Agree one rule before anything happens."
      habitBody="If a request creates panic, asks for secrecy, or demands immediate action, stop the original conversation and open CodeWords yourself. A real friend or relative should expect the check, not take offence at it."
      habitPoints={[
        "Pause the original call, text, or email.",
        "Open CodeWords yourself, never from a link in the message.",
        "Describe the exact request and wait for a fresh answer.",
        "Stop completely if the answer is denied, pressured, or unclear.",
      ]}
      faqs={faqs}
    />
  );
}

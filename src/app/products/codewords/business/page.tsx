import type { Metadata } from "next";
import { CodeWordsAudiencePage } from "@/components/codewords/CodeWordsAudiencePage";

export const metadata: Metadata = {
  title: "CodeWords for Business | Challenge Sensitive Requests",
  description:
    "Give finance, operations, and leadership a trusted second channel for payment, access, data, and account-change requests.",
  alternates: { canonical: "/products/codewords/business/" },
  openGraph: {
    title: "CodeWords for Business | Verify Before You Act",
    description:
      "Challenge sensitive instructions through a trusted enrolled phone before your team acts.",
    url: "https://www.certifyd.io/products/codewords/business/",
  },
};

const scenarios = [
  {
    title: "Payment and bank-detail changes",
    body: "Challenge the amount, recipient, and reason through the enrolled phone before finance releases a payment or accepts new bank details.",
  },
  {
    title: "Executive and supplier instructions",
    body: "Check an urgent instruction made by call, text, email, or video without relying on the same channel that carried the request.",
  },
  {
    title: "Access and recovery requests",
    body: "Add a trusted approval before resetting an account, changing an administrator, issuing a credential, or granting sensitive access.",
  },
  {
    title: "Sensitive data and file requests",
    body: "Confirm who approved a request before the team shares payroll, customer, legal, financial, or confidential company information.",
  },
];

const steps = [
  {
    number: "01",
    title: "Enrol trusted people",
    body: "Connect colleagues, principals, or suppliers in person. Rotating QR and authenticated Bluetooth help bind the relationship to two nearby devices.",
  },
  {
    number: "02",
    title: "Define the exact action",
    body: "When a sensitive instruction arrives, create a short challenge that records what is being requested, not just who appears to be asking.",
  },
  {
    number: "03",
    title: "Approve on a separate channel",
    body: "The enrolled phone shows the action and requires protected approval. Your team sees an approve, deny, pressure, expired, or revoked result before acting.",
  },
];

const faqs = [
  {
    question: "Does this replace our payment approval process?",
    answer: "No. CodeWords adds a trusted device challenge to an existing control. Keep your dual approvals, call-backs, payment limits, and bank controls in place.",
  },
  {
    question: "Can we use it with phone, email, text, and video?",
    answer: "Yes. The request can arrive through any medium because the challenge and response happen through the separate CodeWords app.",
  },
  {
    question: "What can an approval prove?",
    answer: "It proves that the enrolled phone signed approval for the exact request shown in CodeWords. It does not prove that the original voice, email, or video was genuine, or that the phone holder was free from pressure.",
  },
  {
    question: "How should we start a pilot?",
    answer: "Choose one narrow workflow with a clear owner and meaningful consequence, such as bank-detail changes or urgent executive payment requests. Enrol a small group and measure whether the extra check improves decisions.",
  },
];

export default function CodeWordsBusinessPage() {
  return (
    <CodeWordsAudiencePage
      audience="business"
      eyebrow="CodeWords for business"
      headline="Put sensitive requests through a trusted second channel."
      intro="Connect trusted people and phones before an urgent instruction arrives. Then challenge the exact payment, access, account, or data request outside the call, email, or message that carried it."
      primaryLabel="Book a pilot call"
      primaryHref="https://cal.com/andrew-speer/certifyd-discovery"
      secondaryLabel="See CodeWords for families"
      secondaryHref="/products/codewords/family/"
      proofNote="CodeWords strengthens an existing approval process. It does not replace dual control, payment limits, call-backs, or formal identity checks."
      requestLabel="Payment approval"
      requestText="Approve £18,400 to new supplier details?"
      scenariosTitle="Challenge the instructions that carry real consequences."
      scenariosIntro="Use CodeWords where impersonation, a compromised account, or a rushed decision could move money, expose data, or grant access."
      scenarios={scenarios}
      steps={steps}
      distinctionTitle="Check the action, not just the message."
      distinctionBody="Email headers, caller ID, familiar writing, and a face on video can all create false confidence. CodeWords sends the exact action to a phone enrolled in person, so the approval arrives through an independent, device-bound path."
      faqs={faqs}
    />
  );
}

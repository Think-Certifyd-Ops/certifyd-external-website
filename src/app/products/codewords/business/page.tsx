import type { Metadata } from "next";
import { CodeWordsAudiencePage } from "@/components/codewords/CodeWordsAudiencePage";

export const metadata: Metadata = {
  title: "CodeWords for Business | A Trusted Second Channel",
  description:
    "Help teams challenge sensitive requests with trusted colleagues, suppliers, and clients before money moves, access changes, or data is shared.",
  alternates: { canonical: "/products/codewords/business/" },
  openGraph: {
    title: "CodeWords for Business | Give Requests a Trusted Route Back",
    description:
      "Build trusted links inside your organisation and with suppliers and clients, then check sensitive requests before your team acts.",
    url: "https://certifyd.io/products/codewords/business/",
  },
};

const scenarios = [
  {
    title: "Inside your organisation",
    body: "Connect colleagues, leaders, finance, IT, and operations before an urgent instruction arrives. Give each person a separate way to check the exact request.",
  },
  {
    title: "With suppliers",
    body: "Create trusted links with regular supplier contacts, then challenge bank-detail changes, unusual invoices, urgent orders, and account requests outside email.",
  },
  {
    title: "With clients",
    body: "Give named client contacts a trusted route for checking instructions, file requests, approvals, and last-minute changes before either side acts.",
  },
  {
    title: "Across access, money, and data",
    body: "Use the same checking habit before changing account access, releasing a payment, sharing a sensitive file, or accepting new contact details.",
  },
];

const steps = [
  {
    number: "01",
    title: "Build the trusted links first",
    body: "Start with the people inside your organisation, then add named supplier and client contacts. Direct setup binds each relationship to the phones used when they meet.",
  },
  {
    number: "02",
    title: "Challenge the exact action",
    body: "When a sensitive instruction arrives, record what is being requested, including the amount, recipient, account, file, or access change.",
  },
  {
    number: "03",
    title: "Wait for the separate answer",
    body: "The trusted phone shows the action and requires protected approval. Your team sees an approved, denied, pressured, expired, or revoked result before acting.",
  },
];

const faqs = [
  {
    question: "Does this replace our payment approval process?",
    answer: "No. CodeWords adds a trusted device challenge to your existing controls. Keep dual approvals, independent call-backs, payment limits, bank controls, and access policies in place.",
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
    question: "How should we start?",
    answer: "Start inside your organisation with one narrow workflow, such as bank-detail changes or urgent executive requests. Give the team a clear rule for when to stop and check. Add selected suppliers or clients only after that habit works internally.",
  },
];

export default function CodeWordsBusinessPage() {
  return (
    <CodeWordsAudiencePage
      audience="business"
      eyebrow="CodeWords for business"
      headline="Give every sensitive request a trusted route back."
      intro="Build trusted links between colleagues first, then extend them to the suppliers and clients you work with. When an unusual instruction arrives, check the exact request outside the call, email, message, or video meeting that carried it."
      primaryLabel="Discuss CodeWords for business"
      primaryHref="https://cal.com/andrew-speer/certifyd-discovery"
      secondaryLabel="See CodeWords for personal use"
      secondaryHref="/products/codewords/family/"
      proofNote="CodeWords strengthens an existing approval process. It does not replace dual control, payment limits, call-backs, or formal identity checks."
      requestLabel="Payment approval"
      requestText="Approve £18,400 to new supplier details?"
      scenariosTitle="Start internally. Extend trust deliberately."
      scenariosIntro="Create a known route back to the people whose requests can move money, expose data, grant access, or change a plan."
      scenarios={scenarios}
      steps={steps}
      distinctionTitle="Familiar faces are no longer enough."
      distinctionBody="A convincing video meeting can show familiar colleagues and still be an impersonation. CodeWords does not analyse the face, voice, or email. It sends the exact action to a phone connected through direct setup, so the answer returns through a separate signed path."
      habitTitle="The technology only works when checking is normal."
      habitBody="CodeWords adds a layer of trust, not an invisible shield. Your organisation still needs a clear rule: when a request is urgent, unusual, or sensitive, stop the original conversation and challenge the action. Leaders must make that behaviour expected, especially when a request appears to come from them."
      habitPoints={[
        "Pause the original call, message, or meeting.",
        "Open CodeWords independently, never from a supplied link.",
        "Challenge the exact action, not just the person\u2019s name.",
        "Keep your existing approvals, call-backs, and account controls.",
      ]}
      faqs={faqs}
    />
  );
}

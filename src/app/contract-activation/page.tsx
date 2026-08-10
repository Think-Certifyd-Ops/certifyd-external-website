import type { Metadata } from "next";
import { ContractActivationDemo } from "./ContractActivationDemo";
import styles from "./contract-activation.module.css";

export const metadata: Metadata = {
  title: "Contract Activation for Workforce Suppliers",
  description:
    "Turn client contracts into source-linked supplier, organisation and personnel compliance requirements with a human-reviewed activation pack.",
  alternates: { canonical: "/contract-activation/" },
  openGraph: {
    title: "Turn the contract into the compliance plan",
    description:
      "A source-linked Contract Activation Pack for staffing, managed-service and regulated workforce suppliers.",
    url: "https://www.certifyd.io/contract-activation/",
  },
};

const includedItems = [
  "A source-linked responsibility register",
  "Organisation and personnel compliance matrix",
  "Missing-document and ambiguity list",
  "Owners, dates, evidence and recurrence",
  "Existing-process gaps",
  "A first 30-day activation plan",
];

const processSteps = [
  {
    number: "01",
    title: "Share the governing stack",
    body: "MSA, SOW, schedules, amendments and incorporated policies. Redacted documents are welcome.",
  },
  {
    number: "02",
    title: "We compile and review it",
    body: "Requirements are separated by owner, linked to their source and checked by a person before release.",
  },
  {
    number: "03",
    title: "You activate the work",
    body: "Use the matrix in your current ATS, VMS, portal or compliance process. No platform migration is required.",
  },
];

export default function ContractActivationPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Certifyd Contract Activation</p>
              <h1>Turn the contract into the compliance plan.</h1>
              <p className={styles.heroLead}>
                We read the complete client contract stack and produce a
                source-linked register of what the client, your organisation
                and every affected worker must do.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#worked-example">
                  See the worked example
                  <span aria-hidden="true">↓</span>
                </a>
                <a className={styles.secondaryButton} href="/contact/">
                  Request a reviewed pack
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className={styles.trustLine}>
                Human-reviewed before you act. Redacted documents welcome.
                No anonymous contract upload.
              </p>
            </div>

            <div className={styles.compilerCard} aria-label="Example contract activation output">
              <div className={styles.compilerTopbar}>
                <span>Governing stack</span>
                <span className={styles.liveBadge}>Compiled</span>
              </div>
              <div className={styles.documentList}>
                {[
                  ["MSA", "MSA-2026-041"],
                  ["SOW", "SOW-2026-007"],
                  ["AMD", "AMD-2026-001"],
                  ["POL", "PSP-4.2"],
                  ["SCH", "UK / US"],
                ].map(([type, name]) => (
                  <div className={styles.documentRow} key={name}>
                    <span className={styles.documentType}>{type}</span>
                    <span>{name}</span>
                    <span className={styles.documentCheck} aria-label="Included">✓</span>
                  </div>
                ))}
              </div>
              <div className={styles.compileRule}>
                <span>32 source-linked requirements</span>
              </div>
              <div className={styles.ownerGrid}>
                <div>
                  <span className={styles.ownerCount}>Client</span>
                  <span>Dependencies</span>
                </div>
                <div>
                  <span className={styles.ownerCount}>Supplier</span>
                  <span>Controls</span>
                </div>
                <div>
                  <span className={styles.ownerCount}>Person</span>
                  <span>Requirements</span>
                </div>
              </div>
              <p className={styles.syntheticNote}>
                Illustrative output from a synthetic benchmark. Counts show
                the worked example, not a customer contract.
              </p>
            </div>
          </div>

          <div className={styles.proofStrip}>
            <span>Source linked</span>
            <span>Owner separated</span>
            <span>Person specific</span>
            <span>Change aware</span>
          </div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <div className={styles.problemGrid}>
            <div>
              <p className={styles.sectionLabel}>The handover gap</p>
              <h2>A signed contract is not an operating process.</h2>
            </div>
            <div className={styles.problemBody}>
              <p>
                The obligations sit across the MSA, statement of work,
                schedules, policies and later amendments. Someone still has
                to decide which requirements belong to the client, the
                supplier or each person.
              </p>
              <p>
                If that interpretation is wrong, teams chase unnecessary
                documents, miss real controls or discover the gap when a
                worker is due to start.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.demoSection} id="worked-example">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Worked example</p>
            <h2>See how the same clause changes the work.</h2>
            <p>
              This guided demo uses a fictional financial-services contract
              stack built to test precedence, applicability and ownership.
            </p>
          </div>
          <ContractActivationDemo />
        </div>
      </section>

      <section className={styles.outputSection}>
        <div className={styles.container}>
          <div className={styles.outputGrid}>
            <div className={styles.outputCopy}>
              <p className={styles.sectionLabel}>What you receive</p>
              <h2>A working register, not another contract summary.</h2>
              <p>
                The pack is designed for the people who must activate a new
                client, configure the compliance process and prove what was
                done later.
              </p>
            </div>
            <ul className={styles.includedList}>
              {includedItems.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>The reviewed pilot</p>
            <h2>Start with one real contract stack.</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article className={styles.processCard} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div>
              <p className={styles.sectionLabel}>Important questions</p>
              <h2>Clear limits build better evidence.</h2>
            </div>
            <div className={styles.faqList}>
              <article>
                <h3>Is this legal advice?</h3>
                <p>
                  No. The pack turns agreed documents into an operational
                  compliance register. Legal interpretation stays with your
                  legal advisers.
                </p>
              </article>
              <article>
                <h3>Do we need to replace our ATS or VMS?</h3>
                <p>
                  No. The first pack is delivered as a register and matrix you
                  can use in the systems and processes you already have.
                </p>
              </article>
              <article>
                <h3>How do we share confidential documents?</h3>
                <p>
                  Do not attach them to your initial enquiry. We agree
                  scope, handling and a secure transfer method before any
                  contract is shared.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

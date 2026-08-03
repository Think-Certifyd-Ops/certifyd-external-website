"use client";

import { useState } from "react";
import styles from "./contract-activation.module.css";

type RequirementOwner = "Client" | "Supplier" | "Person" | "Question";

interface DemoResult {
  owner: RequirementOwner;
  title: string;
  detail: string;
  source: string;
}

interface DemoScenario {
  id: string;
  tab: string;
  heading: string;
  documents: string[];
  sourceLabel: string;
  sourceText: string;
  results: DemoResult[];
}

const scenarios: DemoScenario[] = [
  {
    id: "owners",
    tab: "Separate the owners",
    heading: "One workflow, three accountable parties",
    documents: ["MSA-2026-041", "SOW-2026-007"],
    sourceLabel: "MSA 3.1 to 3.3 and SOW 4.1 to 4.4",
    sourceText:
      "Supplier conducts its allocated checks and maintains status. Client assigns category and access, provides Client-delivered training and makes final access decisions. Client obligations must not be assigned to Supplier personnel.",
    results: [
      {
        owner: "Supplier",
        title: "Run and evidence the allocated checks",
        detail:
          "Supplier owns lawful notices, checks, evidence collection and current compliance status.",
        source: "MSA 3.1",
      },
      {
        owner: "Client",
        title: "Assign access and make the clearance decision",
        detail:
          "The Client owns category, access profile, training availability and final access approval.",
        source: "MSA 3.2; SOW 4",
      },
      {
        owner: "Person",
        title: "Complete declarations and applicable training",
        detail:
          "Each person completes the required forms and courses, but does not own Client approval.",
        source: "MSA 7 and 8",
      },
      {
        owner: "Question",
        title: "Track the dependency without creating a false task",
        detail:
          "The Client clearance can block readiness, but it must not appear as an overdue worker action.",
        source: "SOW 4.4",
      },
    ],
  },
  {
    id: "precedence",
    tab: "Resolve a conflict",
    heading: "The later amendment changes the screening rule",
    documents: ["AMD-2026-001", "PSP-4.2", "CS-UK-US-2026-1"],
    sourceLabel: "Amendment 1.1; Policy 2; Country Schedule 2.2",
    sourceText:
      "The general policy permits criminal-record screening by category. The signed amendment limits the United States lookback to five years, or less where local law requires it. Category II workers are not in scope.",
    results: [
      {
        owner: "Supplier",
        title: "Apply the signed amendment first",
        detail:
          "The United States criminal-record lookback is capped at five years, even if the general policy says seven.",
        source: "AMD-2026-001 1",
      },
      {
        owner: "Person",
        title: "Do not screen Category II workers",
        detail:
          "The worked example excludes Category II from this check, avoiding an unnecessary and potentially unlawful request.",
        source: "PSP-4.2 2",
      },
      {
        owner: "Person",
        title: "Check access before assigning the task",
        detail:
          "Category III screening applies only where eligible unescorted site access is required.",
        source: "CS-UK-US-2026-1 1.2 and 2.3",
      },
      {
        owner: "Question",
        title: "Does local law shorten the period again?",
        detail:
          "The five-year cap is a maximum. A shorter lawful period still takes precedence.",
        source: "AMD-2026-001 1",
      },
    ],
  },
  {
    id: "levels",
    tab: "Avoid duplicate tasks",
    heading: "Company obligations are not worker credentials",
    documents: ["MSA-2026-041", "SOW-2026-007"],
    sourceLabel: "MSA 13.1 to 13.3; SOW 3.4 and 3.5",
    sourceText:
      "Supplier maintains professional indemnity and cyber insurance and provides annual evidence. These are company-level obligations. Supplier also submits and updates the worker roster as an operations task.",
    results: [
      {
        owner: "Supplier",
        title: "Maintain two company insurance controls",
        detail:
          "Record insurance once against the supplier organisation and set the annual evidence cycle.",
        source: "MSA 13.1 and 13.2",
      },
      {
        owner: "Supplier",
        title: "Submit the roster before each proposed start",
        detail:
          "Supplier operations owns the roster deadline and the one-business-day change update.",
        source: "SOW 3.4 and 3.5",
      },
      {
        owner: "Person",
        title: "Create no insurance upload task for workers",
        detail:
          "The contract expressly prevents the organisation control from being copied onto each person.",
        source: "MSA 13.3",
      },
      {
        owner: "Question",
        title: "Which system owns the organisation record?",
        detail:
          "Agree where annual insurance evidence and its review outcome will be maintained.",
        source: "Implementation decision",
      },
    ],
  },
];

const ownerClass: Record<RequirementOwner, string> = {
  Client: styles.ownerClient,
  Supplier: styles.ownerSupplier,
  Person: styles.ownerPerson,
  Question: styles.ownerQuestion,
};

export function ContractActivationDemo() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const active = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0];

  function selectScenario(id: string) {
    setActiveId(id);
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "contract_activation_demo_view", {
        event_category: "product_demo",
        event_label: id,
      });
    }
  }

  return (
    <div className={styles.demoShell}>
      <div className={styles.demoTabs} role="tablist" aria-label="Contract analysis examples">
        {scenarios.map((scenario) => (
          <button
            type="button"
            role="tab"
            aria-selected={scenario.id === active.id}
            className={scenario.id === active.id ? styles.demoTabActive : styles.demoTab}
            key={scenario.id}
            onClick={() => selectScenario(scenario.id)}
          >
            {scenario.tab}
          </button>
        ))}
      </div>

      <div className={styles.demoGrid}>
        <article className={styles.sourcePanel}>
          <div className={styles.panelHeader}>
            <span>Source documents</span>
            <span>{active.documents.length} in view</span>
          </div>
          <div className={styles.documentChips}>
            {active.documents.map((document) => (
              <span key={document}>{document}</span>
            ))}
          </div>
          <p className={styles.sourceReference}>{active.sourceLabel}</p>
          <blockquote>{active.sourceText}</blockquote>
          <div className={styles.sourceFooter}>
            <span>Fictional benchmark</span>
            <span>Source retained</span>
          </div>
        </article>

        <div className={styles.resultPanel}>
          <div className={styles.panelHeader}>
            <span>Activation output</span>
            <span>Human review required</span>
          </div>
          <h3>{active.heading}</h3>
          <div className={styles.resultList}>
            {active.results.map((result) => (
              <article className={styles.resultCard} key={`${active.id}-${result.title}`}>
                <div className={styles.resultCardTop}>
                  <span className={`${styles.ownerPill} ${ownerClass[result.owner]}`}>
                    {result.owner}
                  </span>
                  <span className={styles.resultSource}>{result.source}</span>
                </div>
                <h4>{result.title}</h4>
                <p>{result.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

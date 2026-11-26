import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { ContactButton, DemoButton } from "@/components/site/Buttons";
import { Faqs } from "@/components/site/Faqs";
import {
  careChecklist,
  onboardingPages,
  type OnboardingPage,
  type OnboardingPageKey,
} from "@/lib/onboarding-pages";
import styles from "./OnboardingLanding.module.css";

const sectorResources = {
  "healthcare-staffing": {
    href: "/resources/recruitment-placement-evidence-checklist/",
    label: "Recruitment placement evidence checklist",
  },
  "care-providers": {
    href: "/resources/worker-record-review-checklist/",
    label: "Worker record review checklist",
  },
} as const;

function WorkflowExample({ page }: { page: OnboardingPage }) {
  return (
    <figure className={styles.example} data-layout={page.layout}>
      <figcaption className={styles.exampleCaption}>
        <span>{page.example}</span>
        <span className={styles.exampleTag}>Illustrative example</span>
      </figcaption>
      <div className={styles.window}>
        <div className={styles.windowBar}>
          <span className={styles.windowIcon} aria-hidden="true">
            {page.layout === "file" ? "GO" : null}
          </span>
          <div>
            <strong>{page.person}</strong>
            <p>{page.context}</p>
          </div>
        </div>
        {page.layout === "queue" && (
          <div className={styles.columns} aria-hidden="true">
            <span>Applicant</span>
            <span>Next action</span>
          </div>
        )}
        {page.layout === "inbox" && (
          <div className={styles.source}>
            <span>From the recruitment inbox</span>
            <span className={styles.attachment}>Support-worker-CV.pdf</span>
          </div>
        )}
        <ol className={styles.exampleRows}>
          {page.rows.map((row) => (
            <li key={row.name} className={styles.exampleRow} data-tone={row.tone}>
              <span className={styles.rowMark} aria-hidden="true">
                {page.layout === "queue"
                  ? row.name.split(" ").map((name) => name[0]).join("")
                  : row.tone === "done" ? "✓" : row.tone === "review" ? "!" : "·"}
              </span>
              <div className={styles.rowCopy}>
                <strong>{row.name}</strong>
                <p>{row.detail}</p>
              </div>
              <span className={styles.status}>{row.status}</span>
            </li>
          ))}
        </ol>
        {page.layout === "file" && (
          <p className={styles.note}><strong>Next decision</strong> Manager to review the reference before sign-off</p>
        )}
        {page.layout === "timeline" && (
          <p className={styles.note}><strong>Reminders stopped</strong> Reference now with your reviewer</p>
        )}
      </div>
    </figure>
  );
}

export function OnboardingLanding({ topic }: { topic: OnboardingPageKey }) {
  const page = onboardingPages[topic];
  const resource = topic === "care-providers" || topic === "healthcare-staffing" ? sectorResources[topic] : null;
  const links = page.related.map((key) => key === "checklist" ? careChecklist : onboardingPages[key]);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Onboarding workflows", href: "/solutions/" },
    { name: page.label, href: page.path },
  ];

  return (
    <div className="cd page">
      <BreadcrumbSchema items={crumbs} />
      <section className={`section on-paper ${styles.heroSection}`} aria-labelledby="onboarding-title">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/solutions/#workflow-topics">Onboarding workflows</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.crumb}</span>
          </nav>
          <div className={styles.hero}>
            <div className="stack gap-24">
              <p className="eyebrow">{page.label}</p>
              <h1 id="onboarding-title" className={styles.title}>{page.headline}</h1>
              <p className="lead">{page.lead}</p>
              <div className="btn-row">
                <DemoButton label="Book a walkthrough" />
                <a className="btn btn-ghost" href="#workflow">{page.demo}</a>
              </div>
            </div>
            <WorkflowExample page={page} />
          </div>
        </div>
      </section>

      <section id="workflow" className="section on-white" aria-labelledby="workflow-title">
        <div className={`wrap ${styles.workflow}`}>
          <div className="stack gap-20">
            <h2 id="workflow-title" className="h2">{page.outcome}</h2>
            <p className="lead">{page.intro}</p>
            {resource && (
              <div className={styles.resource}>
                <Link href={resource.href}>{resource.label}</Link>
                <Link href="/regulations/">Browse checks by job</Link>
              </div>
            )}
          </div>
          <ol className={styles.steps}>
            {page.steps.map((step) => (
              <li className="stack gap-8" key={step.title}>
                <h3 className="h3">{step.title}</h3>
                <p className="body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight on-ink" aria-labelledby="walkthrough-title">
        <div className={`wrap ${styles.walkthrough}`}>
          <div className="stack gap-16">
            <h2 id="walkthrough-title" className="h2">{page.close}</h2>
            <p className="lead">{page.closeBody}</p>
          </div>
          <div className="btn-row">
            <DemoButton label="Book a walkthrough" />
            <ContactButton label="Message Certifyd" />
          </div>
        </div>
      </section>

      <Faqs title="Questions before you start" items={[...page.faqs]} />

      <section className="section-tight on-white" aria-labelledby="related-title">
        <div className="wrap stack gap-24">
          <h2 id="related-title" className="h3">Explore related workflows</h2>
          <div className={styles.related}>
            {links.map((link) => (
              <Link key={link.path} href={link.path} className={styles.relatedLink}>
                <strong>{link.label}</strong>
                <span>{link.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

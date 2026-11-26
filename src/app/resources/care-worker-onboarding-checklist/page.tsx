import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { DemoButton } from "@/components/site/Buttons";
import { careChecklist, onboardingPages } from "@/lib/onboarding-pages";
import { pageMetadata } from "@/lib/story/metadata";
import styles from "./checklist.module.css";

const sections = [
  {
    id: "application",
    title: "Review the application",
    owner: "Recruiter or hiring manager",
    items: [
      ["Gather the application and CV", "Record the role, site and applicant’s contact details. Put the form and CV next to the application record so the next reviewer can find both."],
      ["Review the employment history", "Ask the applicant about gaps or unclear dates and record their explanation. Identify which previous employers you need to contact under your policy."],
      ["Assign someone to review the file", "Agree who will request the evidence, who will review it and who will decide whether the worker can start."],
    ],
  },
  {
    id: "checks",
    title: "Collect and review pre-employment evidence",
    owner: "Recruitment or compliance lead",
    items: [
      ["Complete the right to work check", "Follow the applicable GOV.UK checking route before employment and record who completed the check and when."],
      ["Confirm the appropriate DBS route", "Check eligibility for the role and follow your approved process. Record the outcome your policy requires and restrict access to sensitive records."],
      ["Request and review references", "Separate requests sent, replies received and references accepted. Follow up on missing or conflicting information before closing the task."],
      ["Review role-specific evidence", "Check qualifications, professional registration and training where the role requires them. Log any outstanding evidence and its owner."],
    ],
  },
  {
    id: "first-shift",
    title: "Plan induction and sign off the first shift",
    owner: "Registered manager or delegated reviewer",
    items: [
      ["Give the worker a start plan", "Confirm the site, shift, supervisor and induction activities. Schedule shadowing or supervised work where required."],
      ["Record the start decision", "Have the designated reviewer document the decision, supporting evidence and any conditions on the start. Make outstanding tasks visible to the person arranging the shift."],
      ["Set follow-up dates", "Record when you’ll review supervision, training and any time-limited checks. Give each task an owner before handing the file over."],
    ],
  },
] as const;

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Onboarding workflows", href: "/solutions/" },
  { name: careChecklist.label, href: careChecklist.path },
];

export const metadata = pageMetadata(careChecklist.title, careChecklist.description, careChecklist.path);

export default function ChecklistPage() {
  return (
    <article className="cd page">
      <BreadcrumbSchema items={crumbs} />
      <header className={`section on-paper ${styles.hero}`}>
        <div className="wrap stack gap-24">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/solutions/#workflow-topics">Onboarding workflows</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Care checklist</span>
          </nav>
          <div className="stack gap-20">
            <p className="eyebrow">Hiring guide for care providers in England</p>
            <h1 className="h1">Care worker onboarding checklist</h1>
            <p className="lead">Give your recruitment team and registered manager a clear handover from application to first shift. Use this checklist alongside your recruitment policy and the requirements for the role.</p>
            <a className="btn btn-primary self-start" href="#application">Start the checklist</a>
          </div>
        </div>
      </header>

      <div className={`wrap ${styles.content}`}>
        <aside className={styles.sidebar}>
          <nav aria-label="Checklist sections" className="stack gap-12">
            <h2 className="h4">On this page</h2>
            {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
            <a href="#sources">Official guidance</a>
          </nav>
        </aside>

        <div className="stack gap-32">
          <p className={styles.hint}>Tick each item as you go. Record the evidence and decisions in your staff file.</p>
          {sections.map((section) => (
            <section className={`stack gap-12 ${styles.stage}`} id={section.id} key={section.id}>
              <h2 className="h3">{section.title}</h2>
              <p className="small">Suggested owner · {section.owner}</p>
              <ul className={styles.items}>
                {section.items.map(([task, detail], index) => {
                  const id = `${section.id}-item-${index}`;
                  return (
                    <li key={task}>
                      <input id={id} type="checkbox" aria-describedby={`${id}-detail`} />
                      <div>
                        <label htmlFor={id}>{task}</label>
                        <p id={`${id}-detail`}>{detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section id="sources" className={`stack gap-12 ${styles.stage}`}>
            <h2 className="h3">Official guidance</h2>
            <p className="body">Check the requirements for each role and follow your service’s recruitment policy for evidence, decisions and record retention.</p>
            <ul className={styles.sources}>
              <li><a href="https://www.cqc.org.uk/guidance-regulation/providers/regulations-service-providers-and-managers/health-social-care-act/regulation-19">CQC Regulation 19 on fit and proper persons employed</a></li>
              <li><a href="https://www.gov.uk/check-job-applicant-right-to-work">GOV.UK right to work checks for employers</a></li>
              <li><a href="https://www.gov.uk/find-out-dbs-check">GOV.UK DBS eligibility guidance</a></li>
            </ul>
          </section>
        </div>
      </div>

      <section className="section-tight on-ink" aria-labelledby="checklist-cta">
        <div className={`wrap ${styles.close}`}>
          <div className="stack gap-12">
            <h2 id="checklist-cta" className="h2">Turn your checklist into a workflow</h2>
            <p className="lead">Bring the forms and checks you use today. We’ll show you how Certifyd can send requests, follow up and bring the evidence back for your review.</p>
          </div>
          <div className="btn-row">
            <DemoButton label="Book an onboarding walkthrough" />
            <Link className="btn btn-secondary" href={onboardingPages["care-providers"].path}>Certifyd for care providers</Link>
          </div>
        </div>
      </section>
    </article>
  );
}

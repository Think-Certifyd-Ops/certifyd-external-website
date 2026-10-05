import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BuildingOffice2Icon, ClipboardDocumentCheckIcon, DocumentTextIcon, UserGroupIcon, UserMinusIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import styles from "./compliance-risk.module.css";

export const metadata: Metadata = {
  title: "Reduce Workforce Compliance Risk",
  description:
    "Catch missing, expired and unverified worker evidence before it becomes an audit failure. Keep Right to Work, DBS, training and role records ready in Certifyd.",
  alternates: {
    canonical: "/outcomes/reduce-compliance-risk/",
  },
  openGraph: {
    title: "Reduce Workforce Compliance Risk | Certifyd",
    description:
      "Catch missing, expired and unverified worker evidence before it becomes an audit failure.",
    url: "https://www.certifyd.io/outcomes/reduce-compliance-risk/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const CAL_URL = "https://cal.com/andrew-speer/certifyd-discovery";

const moments = [
  {
    label: "Before day one",
    body: "Collect and review the evidence their role needs.",
    detail: "Requirements → evidence → review",
    icon: UserPlusIcon,
  },
  {
    label: "Hired and in work",
    body: "Track evidence against each worker's role, site and expiry dates.",
    detail: "Person → role → location",
    icon: BuildingOffice2Icon,
  },
  {
    label: "Proof is requested",
    body: "Export documents, review decisions and follow-up dates in an audit pack.",
    detail: "Evidence → decision → audit pack",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    label: "Offboarding",
    body: "Record the end of employment and retain the required evidence.",
    detail: "Departure → retained record",
    icon: UserMinusIcon,
  },
];

const sectors = [
  {
    label: "Care provider",
    title: "Check care evidence.",
    body: "Review worker evidence by role and site.",
    evidence: "DBS · training · qualifications",
    href: "/industries/care/",
    link: "See Certifyd for care",
  },
  {
    label: "Employer",
    title: "Track Right to Work.",
    body: "Follow each worker's checks and expiry dates.",
    evidence: "Right to Work · review · follow-up",
    href: "/blog/right-to-work-check-documents-list/",
    link: "Review Right to Work evidence",
  },
  {
    label: "Staffing firm",
    title: "Check placement evidence.",
    body: "Check each placement against the client's requirements.",
    evidence: "Role · client · local requirements",
    href: "/industries/recruitment/",
    link: "See Certifyd for staffing",
  },
];

const roleExamples = [
  { name: "Care worker", evidence: ["Right to Work", "DBS", "Care training"] },
  { name: "Registered nurse", evidence: ["Right to Work", "DBS", "Professional registration"] },
  { name: "Office team", evidence: ["Right to Work", "Role-specific evidence"] },
];

const workflow = [
  ["Define", "Set the evidence each role and location requires."],
  ["Collect", "Workers upload documents into one record."],
  ["Review", "Your team confirms the evidence and records the decision."],
  ["Act", "Certifyd surfaces gaps, dates and follow-up work."],
  ["Report", "Generate a current summary and audit trail."],
];

export default function ReduceComplianceRiskPage() {
  return (
    <div className={`marketing ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.gridBackdrop} aria-hidden="true" />
        <div className={styles.shell}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Workforce compliance</p>
            <h1>
              Find and fix <span>compliance gaps.</span>
            </h1>
            <p className={styles.heroLead}>
              See missing, expired and unverified evidence. Keep each worker&apos;s
              documents, checks and follow-ups in one record.
            </p>
            <div className={styles.heroActions}>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Book a demo <span aria-hidden="true">→</span>
              </a>
              <a href="#control" className={styles.secondaryAction}>
                How it works <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <figure className={styles.productVisual}>
            {/* Review-only capture brief. Replace with the real People/worker
                record, using fictional demo data, before this page is released. */}
            <div className={styles.captureBrief}>
              <DocumentTextIcon aria-hidden="true" />
              <p>Product screenshot required</p>
              <strong>Show an expired Right to Work record.</strong>
              <span>Existing team · assigned role · expired evidence</span>
            </div>
            <figcaption className={styles.captureCaption}>Review draft: awaiting the correct platform capture.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.thesis}>
        <div className={`${styles.shell} ${styles.evidenceGrid}`}>
          <div className={styles.evidenceCopy}>
            <p className={styles.sectionLabel}>Missing and expired evidence</p>
            <h2>Find missing and expired evidence.</h2>
            <p>Check spreadsheet dates against the evidence in your folders. Keep documents, review decisions and follow-ups in each worker&apos;s record.</p>
            <div className={styles.evidenceFact}><DocumentTextIcon aria-hidden="true" /><span>Right to Work evidence</span><strong>Expired</strong></div>
          </div>
          <figure className={styles.evidenceArt}>
            <Image src="/images/outcomes/evidence-spreadsheet-folder.png" alt="Tactile paper illustration of an Excel spreadsheet and a workforce document folder, with matching expiry dates highlighted" width={1536} height={1024} sizes="(max-width: 720px) 100vw, 52vw" />
            <figcaption>Check the expiry date against the worker&apos;s evidence.</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.moments} id="control">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>The worker lifecycle</p>
            <h2>Track evidence from hire to departure.</h2>
          </div>
          <ol className={styles.timeline}>
            {moments.map((moment, index) => { const Icon = moment.icon; return (
              <li className={styles.moment} key={moment.label}>
                <div className={styles.timelineMarker}><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h3>{moment.label}</h3>
                <p className={styles.momentBody}>{moment.body}</p>
                <p className={styles.momentDetail}>{moment.detail}</p>
              </li>
            ); })}
          </ol>
        </div>
      </section>

      <section className={styles.productProof}>
        <div className={styles.shell}>
          <div className={styles.proofGrid}>
            <div className={styles.proofCopy}>
              <p className={styles.sectionLabel}>Requirements by role</p>
              <h2>Set role requirements.</h2>
              <p>Set your own evidence requirements. Track what each worker has supplied and what needs action.</p>
              <dl className={styles.definitionList}>
                <div>
                  <dt>Role rules</dt>
                  <dd>Give each person the list their role requires.</dd>
                </div>
                <div>
                  <dt>Review state</dt>
                  <dd>Keep accepted, missing and expired evidence distinct.</dd>
                </div>
                <div>
                  <dt>Recorded action</dt>
                  <dd>Keep the reviewer, decision and date with the record.</dd>
                </div>
              </dl>
            </div>

            <figure className={styles.roleDiagram}>
              <figcaption>Example role requirements</figcaption>
              <div className={styles.roleOrigin}><UserGroupIcon aria-hidden="true" /><span>Your people</span><ArrowRightIcon aria-hidden="true" /><span>Assigned role</span></div>
              <div className={styles.roleBranches}>{roleExamples.map((role) => <div key={role.name} className={styles.roleBranch}><h3>{role.name}</h3><ul>{role.evidence.map((item) => <li key={item}><DocumentTextIcon aria-hidden="true" />{item}</li>)}</ul></div>)}</div>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.sectorSection}>
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Care, employment and staffing</p>
            <h2>Set role and site checks.</h2>
          </div>
          <div className={styles.locationOrigin}><UserGroupIcon aria-hidden="true" /><span>Person</span><ArrowRightIcon aria-hidden="true" /><span>Role</span><ArrowRightIcon aria-hidden="true" /><span>Site</span></div>
          <div className={styles.sectorList}>
            {sectors.map((sector) => (
              <article className={styles.sector} key={sector.label}>
                <div className={styles.siteIllustration} aria-hidden="true"><BuildingOffice2Icon /><span /><span /><span /></div>
                <span>{sector.label}</span>
                <h3>{sector.title}</h3>
                <p>{sector.body}</p>
                <p className={styles.sectorEvidence}>{sector.evidence}</p>
                <Link href={sector.href}>{sector.link} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workflowSection}>
        <div className={styles.shell}>
          <div className={styles.workflowIntro}>
            <p className={styles.sectionLabel}>Compliance workflow</p>
            <h2>Keep compliance records current in five steps.</h2>
          </div>
          <ol className={styles.workflow}>
            {workflow.map(([title, body], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <p className={styles.boundaryNote}>
            Certifyd helps you operate and evidence your compliance process. Your
            organisation remains responsible for its checks, decisions and legal duties.
          </p>
        </div>
      </section>

      <section className={styles.close}>
        <div className={styles.shell}>
          <div className={styles.closeInner}>
            <div>
              <p className={styles.closeLabel}>20-minute platform review</p>
              <h2>Review one compliance process in 20 minutes.</h2>
            </div>
            <div className={styles.closeAction}>
              <p>
                Pick one role, one document set or one audit problem. We&apos;ll map it
                against the platform in 20 minutes.
              </p>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer">
                See your compliance gaps <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

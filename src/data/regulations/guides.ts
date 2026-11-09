/* Check guides (/regulations/checks/{slug}/) and rule-change guides (/regulations/changes/{slug}/).
   Written 6 November 2026 from the GOV.UK, CQC and Fair Work Agency pages listed under each guide.
   status "draft" = not yet reviewed by a person: built on previews only, always noindex. */

export type Guide = {
  slug: string; kind: "check" | "change"; title: string; h1: string; lead: string; date?: string; status: "draft" | "reviewed";
  metaTitle: string; metaDescription: string;
  sections: { h: string; p?: string[]; list?: string[] }[];
  sources: { title: string; href: string }[];
  roles?: string[];
};

const RTW_GUIDE = { title: "Home Office: Employer's guide to right to work checks, 1 October 2026", href: "https://assets.publishing.service.gov.uk/media/6ad9dfe29ea4857e15ab3294/Employer_s_guide_to_right_to_work_checks.pdf" };
const RTW_CODE = { title: "Home Office: Code of practice on preventing illegal working", href: "https://www.gov.uk/government/publications/illegal-working-penalties-codes-of-practice-for-employers" };
const RTW_OPS = { title: "Home Office: Illegal working operations guidance", href: "https://www.gov.uk/government/publications/powers-and-operational-procedure-caseworker-guidance/illegal-working-operations-accessible" };

export const GUIDES: Guide[] = [
  {
    slug: "right-to-work", kind: "check", status: "draft",
    title: "Right-to-work checks", h1: "Right-to-work checks: what they involve and what to keep.",
    lead: "Every employer must check that a person is allowed to do the work before they start. Done the prescribed way, the check gives you a statutory excuse against a civil penalty.",
    metaTitle: "Right-to-work checks explained for employers | Certifyd", metaDescription: "The three ways to check right to work, when to re-check, who is covered from 1 October 2026 and what records to keep, with the Home Office sources.",
    sections: [
      { h: "The three ways to check", list: ["A manual check of original documents from the Home Office lists, with the person present, and a dated copy kept.", "A Home Office online check using the share code the person gives you.", "A digital identity check through a registered digital verification service provider, for British and Irish citizens with a valid passport."] },
      { h: "When to check", p: ["Before the person starts work. If their permission is time-limited, check again before it runs out."] },
      { h: "Who is covered", p: ["Employees, and from 1 October 2026 also people on a worker's contract, individual subcontractors and people who find work through online matching services, for work that starts on or after that date. Liability can also extend up a chain of contracts."] },
      { h: "What to keep", p: ["A clear copy of the documents or the online check result, and the date you checked. The Home Office guide sets out how long to keep them after the work ends."] },
      { h: "What it costs to get wrong", p: ["Civil penalties reach up to £45,000 per illegal worker for a first breach and up to £60,000 for repeat breaches."] },
    ],
    sources: [RTW_GUIDE, RTW_CODE],
  },
  {
    slug: "dbs", kind: "check", status: "draft",
    title: "DBS checks", h1: "DBS checks: the four levels and when each one applies.",
    lead: "A Disclosure and Barring Service check shows a person's criminal record. The level you can ask for depends on the job, and the higher levels need the role to be eligible in law.",
    metaTitle: "DBS check levels explained for employers | Certifyd", metaDescription: "Basic, standard, enhanced and enhanced with barred lists: which DBS check a role can have, how the Update Service works and what changes in Scotland and NI.",
    sections: [
      { h: "The four levels", list: ["Basic: unspent convictions and conditional cautions. Any employer can ask for one.", "Standard: spent and unspent convictions, cautions, reprimands and final warnings, after filtering. Only for eligible roles.", "Enhanced: everything in a standard check, plus information local police think is relevant. Only for eligible roles.", "Enhanced with barred lists: an enhanced check that also searches the children's or adults' barred list, or both. For regulated activity."] },
      { h: "Who can apply", p: ["Standard and enhanced checks go through a registered body or an umbrella body, and the employer must be entitled by law to ask. Organisations doing fewer than 100 checks a year use an umbrella body.", "Since 21 January 2026, self-employed people and personal employees in eligible, paid roles can apply for an enhanced check themselves through an umbrella body."] },
      { h: "How long a check lasts", p: ["A DBS certificate has no official expiry date. Employers decide when to check again. If the person subscribes to the DBS Update Service, you can check their certificate's status online with their consent."] },
      { h: "Scotland and Northern Ireland", p: ["Scotland uses Disclosure Scotland, including the Protecting Vulnerable Groups (PVG) scheme. Northern Ireland uses AccessNI."] },
    ],
    sources: [{ title: "GOV.UK: Check someone's criminal record", href: "https://www.gov.uk/dbs-check-applicant-criminal-record" }, { title: "GOV.UK: DBS checks guidance for employers", href: "https://www.gov.uk/guidance/dbs-check-requests-guidance-for-employers" }, { title: "GOV.UK: DBS Update Service", href: "https://www.gov.uk/dbs-update-service" }, { title: "GOV.UK: Self-employed workers can now apply for enhanced DBS checks", href: "https://www.gov.uk/government/news/self-employed-workers-and-personal-employees-can-now-apply-for-enhanced-dbs-checks" }],
  },
  {
    slug: "right-to-work-october-2026", kind: "change", status: "draft", date: "1 October 2026",
    title: "Right-to-work checks now cover contract and platform work", h1: "Right-to-work checks now cover workers, subcontractors and platforms.",
    lead: "From 1 October 2026, the illegal working rules reach beyond employees. The change is not retrospective: it applies to work that starts on or after that date.",
    metaTitle: "Right-to-work changes from 1 October 2026 | Certifyd", metaDescription: "From 1 October 2026 right-to-work checks cover worker's contracts, individual subcontractors and online platforms, with extended liability up contract chains.",
    sections: [
      { h: "What changed", p: ["Section 48 of the Border Security, Asylum and Immigration Act 2025 amended the Immigration, Asylum and Nationality Act 2006. Updated Home Office guidance and codes of practice came into force on 1 October 2026."] },
      { h: "Who is now covered", list: ["People engaged on a worker's contract", "Individual subcontractors", "Service providers matched to clients through an online matching service"] },
      { h: "Extended liability", p: ["Liability can now pass beyond the business that engaged the worker, for example up a chain of contracts, to an online matching service, or where a substitution clause lets someone else do the work. The Home Office first looks to the business with the direct relationship. Others can protect themselves by meeting the prescribed contractual requirements."] },
      { h: "It is not retrospective", p: ["The Home Office says the new provisions don't create liability for working arrangements entered into before 1 October 2026. Repeat checks on existing workers follow the new codes when they fall due after that date."] },
      { h: "What to do", list: ["Check everyone who starts on or after 1 October 2026, whatever their contract", "Use a registered digital provider if you check digitally", "Make sure the person working is the person you checked", "Review contracts with suppliers, subcontractors and platforms for the new requirements"] },
    ],
    sources: [RTW_CODE, RTW_GUIDE, RTW_OPS],
  },
  {
    slug: "fair-work-agency", kind: "change", status: "draft", date: "7 April 2026",
    title: "The Fair Work Agency", h1: "The Fair Work Agency now enforces agency and gangmaster rules.",
    lead: "The Fair Work Agency launched on 7 April 2026. It brought the Employment Agency Standards Inspectorate and the Gangmasters and Labour Abuse Authority into one body.",
    metaTitle: "The Fair Work Agency: what agencies need to know | Certifyd", metaDescription: "The Fair Work Agency launched on 7 April 2026, taking over agency regulation and gangmaster licensing. What changes for staffing agencies and labour providers.",
    sections: [
      { h: "What it does", list: ["Enforces the rules for employment agencies and businesses, previously the Employment Agency Standards Inspectorate", "Runs gangmaster licensing across the UK, previously the GLAA", "Takes on national minimum wage enforcement from HMRC, with a full transfer expected in April 2027"] },
      { h: "What it means for you", p: ["It doesn't create new legal duties. Gangmaster licences carried on as before, now issued by the Fair Work Agency. Expect inspections and enforcement to be run differently, so keep your records ready."] },
    ],
    sources: [{ title: "business.gov.uk: Fair Work Agency", href: "https://www.business.gov.uk/campaign/employment-changes/employers/fair-work-agency/" }, { title: "GLAA Brief 90: Introducing the Fair Work Agency", href: "https://www.gla.gov.uk/publications/glaa-briefs/glaa-brief-90-introducing-the-fair-work-agency" }],
  },
  {
    slug: "oliver-mcgowan-code", kind: "change", status: "draft", date: "6 September 2025",
    title: "The Oliver McGowan code of practice", h1: "The Oliver McGowan code sets the standard for learning disability and autism training.",
    lead: "Since 1 July 2022, CQC-registered providers must make sure their staff get learning disability and autism training suited to their role. The code of practice, in force since 6 September 2025, sets the standard CQC checks against.",
    metaTitle: "Oliver McGowan training code: what care providers need | Certifyd", metaDescription: "The Oliver McGowan code of practice came into force on 6 September 2025. What CQC-registered providers must show for learning disability and autism training.",
    sections: [
      { h: "Who it applies to", p: ["Health and social care providers registered with CQC in England, and their staff, including agency staff working in their services."] },
      { h: "What CQC looks for", p: ["CQC uses the code when it assesses whether providers meet the training requirement. The Oliver McGowan Mandatory Training is the government's preferred and recommended package."] },
    ],
    sources: [{ title: "CQC: Training staff to support autistic people and people with a learning disability", href: "https://www.cqc.org.uk/guidance-providers/training-staff-support-autistic-people-and-people-learning-disability" }, { title: "GOV.UK: Oliver McGowan code of practice", href: "https://www.gov.uk/government/publications/oliver-mcgowan-code-of-practice" }],
  },
];

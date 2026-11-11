/* Check guides (/regulations/checks/{slug}/) and rule-change guides (/regulations/changes/{slug}/).
   Written 6 November 2026 from the GOV.UK, CQC and Fair Work Agency pages listed under each guide.
   status "draft" = not yet reviewed by a person. Live and indexed since 9 November 2026 (REGULATIONS_LIVE in src/lib/site.ts). */

export type Guide = {
  slug: string; kind: "check" | "change"; title: string; h1: string; lead: string; inShort: string; date?: string; status: "draft" | "reviewed";
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
    title: "Right-to-work checks", h1: "Right-to-work checks: how they work and what to keep.",
    lead: "Every employer must check that a person is allowed to do the work before they start. If you do the check the official way, you have a \"statutory excuse\". That protects you from a fine if it later turns out they weren't allowed to work, as long as you didn't know.",
    inShort: "Before anyone starts work, check they're allowed to work in the UK. Use one of the three official ways, keep a dated record, and check again before any permission to work runs out.",
    metaTitle: "Right-to-work checks explained for employers | Certifyd", metaDescription: "The three ways to check right to work, when to re-check, who is covered from 1 October 2026 and what records to keep, with the Home Office sources.",
    sections: [
      { h: "The three ways to check", list: ["Look at the original documents yourself, with the person there. The documents must be on the Home Office lists. Keep a dated copy.", "Check online with the Home Office, using a share code the person gives you.", "Use a registered digital ID provider. This works for British and Irish citizens with a valid passport."] },
      { h: "When to check", p: ["Before the person starts work. If their permission to work has an end date, check again before it runs out."] },
      { h: "Who is covered", p: ["Employees. Since 1 October 2026, also people on a \"worker\" contract, self-employed subcontractors, and people who find work through apps and websites. This applies to work that starts on or after that date.", "Companies higher up a chain of contracts can also be held responsible."] },
      { h: "What to keep", p: ["A clear copy of the documents, or the online check result, and the date you checked. The Home Office guide says how long to keep them after the work ends."] },
      { h: "What it costs to get wrong", p: ["A fine of up to £45,000 for each person working illegally the first time, and up to £60,000 if it happens again."] },
    ],
    sources: [RTW_GUIDE, RTW_CODE],
  },
  {
    slug: "dbs", kind: "check", status: "draft",
    title: "DBS checks", h1: "DBS checks: the four levels and when you need each one.",
    lead: "A DBS (Disclosure and Barring Service) check shows a person's criminal record. The level you can ask for depends on the job. The law only allows the higher levels for some jobs.",
    inShort: "A DBS check shows if someone has a criminal record. There are four levels. Any employer can ask for the basic one. The higher levels are only allowed for certain jobs, such as close work with children or vulnerable adults.",
    metaTitle: "DBS check levels explained for employers | Certifyd", metaDescription: "Basic, standard, enhanced and enhanced with barred lists: which DBS check a role can have, how the Update Service works and what changes in Scotland and NI.",
    sections: [
      { h: "The four levels", list: ["Basic: shows current (unspent) convictions and conditional cautions. Any employer can ask for one.", "Standard: shows old (spent) and current convictions, cautions, reprimands and final warnings. Some old, minor ones are left off. Only for certain jobs.", "Enhanced: everything in a standard check, plus anything local police think is relevant. Only for certain jobs.", "Enhanced with barred lists: an enhanced check that also looks at the lists of people banned from working with children, adults, or both. Only for \"regulated activity\", which means certain close work with children or vulnerable adults."] },
      { h: "Who can apply", p: ["Standard and enhanced checks go through a registered body, or an umbrella body that does it for you. The employer must be allowed by law to ask for that level. Organisations doing fewer than 100 checks a year use an umbrella body.", "Since 21 January 2026, self-employed people, and people employed directly by a private person, can apply for an enhanced check themselves through an umbrella body, if their paid job qualifies."] },
      { h: "How long a check lasts", p: ["A DBS certificate has no official end date. Each employer decides when to check again. If the person has joined the DBS Update Service, you can check their certificate online, if they agree."] },
      { h: "Scotland and Northern Ireland", p: ["Scotland uses Disclosure Scotland, including the Protecting Vulnerable Groups (PVG) scheme. Northern Ireland uses AccessNI."] },
    ],
    sources: [{ title: "GOV.UK: Check someone's criminal record", href: "https://www.gov.uk/dbs-check-applicant-criminal-record" }, { title: "GOV.UK: DBS checks guidance for employers", href: "https://www.gov.uk/guidance/dbs-check-requests-guidance-for-employers" }, { title: "GOV.UK: DBS Update Service", href: "https://www.gov.uk/dbs-update-service" }, { title: "GOV.UK: Self-employed workers can now apply for enhanced DBS checks", href: "https://www.gov.uk/government/news/self-employed-workers-and-personal-employees-can-now-apply-for-enhanced-dbs-checks" }],
  },
  {
    slug: "right-to-work-october-2026", kind: "change", status: "draft", date: "1 October 2026",
    title: "Right-to-work checks now cover more people", h1: "Right-to-work checks now cover more people, including subcontractors and gig workers.",
    lead: "Since 1 October 2026, the rules on illegal working cover more people than just employees. It only counts for work that starts on or after that date.",
    inShort: "Since 1 October 2026, you must check more people's right to work. That includes people on \"worker\" contracts, self-employed subcontractors and people who find work through apps. Check everyone who starts on or after that date, whatever their contract.",
    metaTitle: "Right-to-work changes from 1 October 2026 | Certifyd", metaDescription: "From 1 October 2026 right-to-work checks cover worker's contracts, individual subcontractors and online platforms, with extended liability up contract chains.",
    sections: [
      { h: "What changed", p: ["A new law (section 48 of the Border Security, Asylum and Immigration Act 2025) changed the older Immigration, Asylum and Nationality Act 2006. New Home Office guidance and codes of practice started on 1 October 2026."] },
      { h: "Who is now covered", list: ["People on a \"worker\" contract, which is different from an employee contract", "Self-employed subcontractors", "People who find customers through an app or website that matches them to work"] },
      { h: "Who can be fined", p: ["It isn't only the business that took the worker on. The Home Office looks at that business first. But it can also fine the businesses below, unless they put the required terms in their contracts."], list: ["A company higher up a chain of contracts", "An app or website that matched the worker to the job", "A business whose contract lets someone else do the work in the worker's place"] },
      { h: "It only covers work that starts from 1 October 2026", p: ["The Home Office says you can't be fined under the new rules for work arranged before 1 October 2026. But when a repeat check on an existing worker is due after that date, do it the new way."] },
      { h: "What to do", list: ["Check everyone who starts on or after 1 October 2026, whatever their contract", "If you check online, use a registered digital ID provider", "Make sure the person doing the work is the person you checked", "Check your contracts with suppliers, subcontractors and apps include the new required terms"] },
    ],
    sources: [RTW_CODE, RTW_GUIDE, RTW_OPS],
  },
  {
    slug: "fair-work-agency", kind: "change", status: "draft", date: "7 April 2026",
    title: "The Fair Work Agency", h1: "The Fair Work Agency now makes sure agencies and gangmasters follow the rules.",
    lead: "The Fair Work Agency started on 7 April 2026. It joined two older bodies into one: the Employment Agency Standards Inspectorate and the Gangmasters and Labour Abuse Authority.",
    inShort: "Since 7 April 2026, the Fair Work Agency checks that staffing agencies and gangmasters follow the rules, and gives out gangmaster licences. Your legal duties haven't changed, but keep your records ready for an inspection.",
    metaTitle: "The Fair Work Agency: what agencies need to know | Certifyd", metaDescription: "The Fair Work Agency launched on 7 April 2026, taking over agency regulation and gangmaster licensing. What changes for staffing agencies and labour providers.",
    sections: [
      { h: "What it does", list: ["Makes sure staffing agencies follow the rules. This used to be the Employment Agency Standards Inspectorate.", "Runs gangmaster licensing across the UK. This used to be the GLAA.", "Takes over checking the minimum wage from HMRC. The full move is expected in April 2027."] },
      { h: "What it means for you", p: ["It doesn't add new legal duties. Gangmaster licences carry on as before, but the Fair Work Agency now gives them out. Inspections may be run differently, so keep your records ready."] },
    ],
    sources: [{ title: "business.gov.uk: Fair Work Agency", href: "https://www.business.gov.uk/campaign/employment-changes/employers/fair-work-agency/" }, { title: "GLAA Brief 90: Introducing the Fair Work Agency", href: "https://www.gla.gov.uk/publications/glaa-briefs/glaa-brief-90-introducing-the-fair-work-agency" }],
  },
  {
    slug: "oliver-mcgowan-code", kind: "change", status: "draft", date: "6 September 2025",
    title: "The Oliver McGowan code of practice", h1: "The Oliver McGowan code: the learning disability and autism training care staff need.",
    lead: "Since 1 July 2022, care providers registered with CQC (the care regulator) must train their staff in learning disability and autism. The training must suit each person's job. Since 6 September 2025, the Oliver McGowan code sets the standard CQC checks this against.",
    inShort: "If you're a care provider registered with CQC in England, your staff need learning disability and autism training that suits their job. That includes agency staff. CQC checks your training against the Oliver McGowan code.",
    metaTitle: "Oliver McGowan training code: what care providers need | Certifyd", metaDescription: "The Oliver McGowan code of practice came into force on 6 September 2025. What CQC-registered providers must show for learning disability and autism training.",
    sections: [
      { h: "Who it applies to", p: ["Health and care providers registered with CQC in England, and their staff. That includes agency staff working in their services."] },
      { h: "What CQC looks for", p: ["CQC uses the code to decide if a provider's training is good enough. The government recommends the Oliver McGowan Mandatory Training course."] },
    ],
    sources: [{ title: "CQC: Training staff to support autistic people and people with a learning disability", href: "https://www.cqc.org.uk/guidance-providers/training-staff-support-autistic-people-and-people-learning-disability" }, { title: "GOV.UK: Oliver McGowan code of practice", href: "https://www.gov.uk/government/publications/oliver-mcgowan-code-of-practice" }],
  },
];

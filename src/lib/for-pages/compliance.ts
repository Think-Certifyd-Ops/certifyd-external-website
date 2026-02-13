import type { ForPage } from "./types";

export const COMPLIANCE_PAGES: ForPage[] = [
  /* ─────────────────────────────────────────────────────
     RIGHT-TO-WORK CHECKS
     ───────────────────────────────────────────────────── */
  {
    slug: "right-to-work-checks",
    category: "compliance",
    parentIndustry: "recruitment",
    title: "Certifyd for Right-to-Work Checks",
    metaTitle: "Right-to-Work Identity Verification | Certifyd",
    metaDescription:
      "Right-to-work checks that go beyond photocopied passports. Verify identity cryptographically and stay audit-ready for the Fair Work Agency.",
    badge: "Right to Work",
    headline: "A Photocopied Passport Is Not Proof. It Never Was.",
    subtitle:
      "Right-to-work checks require verifying a person\u2019s identity and immigration status. Certifyd adds cryptographic proof that the person presenting is the document holder \u2014 and creates audit-ready records.",
    heroCard: { name: "Laura Mitchell", company: "HR Director" },
    searchIntentParagraph:
      "Right-to-work identity verification with Certifyd goes beyond document checks. The current system \u2014 examining a passport or share code and keeping a copy on file \u2014 proves a document exists, not that the person presenting it is the document holder. Certifyd adds a cryptographic identity layer: the worker\u2019s identity is device-bound through a passkey, verified in real time, and linked to their right-to-work documentation. The result is tamper-proof verification records that prove not just that a check was done, but that the verified person is who they claim to be.",
    stats: [
      { value: "\u00a360K", label: "maximum penalty per illegal worker" },
      { value: "Apr 2026", label: "Fair Work Agency launches" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "UK employers are legally required to conduct right-to-work checks on every employee before they start work. The prescribed process involves examining original documents (passport, biometric residence permit, or share code) and keeping a dated copy. Failure to conduct these checks can result in civil penalties of up to \u00a360,000 per illegal worker under the Immigration, Asylum and Nationality Act 2006, and potential criminal prosecution.",
      "But the current system has a fundamental flaw: a photocopied passport proves that a passport was photocopied. It does not prove that the person who presented it is the passport holder. Names can be borrowed, documents can be shared, and biometric residence permits can be presented by the wrong person. The \u2018statutory excuse\u2019 \u2014 that you conducted the check in good faith \u2014 requires reasonable checks, not just paperwork.",
      "The Fair Work Agency, launching in April 2026, will consolidate enforcement powers from HMRC, the Gangmasters and Labour Abuse Authority, and the Employment Agency Standards Inspectorate. It will have enhanced powers to enter any business and demand evidence of compliance. Certifyd creates tamper-proof verification records that go beyond the current standard: each check is linked to a device-bound, cryptographically verified identity that cannot be forged, shared, or transferred.",
    ],
    problems: [
      "Photocopied passports prove a document was examined, not that the presenter is the document holder.",
      "Share codes verify immigration status but don\u2019t verify the identity of the person using them.",
      "Right-to-work checks are point-in-time \u2014 they don\u2019t confirm ongoing eligibility.",
      "The Fair Work Agency will demand stronger evidence than filing cabinets of photocopied documents.",
    ],
    steps: [
      "Worker registers their device with Certifyd, creating a cryptographic identity bound to their phone",
      "Right-to-work documentation is linked to their verified identity \u2014 not just filed in a drawer",
      "At each assignment or employment event, the worker\u2019s identity is re-verified in real time through their device",
      "A tamper-proof audit record is created: who was verified, when, how, and linked to which documentation",
    ],
    testimonial: {
      quote:
        "A lot of people are sleeping on what\u2019s about to happen. The Fair Work Agency will have the right to walk into any business \u2014 butchers, dog kennels, anyone \u2014 and ask for an audit.",
      attribution: "HR Director, UK employer",
    },
    faqs: [
      {
        question: "Does Certifyd replace the right-to-work check?",
        answer:
          "No. Employers must still examine the prescribed documents (passport, BRP, or digital share code) as required by law. Certifyd adds an identity verification layer on top: it confirms that the person presenting the documents is who they claim to be, through device-bound cryptographic authentication. This strengthens the statutory excuse by demonstrating that the employer took additional steps to verify identity, not just documents.",
      },
      {
        question: "What changes with the Fair Work Agency in April 2026?",
        answer:
          "The Fair Work Agency consolidates enforcement powers from multiple bodies into a single agency with enhanced inspection and penalty powers. It will be able to enter any business and demand evidence of right-to-work compliance for every worker. Businesses that can provide tamper-proof, per-worker verification records will be significantly better positioned than those relying on traditional document-based processes.",
      },
      {
        question: "How does Certifyd handle share code verification?",
        answer:
          "Share codes are generated through the Home Office\u2019s online service and verify a person\u2019s immigration status. Certifyd complements this by verifying the identity of the person using the share code \u2014 confirming through device-bound authentication that they are who they claim to be. The share code proves right to work; Certifyd proves the person is who they say they are. Together, they provide stronger assurance than either alone.",
      },
      {
        question: "What about repeat checks for time-limited permissions?",
        answer:
          "Workers with time-limited right to work (visas, graduate visas, pre-settled status) require follow-up checks before their permission expires. Certifyd creates a timeline of verification events linked to the worker\u2019s cryptographic identity, making it easy to demonstrate that follow-up checks were conducted on the correct person at the correct time. Each re-verification is a new tamper-proof record in the audit trail.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for FWA Compliance", slug: "fwa-compliance" },
      { label: "Certifyd for Recruitment Agencies", slug: "recruitment-agencies" },
      { label: "Certifyd for Staffing Agencies", slug: "staffing-agencies" },
    ],
    relatedSolutions: [
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Right-to-Work Gap Signs", href: "/blog/right-to-work-gap-signs/" },
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "Walk-In Compliance Audit Prep", href: "/blog/walk-in-compliance-audit-prep/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks: An Employer\u2019s Guide",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
      {
        label: "GOV.UK \u2014 Illegal Working Penalties",
        href: "https://www.gov.uk/government/publications/illegal-working-penalties-codes-of-practice",
        external: true,
      },
    ],
    ctaTitle: "Make your right-to-work checks audit-proof",
    ctaSecondaryLabel: "Read: Fair Work Agency \u2014 What Changes",
    ctaSecondaryHref: "/blog/fair-work-agency-april-2026/",
  },

  /* ─────────────────────────────────────────────────────
     FWA COMPLIANCE
     ───────────────────────────────────────────────────── */
  {
    slug: "fwa-compliance",
    category: "compliance",
    parentIndustry: "recruitment",
    title: "Certifyd for FWA Compliance",
    metaTitle: "Fair Work Agency Compliance | Certifyd",
    metaDescription:
      "The Fair Work Agency launches April 2026 with walk-in audit powers. Get audit-ready with tamper-proof identity verification records from Certifyd.",
    badge: "FWA Compliance",
    headline: "They Can Walk In. Can You Pass the Audit?",
    subtitle:
      "The Fair Work Agency launches April 2026 with the power to inspect any UK business. Certifyd gives you tamper-proof verification records that demonstrate compliance on demand.",
    heroCard: { name: "Sarah Bennett", company: "Compliance Manager" },
    searchIntentParagraph:
      "Fair Work Agency compliance requires businesses to demonstrate verifiable identity and right-to-work checks for every worker. Certifyd creates the evidence trail the FWA will demand: tamper-proof verification records linking each worker\u2019s cryptographically verified identity to their right-to-work status, employment relationship, and every assignment or shift. Unlike photocopied documents in filing cabinets, Certifyd records cannot be backdated, fabricated, or altered. They provide the kind of audit-ready evidence that withstands regulatory scrutiny.",
    stats: [
      { value: "Apr 2026", label: "Fair Work Agency launches" },
      { value: "\u00a360K", label: "maximum penalty per illegal worker" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The Fair Work Agency represents the most significant change to UK employment enforcement in decades. It consolidates powers from HMRC\u2019s National Minimum Wage team, the Gangmasters and Labour Abuse Authority (GLAA), and the Employment Agency Standards Inspectorate into a single body with enhanced inspection, enforcement, and penalty powers.",
      "The FWA will have the authority to enter any business premises \u2014 not just those in traditionally regulated sectors. Butchers, dog groomers, tech startups, and law firms will all be within scope. The FWA can demand evidence of right-to-work checks for every person working on the premises, including agency workers, contractors, and casual staff. The burden of proof falls on the employer.",
      "Current compliance practices \u2014 photocopied passports filed in cabinets, Excel spreadsheets of check dates, scanned share code confirmations \u2014 were designed for a less rigorous enforcement environment. The FWA will expect better. Certifyd provides tamper-proof, cryptographically verified records that prove not just that a check was done, but that the specific person was verified through their device-bound identity at a specific time and place. This is the difference between compliance on paper and compliance in practice.",
    ],
    problems: [
      "The FWA can enter any business and demand compliance evidence \u2014 not just traditionally regulated sectors.",
      "Current practices (photocopied passports, spreadsheets) don\u2019t provide the level of evidence the FWA will expect.",
      "Agency and temp workers create compliance gaps \u2014 the employer often relies on the agency to have done the checks.",
      "Penalties of up to \u00a360,000 per worker, plus potential criminal prosecution, make non-compliance existentially risky.",
    ],
    steps: [
      "Register your organisation on Certifyd and add each employee and worker as a member",
      "Each worker\u2019s identity is cryptographically bound to their device through a passkey",
      "Right-to-work status is linked to their verified identity, not just filed as a document",
      "Every verification event creates a tamper-proof audit record \u2014 exportable, searchable, and FWA-ready",
    ],
    testimonial: {
      quote:
        "A lot of people are sleeping on what\u2019s about to happen. The Fair Work Agency will have the right to walk into any business \u2014 butchers, dog kennels, anyone \u2014 and ask for an audit.",
      attribution: "HR Director, UK employer",
    },
    faqs: [
      {
        question: "When does the Fair Work Agency launch?",
        answer:
          "The Fair Work Agency is expected to launch in April 2026. It consolidates employment enforcement from HMRC (national minimum wage), the GLAA (labour exploitation), and the Employment Agency Standards Inspectorate into a single body. The FWA will have enhanced powers including the ability to enter business premises, demand records, and issue penalties without prior warning.",
      },
      {
        question: "Which businesses are in scope for FWA inspections?",
        answer:
          "All of them. Unlike sector-specific regulators, the FWA will have jurisdiction across every UK business that employs people. This includes sectors not traditionally subject to employment inspections: professional services, technology, retail, agriculture, manufacturing, and hospitality. If you employ people \u2014 including through agencies or as contractors \u2014 the FWA can inspect you.",
      },
      {
        question: "What evidence will the FWA expect?",
        answer:
          "The FWA will expect employers to demonstrate that they have conducted right-to-work checks on every worker, that the checks were conducted correctly, and that they can identify every person working on their premises. Certifyd provides tamper-proof records that demonstrate all three: who was verified, when, through what method, and linked to which identity and documentation. These records go beyond the current minimum standard.",
      },
      {
        question: "How is Certifyd different from a compliance checklist?",
        answer:
          "A compliance checklist confirms that a process was followed. Certifyd provides cryptographic evidence that a specific person was verified through their device-bound identity at a specific time. Checklists can be backdated or fabricated. Certifyd records cannot. The difference is between saying \u2018we did the check\u2019 and proving \u2018we verified this specific person through unforgeable cryptographic authentication.\u2019",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
      { label: "Certifyd for Agency Worker Compliance", slug: "agency-worker-compliance" },
      { label: "Certifyd for Staffing Agencies", slug: "staffing-agencies" },
    ],
    relatedSolutions: [
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "Walk-In Compliance Audit Prep", href: "/blog/walk-in-compliance-audit-prep/" },
      { label: "Right-to-Work Gap Signs", href: "/blog/right-to-work-gap-signs/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Employment Bill: Fair Work Agency",
        href: "https://www.gov.uk/government/publications/employment-rights-bill-factsheets",
        external: true,
      },
    ],
    ctaTitle: "Get audit-ready before April 2026",
    ctaSecondaryLabel: "Read: Walk-In Compliance Audit Prep",
    ctaSecondaryHref: "/blog/walk-in-compliance-audit-prep/",
  },

  /* ─────────────────────────────────────────────────────
     CONTRACTOR VERIFICATION
     ───────────────────────────────────────────────────── */
  {
    slug: "contractor-verification",
    category: "compliance",
    parentIndustry: "workforce",
    title: "Certifyd for Contractor Verification",
    metaTitle: "Contractor Identity Verification | Certifyd",
    metaDescription:
      "Contractors arrive at your site from third parties you don\u2019t control. Verify every contractor\u2019s identity and company in real time with Certifyd.",
    badge: "Contractor Verification",
    headline: "Third-Party Contractors. Your Site. Your Liability.",
    subtitle:
      "Contractors from third-party companies access your premises, systems, and data. Certifyd verifies their identity, company affiliation, and authorisation \u2014 in real time, at the point of access.",
    heroCard: { name: "Andrew Peters", company: "Operations Director" },
    searchIntentParagraph:
      "Contractor identity verification with Certifyd ensures that every third-party worker accessing your site is who they claim to be. Certifyd uses bi-directional authentication \u2014 both the site manager and the contractor cryptographically prove their identity to each other in real time. The system verifies not just the contractor\u2019s name, but their active employment or contract with the sending company, their authorisation for your specific site, and their current status. Every site access event creates a tamper-proof audit record.",
    stats: [
      { value: "4.4M", label: "self-employed contractors in the UK" },
      { value: "50%+", label: "of large businesses use contractors regularly" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK has approximately 4.4 million self-employed workers, and over half of large businesses use contractors regularly. Contractors access office buildings, data centres, construction sites, hospitals, and government facilities \u2014 often with the same level of physical access as permanent employees, but with far less identity verification.",
      "The hiring business typically relies on the contracting company to vet its own people. But that vetting happens at the contracting company\u2019s end, and the hiring business has no independent way to verify that the person who arrives is the person who was vetted. When a contractor sends a substitute, when a subcontractor arrives instead of the named individual, or when a contract changes hands mid-project, the identity chain breaks.",
      "For businesses subject to ISO 27001, SOC 2, PCI DSS, or government security requirements, contractor identity verification is not optional. Certifyd provides device-bound, bi-directional authentication that creates tamper-proof access records for every contractor visit. This satisfies audit requirements and gives the hiring business cryptographic assurance that the person on their premises is who they claim to be and is authorised by the sending company.",
    ],
    problems: [
      "Contractors are vetted by their own company, not by the business whose site they\u2019re accessing.",
      "Substitutions and subcontracting mean the person who arrives may not be the person who was approved.",
      "Visitor sign-in systems capture a name and time \u2014 they don\u2019t verify identity or company affiliation.",
      "Security standards (ISO 27001, PCI DSS) require identity verification evidence that visitor logs don\u2019t provide.",
    ],
    steps: [
      "Contracting company registers as an Organisation on Certifyd and adds each contractor as a member",
      "Each contractor registers their device, creating a cryptographic identity bound to their phone",
      "At each site visit, the contractor verifies through Certifyd \u2014 confirming identity, company membership, and site authorisation",
      "A tamper-proof record is created: who accessed the site, when, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "A lot of companies are trying to do all the legwork themselves as hiring managers, because they don\u2019t want the headcount on a HR person when they only recruit two or three people a year.",
      attribution: "People Manager, SME",
    },
    faqs: [
      {
        question: "How does Certifyd differ from a visitor management system?",
        answer:
          "Visitor management systems record that a person signed in. Certifyd verifies that the person is who they claim to be. A visitor sign-in captures a name and a time \u2014 anyone can write any name. Certifyd uses device-bound cryptographic authentication: the contractor proves their identity through their registered device, their active membership with the sending company is confirmed in real time, and a tamper-proof record is created. It\u2019s the difference between a signature and a cryptographic proof.",
      },
      {
        question: "Can Certifyd help with ISO 27001 compliance?",
        answer:
          "Yes. ISO 27001 requires organisations to control access to information and facilities, including for third-party contractors. Certifyd provides verifiable, tamper-proof records of contractor identity and access events. These records satisfy the audit evidence requirements of Annex A controls related to physical security, access management, and supplier relationship security.",
      },
      {
        question: "What about contractors who work at multiple client sites?",
        answer:
          "A contractor\u2019s Certifyd identity is portable. They verify at each client site they access, with the system confirming their identity, company membership, and site-specific authorisation. Each visit creates a separate audit record. The contractor\u2019s identity is consistent across all sites, but authorisation is site-specific \u2014 access to one site doesn\u2019t grant access to another.",
      },
      {
        question: "How do you revoke a contractor\u2019s site access?",
        answer:
          "The contracting company revokes the individual\u2019s membership or site-specific authorisation through Certifyd. The revocation takes effect instantly. The contractor can no longer verify at that site. Unlike physical access cards (which can be retained or copied), device-bound cryptographic access cannot be transferred. When it\u2019s revoked, it\u2019s gone.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Facilities Management", slug: "facilities-management" },
      { label: "Certifyd for Security Guards", slug: "security-guards" },
      { label: "Certifyd for Agency Worker Compliance", slug: "agency-worker-compliance" },
    ],
    relatedSolutions: [
      { label: "Certify That Business", href: "/solutions/business/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
      { label: "Identity as Infrastructure", href: "/blog/identity-as-infrastructure/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
    ],
    relatedResources: [
      {
        label: "NCSC \u2014 Supply Chain Security",
        href: "https://www.ncsc.gov.uk/collection/supply-chain-security",
        external: true,
      },
    ],
    ctaTitle: "Verify every contractor before they access your site",
    ctaSecondaryLabel: "Read: Audit Trails for Compliance",
    ctaSecondaryHref: "/blog/audit-trails-compliance/",
  },

  /* ─────────────────────────────────────────────────────
     AGENCY WORKER COMPLIANCE
     ───────────────────────────────────────────────────── */
  {
    slug: "agency-worker-compliance",
    category: "compliance",
    parentIndustry: "workforce",
    title: "Certifyd for Agency Worker Compliance",
    metaTitle: "Agency Worker Identity Compliance | Certifyd",
    metaDescription:
      "Hiring businesses share right-to-work liability for agency workers. Verify every agency worker\u2019s identity at the point of assignment with Certifyd.",
    badge: "Agency Worker Compliance",
    headline: "The Agency Checked Them. But Did They Check the Right Person?",
    subtitle:
      "Hiring businesses share legal liability for agency worker compliance. Certifyd verifies that the person who arrives is the person the agency checked \u2014 in real time, at every assignment.",
    heroCard: { name: "Michelle Taylor", company: "Compliance Lead" },
    searchIntentParagraph:
      "Agency worker compliance with Certifyd closes the gap between agency onboarding and client-site arrival. Agencies verify workers at registration, but there is no standard mechanism to confirm that the person who arrives at the client\u2019s premises is the same person who was verified. Certifyd\u2019s bi-directional, device-bound authentication provides that confirmation: the worker\u2019s identity is cryptographically verified through their registered device at each assignment, their active agency membership is confirmed in real time, and a tamper-proof record is created for both the agency and the hiring employer.",
    stats: [
      { value: "1.2M", label: "agency workers in the UK" },
      { value: "Joint", label: "liability between agency and hirer" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Over 1.2 million people in the UK work through employment agencies. The legal framework creates joint liability: under the Immigration, Asylum and Nationality Act 2006, both the agency and the hiring business can face penalties if an illegal worker is placed. The hiring business cannot simply rely on the agency having conducted the checks \u2014 they must satisfy themselves that the worker has the right to work in the UK.",
      "The practical challenge is that agencies verify at onboarding, and hirers verify at the point of assignment \u2014 but neither can confirm that the person at the site is the person who was checked. Workers share documents, substitutions happen, and the gap between the checked identity and the working identity goes undetected until an enforcement action reveals it.",
      "The Fair Work Agency (from April 2026) will be able to inspect both agencies and hiring businesses simultaneously. When the FWA asks the hirer \u2018Who verified this person?\u2019 and the hirer says \u2018The agency did,\u2019 the FWA can then ask the agency \u2018How do you know the person at this site is the person you verified?\u2019 Neither has a satisfactory answer without real-time identity verification. Certifyd provides that answer: device-bound, cryptographic proof that the person at the site is the person who was verified.",
    ],
    problems: [
      "Agencies verify at onboarding; hirers rely on that check for months or years of subsequent assignments.",
      "The person who arrives at the site may not be the person the agency verified \u2014 substitutions go undetected.",
      "Joint liability means both agency and hirer face \u00a360,000 penalties per illegal worker.",
      "The Fair Work Agency will inspect both ends of the chain and expect evidence at both.",
    ],
    steps: [
      "Agency registers workers on Certifyd during onboarding, linking identity to their device",
      "Hiring business requests verification at the point of each assignment",
      "Worker verifies through Certifyd at the client site \u2014 confirming identity, agency membership, and right-to-work status",
      "Both agency and hirer receive tamper-proof verification records for the same event",
    ],
    testimonial: {
      quote:
        "At \u00a350\u2013200 per background check, we were spending thousands a year just to verify temps. Some checks got skipped. That\u2019s the reality for millions of small businesses.",
      attribution: "Director, temp staffing agency",
    },
    faqs: [
      {
        question: "Who is liable \u2014 the agency or the hirer?",
        answer:
          "Both. Under the Immigration, Asylum and Nationality Act 2006, the agency that placed the worker and the business that hired them share liability. If a worker is found to be illegal, both can face civil penalties of up to \u00a360,000. The hirer cannot simply rely on the agency having done the check \u2014 they have an independent duty to verify. Certifyd creates verification records that both parties can use to demonstrate compliance.",
      },
      {
        question: "How does Certifyd bridge the agency-hirer gap?",
        answer:
          "The agency verifies the worker\u2019s identity at onboarding through Certifyd, binding their identity to their device. At each subsequent assignment, the worker re-verifies at the client site through the same device-bound identity. Both the agency and the hirer receive a tamper-proof verification record confirming that the person at the site is the person the agency verified. This closes the gap between onboarding verification and assignment-level compliance.",
      },
      {
        question: "What about workers registered with multiple agencies?",
        answer:
          "A worker\u2019s Certifyd identity is theirs \u2014 it\u2019s bound to their device, not to any single agency. They can hold memberships with multiple agencies simultaneously. When they verify at a client site, the record shows which agency dispatched them for that specific assignment. Each agency manages its own membership independently, but the underlying identity is consistent across all of them.",
      },
      {
        question: "How do you handle agency worker substitutions?",
        answer:
          "Substitutions are where the compliance gap is widest. An agency books Worker A, but Worker B arrives. Without real-time verification, the hirer may not notice the difference. With Certifyd, the worker who arrives must verify through their own device-bound identity. If Worker B arrives instead of Worker A, the verification record will show Worker B\u2019s identity \u2014 immediately alerting the hirer to the substitution and creating an accurate record of who actually worked.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
      { label: "Certifyd for FWA Compliance", slug: "fwa-compliance" },
      { label: "Certifyd for Temp Workers", slug: "temp-workers" },
    ],
    relatedSolutions: [
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Agency Worker Rights",
        href: "https://www.gov.uk/agency-workers-your-rights",
        external: true,
      },
    ],
    ctaTitle: "Close the agency-hirer compliance gap",
    ctaSecondaryLabel: "Read: The Temp Worker Loophole",
    ctaSecondaryHref: "/blog/temp-worker-loophole/",
  },
];

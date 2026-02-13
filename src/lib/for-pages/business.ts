import type { ForPage } from "./types";

export const BUSINESS_PAGES: ForPage[] = [
  /* ─────────────────────────────────────────────────────
     RECRUITMENT AGENCIES
     ───────────────────────────────────────────────────── */
  {
    slug: "recruitment-agencies",
    category: "business",
    parentIndustry: "recruitment",
    title: "Certifyd for Recruitment Agencies",
    metaTitle: "Identity Verification for Recruitment Agencies",
    metaDescription:
      "Recruitment agencies face right-to-work liability and deepfake candidates. Verify every candidate\u2019s identity before placement with Certifyd.",
    badge: "Recruitment Agencies",
    headline: "You Place Them. You\u2019re Liable. Did You Actually Verify Them?",
    subtitle:
      "Recruitment agencies carry legal liability for the candidates they place. Certifyd verifies every candidate\u2019s identity, right to work, and credentials \u2014 cryptographically, not just on paper.",
    heroCard: { name: "Emma Clarke", secondaryLabel: "Company", secondaryValue: "Apex Recruitment", context: "Candidate verified: 10:00 AM" },
    searchIntentParagraph:
      "Identity verification for recruitment agencies must go beyond document checks. Certifyd uses bi-directional authentication \u2014 both the agency and the candidate cryptographically prove their identity to each other in real time. The system verifies not just the candidate\u2019s name, but that their identity is device-bound and cannot be transferred, cloned, or faked by a deepfake. When placing a candidate, the agency confirms their verified identity and right-to-work status, creating a tamper-proof record that satisfies both client requirements and regulatory obligations.",
    stats: [
      { value: "30K+", label: "recruitment agencies in the UK" },
      { value: "\u00a360K", label: "penalty per illegal worker placed" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK has over 30,000 recruitment agencies, placing millions of workers annually. Under the Immigration, Asylum and Nationality Act 2006, agencies share legal liability with employers for right-to-work compliance. A civil penalty of up to \u00a360,000 per illegal worker can be levied against both the agency and the hiring company. The Fair Work Agency (launching April 2026) will consolidate enforcement and increase inspection frequency.",
      "Deepfake candidates are no longer hypothetical. AI-generated personas are appearing in video interviews, and fabricated CVs that pass initial screening are increasingly common. Agencies that verify candidates through video calls and document scans are using methods that AI can now defeat. Device-bound cryptographic authentication is the only verification method that cannot be synthesised or spoofed.",
      "For agencies, Certifyd transforms identity verification from a cost centre into a competitive advantage. Clients increasingly demand assurance that placed candidates are who they claim to be. An agency that can provide cryptographically verified candidate identities \u2014 with tamper-proof placement records \u2014 differentiates itself from competitors still relying on photocopied passports and video calls.",
    ],
    problems: [
      "Agencies carry legal liability for right-to-work compliance, even when the client is the employer of record.",
      "Deepfake candidates and fabricated CVs are passing through traditional screening processes.",
      "Document-based verification (photocopied passports, scanned IDs) doesn\u2019t prove the person presenting is the document holder.",
      "When a placed candidate\u2019s identity is questioned, the agency has no cryptographic proof of who they verified.",
    ],
    steps: [
      "Agency registers as an Organisation on Certifyd and invites candidates to verify during onboarding",
      "Each candidate registers their device, creating a cryptographic key pair bound to their identity",
      "At placement, the candidate\u2019s identity, right-to-work status, and agency membership are confirmed in real time",
      "A tamper-proof placement record is created: who was verified, when, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "We ask \u2018right to work?\u2019 and they say yes. Three weeks later \u2014 graduate visa, needs \u00a320k sponsorship. We had to start over.",
      attribution: "HR Manager, tech company",
    },
    faqs: [
      {
        question: "Are recruitment agencies liable for right-to-work checks?",
        answer:
          "Yes. Under the Immigration, Asylum and Nationality Act 2006, recruitment agencies share liability with end employers for ensuring that placed workers have the right to work in the UK. If an illegal worker is placed, both the agency and the client can face civil penalties of up to \u00a360,000 per worker. The Fair Work Agency (from April 2026) will have enhanced powers to inspect agencies and demand evidence of compliance.",
      },
      {
        question: "How does Certifyd help with deepfake candidates?",
        answer:
          "Deepfake technology can synthesise faces and voices for video interviews, and AI can generate convincing CVs and cover letters. Certifyd bypasses these attack vectors entirely by using device-bound cryptographic authentication. A candidate\u2019s identity is tied to their physical device through a passkey \u2014 you cannot deepfake a cryptographic challenge. If the candidate can\u2019t verify through their registered device, they are not who they claim to be.",
      },
      {
        question: "How do agencies onboard candidates onto Certifyd?",
        answer:
          "During the standard agency registration process, candidates are invited to create their Certifyd identity. They register their device (creating a cryptographic key pair) and the agency adds them as a member with a defined role. This takes minutes and only needs to happen once. From that point forward, the candidate can verify their identity in 30 seconds for any placement, any client, any location.",
      },
      {
        question: "Can Certifyd verification be shared with clients?",
        answer:
          "Yes. When a candidate is placed, the agency can provide the client with a Certifyd verification record confirming the candidate\u2019s identity and right-to-work status. This gives clients confidence without requiring them to repeat the verification process. The record is tamper-proof and timestamped, providing auditable evidence for both the agency and the client.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
      { label: "Certifyd for Temp Workers", slug: "temp-workers" },
      { label: "Certifyd for Deepfakes", slug: "deepfakes" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "Right-to-Work Gap Signs", href: "/blog/right-to-work-gap-signs/" },
      { label: "Deepfake Candidates in Recruitment", href: "/blog/deepfake-candidates-recruitment/" },
      { label: "The Real Cost of a Bad Hire", href: "/blog/real-cost-bad-hire/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks for Employers",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
      {
        label: "REC \u2014 Recruitment & Employment Confederation",
        href: "https://www.rec.uk.com/",
        external: true,
      },
    ],
    ctaTitle: "Verify every candidate before placement",
    ctaSecondaryLabel: "Read: Deepfake Candidates in Recruitment",
    ctaSecondaryHref: "/blog/deepfake-candidates-recruitment/",
  },

  /* ─────────────────────────────────────────────────────
     CARE HOMES
     ───────────────────────────────────────────────────── */
  {
    slug: "care-homes",
    category: "business",
    parentIndustry: "care",
    title: "Certifyd for Care Homes",
    metaTitle: "Identity Verification for Care Homes",
    metaDescription:
      "Care homes rely on agency staff who arrive as strangers to look after vulnerable residents. Verify every worker in real time with Certifyd.",
    badge: "Care Homes",
    headline: "Agency Staff Arrive Tonight. Do You Know Who They Are?",
    subtitle:
      "Care homes depend on agency workers for nights, weekends, and cover shifts. Certifyd verifies every worker\u2019s identity, employer, and role before they start caring for your residents.",
    heroGraphic: "shift-monitor",
    heroCard: { name: "Patricia Williams", secondaryLabel: "Care Home", secondaryValue: "Oakwood Care Home" },
    searchIntentParagraph:
      "Identity verification for care homes is a safeguarding obligation, not an optional extra. Certifyd uses bi-directional authentication \u2014 both the care home manager and the arriving worker cryptographically prove their identity to each other in real time. When agency staff arrive, the system verifies not just who they are, but that they hold an active membership with the agency that dispatched them and are authorised for that specific care home. The result is a tamper-proof, auditable record for every shift \u2014 evidence that satisfies CQC requirements.",
    stats: [
      { value: "15K+", label: "care homes in England" },
      { value: "39%", label: "annual staff turnover in adult social care" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "There are over 15,000 care homes in England, and the sector faces a staffing crisis. With 165,000 vacancies and 39% annual turnover, care homes routinely rely on agency staff to maintain safe staffing levels. On any given night, a significant proportion of the workforce may be agency workers who have never been to that care home before.",
      "The CQC inspects care homes against five key questions, including \u2018Safe\u2019 and \u2018Well-led\u2019. Both require evidence of robust staff identity verification and safe recruitment practices. When an inspector asks \u2018Who was on shift on Tuesday night?\u2019 and the answer relies on handwritten sign-in sheets and agency booking confirmations, that\u2019s a safeguarding gap \u2014 not a compliance strength.",
      "Families trust care homes to protect their most vulnerable relatives. When a daughter calls and asks \u2018Who is looking after my mum tonight?\u2019, the care home should be able to answer with cryptographic certainty. Certifyd\u2019s bi-directional, device-bound verification means every worker on every shift is verified in real time, with tamper-proof records that demonstrate who was there, when, and under whose authority.",
    ],
    problems: [
      "Agency workers arrive for shifts at care homes where they\u2019ve never worked before and nobody recognises them.",
      "Handwritten sign-in sheets and agency booking confirmations are unreliable and easily falsified.",
      "CQC inspections require evidence of robust identity verification \u2014 not just onboarding paperwork.",
      "Families cannot get real-time answers about who is caring for their relative on a given shift.",
    ],
    steps: [
      "Care home registers as an Organisation on Certifyd; agency partners register separately",
      "Each worker registers their device, creating a cryptographic identity bound to their phone",
      "When a worker arrives for a shift, both parties verify through Certifyd \u2014 confirming identity and agency membership in real time",
      "A tamper-proof record is created for every shift: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
      attribution: "Manager, residential care home",
    },
    faqs: [
      {
        question: "How does Certifyd support CQC compliance?",
        answer:
          "CQC\u2019s \u2018Safe\u2019 key line of enquiry requires care homes to demonstrate that only authorised, verified staff care for residents. Certifyd creates tamper-proof verification records for every shift, linking each worker to their verified identity, their employing agency or organisation, and their role authority. These records are audit-ready, exportable, and demonstrate ongoing identity assurance \u2014 not just point-of-hire checks.",
      },
      {
        question: "Can Certifyd work with multiple agencies?",
        answer:
          "Yes. Each agency registers as a separate Organisation on Certifyd and manages its own workers as members. When a worker arrives at the care home, verification confirms their identity and active membership with whichever agency dispatched them. The care home gets a unified verification history regardless of which agency supplied the worker.",
      },
      {
        question: "What about permanent staff?",
        answer:
          "Permanent staff can be registered as members of the care home\u2019s own Organisation on Certifyd. This gives them the same device-bound, verifiable identity as agency workers. For care homes that want comprehensive shift records, Certifyd covers both permanent and agency staff through the same system.",
      },
      {
        question: "Can families be notified when staff verify?",
        answer:
          "Family members can be added as authorised contacts for a resident. They can receive verification notifications confirming who is on shift \u2014 the worker\u2019s name, role, and organisational membership \u2014 without needing to call the care home. This provides transparency and peace of mind for families with vulnerable relatives.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Care Workers", slug: "care-workers" },
      { label: "Certifyd for Agency Nurses", slug: "agency-nurses" },
      { label: "Certifyd for Domiciliary Care", slug: "domiciliary-care" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Care Home Staffing Crisis", href: "/blog/care-home-staffing-crisis/" },
      { label: "The Safeguarding Gap in Care Homes", href: "/blog/safeguarding-gap-care-homes/" },
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
    ],
    relatedResources: [
      {
        label: "CQC \u2014 Staff Recruitment and Fitness",
        href: "https://www.cqc.org.uk/guidance-providers/regulations/regulation-19-fit-proper-persons-employed",
        external: true,
      },
    ],
    ctaTitle: "Verify every carer on every shift",
    ctaSecondaryLabel: "Read: The Care Home Staffing Crisis",
    ctaSecondaryHref: "/blog/care-home-staffing-crisis/",
  },

  /* ─────────────────────────────────────────────────────
     CLEANING COMPANIES
     ───────────────────────────────────────────────────── */
  {
    slug: "cleaning-companies",
    category: "business",
    parentIndustry: "trades",
    title: "Certifyd for Cleaning Companies",
    metaTitle: "Identity Verification for Cleaning Companies",
    metaDescription:
      "Cleaning companies send staff into clients\u2019 homes unsupervised. Verify every cleaner\u2019s identity and prove your professionalism with Certifyd.",
    badge: "Cleaning Companies",
    headline: "Your Cleaners Enter 50 Homes a Week. Can You Prove Who They Are?",
    subtitle:
      "Cleaning companies send staff into clients\u2019 homes with keys and alarm codes. Certifyd gives you a verified, auditable record of every cleaner at every property.",
    heroCard: { name: "Helen Marsh", secondaryLabel: "Company", secondaryValue: "Sparkle Services Ltd", context: "Arrived: 08:00 AM" },
    searchIntentParagraph:
      "Identity verification for cleaning companies transforms trust from a promise into proof. Certifyd\u2019s Organisation management lets cleaning companies register each cleaner as a member with a defined role, with their identity cryptographically bound to their device. When a cleaner arrives at a client\u2019s home, bi-directional authentication verifies both parties in real time. The system confirms not just the cleaner\u2019s identity, but their active membership with your company and their authority to service that client. Every visit creates a tamper-proof audit record.",
    stats: [
      { value: "\u00a39.5B", label: "UK cleaning industry annual revenue" },
      { value: "0", label: "regulatory requirements for cleaner ID" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK cleaning industry generates \u00a39.5 billion annually, employing hundreds of thousands of people across thousands of companies. Yet there is no regulatory body, no mandatory licensing, and no identity verification requirement for domestic cleaners. The barrier to entry is zero \u2014 and so is the accountability when something goes wrong.",
      "For professional cleaning companies, this lack of regulation creates a trust problem. You invest in DBS checks, training, and insurance \u2014 but clients have no way to distinguish your verified staff from an unvetted individual with a Gumtree ad. When you send a substitute cleaner, the client has no independent way to confirm that person works for you. Your reputation depends on a phone call or a text message.",
      "Certifyd gives professional cleaning companies a verifiable trust infrastructure. Each cleaner\u2019s identity is cryptographically bound to their device and linked to their active membership in your company. Clients can verify every cleaner at their door in 30 seconds. When a cleaner leaves your company, their membership is revoked instantly. This turns your investment in staff vetting into a visible, provable competitive advantage.",
    ],
    problems: [
      "No regulation means clients can\u2019t distinguish your vetted staff from unverified competitors.",
      "Substitute cleaners arrive at clients\u2019 homes with no way for the client to verify them.",
      "Disputes about attendance, timing, or incidents have no verifiable evidence trail.",
      "Your reputation depends on trust, but you have no mechanism to prove that trust is warranted.",
    ],
    steps: [
      "Register your cleaning company as an Organisation on Certifyd and add each cleaner as a member",
      "Each cleaner registers their device, creating a cryptographic identity bound to their phone",
      "At each client visit, both parties verify through Certifyd \u2014 confirming the cleaner\u2019s identity and company membership",
      "A tamper-proof record is created for every visit: who, when, where, and under your company\u2019s authority",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "How do I add my cleaners to Certifyd?",
        answer:
          "Register your company as an Organisation on Certifyd and invite each cleaner by email or phone number. Each cleaner creates their own account, registers their device (creating a cryptographic key pair), and accepts your organisation\u2019s membership invitation. You assign them a role (e.g. \u2018Cleaner\u2019, \u2018Team Lead\u2019) and they\u2019re ready to verify at client properties. The process takes minutes per cleaner.",
      },
      {
        question: "What happens when a cleaner leaves my company?",
        answer:
          "You revoke their membership instantly through Certifyd. They can no longer verify under your company\u2019s name \u2014 the revocation takes effect in real time. If they arrive at a client\u2019s home and attempt to verify, the system will show they are no longer a member of your organisation. Their personal Certifyd identity remains theirs, but your company\u2019s authority no longer backs it.",
      },
      {
        question: "Can clients see my company\u2019s verification history?",
        answer:
          "Clients see verification records for visits to their own property. Each record confirms the cleaner\u2019s identity, their active membership with your company, and the time of verification. This gives clients confidence and gives you an auditable trail for every visit. For property management companies with multiple sites, Certifyd provides a centralised verification dashboard.",
      },
      {
        question: "Does Certifyd replace DBS checks?",
        answer:
          "No. DBS checks and Certifyd serve different purposes. DBS checks reveal criminal record information at a point in time. Certifyd verifies identity and organisational membership in real time. The two are complementary: DBS confirms a person\u2019s background, while Certifyd confirms they are who they claim to be right now and that they are currently authorised by your company to be at that client\u2019s home.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Cleaners", slug: "cleaners" },
      { label: "Certifyd for Trade Platforms", slug: "trade-platforms" },
      { label: "Certifyd for Facilities Management", slug: "facilities-management" },
    ],
    relatedSolutions: [
      { label: "Certify That Business", href: "/solutions/business/" },
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Trade Platforms\u2019 Blind Spot", href: "/blog/trade-platforms-blind-spot/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "British Cleaning Council \u2014 Industry Standards",
        href: "https://www.britishcleaningcouncil.org/",
        external: true,
      },
    ],
    ctaTitle: "Give your cleaning company a verified trust signal",
    ctaSecondaryLabel: "Read: Trade Platforms\u2019 Blind Spot",
    ctaSecondaryHref: "/blog/trade-platforms-blind-spot/",
  },

  /* ─────────────────────────────────────────────────────
     STAFFING AGENCIES
     ───────────────────────────────────────────────────── */
  {
    slug: "staffing-agencies",
    category: "business",
    parentIndustry: "workforce",
    title: "Certifyd for Staffing Agencies",
    metaTitle: "Identity Verification for Staffing Agencies",
    metaDescription:
      "Staffing agencies place thousands of workers monthly. Verify every worker\u2019s identity and right to work at scale \u2014 30 seconds per person.",
    badge: "Staffing Agencies",
    headline: "You Place Thousands a Month. How Many Did You Actually Verify?",
    subtitle:
      "Staffing agencies face right-to-work liability for every worker they place. Certifyd verifies each worker\u2019s identity at the point of assignment \u2014 not just at onboarding.",
    heroCard: { name: "Robert Hughes", secondaryLabel: "Company", secondaryValue: "PeopleForce Staffing", context: "Worker verified: 06:30 AM" },
    searchIntentParagraph:
      "Identity verification for staffing agencies must work at scale and at speed. Certifyd\u2019s Organisation management lets staffing agencies register each worker as a member with a defined role, their identity cryptographically bound to their device. At each assignment, the worker\u2019s identity, active agency membership, and right-to-work status are verified in real time \u2014 not assumed from a check that was done weeks or months earlier. Every placement creates a tamper-proof audit record that satisfies both client requirements and Fair Work Agency compliance.",
    stats: [
      { value: "30K+", label: "recruitment businesses in the UK" },
      { value: "\u00a350-200", label: "traditional cost per background check" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "UK staffing agencies place over a million workers annually across warehousing, hospitality, care, construction, and office environments. Each placement carries right-to-work liability. The standard approach \u2014 verify at onboarding, then assume compliance for every subsequent assignment \u2014 creates a growing gap between the check that was done and the person who shows up at the client\u2019s site.",
      "At \u00a350\u2013200 per traditional background check, agencies spending thousands annually on verification still face a fundamental problem: the check proves a person\u2019s identity at one point in time. It does not prove that the person arriving at the client site today is the person who was checked. With high worker turnover and frequent substitutions, this gap is not theoretical \u2014 it\u2019s operational reality.",
      "The Fair Work Agency (launching April 2026) will consolidate employment enforcement powers and increase inspection frequency across staffing agencies. Agencies that can demonstrate real-time, per-assignment identity verification \u2014 with tamper-proof records \u2014 will be better positioned for compliance. Agencies relying on photocopied passports in filing cabinets will face increasingly uncomfortable audits.",
    ],
    problems: [
      "Onboarding verification doesn\u2019t prove the person arriving at the client site is the person who was checked.",
      "Traditional background checks cost \u00a350\u2013200 each, and some still get skipped under time pressure.",
      "Worker substitutions happen daily \u2014 the person who shows up may not be the person who was booked.",
      "The Fair Work Agency will demand per-worker, per-assignment compliance evidence \u2014 not just onboarding records.",
    ],
    steps: [
      "Agency registers as an Organisation on Certifyd and adds each worker during onboarding",
      "Each worker registers their device, creating a cryptographic identity bound to their phone",
      "At each assignment, the worker verifies at the client site \u2014 confirming identity, agency membership, and right-to-work status",
      "A tamper-proof record is created for every placement: who, when, where, and under the agency\u2019s authority",
    ],
    testimonial: {
      quote:
        "At \u00a350\u2013200 per background check, we were spending thousands a year just to verify temps. Some checks got skipped. That\u2019s the reality for millions of small businesses.",
      attribution: "Director, temp staffing agency",
    },
    faqs: [
      {
        question: "How does Certifyd reduce verification costs?",
        answer:
          "Traditional background checks cost \u00a350\u2013200 per person and are conducted once at onboarding. Certifyd provides ongoing, real-time identity verification at every assignment for a fraction of the cost. Workers register once \u2014 their device-bound identity persists across all placements. There\u2019s no per-check fee for repeat verifications, and no manual paperwork. The cost saving compounds with every subsequent assignment.",
      },
      {
        question: "What happens when a worker moves to a different agency?",
        answer:
          "The worker\u2019s Certifyd identity belongs to them \u2014 it\u2019s bound to their device, not to your agency. When they leave, you revoke their membership in your Organisation. They can then be added as a member of their new agency. Their cryptographic identity remains consistent, but their organisational affiliations reflect their current employment. This is seamless for the worker and instant for both agencies.",
      },
      {
        question: "Can clients see verification records for placed workers?",
        answer:
          "Yes. Agencies can share verification records with clients, confirming that a placed worker\u2019s identity and right-to-work status were verified at the point of assignment. This gives clients audit-ready compliance evidence without requiring them to conduct their own checks. For clients working with multiple agencies, Certifyd provides a consistent verification standard across all suppliers.",
      },
      {
        question: "How does Certifyd handle temporary right-to-work statuses?",
        answer:
          "Right-to-work statuses change \u2014 visas expire, share codes lapse, and time-limited permissions end. Certifyd records the worker\u2019s right-to-work status at each verification event. When a status change occurs, the agency updates the worker\u2019s membership record, and subsequent verifications reflect the current status. This creates a complete timeline of right-to-work verification events for audit purposes.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Temp Workers", slug: "temp-workers" },
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
      { label: "Certifyd for Agency Worker Compliance", slug: "agency-worker-compliance" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Walk-In Compliance Audit Prep", href: "/blog/walk-in-compliance-audit-prep/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
    ],
    ctaTitle: "Verify every placement, every time",
    ctaSecondaryLabel: "Read: Walk-In Compliance Audit Prep",
    ctaSecondaryHref: "/blog/walk-in-compliance-audit-prep/",
  },

  /* ─────────────────────────────────────────────────────
     HOSPITALITY BUSINESSES
     ───────────────────────────────────────────────────── */
  {
    slug: "hospitality-businesses",
    category: "business",
    parentIndustry: "workforce",
    title: "Certifyd for Hospitality Businesses",
    metaTitle: "Identity Verification for Hospitality Businesses",
    metaDescription:
      "Hotels, restaurants, and venues face high staff turnover and right-to-work risk. Verify every worker\u2019s identity before they serve your customers.",
    badge: "Hospitality Businesses",
    headline: "High Turnover. New Staff Weekly. Who\u2019s Checking?",
    subtitle:
      "Hotels, restaurants, and event venues cycle through staff rapidly. Certifyd verifies every worker\u2019s identity, right to work, and employer \u2014 before they start serving your customers.",
    heroCard: { name: "Marco Rossi", secondaryLabel: "Company", secondaryValue: "The Crown Group", context: "Shift started: 17:00" },
    searchIntentParagraph:
      "Identity verification for hospitality businesses addresses an industry where speed of hiring often outpaces rigour of checking. Certifyd\u2019s Organisation management lets hospitality businesses register each employee as a member with their identity cryptographically bound to their device. For agency and casual staff, bi-directional authentication verifies identity and right-to-work status in real time at the start of every shift. Every verification creates a tamper-proof audit record \u2014 essential for an industry consistently targeted by Home Office enforcement.",
    stats: [
      { value: "180K", label: "hospitality businesses in the UK" },
      { value: "#1", label: "sector for right-to-work enforcement actions" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Hospitality is the UK\u2019s largest private-sector employer with 3.5 million workers across 180,000 businesses. It is also consistently the number one sector for Home Office illegal working enforcement actions. The combination of high turnover, casual employment, and reliance on agency labour creates an environment where identity verification gaps are systemic, not occasional.",
      "The operational reality is brutal. A hotel that needs 15 agency workers for a conference weekend receives a list of names from the agency. The workers arrive, put on uniforms, and start working. Nobody independently verified that the people who arrived are the people on the list. When HMRC or the Fair Work Agency walks in and asks for evidence, the hotel has a booking confirmation and a list of names \u2014 not proof of identity.",
      "Certifyd transforms compliance from a paper exercise into a real-time system. Each worker\u2019s identity is device-bound and verified at the start of every shift. The business gets tamper-proof records that link specific individuals to specific shifts \u2014 evidence that withstands regulatory scrutiny. For hospitality groups operating multiple venues, Certifyd provides a consistent verification standard across all sites.",
    ],
    problems: [
      "Hospitality is the top sector for right-to-work enforcement \u2014 the industry\u2019s staffing model creates structural compliance gaps.",
      "Agency workers arrive at venues where nobody knows them, wearing borrowed uniforms.",
      "High turnover means the person working today may not have been verified this month.",
      "Paper-based records (photocopied passports, sign-in sheets) don\u2019t withstand regulatory scrutiny.",
    ],
    steps: [
      "Business registers as an Organisation on Certifyd; agency partners register separately",
      "Each worker registers their device during onboarding, creating a device-bound identity",
      "At every shift, the worker verifies through Certifyd \u2014 confirming identity, employer, and right-to-work status in real time",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "At \u00a350\u2013200 per background check, we were spending thousands a year just to verify temps. Some checks got skipped. That\u2019s the reality for millions of small businesses.",
      attribution: "Director, temp staffing agency",
    },
    faqs: [
      {
        question: "Why is hospitality targeted for right-to-work enforcement?",
        answer:
          "Hospitality combines high staff turnover, widespread casual and agency employment, and rapid hiring cycles \u2014 all factors that create identity verification gaps. The Home Office and HMRC have consistently identified hospitality as a priority sector. Penalties of up to \u00a360,000 per illegal worker, potential criminal prosecution, and sponsor licence revocation make non-compliance an existential risk for hospitality businesses.",
      },
      {
        question: "How does Certifyd work across multiple venues?",
        answer:
          "Hospitality groups can manage all venues under a single Organisation on Certifyd, with site-specific roles and permissions. Workers who rotate between venues carry their device-bound identity with them \u2014 verification works the same way at any location. Management gets a centralised view of verification records across all sites, while each venue maintains its own shift-level audit trail.",
      },
      {
        question: "Can Certifyd handle event staffing at scale?",
        answer:
          "Yes. Events often involve large numbers of casual workers arriving for a single day. Certifyd\u2019s 30-second verification works at scale \u2014 multiple managers can verify workers simultaneously. Each verification creates an auditable record. For event companies that staff dozens of events monthly with rotating crews, Certifyd provides consistent identity verification regardless of venue or event.",
      },
      {
        question: "What\u2019s the Fair Work Agency and how does it affect hospitality?",
        answer:
          "The Fair Work Agency launches in April 2026, consolidating employment enforcement powers from HMRC, the Gangmasters and Labour Abuse Authority, and the Employment Agency Standards Inspectorate. It will have enhanced powers to inspect any business and demand evidence of right-to-work compliance for every worker. Hospitality businesses that can provide tamper-proof, per-shift verification records will be far better positioned than those relying on filing cabinets of photocopied documents.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Hospitality Staff", slug: "hospitality-staff" },
      { label: "Certifyd for Staffing Agencies", slug: "staffing-agencies" },
      { label: "Certifyd for FWA Compliance", slug: "fwa-compliance" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Employing People in Hospitality",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
    ],
    ctaTitle: "Verify every hospitality worker before they start",
    ctaSecondaryLabel: "Read: Fair Work Agency \u2014 What Changes",
    ctaSecondaryHref: "/blog/fair-work-agency-april-2026/",
  },

  /* ─────────────────────────────────────────────────────
     TRADE PLATFORMS
     ───────────────────────────────────────────────────── */
  {
    slug: "trade-platforms",
    category: "business",
    parentIndustry: "trades",
    title: "Certifyd for Trade Platforms",
    metaTitle: "Identity Verification for Trade Platforms",
    metaDescription:
      "Trade platforms verify businesses but can\u2019t verify who arrives at your door. Close the gap with real-time identity verification from Certifyd.",
    badge: "Trade Platforms",
    headline: "You Verify the Business. Who Verifies the Person?",
    subtitle:
      "Trade platforms like Checkatrade and MyBuilder verify that a business exists. Certifyd verifies that the person who arrives at the door is who they claim to be.",
    heroCard: { name: "Daniel Wright", secondaryLabel: "Company", secondaryValue: "TradeCheck UK", context: "Arrived: 09:15 AM" },
    searchIntentParagraph:
      "Identity verification for trade platforms closes the gap between verifying a business and verifying the individual who shows up. Certifyd\u2019s bi-directional authentication lets platform members cryptographically prove their identity to homeowners in real time. When a tradesperson arrives, the system verifies not just who they are, but that they hold an active membership with the trade company listed on the platform and are authorised for that job. This extends the platform\u2019s trust layer from the business level to the individual level \u2014 the piece that\u2019s currently missing.",
    stats: [
      { value: "50M+", label: "annual trade platform searches in the UK" },
      { value: "0", label: "platforms that verify who actually arrives" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Trade platforms have built successful businesses by aggregating reviews and verifying business credentials. Checkatrade, MyBuilder, Rated People, and similar platforms verify that a business is registered, insured, and (in some cases) competent. This is valuable. But it addresses only half the trust problem \u2014 it tells the homeowner that the business is legitimate, not that the person at their door works for that business.",
      "The structural limitation is this: platforms verify at the entity level (the company), but risk manifests at the individual level (the person). A five-star-rated electrical company may send a subcontractor the homeowner has never heard of. A trusted plumbing firm may dispatch a new employee who hasn\u2019t completed their own checks. The platform has no mechanism to verify the individual because its relationship is with the business, not the worker.",
      "Certifyd gives trade platforms a way to extend their trust layer to the individual level. Each tradesperson\u2019s identity is cryptographically bound to their device and linked to their active membership in the trade company. When they arrive at a job sourced through the platform, both parties verify each other in real time. The platform gets richer data, the homeowner gets real assurance, and the tradesperson gets a verified reputation that travels with them.",
    ],
    problems: [
      "Platforms verify the business but can\u2019t verify who actually arrives at the homeowner\u2019s door.",
      "Subcontractors and replacement workers arrive without the homeowner knowing the change.",
      "Reviews and ratings apply to the business, not the individual performing the work.",
      "When incidents occur, the platform has no verifiable record of which individual was dispatched.",
    ],
    steps: [
      "Trade platform integrates Certifyd \u2014 member businesses register as Organisations",
      "Each tradesperson within a business registers their device, creating a device-bound identity",
      "When a tradesperson arrives at a platform-sourced job, both parties verify through Certifyd",
      "A tamper-proof record links the individual to the business, the platform, and the specific job",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "How would Certifyd integrate with a trade platform?",
        answer:
          "Trade platforms can integrate Certifyd through API or as a value-added service for listed businesses. Each business on the platform registers as a Certifyd Organisation and adds their team members. When a job is booked through the platform, the dispatched tradesperson verifies their identity to the homeowner using Certifyd. The verification record can feed back into the platform, enriching the business\u2019s profile with individual-level trust data.",
      },
      {
        question: "Does this replace existing platform verification?",
        answer:
          "No. Certifyd complements existing platform verification. Platforms already do valuable work verifying business credentials, insurance, and qualifications. Certifyd adds the individual identity layer that platforms currently cannot provide. It\u2019s the difference between \u2018this is a verified business\u2019 and \u2018this verified person from this verified business is at your door right now.\u2019",
      },
      {
        question: "What\u2019s the benefit for tradespeople?",
        answer:
          "Verified tradespeople build a cryptographic trust record over time. Every verified job creates an auditable record of attendance and professional conduct. This portable, tamper-proof reputation follows them across platforms and employers. For tradespeople competing on trust, Certifyd verification becomes a differentiator \u2014 proof that they stand behind their identity and their work.",
      },
      {
        question: "Can sole traders use Certifyd without a platform?",
        answer:
          "Yes. Sole traders can register their own Organisation on Certifyd and verify directly with clients. They don\u2019t need to be on a trade platform to benefit. However, the combination of platform membership plus Certifyd verification creates the strongest trust signal: the platform verifies the business, and Certifyd verifies the individual. Together, they close the complete trust gap.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Electricians", slug: "electricians" },
      { label: "Certifyd for Builders", slug: "builders" },
      { label: "Certifyd for Cleaning Companies", slug: "cleaning-companies" },
    ],
    relatedSolutions: [
      { label: "Certify That Business", href: "/solutions/business/" },
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Trade Platforms\u2019 Blind Spot", href: "/blog/trade-platforms-blind-spot/" },
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Identity as Infrastructure", href: "/blog/identity-as-infrastructure/" },
    ],
    relatedResources: [
      {
        label: "Trading Standards \u2014 Rogue Traders",
        href: "https://www.tradingstandards.uk/consumers/support-and-advice/roguetraders/",
        external: true,
      },
    ],
    ctaTitle: "Add individual verification to your platform",
    ctaSecondaryLabel: "Read: Trade Platforms\u2019 Blind Spot",
    ctaSecondaryHref: "/blog/trade-platforms-blind-spot/",
  },

  /* ─────────────────────────────────────────────────────
     DOMICILIARY CARE
     ───────────────────────────────────────────────────── */
  {
    slug: "domiciliary-care",
    category: "business",
    parentIndustry: "care",
    title: "Certifyd for Domiciliary Care Providers",
    metaTitle: "Identity Verification for Domiciliary Care",
    metaDescription:
      "Domiciliary care workers visit vulnerable people in their own homes. Verify every carer\u2019s identity at the door \u2014 in 30 seconds with Certifyd.",
    badge: "Domiciliary Care",
    headline: "They Enter Alone. The Service User Can\u2019t Check.",
    subtitle:
      "Domiciliary care workers visit vulnerable people in their own homes, often alone and unsupervised. Certifyd verifies every carer\u2019s identity before they cross the threshold.",
    heroGraphic: "shift-monitor",
    heroCard: { name: "Comfort Adeyemi", secondaryLabel: "Provider", secondaryValue: "HomeFirst Care" },
    searchIntentParagraph:
      "Identity verification for domiciliary care providers is a safeguarding imperative. Certifyd uses bi-directional authentication \u2014 both the service user (or their family) and the care worker cryptographically prove their identity to each other in real time. When a carer arrives at someone\u2019s home, the system verifies not just who they are, but that they hold an active membership with the care provider, are authorised for that specific service user, and are currently employed. The result is a tamper-proof visit record that satisfies CQC requirements and gives families verifiable peace of mind.",
    stats: [
      { value: "10K+", label: "domiciliary care providers in England" },
      { value: "540K", label: "people receiving home care" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Over 540,000 people in England receive domiciliary care \u2014 personal care delivered in their own homes. Unlike residential care homes where managers can observe staff, domiciliary care workers operate independently, visiting service users alone. The service user may have dementia, limited mobility, or cognitive impairment that prevents them from verifying or challenging the identity of the person at their door.",
      "Domiciliary care providers employ over 700,000 workers, with annual turnover exceeding 30%. The sector relies heavily on agency and bank workers to cover absences and meet demand. A service user who expects their regular carer may instead receive a stranger from an agency \u2014 someone the care provider may not have met and the service user certainly has not. Without real-time verification, neither party has independent confirmation of the other\u2019s identity.",
      "CQC rates domiciliary care providers against the same five key questions as care homes. The \u2018Safe\u2019 key line of enquiry requires providers to demonstrate that only authorised, verified staff deliver care. Certifyd\u2019s device-bound, bi-directional authentication creates a tamper-proof record for every home visit, linking the specific carer to the specific service user, the time of arrival, and the organisational authority under which they are working.",
    ],
    problems: [
      "Care workers visit service users alone, with no one to witness or verify their identity.",
      "Service users with dementia or cognitive impairment cannot challenge unfamiliar carers.",
      "Agency and bank workers cover shifts with no independent identity verification at the point of care.",
      "Paper-based visit records can be falsified \u2014 times fabricated, visits logged that didn\u2019t happen.",
    ],
    steps: [
      "Domiciliary care provider registers as an Organisation on Certifyd and adds each carer as a member",
      "Each carer registers their device, creating a cryptographic identity bound to their phone",
      "At each home visit, the carer verifies through Certifyd \u2014 confirming identity, employment, and service user authorisation",
      "A tamper-proof visit record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
      attribution: "Manager, residential care home",
    },
    faqs: [
      {
        question: "How does Certifyd work for service users who can\u2019t use a phone?",
        answer:
          "Family members, advocates, or care managers can be registered as authorised verifiers for a service user. When a carer arrives, they verify through Certifyd \u2014 the verification record is created regardless of whether the service user participates directly. Family members can receive notifications confirming who arrived and when. The system is designed for the reality of care delivery, not an idealised scenario where everyone has a smartphone.",
      },
      {
        question: "Can Certifyd replace electronic call monitoring (ECM)?",
        answer:
          "Certifyd complements ECM, it doesn\u2019t replace it. ECM systems confirm that a phone call was made from a location at a time. Certifyd confirms that a specific, verified individual was at that location. The combination of ECM (location and timing) plus Certifyd (verified identity) provides a significantly stronger audit trail than either system alone.",
      },
      {
        question: "How does this help with safeguarding referrals?",
        answer:
          "When a safeguarding concern arises, one of the first questions is \u2018who was with the service user?\u2019 Certifyd provides a tamper-proof record of exactly who visited, when, and under whose organisational authority. This evidence is invaluable for safeguarding investigations, removing ambiguity about which specific individual was present at the relevant time.",
      },
      {
        question: "What about personal assistants employed directly by the service user?",
        answer:
          "Direct payment recipients who employ their own personal assistants can register as an Organisation on Certifyd and add their PAs as members. The PA verifies at each visit, creating the same tamper-proof record. This gives self-directed care arrangements the same verification infrastructure that larger care providers use \u2014 protecting both the service user and the PA.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Care Workers", slug: "care-workers" },
      { label: "Certifyd for Care Homes", slug: "care-homes" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Care Home Staffing Crisis", href: "/blog/care-home-staffing-crisis/" },
      { label: "The Safeguarding Gap in Care Homes", href: "/blog/safeguarding-gap-care-homes/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
    ],
    relatedResources: [
      {
        label: "CQC \u2014 Domiciliary Care Standards",
        href: "https://www.cqc.org.uk/guidance-providers/regulations/regulation-19-fit-proper-persons-employed",
        external: true,
      },
    ],
    ctaTitle: "Verify every carer at every home visit",
    ctaSecondaryLabel: "Read: The Safeguarding Gap",
    ctaSecondaryHref: "/blog/safeguarding-gap-care-homes/",
  },

  /* ─────────────────────────────────────────────────────
     FACILITIES MANAGEMENT
     ───────────────────────────────────────────────────── */
  {
    slug: "facilities-management",
    category: "business",
    parentIndustry: "workforce",
    title: "Certifyd for Facilities Management",
    metaTitle: "Identity Verification for Facilities Management",
    metaDescription:
      "FM companies send cleaners, engineers, and guards to client sites daily. Verify every person on every site with Certifyd in 30 seconds.",
    badge: "Facilities Management",
    headline: "Dozens of People. Dozens of Sites. One Question: Who Are They?",
    subtitle:
      "Facilities management companies deploy cleaners, engineers, security guards, and maintenance crews across client sites. Certifyd verifies every person on every site, every day.",
    heroCard: { name: "Simon Clarke", secondaryLabel: "Company", secondaryValue: "Sterling FM", context: "Site access: 07:00 AM" },
    searchIntentParagraph:
      "Identity verification for facilities management companies addresses the challenge of deploying large, diverse workforces across multiple client sites. Certifyd\u2019s Organisation management lets FM companies register each worker as a member with a defined role, their identity cryptographically bound to their device. At each site, workers verify through bi-directional authentication \u2014 confirming their identity, FM company membership, and site-specific authorisation in real time. Every site visit creates a tamper-proof audit record that satisfies both client contracts and regulatory requirements.",
    stats: [
      { value: "\u00a3140B", label: "UK facilities management market" },
      { value: "10%+", label: "of the UK workforce in FM roles" },
      { value: "30s", label: "to verify per person with Certifyd" },
    ],
    whyItMatters: [
      "Facilities management is a \u00a3140 billion industry in the UK, employing over 10% of the total workforce. FM companies deploy diverse teams \u2014 cleaners, security guards, maintenance engineers, grounds staff, and catering workers \u2014 across client sites that may include offices, hospitals, schools, data centres, and government buildings. Each site has its own security requirements, and each client expects the FM company to guarantee the identity of every person sent.",
      "The supply chain complexity is significant. FM companies subcontract to specialist providers, who may in turn use agency labour. The person cleaning a bank\u2019s server room at midnight may be employed by an agency, contracted through a cleaning subcontractor, managed by the FM company, and ultimately accountable to the bank. At each link in this chain, identity verification may be assumed rather than confirmed.",
      "Client contracts increasingly require evidence of identity verification for every person accessing their sites. Insurance requirements, security standards (ISO 27001, BREEAM, PCI DSS), and regulatory obligations demand auditable proof. Certifyd provides this through device-bound, bi-directional authentication \u2014 creating tamper-proof records that flow through the entire supply chain, from the individual worker to the end client.",
    ],
    problems: [
      "Multiple subcontractor layers mean the FM company can\u2019t always verify who ends up on the client\u2019s site.",
      "Workers rotate across sites with different security requirements \u2014 the right person at the wrong site is still a breach.",
      "Client contracts demand identity verification evidence, but FM companies rely on subcontractors to self-certify.",
      "When incidents occur, establishing which specific individual was on which site at which time is difficult.",
    ],
    steps: [
      "FM company registers as an Organisation on Certifyd; subcontractors register separately",
      "Each worker registers their device, creating a cryptographic identity linked to their employer",
      "At each site, workers verify through Certifyd \u2014 confirming identity, employer, and site-specific authorisation",
      "A tamper-proof record is created for every site visit, auditable by the FM company and the end client",
    ],
    testimonial: {
      quote:
        "At \u00a350\u2013200 per background check, we were spending thousands a year just to verify temps. Some checks got skipped. That\u2019s the reality for millions of small businesses.",
      attribution: "Director, temp staffing agency",
    },
    faqs: [
      {
        question: "How does Certifyd handle multi-tier supply chains?",
        answer:
          "Each company in the supply chain registers as its own Organisation on Certifyd. Workers are members of their direct employer. When a worker arrives at a client site, verification confirms their identity, their employer, and their site-specific authorisation. The FM company can set verification requirements for each site and receive records for all workers, regardless of which subcontractor they work for. This creates transparency through the entire chain.",
      },
      {
        question: "Can clients see verification records for their sites?",
        answer:
          "Yes. FM companies can share site-level verification records with clients, confirming who was on site, when, and under whose authority. This satisfies contract requirements for identity verification evidence and gives clients real-time visibility into who is accessing their premises. For security-sensitive sites, this is particularly valuable.",
      },
      {
        question: "How does Certifyd work with access control systems?",
        answer:
          "Certifyd is a verification layer, not an access control system. It verifies identity and organisational membership \u2014 confirming that the right person from the right company is at the right site. This can complement existing access control (key cards, biometrics, PIN codes) by adding an identity verification layer that links the person using the access method to their verified identity.",
      },
      {
        question: "What about workers who access multiple sites in a day?",
        answer:
          "Workers verify at each site they access. A mobile engineer visiting three buildings in a day creates three verification records, each linked to the specific site and the specific time. This provides a complete, auditable trail of the worker\u2019s movements across sites \u2014 valuable for both operational tracking and incident investigation.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Security Guards", slug: "security-guards" },
      { label: "Certifyd for Cleaning Companies", slug: "cleaning-companies" },
      { label: "Certifyd for Contractor Verification", slug: "contractor-verification" },
    ],
    relatedSolutions: [
      { label: "Certify That Business", href: "/solutions/business/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
      { label: "Identity as Infrastructure", href: "/blog/identity-as-infrastructure/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "BIFM \u2014 British Institute of Facilities Management",
        href: "https://www.iwfm.org.uk/",
        external: true,
      },
    ],
    ctaTitle: "Verify every person on every site",
    ctaSecondaryLabel: "Read: Audit Trails for Compliance",
    ctaSecondaryHref: "/blog/audit-trails-compliance/",
  },
];

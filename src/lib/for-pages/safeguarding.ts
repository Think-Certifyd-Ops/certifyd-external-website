import type { ForPage } from "./types";

export const SAFEGUARDING_PAGES: ForPage[] = [
  /* ─────────────────────────────────────────────────────
     PROTECTING ELDERLY PARENTS
     ───────────────────────────────────────────────────── */
  {
    slug: "protecting-elderly-parents",
    category: "safeguarding",
    parentIndustry: "trades",
    title: "Certifyd for Protecting Elderly Parents",
    metaTitle: "Protect Elderly Parents from Doorstep Fraud",
    metaDescription:
      "Elderly people are the primary targets of doorstep fraud. Let your parents verify who\u2019s at the door before they open it \u2014 with Certifyd.",
    badge: "Elderly Protection",
    headline: "Your Mum Opens the Door to Everyone. She Shouldn\u2019t Have To.",
    subtitle:
      "Elderly people are the primary targets of doorstep fraud and rogue traders. Certifyd gives families a way to verify who\u2019s at your parents\u2019 door \u2014 even when you\u2019re not there.",
    heroCard: { name: "Margaret Wilson", secondaryLabel: "Visiting from", secondaryValue: "Sunrise Care Group", context: "Verified at door: 10:30 AM" },
    searchIntentParagraph:
      "Protecting elderly parents from doorstep fraud requires verification that works when the vulnerable person cannot check for themselves. Certifyd uses bi-directional, device-bound authentication that can be managed by family members remotely. When someone arrives at an elderly person\u2019s home \u2014 a tradesperson, a care worker, a charity collector \u2014 the visitor verifies their identity through their registered device. The elderly person or their family member can confirm the visitor\u2019s identity and organisational affiliation in real time, creating a tamper-proof record of every visit.",
    stats: [
      { value: "75%", label: "of doorstep fraud victims are over 65" },
      { value: "\u00a357M", label: "annual UK doorstep crime cost" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "75% of doorstep fraud victims are over 65. Elderly people are disproportionately targeted because they are more likely to be at home during the day, more likely to answer the door to strangers, and less likely to challenge someone who presents themselves as a professional. Rogue traders, bogus officials, and distraction burglars exploit this vulnerability systematically.",
      "For adult children living miles away from elderly parents, doorstep safety is a constant worry. You can\u2019t be there every time someone knocks. You can\u2019t check every tradesperson\u2019s credentials. And your parent may not question someone who arrives in a branded van with a plausible story. The result is a vulnerability that worsens with age, isolation, and cognitive decline.",
      "Certifyd provides a practical layer of protection. Legitimate visitors \u2014 care workers, cleaners, tradespeople, utility engineers \u2014 verify their identity through their device-bound passkey before or upon arrival. Family members can be notified and can confirm the visitor\u2019s identity remotely. If someone arrives who can\u2019t verify, that\u2019s the signal your parent needs \u2014 don\u2019t open the door. Every visit creates a tamper-proof record of who came, when, and under whose authority.",
    ],
    problems: [
      "Elderly people are disproportionately targeted by doorstep fraud \u2014 75% of victims are over 65.",
      "Adult children can\u2019t be present for every tradesperson, care worker, or visitor at their parent\u2019s home.",
      "Cognitive decline means elderly parents may not challenge unfamiliar visitors or remember who came.",
      "Rogue traders exploit trust and isolation \u2014 arriving in branded vans with professional-sounding stories.",
    ],
    steps: [
      "Visitor arrives at the elderly person\u2019s home and opens Certifyd to verify",
      "Their identity and organisational membership are cryptographically confirmed through their device",
      "The elderly person (or their family member remotely) can see the visitor\u2019s verified identity and company",
      "A tamper-proof record is created: who visited, when, and under whose authority",
    ],
    testimonial: {
      quote:
        "Mum had a man knock on her door saying he was from the water board. She let him in. He wasn\u2019t. That\u2019s when we realised she can\u2019t tell anymore who she should trust.",
      attribution: "Daughter of elderly fraud victim",
    },
    faqs: [
      {
        question: "Can my elderly parent use Certifyd?",
        answer:
          "Certifyd is designed so that the visitor does the verification, not the homeowner. The visitor opens the app and completes the passkey challenge on their device. The elderly person (or their family member remotely) simply sees the verification result \u2014 a confirmed identity and organisational affiliation. For elderly parents who use a smartphone, they can view verification directly. For those who don\u2019t, family members can receive notifications and confirm visitors remotely.",
      },
      {
        question: "Can family members be notified when someone visits?",
        answer:
          "Yes. Family members can be added as authorised contacts. When a visitor verifies at the elderly person\u2019s address, the family member receives a notification with the visitor\u2019s verified identity, their company or organisation, and the time of visit. This provides remote oversight without requiring the elderly person to manage the technology themselves.",
      },
      {
        question: "What if someone arrives who can\u2019t verify?",
        answer:
          "That\u2019s the point. If a tradesperson, care worker, or official arrives and cannot verify their identity through Certifyd, that is the signal not to open the door. Legitimate professionals who use Certifyd will be able to verify in 30 seconds. Someone who can\u2019t \u2014 or won\u2019t \u2014 should be treated with caution. This gives elderly people a simple, clear rule: verified means safe, unverified means wait.",
      },
      {
        question: "Does this work for care workers visiting my parent?",
        answer:
          "Yes. Care workers can verify through Certifyd, confirming their identity and their active membership with the care provider. Family members receive a notification confirming who is caring for their parent. Over time, this builds a complete, tamper-proof record of every care visit \u2014 who came, when, and under whose authority. This is particularly valuable when multiple carers rotate through the week.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Cleaners", slug: "cleaners" },
      { label: "Certifyd for Care Workers", slug: "care-workers" },
      { label: "Certifyd for Domiciliary Care", slug: "domiciliary-care" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "The Doorstep Fraud Problem", href: "/blog/doorstep-fraud-problem/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
    ],
    relatedResources: [
      {
        label: "Age UK \u2014 Doorstep Scams",
        href: "https://www.ageuk.org.uk/information-advice/money-legal/scams-fraud/doorstep-scams/",
        external: true,
      },
      {
        label: "Citizens Advice \u2014 Doorstep Scams",
        href: "https://www.citizensadvice.org.uk/consumer/scams/check-if-something-might-be-a-scam/",
        external: true,
      },
    ],
    ctaTitle: "Protect your parents from doorstep fraud",
    ctaSecondaryLabel: "Read: The Doorstep Fraud Problem",
    ctaSecondaryHref: "/blog/doorstep-fraud-problem/",
  },

  /* ─────────────────────────────────────────────────────
     LONE WORKERS
     ───────────────────────────────────────────────────── */
  {
    slug: "lone-workers",
    category: "safeguarding",
    parentIndustry: "workforce",
    title: "Certifyd for Lone Workers",
    metaTitle: "Identity Verification for Lone Workers",
    metaDescription:
      "Lone workers meet clients and contacts alone. Verify the identity of the person they\u2019re meeting before they arrive \u2014 with Certifyd.",
    badge: "Lone Workers",
    headline: "They\u2019re Meeting a Stranger. Alone. In a Private Location.",
    subtitle:
      "Lone workers \u2014 estate agents, social workers, mobile engineers \u2014 meet unfamiliar people in private locations. Certifyd verifies the identity of the person they\u2019re meeting before they arrive.",
    heroGraphic: "qr-scan",
    heroCard: { name: "Sophie Turner", secondaryLabel: "Role", secondaryValue: "Field Engineer" },
    searchIntentParagraph:
      "Identity verification for lone workers protects employees who meet unfamiliar people in private or isolated locations. Certifyd uses bi-directional authentication \u2014 both the lone worker and the person they\u2019re meeting cryptographically prove their identity to each other before or at the point of contact. This creates a verifiable record of who the lone worker met, when, and where \u2014 critical for both personal safety and organisational duty of care. If the other person can\u2019t verify, the lone worker has a clear signal to disengage.",
    stats: [
      { value: "6M+", label: "lone workers in the UK" },
      { value: "150+", label: "violent incidents against lone workers annually (HSE)" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Over 6 million people in the UK work alone at some point during their working week. Estate agents show properties to strangers. Social workers visit clients in their homes. Mobile engineers attend callouts alone. Delivery drivers enter unfamiliar areas. Each of these scenarios involves a worker meeting an unknown person in a location where help may not be immediately available.",
      "Employers have a legal duty of care under the Health and Safety at Work Act 1974 and the Management of Health and Safety at Work Regulations 1999 to assess and mitigate risks to lone workers. This includes risks from the people they interact with. Most lone worker safety systems focus on location tracking and panic buttons \u2014 reactive measures that respond after an incident. They do not address the prevention of incidents through identity verification.",
      "Certifyd adds a preventive layer. Before a lone worker meets someone, both parties can verify through device-bound authentication. The lone worker knows who they\u2019re meeting, and the other person knows who the worker is. A record of the verified meeting is created automatically. If someone refuses to verify, the lone worker has grounds to refuse the meeting or escalate. This shifts lone worker safety from reactive (panic button after the fact) to preventive (identity verification before the meeting).",
    ],
    problems: [
      "Lone workers meet unfamiliar people in private locations with no independent identity verification.",
      "Existing lone worker systems are reactive (panic buttons, GPS tracking) \u2014 they respond after incidents, not before.",
      "Employers have a legal duty of care but limited tools for proactive lone worker protection.",
      "When incidents occur, there\u2019s often no verifiable record of who the lone worker was meeting.",
    ],
    steps: [
      "Before the meeting, both parties open Certifyd and verify through their registered devices",
      "Each person\u2019s identity is cryptographically confirmed \u2014 bi-directional, not one-way",
      "A pre-meeting verification record is created: who is meeting whom, when, and where",
      "If the other person can\u2019t or won\u2019t verify, the lone worker has grounds to disengage or escalate",
    ],
    faqs: [
      {
        question: "How does Certifyd help with lone worker safety?",
        answer:
          "Certifyd adds identity verification to lone worker interactions. Before meeting an unfamiliar person, the lone worker can request Certifyd verification. Both parties prove their identity through their device-bound passkeys. This creates a verified record of the meeting and gives the lone worker confidence about who they\u2019re meeting \u2014 or a clear warning signal if the other person can\u2019t verify.",
      },
      {
        question: "Does this replace existing lone worker safety systems?",
        answer:
          "No. Certifyd complements existing systems. GPS tracking, panic buttons, and check-in procedures remain important reactive safety measures. Certifyd adds a preventive layer: verifying the identity of the person the lone worker is meeting before the interaction begins. The combination of prevention (Certifyd) and response (existing systems) provides more comprehensive protection.",
      },
      {
        question: "Which lone worker roles benefit most?",
        answer:
          "Any role that involves meeting unfamiliar people in private or isolated locations: estate agents conducting viewings, social workers visiting clients, mobile engineers attending callouts, domiciliary care workers, charity workers conducting home visits, and surveyor roles. The common factor is a worker meeting a stranger in a location where they may be alone.",
      },
      {
        question: "Can Certifyd verify the lone worker\u2019s clients?",
        answer:
          "Yes. Certifyd verification is bi-directional. The client verifies the lone worker (confirming they are from the company they claim to represent) and the lone worker verifies the client (confirming they are who they said they would be). This mutual verification protects both parties and creates a meeting record for both.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Security Guards", slug: "security-guards" },
      { label: "Certifyd for Estate Agent Viewings", slug: "estate-agent-viewings" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
    ],
    relatedResources: [
      {
        label: "HSE \u2014 Lone Worker Guidance",
        href: "https://www.hse.gov.uk/lone-working/",
        external: true,
      },
    ],
    ctaTitle: "Protect your lone workers with identity verification",
    ctaSecondaryLabel: "Read: Two-Way Verification Explained",
    ctaSecondaryHref: "/blog/two-way-verification-explained/",
  },

  /* ─────────────────────────────────────────────────────
     SCHOOL PICKUPS
     ───────────────────────────────────────────────────── */
  {
    slug: "school-pickups",
    category: "safeguarding",
    parentIndustry: "care",
    title: "Certifyd for School Pickups",
    metaTitle: "Identity Verification for School Pickups",
    metaDescription:
      "Schools release children to adults they can\u2019t always verify. Certifyd confirms pickup authorisation cryptographically \u2014 in 30 seconds.",
    badge: "School Pickups",
    headline: "A Stranger Says They\u2019re Picking Up Your Child. Are They?",
    subtitle:
      "School pickup authorisation relies on lists, passwords, and visual recognition. Certifyd verifies the collector\u2019s identity cryptographically \u2014 confirming they are who the parent authorised.",
    heroCard: { name: "Hannah Green", secondaryLabel: "Authorised by", secondaryValue: "Claire Green (Parent)", context: "Pickup verified: 3:15 PM" },
    searchIntentParagraph:
      "Identity verification for school pickups addresses a critical safeguarding gap: when someone other than the usual parent collects a child, the school must verify their identity and authorisation. Current systems \u2014 password words, phone calls to parents, checking ID cards \u2014 are imperfect and stressful. Certifyd uses device-bound authentication: the parent authorises a specific person, and that person verifies their identity through their registered device at pickup time. The school sees cryptographic confirmation that the collector is who the parent said they would be.",
    stats: [
      { value: "8.9M", label: "children in UK schools" },
      { value: "0", label: "mandatory identity verification for collectors" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Every school in the UK manages the daily challenge of releasing children to authorised adults. When the usual parent can\u2019t collect, they ask a grandparent, friend, neighbour, or childminder. The school\u2019s safeguarding protocols require verifying that the substitute collector is authorised and is who they claim to be. In practice, this often relies on a \u2018password word\u2019 shared between the parent and the collector \u2014 a system that provides minimal actual security.",
      "Teaching assistants and school staff face the daily anxiety of recognising hundreds of faces. When a substitute arrives \u2014 \u2018I\u2019m picking up Olivia for Sarah, she told me to come\u2019 \u2014 the staff member must decide whether to release the child. A phone call to the parent helps, but parents are not always reachable. The password word system assumes the collector knows it, but passwords can be shared, overheard, or guessed.",
      "Certifyd provides cryptographic certainty. The parent authorises a specific person through the app. At pickup, the authorised person verifies their identity through their device-bound passkey. The school receives real-time confirmation that the collector\u2019s identity matches the parent\u2019s authorisation \u2014 not just a password, not just a phone call, but device-bound cryptographic proof.",
    ],
    problems: [
      "Password words provide minimal security \u2014 they can be shared, overheard, or guessed.",
      "School staff must visually recognise hundreds of parents and authorised collectors daily.",
      "Substitute collectors (grandparents, friends, childminders) arrive without formal identity verification.",
      "Phone calls to parents for authorisation are unreliable \u2014 parents aren\u2019t always reachable.",
    ],
    steps: [
      "Parent authorises a specific person to collect their child through Certifyd",
      "The authorised person arrives at school and verifies through their device-bound passkey",
      "The school receives cryptographic confirmation: the collector\u2019s identity matches the parent\u2019s authorisation",
      "A tamper-proof record is created: who collected, when, and under whose parental authority",
    ],
    faqs: [
      {
        question: "How does a parent authorise a pickup?",
        answer:
          "The parent designates an authorised collector through Certifyd, specifying the person\u2019s verified identity and the date or period of authorisation. The collector must already have a Certifyd identity (device-bound passkey). At pickup time, the collector verifies at the school \u2014 the system confirms their identity matches the parent\u2019s authorisation. Authorisations can be one-time or ongoing, and can be revoked instantly.",
      },
      {
        question: "What if the authorised person doesn\u2019t have Certifyd?",
        answer:
          "The authorised person would need to register on Certifyd (a one-time process taking a few minutes). This is a feature, not a limitation: it means every authorised collector has a verified, device-bound identity. Anyone who can\u2019t or won\u2019t register cannot be verified cryptographically, and the school should use alternative verification methods for that specific pickup.",
      },
      {
        question: "Does this replace the school\u2019s existing safeguarding procedures?",
        answer:
          "No. Certifyd adds a verification layer on top of existing safeguarding procedures. Schools should continue to maintain authorised collector lists, use their professional judgement, and follow DfE safeguarding guidance. Certifyd provides an additional, cryptographic confirmation that the person collecting is who the parent authorised. It enhances existing procedures rather than replacing them.",
      },
      {
        question: "Can childminders and nannies use Certifyd for school pickups?",
        answer:
          "Yes. Childminders and nannies can register on Certifyd and be designated as authorised collectors by parents. At each pickup, they verify through their device-bound passkey. The school sees their verified identity and the parental authorisation. This is particularly valuable for childminders who collect children from multiple families \u2014 each family\u2019s authorisation is managed independently.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Nannies & Au Pairs", slug: "nannies-au-pairs" },
      { label: "Certifyd for Safeguarding", slug: "safeguarding" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "The Safeguarding Gap in Care Homes", href: "/blog/safeguarding-gap-care-homes/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
    ],
    relatedResources: [
      {
        label: "DfE \u2014 Keeping Children Safe in Education",
        href: "https://www.gov.uk/government/publications/keeping-children-safe-in-education--2",
        external: true,
      },
    ],
    ctaTitle: "Bring verified identity to school pickups",
    ctaSecondaryLabel: "Read: Two-Way Verification Explained",
    ctaSecondaryHref: "/blog/two-way-verification-explained/",
  },

  /* ─────────────────────────────────────────────────────
     SAFEGUARDING (GENERAL)
     ───────────────────────────────────────────────────── */
  {
    slug: "safeguarding",
    category: "safeguarding",
    parentIndustry: "care",
    title: "Certifyd for Safeguarding",
    metaTitle: "Identity Verification for Safeguarding",
    metaDescription:
      "Safeguarding requires knowing who is with vulnerable people. Verify every worker, visitor, and carer\u2019s identity in real time with Certifyd.",
    badge: "Safeguarding",
    headline: "Safeguarding Means Knowing Who. Not Just Trusting Who.",
    subtitle:
      "Safeguarding vulnerable people requires verifiable identity, not assumed identity. Certifyd provides cryptographic proof of who is with whom, when, and under whose authority.",
    heroGraphic: "shift-monitor",
    heroCard: { name: "Dr. Sarah Khan", secondaryLabel: "Role", secondaryValue: "Safeguarding Lead" },
    searchIntentParagraph:
      "Safeguarding identity verification with Certifyd creates a verifiable chain of authority around vulnerable people. Every person who interacts with a vulnerable individual \u2014 care workers, visitors, volunteers, transport providers, professionals \u2014 verifies through device-bound authentication. The system confirms not just who they are, but their active membership with their organisation and their specific authorisation to be with that individual. When a safeguarding concern arises, there is a tamper-proof record of exactly who was present, when, and under whose authority.",
    stats: [
      { value: "800K+", label: "safeguarding referrals annually in England" },
      { value: "45%", label: "involve concerns about person\u2019s identity or role" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Safeguarding vulnerable people \u2014 children, elderly adults, people with learning disabilities, people with mental health conditions \u2014 fundamentally depends on knowing who is in contact with them. Over 800,000 safeguarding referrals are made annually in England. A significant proportion involve questions about the identity, authority, or organisational affiliation of people who had access to the vulnerable person.",
      "Current safeguarding practices rely on DBS checks (point-in-time), ID badges (easily forged), and sign-in sheets (easily falsified). None of these provide real-time, verifiable proof that the person with the vulnerable individual is who they claim to be, works for who they claim to work for, and is authorised to be there. The gap between \u2018we checked them at onboarding\u2019 and \u2018we can prove who was with them on Tuesday afternoon\u2019 is where safeguarding failures occur.",
      "Certifyd\u2019s bi-directional, device-bound authentication closes this gap. Every interaction creates a tamper-proof record linked to a cryptographically verified identity. When a safeguarding investigation asks \u2018who was with this person?\u2019, the answer is not \u2018we think it was...\u2019 but \u2018this specific, verified individual, confirmed through their registered device, working under this specific organisation\u2019s authority.\u2019",
    ],
    problems: [
      "DBS checks are point-in-time \u2014 they don\u2019t prove who is with the vulnerable person today.",
      "ID badges and lanyards are easily forged, borrowed, or outdated.",
      "Sign-in sheets can be falsified \u2014 names invented, times fabricated, visits logged that didn\u2019t happen.",
      "When safeguarding concerns arise, establishing who was actually present is often difficult or impossible.",
    ],
    steps: [
      "Every person interacting with a vulnerable individual verifies through their device-bound passkey",
      "The system confirms their identity, organisational membership, and specific authorisation",
      "A tamper-proof record is created: who was present, when, where, and under whose authority",
      "When a safeguarding concern arises, verifiable evidence is immediately available",
    ],
    testimonial: {
      quote:
        "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
      attribution: "Manager, residential care home",
    },
    faqs: [
      {
        question: "How does Certifyd support Ofsted and CQC safeguarding requirements?",
        answer:
          "Both Ofsted and CQC assess safeguarding as a core element of their inspections. Certifyd provides tamper-proof verification records that demonstrate who was with vulnerable people, when, and under whose authority. These records support the \u2018Safe\u2019 key line of enquiry for CQC and the safeguarding judgement for Ofsted by providing evidence of ongoing identity verification, not just point-of-hire checks.",
      },
      {
        question: "Can Certifyd help with safeguarding investigations?",
        answer:
          "Yes. When a safeguarding concern is raised, one of the first questions is \u2018who had access to this person?\u2019 Certifyd provides a tamper-proof audit trail of every verified interaction: the specific individual, their verified identity, their organisational affiliation, and the exact time. This evidence is invaluable for investigations, removing ambiguity about who was present.",
      },
      {
        question: "Does Certifyd work for volunteers as well as paid staff?",
        answer:
          "Yes. Volunteers who work with vulnerable people can register on Certifyd through their volunteering organisation. Each volunteer\u2019s identity is device-bound and their membership in the volunteering organisation is confirmed at each interaction. This provides the same level of identity assurance for volunteers as for paid staff \u2014 particularly important given that safeguarding standards apply equally to both.",
      },
      {
        question: "How does Certifyd handle multi-agency safeguarding?",
        answer:
          "Multi-agency safeguarding involves professionals from different organisations (social services, police, health, education) working with the same vulnerable person. Each professional verifies through Certifyd as a member of their respective organisation. This creates a unified, tamper-proof record of all professional interactions, regardless of which agency they represent \u2014 valuable for both coordination and accountability.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Care Workers", slug: "care-workers" },
      { label: "Certifyd for School Pickups", slug: "school-pickups" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Safeguarding Gap in Care Homes", href: "/blog/safeguarding-gap-care-homes/" },
      { label: "The Care Home Staffing Crisis", href: "/blog/care-home-staffing-crisis/" },
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Safeguarding Duties",
        href: "https://www.gov.uk/government/publications/care-act-statutory-guidance/care-and-support-statutory-guidance",
        external: true,
      },
    ],
    ctaTitle: "Bring verifiable identity to safeguarding",
    ctaSecondaryLabel: "Read: The Safeguarding Gap in Care Homes",
    ctaSecondaryHref: "/blog/safeguarding-gap-care-homes/",
  },
];

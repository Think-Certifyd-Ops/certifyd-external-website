import type { ForPage } from "./types";

export const ROLE_PAGES: ForPage[] = [
  /* ─────────────────────────────────────────────────────
     CLEANERS
     ───────────────────────────────────────────────────── */
  {
    slug: "cleaners",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Cleaners",
    metaTitle: "Identity Verification for Cleaners",
    metaDescription:
      "Cleaners have your keys, know your routine, and enter your home unsupervised. Verify every cleaner at the door in 30 seconds with Certifyd.",
    badge: "Cleaners",
    headline: "They Have Your Keys. Do You Know Who They Are?",
    subtitle:
      "Cleaners enter your home weekly \u2014 often unsupervised, with full access to your property. Certifyd lets homeowners and cleaning companies verify every cleaner at the door in 30 seconds.",
    heroCard: { name: "Sarah Jones", secondaryLabel: "Company", secondaryValue: "Sparkle Cleaning Co.", context: "Arrived: 09:15 AM" },
    searchIntentParagraph:
      "Identity verification for cleaners goes beyond checking a business card or a name on an app. Certifyd uses bi-directional authentication \u2014 both the homeowner and the cleaner cryptographically prove their identity to each other in real time. When a cleaner arrives, the system verifies not just who they are, but that they hold an active membership with the cleaning company that sent them and are authorised to be there. The result is a tamper-proof, auditable record of every visit: who arrived, when, where, and under whose authority.",
    stats: [
      { value: "0", label: "regulations requiring cleaners to verify ID" },
      { value: "\u00a357M", label: "annual UK doorstep crime cost" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK cleaning industry is largely unregulated. There is no licensing requirement, no mandatory identity check, and no register of domestic cleaners. A person can set up a cleaning business tomorrow with nothing more than a Facebook page and a bucket.",
      "For the millions of UK households that use a regular cleaner, this means entrusting house keys, alarm codes, and unsupervised access to someone whose identity has never been formally verified. When cleaning companies send substitute staff \u2014 which happens frequently \u2014 the homeowner often has no idea who has just walked through their door.",
      "Platforms like Checkatrade and Trustatrader verify that a cleaning business exists. They cannot verify who actually arrives. That gap \u2014 between the business you booked and the person who turns up \u2014 is where risk lives. Closing it requires bi-directional authentication: both parties proving their identity to each other in real time, with the cleaner\u2019s organisational membership and authority verified cryptographically, not just taken on trust.",
    ],
    problems: [
      "Cleaning companies send different staff with no notice \u2014 you don\u2019t know who\u2019s actually in your home.",
      "Self-employed cleaners found via Facebook groups or Nextdoor have zero identity verification.",
      "Cleaners hold house keys, alarm codes, and knowledge of your schedule and valuables.",
      "When something goes missing, there\u2019s no record of who was there and when.",
    ],
    steps: [
      "Cleaner arrives \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the cleaner\u2019s active membership with their cleaning company and their authority to be there",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "My clients give me their house keys and alarm codes. They trust me completely. But when I started, nobody verified who I was \u2014 I could have been anyone.",
      attribution: "Self-employed cleaner",
    },
    faqs: [
      {
        question: "Do I need to verify my cleaner\u2019s identity?",
        answer:
          "There is no legal requirement for homeowners to verify a cleaner\u2019s identity in the UK. However, you are giving someone unsupervised access to your home, keys, and personal belongings. Verification protects both parties \u2014 the homeowner knows who is in their home, and the cleaner has proof they were there if a dispute arises.",
      },
      {
        question: "What happens if my cleaning company sends someone else?",
        answer:
          "This happens frequently \u2014 staff sickness, scheduling changes, and holiday cover mean a different person may arrive. Without verification, you have no way to confirm that the substitute is actually from the company. Certifyd links each cleaner to their verified identity, so you know immediately whether the person at your door is who they claim to be.",
      },
      {
        question:
          "How do cleaning companies verify their staff with Certifyd?",
        answer:
          "Cleaning companies register as an Organisation on Certifyd and add each cleaner as a member with a defined role. Each cleaner registers their own device (a passkey on their phone, for example) which is cryptographically bound to their identity. When they arrive at a job, the system verifies not just the cleaner\u2019s identity but their active membership and authority within the company \u2014 in real time. If a cleaner leaves the company, their membership is revoked instantly and they can no longer verify under that organisation.",
      },
      {
        question:
          "How is Certifyd different from just asking to see ID?",
        answer:
          "A driving licence or passport proves a person\u2019s name \u2014 it does not prove they work for the company they claim to represent, that they are authorised to be at your address, or that they were actually there at a specific time. Certifyd uses device-bound cryptographic authentication: the cleaner\u2019s identity is verified through their registered device, their active membership in the cleaning company is confirmed in real time, and a tamper-proof audit record is created automatically. It\u2019s the difference between a static card anyone could carry and a live, verified chain of trust.",
      },
      {
        question:
          "Is there a legal requirement to check a cleaner\u2019s right to work?",
        answer:
          "Yes. If you employ a cleaner directly (rather than using a cleaning company), you are legally required to check their right to work in the UK. Failure to do so can result in civil penalties of up to \u00a360,000 per illegal worker under the Immigration, Asylum and Nationality Act 2006. The Fair Work Agency, launching April 2026, will enforce this more proactively.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Nannies & Au Pairs", slug: "nannies-au-pairs" },
      { label: "Certifyd for Builders", slug: "builders" },
      {
        label: "Certifyd for Protecting Elderly Parents",
        slug: "protecting-elderly-parents",
      },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      {
        label: "Who\u2019s Really at Your Door?",
        href: "/blog/whos-really-at-your-door/",
      },
      {
        label: "The Doorstep Fraud Problem",
        href: "/blog/doorstep-fraud-problem/",
      },
      {
        label: "Trade Platforms\u2019 Blind Spot",
        href: "/blog/trade-platforms-blind-spot/",
      },
    ],
    relatedResources: [
      {
        label: "Citizens Advice \u2014 Hiring Domestic Help",
        href: "https://www.citizensadvice.org.uk/work/rights-at-work/basic-rights-and-contracts/domestic-workers/",
        external: true,
      },
      {
        label: "GOV.UK \u2014 Employing Someone to Work in Your Home",
        href: "https://www.gov.uk/employment-status/worker",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your cleaning business",
    ctaSecondaryLabel: "Read: Who\u2019s Really at Your Door?",
    ctaSecondaryHref: "/blog/whos-really-at-your-door/",
  },

  /* ─────────────────────────────────────────────────────
     TEMP WORKERS
     ───────────────────────────────────────────────────── */
  {
    slug: "temp-workers",
    category: "role",
    parentIndustry: "workforce",
    title: "Certifyd for Temp Workers",
    metaTitle: "Identity Verification for Temp Workers",
    metaDescription:
      "Temp workers arrive on day one as strangers. Verify every temp\u2019s identity and right to work before they start \u2014 in 30 seconds with Certifyd.",
    badge: "Temp Workers",
    headline: "Day One. New Face. No Idea Who They Are.",
    subtitle:
      "Temporary workers arrive at your site, warehouse, or office as complete strangers. Certifyd verifies every temp\u2019s identity, right to work, and agency affiliation before they start.",
    heroCard: { name: "James Wilson", secondaryLabel: "Company", secondaryValue: "FlexStaff Ltd", context: "Arrived: 06:00 AM" },
    searchIntentParagraph:
      "Identity verification for temp workers means more than checking a name against a booking sheet. Certifyd uses bi-directional authentication \u2014 the hiring site and the temp worker cryptographically prove their identity to each other in real time. When a temp arrives, the system verifies not just who they are, but that they hold an active assignment with the staffing agency that sent them and are authorised to work at that location. The result is a tamper-proof, auditable record of every assignment: who arrived, when, where, and under whose contractual authority.",
    stats: [
      { value: "1.2M", label: "agency workers in the UK" },
      { value: "\u00a360K", label: "penalty per illegal worker" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK temporary staffing industry employs over 1.2 million workers through more than 30,000 recruitment agencies. On any given day, tens of thousands of people walk onto work sites where nobody knows them personally. The hiring manager has a name on a spreadsheet. The temp has a lanyard with a photo. Neither side has verified the other.",
      "Under the Immigration, Asylum and Nationality Act 2006, employers bear joint liability for right-to-work checks \u2014 even when a worker arrives through an agency. The Fair Work Agency, launching April 2026, will have the power to inspect any business and demand evidence of every worker\u2019s identity and right to work. Relying on the agency to \u2018have done the checks\u2019 is not a statutory excuse.",
      "The gap between booking a temp and knowing who actually turns up is a compliance blind spot. Agencies verify at onboarding, but there is no mechanism to confirm that the person who arrives at the site is the same person who was onboarded. Certifyd closes that gap with device-bound, bi-directional authentication \u2014 both parties verify each other in real time, with organisational membership and assignment authority confirmed cryptographically.",
    ],
    problems: [
      "Agencies send replacement temps with no notice \u2014 the site has no way to verify who actually arrives.",
      "Right-to-work liability falls on the hiring employer, even when the agency sourced the worker.",
      "Temp workers rotate between multiple sites, creating gaps in accountability and audit trails.",
      "When incidents occur, there\u2019s often no verifiable record of who was on site and under whose authority.",
    ],
    steps: [
      "Temp worker arrives on site \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the temp\u2019s active assignment with their staffing agency, right-to-work status, and authority to be at that site",
      "A tamper-proof record is created: who, when, where, and under whose contractual authority",
    ],
    testimonial: {
      quote:
        "At \u00a350\u2013200 per background check, we were spending thousands a year just to verify temps. Some checks got skipped. That\u2019s the reality for millions of small businesses.",
      attribution: "Director, temp staffing agency",
    },
    faqs: [
      {
        question: "Who is responsible for verifying a temp worker\u2019s identity \u2014 the agency or the employer?",
        answer:
          "Both. The agency is responsible for conducting right-to-work checks at onboarding. But the hiring employer has a legal duty to verify that the person who arrives is who they claim to be and is authorised to work in the UK. Under the Immigration, Asylum and Nationality Act 2006, the hiring employer cannot simply rely on the agency having done the checks \u2014 if a worker is found to be illegal, both parties may face civil penalties of up to \u00a360,000 per worker.",
      },
      {
        question: "What happens when the agency sends a different temp?",
        answer:
          "Last-minute substitutions are common in temporary staffing \u2014 sickness, no-shows, and scheduling changes mean a different person may arrive. Without real-time verification, the site manager has no way to confirm the substitute\u2019s identity or assignment. Certifyd links each temp to their device-bound identity and active agency assignment, so the site knows immediately whether the person who arrives is authorised to be there.",
      },
      {
        question: "How does Certifyd help with Fair Work Agency compliance?",
        answer:
          "The Fair Work Agency (launching April 2026) will have the power to enter any business and demand evidence of right-to-work checks for every worker on site. Certifyd creates tamper-proof verification records for every temp worker assignment \u2014 who was verified, when, where, by whom, and under whose organisational authority. These records are audit-ready and exportable, giving you compliance evidence that goes beyond a photocopied passport in a filing cabinet.",
      },
      {
        question: "Can temp workers use Certifyd across multiple agencies?",
        answer:
          "Yes. A temp worker\u2019s Certifyd identity is theirs \u2014 it\u2019s bound to their device, not to any single agency. When they register with a new agency, that agency adds them as a member with the appropriate role. The worker can hold memberships across multiple agencies simultaneously, and each agency can manage, revoke, or update their membership independently. The worker\u2019s cryptographic identity remains consistent across all of them.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Staffing Agencies", slug: "staffing-agencies" },
      { label: "Certifyd for Warehouse Workers", slug: "warehouse-workers" },
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
      {
        label: "GOV.UK \u2014 Agency Worker Rights",
        href: "https://www.gov.uk/agency-workers-your-rights",
        external: true,
      },
    ],
    ctaTitle: "Verify every temp before they start",
    ctaSecondaryLabel: "Read: The Temp Worker Loophole",
    ctaSecondaryHref: "/blog/temp-worker-loophole/",
  },

  /* ─────────────────────────────────────────────────────
     ELECTRICIANS
     ───────────────────────────────────────────────────── */
  {
    slug: "electricians",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Electricians",
    metaTitle: "Identity Verification for Electricians",
    metaDescription:
      "Electricians work unsupervised in your home with access to every room. Verify their identity and company affiliation at the door in 30 seconds.",
    badge: "Electricians",
    headline: "They\u2019re in Every Room. Do You Know Who Sent Them?",
    subtitle:
      "Electricians access every room in your home, often unsupervised. Certifyd verifies their identity, company membership, and authority to be there \u2014 at the door, in 30 seconds.",
    heroCard: { name: "David Chen", secondaryLabel: "Company", secondaryValue: "Chen Electrical", context: "Arrived: 10:30 AM" },
    searchIntentParagraph:
      "Identity verification for electricians goes beyond checking a business card or a Part P certificate. Certifyd uses bi-directional authentication \u2014 both the homeowner and the electrician cryptographically prove their identity to each other in real time. When an electrician arrives, the system verifies not just who they are, but that they hold an active membership with the electrical company that dispatched them and are authorised for that job. The result is a tamper-proof, auditable record of every visit: who arrived, when, where, and under whose professional authority.",
    stats: [
      { value: "0", label: "ID checks required for electricians entering homes" },
      { value: "\u00a3270M", label: "annual UK rogue trader losses" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Electrical work in the UK is partially regulated through Part P of the Building Regulations and the Competent Person Scheme, but there is no requirement for an electrician to prove their identity to a homeowner before entering the property. A valid certification card proves competency \u2014 it does not prove that the person holding it is who they claim to be, or that they were sent by the company you booked.",
      "When an electrical company dispatches a subcontractor or sends a replacement engineer, the homeowner has no mechanism to verify the substitute\u2019s identity or authority. The name on the booking may not match the person at the door. Electrical work requires access to every room, including bedrooms and private spaces, often with the homeowner absent.",
      "Trade platforms and certification bodies verify that a business or individual is competent and insured. They cannot verify who actually arrives at the property. Certifyd closes that gap with bi-directional, device-bound authentication: both parties prove their identity cryptographically, with the electrician\u2019s organisational membership and dispatch authority confirmed in real time.",
    ],
    problems: [
      "Electrical companies send subcontractors or replacement engineers without notifying the homeowner.",
      "A Part P certificate proves competency, not identity \u2014 anyone could present one.",
      "Electricians require access to every room, including bedrooms and private spaces.",
      "When work is disputed or damage occurs, there\u2019s no verifiable record of who was actually on site.",
    ],
    steps: [
      "Electrician arrives \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the electrician\u2019s active membership with their company and their authority for that specific job",
      "A tamper-proof record is created: who, when, where, and under whose professional authority",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "Do electricians need to show ID before entering my home?",
        answer:
          "There is no legal requirement for electricians to prove their identity to homeowners in the UK. Part P certification and Competent Person Scheme registration prove that a person is qualified to carry out electrical work \u2014 they do not prove who that person is, or that they were dispatched by the company you booked. Verification protects both parties: the homeowner knows who\u2019s in their home, and the electrician has proof of attendance if a dispute arises.",
      },
      {
        question: "How is Certifyd different from checking an NICEIC or NAPIT card?",
        answer:
          "An NICEIC or NAPIT card proves that the registered person is competent. It does not prove that the person holding the card is that person, that they currently work for the company they claim to represent, or that they were authorised to attend your property. Certifyd uses device-bound cryptographic authentication: the electrician\u2019s identity is verified through their registered device, their active membership in the company is confirmed in real time, and a tamper-proof audit record is created automatically.",
      },
      {
        question: "What if the electrical company sends a subcontractor?",
        answer:
          "This is common practice \u2014 electrical companies frequently subcontract work or send replacement engineers. Without real-time verification, you have no way to confirm the substitute\u2019s identity or their relationship to the company you booked. With Certifyd, every engineer is linked to their verified identity and active company membership. If a subcontractor arrives, you\u2019ll see exactly who they are and which organisation authorised them to be there.",
      },
      {
        question: "Can sole trader electricians use Certifyd?",
        answer:
          "Yes. Sole traders can register their own Organisation on Certifyd and verify their identity directly to homeowners. This gives independent electricians a way to distinguish themselves from unverified competitors \u2014 proving not just their name, but their professional identity and trading history, with every job creating a verifiable audit trail.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Plumbers", slug: "plumbers" },
      { label: "Certifyd for Builders", slug: "builders" },
      { label: "Certifyd for Trade Platforms", slug: "trade-platforms" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Trade Platforms\u2019 Blind Spot", href: "/blog/trade-platforms-blind-spot/" },
      { label: "The Doorstep Fraud Problem", href: "/blog/doorstep-fraud-problem/" },
    ],
    relatedResources: [
      {
        label: "Trading Standards \u2014 Rogue Traders",
        href: "https://www.tradingstandards.uk/consumers/support-and-advice/roguetraders/",
        external: true,
      },
      {
        label: "Citizens Advice \u2014 Doorstep Scams",
        href: "https://www.citizensadvice.org.uk/consumer/scams/check-if-something-might-be-a-scam/",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your electrical business",
    ctaSecondaryLabel: "Read: Trade Platforms\u2019 Blind Spot",
    ctaSecondaryHref: "/blog/trade-platforms-blind-spot/",
  },

  /* ─────────────────────────────────────────────────────
     PLUMBERS
     ───────────────────────────────────────────────────── */
  {
    slug: "plumbers",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Plumbers",
    metaTitle: "Identity Verification for Plumbers",
    metaDescription:
      "Emergency plumbers arrive in a crisis when you\u2019re most vulnerable. Verify their identity and company affiliation before letting them in.",
    badge: "Plumbers",
    headline: "It\u2019s an Emergency. You\u2019ve Never Seen This Person Before.",
    subtitle:
      "Plumbers often arrive during emergencies when you\u2019re vulnerable and rushed. Certifyd verifies their identity, company membership, and dispatch authority \u2014 in 30 seconds, even under pressure.",
    heroCard: { name: "Mark Thompson", secondaryLabel: "Company", secondaryValue: "Thompson Plumbing", context: "Arrived: 08:45 AM" },
    searchIntentParagraph:
      "Identity verification for plumbers is critical because plumbing emergencies create urgency that criminals exploit. Certifyd uses bi-directional authentication \u2014 both the homeowner and the plumber cryptographically prove their identity to each other in real time. When a plumber arrives, the system verifies not just who they are, but that they hold an active membership with the plumbing company that dispatched them. The result is a tamper-proof, auditable record of every callout: who arrived, when, where, and under whose authority.",
    stats: [
      { value: "12K+", label: "rogue trader reports annually (Trading Standards)" },
      { value: "\u00a31,200", label: "average loss to emergency callout scams" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Plumbing is entirely unregulated in England. Unlike gas work (which requires Gas Safe registration), there is no mandatory register, licensing requirement, or competency check for plumbers. Anyone can call themselves a plumber and advertise plumbing services tomorrow. The only exception is work involving unvented hot water systems, which requires specific certification.",
      "Emergency callouts are particularly risky. When a pipe bursts at midnight, homeowners are under pressure to let someone in immediately. This urgency is routinely exploited by rogue traders who arrive quickly, quote inflated prices, and carry out unnecessary or substandard work. Trading Standards receives over 12,000 rogue trader reports annually, with plumbing and heating among the most common categories.",
      "Even legitimate plumbing companies create risk through substitution. When the plumber you booked is unavailable, a replacement arrives \u2014 and you have no way to verify they are who they claim to be. Certifyd\u2019s bi-directional authentication closes this gap: both parties verify each other through device-bound cryptographic proof, with the plumber\u2019s organisational membership confirmed in real time.",
    ],
    problems: [
      "Emergency callouts create urgency that rogue traders exploit \u2014 homeowners let strangers in under pressure.",
      "Plumbing is unregulated in England \u2014 no licensing, no mandatory ID, no register of qualified plumbers.",
      "Companies send replacement plumbers with no way for the homeowner to verify the substitute.",
      "Inflated quotes, unnecessary work, and unfinished jobs leave homeowners with no verifiable record of who was responsible.",
    ],
    steps: [
      "Plumber arrives \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the plumber\u2019s active membership with their company and dispatch authority for that callout",
      "A tamper-proof record is created: who, when, where, and under whose professional authority",
    ],
    testimonial: {
      quote:
        "I turn up at someone\u2019s house, and they just let me in. They\u2019ve got no idea if I\u2019m really a plumber or if I actually work for the company I say I do.",
      attribution: "Sole trader, plumber",
    },
    faqs: [
      {
        question: "Are plumbers required to show ID in the UK?",
        answer:
          "No. There is no legal requirement for plumbers to prove their identity before entering your home in England. Unlike gas engineers (who must be Gas Safe registered), plumbers have no mandatory registration or licensing. This means you have no formal way to verify that the person at your door is qualified, insured, or even who they claim to be \u2014 unless you use a verification system like Certifyd.",
      },
      {
        question: "What about emergency plumbing callouts?",
        answer:
          "Emergency callouts are where the risk is highest. You\u2019re panicking, water is flooding, and someone arrives claiming to be a plumber. Rogue traders specifically target emergencies because homeowners are less likely to check credentials. Certifyd works in 30 seconds \u2014 fast enough for an emergency. If the plumber can\u2019t verify, that\u2019s the signal you need.",
      },
      {
        question: "How do plumbing companies use Certifyd?",
        answer:
          "Plumbing companies register as an Organisation on Certifyd and add each plumber as a member with a defined role. Each plumber registers their own device, which is cryptographically bound to their identity. When dispatched to a job, the system verifies not just the plumber\u2019s identity but their active membership and authority within the company \u2014 in real time. If a plumber leaves, their membership is revoked instantly.",
      },
      {
        question: "Is Certifyd the same as checking a Gas Safe card?",
        answer:
          "No. Gas Safe registration proves a person is qualified to work on gas appliances \u2014 it does not cover general plumbing, and it does not prove the person holding the card is actually that person. Certifyd uses device-bound cryptographic authentication: the plumber\u2019s identity is verified through their registered device, their company membership is confirmed in real time, and a tamper-proof record is created. It\u2019s live, verified proof \u2014 not a static card.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Electricians", slug: "electricians" },
      { label: "Certifyd for Builders", slug: "builders" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "The Doorstep Fraud Problem", href: "/blog/doorstep-fraud-problem/" },
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Trade Platforms\u2019 Blind Spot", href: "/blog/trade-platforms-blind-spot/" },
    ],
    relatedResources: [
      {
        label: "Trading Standards \u2014 Rogue Traders",
        href: "https://www.tradingstandards.uk/consumers/support-and-advice/roguetraders/",
        external: true,
      },
      {
        label: "Citizens Advice \u2014 Hiring a Tradesperson",
        href: "https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue/",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your plumbing business",
    ctaSecondaryLabel: "Read: The Doorstep Fraud Problem",
    ctaSecondaryHref: "/blog/doorstep-fraud-problem/",
  },

  /* ─────────────────────────────────────────────────────
     BUILDERS
     ───────────────────────────────────────────────────── */
  {
    slug: "builders",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Builders",
    metaTitle: "Identity Verification for Builders",
    metaDescription:
      "Builders bring crews of people you\u2019ve never met into your home for weeks. Verify every person on site with Certifyd in 30 seconds.",
    badge: "Builders",
    headline: "Six Strangers in Your Home for Six Weeks. Who Are They?",
    subtitle:
      "Building projects bring multiple tradespeople into your home over weeks or months. Certifyd verifies every person on site \u2014 their identity, their company, and their authority to be there.",
    heroCard: { name: "Tom Richards", secondaryLabel: "Company", secondaryValue: "Richards & Sons Building", context: "Arrived: 07:30 AM" },
    searchIntentParagraph:
      "Identity verification for builders addresses a unique challenge: building projects involve multiple people rotating through your property over extended periods. Certifyd uses bi-directional authentication \u2014 both the homeowner and each tradesperson cryptographically prove their identity to each other in real time. The system verifies not just who they are, but that each person holds an active membership with the building company and is authorised for that specific project. Every visit creates a tamper-proof, auditable record.",
    stats: [
      { value: "0", label: "licensing required for UK builders" },
      { value: "6\u201312", label: "average people on a home renovation crew" },
      { value: "30s", label: "to verify each person with Certifyd" },
    ],
    whyItMatters: [
      "Building is entirely unregulated in the UK. There is no licensing requirement, no register of builders, and no mandatory identity check. Unlike Australia (where builders must hold a licence) or many US states (which require contractor licensing), anyone in the UK can advertise building services with no oversight whatsoever.",
      "Home renovation projects compound the risk. A typical kitchen or extension project involves the main contractor plus subcontractors: electricians, plumbers, plasterers, tilers, decorators. The homeowner books one company but multiple unknown individuals arrive over weeks or months. The main contractor may have vetted their direct employees, but subcontractors bring their own crews \u2014 and nobody verifies the chain.",
      "When something goes wrong \u2014 theft, damage, disputes over work quality \u2014 the homeowner often cannot identify which individual was responsible, on which day, working under whose authority. Certifyd creates a cryptographically verified record of every person who enters the property, linked to their organisational membership, for every visit throughout the project.",
    ],
    problems: [
      "Building projects bring multiple unknown subcontractors into your home over weeks or months.",
      "The main contractor may be vetted, but their subcontractors bring crews the homeowner has never met.",
      "There is no licensing requirement for builders in the UK \u2014 anyone can call themselves a builder.",
      "When theft or damage occurs mid-project, there\u2019s no verifiable record of which individuals were on site each day.",
    ],
    steps: [
      "Each tradesperson arrives \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the homeowner \u2014 bi-directional, not one-way",
      "The system confirms each person\u2019s active membership with the building company or subcontractor and their authority for this project",
      "A tamper-proof record is created for every visit: who, when, where, and under whose authority in the contractor chain",
    ],
    testimonial: {
      quote:
        "We send crews to residential sites. The homeowner has never met most of them. When we swap someone out mid-project, the client just has to trust us that the new person is legit.",
      attribution: "Owner, building and renovation company",
    },
    faqs: [
      {
        question: "Do builders need a licence in the UK?",
        answer:
          "No. Unlike many other countries, the UK has no licensing requirement for builders. There is no register, no mandatory insurance, and no identity verification. The Construction Industry Training Board (CITB) and Federation of Master Builders offer voluntary schemes, but membership is not required. This means the homeowner has no formal way to verify that a builder or their crew is who they claim to be.",
      },
      {
        question: "How do I verify subcontractors on a building project?",
        answer:
          "On a typical building project, the main contractor hires subcontractors who bring their own crews. The homeowner has no direct relationship with these individuals and no way to verify them. With Certifyd, every person on site \u2014 whether direct employee or subcontractor \u2014 verifies through their device-bound identity and active organisational membership. The homeowner sees exactly who each person is and which company authorised them to be there.",
      },
      {
        question: "Can Certifyd track who was on site each day?",
        answer:
          "Yes. Every verification creates a tamper-proof record with a timestamp and location. Over the course of a building project, this builds a complete audit trail of which individuals were on your property on which days, working under whose authority. If a dispute arises weeks or months later, you have verifiable evidence \u2014 not just memory.",
      },
      {
        question: "What about one-person building firms?",
        answer:
          "Sole trader builders can register their own Organisation on Certifyd and verify their identity directly to homeowners. This is particularly valuable for small builders competing against larger firms \u2014 it provides a verifiable trust signal that sets them apart from unvetted competitors. Every job creates an auditable record that builds their verified track record over time.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Electricians", slug: "electricians" },
      { label: "Certifyd for Plumbers", slug: "plumbers" },
      { label: "Certifyd for Trade Platforms", slug: "trade-platforms" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "The Doorstep Fraud Problem", href: "/blog/doorstep-fraud-problem/" },
      { label: "Trade Platforms\u2019 Blind Spot", href: "/blog/trade-platforms-blind-spot/" },
    ],
    relatedResources: [
      {
        label: "Trading Standards \u2014 Rogue Traders",
        href: "https://www.tradingstandards.uk/consumers/support-and-advice/roguetraders/",
        external: true,
      },
      {
        label: "Citizens Advice \u2014 Hiring a Builder",
        href: "https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue/",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your building company",
    ctaSecondaryLabel: "Read: Who\u2019s Really at Your Door?",
    ctaSecondaryHref: "/blog/whos-really-at-your-door/",
  },

  /* ─────────────────────────────────────────────────────
     CARE WORKERS
     ───────────────────────────────────────────────────── */
  {
    slug: "care-workers",
    category: "role",
    parentIndustry: "care",
    title: "Certifyd for Care Workers",
    metaTitle: "Identity Verification for Care Workers",
    metaDescription:
      "Care workers look after the most vulnerable. Verify every care worker\u2019s identity, DBS status, and employer in real time with Certifyd.",
    badge: "Care Workers",
    headline: "Your Parent Can\u2019t Check. But You Can.",
    subtitle:
      "Care workers attend to vulnerable people who may not be able to verify identity themselves. Certifyd lets families, managers, and care providers verify every carer in real time.",
    heroGraphic: "shift-monitor",
    heroCard: { name: "Maria Santos", secondaryLabel: "Provider", secondaryValue: "Sunrise Care Group" },
    searchIntentParagraph:
      "Identity verification for care workers is a safeguarding imperative, not just an administrative task. Certifyd uses bi-directional authentication \u2014 both the care recipient (or their family) and the care worker cryptographically prove their identity to each other in real time. When a care worker arrives, the system verifies not just who they are, but that they hold an active membership with the care provider, their DBS status is current, and they are authorised for that specific service user. The result is a tamper-proof, auditable record of every visit.",
    stats: [
      { value: "165K", label: "care worker vacancies in England" },
      { value: "39%", label: "annual staff turnover in adult social care" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Adult social care in England employs approximately 1.5 million people across 18,000 organisations. Staff turnover is 39% annually \u2014 meaning the care worker visiting your parent this week may not be the same person who visited last week. For families relying on home care, this constant rotation of unfamiliar faces creates anxiety and safeguarding risk.",
      "The Care Quality Commission (CQC) requires providers to carry out DBS checks and verify identity at onboarding. But DBS checks are a point-in-time snapshot \u2014 they confirm a person\u2019s criminal record status on the day the check was run, not today. And onboarding verification confirms who a person was when they joined, not that the person arriving at a service user\u2019s home is still that same employee, still with that same provider, still authorised for that role.",
      "Agency staff compound the problem. Care homes and domiciliary care providers routinely rely on agency workers to cover shifts, particularly nights and weekends. The agency verifies at registration, but there is no real-time mechanism to confirm that the person who arrives is the person the agency dispatched. Certifyd closes this gap with device-bound, bi-directional authentication \u2014 verifying identity, organisational membership, and role authority in real time.",
    ],
    problems: [
      "39% annual staff turnover means families constantly encounter unfamiliar care workers.",
      "Agency staff cover nights and weekends \u2014 nobody verifies who actually arrives at the service user\u2019s home.",
      "DBS checks are point-in-time \u2014 they don\u2019t reflect what\u2019s happened since the check was run.",
      "Vulnerable service users may not be able to challenge or verify a care worker\u2019s identity themselves.",
    ],
    steps: [
      "Care worker arrives \u2014 both parties (or the family member / manager) open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the care worker\u2019s active membership with their care provider, current role, and authorisation for that service user",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
      attribution: "Manager, residential care home",
    },
    faqs: [
      {
        question: "How does Certifyd help with CQC compliance?",
        answer:
          "CQC requires care providers to demonstrate robust recruitment and identity verification processes. Certifyd creates tamper-proof verification records for every care worker visit \u2014 who was verified, when, where, and under whose organisational authority. These records are audit-ready and demonstrate ongoing identity assurance, not just onboarding checks. This supports CQC\u2019s \u2018Safe\u2019 and \u2018Well-led\u2019 key lines of enquiry.",
      },
      {
        question: "Can family members verify care workers remotely?",
        answer:
          "Yes. Family members can be added as authorised verifiers for a service user. When a care worker arrives, the family member receives a verification notification confirming the care worker\u2019s identity, role, and organisational membership \u2014 even if they\u2019re not physically present. This gives families peace of mind without requiring them to be there for every visit.",
      },
      {
        question: "What about agency care workers?",
        answer:
          "Agency care workers register with Certifyd through their agency, which adds them as members with defined roles. When dispatched to a care provider, the system verifies not just the worker\u2019s identity but their active membership with the agency and their authorisation for that specific assignment. If a worker\u2019s agency contract ends, their membership is revoked instantly and they can no longer verify under that agency.",
      },
      {
        question: "Does Certifyd replace DBS checks?",
        answer:
          "No. DBS checks serve a different purpose \u2014 they reveal criminal record information. Certifyd verifies identity and organisational membership in real time. The two are complementary: DBS confirms a person\u2019s background at a point in time, while Certifyd confirms they are who they claim to be, right now, and that they are currently authorised by their employer to be caring for that specific service user.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Agency Nurses", slug: "agency-nurses" },
      { label: "Certifyd for Care Homes", slug: "care-homes" },
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
        label: "CQC \u2014 Staff Recruitment and DBS",
        href: "https://www.cqc.org.uk/guidance-providers/regulations/regulation-19-fit-proper-persons-employed",
        external: true,
      },
      {
        label: "Skills for Care \u2014 Workforce Data",
        href: "https://www.skillsforcare.org.uk/adult-social-care-workforce-data/Workforce-intelligence/publications/national-information/The-state-of-the-adult-social-care-sector-and-workforce-in-England.aspx",
        external: true,
      },
    ],
    ctaTitle: "Bring real-time verification to your care team",
    ctaSecondaryLabel: "Read: The Care Home Staffing Crisis",
    ctaSecondaryHref: "/blog/care-home-staffing-crisis/",
  },

  /* ─────────────────────────────────────────────────────
     AGENCY NURSES
     ───────────────────────────────────────────────────── */
  {
    slug: "agency-nurses",
    category: "role",
    parentIndustry: "care",
    title: "Certifyd for Agency Nurses",
    metaTitle: "Identity Verification for Agency Nurses",
    metaDescription:
      "Agency nurses arrive at hospitals and care homes as strangers. Verify their identity, NMC registration, and agency affiliation in 30 seconds.",
    badge: "Agency Nurses",
    headline: "They\u2019re Wearing Scrubs. That\u2019s All You Know.",
    subtitle:
      "Agency nurses arrive at care settings to cover shifts, often meeting staff and patients for the first time. Certifyd verifies their identity, agency membership, and authorisation \u2014 in 30 seconds.",
    heroGraphic: "shift-monitor",
    heroCard: { name: "Rachel Okonkwo", secondaryLabel: "Agency", secondaryValue: "NHS Locum Bank" },
    searchIntentParagraph:
      "Identity verification for agency nurses addresses a critical safeguarding gap in healthcare staffing. Certifyd uses bi-directional authentication \u2014 both the receiving facility and the agency nurse cryptographically prove their identity to each other in real time. When a nurse arrives for a shift, the system verifies not just who they are, but that they hold an active membership with the nursing agency that dispatched them and are authorised for that assignment. The result is a tamper-proof, auditable record of every shift: who arrived, when, where, and under whose authority.",
    stats: [
      { value: "\u00a33B+", label: "NHS spend on agency staff annually" },
      { value: "70K+", label: "agency nurses active in the UK" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The NHS spends over \u00a33 billion annually on agency and bank staff. Across the health and social care sector, over 70,000 agency nurses work shifts at facilities where they may never have been before. They arrive in scrubs, present an ID badge, and begin working with vulnerable patients \u2014 often without the receiving ward having any independent way to verify their identity.",
      "NMC registration confirms that a person is a qualified nurse. It does not confirm that the person presenting themselves at the ward is actually that registered nurse. PIN numbers can be shared, ID badges can be borrowed, and agency booking confirmations don\u2019t include photographs. The gap between \u2018a qualified nurse was dispatched\u2019 and \u2018this specific person is that qualified nurse\u2019 is where safeguarding risk lives.",
      "High-profile cases of impersonation in healthcare settings \u2014 including individuals posing as nurses to access medication, patients, or restricted areas \u2014 demonstrate that institutional trust in uniforms and badges is insufficient. Certifyd replaces assumption with cryptographic proof: device-bound, bi-directional authentication that verifies the nurse\u2019s identity and active agency membership in real time, creating an auditable record for every shift.",
    ],
    problems: [
      "Agency nurses arrive at facilities where nobody knows them, wearing generic scrubs and presenting an ID badge.",
      "NMC registration proves qualification, not that the person presenting is actually that registered nurse.",
      "Facilities rely on agency booking confirmations that don\u2019t include photographs or real-time identity proof.",
      "When incidents occur, there\u2019s often no verifiable record linking a specific individual to a specific shift at a specific location.",
    ],
    steps: [
      "Agency nurse arrives for shift \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the nurse\u2019s active membership with their nursing agency and their authorisation for that specific shift",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "Rotating agency staff cover nights and weekends. Families ask who\u2019s looking after their parent. Honestly? We can\u2019t always tell them fast enough.",
      attribution: "Manager, residential care home",
    },
    faqs: [
      {
        question: "How do facilities currently verify agency nurses?",
        answer:
          "Most facilities check an ID badge and cross-reference with the agency\u2019s booking confirmation. Some check NMC registration online. But none of these methods verify that the person standing in front of you is the person named on those documents. An NMC PIN can be recited by anyone. An ID badge can be borrowed. Certifyd uses device-bound cryptographic authentication \u2014 the nurse proves their identity through their registered device, which cannot be transferred or spoofed.",
      },
      {
        question: "Does Certifyd verify NMC registration?",
        answer:
          "Certifyd verifies the nurse\u2019s identity and their active membership with their nursing agency \u2014 confirming they are who they claim to be and that they are currently authorised by the agency to work. NMC registration status can be incorporated into the agency\u2019s membership records, but the primary value of Certifyd is real-time identity verification at the point of shift start, not replacing the NMC register.",
      },
      {
        question: "Can Certifyd work with NHS bank staff as well as agencies?",
        answer:
          "Yes. NHS trusts can register as Organisations on Certifyd and manage their bank staff as members with defined roles. When a bank nurse arrives for a shift at a ward they haven\u2019t worked on before, the system verifies their identity and active bank membership in real time \u2014 the same way it works for agency staff. Both agency and bank nurses can hold Certifyd memberships simultaneously.",
      },
      {
        question: "What about locum doctors and other healthcare professionals?",
        answer:
          "Certifyd is not limited to nurses. Any healthcare professional working through an agency or bank can be verified the same way: locum doctors, healthcare assistants, allied health professionals, and support workers. Each organisation manages its own members and roles, and verification works identically across all professional groups.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Care Workers", slug: "care-workers" },
      { label: "Certifyd for Care Homes", slug: "care-homes" },
      { label: "Certifyd for Safeguarding", slug: "safeguarding" },
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
        label: "NMC \u2014 Employer Confirmation Service",
        href: "https://www.nmc.org.uk/registration/employer-confirmations/",
        external: true,
      },
      {
        label: "NHS England \u2014 Agency Staffing Rules",
        href: "https://www.england.nhs.uk/publication/agency-rules/",
        external: true,
      },
    ],
    ctaTitle: "Verify every agency nurse before they start a shift",
    ctaSecondaryLabel: "Read: The Safeguarding Gap in Care Homes",
    ctaSecondaryHref: "/blog/safeguarding-gap-care-homes/",
  },

  /* ─────────────────────────────────────────────────────
     DELIVERY DRIVERS
     ───────────────────────────────────────────────────── */
  {
    slug: "delivery-drivers",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Delivery Drivers",
    metaTitle: "Identity Verification for Delivery Drivers",
    metaDescription:
      "Delivery drivers know your address, routine, and when you\u2019re home. Verify who\u2019s at your door before opening it \u2014 in 30 seconds with Certifyd.",
    badge: "Delivery Drivers",
    headline: "They Know Your Address. They Know When You\u2019re Home.",
    subtitle:
      "Delivery drivers visit your home regularly, know your routine, and often arrive when you\u2019re alone. Certifyd verifies their identity and the company they represent \u2014 before you open the door.",
    heroCard: { name: "Ryan Foster", secondaryLabel: "Company", secondaryValue: "Swift Logistics", context: "Arrived: 11:20 AM" },
    searchIntentParagraph:
      "Identity verification for delivery drivers matters because deliveries are one of the most common ways strangers come to your door. Certifyd uses bi-directional authentication \u2014 both the homeowner and the delivery driver cryptographically prove their identity to each other in real time. When a driver arrives, the system verifies not just who they are, but that they hold an active role with the delivery company and are authorised for that route. The result is a tamper-proof, auditable record of every delivery: who arrived, when, where, and under whose authority.",
    stats: [
      { value: "4.2B", label: "UK parcels delivered annually" },
      { value: "53%", label: "of doorstep crimes involve impersonating delivery" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK processes over 4 billion parcel deliveries annually, with millions of doorstep interactions between drivers and homeowners every day. Delivery drivers learn your address, your daily routine, when you\u2019re home, and when you\u2019re not. They see inside your hallway. They know which homes have expensive items delivered regularly. This information is valuable \u2014 and it\u2019s held by someone you\u2019ve never verified.",
      "The gig economy has transformed delivery logistics. Many drivers are self-employed contractors working through platforms, not direct employees of the companies whose branded vans they drive. A driver wearing an Amazon vest may be working through a Delivery Service Partner. A DPD driver may be a subcontractor. The brand on the van tells you nothing about the individual behind the wheel.",
      "Doorstep crime frequently involves impersonating delivery drivers. Criminals pose as couriers to gain access to properties, exploiting the trust that comes with an expected delivery. Without a mechanism to verify that the person at your door is genuinely dispatched by the company they claim to represent, that trust is based on nothing more than a uniform and a parcel.",
    ],
    problems: [
      "Delivery drivers are often self-employed contractors, not direct employees of the brand on the van.",
      "Criminals impersonate delivery drivers to gain access to properties \u2014 an expected parcel creates false trust.",
      "Drivers know your address, routine, and schedule \u2014 information that\u2019s valuable to anyone with bad intentions.",
      "When parcels go missing or incidents occur, there\u2019s limited verifiable evidence of who was at the door.",
    ],
    steps: [
      "Driver arrives \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the driver\u2019s active role with their delivery company and their authorisation for that route",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    faqs: [
      {
        question: "Why would I need to verify a delivery driver?",
        answer:
          "Delivery drivers interact with your home more frequently than almost any other stranger. They know your address, your routine, and when you\u2019re likely to be home. Doorstep criminals routinely impersonate delivery drivers because an expected parcel creates immediate trust. Verifying a driver\u2019s identity and company affiliation takes 30 seconds and confirms that the person at your door is genuinely who they claim to be.",
      },
      {
        question: "Don\u2019t delivery companies already verify their drivers?",
        answer:
          "Some do \u2014 at the point of onboarding. But many delivery drivers are self-employed contractors working through intermediary platforms, not direct employees. A driver may change platforms, lose their contract, or be working under a different person\u2019s account. Onboarding verification does not confirm that the person at your door today is the same person who was vetted months ago. Certifyd provides real-time, device-bound verification at the point of delivery.",
      },
      {
        question: "How would delivery companies use Certifyd?",
        answer:
          "Delivery companies register as Organisations on Certifyd and add each driver as a member with a defined role. Each driver registers their own device, which is cryptographically bound to their identity. At each delivery, the system verifies not just the driver\u2019s identity but their active membership and current authorisation. If a driver leaves or is suspended, their membership is revoked instantly.",
      },
      {
        question: "Is this practical for hundreds of daily deliveries?",
        answer:
          "Yes. Verification takes 30 seconds and works through a simple QR code scan. For high-value or sensitive deliveries, the system provides an additional layer of trust that benefits both the driver and the recipient. Delivery companies can choose to enable verification for all deliveries or only for specific categories where identity assurance adds the most value.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Cleaners", slug: "cleaners" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
      { label: "Certifyd for Trade Platforms", slug: "trade-platforms" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "The Doorstep Fraud Problem", href: "/blog/doorstep-fraud-problem/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
    ],
    relatedResources: [
      {
        label: "Citizens Advice \u2014 Doorstep Scams",
        href: "https://www.citizensadvice.org.uk/consumer/scams/check-if-something-might-be-a-scam/",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your delivery fleet",
    ctaSecondaryLabel: "Read: Who\u2019s Really at Your Door?",
    ctaSecondaryHref: "/blog/whos-really-at-your-door/",
  },

  /* ─────────────────────────────────────────────────────
     SECURITY GUARDS
     ───────────────────────────────────────────────────── */
  {
    slug: "security-guards",
    category: "role",
    parentIndustry: "workforce",
    title: "Certifyd for Security Guards",
    metaTitle: "Identity Verification for Security Guards",
    metaDescription:
      "Security guards protect your premises but who verifies them? Confirm every guard\u2019s identity, SIA licence, and employer in real time.",
    badge: "Security Guards",
    headline: "They Guard Your Building. Who Guards Their Identity?",
    subtitle:
      "Security guards have access to your premises, CCTV, alarms, and keys. Certifyd verifies their identity, SIA licence status, and employer affiliation \u2014 in real time.",
    heroCard: { name: "James Ndlovu", secondaryLabel: "Company", secondaryValue: "Sentinel Security", context: "Shift started: 22:00" },
    searchIntentParagraph:
      "Identity verification for security guards closes an ironic gap: the people responsible for site security are often the least verified individuals on the premises. Certifyd uses bi-directional authentication \u2014 both the site manager and the security guard cryptographically prove their identity to each other in real time. The system verifies not just who the guard is, but that they hold an active SIA licence, are a current member of the security company, and are authorised for that specific site. Every shift creates a tamper-proof audit record.",
    stats: [
      { value: "370K", label: "SIA licence holders in the UK" },
      { value: "25%+", label: "of guards work through agencies" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The Private Security Industry Act 2001 requires security guards to hold a Security Industry Authority (SIA) licence. But SIA licences prove that a person passed the required training and background checks \u2014 they do not prove that the person presenting at your site is the licence holder. SIA licence numbers can be shared, badges can be cloned, and there is no real-time mechanism to confirm the guard standing at your reception is who they claim to be.",
      "The security industry relies heavily on agency and subcontractor labour. Over 25% of security guards work through agencies, covering shifts at sites they may never have visited before. The site manager receives a name from the agency and a guard arrives \u2014 but without independent verification, there is no way to confirm the match. When a guard covers a colleague\u2019s shift at short notice, the gap widens further.",
      "Security guards hold extraordinary access: keys, alarm codes, CCTV systems, server rooms, and detailed knowledge of a building\u2019s vulnerabilities. Certifyd\u2019s bi-directional, device-bound authentication ensures that every guard on every shift is cryptographically verified, with their organisational membership and site authorisation confirmed in real time.",
    ],
    problems: [
      "SIA licences prove qualification, not that the person presenting is the licence holder.",
      "Agency guards cover shifts at unfamiliar sites with no independent identity verification.",
      "Security guards have access to keys, alarm codes, CCTV, and knowledge of building vulnerabilities.",
      "When security incidents occur, there\u2019s often no verifiable record of which specific guard was on duty.",
    ],
    steps: [
      "Guard arrives for shift \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the guard\u2019s active membership with their security company and authorisation for that site",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    faqs: [
      {
        question: "Don\u2019t SIA licences already verify security guards?",
        answer:
          "SIA licences confirm that a person has passed the required training and background checks. They do not confirm that the person standing at your reception is the licence holder. An SIA badge shows a name, licence number, and photo \u2014 but badges can be cloned, photos can be outdated, and there is no real-time verification mechanism. Certifyd uses device-bound cryptographic authentication: the guard proves their identity through their registered device, which cannot be transferred, cloned, or spoofed.",
      },
      {
        question: "How does Certifyd work with BS 7858 vetting?",
        answer:
          "BS 7858 is the British Standard for security screening, covering employment history verification, criminal record checks, and identity confirmation at the point of hiring. Certifyd complements BS 7858 by providing ongoing, real-time identity verification at every shift \u2014 not just at onboarding. A guard who passed BS 7858 screening six months ago is verified again cryptographically every time they arrive for duty.",
      },
      {
        question: "Can Certifyd verify guards across multiple sites?",
        answer:
          "Yes. A guard\u2019s Certifyd identity is device-bound and portable. The security company adds site-specific authorisations as part of the guard\u2019s membership. When a guard arrives at any authorised site, the system confirms their identity, company membership, and specific site authorisation in real time. If site access is revoked, it takes effect immediately \u2014 the guard can no longer verify at that location.",
      },
      {
        question: "What records does Certifyd create for security shifts?",
        answer:
          "Every shift verification creates a tamper-proof record: the guard\u2019s verified identity, the time of verification, the location, and the organisational authority under which they are working. Over time, this builds a complete, auditable shift history for every guard across every site \u2014 invaluable for compliance, incident investigation, and client reporting.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Facilities Management", slug: "facilities-management" },
      { label: "Certifyd for Contractor Verification", slug: "contractor-verification" },
      { label: "Certifyd for Lone Workers", slug: "lone-workers" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "Audit Trails for Compliance", href: "/blog/audit-trails-compliance/" },
      { label: "Identity as Infrastructure", href: "/blog/identity-as-infrastructure/" },
    ],
    relatedResources: [
      {
        label: "SIA \u2014 Licence Checks",
        href: "https://www.sia.homeoffice.gov.uk/Pages/licensing.aspx",
        external: true,
      },
    ],
    ctaTitle: "Verify every guard on every shift",
    ctaSecondaryLabel: "Read: Audit Trails for Compliance",
    ctaSecondaryHref: "/blog/audit-trails-compliance/",
  },

  /* ─────────────────────────────────────────────────────
     WAREHOUSE WORKERS
     ───────────────────────────────────────────────────── */
  {
    slug: "warehouse-workers",
    category: "role",
    parentIndustry: "workforce",
    title: "Certifyd for Warehouse Workers",
    metaTitle: "Identity Verification for Warehouse Workers",
    metaDescription:
      "Warehouse workers rotate through shifts at multiple sites. Verify every worker\u2019s identity and right to work before they start \u2014 in 30 seconds.",
    badge: "Warehouse Workers",
    headline: "200 Workers. 40 Are New This Week. Who Checked?",
    subtitle:
      "Warehouses run on high-volume, high-turnover labour. Certifyd verifies every worker\u2019s identity, agency affiliation, and right to work \u2014 before they start their shift.",
    heroCard: { name: "Tomasz Kowalski", secondaryLabel: "Company", secondaryValue: "MegaWare Distribution", context: "Arrived: 05:45 AM" },
    searchIntentParagraph:
      "Identity verification for warehouse workers addresses the challenge of high-volume, high-turnover environments where dozens of new faces appear every week. Certifyd uses bi-directional authentication \u2014 both the site manager and the worker cryptographically prove their identity to each other in real time. When a worker arrives, the system verifies not just who they are, but that they hold an active assignment with the staffing agency that sent them, their right-to-work status, and their authorisation for that specific site. The result is audit-ready, tamper-proof records for every shift.",
    stats: [
      { value: "900K+", label: "warehouse workers in the UK" },
      { value: "35%+", label: "are agency or temporary staff" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "UK warehousing and logistics employs over 900,000 workers, with more than 35% sourced through staffing agencies. Peak periods \u2014 Black Friday, Christmas, Easter \u2014 see warehouses onboard hundreds of temporary workers per week. The speed of onboarding frequently outpaces the rigour of identity verification. A worker arrives with a name badge, gets a hi-vis vest, and starts picking orders. Nobody independently verified who they are.",
      "Right-to-work compliance is a critical concern. The HMRC and the Fair Work Agency (launching April 2026) can inspect any warehouse and demand evidence of right-to-work checks for every person on site. When 40% of your workforce arrived through three different agencies this week, demonstrating that every individual was verified \u2014 and that the person on site is the person who was checked \u2014 becomes a serious compliance challenge.",
      "The operational reality is that warehouse managers are responsible for output, not HR. They don\u2019t have time to conduct thorough identity checks on every temp who walks through the door. Certifyd automates this with device-bound, bi-directional authentication \u2014 30 seconds per worker, with tamper-proof records created automatically. No clipboards, no photocopied passports, no guesswork.",
    ],
    problems: [
      "Peak periods require onboarding dozens of temps per week \u2014 identity verification is routinely skipped.",
      "Multiple agencies supply workers to the same site, creating fragmented accountability.",
      "Right-to-work liability falls on the hiring employer, even when workers arrive through agencies.",
      "Warehouse managers are focused on output, not HR \u2014 identity checks are treated as an administrative burden.",
    ],
    steps: [
      "Worker arrives on site \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the worker\u2019s active assignment with their agency, right-to-work status, and site authorisation",
      "A tamper-proof record is created: who, when, where, and under whose contractual authority",
    ],
    testimonial: {
      quote:
        "Monday morning, 30 new temps arrive at the gate. We\u2019ve got names on a list from the agency. Half the time, the person doesn\u2019t match the name. We wave them through anyway because we\u2019ve got orders to ship.",
      attribution: "Shift Manager, distribution centre",
    },
    faqs: [
      {
        question: "How does Certifyd handle high-volume onboarding?",
        answer:
          "Certifyd is designed for speed. Each verification takes 30 seconds. Workers register once \u2014 their device-bound identity persists across all assignments. When they arrive at a new site, verification confirms their identity, agency membership, and site authorisation instantly. There\u2019s no paperwork, no forms, no manual data entry. The system scales linearly: 10 workers take 5 minutes, 100 workers can be processed by multiple managers simultaneously.",
      },
      {
        question: "Who is liable for right-to-work checks in a warehouse?",
        answer:
          "The hiring employer. Even when workers are sourced through agencies, the business operating the warehouse bears legal responsibility for right-to-work verification. Under the Immigration, Asylum and Nationality Act 2006, civil penalties of up to \u00a360,000 per illegal worker apply. The Fair Work Agency (from April 2026) will have enhanced inspection powers. Certifyd creates tamper-proof verification records that demonstrate compliance for every worker on every shift.",
      },
      {
        question: "Can Certifyd work with multiple staffing agencies simultaneously?",
        answer:
          "Yes. Each agency registers as a separate Organisation on Certifyd and manages their own workers as members. When a worker arrives at the warehouse, the system verifies their identity and confirms which agency dispatched them and whether their assignment is active. The warehouse gets a unified verification record regardless of which agency supplied the worker.",
      },
      {
        question: "What about returning temps who\u2019ve been verified before?",
        answer:
          "A worker\u2019s Certifyd identity persists across all assignments. When they return to a site they\u2019ve worked at before, verification is the same 30-second process \u2014 but the system confirms their current assignment status and right-to-work eligibility in real time. Previous verification doesn\u2019t carry forward automatically, because circumstances change. Each shift gets a fresh, current verification.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Temp Workers", slug: "temp-workers" },
      { label: "Certifyd for Staffing Agencies", slug: "staffing-agencies" },
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "Enterprise Compliance at SME Prices", href: "/blog/enterprise-compliance-sme-prices/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
      {
        label: "GOV.UK \u2014 Agency Worker Rights",
        href: "https://www.gov.uk/agency-workers-your-rights",
        external: true,
      },
    ],
    ctaTitle: "Verify every warehouse worker before they start",
    ctaSecondaryLabel: "Read: The Temp Worker Loophole",
    ctaSecondaryHref: "/blog/temp-worker-loophole/",
  },

  /* ─────────────────────────────────────────────────────
     HOSPITALITY STAFF
     ───────────────────────────────────────────────────── */
  {
    slug: "hospitality-staff",
    category: "role",
    parentIndustry: "workforce",
    title: "Certifyd for Hospitality Staff",
    metaTitle: "Identity Verification for Hospitality Staff",
    metaDescription:
      "Hospitality runs on agency and casual staff. Verify every new face\u2019s identity, right to work, and employer before their first shift.",
    badge: "Hospitality Staff",
    headline: "Three New Faces Every Friday Night. Nobody Checked.",
    subtitle:
      "Hotels, restaurants, and event venues rely on agency and casual staff who arrive as strangers. Certifyd verifies every new hire\u2019s identity and right to work before they start.",
    heroCard: { name: "Priya Sharma", secondaryLabel: "Company", secondaryValue: "The Grand Hotel", context: "Shift started: 14:00" },
    searchIntentParagraph:
      "Identity verification for hospitality staff addresses an industry where high turnover and last-minute staffing create persistent identity gaps. Certifyd uses bi-directional authentication \u2014 both the venue manager and the worker cryptographically prove their identity to each other in real time. When a hospitality worker arrives for a shift, the system verifies not just who they are, but that they hold an active assignment with their agency or employer and are authorised to work. The result is a tamper-proof, auditable record of every shift.",
    stats: [
      { value: "3.5M", label: "UK hospitality workforce" },
      { value: "30%", label: "annual staff turnover rate" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "UK hospitality employs approximately 3.5 million people across 180,000 businesses, with annual staff turnover around 30%. Hotels, restaurants, pubs, and event venues routinely rely on agency and casual workers to fill shifts at short notice. On any busy Friday night, a restaurant may have three staff members who started that day \u2014 none of whose identity has been independently verified beyond a glance at a document.",
      "Hospitality is one of the sectors most at risk from right-to-work non-compliance. The Home Office\u2019s own data shows that hospitality consistently features in illegal working enforcement actions. The Fair Work Agency (launching April 2026) will consolidate enforcement powers and increase inspection frequency across the sector. For businesses that rely on casual and agency labour, the ability to demonstrate real-time identity verification for every worker on every shift is moving from \u2018nice to have\u2019 to \u2018essential\u2019.",
      "The hospitality staffing model \u2014 high volume, high turnover, last-minute bookings \u2014 means that traditional identity verification methods (photocopied passports in a filing cabinet) cannot keep pace. Workers arrive from multiple agencies, work a few shifts, and move on. Certifyd\u2019s device-bound authentication creates a verifiable identity record for each worker that persists across venues, agencies, and assignments.",
    ],
    problems: [
      "High turnover means new, unverified faces appear on the rota every week.",
      "Last-minute shift coverage relies on agency workers whose identity hasn\u2019t been independently confirmed.",
      "Hospitality is a top target for right-to-work enforcement actions.",
      "Photocopied passports in filing cabinets don\u2019t prove the person working today is the person who was checked.",
    ],
    steps: [
      "Worker arrives for shift \u2014 both parties open Certifyd and authenticate via their registered device",
      "Each person\u2019s identity is cryptographically verified to the other \u2014 bi-directional, not one-way",
      "The system confirms the worker\u2019s active role with their employer or agency and their right-to-work status",
      "A tamper-proof record is created: who, when, where, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "On a busy weekend we\u2019ll have agency staff we\u2019ve never met working the bar. They\u2019re serving alcohol, handling payments, dealing with customers. I just have to hope the agency did their checks.",
      attribution: "Operations Manager, hotel chain",
    },
    faqs: [
      {
        question: "Why is hospitality high-risk for right-to-work compliance?",
        answer:
          "Hospitality combines high turnover, casual employment, and reliance on agency labour \u2014 all factors that create identity verification gaps. The Home Office consistently targets hospitality in enforcement operations. Penalties of up to \u00a360,000 per illegal worker, potential imprisonment, and sponsor licence revocation make non-compliance existentially risky for hospitality businesses. The Fair Work Agency (from April 2026) will increase inspection frequency further.",
      },
      {
        question: "How do hotels verify agency staff with Certifyd?",
        answer:
          "The hotel and the staffing agency both register as Organisations on Certifyd. The agency adds each worker as a member. When a worker arrives for a shift, the hotel manager verifies them through Certifyd \u2014 confirming their identity, active agency membership, and right-to-work status in real time. The hotel gets a tamper-proof verification record without needing to conduct its own background check.",
      },
      {
        question: "Can Certifyd handle event staffing?",
        answer:
          "Yes. Event staffing often involves large numbers of casual workers arriving for a single day or weekend. Certifyd\u2019s 30-second verification works at scale \u2014 multiple managers can verify workers simultaneously, and each verification creates an auditable record. For event companies that rotate staff across multiple venues weekly, Certifyd provides a consistent identity verification system regardless of location.",
      },
      {
        question: "What if a worker doesn\u2019t have a smartphone?",
        answer:
          "Certifyd is device-bound, meaning verification works through the worker\u2019s registered device. For the rare case where a worker doesn\u2019t have access to a smartphone, alternative verification methods can be arranged through the employing organisation. However, with UK smartphone penetration above 95%, this is an edge case rather than a systemic barrier.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Temp Workers", slug: "temp-workers" },
      { label: "Certifyd for Hospitality Businesses", slug: "hospitality-businesses" },
      { label: "Certifyd for Right-to-Work Checks", slug: "right-to-work-checks" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
    relatedArticles: [
      { label: "The Temp Worker Loophole", href: "/blog/temp-worker-loophole/" },
      { label: "Fair Work Agency: What Changes in April 2026", href: "/blog/fair-work-agency-april-2026/" },
      { label: "The Real Cost of a Bad Hire", href: "/blog/real-cost-bad-hire/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Right to Work Checks",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
        external: true,
      },
      {
        label: "UKHospitality \u2014 Workforce",
        href: "https://www.ukhospitality.org.uk/",
        external: true,
      },
    ],
    ctaTitle: "Verify every hospitality worker before their shift",
    ctaSecondaryLabel: "Read: Fair Work Agency \u2014 What Changes in April 2026",
    ctaSecondaryHref: "/blog/fair-work-agency-april-2026/",
  },

  /* ─────────────────────────────────────────────────────
     REMOTE WORKERS
     ───────────────────────────────────────────────────── */
  {
    slug: "remote-workers",
    category: "role",
    parentIndustry: "recruitment",
    title: "Certifyd for Remote Workers",
    metaTitle: "Identity Verification for Remote Workers",
    metaDescription:
      "Remote workers join your team from anywhere. Verify they are who they claim to be \u2014 not a deepfake, bot, or impersonator. 30-second verification.",
    badge: "Remote Workers",
    headline: "You\u2019ve Never Met Them. You\u2019re Giving Them Access to Everything.",
    subtitle:
      "Remote workers join your team from anywhere in the world, often without ever meeting anyone in person. Certifyd verifies they are who they claim to be \u2014 cryptographically, not just visually.",
    heroGraphic: "qr-scan",
    heroCard: { name: "Alex Morgan", secondaryLabel: "Company", secondaryValue: "TechFlow Ltd" },
    searchIntentParagraph:
      "Identity verification for remote workers has become critical as deepfakes and AI-generated personas make visual verification unreliable. Certifyd uses bi-directional, device-bound authentication \u2014 both parties cryptographically prove their identity to each other in real time. Unlike video calls (where faces can be synthesised) or document checks (where PDFs can be forged), Certifyd verification is bound to a physical device through WebAuthn passkeys. You cannot deepfake a passkey. The result is cryptographic proof that the person on the other end of the connection is who they claim to be.",
    stats: [
      { value: "44%", label: "of UK workers now work remotely at least part-time" },
      { value: "\u00a320M+", label: "lost in a single deepfake video call (Arup, 2024)" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Remote and hybrid work has become the norm for millions of UK workers. 44% of the UK workforce now works remotely at least part-time. This means companies routinely grant system access, credentials, and sensitive information to people they have never met in person. The onboarding process for remote workers typically involves a video call and a document check \u2014 neither of which is proof against modern impersonation techniques.",
      "Deepfakes have moved from theoretical risk to operational reality. In early 2024, engineering firm Arup lost \u00a320 million after an employee was deceived by a deepfake video call that impersonated the company\u2019s CFO and other executives. AI-generated candidates are appearing in recruitment processes, and voice cloning technology can now replicate a person\u2019s voice from a few seconds of audio. Visual and audio verification are no longer reliable.",
      "Device-bound authentication solves this problem at the protocol level. A Certifyd passkey is cryptographically bound to the worker\u2019s physical device \u2014 it cannot be cloned, transferred, or synthesised. When a remote worker verifies through Certifyd, they prove their identity through a challenge-response that only their physical device can complete. No video, no voice, no documents \u2014 just cryptographic proof that the person is who they claim to be.",
    ],
    problems: [
      "Remote workers are onboarded through video calls and document checks \u2014 both vulnerable to deepfakes.",
      "AI-generated candidates are appearing in recruitment processes, passing initial screening rounds.",
      "Companies grant system access and credentials to people they have never met in person.",
      "Voice cloning and video synthesis make traditional identity verification methods unreliable.",
    ],
    steps: [
      "Remote worker is asked to verify \u2014 both parties open Certifyd on their registered devices",
      "Each person\u2019s identity is cryptographically verified through their device-bound passkey \u2014 no video or voice needed",
      "The system confirms the worker\u2019s active membership with their employer and their role authorisation",
      "A tamper-proof record is created: who verified, when, and under whose organisational authority",
    ],
    testimonial: {
      quote:
        "The amount of CVs that people like me are getting every day that say one thing, you challenge, and it falls apart. It\u2019s ridiculous.",
      attribution: "Director, cybersecurity recruitment firm",
    },
    faqs: [
      {
        question: "Can Certifyd stop deepfake impersonation?",
        answer:
          "Yes. Certifyd verification is device-bound, not appearance-bound. A deepfake can synthesise a person\u2019s face and voice, but it cannot complete a cryptographic challenge on the real person\u2019s registered device. When a remote worker verifies through Certifyd, they prove their identity through a passkey that is physically bound to their device \u2014 a device that an impersonator does not possess. This is fundamentally different from video-based verification.",
      },
      {
        question: "How does Certifyd work for remote onboarding?",
        answer:
          "During onboarding, the remote worker registers their device with Certifyd, creating a cryptographic key pair bound to that device. Their employer adds them as a member with a defined role. From that point forward, any verification request can only be completed by that specific device \u2014 proving the person is who they claim to be, regardless of where they are. This replaces the \u2018show me your passport on Zoom\u2019 approach with cryptographic proof.",
      },
      {
        question: "What about hybrid workers who are sometimes on-site?",
        answer:
          "Certifyd works the same way regardless of location. A hybrid worker verifies through their device-bound passkey whether they\u2019re at home, in the office, at a client site, or in a coffee shop. The verification record captures the context (time, identity, organisational membership) without requiring physical presence. The same system that verifies a remote worker on a video call verifies them at the office entrance.",
      },
      {
        question: "How is this different from SSO or 2FA?",
        answer:
          "SSO and 2FA verify that someone can access an account \u2014 they don\u2019t verify who that someone is. If a person\u2019s credentials are compromised, 2FA protects the account but doesn\u2019t prove the person using the credentials is the legitimate owner. Certifyd adds identity verification to the mix: it confirms not just that the right credentials were used, but that the person using them is cryptographically verified as the person they claim to be. It\u2019s identity, not just access.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Deepfakes", slug: "deepfakes" },
      { label: "Certifyd for Recruitment Agencies", slug: "recruitment-agencies" },
      { label: "Certifyd for CEO Fraud", slug: "ceo-fraud" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "The Arup Deepfake Attack: Lessons for Every Business", href: "/blog/arup-deepfake-attack/" },
      { label: "Deepfake Candidates in Recruitment", href: "/blog/deepfake-candidates-recruitment/" },
      { label: "Platform-Agnostic Verification", href: "/blog/platform-agnostic-verification/" },
    ],
    relatedResources: [
      {
        label: "NCSC \u2014 Remote Working Security",
        href: "https://www.ncsc.gov.uk/collection/device-security-guidance/remote-working",
        external: true,
      },
    ],
    ctaTitle: "Verify remote workers before granting access",
    ctaSecondaryLabel: "Read: The Arup Deepfake Attack",
    ctaSecondaryHref: "/blog/arup-deepfake-attack/",
  },
];

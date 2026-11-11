import type { BoardRow } from "@/components/site/Illustrations";
import type { FilmKey } from "@/lib/site";

/* Segment pages from the wireframes (one template, eight pages), with Michael's review applied:
   one-colour headlines, Book a demo instead of Start now, no Message Certifyd, closes about staying
   compliant rather than "send us your next starter", and rule cards fact-checked against GOV.UK. */

const SRC = {
  rtw: { title: "Home Office code of practice, 1 October 2026", href: "https://www.gov.uk/government/publications/illegal-working-penalties-codes-of-practice-for-employers" },
  conduct: { title: "Conduct Regulations 2003 guidance", href: "https://www.gov.uk/government/publications/conduct-regulations-2003-guidance-for-employment-agencies-and-employment-businesses/overview-of-the-conduct-regulations-2003" },
  fwa: { title: "Fair Work Agency", href: "https://www.business.gov.uk/campaign/employment-changes/employers/fair-work-agency/" },
  sia: { title: "Private Security Industry Act 2001", href: "https://www.legislation.gov.uk/ukpga/2001/12/contents" },
  food: { title: "Regulation (EC) 852/2004, Annex II, Chapter XII", href: "https://www.legislation.gov.uk/eur/2004/852/annex/II/chapter/XII" },
  licensing: { title: "Licensing Act 2003", href: "https://www.legislation.gov.uk/ukpga/2003/17/contents" },
  coshh: { title: "HSE: COSHH", href: "https://www.hse.gov.uk/coshh/" },
  kcsie: { title: "Keeping children safe in education", href: "https://www.gov.uk/government/publications/keeping-children-safe-in-education--2" },
  cdm: { title: "CDM Regulations 2015", href: "https://www.legislation.gov.uk/uksi/2015/51/contents" },
  cqc: { title: "CQC Regulation 19", href: "https://www.cqc.org.uk/guidance-regulation/providers/regulations-service-providers-and-managers/health-social-care-act/regulation-19" },
};
const RTW_RULE = "From 1 October 2026, checks also cover worker's contracts, individual subcontractors and online platforms, for work that starts on or after that date. Civil penalties reach up to £60,000 per illegal worker.";

type Source = { title: string; href: string };
export type Segment = {
  slug: string; sector: string; crumb: string; eyebrow?: string; title: string; lead: string; metaTitle: string; metaDescription: string;
  hero: { kind: "film"; film: FilmKey } | { kind: "board"; eyebrow: string; title: string; rows: BoardRow[]; tiles?: { n: number; l: string; kind: "ok" | "pend" | "warn" | "bad" }[] };
  week: { title: string; today: string[]; with: string[] };
  steps?: { eyebrow: string; title: string; items: { who: string; title: string; body: string }[] };
  standards?: { eyebrow: string; title: string; body: string; items: string[]; numbered: boolean; link?: string; source?: Source };
  roles?: { title: string; cards: { name: string; note?: string; items: string[] }[]; footer: string };
  rules?: { title: string; cards: { label: string; title: string; body: string; source?: Source }[] };
  feature?: { eyebrow: string; title: string; body: string; board: { eyebrow: string; title: string; rows: BoardRow[]; tiles?: { n: number; l: string; kind: "ok" | "pend" | "warn" | "bad" }[] } };
  invite?: { eyebrow: string; title: string; body: string; film: FilmKey };
  pricingNote?: { title: string; body: string };
  start: { title: string; body: string; outcomes: string[] };
  faqTitle: string; faqs: { q: string; a: string }[];
  close: string;
};

export const SEGMENTS: Segment[] = [
  {
    slug: "healthcare-staffing", sector: "health", crumb: "Healthcare staffing agencies", eyebrow: "For healthcare staffing agencies",
    title: "You place the nurses and carers. We chase the paperwork.", lead: "We collect, check and track every worker's credentials. Your compliance team reviews the exceptions. Your consultants get back to filling shifts.",
    metaTitle: "Compliance for healthcare staffing agencies | Certifyd", metaDescription: "Certifyd collects, checks and tracks every nurse and carer's credentials against the NHS employment check standards, so your consultants can fill shifts.",
    hero: { kind: "film", film: "askOnce" },
    week: { title: "Here's your week without the chasing.", today: ["Documents sit in consultants' personal WhatsApp chats", "A spreadsheet tracks who has sent what", "Expiry dates surface when a shift is already booked", "A framework audit or client request takes days to pull together"], with: ["One Certifyd conversation per worker, on the record", "Live status for every checklist item", "Reminders 30, 14 and 7 days before anything expires", "An evidence pack for one worker or your whole workforce, in one click"] },
    steps: { eyebrow: "How a new starter clears", title: "How a new nurse gets cleared to work.", items: [
      { who: "01 · Your manager", title: "Registers the agency", body: "Adds the team, switches on role templates and adds client sites." },
      { who: "02 · Your consultant", title: "Invites the worker", body: "Name, mobile, email, role and client site. One message goes out with a secure link." },
      { who: "03 · The worker", title: "Starts where they like", body: "WhatsApp, text or the secure portal. Consent is recorded with a time." },
      { who: "04 · The worker", title: "Uploads securely", body: "Files land in the case, never in the chat. Expiry dates are read from the documents." },
      { who: "05 · Certifyd", title: "Tracks what's missing", body: "Runs the checks it can, requests references and chases on a schedule." },
      { who: "06 · Your compliance lead", title: "Reviews and clears", body: "Signs off what needs a person, then clears the worker or adds conditions." },
    ] },
    standards: { eyebrow: "Built on the standards you're audited against", title: "Every checklist follows the NHS's six standard checks.", body: "Each role template follows the NHS Employment Check Standards, CQC Regulation 19 and the Conduct Regulations, so one record serves NHS framework and care home clients alike.", items: ["Identity checks", "Right to work", "Registration and qualifications", "History and references", "Criminal record checks", "Work health assessments"], numbered: true, link: "/regulations/" },
    feature: { eyebrow: "Your clients", title: "Let your care home clients see every worker you send, for free.", body: "They see each worker's status and evidence before an inspector asks. When they invite their other agencies, you're already set up.", board: { eyebrow: "Client view", title: "Willowbank Care Home", tiles: [{ n: 36, l: "Verified", kind: "ok" }, { n: 2, l: "Pending", kind: "pend" }, { n: 1, l: "Expiring", kind: "warn" }], rows: [{ name: "Northline Healthcare", sub: "24 workers", status: "All current", kind: "ok" }, { name: "Westbrook Care Staffing", sub: "15 workers", status: "1 expiring", kind: "warn" }] } },
    start: { title: "Start with the next nurse you need to place.", body: "We set up your roles with you. For the first 30 days, Certifyd runs alongside the way you work today, so nothing changes until you're ready.", outcomes: ["How long each starter takes to clear", "Who cleared before their first shift", "Which checks closed without your team touching them", "How many chases you didn't have to send", "An evidence pack ready for your next audit"] },
    faqTitle: "Questions agencies ask us.",
    faqs: [
      { q: "Who is responsible for the checks?", a: "You are. We run checks through registered providers and keep the evidence. A named person at your agency clears every worker." },
      { q: "Does Certifyd recruit or contact our workers about other jobs?", a: "No. Invitations name your agency and never advertise other work." },
      { q: "Do workers pay anything?", a: "No. Agencies pay. Workers never pay anything." },
      { q: "Do our workers need WhatsApp?", a: "No. An email or text invite works on its own. WhatsApp is there for workers who prefer it." },
    ],
    close: "Keep every nurse and carer cleared to work, every shift.",
  },
  {
    slug: "industrial-logistics-staffing", sector: "ind", crumb: "Industrial and logistics staffing", eyebrow: "For industrial and logistics staffing",
    title: "Get pickers, drivers and forklift operators cleared before the first shift.", lead: "We collect right to work, ID, licences and certificates from every temp, chase anything missing, and show your client sites who is cleared for tomorrow.",
    metaTitle: "Compliance for industrial and logistics staffing | Certifyd", metaDescription: "Right to work, licences and certificates collected from every temp and checked before the first shift, with a live cleared list for each client site.",
    hero: { kind: "film", film: "workers" },
    week: { title: "Here's your week without the chasing.", today: ["Licence photos arrive blurred on WhatsApp at 6am", "Night-shift starters turn up without a share code", "A client asks who's cleared for tomorrow and nobody knows", "Expired certificates turn up when a client audits you"], with: ["One conversation per worker, with every document on the record", "Share codes checked before anyone is booked", "A live list of who's cleared for each site and shift", "Reminders before any licence or certificate runs out"] },
    roles: { title: "The checks each job needs.", cards: [
      { name: "Warehouse operative", items: ["Right to work", "Photo ID and face match", "Two references", "Site induction"] },
      { name: "Forklift operator", note: "Everything for operatives, plus", items: ["Forklift training for each truck type", "Written authorisation and refresher date"] },
      { name: "HGV driver", note: "Everything for operatives, plus", items: ["DVLA licence check", "Driver CPC card", "Digital tachograph card"] },
      { name: "Food production operative", note: "Everything for operatives, plus", items: ["Food hygiene training", "Health declaration"] },
    ], footer: "Each client site wants something different? Send us their requirements and we'll set them up site by site." },
    rules: { title: "The rules your clients will ask you about.", cards: [
      { label: "Right to work", title: "Agency, subcontracted and platform work", body: RTW_RULE, source: SRC.rtw },
      { label: "Food, farming and packing", title: "Gangmaster licence", body: "Supplying workers into food processing and packing, agriculture or shellfish gathering needs a gangmaster licence. Since 7 April 2026 the Fair Work Agency issues and enforces them.", source: SRC.fwa },
      { label: "Every placement", title: "Conduct Regulations", body: "Before you supply anyone, confirm their identity and any licence or qualification the job needs, and keep the evidence.", source: SRC.conduct },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client site who is cleared for tomorrow's shift.", body: "Your client gets a live list for each site and shift, free. At the gate, supervisors scan each worker's pass with a phone camera and see the right person, cleared for that job.", board: { eyebrow: "Leeds distribution centre", title: "Tomorrow, 06:00 shift", rows: [{ name: "Dan Price", sub: "Forklift operator", status: "Cleared", kind: "ok" }, { name: "Ola Bello", sub: "Picker", status: "Cleared", kind: "ok" }, { name: "Sam Reid", sub: "HGV driver", status: "CPC check", kind: "pend" }] } },
    start: { title: "Start with next week's new workers.", body: "Send us the names. We set up your roles and client sites with you, and run alongside the way you work today for the first 30 days.", outcomes: ["Who cleared before their first shift", "Which checks closed without your branch touching them", "Every licence and certificate with its expiry date", "An evidence pack ready for your next client audit"] },
    faqTitle: "Questions branch managers ask us.",
    faqs: [
      { q: "Do workers need to download an app?", a: "No. They reply by WhatsApp or text and upload documents on a secure web page." },
      { q: "Can we set different requirements for each client site?", a: "Yes. Send us each client's requirements and we'll set them up per site, so a worker sees only what that site needs." },
      { q: "Who pays for checks?", a: "Your agency. Workers never pay anything." },
      { q: "Who decides if a worker is cleared?", a: "You do. We collect and check the evidence, and a named person at your agency signs off every worker." },
    ],
    close: "Keep every temp cleared, for every client site.",
  },
  {
    slug: "care-providers", sector: "care", crumb: "Care providers",
    title: "See every worker on your rota, your own staff and agency staff.", lead: "Onboard your own staff with Certifyd, and see every agency worker's checks in the same place, ready for your next CQC inspection.",
    metaTitle: "Workforce compliance for care providers | Certifyd", metaDescription: "Onboard your own care staff and see every agency worker's checks in one place, ready for your next CQC inspection. Seeing agency workers is free.",
    hero: { kind: "board", eyebrow: "Willowbank Care Home", title: "Tonight's rota", tiles: [{ n: 14, l: "Verified", kind: "ok" }, { n: 1, l: "Pending", kind: "pend" }, { n: 1, l: "Expiring", kind: "warn" }, { n: 0, l: "Needs review", kind: "bad" }], rows: [{ name: "Jamie Taylor", sub: "Nurse · Northline Staffing", status: "Verified", kind: "ok" }, { name: "Grace Owusu", sub: "Senior carer · your staff", status: "Verified", kind: "ok" }, { name: "Nina Patel", sub: "Care assistant · Westbrook Care Staffing", status: "Training expiring", kind: "warn" }] },
    week: { title: "Your next CQC inspection, without the last-minute rush.", today: ["Agency profiles arrive as PDFs, if they arrive at all", "Gaps in your own staff files show up late", "Nobody at reception can check who has just walked in", "An inspector asks for evidence and you start emailing agencies"], with: ["Every agency worker's status before they arrive", "Your own staff onboarded and tracked in the same place", "Reception scans the pass and records the check", "An evidence pack for any worker, in one click"] },
    standards: { eyebrow: "What CQC expects", title: "CQC expects the same checks for agency staff as for your own.", body: "Regulation 19 covers everyone working in your service, agency staff included. When an agency does the checks, you still need to be sure they are complete.", items: ["Proof of identity, with a recent photo", "A criminal record check at the right level", "Evidence of conduct in past care roles, and why they ended", "Qualifications for the job", "A full employment history, with gaps explained", "Health information relevant to the role"], numbered: false, link: "/regulations/", source: SRC.cqc },
    roles: { title: "A checklist for every job in your care home.", cards: [
      { name: "Care assistant", items: ["Right to work, enhanced DBS with adults' barred list, references, Care Certificate"] },
      { name: "Senior care assistant", items: ["Everything for care assistants, plus medicines competency"] },
      { name: "Registered nurse", items: ["Everything for care assistants, plus NMC register check and revalidation date"] },
      { name: "Cook", items: ["Right to work, DBS at the right level, food hygiene training, references"] },
      { name: "Housekeeper", items: ["Right to work, DBS at the right level, COSHH training, references"] },
      { name: "Activities coordinator", items: ["Right to work, enhanced DBS, references, training"] },
    ], footer: "Have your own checklist? Send it over and we'll set Certifyd up to match." },
    invite: { eyebrow: "Your agencies", title: "Ask your agencies to join, and see their workers for free.", body: "Send each agency an invite from Certifyd. Once they're on, you see every worker they send before the shift starts, and we help each agency get set up.", film: "audit" },
    pricingNote: { title: "Free to see agency workers. A monthly plan for your own staff.", body: "Your agencies' workers cost you nothing to view. Onboarding your own team is on the same plans as everyone else." },
    start: { title: "Start with tonight's rota.", body: "Add your home and the agencies you use. We set up your roles with you and help each agency join.", outcomes: ["Every agency worker's status before their shift", "Gaps in your own staff files, found early", "Reception check-ins on the record", "An evidence pack ready for your next inspection"] },
    faqTitle: "Questions care managers ask us.",
    faqs: [
      { q: "Do we pay to see agency workers?", a: "No. Seeing the workers your agencies send is free." },
      { q: "What if one of our agencies doesn't use Certifyd?", a: "Invite them from Certifyd and we'll help them get set up." },
      { q: "Does this replace our HR or rota system?", a: "No. Certifyd handles the checks and the evidence. Your HR and rota systems carry on as they are." },
      { q: "Can reception use it without training?", a: "Yes. They scan the worker's pass with any phone camera and tap to record the check." },
    ],
    close: "See everyone on tonight's rota before they arrive.",
  },
  {
    slug: "security-firms", sector: "sec", crumb: "Security firms", eyebrow: "For security firms",
    title: "Check every officer's licence and history before they go on site.", lead: "We chase five years of history, check SIA licences and keep each officer's screening on the record, so your vetting team only handles the gaps.",
    metaTitle: "Screening and SIA licence checks for security firms | Certifyd", metaDescription: "Certifyd chases five years of history, checks SIA licences and keeps every officer's screening on the record, so your vetting team handles only the gaps.",
    hero: { kind: "film", film: "door" },
    week: { title: "Background checks, without the chasing.", today: ["Five years of employers chased by email and phone", "Gaps in history found after an officer has started", "SIA licences lapse between shifts", "A client contract audit means days of pulling files"], with: ["Employers and referees chased on a schedule, every reply on the record", "Gaps flagged and explained before you clear anyone", "SIA licence status checked, with renewal reminders", "A screening file for any officer, in one click"] },
    roles: { title: "The checks each security job needs.", cards: [
      { name: "Security officer", note: "Right to work and ID, plus", items: ["SIA security guarding licence", "Five-year employment history", "Basic DBS", "Credit check"] },
      { name: "Door supervisor", note: "Right to work and ID, plus", items: ["SIA door supervisor licence", "Five-year employment history", "Basic DBS"] },
      { name: "CCTV operator", note: "Right to work and ID, plus", items: ["SIA public space surveillance licence", "Five-year employment history", "Basic DBS"] },
      { name: "Event steward", note: "Right to work and ID, plus", items: ["Steward training record", "SIA licence if doing licensable work", "Two references"] },
    ], footer: "Each client contract asks for something different? Send us their terms and we'll set them up per client." },
    rules: { title: "The rules your clients will ask about.", cards: [
      { label: "Private Security Industry Act 2001", title: "SIA licensing", body: "Licensable security work needs a valid SIA licence, and supplying unlicensed officers is an offence too.", source: SRC.sia },
      { label: "British Standard", title: "BS 7858 screening", body: "The standard most security clients ask for: identity, right to work, five years of history, credit and criminal record checks." },
      { label: "Immigration law", title: "Right to work", body: "Check before work starts. Civil penalties reach up to £60,000 per illegal worker.", source: SRC.rtw },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client the officer they booked.", body: "Your client sees who is booked for each shift, free. At the door, the supervisor scans the officer's pass with a phone camera and sees the face, the licence and the screening, for that site and that shift.", board: { eyebrow: "Riverside Arena", title: "Saturday, 18:00 shift", rows: [{ name: "Amira Khan", sub: "Door supervisor", status: "Licence valid", kind: "ok" }, { name: "Tom Reid", sub: "Security officer", status: "Screened", kind: "ok" }, { name: "Lee Grant", sub: "Steward", status: "Reference due", kind: "pend" }] } },
    start: { title: "Start with next month's new officers.", body: "Send us your screening policy and we'll set up your roles and client requirements with you.", outcomes: ["Officers screened before their first shift", "History gaps found and explained early", "Every SIA licence with its expiry date", "A screening file ready for your next client audit"] },
    faqTitle: "Questions vetting managers ask us.",
    faqs: [
      { q: "Do you run BS 7858 screening for us?", a: "We collect and chase everything the standard needs and keep it on the record. Your screening controller reviews each file and signs off the officer." },
      { q: "How do you check SIA licences?", a: "We check each licence against the SIA's public register and remind you before it expires." },
      { q: "Can our clients see who is screened?", a: "Yes. Clients see each officer's status for their site, free. They don't see the documents behind it." },
      { q: "What about officers already working for us?", a: "Bring them in from a spreadsheet. We check their licences and expiry dates and chase anything missing." },
    ],
    close: "Keep every officer's checks and licence up to date, all year.",
  },
  {
    slug: "hospitality-events", sector: "hosp", crumb: "Hospitality and events", eyebrow: "For hospitality and events teams",
    title: "Get hundreds of new staff ready before the big weekend.", lead: "Bar, kitchen, front-of-house and event staff share their documents from their phone. We check right to work and certificates, and show you who is ready for each shift.",
    metaTitle: "Right-to-work and training checks for hospitality | Certifyd", metaDescription: "Onboard hundreds of bar, kitchen and event starters from their phones. Certifyd checks right to work and certificates and shows who's ready for each shift.",
    hero: { kind: "board", eyebrow: "Harbourside Food Festival", title: "Friday, 10:00 shift", rows: [{ name: "Mia Turner", sub: "Bar staff", status: "Ready", kind: "ok" }, { name: "Jon Okafor", sub: "Chef de partie", status: "Ready", kind: "ok" }, { name: "Sara Lind", sub: "Steward", status: "Share code due", kind: "pend" }] },
    week: { title: "Here's your busiest month without the chasing.", today: ["Hundreds of starters in the fortnight before an event", "Passports and share codes sent as photos to a shared inbox", "Food hygiene and allergen training checked by hand, if at all", "A Home Office visit and nobody can find the checks"], with: ["Every starter onboards from their phone, in their own language", "Right-to-work checks done before anyone is on the rota", "Training certificates read and expiry dates tracked", "Evidence for every worker, ready if anyone asks"] },
    roles: { title: "The checks each job on your rota needs.", cards: [
      { name: "Bar staff", note: "Right to work and ID, plus", items: ["Age check", "Alcohol sales and age-verification training"] },
      { name: "Chef or kitchen porter", note: "Right to work and ID, plus", items: ["Food hygiene training", "Allergen awareness training", "Health declaration"] },
      { name: "Bar or duty manager", note: "Right to work and ID, plus", items: ["Personal licence, if they are the designated premises supervisor", "Licensing training"] },
      { name: "Event door staff", note: "Right to work and ID, plus", items: ["SIA door supervisor licence", "Event briefing record"] },
    ], footer: "Running different events with different rules? Set up requirements per venue or event." },
    rules: { title: "The rules your venues will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: "Check before anyone starts, including casual and seasonal staff. Civil penalties reach up to £60,000 per illegal worker.", source: SRC.rtw },
      { label: "Food hygiene law", title: "Food handler training", body: "Food handlers must be supervised and trained in food hygiene to a level that matches their work.", source: SRC.food },
      { label: "Licensing Act 2003", title: "Personal licences", body: "Premises licensed to sell alcohol need a designated premises supervisor who holds a personal licence.", source: SRC.licensing },
    ] },
    feature: { eyebrow: "Your shifts", title: "See who is ready for every shift.", body: "Your event manager sees a live list for each shift: who is cleared, who is waiting on a document, and who to swap in. Workers show their pass at the staff entrance.", board: { eyebrow: "Staff entrance", title: "Saturday, 09:00 shift", rows: [{ name: "42 workers", sub: "Cleared for today", status: "Ready", kind: "ok" }, { name: "3 workers", sub: "Waiting on a document", status: "Chasing", kind: "pend" }, { name: "1 worker", sub: "Share code expired", status: "Needs you", kind: "bad" }] } },
    start: { title: "Start with your next event.", body: "Import your starters from a spreadsheet. Certifyd messages each one and tells you who is ready.", outcomes: ["How many starters were ready before day one", "Which checks closed without your team", "Every certificate with its expiry date", "Evidence ready for every worker on the rota"] },
    faqTitle: "Questions hospitality teams ask us.",
    faqs: [
      { q: "Can we onboard 300 people in a week?", a: "Yes. Import them from a spreadsheet and Certifyd messages each one, chases what's missing and shows you who is ready." },
      { q: "Do workers need to download an app?", a: "No. They reply on WhatsApp, text or email, and upload documents on a secure page." },
      { q: "What if a worker's first language isn't English?", a: "They can reply in their own language. You see everything in English." },
      { q: "Who pays for checks?", a: "You do. Workers never pay anything." },
    ],
    close: "Be ready for every event, not just the next one.",
  },
  {
    slug: "facilities-cleaning", sector: "fac", crumb: "Facilities and cleaning", eyebrow: "For facilities and cleaning companies",
    title: "Give every client the checks they ask for, for every worker you send.", lead: "Cleaners, porters and maintenance staff share their documents once. We check them against each client site's rules and show you who can work where.",
    metaTitle: "Compliance for cleaning and facilities companies | Certifyd", metaDescription: "Cleaners, porters and maintenance staff share documents once. Certifyd checks them against each client site's rules and shows who can work where.",
    hero: { kind: "board", eyebrow: "Who can work where", title: "Monday, early shift", rows: [{ name: "Ana Silva", sub: "Cleaning operative · 3 sites", status: "Cleared", kind: "ok" }, { name: "Ben Hall", sub: "Porter · St Mary's School", status: "DBS in progress", kind: "pend" }, { name: "Kofi Mensah", sub: "Maintenance · HQ", status: "Cleared", kind: "ok" }] },
    week: { title: "Your next client audit, without the last-minute rush.", today: ["Each client contract has its own vetting rules", "Operatives move between sites without the right checks", "Training records sit in different folders", "A client audit means chasing your own branches"], with: ["Requirements set up per client site, so operatives see only what's needed", "A clear list of who can work at each site", "COSHH and site training tracked with expiry dates", "An evidence pack per site, ready for client audits"] },
    roles: { title: "The checks each job needs.", cards: [
      { name: "Cleaning operative", note: "Right to work and ID, plus", items: ["COSHH training", "Site induction", "Two references"] },
      { name: "School cleaner", note: "Right to work and ID, plus", items: ["DBS at the level the school asks for", "Safeguarding awareness", "Site induction"] },
      { name: "Sensitive-site operative", note: "Right to work and ID, plus", items: ["BS 7858 screening", "Five-year employment history", "Basic DBS"] },
      { name: "Maintenance operative", note: "Right to work and ID, plus", items: ["Working at height training", "Asbestos awareness", "Trade cards for the work"] },
    ], footer: "Each client wants something different? Send us their requirements and we'll set them up site by site." },
    rules: { title: "The rules your clients will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: RTW_RULE, source: SRC.rtw },
      { label: "COSHH Regulations 2002", title: "Hazardous substances", body: "Staff who use cleaning chemicals need information, instruction and training on them.", source: SRC.coshh },
      { label: "Keeping children safe in education", title: "Working in schools", body: "Schools in England must make sure contractors working on site are checked, so expect them to ask for DBS and identity checks.", source: SRC.kcsie },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client who is cleared for their site.", body: "Each client sees the operatives cleared for their site, free, with the evidence behind each check if they ask. Move an operative to a new site and Certifyd tells you what else they need first.", board: { eyebrow: "Northgate Business Park", title: "Cleared for this site", rows: [{ name: "Ana Silva", sub: "Cleaning operative", status: "Cleared", kind: "ok" }, { name: "Priya Nair", sub: "Cleaning operative", status: "Cleared", kind: "ok" }, { name: "Sam Cole", sub: "Porter", status: "Site induction due", kind: "pend" }] } },
    start: { title: "Start with your next new contract.", body: "Add the client site, its requirements and the operatives you plan to put there. Certifyd chases the rest.", outcomes: ["Who is cleared for each client site", "Which checks closed without your branches", "Every training record with its expiry date", "An evidence pack ready for each client"] },
    faqTitle: "Questions contract managers ask us.",
    faqs: [
      { q: "Can we set different requirements for each client?", a: "Yes. Set them per client site, so an operative sees only what that site needs." },
      { q: "Can an operative work at more than one site?", a: "Yes. Certifyd shows which sites they're cleared for and what they need for any new one." },
      { q: "Do you handle DBS checks?", a: "Yes, through a registered body." },
      { q: "Who decides if an operative is cleared?", a: "You do. We collect and check the evidence, and a named person on your team signs off." },
    ],
    close: "Keep every worker cleared for every client's site.",
  },
  {
    slug: "platforms-subcontractors", sector: "gig", crumb: "Platforms and subcontractor chains", eyebrow: "For platforms and subcontractor chains",
    title: "Prove the person doing the job is the person you checked.", lead: "From 1 October 2026, right-to-work checks reach individual subcontractors and people who find work through online platforms. Certifyd checks every worker through a registered provider, and keeps checking.",
    metaTitle: "Right-to-work checks for platforms and subcontractors | Certifyd", metaDescription: "From 1 October 2026 right-to-work checks reach subcontractors and platform workers. Certifyd checks every worker through a registered provider.",
    hero: { kind: "board", eyebrow: "Chain view", title: "Engaged through Swift Logistics", rows: [{ name: "Dev Patel", sub: "Courier · engaged 2 Oct", status: "Right to work", kind: "ok" }, { name: "Lena Kraus", sub: "Courier · substitute", status: "ID match due", kind: "pend" }, { name: "Omar Haddad", sub: "Courier · engaged 14 Oct", status: "Right to work", kind: "ok" }] },
    week: { title: "Sign up lots of workers, without the risk.", today: ["Thousands of self-employed workers to check, often in a week", "Accounts shared with, or handed to, substitutes", "Checks done once at sign-up and never again", "No clear answer on who in the chain did the check"], with: ["Right-to-work and ID checks through a registered provider, at sign-up", "Each worker's pass shows their face to whoever meets them at the job", "Expiry dates tracked, with re-checks sent before time runs out", "A record of who checked whom, for every link in the chain"] },
    roles: { title: "The checks every worker on your app needs.", cards: [
      { name: "Courier or delivery driver", note: "Right to work and ID, plus", items: ["Driving licence check", "Hire and reward insurance", "Vehicle details"] },
      { name: "Self-employed tradesperson", note: "Right to work and ID, plus", items: ["Trade card for the work", "Public liability insurance"] },
      { name: "Care or cleaning worker", note: "Right to work and ID, plus", items: ["DBS where the work needs it", "References", "Training records"] },
      { name: "Substitute", note: "Before they start", items: ["Right to work, checked", "ID matched to the person", "Added to the record"] },
    ], footer: "Different work on your platform needs different checks? Set requirements per job type." },
    rules: { title: "The rules that changed on 1 October 2026.", cards: [
      { label: "Immigration law", title: "Online matching services", body: "The right-to-work scheme now reaches people who find work through online matching services, for work that starts on or after 1 October 2026.", source: SRC.rtw },
      { label: "Immigration law", title: "Subcontractors and substitutes", body: "Individual subcontractors are in scope, and liability can extend up a chain of contracts. No substitute should start before their right to work is checked.", source: SRC.rtw },
      { label: "Civil penalties", title: "Up to £60,000 per worker", body: "Up to £45,000 per illegal worker for a first breach, and up to £60,000 for repeat breaches.", source: SRC.rtw },
    ] },
    feature: { eyebrow: "Your chain", title: "See who checked each worker, across every subcontractor.", body: "Every worker's record shows which business engaged them, which checks ran, through which provider and when. Share it with the businesses above you in the chain, without sharing the documents.", board: { eyebrow: "Chain record", title: "Who checked whom", rows: [{ name: "Swift Logistics", sub: "Direct engager · 214 workers", status: "Checks on file", kind: "ok" }, { name: "Northway Couriers", sub: "Subcontractor · 38 workers", status: "2 re-checks due", kind: "warn" }] } },
    start: { title: "Start with your next group of new workers.", body: "Import a list of workers. Certifyd checks each one and tells you who can start.", outcomes: ["How many workers cleared at sign-up", "Substitutes checked before they started", "Every time-limited permission with its re-check date", "A chain record ready for your partners"] },
    faqTitle: "Questions operations and safety teams ask us.",
    faqs: [
      { q: "Can you check workers at volume?", a: "Yes. Import a list and Certifyd checks each worker and chases anything missing." },
      { q: "Are the checks done by a registered provider?", a: "Yes. Digital right-to-work and identity checks run through a government-registered digital verification service provider." },
      { q: "How do you handle substitutes?", a: "A substitute gets their own invite and must clear right to work before they start." },
      { q: "Do workers need an app?", a: "No. They reply on WhatsApp, text or email, and upload documents on a secure page." },
    ],
    close: "Keep a clear record of every worker, and anyone who covers for them.",
  },
  {
    slug: "construction", sector: "con", crumb: "Construction subcontractors", eyebrow: "For construction labour suppliers",
    title: "Check every worker's cards before they get to site.", lead: "CSCS cards, trade tickets and right to work collected from every operative and checked before day one. Main contractors see who is cleared before anyone travels.",
    metaTitle: "CSCS and right-to-work checks for labour suppliers | Certifyd", metaDescription: "CSCS cards, trade tickets and right to work checked for every operative before day one, so main contractors know who is cleared before anyone travels.",
    hero: { kind: "board", eyebrow: "Wakefield site", title: "Monday, 07:00 start", rows: [{ name: "Callum Ross", sub: "Groundworker", status: "CSCS valid", kind: "ok" }, { name: "Ivan Petrov", sub: "Plant operator", status: "CPCS valid", kind: "ok" }, { name: "Josh Webb", sub: "Scaffolder", status: "CISRS due", kind: "warn" }] },
    week: { title: "Monday morning, with no surprises at the gate.", today: ["Photos of CSCS cards arrive by text the night before", "Expired tickets found at the gate", "Every main contractor wants a different format", "Right-to-work checks for subcontracted operatives fall between companies"], with: ["Cards and tickets checked before an operative is booked", "Reminders before any ticket lapses", "Cleared status shared with the main contractor before Monday", "Right-to-work checks for every operative, subcontractors included"] },
    roles: { title: "The cards each trade needs.", cards: [
      { name: "Labourer or groundworker", note: "Right to work and ID, plus", items: ["CSCS labourer card", "Site induction"] },
      { name: "Plant operator", note: "Right to work and ID, plus", items: ["CPCS or NPORS card for the machine", "Site induction"] },
      { name: "Scaffolder", note: "Right to work and ID, plus", items: ["CISRS card", "Working at height training"] },
      { name: "Electrician", note: "Right to work and ID, plus", items: ["ECS card", "Trade qualification"] },
    ], footer: "Each main contractor asks for something different? Set requirements per contractor or site." },
    rules: { title: "The rules your main contractor will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: "From 1 October 2026, checks reach individual subcontractors too, and liability can pass up the contract chain. Civil penalties reach up to £60,000 per illegal worker.", source: SRC.rtw },
      { label: "CDM Regulations 2015", title: "Competence and induction", body: "Everyone on site needs the skills, training and experience for their work, and a site induction.", source: SRC.cdm },
      { label: "Site card schemes", title: "CSCS and partner cards", body: "Most major sites ask for a CSCS card or a partner scheme card for every operative. It's an industry requirement, not law." },
    ] },
    feature: { eyebrow: "Your main contractors", title: "Only send workers who are cleared for the site.", body: "We don't sell turnstiles. We check operatives before they travel and share their status with the main contractor, so the site team already knows who is coming.", board: { eyebrow: "Shared with main contractor", title: "Wakefield site · Monday", rows: [{ name: "12 operatives", sub: "Cards and right to work checked", status: "Sent", kind: "ok" }, { name: "2 operatives", sub: "Ticket renewal in progress", status: "Held back", kind: "pend" }] } },
    start: { title: "Start with next week's workers.", body: "Add the site and the operatives you plan to send. Certifyd checks their cards and right to work before Monday.", outcomes: ["Operatives cleared before they travelled", "Tickets renewed before they lapsed", "Every card with its expiry date", "Evidence ready for every main contractor"] },
    faqTitle: "Questions labour suppliers ask us.",
    faqs: [
      { q: "Do you replace site turnstiles?", a: "No. We check people before they arrive and share their status with the main contractor." },
      { q: "Which cards can you check?", a: "CSCS and partner scheme cards, plus trade tickets such as CPCS, NPORS and CISRS. We read each card and check it with the scheme where the scheme offers a check." },
      { q: "Can our own subcontractors use it?", a: "Yes. Invite them, and their operatives' status appears in your view." },
      { q: "Who pays?", a: "You do. Operatives never pay anything." },
    ],
    close: "Keep every worker's cards up to date, on every site.",
  },
];

export const getSegment = (slug: string) => SEGMENTS.find((s) => s.slug === slug);

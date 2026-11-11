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
const RTW_RULE = "Since 1 October 2026, checks also cover more kinds of workers, including subcontractors and people who find work through apps. This applies to work that starts on or after that date. The fine can be up to £60,000 for each person working illegally.";

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
    title: "You place the nurses and carers. We chase the paperwork.", lead: "We collect and check every nurse and carer's documents, and keep them up to date. Your compliance team only looks at the problems. Your recruiters get back to filling shifts.",
    metaTitle: "Compliance for healthcare staffing agencies | Certifyd", metaDescription: "Certifyd collects, checks and tracks every nurse and carer's credentials against the NHS employment check standards, so your consultants can fill shifts.",
    hero: { kind: "film", film: "askOnce" },
    week: { title: "Here's your week without the chasing.", today: ["Documents sit in recruiters' personal WhatsApp chats", "A spreadsheet tracks who has sent what", "You find out a document has run out after the shift is booked", "An NHS framework or client check takes days to pull together"], with: ["One Certifyd chat per worker, all saved", "See what's done and what's missing on every checklist", "Reminders 30, 14 and 7 days before anything runs out", "Download one worker's file, or everyone's, in one click"] },
    steps: { eyebrow: "Step by step", title: "How a new nurse gets cleared to work.", items: [
      { who: "01 · Your manager", title: "Sets up the agency", body: "Adds the team, picks the checklist for each job and adds client sites." },
      { who: "02 · Your consultant", title: "Invites the worker", body: "Name, mobile, email, job and client site. We send one message with a secure link." },
      { who: "03 · The worker", title: "Starts where they like", body: "On WhatsApp, by text or on a secure web page. We save the time they agreed to the checks." },
      { who: "04 · The worker", title: "Uploads safely", body: "Documents go into their file, never the chat. We read the end date from each document." },
      { who: "05 · Certifyd", title: "Chases what's missing", body: "Runs the checks it can, asks for references and keeps chasing until it's done." },
      { who: "06 · Your compliance lead", title: "Checks and clears", body: "Looks at anything that needs a person, then clears the worker or adds conditions." },
    ] },
    standards: { eyebrow: "Built on the rules you're checked against", title: "Every checklist follows the NHS's six standard checks.", body: "Each checklist follows the NHS Employment Check Standards. It also follows CQC Regulation 19 (the care regulator's rule on safe hiring) and the Conduct Regulations (the rules for agencies). So one file works for NHS and care home clients.", items: ["Identity checks", "Right to work", "Registration and qualifications", "Work history and references", "Criminal record (DBS) checks", "Health checks for work"], numbered: true, link: "/regulations/" },
    feature: { eyebrow: "Your clients", title: "Let your care home clients see every worker you send, for free.", body: "They can see each worker's checks before an inspector asks. If they invite their other agencies too, you're already set up.", board: { eyebrow: "Client view", title: "Willowbank Care Home", tiles: [{ n: 36, l: "Cleared", kind: "ok" }, { n: 2, l: "In progress", kind: "pend" }, { n: 1, l: "Running out", kind: "warn" }], rows: [{ name: "Northline Healthcare", sub: "24 workers", status: "All up to date", kind: "ok" }, { name: "Westbrook Care Staffing", sub: "15 workers", status: "1 running out", kind: "warn" }] } },
    start: { title: "Start with the next nurse you need to place.", body: "We set up your jobs and checklists with you. For the first 30 days, Certifyd runs next to the way you work now, so nothing changes until you're ready.", outcomes: ["How long each new worker takes to clear", "Who was cleared before their first shift", "Which checks got done without your team", "How many chasing messages you didn't have to send", "A worker file ready for your next inspection"] },
    faqTitle: "Questions agencies ask us.",
    faqs: [
      { q: "Who is responsible for the checks?", a: "You are. We use registered providers for the checks and keep the proof. A named person at your agency clears every worker." },
      { q: "Does Certifyd recruit or contact our workers about other jobs?", a: "No. Every message names your agency, and we never offer your workers other jobs." },
      { q: "Do workers pay anything?", a: "No. Agencies pay. Workers never pay anything." },
      { q: "Do our workers need WhatsApp?", a: "No. An email or text invite works on its own. WhatsApp is there for workers who prefer it." },
    ],
    close: "Keep every nurse and carer cleared to work, every shift.",
  },
  {
    slug: "industrial-logistics-staffing", sector: "ind", crumb: "Industrial and logistics staffing", eyebrow: "For industrial and logistics staffing",
    title: "Get pickers, drivers and forklift drivers cleared before their first shift.", lead: "We collect right to work, ID, licences and certificates from every temp, and chase anything missing. Your client sites can see who is cleared for tomorrow.",
    metaTitle: "Compliance for industrial and logistics staffing | Certifyd", metaDescription: "Right to work, licences and certificates collected from every temp and checked before the first shift, with a live cleared list for each client site.",
    hero: { kind: "film", film: "workers" },
    week: { title: "Here's your week without the chasing.", today: ["Licence photos arrive blurred on WhatsApp at 6am", "Night-shift workers turn up without a share code", "A client asks who's cleared for tomorrow and nobody knows", "A client check finds certificates that have run out"], with: ["One chat per worker, with every document saved", "Share codes checked before anyone is booked", "An up-to-date list of who's cleared for each site and shift", "Reminders before any licence or certificate runs out"] },
    roles: { title: "The checks each job needs.", cards: [
      { name: "Warehouse worker", items: ["Right to work", "Photo ID and face match", "Two references", "Site induction"] },
      { name: "Forklift driver", note: "Everything a warehouse worker needs, plus", items: ["Forklift training for each truck type", "Written permission to drive, and a refresher date"] },
      { name: "HGV driver", note: "Everything a warehouse worker needs, plus", items: ["DVLA licence check", "Driver CPC card", "Digital tachograph card"] },
      { name: "Food factory worker", note: "Everything a warehouse worker needs, plus", items: ["Food hygiene training", "Health declaration"] },
    ], footer: "Does each client site want something different? Send us their rules and we'll set up each site." },
    rules: { title: "The rules your clients will ask you about.", cards: [
      { label: "Right to work", title: "Agency workers, subcontractors and app-based work", body: RTW_RULE, source: SRC.rtw },
      { label: "Food, farming and packing", title: "Gangmaster licence", body: "To supply workers for food processing and packing, farming or shellfish gathering, you need a gangmaster licence. Since 7 April 2026, the Fair Work Agency gives out these licences and makes sure the rules are followed.", source: SRC.fwa },
      { label: "Every worker you place", title: "Conduct Regulations (the rules for agencies)", body: "Before you send anyone to a client, check who they are and any licence or qualification the job needs. Keep the proof.", source: SRC.conduct },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client site who is cleared for tomorrow's shift.", body: "Your client gets an up-to-date list for each site and shift, for free. At the gate, supervisors scan each worker's pass with a phone camera. They can see it's the right person, cleared for that job.", board: { eyebrow: "Leeds distribution centre", title: "Tomorrow, 06:00 shift", rows: [{ name: "Dan Price", sub: "Forklift driver", status: "Cleared", kind: "ok" }, { name: "Ola Bello", sub: "Picker", status: "Cleared", kind: "ok" }, { name: "Sam Reid", sub: "HGV driver", status: "CPC check", kind: "pend" }] } },
    start: { title: "Start with next week's new workers.", body: "Send us the names. We set up your jobs and client sites with you. For the first 30 days, we run next to the way you work now.", outcomes: ["Who was cleared before their first shift", "Which checks got done without your branch", "Every licence and certificate, with the date it runs out", "A worker file ready for your next client check"] },
    faqTitle: "Questions branch managers ask us.",
    faqs: [
      { q: "Do workers need to download an app?", a: "No. They reply by WhatsApp or text and upload documents on a secure web page." },
      { q: "Can each client site have different checks?", a: "Yes. Send us each client's rules and we'll set up each site. Workers only see what that site needs." },
      { q: "Who pays for checks?", a: "Your agency. Workers never pay anything." },
      { q: "Who decides if a worker is cleared?", a: "You do. We collect and check the proof, and a named person at your agency approves every worker." },
    ],
    close: "Keep every temp cleared, for every client site.",
  },
  {
    slug: "care-providers", sector: "care", crumb: "Care providers",
    title: "See every worker on your rota, your own staff and agency staff.", lead: "Take on your own staff with Certifyd. You also see every agency worker's checks in the same place, ready for your next CQC (care regulator) inspection.",
    metaTitle: "Workforce compliance for care providers | Certifyd", metaDescription: "Onboard your own care staff and see every agency worker's checks in one place, ready for your next CQC inspection. Seeing agency workers is free.",
    hero: { kind: "board", eyebrow: "Willowbank Care Home", title: "Tonight's rota", tiles: [{ n: 14, l: "Cleared", kind: "ok" }, { n: 1, l: "In progress", kind: "pend" }, { n: 1, l: "Running out", kind: "warn" }, { n: 0, l: "Needs you", kind: "bad" }], rows: [{ name: "Jamie Taylor", sub: "Nurse · Northline Staffing", status: "Cleared", kind: "ok" }, { name: "Grace Owusu", sub: "Senior carer · your staff", status: "Cleared", kind: "ok" }, { name: "Nina Patel", sub: "Care assistant · Westbrook Care Staffing", status: "Training runs out soon", kind: "warn" }] },
    week: { title: "Your next CQC inspection, without the last-minute rush.", today: ["Agency worker profiles arrive as PDFs, if they arrive at all", "You find gaps in your own staff files too late", "Nobody at reception can check who has just walked in", "An inspector asks for proof and you start emailing agencies"], with: ["Every agency worker's checks, before they arrive", "Your own staff signed up and tracked in the same place", "Reception scans their pass and saves the check-in", "Any worker's file, in one click"] },
    standards: { eyebrow: "What CQC expects", title: "CQC expects the same checks for agency staff as for your own.", body: "Regulation 19 is the CQC rule on hiring safely. It covers everyone working in your service, including agency staff. Even when an agency does the checks, you still need to be sure nothing is missing.", items: ["Proof of identity, with a recent photo", "A DBS (criminal record) check at the right level", "How they behaved in past care jobs, and why those jobs ended", "Qualifications for the job", "A full employment history, with gaps explained", "Health information that matters for the job"], numbered: false, link: "/regulations/", source: SRC.cqc },
    roles: { title: "A checklist for every job in your care home.", cards: [
      { name: "Care assistant", items: ["Right to work, enhanced DBS with adults' barred list, references, Care Certificate"] },
      { name: "Senior care assistant", items: ["Everything a care assistant needs, plus training to give medicines"] },
      { name: "Registered nurse", items: ["Everything a care assistant needs, plus NMC register check and revalidation date"] },
      { name: "Cook", items: ["Right to work, DBS at the right level, food hygiene training, references"] },
      { name: "Housekeeper", items: ["Right to work, DBS at the right level, COSHH (cleaning chemicals) training, references"] },
      { name: "Activities coordinator", items: ["Right to work, enhanced DBS, references, training"] },
    ], footer: "Have your own checklist? Send it over and we'll set Certifyd up to match." },
    invite: { eyebrow: "Your agencies", title: "Ask your agencies to join, and see their workers for free.", body: "Send each agency an invite from Certifyd, and we help them get set up. Then you see every worker they send, before the shift starts.", film: "audit" },
    pricingNote: { title: "Free to see agency workers. A monthly plan for your own staff.", body: "Seeing your agencies' workers costs you nothing. For your own staff, you pay the same monthly plan as everyone else." },
    start: { title: "Start with tonight's rota.", body: "Add your care home and the agencies you use. We set up your jobs with you and help each agency join.", outcomes: ["Every agency worker's checks before their shift", "Gaps in your own staff files, found early", "Every check-in at reception, saved", "A worker file ready for your next inspection"] },
    faqTitle: "Questions care managers ask us.",
    faqs: [
      { q: "Do we pay to see agency workers?", a: "No. Seeing the workers your agencies send is free." },
      { q: "What if one of our agencies doesn't use Certifyd?", a: "Invite them from Certifyd and we'll help them get set up." },
      { q: "Does this replace our HR or rota system?", a: "No. Certifyd handles the checks and the proof. Your HR and rota systems carry on as they are." },
      { q: "Can reception use it without training?", a: "Yes. They scan the worker's pass with any phone camera and tap to save the check-in." },
    ],
    close: "See everyone on tonight's rota before they arrive.",
  },
  {
    slug: "security-firms", sector: "sec", crumb: "Security firms", eyebrow: "For security firms",
    title: "Check every officer's licence and history before they go on site.", lead: "We chase five years of work history and check SIA licences. Each officer's background checks are saved in one file, so your vetting team only deals with the gaps.",
    metaTitle: "Screening and SIA licence checks for security firms | Certifyd", metaDescription: "Certifyd chases five years of history, checks SIA licences and keeps every officer's screening on the record, so your vetting team handles only the gaps.",
    hero: { kind: "film", film: "door" },
    week: { title: "Background checks, without the chasing.", today: ["Five years of past employers chased by email and phone", "Gaps in work history found after an officer has started", "SIA licences run out between shifts", "A client check means days of digging out files"], with: ["Past employers chased for you, with every reply saved", "Gaps spotted and explained before you clear anyone", "SIA licences checked, with reminders to renew", "Any officer's background check file, in one click"] },
    roles: { title: "The checks each security job needs.", cards: [
      { name: "Security officer", note: "Right to work and ID, plus", items: ["SIA security guarding licence", "Five years of work history", "Basic DBS", "Credit check"] },
      { name: "Door supervisor", note: "Right to work and ID, plus", items: ["SIA door supervisor licence", "Five years of work history", "Basic DBS"] },
      { name: "CCTV operator", note: "Right to work and ID, plus", items: ["SIA public space surveillance licence", "Five years of work history", "Basic DBS"] },
      { name: "Event steward", note: "Right to work and ID, plus", items: ["Steward training record", "SIA licence, if the work needs one", "Two references"] },
    ], footer: "Does each client ask for something different? Send us their rules and we'll set up each client." },
    rules: { title: "The rules your clients will ask about.", cards: [
      { label: "Private Security Industry Act 2001", title: "SIA licensing", body: "Many security jobs need an SIA licence by law. It's a crime to do that work without one, or to use officers who don't have one.", source: SRC.sia },
      { label: "British Standard", title: "BS 7858 background checks", body: "The background check most security clients ask for. It covers ID, right to work, five years of work history, a credit check and a criminal record check." },
      { label: "Immigration law", title: "Right to work", body: "Check before work starts. Civil penalties reach up to £60,000 per illegal worker.", source: SRC.rtw },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client the officer they booked.", body: "Your client sees who is booked for each shift, for free. At the door, the supervisor scans the officer's pass with a phone camera. They see the officer's photo, licence and checks for that site and shift.", board: { eyebrow: "Riverside Arena", title: "Saturday, 18:00 shift", rows: [{ name: "Amira Khan", sub: "Door supervisor", status: "Licence valid", kind: "ok" }, { name: "Tom Reid", sub: "Security officer", status: "Checked", kind: "ok" }, { name: "Lee Grant", sub: "Steward", status: "Reference due", kind: "pend" }] } },
    start: { title: "Start with next month's new officers.", body: "Send us your vetting rules, and we'll set up your jobs and each client's needs with you.", outcomes: ["Officers checked before their first shift", "Gaps in work history found and explained early", "Every SIA licence, with the date it runs out", "A background check file ready for your next client check"] },
    faqTitle: "Questions vetting managers ask us.",
    faqs: [
      { q: "Do you do BS 7858 checks for us?", a: "We collect and chase everything the standard needs, and save it in one file. Your screening controller checks each file and approves the officer." },
      { q: "How do you check SIA licences?", a: "We check each licence on the SIA's public register, and remind you before it runs out." },
      { q: "Can our clients see who is screened?", a: "Yes. Clients see if each officer is cleared for their site, for free. They don't see the officer's documents." },
      { q: "What about officers already working for us?", a: "Upload them from a spreadsheet. We check their licences and end dates, and chase anything missing." },
    ],
    close: "Keep every officer's checks and licence up to date, all year.",
  },
  {
    slug: "hospitality-events", sector: "hosp", crumb: "Hospitality and events", eyebrow: "For hospitality and events teams",
    title: "Get hundreds of new staff ready before the big weekend.", lead: "Bar, kitchen, front-of-house and event staff send their documents from their phone. We check their right to work and certificates, and show you who is ready for each shift.",
    metaTitle: "Right-to-work and training checks for hospitality | Certifyd", metaDescription: "Onboard hundreds of bar, kitchen and event starters from their phones. Certifyd checks right to work and certificates and shows who's ready for each shift.",
    hero: { kind: "board", eyebrow: "Harbourside Food Festival", title: "Friday, 10:00 shift", rows: [{ name: "Mia Turner", sub: "Bar staff", status: "Ready", kind: "ok" }, { name: "Jon Okafor", sub: "Chef de partie", status: "Ready", kind: "ok" }, { name: "Sara Lind", sub: "Steward", status: "Share code due", kind: "pend" }] },
    week: { title: "Here's your busiest month without the chasing.", today: ["Hundreds of new staff in the two weeks before an event", "Passports and share codes sent as photos to a shared inbox", "Food hygiene and allergen training checked by hand, if at all", "A Home Office visit and nobody can find the checks"], with: ["Every new worker signs up from their phone, in their own language", "Right-to-work checks done before anyone is on the rota", "Training certificates read, and end dates tracked", "Proof for every worker, ready if anyone asks"] },
    roles: { title: "The checks each job on your rota needs.", cards: [
      { name: "Bar staff", note: "Right to work and ID, plus", items: ["Age check", "Training on selling alcohol and checking ages"] },
      { name: "Chef or kitchen porter", note: "Right to work and ID, plus", items: ["Food hygiene training", "Allergen awareness training", "Health declaration"] },
      { name: "Bar or duty manager", note: "Right to work and ID, plus", items: ["Personal licence, if they are the designated premises supervisor", "Licensing training"] },
      { name: "Event door staff", note: "Right to work and ID, plus", items: ["SIA door supervisor licence", "Event briefing record"] },
    ], footer: "Running events with different rules? Set up different checks for each venue or event." },
    rules: { title: "The rules your venues will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: "Check before anyone starts, including casual and seasonal staff. The fine can be up to £60,000 for each person working illegally.", source: SRC.rtw },
      { label: "Food hygiene law", title: "Food handler training", body: "Anyone who handles food must be supervised, and trained in food hygiene to the level their job needs.", source: SRC.food },
      { label: "Licensing Act 2003", title: "Personal licences", body: "Every venue that sells alcohol must name a supervisor (the designated premises supervisor) who holds a personal licence.", source: SRC.licensing },
    ] },
    feature: { eyebrow: "Your shifts", title: "See who is ready for every shift.", body: "Your event manager sees an up-to-date list for each shift. It shows who is cleared, who is still missing a document, and who could swap in. Workers show their pass at the staff entrance.", board: { eyebrow: "Staff entrance", title: "Saturday, 09:00 shift", rows: [{ name: "42 workers", sub: "Cleared for today", status: "Ready", kind: "ok" }, { name: "3 workers", sub: "Waiting on a document", status: "Chasing", kind: "pend" }, { name: "1 worker", sub: "Share code has run out", status: "Needs you", kind: "bad" }] } },
    start: { title: "Start with your next event.", body: "Upload your new staff from a spreadsheet. Certifyd messages each one and tells you who is ready.", outcomes: ["How many new staff were ready before day one", "Which checks got done without your team", "Every certificate, with the date it runs out", "Proof ready for every worker on the rota"] },
    faqTitle: "Questions hospitality teams ask us.",
    faqs: [
      { q: "Can we sign up 300 people in a week?", a: "Yes. Upload them from a spreadsheet. Certifyd messages each one, chases what's missing and shows you who is ready." },
      { q: "Do workers need to download an app?", a: "No. They reply on WhatsApp, text or email, and upload documents on a secure page." },
      { q: "What if a worker's first language isn't English?", a: "They can reply in their own language. You see everything in English." },
      { q: "Who pays for checks?", a: "You do. Workers never pay anything." },
    ],
    close: "Be ready for every event, not just the next one.",
  },
  {
    slug: "facilities-cleaning", sector: "fac", crumb: "Facilities and cleaning", eyebrow: "For facilities and cleaning companies",
    title: "Give every client the checks they ask for, for every worker you send.", lead: "Cleaners, porters and maintenance staff send their documents once. We check them against each client's rules and show you who can work where.",
    metaTitle: "Compliance for cleaning and facilities companies | Certifyd", metaDescription: "Cleaners, porters and maintenance staff share documents once. Certifyd checks them against each client site's rules and shows who can work where.",
    hero: { kind: "board", eyebrow: "Who can work where", title: "Monday, early shift", rows: [{ name: "Ana Silva", sub: "Cleaner · 3 sites", status: "Cleared", kind: "ok" }, { name: "Ben Hall", sub: "Porter · St Mary's School", status: "DBS in progress", kind: "pend" }, { name: "Kofi Mensah", sub: "Maintenance · HQ", status: "Cleared", kind: "ok" }] },
    week: { title: "Your next client audit, without the last-minute rush.", today: ["Each client has its own rules for checks", "Workers move between sites without the right checks", "Training records sit in different folders", "A client check means chasing your own branches"], with: ["Checks set up for each client site, so workers only see what's needed", "A clear list of who can work at each site", "COSHH (cleaning chemicals) and site training, tracked with end dates", "A file for each site, ready when a client asks"] },
    roles: { title: "The checks each job needs.", cards: [
      { name: "Cleaner", note: "Right to work and ID, plus", items: ["COSHH training", "Site induction", "Two references"] },
      { name: "School cleaner", note: "Right to work and ID, plus", items: ["DBS at the level the school asks for", "Safeguarding awareness", "Site induction"] },
      { name: "Worker at a high-security site", note: "Right to work and ID, plus", items: ["BS 7858 background check", "Five years of work history", "Basic DBS"] },
      { name: "Maintenance worker", note: "Right to work and ID, plus", items: ["Working at height training", "Asbestos awareness", "Trade cards for the work"] },
    ], footer: "Does each client want something different? Send us their rules and we'll set up each site." },
    rules: { title: "The rules your clients will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: RTW_RULE, source: SRC.rtw },
      { label: "COSHH Regulations 2002", title: "Cleaning chemicals", body: "Staff who use cleaning chemicals must be told about them, shown how to use them safely, and trained.", source: SRC.coshh },
      { label: "Keeping children safe in education", title: "Working in schools", body: "Schools in England must make sure contractors on site have been checked. So expect them to ask for DBS (criminal record) and ID checks.", source: SRC.kcsie },
    ] },
    feature: { eyebrow: "Your client sites", title: "Show each client who is cleared for their site.", body: "Each client sees the workers cleared for their site, for free, and the proof behind each check if they ask. Move a worker to a new site, and Certifyd tells you what else they need first.", board: { eyebrow: "Northgate Business Park", title: "Cleared for this site", rows: [{ name: "Ana Silva", sub: "Cleaner", status: "Cleared", kind: "ok" }, { name: "Priya Nair", sub: "Cleaner", status: "Cleared", kind: "ok" }, { name: "Sam Cole", sub: "Porter", status: "Site induction due", kind: "pend" }] } },
    start: { title: "Start with your next new contract.", body: "Add the client site, its rules and the workers you plan to send there. Certifyd chases the rest.", outcomes: ["Who is cleared for each client site", "Which checks got done without your branches", "Every training record, with the date it runs out", "A file ready for each client"] },
    faqTitle: "Questions contract managers ask us.",
    faqs: [
      { q: "Can each client have different checks?", a: "Yes. Set them for each client site, so a worker only sees what that site needs." },
      { q: "Can a worker work at more than one site?", a: "Yes. Certifyd shows which sites they're cleared for and what they need for any new one." },
      { q: "Do you handle DBS checks?", a: "Yes. We do DBS (criminal record) checks through a registered body." },
      { q: "Who decides if a worker is cleared?", a: "You do. We collect and check the proof, and a named person on your team approves them." },
    ],
    close: "Keep every worker cleared for every client's site.",
  },
  {
    slug: "platforms-subcontractors", sector: "gig", crumb: "Apps and subcontractors", eyebrow: "For apps and subcontractors",
    title: "Prove the person doing the job is the person you checked.", lead: "Since 1 October 2026, right-to-work checks also cover subcontractors and people who find work through apps. Certifyd checks every worker through a registered provider, and checks again when needed.",
    metaTitle: "Right-to-work checks for platforms and subcontractors | Certifyd", metaDescription: "From 1 October 2026 right-to-work checks reach subcontractors and platform workers. Certifyd checks every worker through a registered provider.",
    hero: { kind: "board", eyebrow: "Your chain of companies", title: "Taken on through Swift Logistics", rows: [{ name: "Dev Patel", sub: "Courier · started 2 Oct", status: "Checked", kind: "ok" }, { name: "Lena Kraus", sub: "Courier · substitute", status: "Photo check due", kind: "pend" }, { name: "Omar Haddad", sub: "Courier · started 14 Oct", status: "Checked", kind: "ok" }] },
    week: { title: "Sign up lots of workers, without the risk.", today: ["Thousands of self-employed workers to check, often in one week", "Accounts shared with, or handed over to, someone else", "Checks done once at sign-up and never again", "Nobody is sure which company did the check"], with: ["Right-to-work and ID checks through a registered provider, when they sign up", "Each worker's pass shows their photo to whoever meets them at the job", "End dates tracked, with new checks sent before time runs out", "A record of which company checked each worker"] },
    roles: { title: "The checks every worker on your app needs.", cards: [
      { name: "Courier or delivery driver", note: "Right to work and ID, plus", items: ["Driving licence check", "Insurance for paid deliveries (hire and reward)", "Vehicle details"] },
      { name: "Self-employed tradesperson", note: "Right to work and ID, plus", items: ["Trade card for the work", "Public liability insurance"] },
      { name: "Care or cleaning worker", note: "Right to work and ID, plus", items: ["DBS where the work needs it", "References", "Training records"] },
      { name: "Substitute", note: "Before they start", items: ["Right to work, checked", "Photo ID matched to the person", "Added to your records"] },
    ], footer: "Different jobs on your app need different checks? Set them for each type of job." },
    rules: { title: "The rules that changed on 1 October 2026.", cards: [
      { label: "Immigration law", title: "Apps that match people to work", body: "Right-to-work checks now cover people who find work through apps and websites. This applies to work that starts on or after 1 October 2026.", source: SRC.rtw },
      { label: "Immigration law", title: "Subcontractors and substitutes", body: "Self-employed subcontractors are now covered too, and companies higher up the chain can be held responsible. No substitute should start before their right to work is checked.", source: SRC.rtw },
      { label: "Fines", title: "Up to £60,000 per worker", body: "Up to £45,000 for each person working illegally the first time, and up to £60,000 if it happens again.", source: SRC.rtw },
    ] },
    feature: { eyebrow: "Your chain", title: "See who checked each worker, across every subcontractor.", body: "Each worker's file shows which company took them on, which checks were done, by which provider and when. You can share this with the companies above you in the chain, without sharing the documents.", board: { eyebrow: "Chain of companies", title: "Who checked each worker", rows: [{ name: "Swift Logistics", sub: "Took on 214 workers directly", status: "Checks on file", kind: "ok" }, { name: "Northway Couriers", sub: "Subcontractor · 38 workers", status: "2 new checks due", kind: "warn" }] } },
    start: { title: "Start with your next group of new workers.", body: "Upload a list of workers. Certifyd checks each one and tells you who can start.", outcomes: ["How many workers were cleared when they signed up", "Substitutes checked before they started", "Every worker whose permission to work ends, with the date to check again", "A record ready for the companies you work with"] },
    faqTitle: "Questions operations and safety teams ask us.",
    faqs: [
      { q: "Can you check lots of workers at once?", a: "Yes. Upload a list. Certifyd checks each worker and chases anything missing." },
      { q: "Are the checks done by a registered provider?", a: "Yes. Online right-to-work and ID checks go through a provider registered with the government." },
      { q: "How do you handle substitutes?", a: "A substitute gets their own invite, and must pass the right-to-work check before they start." },
      { q: "Do workers need an app?", a: "No. They reply on WhatsApp, text or email, and upload documents on a secure page." },
    ],
    close: "Keep a clear record of every worker, and anyone who covers for them.",
  },
  {
    slug: "construction", sector: "con", crumb: "Construction subcontractors", eyebrow: "For construction labour suppliers",
    title: "Check every worker's cards before they get to site.", lead: "We collect CSCS cards, trade cards and right to work from every worker, and check them before day one. Main contractors see who is cleared before anyone travels.",
    metaTitle: "CSCS and right-to-work checks for labour suppliers | Certifyd", metaDescription: "CSCS cards, trade tickets and right to work checked for every operative before day one, so main contractors know who is cleared before anyone travels.",
    hero: { kind: "board", eyebrow: "Wakefield site", title: "Monday, 07:00 start", rows: [{ name: "Callum Ross", sub: "Groundworker", status: "CSCS valid", kind: "ok" }, { name: "Ivan Petrov", sub: "Plant operator", status: "CPCS valid", kind: "ok" }, { name: "Josh Webb", sub: "Scaffolder", status: "CISRS due", kind: "warn" }] },
    week: { title: "Monday morning, with no surprises at the gate.", today: ["Photos of CSCS cards arrive by text the night before", "Out-of-date cards found at the gate", "Every main contractor wants a different format", "Nobody checks right to work for subcontracted workers, because each company thinks the other did"], with: ["Cards checked before a worker is booked", "Reminders before any card runs out", "The main contractor sees who's cleared before Monday", "Right-to-work checks for every worker, including subcontractors"] },
    roles: { title: "The cards each trade needs.", cards: [
      { name: "Labourer or groundworker", note: "Right to work and ID, plus", items: ["CSCS labourer card", "Site induction"] },
      { name: "Plant operator", note: "Right to work and ID, plus", items: ["CPCS or NPORS card for the machine", "Site induction"] },
      { name: "Scaffolder", note: "Right to work and ID, plus", items: ["CISRS card", "Working at height training"] },
      { name: "Electrician", note: "Right to work and ID, plus", items: ["ECS card", "Trade qualification"] },
    ], footer: "Does each main contractor ask for something different? Set up checks for each contractor or site." },
    rules: { title: "The rules your main contractor will ask about.", cards: [
      { label: "Immigration law", title: "Right to work", body: "Since 1 October 2026, checks also cover self-employed subcontractors, and companies higher up the chain can be held responsible. The fine can be up to £60,000 for each person working illegally.", source: SRC.rtw },
      { label: "CDM Regulations 2015", title: "Competence and induction", body: "Everyone on site needs the skills, training and experience for their job, and a site induction (a safety briefing for that site).", source: SRC.cdm },
      { label: "Site card schemes", title: "CSCS and partner cards", body: "Most big sites ask every worker for a CSCS card, or a card from a partner scheme. The industry asks for this. It isn't the law." },
    ] },
    feature: { eyebrow: "Your main contractors", title: "Only send workers who are cleared for the site.", body: "We don't sell gates or turnstiles. We check workers before they travel and tell the main contractor who's cleared. So the site team already knows who is coming.", board: { eyebrow: "Shared with main contractor", title: "Wakefield site · Monday", rows: [{ name: "12 workers", sub: "Cards and right to work checked", status: "Sent", kind: "ok" }, { name: "2 workers", sub: "Card renewal in progress", status: "Held back", kind: "pend" }] } },
    start: { title: "Start with next week's workers.", body: "Add the site and the workers you plan to send. Certifyd checks their cards and right to work before Monday.", outcomes: ["Workers cleared before they travelled", "Cards renewed before they ran out", "Every card, with the date it runs out", "Proof ready for every main contractor"] },
    faqTitle: "Questions labour suppliers ask us.",
    faqs: [
      { q: "Do you replace site turnstiles?", a: "No. We check people before they arrive and share their status with the main contractor." },
      { q: "Which cards can you check?", a: "CSCS and partner scheme cards, plus trade cards like CPCS, NPORS and CISRS. We read each card, and check it with the card scheme where we can." },
      { q: "Can our own subcontractors use it?", a: "Yes. Invite them, and you'll see their workers in your list too." },
      { q: "Who pays?", a: "You do. Workers never pay anything." },
    ],
    close: "Keep every worker's cards up to date, on every site.",
  },
];

export const getSegment = (slug: string) => SEGMENTS.find((s) => s.slug === slug);

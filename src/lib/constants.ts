import type { NavItem, TeamMember, StoryCard, TrustCategory } from "@/types";

/**
 * Hero graphic tilt classes — change these to adjust rotation site-wide.
 * "left" tilts anticlockwise, "right" tilts clockwise.
 * QRScanGraphic uses the "phone" variants for its larger overlapping mockups.
 */
export const GRAPHIC_TILT = {
  left: "group-hover:-rotate-1 transition-transform duration-500 ease-out",
  right: "group-hover:rotate-1 transition-transform duration-500 ease-out",
  phoneBack: "group-hover:-rotate-3 transition-transform duration-500",
  phoneFront: "group-hover:rotate-1 transition-transform duration-500",
} as const;

export const COMPANY = {
  name: "Certifyd",
  tagline: "The identity layer for businesses that can't afford to get it wrong.",
  email: "team@certifyd.io",
  address: "Aldwych House, 71-91 Aldwych, London, England WC2B 4HN",
  linkedin: "https://www.linkedin.com/company/thinkcertifyd/",
  website: "https://www.certifyd.io",
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    href: "/solutions",
    children: [
      { label: "Certify That Person", href: "/solutions/person/", description: "Two-way identity verification in 30 seconds" },
      { label: "Certify That Business", href: "/solutions/business/", description: "Verify the organisations behind the people" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/", description: "One-click compliance reports" },
      { label: "Security & Trust", href: "/security/", description: "How we protect your data" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "Sectors",
        href: "/industries",
        children: [
          { label: "Recruitment", href: "/industries/recruitment/" },
          { label: "Trades & Home Access", href: "/industries/trades/" },
          { label: "Care", href: "/industries/care/" },
          { label: "Workforce", href: "/industries/workforce/" },
        ],
      },
      {
        label: "Roles",
        href: "/for/cleaners/",
        children: [
          { label: "Cleaners", href: "/for/cleaners/" },
          { label: "Electricians", href: "/for/electricians/" },
          { label: "Plumbers", href: "/for/plumbers/" },
          { label: "Builders", href: "/for/builders/" },
          { label: "Care Workers", href: "/for/care-workers/" },
          { label: "Security Guards", href: "/for/security-guards/" },
          { label: "Delivery Drivers", href: "/for/delivery-drivers/" },
          { label: "Temp Workers", href: "/for/temp-workers/" },
          { label: "Warehouse Workers", href: "/for/warehouse-workers/" },
          { label: "Hospitality Staff", href: "/for/hospitality-staff/" },
          { label: "Agency Nurses", href: "/for/agency-nurses/" },
          { label: "Remote Workers", href: "/for/remote-workers/" },
        ],
      },
      {
        label: "Business Types",
        href: "/for/recruitment-agencies/",
        children: [
          { label: "Recruitment Agencies", href: "/for/recruitment-agencies/" },
          { label: "Care Homes", href: "/for/care-homes/" },
          { label: "Staffing Agencies", href: "/for/staffing-agencies/" },
          { label: "Cleaning Companies", href: "/for/cleaning-companies/" },
          { label: "Facilities Management", href: "/for/facilities-management/" },
          { label: "Hospitality Businesses", href: "/for/hospitality-businesses/" },
          { label: "Trade Platforms", href: "/for/trade-platforms/" },
          { label: "Domiciliary Care", href: "/for/domiciliary-care/" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    href: "/for/right-to-work-checks/",
    children: [
      {
        label: "Compliance",
        href: "/for/right-to-work-checks/",
        children: [
          { label: "Right to Work", href: "/for/right-to-work-checks/" },
          { label: "FWA Compliance", href: "/for/fwa-compliance/" },
          { label: "Contractor Verification", href: "/for/contractor-verification/" },
          { label: "Agency Worker Compliance", href: "/for/agency-worker-compliance/" },
        ],
      },
      {
        label: "Threats",
        href: "/for/deepfakes/",
        children: [
          { label: "Deepfakes", href: "/for/deepfakes/" },
          { label: "CEO Fraud", href: "/for/ceo-fraud/" },
          { label: "Romance Scams", href: "/for/romance-scams/" },
          { label: "Social Engineering", href: "/for/social-engineering/" },
          { label: "Phishing", href: "/for/phishing/" },
          { label: "Voice Cloning", href: "/for/voice-cloning/" },
        ],
      },
      {
        label: "Safeguarding",
        href: "/for/safeguarding/",
        children: [
          { label: "School Pickups", href: "/for/school-pickups/" },
          { label: "Protecting Elderly Parents", href: "/for/protecting-elderly-parents/" },
          { label: "Lone Workers", href: "/for/lone-workers/" },
          { label: "Safeguarding", href: "/for/safeguarding/" },
        ],
      },
      {
        label: "Scenarios",
        href: "/for/online-dating/",
        children: [
          { label: "Online Dating", href: "/for/online-dating/" },
          { label: "Estate Agent Viewings", href: "/for/estate-agent-viewings/" },
          { label: "Airbnb", href: "/for/airbnb/" },
          { label: "Nannies & Au Pairs", href: "/for/nannies-au-pairs/" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/blog/",
    children: [
      { label: "Blog", href: "/blog/", description: "Insights on identity, trust, and compliance" },
      { label: "Getting Started", href: "/onboarding/person/", description: "Set up Certifyd for individuals or organisations" },
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Andrew Speer",
    photo: "/team/Andrew Speer.jpg",
    title: "Co-Founder & CEO",
    description:
      "15+ years building and scaling revenue operations across the UK, US, and EMEA. Andrew brings enterprise sales expertise and a track record of turning complex problems into simple, scalable solutions.",
    linkedin: "https://www.linkedin.com/in/speerandrew/",
  },
  {
    name: "Jason Shubrook",
    photo: "/team/Jason Shubrook.jpg",
    title: "Co-Founder & CTO",
    description:
      "20+ years designing real-time distributed systems for the world's largest financial institutions. Jason builds the kind of infrastructure that doesn't go down — and still writes code.",
    linkedin: "https://www.linkedin.com/in/jason-shubrook-654b194/",
  },
  {
    name: "Michael Neligan",
    photo: "/team/Michael Neligan.jpg",
    title: "Co-Founder & CCO",
    description:
      "10+ years building and scaling digital products from zero to millions of users. Michael knows how to take a product to market and make it stick.",
    linkedin: "https://www.linkedin.com/in/michaelneligan/",
  },
];

export const FOUR_STORIES: StoryCard[] = [
  {
    title: "The Hire",
    story:
      'A recruiter asks "Right to work?" The candidate says "Yes." Three weeks of interviews later — graduate visa, needs £20k sponsorship. Or start over.',
    stat: "Up to £60,000 civil penalty per illegal worker.",
    statHighlight: "\u00a360,000",
    statSubtitle: "civil penalty per illegal worker",
    href: "/industries/recruitment/",
  },
  {
    title: "The Tradesperson",
    story:
      "A homeowner finds a builder online. He knows where she lives, what's in her home, when she's out. She knows nothing about him. He sends his mate instead. No one checks.",
    stat: "Zero regulation for tradespeople entering your home.",
    statHighlight: "Zero",
    statSubtitle: "regulation for tradespeople entering your home",
    href: "/industries/trades/",
  },
  {
    title: "The Care Home",
    story:
      "Rotating agency staff cover nights and weekends. Families have no idea who's looking after their parent. A staff member gives a false name. Nobody checked.",
    stat: "39% of safeguarding concerns involve staff or volunteers.",
    statHighlight: "39%",
    statSubtitle: "of safeguarding concerns involve staff or volunteers",
    href: "/industries/care/",
  },
  {
    title: "The Temp",
    story:
      '5 agency workers arrive for the week. One says "Dave couldn\'t make it — I\'m covering." He gets a lanyard and building access. Nobody checks. Nobody can.',
    stat: "1.1M temporary workers in the UK. Most unverified.",
    statHighlight: "1.1M",
    statSubtitle: "temporary workers \u2014 most unverified",
    href: "/industries/workforce/",
  },
];

export const TRUST_CATEGORIES: TrustCategory[] = [
  {
    badge: "Recruitment",
    statHighlight: "\u00a360,000",
    statSubtitle: "civil penalty per illegal worker",
    story:
      'A recruiter asks "Right to work?" The candidate says "Yes." Three weeks of interviews later \u2014 graduate visa, needs \u00a320k sponsorship. Or start over.',
    href: "/industries/recruitment/",
  },
  {
    badge: "Trades",
    statHighlight: "Zero",
    statSubtitle: "regulation for tradespeople entering your home",
    story:
      "A homeowner finds a builder online. He knows where she lives, what\u2019s in her home, when she\u2019s out. She knows nothing about him. He sends his mate instead.",
    href: "/industries/trades/",
  },
  {
    badge: "Care",
    statHighlight: "39%",
    statSubtitle: "of safeguarding concerns involve staff or volunteers",
    story:
      "Rotating agency staff cover nights and weekends. Families have no idea who\u2019s looking after their parent. A staff member gives a false name. Nobody checked.",
    href: "/industries/care/",
  },
  {
    badge: "Workforce",
    statHighlight: "1.1M",
    statSubtitle: "temporary workers \u2014 most unverified",
    story:
      '5 agency workers arrive for the week. One says "Dave couldn\'t make it \u2014 I\'m covering." He gets a lanyard and building access. Nobody checks.',
    href: "/industries/workforce/",
  },
  {
    badge: "Threats",
    statHighlight: "$25M",
    statSubtitle: "stolen via a single deepfake video call",
    story:
      "A finance officer joins a video call with his CFO and colleagues. Everyone looks real. Everyone sounds real. None of them are. \u00a320 million transferred before anyone noticed.",
    href: "/for/deepfakes/",
  },
  {
    badge: "Safeguarding",
    statHighlight: "3.2M",
    statSubtitle: "over-65s targeted by doorstep fraud each year",
    story:
      "A man in a high-vis jacket knocks on your elderly parent\u2019s door. Says he\u2019s from the council. He\u2019s not. They let him in because he looked official.",
    href: "/for/protecting-elderly-parents/",
  },
];

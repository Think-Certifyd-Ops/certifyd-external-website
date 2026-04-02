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
    label: "Solutions",
    href: "/products",
    children: [
      { label: "Certifyd Portal", href: "/products/portal/", description: "Right to Work compliance for SMEs" },
      { label: "Certifyd Screen", href: "/products/verify/", description: "Pre-meeting identity verification" },
      { label: "Certifyd Sentinel", href: "/products/sentinel/", description: "Compliant meeting recording & AI monitoring" },
      { label: "Certifyd CodeWords", href: "/products/codewords/", description: "Corporate verification codes" },
      { label: "Certifyd ID", href: "/products/id/", description: "Two-way identity verification between two people" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Recruitment", href: "/industries/recruitment/", description: "Identity verification for recruiters and staffing agencies" },
      { label: "Trades & Home Access", href: "/industries/trades/", description: "Verify tradespeople before they enter your home" },
      { label: "Care", href: "/industries/care/", description: "Compliance and safeguarding for care providers" },
      { label: "Workforce", href: "/industries/workforce/", description: "Right to Work and contractor compliance at scale" },
    ],
  },
  {
    label: "Resources",
    href: "/blog/",
    children: [
      { label: "Blog", href: "/blog/", description: "Insights on identity, trust, and compliance" },
      { label: "Security & Trust", href: "/security/", description: "How we protect your data" },
      { label: "Identity Intelligence (3I)", href: "/3i/", description: "GPU-powered graph intelligence engine" },
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

/**
 * Google Ads conversion labels for gtag send_to parameter.
 * Populated after running POST /api/google-ads/conversions.
 * Format: "AW-XXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXX"
 * Set to empty strings until conversion actions are created.
 */
export const GOOGLE_ADS_CONVERSIONS = {
  demoRequest: "AW-18037838481/hutaCMK4z44cEJGljplD", // "Website - Demo Request" — £50 value
  leadMagnet: "AW-18037838481/R-NnCKrB144cEJGljplD", // "Website - Lead Magnet" — £10 value
  waitlistSignup: "AW-18037838481/1BYGCMW4z44cEJGljplD", // "Website - Waitlist Signup" — £5 value
} as const;

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

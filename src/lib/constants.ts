import type { NavItem, TeamMember, StoryCard } from "@/types";

export const COMPANY = {
  name: "Certifyd",
  tagline: "The identity layer for businesses that can't afford to get it wrong.",
  email: "team@certifyd.io",
  address: "Aldwych House, 71-91 Aldwych, London, England WC2B 4HN",
  linkedin: "https://www.linkedin.com/company/thinkcertifyd/",
  website: "https://www.certifyd.io",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
      { label: "Audit-Ready Compliance", href: "/solutions/compliance/" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Recruitment", href: "/industries/recruitment/" },
      { label: "Trades", href: "/industries/trades/" },
      { label: "Care Homes", href: "/industries/care/" },
      { label: "Workforce", href: "/industries/workforce/" },
    ],
  },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
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
    href: "/industries/recruitment/",
  },
  {
    title: "The Tradesperson",
    story:
      "A homeowner finds a builder online. He knows where she lives, what's in her home, when she's out. She knows nothing about him. He sends his mate instead. No one checks.",
    stat: "Zero regulation for tradespeople entering your home.",
    href: "/industries/trades/",
  },
  {
    title: "The Care Home",
    story:
      "Rotating agency staff cover nights and weekends. Families have no idea who's looking after their parent. A staff member gives a false name. Nobody checked.",
    stat: "39% of safeguarding concerns involve staff or volunteers.",
    href: "/industries/care/",
  },
  {
    title: "The Temp",
    story:
      '5 agency workers arrive for the week. One says "Dave couldn\'t make it — I\'m covering." He gets a lanyard and building access. Nobody checks. Nobody can.',
    stat: "1.1M temporary workers in the UK. Most unverified.",
    href: "/industries/workforce/",
  },
];

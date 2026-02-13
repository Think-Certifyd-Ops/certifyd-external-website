import type { ForPage } from "./types";

export const SCENARIO_PAGES: ForPage[] = [
  /* ─────────────────────────────────────────────────────
     ONLINE DATING
     ───────────────────────────────────────────────────── */
  {
    slug: "online-dating",
    category: "scenario",
    parentIndustry: "trades",
    title: "Certifyd for Online Dating",
    metaTitle: "Identity Verification for Online Dating",
    metaDescription:
      "Online dating profiles can be completely fake. Verify that the person you\u2019re meeting is who they claim to be \u2014 before you meet them.",
    badge: "Online Dating",
    headline: "You\u2019ve Swiped Right. But Who Are They Really?",
    subtitle:
      "Online dating profiles can be fabricated with stolen photos, AI-generated faces, and invented biographies. Certifyd lets you verify the other person\u2019s identity before you meet \u2014 cryptographically, not just visually.",
    heroCard: { name: "Jessica Taylor", company: "Verified User" },
    searchIntentParagraph:
      "Identity verification for online dating with Certifyd provides cryptographic proof that the person behind the profile is real. Dating apps rely on photo verification, phone number linking, and social media connections \u2014 all of which can be faked with AI-generated images, burner phones, and fake accounts. Certifyd\u2019s device-bound authentication ties a person\u2019s identity to their physical device through a WebAuthn passkey. Before meeting someone in person, you can request mutual Certifyd verification. If they can\u2019t verify, the profile isn\u2019t what it seems.",
    stats: [
      { value: "10M+", label: "UK adults use online dating" },
      { value: "\u00a331M", label: "annual UK romance scam losses" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Over 10 million UK adults use online dating apps. Most have had the experience of arriving at a date only to find the person looks nothing like their photos. At the mild end, this is catfishing \u2014 misleading photos and embellished profiles. At the serious end, it\u2019s criminal fraud, with romance scams costing UK victims over \u00a331 million annually.",
      "Dating apps have introduced photo verification, video calls, and social media linking to combat fake profiles. But AI-generated photos now pass photo verification checks. Deepfake video calls can impersonate anyone in real time. And fake social media accounts are trivially easy to create. The verification methods that apps use are being outpaced by the technology that fakers use.",
      "Certifyd provides a fundamentally stronger verification: device-bound cryptographic identity. The person\u2019s identity is tied to their physical phone through a passkey. No AI can generate a passkey. No catfish can borrow someone else\u2019s device. Before meeting someone, you can request mutual Certifyd verification. Both parties prove their identity cryptographically. It\u2019s the difference between trusting a profile picture and trusting a cryptographic proof.",
    ],
    problems: [
      "AI-generated profile photos now pass dating app photo verification checks.",
      "Catfishing and identity misrepresentation are endemic on dating platforms.",
      "Romance scams use fake identities to build emotional connections and extract money.",
      "Meeting strangers from the internet without verified identity creates personal safety risks.",
    ],
    steps: [
      "Before meeting, both people open Certifyd and request mutual verification",
      "Each person completes a device-bound passkey authentication on their registered phone",
      "Both identities are cryptographically confirmed \u2014 real people, real devices, real names",
      "A verification record is created, and both parties know who they\u2019re actually meeting",
    ],
    faqs: [
      {
        question: "How would I ask someone to verify on a dating app?",
        answer:
          "Frame it positively: \u2018Before we meet up, let\u2019s both verify on Certifyd \u2014 just so we both know we\u2019re real.\u2019 Making it mutual removes any accusatory tone. In an era where catfishing and romance scams are common, requesting verification is increasingly seen as a sensible precaution, not an insult. A genuine person will welcome it. Someone who refuses is showing you what you need to know.",
      },
      {
        question: "Don\u2019t dating apps already verify profiles?",
        answer:
          "Some dating apps offer photo verification (comparing a selfie to profile photos) or phone number linking. But AI-generated photos can match selfie prompts, phone numbers can be spoofed with burner SIMs, and social media accounts can be fabricated. These measures verify surface-level signals, not identity. Certifyd uses device-bound cryptographic authentication \u2014 a fundamentally stronger proof that the person is who they claim to be.",
      },
      {
        question: "Is this just for first dates?",
        answer:
          "Certifyd verification is most valuable before the first in-person meeting \u2014 the highest-risk point in online dating. But it\u2019s also useful in the early stages of any online relationship: before sharing personal information, before sending photos, and certainly before sending money. Early verification prevents emotional investment in a fictional identity.",
      },
      {
        question: "Could dating apps integrate Certifyd?",
        answer:
          "Yes. Dating platforms could offer Certifyd verification as a trust badge on profiles \u2014 visible proof that a user has completed device-bound cryptographic identity verification. This is fundamentally more trustworthy than existing verification methods. For platforms competing on user safety, Certifyd integration would provide the strongest identity assurance available.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Romance Scams", slug: "romance-scams" },
      { label: "Certifyd for Deepfakes", slug: "deepfakes" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
      { label: "The Deepfake Playbook", href: "/blog/deepfake-playbook/" },
    ],
    relatedResources: [
      {
        label: "Action Fraud \u2014 Dating Fraud",
        href: "https://www.actionfraud.police.uk/a-z-of-fraud/dating-fraud",
        external: true,
      },
    ],
    ctaTitle: "Verify before you meet",
    ctaSecondaryLabel: "Read: The Trust Layer That\u2019s Missing",
    ctaSecondaryHref: "/blog/trust-layer-missing/",
  },

  /* ─────────────────────────────────────────────────────
     ESTATE AGENT VIEWINGS
     ───────────────────────────────────────────────────── */
  {
    slug: "estate-agent-viewings",
    category: "scenario",
    parentIndustry: "trades",
    title: "Certifyd for Estate Agent Viewings",
    metaTitle: "Identity Verification for Estate Agent Viewings",
    metaDescription:
      "Estate agents meet strangers alone in empty properties. Verify the identity of both parties before every viewing with Certifyd.",
    badge: "Estate Agent Viewings",
    headline: "An Empty Property. A Stranger. No One Else Around.",
    subtitle:
      "Estate agents conduct viewings alone in empty properties with people they\u2019ve never met. Certifyd verifies the identity of both the agent and the viewer before every appointment.",
    heroCard: { name: "Michael Shaw", company: "Shaw Properties" },
    searchIntentParagraph:
      "Identity verification for estate agent viewings protects both the agent and the viewer. Certifyd uses bi-directional authentication \u2014 both parties cryptographically prove their identity to each other before or at the point of meeting. The estate agent confirms the viewer is who they booked as, and the viewer confirms the agent is genuinely from the estate agency. This creates a verified meeting record: who met whom, when, and where \u2014 critical for personal safety and professional accountability.",
    stats: [
      { value: "1.2M", label: "UK property transactions annually" },
      { value: "85%", label: "of viewings are conducted by lone agents" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Estate agents are classic lone workers. They meet unknown people in empty properties, often alone, multiple times per day. The viewer booked online or by phone \u2014 the agent knows their name and nothing else. The risk is real: agents have been assaulted, robbed, and worse during viewings. The National Association of Estate Agents has repeatedly highlighted personal safety as a sector concern.",
      "The risk runs both ways. Viewers also meet strangers claiming to be estate agents in properties they don\u2019t own. Fake estate agent scams \u2014 where criminals impersonate agents to collect deposits or gain access to properties \u2014 are a growing problem. The viewer has no way to verify that the person with the keys genuinely works for the agency.",
      "Certifyd\u2019s bi-directional verification solves both sides. Before the viewing, both parties verify through their device-bound passkeys. The agent confirms the viewer\u2019s identity. The viewer confirms the agent is a genuine, current member of the estate agency. A verification record is created for every viewing. For agents, this is both a safety tool and a professional differentiator.",
    ],
    problems: [
      "Agents meet unknown people alone in empty properties with no independent identity verification.",
      "Viewers meet people claiming to be agents with no way to verify they genuinely represent the agency.",
      "Fake estate agent scams involve impersonating agents to collect deposits or access properties.",
      "When incidents occur during viewings, there\u2019s often no verifiable record of who was present.",
    ],
    steps: [
      "Before the viewing, both the agent and the viewer open Certifyd and verify through their devices",
      "The agent\u2019s identity and agency membership are cryptographically confirmed to the viewer",
      "The viewer\u2019s identity is cryptographically confirmed to the agent",
      "A tamper-proof record is created: who met whom, when, and at which property",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "How does Certifyd protect estate agents during viewings?",
        answer:
          "Certifyd verifies the viewer\u2019s identity before the viewing begins. The agent knows exactly who they\u2019re meeting, with a cryptographic record of the viewer\u2019s verified identity. If a viewer can\u2019t or won\u2019t verify, the agent has grounds to refuse the viewing or bring a colleague. Every viewing creates a tamper-proof record of who was present \u2014 a deterrent against bad actors and evidence if an incident occurs.",
      },
      {
        question: "How does it protect property viewers?",
        answer:
          "Fake estate agent scams are a growing problem. Viewers hand over deposits to people who don\u2019t work for the agency, or attend viewings with people who have obtained keys illegitimately. Certifyd verification confirms that the person at the property is a current, active member of the estate agency. If they can\u2019t verify, the viewer knows not to proceed \u2014 and certainly not to hand over money.",
      },
      {
        question: "Can estate agencies use Certifyd across their team?",
        answer:
          "Yes. The estate agency registers as an Organisation on Certifyd and adds each agent as a member. When any agent conducts a viewing, they verify through their device-bound identity, confirming they are a current member of the agency. This works across branches, teams, and individual agents \u2014 providing a consistent verification standard for every viewing.",
      },
      {
        question: "Is this practical for multiple viewings per day?",
        answer:
          "Absolutely. Verification takes 30 seconds. An agent conducting 8 viewings per day adds 4 minutes of verification time total. In return, every viewing has a verified identity record for both parties. For agencies concerned about agent safety and professional liability, this is a minimal time investment for significant protection.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Lone Workers", slug: "lone-workers" },
      { label: "Certifyd for Airbnb", slug: "airbnb" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
    ],
    relatedResources: [
      {
        label: "Propertymark \u2014 Agent Safety",
        href: "https://www.propertymark.co.uk/",
        external: true,
      },
    ],
    ctaTitle: "Verify every viewing \u2014 for agents and viewers",
    ctaSecondaryLabel: "Read: Two-Way Verification Explained",
    ctaSecondaryHref: "/blog/two-way-verification-explained/",
  },

  /* ─────────────────────────────────────────────────────
     AIRBNB
     ───────────────────────────────────────────────────── */
  {
    slug: "airbnb",
    category: "scenario",
    parentIndustry: "trades",
    title: "Certifyd for Airbnb",
    metaTitle: "Identity Verification for Airbnb Hosts & Guests",
    metaDescription:
      "Airbnb hosts hand keys to strangers. Guests enter homes owned by strangers. Verify both parties\u2019 identity before check-in with Certifyd.",
    badge: "Airbnb",
    headline: "You\u2019re Giving a Stranger the Keys to Your Home. Who Are They?",
    subtitle:
      "Short-term rental hosts give strangers access to their homes. Guests enter properties owned by strangers. Certifyd verifies both parties\u2019 identity before the keys change hands.",
    heroCard: { name: "Chris Walker", company: "Property Host" },
    searchIntentParagraph:
      "Identity verification for short-term rentals with Certifyd provides cryptographic proof that both the host and the guest are who they claim to be. Platform verification checks that an account exists \u2014 it doesn\u2019t verify who actually shows up at the property. Certifyd uses bi-directional, device-bound authentication: both parties verify through their registered devices at the point of check-in. The host knows the guest\u2019s verified identity before handing over keys. The guest knows the host is the legitimate property owner. Every stay creates a tamper-proof record.",
    stats: [
      { value: "300K+", label: "UK short-term rental listings" },
      { value: "\u00a35.4B", label: "UK short-term rental market value" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK short-term rental market has grown to over 300,000 listings worth \u00a35.4 billion annually. Hosts routinely hand keys to strangers they\u2019ve never met, giving them unsupervised access to their property, belongings, and neighbours. Guests enter properties owned by strangers, trusting that the listing is legitimate and the host is who they claim to be.",
      "Platform verification on Airbnb, Booking.com, and similar sites checks that an account holder provided a government ID at some point. It does not verify that the person who arrives at the property is the account holder. Accounts can be shared, borrowed, or created with fraudulent documents. Reviews belong to the account, not the person. A five-star account may have changed hands without the platform knowing.",
      "For hosts, Certifyd verifies the guest\u2019s identity at check-in through device-bound authentication. For guests, it verifies the host or the host\u2019s representative is a genuine, authorised person. This mutual verification creates trust that platform reviews alone cannot provide \u2014 and a tamper-proof record of who stayed at the property, which is increasingly important for insurance claims, neighbour disputes, and regulatory compliance.",
    ],
    problems: [
      "Hosts hand keys to strangers whose identity is verified by a platform account, not in person.",
      "Guests enter properties with no way to verify the host is who the listing claims.",
      "Platform accounts can be shared, borrowed, or created with fraudulent documents.",
      "When damage or incidents occur, the person responsible may not be the person on the booking.",
    ],
    steps: [
      "Before check-in, both host and guest open Certifyd and verify through their registered devices",
      "Each person\u2019s identity is cryptographically confirmed \u2014 bi-directional, not one-way",
      "The host sees the guest\u2019s verified identity; the guest sees the host\u2019s verified identity",
      "A tamper-proof record is created: who checked in, when, and at which property",
    ],
    faqs: [
      {
        question: "How does Certifyd work with self-check-in?",
        answer:
          "For self-check-in properties (key boxes, smart locks), the guest can verify through Certifyd before receiving the access code. The host sends the code only after the guest\u2019s identity has been cryptographically confirmed. This provides the convenience of self-check-in with the security of identity verification. The host knows who has their access code without needing to be physically present.",
      },
      {
        question: "Does this replace Airbnb\u2019s own verification?",
        answer:
          "No. Airbnb\u2019s verification checks that an account holder provided a government ID at registration. Certifyd adds real-time identity verification at the point of stay. The two are complementary: Airbnb verifies the account, Certifyd verifies the person who actually shows up. This is particularly valuable when someone other than the account holder checks in (a partner, family member, or friend using the booker\u2019s account).",
      },
      {
        question: "Can property managers use Certifyd across multiple listings?",
        answer:
          "Yes. Property managers can register as an Organisation on Certifyd and add each listing. Guests verify at each property, and the manager receives a centralised verification record across all listings. This is valuable for professional hosts managing 10, 50, or 100+ properties who need consistent identity verification without being physically present at each check-in.",
      },
      {
        question: "Is this useful for insurance and disputes?",
        answer:
          "Yes. Short-term rental insurance claims and neighbour disputes often hinge on who was actually staying at the property. Certifyd\u2019s tamper-proof verification records provide evidence that a specific, identified person was present at a specific time. This is stronger evidence than a platform booking confirmation (which shows who booked, not who stayed).",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Estate Agent Viewings", slug: "estate-agent-viewings" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
      { label: "Certifyd for Cleaners", slug: "cleaners" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
      { label: "The Identity Verification Gap", href: "/blog/identity-verification-gap/" },
    ],
    relatedResources: [
      {
        label: "UK Government \u2014 Short-Term Lets Registration",
        href: "https://www.gov.uk/government/consultations/developing-a-tourist-accommodation-registration-scheme-in-england",
        external: true,
      },
    ],
    ctaTitle: "Verify guests before they get the keys",
    ctaSecondaryLabel: "Read: The Identity Verification Gap",
    ctaSecondaryHref: "/blog/identity-verification-gap/",
  },

  /* ─────────────────────────────────────────────────────
     NANNIES & AU PAIRS
     ───────────────────────────────────────────────────── */
  {
    slug: "nannies-au-pairs",
    category: "scenario",
    parentIndustry: "care",
    title: "Certifyd for Nannies & Au Pairs",
    metaTitle: "Identity Verification for Nannies & Au Pairs",
    metaDescription:
      "Nannies and au pairs have unsupervised access to your children. Verify their identity and employer affiliation in real time with Certifyd.",
    badge: "Nannies & Au Pairs",
    headline: "They\u2019re Alone with Your Children. Do You Really Know Who They Are?",
    subtitle:
      "Nannies and au pairs have unsupervised access to your children, your home, and your family\u2019s routine. Certifyd verifies their identity and agency affiliation \u2014 not just on day one, but every day.",
    heroCard: { name: "Anna Kovacs", company: "Verified Nanny" },
    searchIntentParagraph:
      "Identity verification for nannies and au pairs addresses one of the highest-trust relationships in domestic life. Certifyd uses bi-directional authentication \u2014 both the family and the nanny or au pair cryptographically prove their identity to each other. When the nanny arrives, the system verifies not just who they are, but that they hold an active membership with the agency that placed them (if applicable) and are the specific person the family authorised. The result is a tamper-proof, auditable record of every arrival \u2014 proof of who was with your children.",
    stats: [
      { value: "120K+", label: "nannies working in the UK" },
      { value: "0", label: "mandatory registration or licensing for nannies" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "Nannying is entirely unregulated in the UK. There is no mandatory register of nannies, no licensing requirement, and no legal obligation for identity verification beyond basic right-to-work checks. Ofsted\u2019s voluntary register for nannies is exactly that \u2014 voluntary. The 120,000+ nannies working in UK homes do so without any regulatory oversight of their identity or background beyond what individual families choose to check.",
      "Au pairs add a further dimension. They are typically young people from overseas, placed through agencies or informal arrangements. Their visa status, identity documents, and background may be unfamiliar to UK families. The agency that placed them verified their identity at some point \u2014 but the family has no independent way to confirm that the person who arrived is the person the agency verified.",
      "Families trust nannies and au pairs with the most precious thing they have. This relationship is built on an identity that has often been verified by nothing more rigorous than a phone interview, a reference check (which can be fabricated), and a DBS check (which is point-in-time). Certifyd adds cryptographic identity verification: the nanny\u2019s identity is device-bound, their agency membership (if applicable) is confirmed in real time, and every arrival creates a verifiable record.",
    ],
    problems: [
      "Nannying is unregulated \u2014 no licensing, no mandatory register, no formal identity verification.",
      "Nanny agencies verify at placement but can\u2019t confirm the person who arrives is the person they placed.",
      "Au pairs arrive from overseas with identity documents that families may not know how to verify.",
      "When incidents occur, there\u2019s no verifiable record of who was with the children and when.",
    ],
    steps: [
      "Nanny or au pair registers on Certifyd, creating a device-bound identity (via agency or directly)",
      "Each day, the nanny verifies through their device upon arrival at the family\u2019s home",
      "The family receives cryptographic confirmation of the nanny\u2019s identity and agency affiliation",
      "A tamper-proof record is created for every visit: who arrived, when, and under whose authority",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "Are nannies required to be registered in the UK?",
        answer:
          "No. Unlike childminders (who must register with Ofsted), nannies have no mandatory registration requirement in England. Ofsted offers a voluntary register, but participation is low. This means families have no regulatory framework to verify a nanny\u2019s identity or background beyond their own private checks. Certifyd fills this gap with device-bound identity verification that works regardless of regulatory status.",
      },
      {
        question: "How does Certifyd work with nanny agencies?",
        answer:
          "Nanny agencies register as Organisations on Certifyd and add each nanny as a member. When the agency places a nanny with a family, the nanny\u2019s identity and active agency membership are verifiable in real time. If the nanny leaves the agency, their membership is revoked instantly. The family knows they\u2019re employing a nanny who is currently affiliated with and backed by the agency that placed them.",
      },
      {
        question: "Can Certifyd verify au pairs from overseas?",
        answer:
          "Yes. Certifyd verifies identity through device-bound authentication, which works regardless of nationality or country of origin. The au pair registers their device and creates a cryptographic identity. Their agency membership (if placed through an agency) is confirmed in real time. This provides the family with verified identity assurance that doesn\u2019t depend on their ability to authenticate foreign identity documents.",
      },
      {
        question: "Is daily verification really necessary?",
        answer:
          "Daily verification takes 30 seconds. It creates an arrival record confirming who was with your children and when. Beyond the safety benefit, it protects the nanny too \u2014 they have verifiable proof of attendance if a dispute arises about hours worked or timing. For families who use substitute carers or share nannies with other families, daily verification provides clarity about who was responsible for which children at which times.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for School Pickups", slug: "school-pickups" },
      { label: "Certifyd for Cleaners", slug: "cleaners" },
      { label: "Certifyd for Protecting Elderly Parents", slug: "protecting-elderly-parents" },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      { label: "Who\u2019s Really at Your Door?", href: "/blog/whos-really-at-your-door/" },
      { label: "The Trust Layer That\u2019s Missing", href: "/blog/trust-layer-missing/" },
      { label: "Two-Way Verification Explained", href: "/blog/two-way-verification-explained/" },
    ],
    relatedResources: [
      {
        label: "GOV.UK \u2014 Au Pairs and Childcare",
        href: "https://www.gov.uk/au-pairs",
        external: true,
      },
      {
        label: "Ofsted \u2014 Voluntary Childcare Register",
        href: "https://www.gov.uk/register-childminder-nanny-childcare-provider",
        external: true,
      },
    ],
    ctaTitle: "Verify who\u2019s looking after your children",
    ctaSecondaryLabel: "Read: The Trust Layer That\u2019s Missing",
    ctaSecondaryHref: "/blog/trust-layer-missing/",
  },
];

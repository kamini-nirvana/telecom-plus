import type { Metadata } from "next";
import type {
  Detail,
  NavLink,
  PageHeroContent,
  Photo,
  SectionIntro,
} from "@/lib/data";

export type Offering = {
  title: string;
  body: string;
};

export type Comparison = {
  columns: readonly string[];
  rows: readonly { label: string; values: readonly string[] }[];
};

export type Question = {
  question: string;
  answer: string;
};

export type SolutionDetailContent = {
  hero: PageHeroContent;
  overview: { intro: SectionIntro; items: readonly Detail[] };
  services: {
    intro: SectionIntro;
    items: readonly Offering[];
    links?: readonly NavLink[];
  };
  planning: {
    intro: SectionIntro;
    image: Photo;
    factors: readonly Detail[];
    comparison?: Comparison;
  };
  faq: { intro: SectionIntro; questions: readonly Question[] };
};

export const BUSINESS_COMMUNICATIONS_META: Metadata = {
  title: "Business Communications — Cloud, on-site and hybrid phone systems",
  description:
    "Cloud PBX, on-site PBX, Microsoft Teams calling and hybrid phone systems, planned and installed around your users, locations and existing equipment.",
  alternates: { canonical: "/solutions/business-communications" },
};

export const BUSINESS_COMMUNICATIONS_HERO: PageHeroContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    {
      label: "Business Communications",
      href: "/solutions/business-communications",
    },
  ],
  heading: "Business calling, your way.",
  body: "Choose a cloud, premises-based or hybrid phone system around your users, locations and existing equipment. We plan installation and migration so the setup fits the way your team works.",
  cta: { label: "Talk to our team", href: "/contact#enquiry" },
};

export const PHONE_SYSTEMS_INTRO: SectionIntro = {
  eyebrow: "Phone systems",
  heading: "How your business calls.",
  body: "Choose a cloud, on-site or hybrid phone system based on how your team works and the equipment you already own. We also provide SIP integration for Microsoft Teams.",
};

export const PHONE_SYSTEMS: readonly Detail[] = [
  {
    term: "Cloud PBX",
    description:
      "A hosted phone system that connects desk phones and calling apps across offices and remote locations.",
  },
  {
    term: "On-site PBX",
    description:
      "A phone system installed at your premises, with call control managed locally and connections to your telephone service.",
  },
  {
    term: "Microsoft Teams calling",
    description:
      "Connect Microsoft Teams to external phone numbers through SIP integration, with licensing and connectivity requirements confirmed during planning.",
  },
  {
    term: "Hybrid systems & migration",
    description:
      "Combine on-site and cloud services, or move to a new platform in stages. We assess which phones, equipment and connections can be retained.",
  },
];

export const ADDITIONAL_SERVICES_INTRO: SectionIntro = {
  eyebrow: "Additional services",
  heading: "Beyond the phone system.",
  body: "Connect multiple locations, add messaging or plan an office move. We supply the equipment and services to extend your communications system and keep it maintained.",
};

export const ADDITIONAL_SERVICES: readonly Offering[] = [
  {
    title: "Multi-Site & District VoIP",
    body: "Telephone and VoIP systems for organizations operating across multiple buildings, campuses or school district locations.",
  },
  {
    title: "AI Calling & Messaging",
    body: "Add AI calling features, SMS and instant chat through integrations available for your chosen platform.",
  },
  {
    title: "Phones & Hardware",
    body: "Desk phones, analog phones, gateways and servers selected to work with your existing system or new installation.",
  },
  {
    title: "Relocation & Maintenance",
    body: "Move your phone system to a new site, migrate to a different platform or arrange ongoing maintenance through a service agreement.",
  },
];

export const RELATED_LINKS: readonly NavLink[] = [
  {
    label: "Explore nurse call & school notification systems",
    href: "/solutions/safety-systems",
  },
  {
    label: "Explore eFax integration & hosting",
    href: "/solutions/calling-sip",
  },
];

export const PLANNING_INTRO: SectionIntro = {
  eyebrow: "System planning",
  heading: "Choose the platform carefully.",
  body: "The choice comes down to how your team handles calls, what your network can support and the cost of owning and maintaining the system. We review those requirements before recommending a platform.",
};

export const PLANNING_IMAGE: Photo = {
  src: "/images/solutions/communications2.png",
  alt: "Grandstream desk phone in a reception area",
};

export const PLANNING_FACTORS: readonly Detail[] = [
  {
    term: "People & locations",
    description: "Users, extensions, shared phones and remote working needs.",
  },
  {
    term: "Calling & integrations",
    description:
      "Call routing, queues, voicemail, paging and connections to other systems.",
  },
  {
    term: "Network & power",
    description:
      "Internet capacity, cabling, equipment compatibility and backup power.",
  },
  {
    term: "Installation & support",
    description:
      "Number porting, changeover timing, staff training and maintenance coverage.",
  },
];

export const PLATFORM_COMPARISON: Comparison = {
  columns: ["Consideration", "Cloud PBX", "On-Site PBX"],
  rows: [
    {
      label: "System location",
      values: [
        "Hosted by the service provider.",
        "Installed at your premises.",
      ],
    },
    {
      label: "Connectivity",
      values: [
        "Phones and apps need a suitable connection to the hosted service.",
        "Local calling relies on on-site equipment, network and power. External calls also require telephone lines or SIP trunks.",
      ],
    },
    {
      label: "Costs",
      values: [
        "Subscription fees, calling charges and any required phones or network upgrades.",
        "Equipment, installation, licensing, maintenance and telephone service charges.",
      ],
    },
    {
      label: "Planning priorities",
      values: [
        "Internet reliability, remote access and options during a connection failure.",
        "Equipment capacity, backup power, maintenance and future expansion.",
      ],
    },
  ],
};

export const FAQ_INTRO: SectionIntro = {
  eyebrow: "Before you switch",
  heading: "Common questions.",
  body: "What you can keep, what happens during an outage and what’s needed to bring calling into Teams.",
};

export const FAQ: readonly Question[] = [
  {
    question: "Can we keep our existing phones?",
    answer:
      "Possibly. We check the phone models against the proposed system and the features you need. Compatible phones can often stay; others may need an adapter or replacement.",
  },
  {
    question: "Will an on-site system work if the internet goes down?",
    answer:
      "Internal calls and paging may continue if the system supports local operation and your equipment still has power. Outside calls depend on your connection: SIP trunks generally need internet access, while separate telephone lines may remain available.",
  },
  {
    question: "What do we need to make external calls through Microsoft Teams?",
    answer:
      "You need the appropriate Teams Phone licensing and a connection to the public telephone network. A SIP trunk alone isn’t enough. For Direct Routing, a certified session border controller connects the telephone service to Teams.",
  },
];

export const BUSINESS_COMMUNICATIONS: SolutionDetailContent = {
  hero: BUSINESS_COMMUNICATIONS_HERO,
  overview: { intro: PHONE_SYSTEMS_INTRO, items: PHONE_SYSTEMS },
  services: {
    intro: ADDITIONAL_SERVICES_INTRO,
    items: ADDITIONAL_SERVICES,
    links: RELATED_LINKS,
  },
  planning: {
    intro: PLANNING_INTRO,
    image: PLANNING_IMAGE,
    factors: PLANNING_FACTORS,
    comparison: PLATFORM_COMPARISON,
  },
  faq: { intro: FAQ_INTRO, questions: FAQ },
};

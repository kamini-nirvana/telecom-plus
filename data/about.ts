import type { Metadata } from "next";
import type {
  AboutPoint,
  PageHeroContent,
  Photo,
  SectionIntro,
  SizedImage,
} from "@/lib/data";

export type Stat = {
  label: string;
  value: string;
};

export type MissionContent = {
  eyebrow: string;
  statement: string;
  body: string;
  badge: string;
  stats: readonly Stat[];
};

export type LeaderContent = SectionIntro & {
  name: string;
  role: string;
  image: Photo;
};

export const ABOUT_META: Metadata = {
  title: "About Telecom Plus — A division of BY Solution",
  description:
    "Telecom Plus takes the time to understand your organization, recommend what fits and stand behind the work. Meet the team and the principles behind it.",
  alternates: { canonical: "/about" },
};

export const ABOUT_HERO: PageHeroContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
  ],
  heading: "Good connections start with trust.",
  body: "We’re Telecom Plus, a division of BY Solution. We take the time to understand your organization, recommend what fits and stand behind the work we do.",
  cta: { label: "Talk to our team", href: "/contact#enquiry" },
  jumpLinks: {
    label: "Get to know us",
    links: [
      { label: "Our Mission", href: "#mission" },
      { label: "Our People", href: "#people" },
      { label: "Our Principles", href: "#principles" },
      { label: "Our Clients", href: "#clients" },
    ],
  },
};

export const MISSION: MissionContent = {
  eyebrow: "Delivering what we promise",
  statement:
    "Our Mission is to educate our clients into making the best decision for their organization and build strong trusted bonds throughout. We align our team as an extension of yours to ensure interests are shared and costs reduced.",
  body: "We help clients make informed technology decisions, reduce costs and build lasting relationships. We work as an extension of your team, with your organization’s interests in mind.",
  badge: "BBB accredited · Honest & ethical business",
  stats: [
    { label: "Years in business", value: "10+" },
    { label: "Team members", value: "10" },
    { label: "Projects completed", value: "1,100+" },
    { label: "Clients served", value: "300+" },
  ],
};

export const LEADER: LeaderContent = {
  eyebrow: "Our people",
  heading: "Teamwork starts with leadership.",
  body: "Brian Yuswack’s 14 years in the Canadian Forces Army Reserve shaped his approach to leadership: teamwork, professionalism, integrity and sound judgement.",
  name: "Brian Yuswack",
  role: "President, BY Solution – Telecom Plus",
  image: {
    src: "/images/about/brian-yuswack.png",
    alt: "Portrait of Brian Yuswack",
  },
};

export const PRINCIPLES_INTRO: SectionIntro = {
  eyebrow: "Our principles",
  heading: "What we stand behind.",
  body: "These principles guide the equipment we recommend, the systems we install and the support we provide.",
};

export const PRINCIPLES: readonly AboutPoint[] = [
  {
    title: "Quality & Reliability",
    description:
      "Reliable products and careful implementation, whatever the project’s size.",
  },
  {
    title: "Transparency",
    description:
      "Honest recommendations, realistic commitments and follow-through.",
  },
  {
    title: "Protecting Your Investment",
    description:
      "Regular system backups and equipment selected for long service life.",
  },
  {
    title: "Social Responsibility",
    description:
      "Reducing waste through responsible material use, reuse and disposal.",
  },
];

export const CLIENTS_INTRO: SectionIntro & { note: string } = {
  eyebrow: "Our clients",
  heading: "The organizations we work with.",
  body: "A selection of the organizations we’ve supported with communications systems, installation and ongoing service.",
  note: "A selection of our client relationships.",
};

function logo(
  slug: string,
  alt: string,
  width: number,
  height: number,
): SizedImage {
  return { src: `/images/client-logos/${slug}.png`, alt, width, height };
}

export const CLIENT_GRID: readonly SizedImage[] = [
  logo("sooke-schools-62", "Sooke Schools 62", 133, 35),
  logo("ubc", "University of British Columbia", 44, 60),
  logo("fairmont", "Fairmont", 115, 35),
  logo("starbucks", "Starbucks", 69, 70),
  logo("chilliwack-ford", "Chilliwack Ford", 120, 60),
  logo("workbc", "WorkBC", 151, 28),
  logo("four-seasons", "Four Seasons", 129, 60),
  logo("austeville-properties", "Austeville Properties Ltd", 131, 30),
  logo("revolution-resource-recovery", "Revolution Resource Recovery", 97, 60),
  logo("onni-group", "Onni Group", 94, 30),
  logo("hilton", "Hilton", 116, 60),
  logo("greenwoods-eldercare-society", "Greenwoods Eldercare Society", 96, 96),
  logo("broadway-refrigeration", "Broadway Refrigeration & Air Conditioning", 114, 35),
  logo("windsor-plywood", "Windsor Plywood", 148, 30),
  logo("telus", "TELUS", 130, 25),
  logo("bc-christian-academy", "BC Christian Academy", 99, 65),
  logo("little-flower-academy", "Little Flower Academy Foundation", 90, 90),
  logo("chances-courtenay", "Chances Courtenay", 127, 60),
  logo("coquitlam-concrete", "Coquitlam Concrete", 99, 60),
  logo("harry-barber-and-sons", "Harry Barber & Sons", 107, 60),
  logo("dundee-corporation", "Dundee Corporation", 168, 60),
  logo("smythe", "Smythe", 124, 25),
  logo("travelodge", "Travelodge by Wyndham", 109, 40),
  logo("salt-spring-island-community-services", "Salt Spring Island Community Services", 116, 40),
  logo("allard-construction", "Allard Construction", 60, 60),
  logo("pcrs", "PCRS", 112, 40),
  logo("barry-hamel-equipment", "Barry Hamel Equipment Rentals", 120, 60),
  logo("mount-lehman-credit-union", "Mount Lehman Credit Union", 117, 70),
  logo("glad-tidings", "Glad Tidings", 80, 80),
  logo("element-consulting-engineers", "Element Consulting Engineers", 80, 80),
  logo("everywomans-health-centre", "Everywoman’s Health Centre", 127, 35),
  logo("thinking-driver", "Thinking Driver", 86, 60),
];

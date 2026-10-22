import type { Metadata } from "next";
import type {
  Detail,
  NavLink,
  PageHeroContent,
  Photo,
  SectionIntro,
} from "@/lib/data";

export type ServiceCard = {
  title: string;
  body: string;
  link: NavLink;
  image: Photo;
};

export const SOLUTIONS_META: Metadata = {
  title: "Solutions — Business phones, networks and connected systems",
  description:
    "Business communications, legacy system support, calling and SIP, safety systems, network infrastructure, video surveillance and backup power from Telecom Plus.",
  alternates: { canonical: "/solutions" },
};

export const SOLUTIONS_HERO: PageHeroContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
  ],
  heading: "Built around your operation.",
  body: "Business phones, calling services, networks and connected systems. Explore what we support, or tell us what needs to change at your site.",
  cta: { label: "Explore solutions", href: "#services" },
};

export const SERVICES_INTRO: SectionIntro = {
  eyebrow: "Explore our services",
  heading: "Find the support you need.",
  body: "We install, upgrade and maintain business phone systems, safety systems and the infrastructure they rely on. Explore our services for communications, cabling, networking, surveillance and backup power, including support for legacy equipment.",
};

export const SERVICES: readonly ServiceCard[] = [
  {
    title: "Business Communications",
    body: "Cloud, premises-based and hybrid phone systems, with Teams calling options and planned migrations.",
    link: { label: "Explore communications", href: "/solutions/business-communications" },
    image: { src: "/images/solutions/cards/business-communications.png", alt: "Grandstream desk phone showing the Telecom Plus website" },
  },
  {
    title: "Legacy System Support",
    body: "Maintenance, compatible replacement equipment and transition planning for existing Nortel and Avaya systems.",
    link: { label: "Explore legacy support", href: "/solutions/legacy-system-support" },
    image: { src: "/images/solutions/cards/legacy-system-support.png", alt: "Wall-mounted legacy telephone system cabinets" },
  },
  {
    title: "Calling & SIP",
    body: "SIP trunks, business numbers, analog connectivity and fax options for your phone setup.",
    link: { label: "Explore calling & SIP", href: "/solutions/calling-sip" },
    image: { src: "/images/solutions/cards/calling-sip.png", alt: "Network rack with patched switches and a router" },
  },
  {
    title: "Safety Systems",
    body: "Nurse call, paging and integrated notifications for care facilities, schools and other sites.",
    link: { label: "Explore safety systems", href: "/solutions/safety-systems" },
    image: { src: "/images/solutions/cards/safety-systems.png", alt: "Ceiling-mounted paging speaker" },
  },
  {
    title: "Network Infrastructure",
    body: "Structured cabling, network equipment and organized racks for the systems across your site.",
    link: { label: "Explore infrastructure", href: "/solutions/network-infrastructure" },
    image: { src: "/images/solutions/cards/network-infrastructure.png", alt: "Technician fitting a patch panel into a network rack" },
  },
  {
    title: "Video Surveillance",
    body: "Camera systems, recording and authorized viewing access planned around the areas you need to monitor.",
    link: { label: "Explore surveillance", href: "/solutions/video-surveillance" },
    image: { src: "/images/solutions/cards/video-surveillance.png", alt: "Dome security camera mounted under a ceiling" },
  },
  {
    title: "Backup Power",
    body: "UPS selection and planning based on essential equipment, power demand and required backup time.",
    link: { label: "Explore backup power", href: "/solutions/backup-power" },
    image: { src: "/images/solutions/cards/backup-power.png", alt: "Floor-standing UPS units installed side by side" },
  },
];

export const SERVICES_HELP = {
  heading: "Not sure where to start?",
  body: "Replacing an aging phone system, opening a new location or dealing with recurring faults? Tell us what you have and what you need it to do. We’ll help you work out the next step.",
  cta: { label: "Talk to our team", href: "/contact#enquiry" },
};

export const SITE_ASSESSMENT_INTRO: SectionIntro = {
  eyebrow: "Site assessment",
  heading: "Know what needs changing.",
  body: "Before recommending equipment, we review your existing systems, how your team uses them and what the new setup needs to support. That helps us identify what can stay, what needs upgrading and how to plan the work around your operations.",
};

export const SITE_ASSESSMENT_IMAGE: Photo = {
  src: "/images/solutions/site-assessment.png",
  alt: "Telecom Plus technicians installing equipment during a site visit",
};

export const SITE_ASSESSMENT: readonly Detail[] = [
  {
    term: "Existing systems",
    description:
      "Equipment, cabling, network capacity and power, including compatibility with systems you plan to keep.",
  },
  {
    term: "Daily use",
    description:
      "Who uses each system, across which locations, and which functions need to remain available during the work.",
  },
  {
    term: "Project requirements",
    description:
      "Your budget, installation schedule, maintenance needs and plans for expansion.",
  },
];

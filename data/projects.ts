import type { Metadata } from "next";
import type { PageHeroContent, Photo, SectionIntro } from "@/lib/data";

export type ProjectCategory = {
  id: string;
  label: string;
};

export type ProjectSummary = {
  id: string;
  title: string;
  categories: readonly string[];
  summary: string;
  image: Photo;
};

export type ClientLocation = {
  name: string;
  address: string;
};

export const PROJECTS_META: Metadata = {
  title: "Projects — Phone, network and safety system installations",
  description:
    "Phone systems, network cabling, nurse call and surveillance installations for schools, care facilities and businesses across British Columbia.",
  alternates: { canonical: "/projects" },
};

export const PROJECTS_HERO: PageHeroContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ],
  heading: "The work behind the connection.",
  body: "Phone systems, network cabling, nurse call and surveillance installations for schools, care facilities and businesses. Explore the projects below to see who we’ve worked with and what each installation involved.",
  cta: { label: "Explore projects", href: "#work" },
};

export const WORK_INTRO: SectionIntro & {
  allLabel: string;
  moreLabel: string;
  emptyLabel: string;
} = {
  eyebrow: "Selected work",
  heading: "Clients and installations.",
  body: "From maintaining an existing PBX to installing a new VoIP system, each project starts with the equipment and connections the site needs.",
  allLabel: "All projects",
  moreLabel: "Show more projects",
  emptyLabel: "No projects in this category yet.",
};

export const PROJECT_CATEGORIES: readonly ProjectCategory[] = [
  { id: "communications", label: "Communications" },
  { id: "legacy-support", label: "Legacy Support" },
  { id: "safety-systems", label: "Safety Systems" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "surveillance", label: "Surveillance" },
  { id: "other", label: "Other Work" },
];

export const PROJECT_SUMMARIES: readonly ProjectSummary[] = [
  {
    id: "chilliwack-ford",
    title: "Chilliwack Ford",
    categories: ["communications", "infrastructure"],
    summary: "Voice network infrastructure and VoIP phone system installation.",
    image: {
      src: "/images/projects/cards/chilliwack-ford.png",
      alt: "Technician on a lift at the Chilliwack Ford service entrance",
    },
  },
  {
    id: "greenwoods-eldercare-society",
    title: "Greenwoods Eldercare Society",
    categories: ["safety-systems", "communications"],
    summary: "Nurse call systems and VoIP integration.",
    image: {
      src: "/images/projects/cards/greenwoods-eldercare-society.png",
      alt: "Telecom Plus team and vans outside Greenwoods Eldercare Society",
    },
  },
  {
    id: "coquitlam-concrete",
    title: "Coquitlam Concrete",
    categories: ["communications", "infrastructure"],
    summary: "Site-to-site networking and VoIP installation.",
    image: {
      src: "/images/projects/cards/coquitlam-concrete.png",
      alt: "Telecom Plus van parked beside the Coquitlam Concrete plant",
    },
  },
  {
    id: "school-district-62-board-office",
    title: "School District 62 Board Office",
    categories: ["communications"],
    summary: "VoIP communication systems and integration.",
    image: {
      src: "/images/projects/cards/school-district-62-board-office.png",
      alt: "Telecom Plus team outside the School District No. 62 Sooke administration office",
    },
  },
  {
    id: "fairmont-hotel-pacific-rim-yvr",
    title: "Fairmont Hotel Pacific Rim & YVR",
    categories: ["legacy-support"],
    summary: "Legacy PBX maintenance.",
    image: {
      src: "/images/projects/cards/fairmont-hotel-pacific-rim-yvr.png",
      alt: "Legacy PBX cross-connect panels in a hotel equipment room",
    },
  },
  {
    id: "pace-manufacturing",
    title: "Pace Manufacturing Ltd.",
    categories: ["surveillance"],
    summary: "CCTV monitoring system installation.",
    image: {
      src: "/images/projects/cards/pace-manufacturing.png",
      alt: "Dome security camera mounted under a ceiling",
    },
  },
  {
    id: "dunsmuir-middle-school",
    title: "Dunsmuir Middle School",
    categories: ["communications"],
    summary: "VoIP communication systems and integration.",
    image: {
      src: "/images/projects/cards/dunsmuir-middle-school.png",
      alt: "Telecom Plus service vans and team outside Dunsmuir Middle School",
    },
  },
  {
    id: "john-muir-elementary-school",
    title: "John Muir Elementary School",
    categories: ["communications"],
    summary: "VoIP phone system installation and integration.",
    image: {
      src: "/images/projects/cards/john-muir-elementary-school.png",
      alt: "Telecom Plus van parked outside John Muir Elementary School",
    },
  },
  {
    id: "windsor-plywood-salt-spring-island",
    title: "Windsor Plywood Salt Spring Island",
    categories: ["communications", "infrastructure"],
    summary:
      "VoIP phone system, wireless networking and structured data cabling.",
    image: {
      src: "/images/projects/cards/windsor-plywood-salt-spring-island.png",
      alt: "Cable runs being installed in the new Windsor Plywood store",
    },
  },
];

export const DIRECTORY_INTRO: SectionIntro & {
  searchLabel: string;
  listLabel: string;
  emptyLabel: string;
  previousLabel: string;
  nextLabel: string;
} = {
  eyebrow: "Client directory",
  heading: "Find a client location.",
  body: "Browse the schools, care facilities and businesses we’ve worked with. Search by name, city or address.",
  searchLabel: "Search name, city or address",
  listLabel: "Client locations",
  emptyLabel: "No client locations match that search.",
  previousLabel: "Previous",
  nextLabel: "Next",
};

export const CLIENT_LOCATIONS: readonly ClientLocation[] = [
  {
    name: "Belmont Secondary School",
    address: "3041 Langford Lake Road, Victoria, BC V9B 0L9",
  },
  {
    name: "Centre Mountain Lellum School",
    address: "3090 Constellation Drive, Victoria, BC V9B 0L9",
  },
  {
    name: "Colwood Elementary School",
    address: "3000 Wishart Road, Victoria, BC V9C 1P4",
  },
  {
    name: "Crystal View Elementary School",
    address: "2662 Silverstone Way, Victoria, BC V9B 6A6",
  },
  {
    name: "David Cameron Elementary School",
    address: "675 Meaford Ave., Victoria, BC V9B 5Y1",
  },
  {
    name: "Dunsmuir Middle School",
    address: "3341 Painter Road, Victoria, BC V9C 2J1",
  },
];

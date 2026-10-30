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
  id: string;
  name: string;
  address: string;
  coords: { lat: number; lng: number };
};

/** Sites inside British Columbia; map overviews fit these so a single
 *  out-of-province client doesn't zoom the map out to all of Canada. */
export function isInBritishColumbia({ coords }: ClientLocation) {
  return coords.lng < -114;
}

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
  sitesLabel: string;
  sitesCta: string;
  sitesHref: string;
} = {
  eyebrow: "Featured projects",
  heading: "A closer look at the work.",
  body: "A selection of phone, network and safety system installations, chosen to show the range of sites we support. Every client location is listed on the map further down the page.",
  allLabel: "Featured",
  moreLabel: "Show more projects",
  emptyLabel: "No projects in this category yet.",
  sitesLabel: "{count} client sites across British Columbia",
  sitesCta: "See the map",
  sitesHref: "#directory",
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
    summary:
      "Voice network infrastructure for a working dealership, followed by a VoIP phone system that connects the departments on one setup. The new cabling gives the site room to grow without another rewire.",
    image: {
      src: "/images/projects/cards/chilliwack-ford.png",
      alt: "Technician on a lift at the Chilliwack Ford service entrance",
    },
  },
  {
    id: "greenwoods-eldercare-society",
    title: "Greenwoods Eldercare Society",
    categories: ["safety-systems", "communications"],
    summary:
      "Nurse call systems for a care residence on Salt Spring Island, integrated with the VoIP phone system so calls reach staff on the handsets they already carry. One system to support instead of two.",
    image: {
      src: "/images/projects/cards/greenwoods-eldercare-society.png",
      alt: "Telecom Plus team and vans outside Greenwoods Eldercare Society",
    },
  },
  {
    id: "coquitlam-concrete",
    title: "Coquitlam Concrete",
    categories: ["communications", "infrastructure"],
    summary:
      "Site-to-site networking for a working concrete plant, with a VoIP phone system installed over the same connection so the office and yard share one phone and data setup.",
    image: {
      src: "/images/projects/cards/coquitlam-concrete.png",
      alt: "Telecom Plus van parked beside the Coquitlam Concrete plant",
    },
  },
  {
    id: "school-district-62-board-office",
    title: "School District 62 Board Office",
    categories: ["communications"],
    summary:
      "VoIP communication systems for the Sooke School District administration office, part of our district-wide telephone work across more than thirty SD62 schools and sites.",
    image: {
      src: "/images/projects/cards/school-district-62-board-office.png",
      alt: "Telecom Plus team outside the School District No. 62 Sooke administration office",
    },
  },
  {
    id: "fairmont-hotel-pacific-rim-yvr",
    title: "Fairmont Hotel Pacific Rim & YVR",
    categories: ["legacy-support"],
    summary:
      "Ongoing maintenance of the legacy PBX systems at two Fairmont properties. Compatible parts and scheduled support keep established hotel phone infrastructure reliable without forcing a replacement.",
    image: {
      src: "/images/projects/cards/fairmont-hotel-pacific-rim-yvr.png",
      alt: "Legacy PBX cross-connect panels in a hotel equipment room",
    },
  },
  {
    id: "pace-manufacturing",
    title: "Pace Manufacturing Ltd.",
    categories: ["surveillance"],
    summary:
      "CCTV monitoring system for a manufacturing facility, with high-definition cameras and remote viewing so the site can be checked from a phone or desktop at any time.",
    image: {
      src: "/images/projects/cards/pace-manufacturing.png",
      alt: "Dome security camera mounted under a ceiling",
    },
  },
  {
    id: "dunsmuir-middle-school",
    title: "Dunsmuir Middle School",
    categories: ["communications"],
    summary:
      "VoIP communication systems for Dunsmuir Middle School, installed and integrated as part of the district-wide telephone and VoIP rollout for Sooke School District 62.",
    image: {
      src: "/images/projects/cards/dunsmuir-middle-school.png",
      alt: "Telecom Plus service vans and team outside Dunsmuir Middle School",
    },
  },
  {
    id: "john-muir-elementary-school",
    title: "John Muir Elementary School",
    categories: ["communications"],
    summary:
      "VoIP phone system installation and integration for John Muir Elementary in Sooke, one of the SD62 schools moved onto the district-wide telephone and VoIP setup.",
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
      "VoIP phone system, wireless networking and structured data cabling for the new Windsor Plywood store on Salt Spring Island, installed during the build so the store opened with everything in place.",
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
  showAllLabel: string;
  countLabel: string;
} = {
  eyebrow: "Client directory",
  heading: "Where we’ve worked.",
  body: "Every school, care facility and business on the map is a site our team has installed or supported. Search by name, city or address, or pick a pin.",
  searchLabel: "Search name, city or address",
  listLabel: "Client locations",
  emptyLabel: "No client locations match that search.",
  previousLabel: "Previous",
  nextLabel: "Next",
  showAllLabel: "Show all locations",
  countLabel: "{count} locations",
};

export const CLIENT_LOCATIONS: readonly ClientLocation[] = [
  {
    id: "belmont-secondary-school",
    name: "Belmont Secondary School",
    address: "3041 Langford Lake Road, Victoria, BC V9B 0L9",
    coords: { lat: 48.44232, lng: -123.52951 },
  },
  {
    id: "centre-mountain-lellum-school",
    name: "Centre Mountain Lellum School",
    address: "3090 Constellation Drive, Victoria, BC V9B 0L9",
    coords: { lat: 48.44925, lng: -123.54234 },
  },
  {
    id: "colwood-elementary-school",
    name: "Colwood Elementary School",
    address: "3000 Wishart Road, Victoria, BC V9C 1P4",
    coords: { lat: 48.43557, lng: -123.48585 },
  },
  {
    id: "crystal-view-elementary-school",
    name: "Crystal View Elementary School",
    address: "2662 Silverstone Way, Victoria, BC V9B 6A6",
    coords: { lat: 48.45291, lng: -123.47787 },
  },
  {
    id: "david-cameron-elementary-school",
    name: "David Cameron Elementary School",
    address: "675 Meaford Ave., Victoria, BC V9B 5Y1",
    coords: { lat: 48.44288, lng: -123.4971 },
  },
  {
    id: "dunsmuir-middle-school",
    name: "Dunsmuir Middle School",
    address: "3341 Painter Road, Victoria, BC V9C 2J1",
    coords: { lat: 48.4185, lng: -123.48645 },
  },
  {
    id: "ecole-john-stubbs-memorial-school",
    name: "École John Stubbs Memorial School",
    address: "301 Zealous Crescent, Victoria, BC V9C 1H6",
    coords: { lat: 48.43611, lng: -123.46375 },
  },
  {
    id: "edward-milne-community-school",
    name: "Edward Milne Community School",
    address: "6218 Sooke Road, Sooke, BC V9Z 0G7",
    coords: { lat: 48.38899, lng: -123.69552 },
  },
  {
    id: "hans-helgesen-elementary-school",
    name: "Hans Helgesen Elementary School",
    address: "4983 Rocky Point Rd, Victoria, BC V9C 4G4",
    coords: { lat: 48.36369, lng: -123.55435 },
  },
  {
    id: "happy-valley-elementary-school",
    name: "Happy Valley Elementary School",
    address: "3291 Happy Valley Rd, Victoria, BC V9C 2W3",
    coords: { lat: 48.42843, lng: -123.52869 },
  },
  {
    id: "john-muir-elementary-school",
    name: "John Muir Elementary School",
    address: "7179 West Coast Rd, Sooke, BC V9Z 1H7",
    coords: { lat: 48.37076, lng: -123.7492 },
  },
  {
    id: "journey-middle-school",
    name: "Journey Middle School",
    address: "6522 Throup Road, Sooke, BC V9Z 0W6",
    coords: { lat: 48.38666, lng: -123.71675 },
  },
  {
    id: "lakewood-elementary-school",
    name: "Lakewood Elementary School",
    address: "2363 Setchfield Ave, Victoria, BC V9B 5W1",
    coords: { lat: 48.46569, lng: -123.50655 },
  },
  {
    id: "millstream-elementary-school",
    name: "Millstream Elementary School",
    address: "626 Hoylake Ave, Victoria, BC V9B 3P7",
    coords: { lat: 48.466, lng: -123.49629 },
  },
  {
    id: "online-continuing-education",
    name: "Online & Continuing Education",
    address: "120-798 Goldstream Ave, Langford, BC V9B 2X6",
    coords: { lat: 48.44978, lng: -123.50005 },
  },
  {
    id: "pexsisen-elementary-school",
    name: "PEXSISEN Elementary School",
    address: "3100 Constellation Avenue, Victoria, BC V9B 0V2",
    coords: { lat: 48.44763, lng: -123.54205 },
  },
  {
    id: "poirier-elementary-school",
    name: "Poirier Elementary School",
    address: "6526 Throup Rd, Sooke, BC V9Z 1H9",
    coords: { lat: 48.39071, lng: -123.71881 },
  },
  {
    id: "port-renfrew-school",
    name: "Port Renfrew School",
    address: "6633 Deering Rd, Port Renfrew, BC V0S 1K0",
    coords: { lat: 48.55664, lng: -124.399 },
  },
  {
    id: "qelensen-a-len-secondary-school",
    name: "QELEṈSEN Á,LEṈ Secondary School",
    address: "104-1089 Langford Parkway, Langford, BC V9B 0A5",
    coords: { lat: 48.44312, lng: -123.52372 },
  },
  {
    id: "royal-bay-secondary-school",
    name: "Royal Bay Secondary School",
    address: "3500 Ryder Hesjedal Way, Victoria, BC V9C 0J6",
    coords: { lat: 48.40908, lng: -123.49272 },
  },
  {
    id: "ruth-king-elementary-school",
    name: "Ruth King Elementary School",
    address: "2764 Jacklin Road, Victoria, BC V9B 3X6",
    coords: { lat: 48.45192, lng: -123.50565 },
  },
  {
    id: "sangster-elementary-school",
    name: "Sangster Elementary School",
    address: "3325 Metchosin Rd, Victoria, BC V9C 2A4",
    coords: { lat: 48.42112, lng: -123.48505 },
  },
  {
    id: "saseenos-elementary-school",
    name: "Saseenos Elementary School",
    address: "6066 Sooke Rd, Sooke, BC V9Z 0C1",
    coords: { lat: 48.38791, lng: -123.68853 },
  },
  {
    id: "savory-elementary-school",
    name: "Savory Elementary School",
    address: "2721 Grainger Rd, Victoria, BC V9B 3K7",
    coords: { lat: 48.44855, lng: -123.48683 },
  },
  {
    id: "scinew-steitkel-elementary-school",
    name: "SĆIȺNEW̱ SṮEȽIṮḰEL Elementary School",
    address: "802 Latoria Road, Langford, BC V9C 3A7",
    coords: { lat: 48.41497, lng: -123.5203 },
  },
  {
    id: "sooke-elementary-school",
    name: "Sooke Elementary School",
    address: "6560 Sooke Rd, Sooke, BC V9Z 0E4",
    coords: { lat: 48.38048, lng: -123.71655 },
  },
  {
    id: "spencer-middle-school",
    name: "Spencer Middle School",
    address: "1026 Goldstream Ave, Victoria, BC V9B 2Y5",
    coords: { lat: 48.45038, lng: -123.51443 },
  },
  {
    id: "westshore-secondary",
    name: "Westshore Secondary",
    address: "2139 Sooke Road, Colwood, BC V9B 1W4",
    coords: { lat: 48.43672, lng: -123.48647 },
  },
  {
    id: "willway-elementary-school",
    name: "Willway Elementary School",
    address: "2939 Mount Wells Drive, Victoria, BC V9B 4T4",
    coords: { lat: 48.45679, lng: -123.54857 },
  },
  {
    id: "wishart-elementary-school",
    name: "Wishart Elementary School",
    address: "3310 Wishart Rd, Victoria, BC V9C 1R1",
    coords: { lat: 48.42208, lng: -123.49489 },
  },
  {
    id: "school-board-office-sd62",
    name: "School Board Office SD62",
    address: "3143 Jacklin Rd, Victoria, BC V9B 5R1",
    coords: { lat: 48.43646, lng: -123.51309 },
  },
  {
    id: "wildwood-health-performance",
    name: "Wildwood Health & Performance",
    address: "277 Wildwood Ave, Victoria, BC V8S 3W2",
    coords: { lat: 48.41311, lng: -123.33357 },
  },
  {
    id: "fairmont-chateau-whistler",
    name: "Fairmont Chateau Whistler",
    address: "4599 Chateau Blvd, Whistler, BC V8E 0Z5",
    coords: { lat: 50.11716, lng: -122.9452 },
  },
  {
    id: "chilliwack-ford",
    name: "Chilliwack Ford",
    address: "45681 Yale Rd, Chilliwack, BC V2P 2N1",
    coords: { lat: 49.1627, lng: -121.9554 },
  },
  {
    id: "allard-contractors",
    name: "Allard Contractors",
    address: "1520 Pipeline Rd, Coquitlam, BC V3E 3P6",
    coords: { lat: 49.30836, lng: -123.13744 },
  },
  {
    id: "coquitlam-concrete",
    name: "Coquitlam Concrete",
    address: "1530 Pipeline Rd, Coquitlam, BC V3E 3P6",
    coords: { lat: 49.30326, lng: -123.13576 },
  },
  {
    id: "michauds-salon-spa",
    name: "Michauds Salon & Spa",
    address: "5669 176 St, Surrey, BC V3S 4C5",
    coords: { lat: 49.10543, lng: -122.73531 },
  },
  {
    id: "harry-sons-barber-cloverdale",
    name: "Harry & Sons Barber Cloverdale",
    address: "5679 176 St, Surrey, BC V3S 4C5",
    coords: { lat: 49.14093, lng: -122.73486 },
  },
  {
    id: "harry-sons-barber-walnut-grove",
    name: "Harry & Sons Barber Walnut Grove",
    address: "20348 88 Ave Unit 15, Langley, BC V1M 1E6",
    coords: { lat: 49.16279, lng: -122.77828 },
  },
  {
    id: "srl-industries",
    name: "SRL Industries",
    address: "18725 52 Ave Unit 101, Surrey, BC V3S 8E5",
    coords: { lat: 49.09854, lng: -122.70405 },
  },
  {
    id: "element-consulting-engineers",
    name: "Element Consulting Engineers",
    address: "7438 Fraser Park Drive, Unit 200, Burnaby, BC V5J 5B9",
    coords: { lat: 49.18634, lng: -122.99093 },
  },
  {
    id: "turfco-landscape-supply",
    name: "Turfco Landscape Supply",
    address: "14653 64 Ave, Surrey, BC V3S 1X6",
    coords: { lat: 49.11929, lng: -122.81629 },
  },
  {
    id: "thinking-driver",
    name: "Thinking Driver",
    address: "12601 54th Ave, Surrey, BC V3X 3C1",
    coords: { lat: 49.10068, lng: -122.87346 },
  },
  {
    id: "little-flower-academy",
    name: "Little Flower Academy",
    address: "4195 Alexandra St, Vancouver, BC V6J 4C6",
    coords: { lat: 49.24843, lng: -123.14226 },
  },
  {
    id: "bc-christian-academy",
    name: "BC Christian Academy",
    address: "1019 Fernwood Ave, Port Coquitlam, BC V3B 5A8",
    coords: { lat: 49.28042, lng: -122.74362 },
  },
  {
    id: "u-b-c",
    name: "U.B.C.",
    address: "6200 University Blvd, Vancouver, BC V6T 1Z4",
    coords: { lat: 49.26504, lng: -123.25068 },
  },
  {
    id: "aran-inc",
    name: "Aran Inc.",
    address: "7168 Honeyman St, Delta, BC V4G 1G1",
    coords: { lat: 49.13263, lng: -123.01836 },
  },
  {
    id: "pitanco-precision",
    name: "Pitanco Precision",
    address: "191 Rue Brossard, Delson, QC J5B 1W9",
    coords: { lat: 45.37061, lng: -73.52548 },
  },
  {
    id: "pace-fabrics-design",
    name: "Pace Fabrics & Design",
    address: "7225 Brown St, Unit 102, Delta, BC V4G 1C5",
    coords: { lat: 49.13379, lng: -123.01652 },
  },
  {
    id: "awnings-west",
    name: "Awnings West",
    address: "7167 Vantage Wy Unit 9, Delta, BC V4G 1K7",
    coords: { lat: 49.136, lng: -123.02826 },
  },
  {
    id: "eastwood-associates",
    name: "Eastwood & Associates",
    address: "5058 47a Ave, Delta, BC V4K 1T8",
    coords: { lat: 49.08901, lng: -123.08343 },
  },
  {
    id: "collaborative-wellness",
    name: "Collaborative Wellness",
    address: "5085 48 Ave, Delta, BC V4K 1V8",
    coords: { lat: 49.09031, lng: -123.08266 },
  },
  {
    id: "metronix-services-ltd",
    name: "Metronix Services Ltd.",
    address: "10320 Shell Rd, Richmond, BC V7A 3X3",
    coords: { lat: 49.19433, lng: -123.1027 },
  },
  {
    id: "windsor-plywood-ssi",
    name: "Windsor Plywood SSI",
    address: "166 Rainbow Rd, Salt Spring Island, BC V8K 2M3",
    coords: { lat: 48.85429, lng: -123.50868 },
  },
  {
    id: "greenwoods-eldercare-society",
    name: "Greenwoods Eldercare Society",
    address: "133 Blain Rd, Salt Spring Island, BC V8K 2V4",
    coords: { lat: 48.86202, lng: -123.51056 },
  },
  {
    id: "braehaven-assisted-living",
    name: "Braehaven Assisted Living",
    address: "137 Blain Rd, Salt Spring Island, BC V8K 0A1",
    coords: { lat: 48.86202, lng: -123.51056 },
  },
  {
    id: "salt-spring-island-community-services",
    name: "Salt Spring Island Community Services",
    address: "268 Fulford-Ganges Rd, Salt Spring Island, BC V8K 2K6",
    coords: { lat: 48.84697, lng: -123.50107 },
  },
  {
    id: "goldleaf-insurance",
    name: "Goldleaf Insurance",
    address: "13049 76 Ave Unit 102, Surrey, BC V3W 2V7",
    coords: { lat: 49.14115, lng: -122.86121 },
  },
  {
    id: "chances-casino-squamish",
    name: "Chances Casino Squamish",
    address: "9000 Valley Dr, Squamish, BC V8B 0B3",
    coords: { lat: 49.69116, lng: -123.14605 },
  },
  {
    id: "chances-casino-courtenay",
    name: "Chances Casino Courtenay",
    address: "361 Hunt Rd, Courtenay, BC V9N 9B8",
    coords: { lat: 49.69937, lng: -124.98304 },
  },
  {
    id: "chances-casino-abbotsford",
    name: "Chances Casino Abbotsford",
    address: "30835 Peardonville Rd, Abbotsford, BC V2T 6K2",
    coords: { lat: 49.0467, lng: -122.36871 },
  },
  {
    id: "kitsilano-law-group",
    name: "Kitsilano Law Group",
    address: "1755 W Broadway Unit 304, Vancouver, BC V6J 4S5",
    coords: { lat: 49.26396, lng: -123.14456 },
  },
  {
    id: "royal-ascot-care-centre",
    name: "Royal Ascot Care Centre",
    address: "2455 E Broadway, Vancouver, BC V5M 1Y1",
    coords: { lat: 49.2624, lng: -123.05554 },
  },
];

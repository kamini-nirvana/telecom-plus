export type NavLink = {
  label: string;
  href: string;
};

export type Photo = {
  src: string;
  alt: string;
};

export type SizedImage = Photo & {
  width: number;
  height: number;
};

export type SectionIntro = {
  eyebrow: string;
  heading: string;
  body: string;
};

export type ContactDetails = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  addressLines: readonly string[];
};

export type HeroContent = {
  eyebrow: string;
  heading: string;
  body: string;
  cta: NavLink;
  image: Photo;
};

export type SolutionFeature = {
  title: string;
  description: string;
};

export type Solution = {
  id: string;
  tab: string;
  eyebrow: string;
  heading: string;
  body: string;
  features: readonly SolutionFeature[];
  cta: NavLink;
  image: Photo;
};

export type AboutPoint = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description?: string;
  image: Photo;
  coords: { lat: number; lng: number };
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
  href?: string;
};

export type ProcessStep = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: SizedImage;
};

export type SocialLink = {
  platform: "facebook" | "instagram" | "linkedin";
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: readonly NavLink[];
};

export type Detail = {
  term: string;
  description: string;
};

export type PageHeroContent = {
  breadcrumbs: readonly NavLink[];
  heading: string;
  body: string;
  cta: NavLink;
  jumpLinks?: { label: string; links: readonly NavLink[] };
};

export type CtaBandContent = {
  eyebrow: string;
  heading: string;
  body: string;
  cta: NavLink;
  phonePrompt?: string;
};

export type FormField = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  autoComplete: string;
  required?: boolean;
};

export type ContactFormContent = {
  fields: readonly FormField[];
  topic: { label: string; placeholder: string; options: readonly string[] };
  message: { label: string; placeholder: string; hint: string };
};

export const CONTACT: ContactDetails = {
  phone: "604-696-3828",
  phoneHref: "tel:+16046963828",
  email: "sales@telecomplus.ca",
  emailHref: "mailto:sales@telecomplus.ca",
  addressLines: ["Unit 107, 7311 Vantage Way", "Delta, BC V4G 1C9"],
};

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const HEADER_CTA: NavLink = {
  label: "Talk to our team",
  href: "/contact#enquiry",
};

export const HERO: HeroContent = {
  eyebrow: "Business communications",
  heading: "Keep your business connected.",
  body: "Telecom Plus plans, installs and supports business phone systems, communication infrastructure and the networks behind them. We help organizations find a setup that works today and remains supported as their needs change.",
  cta: { label: "Explore solutions", href: "#solutions" },
  image: { src: "/images/hero-bg.png", alt: "" },
};

export const CLIENT_LOGOS: readonly SizedImage[] = [
  {
    src: "/images/clients/sooke-schools-62.png",
    alt: "Sooke Schools 62",
    width: 115,
    height: 30,
  },
  {
    src: "/images/clients/fairmont.png",
    alt: "Fairmont",
    width: 98,
    height: 30,
  },
  { src: "/images/clients/hilton.png", alt: "Hilton", width: 58, height: 30 },
  {
    src: "/images/clients/starbucks.png",
    alt: "Starbucks",
    width: 35,
    height: 35,
  },
  {
    src: "/images/clients/dundee-corporation.png",
    alt: "Dundee Corporation",
    width: 98,
    height: 35,
  },
  { src: "/images/clients/ubc.png", alt: "UBC", width: 26, height: 35 },
  {
    src: "/images/clients/austeville-properties.png",
    alt: "Austeville Properties Ltd",
    width: 131,
    height: 30,
  },
];

export const SOLUTIONS_INTRO: SectionIntro = {
  eyebrow: "Our solutions",
  heading: "Built around your operation.",
  body: "Explore our services, or tell us what you’re trying to solve. We’ll help you understand the options, choose the right direction and find a setup that works for your business.",
};

export const SOLUTIONS: readonly Solution[] = [
  {
    id: "communications",
    tab: "Communications",
    eyebrow: "Business communications",
    heading: "Business calling, your way.",
    body: "Choose a cloud, premises-based or hybrid phone system based on how your team works, where they work and what you already use. We plan the setup and the transition, so the new system fits your operation.",
    features: [
      {
        title: "Cloud & Premises-Based",
        description:
          "Choose a system hosted in the cloud or installed at your site.",
      },
      {
        title: "Microsoft Teams Calling",
        description:
          "Connect business calling with Teams through SIP integration.",
      },
      {
        title: "Hybrid Systems",
        description:
          "Combine cloud and on-site capabilities when your needs call for both.",
      },
      {
        title: "Migration & Relocation",
        description:
          "Move or upgrade your system with a plan for the transition.",
      },
    ],
    cta: {
      label: "Explore Communications",
      href: "/solutions/business-communications",
    },
    image: {
      src: "/images/solutions/communications.png",
      alt: "Grandstream desk phone showing the Telecom Plus website in a bright lobby",
    },
  },
  {
    id: "legacy-support",
    tab: "Legacy Support",
    eyebrow: "Legacy system support",
    heading: "Keep your current system working.",
    body: "A working phone system does not always need replacing. We help maintain Nortel and Avaya environments with compatible parts, refurbished equipment and service options while you decide what comes next.",
    features: [
      {
        title: "Nortel & Avaya",
        description:
          "Service and support for existing telephone system environments.",
      },
      {
        title: "Desk & Cordless Phones",
        description:
          "Find suitable refurbished desk phones and Avaya DECT equipment.",
      },
      {
        title: "Replacement Components",
        description:
          "Source compatible cards, accessories and refurbished parts.",
      },
      {
        title: "Service Agreements",
        description: "Arrange ongoing maintenance and help when issues arise.",
      },
    ],
    cta: { label: "Explore Legacy Support", href: "/solutions/legacy-system-support" },
    image: {
      src: "/images/solutions/legacy-support.png",
      alt: "Wall-mounted legacy telephone system cabinets and wiring",
    },
  },
  {
    id: "calling-sip",
    tab: "Calling & SIP",
    eyebrow: "Calling connectivity",
    heading: "Keep your calls connected.",
    body: "Your phone system needs the right connection to make and receive calls. We bring together analog lines, SIP trunks, business numbers and routing for both modern and existing systems.",
    features: [
      {
        title: "Analog Lines",
        description:
          "Provide line options for compatible legacy phone systems.",
      },
      {
        title: "Number Porting",
        description:
          "Move existing numbers as part of a planned system change.",
      },
      {
        title: "SIP Trunking",
        description: "Connect IP phone systems to external calling services.",
      },
      {
        title: "eFax Integration",
        description: "Connect fax workflows with your communication setup.",
      },
    ],
    cta: { label: "Explore Calling & SIP", href: "/solutions/calling-sip" },
    image: {
      src: "/images/solutions/calling-sip.png",
      alt: "Network rack with switches and patch panels",
    },
  },
  {
    id: "safety-systems",
    tab: "Safety Systems",
    eyebrow: "Safety & notification",
    heading: "Alerts that reach the right people.",
    body: "In care facilities and schools, timely communication matters. We design and support nurse call, paging and notification systems around the people who need to receive and respond to an alert.",
    features: [
      {
        title: "Nurse Call",
        description:
          "Connect patients or residents with staff in care settings.",
      },
      {
        title: "Paging",
        description:
          "Deliver announcements through connected and SIP paging systems.",
      },
      {
        title: "K–12 Notification",
        description:
          "Support situational awareness and notifications across schools.",
      },
      {
        title: "SARA Solutions",
        description:
          "Bring system status and notifications into a connected response.",
      },
    ],
    cta: { label: "Explore Safety Systems", href: "/solutions/safety-systems" },
    image: {
      src: "/images/solutions/safety-systems.png",
      alt: "Ceiling-mounted paging speaker in an office",
    },
  },
  {
    id: "infrastructure",
    tab: "Infrastructure",
    eyebrow: "Network infrastructure",
    heading: "The network behind it all.",
    body: "Phone, safety and surveillance systems depend on the infrastructure behind them. We plan and install cabling, racks, network equipment and backup power to support the connections across your site.",
    features: [
      {
        title: "Copper & Fibre",
        description:
          "Install structured cabling for devices and systems across your site.",
      },
      {
        title: "Networking & Routing",
        description:
          "Configure routers, firewalls and network connections for the environment.",
      },
      {
        title: "Racks & Equipment",
        description:
          "Organize the hardware that supports your communication network.",
      },
      {
        title: "Backup Power",
        description: "Design and install UPS systems for essential equipment.",
      },
    ],
    cta: { label: "Explore Infrastructure", href: "/solutions/network-infrastructure" },
    image: {
      src: "/images/solutions/infrastructure.png",
      alt: "Technician fitting a patch panel into a network rack",
    },
  },
  {
    id: "surveillance",
    tab: "Surveillance",
    eyebrow: "Video surveillance",
    heading: "See more of your site.",
    body: "A useful surveillance system starts with what you need to monitor. We plan camera placement, recording capacity and viewing access together, then install a setup suited to your location.",
    features: [
      {
        title: "Camera Systems",
        description:
          "Select and install cameras for the areas your site needs covered.",
      },
      {
        title: "Remote Viewing",
        description:
          "Give authorized team members access when away from the site.",
      },
      {
        title: "Recording & Storage",
        description:
          "Plan NVR capacity around the cameras and recording needs.",
      },
      {
        title: "Backup Options",
        description: "Consider on-site or remote backup for supported systems.",
      },
    ],
    cta: { label: "Explore Surveillance", href: "/solutions/video-surveillance" },
    image: {
      src: "/images/solutions/surveillance.png",
      alt: "Telecom Plus dome security camera mounted on a ceiling",
    },
  },
  {
    id: "backup-power",
    tab: "Backup Power",
    eyebrow: "UPS solutions",
    heading: "Smart Backup Power",
    body: "Keep essential equipment powered during an outage with an uninterruptible power supply (UPS). We review your equipment, power usage and required backup time to recommend a suitable setup.",
    features: [
      {
        title: "Equipment Review",
        description:
          "Identify which devices need backup power and their power requirements.",
      },
      {
        title: "Usage & Runtime",
        description:
          "Assess how much power your equipment uses and how long backup is needed.",
      },
      {
        title: "UPS Recommendations",
        description:
          "Choose a UPS with the capacity and features suited to your equipment.",
      },
      {
        title: "Backup Planning",
        description:
          "Plan which equipment the UPS will support and how it fits into your existing setup.",
      },
    ],
    cta: { label: "Explore Backup Power", href: "/solutions/backup-power" },
    image: {
      src: "/images/solutions/backup-power.png",
      alt: "Eaton and APC UPS units installed side by side",
    },
  },
];

export const ABOUT = {
  eyebrow: "Why Telecom Plus",
  statement:
    "Telecom Plus, a division of BY Solution, designs, installs and supports communication systems that fit the way your organization works. Starting with your existing equipment and future needs, our team guides you through planning and installation, then stays involved with ongoing support as those needs change.",
};

export const ABOUT_POINTS: readonly AboutPoint[] = [
  {
    title: "Start with the site",
    description:
      "We assess your existing environment before recommending a system or planning an upgrade.",
  },
  {
    title: "Work with what you have",
    description:
      "Where it makes sense, new systems can be planned around compatible equipment already in place.",
  },
  {
    title: "Stay connected",
    description:
      "Implementation, maintenance and support are part of the relationship, not an afterthought.",
  },
];

export const PROJECTS_INTRO = {
  eyebrow: "Our work",
  heading: "Projects built around real business needs.",
  body: "Explore a selection of phone, network and communication projects completed by the BY Solution team, highlighting the range of systems and business environments they’ve supported.",
  allProjects: { label: "Show all projects", href: "/projects" },
};

export const PROJECTS: readonly Project[] = [
  {
    id: "dunsmuir-middle-school",
    title: "Dunsmuir Middle School",
    category: "Phone systems & integration",
    location: "Colwood, Vancouver Island",
    image: {
      src: "/images/projects/dunsmuir-middle-school.png",
      alt: "Telecom Plus service vans and team outside Dunsmuir Middle School",
    },
    coords: { lat: 48.4436, lng: -123.4985 },
  },
  {
    id: "chilliwack-ford",
    title: "Chilliwack Ford",
    category: "Phone systems & network infrastructure",
    location: "Chilliwack",
    description:
      "Voice network infrastructure and a VoIP phone system to support day-to-day communication across the dealership.",
    image: {
      src: "/images/projects/chilliwack-ford.png",
      alt: "Technician on a lift at the Chilliwack Ford service entrance",
    },
    coords: { lat: 49.1627, lng: -121.9554 },
  },
  {
    id: "school-district-62-board-office",
    title: "School District 62 Board Office",
    category: "Phone systems & integration",
    location: "Langford, Vancouver Island",
    image: {
      src: "/images/projects/school-district-62-board-office.png",
      alt: "Telecom Plus team outside the School District No. 62 Sooke administration office",
    },
    coords: { lat: 48.4505, lng: -123.5071 },
  },
];

export const DEFAULT_PROJECT_ID = "chilliwack-ford";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "michauds-salon",
    quote: "They are knowledgeable, friendly, caring and pragmatic.",
    author: "Michaud’s Salon & Wellness Centre",
    context: "Feedback on BY Solution’s phone system and networking work.",
    href: "/projects",
  },
  {
    id: "michauds-salon2",
    quote: "They are knowledgeable, friendly, caring and pragmatic.",
    author: "Michaud’s Salon & Wellness Centre",
    context: "Feedback on BY Solution’s phone system and networking work.",
    href: "/projects",
  },
];

export const PROCESS_INTRO: SectionIntro = {
  eyebrow: "How We Work",
  heading: "From first conversation to ongoing care.",
  body: "A communication system should be planned around the site, introduced carefully and supported after it goes live. Our process connects each stage so your team knows what happens next.",
};

const STEP_IMAGE = { width: 360, height: 230 };

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "contact-us",
    eyebrow: "Getting Started",
    title: "Contact Us",
    body: "Tell us about your organization, current systems and what you need to improve. Whether you’re upgrading equipment, moving locations or resolving an issue, this conversation helps us understand your priorities and identify the next step.",
    image: {
      src: "/images/process/contact-us.png",
      alt: "Handshake over signed paperwork",
      ...STEP_IMAGE,
    },
  },
  {
    id: "site-survey",
    eyebrow: "Understanding Needs",
    title: "Site Survey & Investigative Meeting",
    body: "We meet with your team to review your site, equipment and infrastructure. Understanding how your systems are used, where problems occur and what needs to connect helps us establish the requirements for your solution.",
    image: {
      src: "/images/process/site-survey.png",
      alt: "Telecom Plus team standing in a server room during a site survey",
      ...STEP_IMAGE,
    },
  },
  {
    id: "customized-design",
    eyebrow: "Solution Planning",
    title: "Customized Design",
    body: "We design a solution around your operations, existing equipment and future needs. The plan outlines the recommended systems, how they connect and what installation involves, so your team understands the approach before implementation.",
    image: {
      src: "/images/process/customized-design.png",
      alt: "Rack layout diagram prepared for a customer site",
      ...STEP_IMAGE,
    },
  },
  {
    id: "implementation-migration",
    eyebrow: "System Transition",
    title: "Implementation & Migration",
    body: "We coordinate installation and migration with your team, including equipment setup, system connections and the transition from existing services. We plan around your operations and test the completed setup to confirm it works as intended.",
    image: {
      src: "/images/process/implementation-migration.png",
      alt: "Telecom Plus technicians running cable inside a salon",
      ...STEP_IMAGE,
    },
  },
  {
    id: "service-level-agreement",
    eyebrow: "Reliable Support",
    title: "Service-Level Agreement & Support",
    body: "We establish the service-level agreement, support responsibilities and how to request assistance. Your team has a clear point of contact for technical issues and understands the support available after installation.",
    image: {
      src: "/images/process/service-level-agreement.png",
      alt: "Technician in a safety vest beside a network rack",
      ...STEP_IMAGE,
    },
  },
  {
    id: "ongoing-monitoring",
    eyebrow: "Continued Care",
    title: "Ongoing Monitoring & Training",
    body: "Through agreed monitoring and training, we help your team use the system and address issues. As equipment, staffing or operational needs change, we revisit your requirements and plan the next improvements.",
    image: {
      src: "/images/process/ongoing-monitoring.png",
      alt: "Telecom Plus technicians configuring desk phones with a customer",
      ...STEP_IMAGE,
    },
  },
];

export const CONTACT_INTRO = {
  prompt: "Prefer to talk?",
  heading: "Start the conversation.",
  body: "Share a few details about your organization and what you need.",
  submitLabel: "Get in touch",
};

export const FOOTER = {
  tagline: "Let’s keep your business connected.",
  body: "Business phones, networks and workplace communications, backed by local support.",
  legal:
    "© 2026 Telecom Plus is a division of BY Solution. All rights reserved.",
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    platform: "facebook",
    label: "Telecom Plus on Facebook",
    href: "https://www.facebook.com/",
  },
  {
    platform: "instagram",
    label: "Telecom Plus on Instagram",
    href: "https://www.instagram.com/",
  },
  {
    platform: "linkedin",
    label: "Telecom Plus on LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Solutions",
    links: [
      {
        label: "Business Communications",
        href: "/solutions/business-communications",
      },
      { label: "Legacy System Support", href: "/solutions/legacy-system-support" },
      { label: "Calling & SIP", href: "/solutions/calling-sip" },
      { label: "Safety Systems", href: "/solutions/safety-systems" },
      { label: "Network Infrastructure", href: "/solutions/network-infrastructure" },
      { label: "Video Surveillance", href: "/solutions/video-surveillance" },
      { label: "Backup Power", href: "/solutions/backup-power" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Telecom Plus", href: "/about" },
      { label: "Selected Work", href: "/projects" },
      { label: "Contact", href: "/contact" },
      { label: "Customer Support", href: CONTACT.phoneHref },
    ],
  },
];

export const CTA_BAND: CtaBandContent = {
  eyebrow: "Start the conversation",
  heading: "Your next connection starts here.",
  body: "Tell us about your organization and what you need. We’ll help you understand your options and find the right direction.",
  cta: { label: "Talk to our team", href: "/contact#enquiry" },
  phonePrompt: "Prefer to talk?",
};

export const CONTACT_FORM: ContactFormContent = {
  fields: [
    {
      name: "firstName",
      label: "First name",
      placeholder: "First name",
      autoComplete: "given-name",
      required: true,
    },
    {
      name: "lastName",
      label: "Last name",
      placeholder: "Last name",
      autoComplete: "family-name",
    },
    {
      name: "businessName",
      label: "Organization",
      placeholder: "Business or organization name",
      autoComplete: "organization",
    },
    {
      name: "location",
      label: "City / service location",
      placeholder: "Where is the work needed?",
      autoComplete: "address-level2",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      placeholder: "you@organization.ca",
      type: "email",
      autoComplete: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Best number to reach you",
      type: "tel",
      autoComplete: "tel",
    },
  ],
  topic: {
    label: "What can we help with?",
    placeholder: "Select an option",
    options: [
      "Business communications",
      "Legacy system support",
      "Calling & SIP",
      "Safety systems",
      "Network infrastructure",
      "Video surveillance",
      "Backup power",
      "Something else",
    ],
  },
  message: {
    label: "Message",
    placeholder:
      "Tell us about your existing system, the issue or the work you’re planning.",
    hint: "Please don’t include passwords, access codes or other sensitive information.",
  },
};

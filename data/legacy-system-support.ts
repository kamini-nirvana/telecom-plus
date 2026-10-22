import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const LEGACY_SYSTEM_SUPPORT_META: Metadata = {
  title: "Legacy System Support — Nortel and Avaya maintenance and parts",
  description:
    "Maintenance, replacement cards, refurbished phones and service agreements for existing Nortel and Avaya phone systems, plus upgrade planning when it’s time.",
  alternates: { canonical: "/solutions/legacy-system-support" },
};

export const LEGACY_SYSTEM_SUPPORT: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      {
        label: "Legacy System Support",
        href: "/solutions/legacy-system-support",
      },
    ],
    heading: "Keep your system working.",
    body: "We help keep your Nortel or Avaya phone system running with maintenance, replacement parts and refurbished phones. If you’re ready to upgrade, we can help with that too.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "What we support",
      heading: "Support for what’s installed.",
      body: "A failed handset or system card doesn’t always mean replacing the whole system. We check what’s installed and source compatible replacements where available.",
    },
    items: [
      {
        term: "Nortel & Avaya Systems",
        description:
          "Support for legacy Nortel and Avaya platforms, including Blue and Red portfolios. We confirm support options against your model and configuration.",
      },
      {
        term: "Replacement Cards",
        description:
          "Replacement system cards matched to your installed equipment. We confirm the card type and compatibility before supplying a replacement.",
      },
      {
        term: "Refurbished Phones & Parts",
        description:
          "Refurbished desk phones, parts and accessories for existing installations. Availability depends on the model.",
      },
      {
        term: "Avaya DECT Equipment",
        description:
          "Avaya DECT cordless equipment, with compatibility checked against your existing wireless phone system.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "Service agreements",
      heading: "Support when faults happen.",
      body: "Arrange maintenance for your existing system and know who to call when something stops working. Service agreements include 24/7 support options for supported installations.",
    },
    items: [
      {
        title: "Fault Investigation",
        body: "We investigate reported problems to identify whether the fault involves a handset, system component, configuration or service connection.",
      },
      {
        title: "Parts & Replacement",
        body: "We check replacement options for failed equipment and confirm availability before planning the work.",
      },
      {
        title: "Defined Support Coverage",
        body: "Your agreement sets out the equipment covered, support hours, responsibilities and the process for requesting assistance.",
      },
      {
        title: "24/7 Support Options",
        body: "Round-the-clock support is available through an SLA. Response commitments, on-site attendance and parts coverage are defined in the agreement.",
      },
    ],
    links: [
      {
        label: "Explore calling & SIP services",
        href: "/solutions/calling-sip",
      },
      {
        label: "Explore replacement phone systems",
        href: "/solutions/business-communications",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Repair or replace",
      heading: "Know when to upgrade.",
      body: "Age alone doesn’t decide whether a phone system needs replacing. We review its condition, parts availability and the functions you need, then explain the options for keeping it running or moving to a new system.",
    },
    image: {
      src: "/images/solutions/legacy-support2.png",
      alt: "Wall-mounted legacy telephone system cabinets and wiring",
    },
    factors: [
      {
        term: "System condition",
        description:
          "The installed platform, recurring faults, capacity and components showing signs of failure.",
      },
      {
        term: "Parts availability",
        description:
          "Whether compatible cards, phones and other replacement components can still be sourced.",
      },
      {
        term: "Operational needs",
        description:
          "The extensions, locations, cordless phones and connected functions your team relies on.",
      },
      {
        term: "Replacement planning",
        description:
          "What can stay, what needs changing and how to schedule migration around your operations.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "Before you replace",
      heading: "Common questions.",
      body: "What to know about replacement parts, supported equipment and service agreements.",
    },
    questions: [
      {
        question: "Does one failed part mean replacing the system?",
        answer:
          "Not necessarily. A faulty handset or system card may be replaceable without changing the PBX. We check the cause of the fault, the system’s condition and whether a compatible replacement is available.",
      },
      {
        question: "Can you support every Nortel or Avaya system?",
        answer:
          "Support depends on the model, software version, configuration and available parts. Send us the system details or a clear photo of the equipment label so we can assess the options.",
      },
      {
        question: "Are replacement parts new or refurbished?",
        answer:
          "We supply refurbished phones, parts and accessories for legacy systems. Your quotation will confirm the condition of the equipment, compatibility and any applicable warranty.",
      },
      {
        question: "Is 24/7 support included automatically?",
        answer:
          "No. It is available through a service-level agreement. Your agreement defines support hours, response commitments, covered equipment and exclusions.",
      },
      {
        question: "When is replacement better than another repair?",
        answer:
          "Consider replacement when faults recur, essential parts are difficult to source or the system no longer meets your needs. We review these factors alongside repair costs and the requirements of a new installation.",
      },
    ],
  },
};

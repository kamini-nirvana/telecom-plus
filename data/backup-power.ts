import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const BACKUP_POWER_META: Metadata = {
  title: "Backup Power — UPS design, installation and replacement",
  description:
    "UPS design, installation and replacement for communications and network equipment, sized around the connected load, required runtime and available circuits.",
  alternates: { canonical: "/solutions/backup-power" },
};

export const BACKUP_POWER: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Backup Power", href: "/solutions/backup-power" },
    ],
    heading: "Plan for the power going out.",
    body: "UPS design, installation and replacement for your communications and network equipment. We assess the connected load and required runtime, along with the circuits needed to support the installation.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "Backup power",
      heading: "Keep essential equipment powered.",
      body: "An uninterruptible power supply (UPS) provides temporary battery power when mains power fails. We size the system around the equipment you need to support and how long it needs to run.",
    },
    items: [
      {
        term: "UPS Design & Installation",
        description:
          "Select and install a UPS for the connected equipment, required runtime and site conditions, with capacity for agreed future additions.",
      },
      {
        term: "Smart UPS Configuration",
        description:
          "Configure the monitoring, status alerts and shutdown functions supported by the selected UPS and connected equipment.",
      },
      {
        term: "Electrical Circuits",
        description:
          "Plan the circuit and outlet requirements for the selected UPS, with electrical installation included where specified in the project scope.",
      },
      {
        term: "Equipment Replacement",
        description:
          "Assess an existing UPS before replacement, checking its capacity, battery condition, connections and suitability for the current load.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "System planning",
      heading: "Back up the whole connection.",
      body: "Keeping a phone or server powered is only useful if the equipment it depends on keeps running too. We review the connected devices and power paths as part of the design.",
    },
    items: [
      {
        title: "Connected Equipment",
        body: "Identify the PBX, switches, routers, gateways and other agreed devices that need backup power to support the required functions.",
      },
      {
        title: "Load & Runtime",
        body: "Match UPS capacity and battery runtime to the expected load. Runtime estimates are checked against the selected equipment and battery configuration.",
      },
      {
        title: "Permitting & Auditing",
        body: "Review the existing power arrangement and identify applicable electrical work, permit and audit requirements within the agreed scope.",
      },
      {
        title: "Monitoring & Upkeep",
        body: "Agree on supported alerts, periodic checks and battery replacement planning. Features and maintenance needs depend on the chosen UPS.",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Site assessment",
      heading: "Decide what needs to stay on.",
      body: "We start with the systems you need during an interruption. Then we assess their power requirements, the available circuits and the runtime needed to continue operating or shut down equipment safely.",
    },
    image: {
      src: "/images/solutions/backup-power2.png",
      alt: "Eaton and APC UPS units installed side by side",
    },
    factors: [
      {
        term: "Essential functions",
        description:
          "Which systems need battery power, and which connected devices those functions depend on.",
      },
      {
        term: "Load & expansion",
        description:
          "Expected power draw, equipment ratings and any planned additions that affect UPS capacity.",
      },
      {
        term: "Runtime & shutdown",
        description:
          "How long equipment needs to remain powered and whether a controlled shutdown is required.",
      },
      {
        term: "Site conditions",
        description:
          "Circuits, outlets, rack space, ventilation, access and the installation work required.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "Practical answers",
      heading: "Common questions.",
      body: "Runtime, connected equipment and when an existing UPS needs attention.",
    },
    questions: [
      {
        question: "How long will a UPS keep our equipment running?",
        answer:
          "Runtime depends on the connected load, battery capacity, battery condition and UPS configuration. We agree on a target and assess the selected system against it. A UPS does not provide unlimited backup power.",
      },
      {
        question: "Will a UPS keep our phones and internet working?",
        answer:
          "It can power local equipment, but the PBX, switches, router and other required devices must all be considered. External calling and internet access also depend on the provider’s network remaining available.",
      },
      {
        question: "Can we keep our existing UPS?",
        answer:
          "Possibly. We check its capacity, battery condition, connections and suitability for your current equipment. A battery replacement may be enough in some cases; others require a different UPS.",
      },
      {
        question: "Is a UPS the same as a generator?",
        answer:
          "No. A UPS uses stored battery energy to provide temporary power. A generator is a separate power source. Where a generator is already installed, UPS compatibility and the power arrangement need assessment.",
      },
      {
        question: "Does UPS installation need electrical work?",
        answer:
          "Some units connect to a suitable existing outlet; others need a dedicated circuit or hardwired connection. We confirm the selected unit’s requirements and the applicable installation and permit scope before work begins.",
      },
    ],
  },
};

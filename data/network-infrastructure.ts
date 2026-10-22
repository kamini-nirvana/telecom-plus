import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const NETWORK_INFRASTRUCTURE_META: Metadata = {
  title: "Network Infrastructure — Cabling, racks, Wi-Fi and firewalls",
  description:
    "Copper and fibre cabling, equipment racks, network installation, Wi-Fi access points and firewall configuration for the systems across your site.",
  alternates: { canonical: "/solutions/network-infrastructure" },
};

export const NETWORK_INFRASTRUCTURE: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      {
        label: "Network Infrastructure",
        href: "/solutions/network-infrastructure",
      },
    ],
    heading: "Connect your workplace.",
    body: "Copper and fibre cabling, equipment racks, routing and firewall configuration. We design and install the connections your phones, computers and other networked systems rely on.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "Infrastructure",
      heading: "From cable to connection.",
      body: "A working network starts with the cabling and equipment behind it. We bring installation and configuration together so the physical connections support the systems you need to run.",
    },
    items: [
      {
        term: "Copper & Fibre Cabling",
        description:
          "Cabling for voice and data connections, with cable type, routes and termination points selected for the site and required performance.",
      },
      {
        term: "Racks & Cable Management",
        description:
          "Equipment rack installation and cable organization, with access for connections, maintenance and future additions.",
      },
      {
        term: "Network Installation",
        description:
          "Installation and provisioning of network equipment, with ports and connections configured for the agreed devices and services.",
      },
      {
        term: "Routing & Firewalls",
        description:
          "Router and firewall hardware configuration, from small offices to larger networks, based on your connectivity and access requirements.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "Design & configuration",
      heading: "Plan how it connects.",
      body: "Adding equipment changes what a network has to carry. We review the connected devices, traffic and access requirements before specifying cabling and configuring the network.",
    },
    items: [
      {
        title: "Network Design",
        body: "Plan equipment locations, network connections and capacity around your current systems and expected additions.",
      },
      {
        title: "Wi-Fi Access Points",
        body: "Install or replace wireless access points, with placement and configuration reviewed for the space, users and devices they need to serve.",
      },
      {
        title: "Firewall Configuration",
        body: "Set firewall rules and permitted connections around your access requirements. Security depends on correct configuration and ongoing upkeep.",
      },
      {
        title: "Cabling Certification",
        body: "Agree on the required cable tests, certification records and applicable warranty coverage as part of the installation scope.",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Site assessment",
      heading: "Check what’s behind the wall.",
      body: "Before adding cable or replacing equipment, we review the existing installation and what needs to connect. The assessment helps identify what can stay, where capacity is limited and how to schedule the work.",
    },
    image: {
      src: "/images/solutions/infrastructure2 .png",
      alt: "Technician fitting a patch panel into a network rack",
    },
    factors: [
      {
        term: "Existing installation",
        description:
          "Cable condition, available routes, equipment racks and the connections already in use.",
      },
      {
        term: "Devices & capacity",
        description:
          "Phones, computers and other networked devices, their traffic requirements and planned additions.",
      },
      {
        term: "Access & security",
        description:
          "Which users and systems need to communicate, and where routing or firewall controls are required.",
      },
      {
        term: "Installation & testing",
        description:
          "Site access, work schedules, service interruptions and the testing and documentation required.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "Practical answers",
      heading: "Common questions.",
      body: "Existing cabling, network performance and what to expect from installation.",
    },
    questions: [
      {
        question: "Can we reuse the cabling already installed?",
        answer:
          "Often, but its condition and performance need checking. We review the cable type, terminations and test results against the requirements of the devices you plan to connect.",
      },
      {
        question: "Do we need copper or fibre?",
        answer:
          "The choice depends on distance, required capacity, the route and the equipment at each end. We assess those requirements before specifying the connection.",
      },
      {
        question: "Will a new network make our internet faster?",
        answer:
          "It may resolve bottlenecks inside your premises, but it cannot increase the speed supplied by your internet provider. We assess local network capacity and the internet service separately.",
      },
      {
        question: "Will the installation interrupt our business?",
        answer:
          "Some work may require a planned interruption. We agree on access, timing and the connections affected before work begins, and stage the installation where practical.",
      },
      {
        question: "Are certification and warranty included?",
        answer:
          "The quotation defines the tests, certification records and warranty coverage included. Coverage depends on the selected products, installation scope and applicable manufacturer requirements.",
      },
    ],
  },
};

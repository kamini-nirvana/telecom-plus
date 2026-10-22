import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const CALLING_SIP_META: Metadata = {
  title: "Calling & SIP — Analog lines, SIP trunks, number porting and eFax",
  description:
    "Analog phone lines, SIP trunks, Microsoft Teams SIP, number porting and hosted eFax, matched to your phone system and planned around a careful changeover.",
  alternates: { canonical: "/solutions/calling-sip" },
};

export const CALLING_SIP: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Calling & SIP", href: "/solutions/calling-sip" },
    ],
    heading: "Connect your business calls.",
    body: "Analog lines and SIP trunks for your phone system, with number porting and eFax services. We check compatibility and plan the changeover before moving your service.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "Calling services",
      heading: "The connection behind every call.",
      body: "Your phone system needs a telephone service to make and receive outside calls. We provide analog lines and SIP connections, matched to your equipment and calling requirements.",
    },
    items: [
      {
        term: "Analog Phone Lines",
        description:
          "Telephone lines for compatible legacy PBX systems. We confirm service availability, delivery method and the interfaces your equipment requires.",
      },
      {
        term: "SIP Trunks",
        description:
          "Connect a compatible IP phone system to the telephone network. We size the service around the number of calls you need at the same time.",
      },
      {
        term: "Microsoft Teams SIP",
        description:
          "SIP connectivity for a supported Teams Phone integration, with licensing, routing and integration equipment confirmed during planning.",
      },
      {
        term: "Number Porting & Routing",
        description:
          "Transfer eligible business numbers and configure where incoming calls are delivered. Porting availability and timing depend on the numbers and providers involved.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "Related services",
      heading: "Keep numbers. Add options.",
      body: "A change of telephone service can also involve fax numbers, server connections and hosting requirements. We review these alongside your calling service.",
    },
    items: [
      {
        title: "eFax Hosting & Integration",
        body: "Hosted fax and routing options for your existing workflow. We confirm number availability, delivery methods and compatibility before migration.",
      },
      {
        title: "Wholesale SIP Connectivity",
        body: "SIP server connectivity for wholesale requirements, with technical interfaces, capacity and routing agreed before provisioning.",
      },
      {
        title: "Hosting & Privacy Requirements",
        body: "Canadian and US SIP server options are available. We confirm the selected service’s hosting arrangements against your organization’s requirements.",
      },
      {
        title: "Existing System Integration",
        body: "Keep a compatible PBX while changing its calling service. We check whether the connection needs a gateway, additional licensing or configuration changes.",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Before changeover",
      heading: "Check the details first.",
      body: "Moving a number is only one part of switching providers. We check the system connection, call capacity and services tied to your account, then agree on the changeover and testing plan.",
    },
    image: {
      src: "/images/solutions/calling-sip2.png",
      alt: "Network rack with switches and patch panels",
    },
    factors: [
      {
        term: "System connection",
        description:
          "PBX model, software, available interfaces and any gateway or licensing requirements.",
      },
      {
        term: "Call capacity",
        description:
          "Busy-period call volumes, simultaneous calls and the numbers you need to receive calls on.",
      },
      {
        term: "Connected services",
        description:
          "Fax numbers and any alarms, entry systems or other devices sharing the existing lines.",
      },
      {
        term: "Continuity & porting",
        description:
          "Number ownership, transfer eligibility, changeover timing and available backup routing.",
      },
    ],
    comparison: {
      columns: ["Consideration", "Analog lines", "SIP trunks"],
      rows: [
        {
          label: "System connection",
          values: [
            "Analog interfaces on the PBX or connected device.",
            "A compatible IP PBX or a suitable gateway.",
          ],
        },
        {
          label: "Call capacity",
          values: [
            "Typically one active call per line.",
            "Multiple simultaneous calls, up to the service’s agreed channel capacity.",
          ],
        },
        {
          label: "Service delivery",
          values: [
            "Confirm whether supplied over copper or through provider equipment.",
            "Delivered over an IP connection; capacity and reliability need assessment.",
          ],
        },
        {
          label: "Outage planning",
          values: [
            "Power requirements depend on the delivery method and connected equipment.",
            "Plan for connectivity, local power and any available failover or diversion options.",
          ],
        },
      ],
    },
  },
  faq: {
    intro: {
      eyebrow: "Common questions",
      heading: "Common questions.",
      body: "Keeping your numbers, connecting your equipment and planning for interruptions.",
    },
    questions: [
      {
        question: "Can we keep our business phone numbers?",
        answer:
          "Eligible numbers can usually be transferred, subject to provider and number availability. We confirm the account details and transfer date. Keep your existing service active until porting is complete.",
      },
      {
        question: "Can SIP trunks work with our existing PBX?",
        answer:
          "That depends on the PBX model, software and supported interfaces. Some systems connect directly; others need a gateway or additional licensing. We check the requirements before recommending a service.",
      },
      {
        question: "Will our fax machine work over SIP?",
        answer:
          "Not automatically. Fax compatibility depends on the device, gateway and service configuration. We assess whether to retain the fax machine or use a hosted eFax service, then test the chosen setup.",
      },
      {
        question: "What happens if our internet connection fails?",
        answer:
          "SIP calling depends on an IP connection. Backup connectivity or call diversion may be available, depending on the service. We also review power for the PBX, router and any gateway.",
      },
      {
        question: "Does a Canadian server make the service PIPEDA compliant?",
        answer:
          "Server location alone does not establish compliance. Hosting, access controls, retention and how personal information is handled also matter. Ask us for the selected service’s privacy and hosting details.",
      },
    ],
  },
};

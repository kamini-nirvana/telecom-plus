import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const SAFETY_SYSTEMS_META: Metadata = {
  title: "Safety Systems — Nurse call, school notifications and paging",
  description:
    "Nurse call, duress alerts, K–12 notification and SIP paging systems, with alert routing planned around your site, your staff and your response procedures.",
  alternates: { canonical: "/solutions/safety-systems" },
};

export const SAFETY_SYSTEMS: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Safety Systems", href: "/solutions/safety-systems" },
    ],
    heading: "Know when. Know where.",
    body: "Nurse call, school notifications and paging systems that help staff know when and where assistance is needed. We plan the devices, connections and alert routing around your site.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "Safety systems",
      heading: "Connect calls for help.",
      body: "A call button is only the start. We connect supported devices to the people responsible for responding, with alert details and delivery methods agreed during planning.",
    },
    items: [
      {
        term: "Nurse Call",
        description:
          "Call buttons, pull cords and plunger cords for care environments, with compatible bed and chair alarms and fall-related alert devices.",
      },
      {
        term: "Duress & Location Alerts",
        description:
          "Staff duress devices and location information to help identify where assistance is needed. Coverage and location detail depend on the selected system.",
      },
      {
        term: "K–12 Notifications",
        description:
          "Situational awareness and mass notification systems for schools, with message delivery planned around buildings, users and response procedures.",
      },
      {
        term: "Paging & Announcements",
        description:
          "SIP paging and automated announcements integrated with compatible communication systems for routine messages and urgent notifications.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "System integration",
      heading: "Make alerts useful.",
      body: "An alert needs to tell staff what happened, where it happened and what to do next. We configure supported integrations and delivery routes around your response procedures.",
    },
    items: [
      {
        title: "SARA Integration",
        body: "Status Solutions’ SARA platform can bring alerts from compatible nurse call, security and environmental systems into a shared notification workflow.",
      },
      {
        title: "Alert Routing",
        body: "Define which staff or teams receive each alert and which supported devices deliver it. Escalation options depend on the platform and configuration.",
      },
      {
        title: "Paging Integration",
        body: "Connect compatible telephone and paging systems, with announcement zones and automated messages configured for the site.",
      },
      {
        title: "Maintenance & 24/7 Support",
        body: "Service agreements for supported installations, including 24/7 support options. Coverage, response commitments and maintenance responsibilities are agreed in advance.",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Site planning",
      heading: "Plan the response first.",
      body: "We start with the events your team needs to know about and who responds. Then we assess device locations, coverage, existing equipment and the network and power the system depends on.",
    },
    image: {
      src: "/images/solutions/safety-systems.png",
      alt: "Ceiling-mounted paging speaker in an office",
    },
    factors: [
      {
        term: "Events & locations",
        description:
          "Where calls or alarms originate, which events trigger alerts and the location detail staff need.",
      },
      {
        term: "People & procedures",
        description:
          "Who receives each alert, how it is acknowledged and what happens if there is no response.",
      },
      {
        term: "Coverage & connections",
        description:
          "Device coverage, compatible interfaces, paging zones and the network and power requirements.",
      },
      {
        term: "Testing & upkeep",
        description:
          "Agreed alert tests, staff training, maintenance responsibilities and support arrangements.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "Practical answers",
      heading: "Common questions.",
      body: "Existing equipment, alert delivery and support after installation.",
    },
    questions: [
      {
        question: "Can you connect to our existing nurse call system?",
        answer:
          "Possibly. We check the make, model, software and available interfaces before confirming integration. Some installations can retain existing call points; others need interface equipment or replacement devices.",
      },
      {
        question: "Where can staff receive alerts?",
        answer:
          "Delivery options depend on the platform and connected equipment. We confirm the supported phones, displays, paging or other endpoints, then test the agreed routes with your team.",
      },
      {
        question: "Do bed and chair alarms prevent falls?",
        answer:
          "These devices alert staff to events such as a person leaving a bed or chair, depending on the sensor. They support staff response and care procedures; they do not guarantee that a fall will be prevented.",
      },
      {
        question: "What happens during a power or network outage?",
        answer:
          "Operation depends on the devices, connections and backup power in the installed system. We assess these dependencies and agree on continuity arrangements and outage testing during planning.",
      },
      {
        question: "Is 24/7 support included?",
        answer:
          "24/7 support is available through a service agreement. The agreement defines covered equipment, support hours, response commitments and responsibilities for testing and maintenance.",
      },
    ],
  },
};

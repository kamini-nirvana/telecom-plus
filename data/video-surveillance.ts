import type { Metadata } from "next";
import type { SolutionDetailContent } from "@/data/business-communications";

export const VIDEO_SURVEILLANCE_META: Metadata = {
  title: "Video Surveillance — Cameras, recording and remote viewing",
  description:
    "Camera supply and installation, 8MP/4K options, NVR recording and storage, and remote and mobile viewing, planned around the areas you need to see.",
  alternates: { canonical: "/solutions/video-surveillance" },
};

export const VIDEO_SURVEILLANCE: SolutionDetailContent = {
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "Video Surveillance", href: "/solutions/video-surveillance" },
    ],
    heading: "See your site. Keep a record.",
    body: "Camera supply, installation and recording systems, with remote and mobile viewing. We plan camera positions, image detail and storage around the areas you need to see.",
    cta: { label: "Talk to our team", href: "/contact#enquiry" },
  },
  overview: {
    intro: {
      eyebrow: "Video surveillance",
      heading: "Coverage with a purpose.",
      body: "An entrance, loading area and open workspace need different camera views. We select and position equipment around what you need to observe and review.",
    },
    items: [
      {
        term: "Camera Supply & Installation",
        description:
          "Cameras selected for the location and viewing task, with mounting, cabling and connections included in the agreed installation.",
      },
      {
        term: "8MP / 4K Cameras",
        description:
          "High-resolution options where additional image detail is needed. Lens choice, lighting, distance and recording settings also affect the usable image.",
      },
      {
        term: "Recording & Storage",
        description:
          "Network video recorders sized around camera count, recording quality, recording schedules and the required footage retention period.",
      },
      {
        term: "Remote & Mobile Viewing",
        description:
          "Access live and recorded footage through supported applications, with user permissions and remote connectivity configured for the selected system.",
      },
    ],
  },
  services: {
    intro: {
      eyebrow: "System configuration",
      heading: "Make footage usable.",
      body: "Recording video is only part of the setup. We configure how footage is stored, who can access it and how recordings can be retrieved when needed.",
    },
    items: [
      {
        title: "Custom NVR Capacity",
        body: "Select recorder channels and storage capacity for the agreed cameras and retention target, with room for expansion where specified.",
      },
      {
        title: "Viewing Permissions",
        body: "Configure supported user roles and viewing access so authorized staff can reach the cameras and recordings they need.",
      },
      {
        title: "On-Site & Remote Backup",
        body: "Backup options assessed for the chosen recorder, network capacity and footage requirements. The scope defines what is copied and where it is retained.",
      },
      {
        title: "Existing System Upgrades",
        body: "Assess installed cameras, recorders and cabling before adding equipment. Reuse depends on compatibility, condition and the required image quality.",
      },
    ],
  },
  planning: {
    intro: {
      eyebrow: "Site planning",
      heading: "Start with the view.",
      body: "We review the areas you need to cover and the detail you expect to see. Camera position, lighting and storage are planned together so the proposed system matches the task.",
    },
    image: {
      src: "/images/solutions/surveillance2.png",
      alt: "Telecom Plus dome security camera mounted on a ceiling",
    },
    factors: [
      {
        term: "Areas & detail",
        description:
          "Entrances, work areas and other agreed locations, plus the detail needed in live and recorded views.",
      },
      {
        term: "Lighting & positioning",
        description:
          "Viewing angles, distance, glare, changing light levels and physical obstructions.",
      },
      {
        term: "Recording & retention",
        description:
          "Camera count, recording settings, storage capacity and how long footage needs to be kept.",
      },
      {
        term: "Access & connections",
        description:
          "Authorized users, remote access, cable routes, network capacity and equipment power.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "Practical answers",
      heading: "Common questions.",
      body: "Image quality, recording time and viewing footage away from the site.",
    },
    questions: [
      {
        question: "Does a 4K camera guarantee clear identification?",
        answer:
          "No. Resolution is one factor. Lens choice, distance, lighting, viewing angle and compression all affect recorded detail. We plan the view around what you need to see.",
      },
      {
        question: "How long can we keep recordings?",
        answer:
          "Retention depends on storage capacity, camera count, bitrate and recording schedules. We size the recorder around an agreed target and confirm the recording settings during setup.",
      },
      {
        question: "Can we view cameras on a phone?",
        answer:
          "Supported systems offer mobile viewing. We confirm application compatibility, user permissions and connectivity requirements, then configure access for authorized users.",
      },
      {
        question: "Can we keep our existing cameras?",
        answer:
          "We check the camera models, recorder support, cabling and image quality. Compatible equipment may be retained; other devices may need replacement or interface changes.",
      },
      {
        question: "Will recording continue during an outage?",
        answer:
          "Local recording may continue during an internet outage if cameras, network equipment and the recorder remain powered and connected. Remote viewing and off-site backup may be interrupted. Power continuity depends on the backup arrangement.",
      },
    ],
  },
};

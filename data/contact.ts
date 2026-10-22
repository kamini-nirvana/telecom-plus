import type { Metadata } from "next";
import {
  CONTACT,
  type CtaBandContent,
  type PageHeroContent,
  type SectionIntro,
} from "@/lib/data";

export type ContactPanelContent = {
  phoneLabel: string;
  emailLabel: string;
  addressLabel: string;
  hoursLabel: string;
  hours: string;
  hoursNote: string;
};

export const CONTACT_META: Metadata = {
  title: "Contact Telecom Plus — Business phone systems in Greater Vancouver",
  description:
    "Call 604-696-3828, email sales@telecomplus.ca or send us a few details. Telecom Plus supports businesses across Greater Vancouver from our office in Delta, BC.",
  alternates: { canonical: "/contact" },
};

export const CONTACT_PAGE_HERO: PageHeroContent = {
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ],
  heading: "Start the conversation.",
  body: "Planning an upgrade, moving sites or working through a system issue? Tell us what you need and how to reach you.",
  cta: { label: "Send an enquiry", href: "#enquiry" },
};

export const ENQUIRY_INTRO: SectionIntro & { submitLabel: string } = {
  eyebrow: "Sales enquiry",
  heading: "Tell us what you need.",
  body: "A few details about your site and current setup will help us direct your enquiry.",
  submitLabel: "Send enquiry",
};

export const CONTACT_PANEL: ContactPanelContent = {
  phoneLabel: "Call us",
  emailLabel: "Email us",
  addressLabel: "Mailing address",
  hoursLabel: "Business hours",
  hours: "Monday–Friday, 8 am–7 pm",
  hoursNote: "Weekend and holiday service by arrangement.",
};

export const SUPPORT_BAND: CtaBandContent = {
  eyebrow: "Here to help",
  heading: "Let’s talk it through.",
  body: "Not sure which service you need? Tell us what’s happening at your site, and we’ll help you work out the next step.",
  cta: { label: "Call for support", href: CONTACT.phoneHref },
};

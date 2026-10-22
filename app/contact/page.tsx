import type { Metadata } from "next";
import { ContactEnquiry } from "@/components/ContactEnquiry";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import {
  CONTACT_META,
  CONTACT_PAGE_HERO,
  CONTACT_PANEL,
  ENQUIRY_INTRO,
  SUPPORT_BAND,
} from "@/data/contact";
import {
  CONTACT,
  CONTACT_FORM,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = CONTACT_META;

export default function Page() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/contact"
      />
      <main id="main">
        <PageHero content={CONTACT_PAGE_HERO} />
        <ContactEnquiry
          intro={ENQUIRY_INTRO}
          panel={CONTACT_PANEL}
          contact={CONTACT}
          form={CONTACT_FORM}
        />
        <CtaBand content={SUPPORT_BAND} contact={CONTACT} />
      </main>
      <Footer
        content={FOOTER}
        contact={CONTACT}
        columns={FOOTER_COLUMNS}
        socialLinks={SOCIAL_LINKS}
      />
    </>
  );
}

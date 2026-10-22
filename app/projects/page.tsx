import type { Metadata } from "next";
import { ClientDirectory } from "@/components/ClientDirectory";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Testimonials } from "@/components/Testimonials";
import { Intro } from "@/components/ui/Intro";
import {
  CLIENT_LOCATIONS,
  DIRECTORY_INTRO,
  PROJECT_CATEGORIES,
  PROJECT_SUMMARIES,
  PROJECTS_HERO,
  PROJECTS_META,
  WORK_INTRO,
} from "@/data/projects";
import {
  CONTACT,
  CTA_BAND,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  SOCIAL_LINKS,
  TESTIMONIALS,
} from "@/lib/data";

export const metadata: Metadata = PROJECTS_META;

export default function Page() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/projects"
      />
      <main id="main">
        <PageHero content={PROJECTS_HERO} />

        <section
          id="work"
          className="relative isolate overflow-clip pt-24 pb-28 lg:pt-[100px] lg:pb-[150px]"
        >
          <div
            aria-hidden="true"
            className="absolute -top-60 -left-60 -z-10 size-[760px] rounded-full bg-radial from-sky via-mist/50 to-transparent to-70%"
          />
          <div className="container-page">
            <Intro intro={WORK_INTRO} split className="reveal" />
            <div className="mt-12 lg:mt-[50px]">
              <ProjectGallery
                projects={PROJECT_SUMMARIES}
                categories={PROJECT_CATEGORIES}
                labels={WORK_INTRO}
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-x-clip bg-linear-to-b from-mist to-surface pt-40 pb-24 lg:pt-[230px] lg:pb-[165px]">
          <div
            aria-hidden="true"
            className="absolute inset-x-[-15%] top-0 -z-10 h-[110px] rounded-b-[50%] bg-surface"
          />
          <div className="container-page">
            <Intro intro={DIRECTORY_INTRO} split className="reveal" />
            <div className="mt-12">
              <ClientDirectory
                locations={CLIENT_LOCATIONS}
                labels={DIRECTORY_INTRO}
              />
            </div>
          </div>
        </section>

        <Testimonials testimonials={TESTIMONIALS} />
        <CtaBand content={CTA_BAND} contact={CONTACT} />
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

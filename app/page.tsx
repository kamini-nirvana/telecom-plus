import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Solutions } from "@/components/Solutions";
import { Testimonials } from "@/components/Testimonials";
import {
  ABOUT,
  ABOUT_POINTS,
  CLIENT_LOGOS,
  CONTACT,
  CONTACT_FORM,
  CONTACT_INTRO,
  DEFAULT_PROJECT_ID,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  HERO,
  NAV_LINKS,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROJECTS,
  PROJECTS_INTRO,
  SOCIAL_LINKS,
  SOLUTIONS,
  SOLUTIONS_INTRO,
  TESTIMONIALS,
} from "@/lib/data";

export default function Page() {
  return (
    <>
      <Header navLinks={NAV_LINKS} cta={HEADER_CTA} contact={CONTACT} />
      <main id="main">
        <Hero content={HERO} clientLogos={CLIENT_LOGOS} />
        <Solutions intro={SOLUTIONS_INTRO} solutions={SOLUTIONS} />
        <About content={ABOUT} points={ABOUT_POINTS} />
        <Projects
          intro={PROJECTS_INTRO}
          projects={PROJECTS}
          defaultProjectId={DEFAULT_PROJECT_ID}
        />
        <Testimonials testimonials={TESTIMONIALS} />
        <Process intro={PROCESS_INTRO} steps={PROCESS_STEPS} />
        <Contact intro={CONTACT_INTRO} contact={CONTACT} form={CONTACT_FORM} />
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

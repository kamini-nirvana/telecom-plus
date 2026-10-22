import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Card } from "@/components/ui/Card";
import { DetailList } from "@/components/ui/DetailList";
import { Intro } from "@/components/ui/Intro";
import {
  SERVICES,
  SERVICES_HELP,
  SERVICES_INTRO,
  SITE_ASSESSMENT,
  SITE_ASSESSMENT_IMAGE,
  SITE_ASSESSMENT_INTRO,
  SOLUTIONS_HERO,
  SOLUTIONS_META,
} from "@/data/solutions";
import {
  CONTACT,
  CTA_BAND,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  PROCESS_INTRO,
  PROCESS_STEPS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = SOLUTIONS_META;

export default function Page() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/solutions"
      />
      <main id="main">
        <PageHero content={SOLUTIONS_HERO} />

        <section
          id="services"
          className="container-page pt-24 pb-24 lg:pt-[90px] lg:pb-[150px]"
        >
          <Intro intro={SERVICES_INTRO} split className="reveal" />
          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-[50px] lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <li
                key={service.title}
                style={{ "--i": index % 3 } as CSSProperties}
                className="reveal"
              >
                <Card
                  title={service.title}
                  body={service.body}
                  image={service.image}
                  link={service.link}
                />
              </li>
            ))}
            <li className="reveal flex flex-col justify-center rounded-[4px] bg-linear-to-br from-tint via-mist to-sky/70 p-6 sm:p-[50px] lg:col-span-2">
              <h3 className="text-title">{SERVICES_HELP.heading}</h3>
              <p className="mt-6 max-w-[640px] text-body text-ink/60">
                {SERVICES_HELP.body}
              </p>
              <ArrowButton
                href={SERVICES_HELP.cta.href}
                variant="dark"
                className="mt-8 self-start"
              >
                {SERVICES_HELP.cta.label}
              </ArrowButton>
            </li>
          </ul>
        </section>

        <section className="container-page grid items-center gap-10 pb-24 lg:grid-cols-2 lg:pb-[150px]">
          <div className="reveal relative aspect-[660/260] overflow-clip rounded-[4px] shadow-card">
            <Image
              src={SITE_ASSESSMENT_IMAGE.src}
              alt={SITE_ASSESSMENT_IMAGE.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              className="reveal-media object-cover"
            />
          </div>
          <div className="reveal">
            <Intro intro={SITE_ASSESSMENT_INTRO} />
            <DetailList
              items={SITE_ASSESSMENT}
              className="mt-6 border-t border-ink/10"
            />
          </div>
        </section>

        <Process intro={PROCESS_INTRO} steps={PROCESS_STEPS} />
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

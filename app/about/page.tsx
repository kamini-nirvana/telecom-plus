import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Leader } from "@/components/Leader";
import { Mission } from "@/components/Mission";
import { PageHero } from "@/components/PageHero";
import { Intro } from "@/components/ui/Intro";
import { NumberedList } from "@/components/ui/NumberedList";
import {
  ABOUT_HERO,
  ABOUT_META,
  CLIENT_GRID,
  CLIENTS_INTRO,
  LEADER,
  MISSION,
  PRINCIPLES,
  PRINCIPLES_INTRO,
} from "@/data/about";
import {
  CONTACT,
  CTA_BAND,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = ABOUT_META;

export default function Page() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/about"
      />
      <main id="main">
        <PageHero content={ABOUT_HERO} />
        <Mission content={MISSION} />
        <Leader content={LEADER} />

        <section
          id="principles"
          className="relative isolate overflow-clip bg-tint pt-10 pb-24 lg:pb-[150px]"
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-72 -left-60 -z-10 size-[760px] rounded-full bg-radial from-sky via-mist/50 to-transparent to-70%"
          />
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_700px]">
            <Intro intro={PRINCIPLES_INTRO} className="reveal" />
            <NumberedList items={PRINCIPLES} />
          </div>
        </section>

        <section
          id="clients"
          className="container-page pt-24 pb-24 lg:pt-[110px] lg:pb-[100px]"
        >
          <Intro intro={CLIENTS_INTRO} split className="reveal" />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {CLIENT_GRID.map((logo, index) => (
              <li
                key={logo.src}
                style={{ "--i": index % 7 } as CSSProperties}
                className="reveal group grid h-[130px] place-items-center rounded-[4px] border border-ink/10 bg-panel/40 p-4 transition-[translate,background-color,border-color] duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/30 hover:bg-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-w-full transition-[scale] duration-500 ease-out-expo group-hover:scale-105 motion-reduce:transition-none"
                />
              </li>
            ))}
          </ul>
          <p className="mt-7 text-small text-ink/60">{CLIENTS_INTRO.note}</p>
        </section>

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

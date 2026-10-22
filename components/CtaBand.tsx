import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ContactDetails, CtaBandContent } from "@/lib/data";

type CtaBandProps = {
  content: CtaBandContent;
  contact: ContactDetails;
};

export function CtaBand({ content, contact }: CtaBandProps) {
  const cta = (
    <ArrowButton href={content.cta.href} variant="dark">
      {content.cta.label}
    </ArrowButton>
  );

  return (
    <section className="relative isolate overflow-clip bg-brand-ink text-white">
      <Image
        src="/images/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="parallax -z-10 object-cover motion-safe:md:scale-125"
      />

      <div className="container-page grid gap-12 py-20 lg:min-h-[396px] lg:grid-cols-[1fr_320px] lg:items-center lg:py-24">
        <div className="reveal">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-[520px] text-quote">{content.heading}</h2>
          <p className="mt-6 max-w-[560px] text-body text-white/80">
            {content.body}
          </p>
          {content.phonePrompt ? null : <div className="mt-8">{cta}</div>}
        </div>

        {content.phonePrompt ? (
          <div className="reveal">
            {cta}
            <span
              aria-hidden="true"
              className="mt-7 block h-px w-[60px] bg-white/40"
            />
            <p className="mt-9 text-small text-white/80">
              {content.phonePrompt}
            </p>
            <a
              href={contact.phoneHref}
              className="link-wipe mt-2 inline-block text-lead"
            >
              {contact.phone}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

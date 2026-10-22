import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { LeaderContent } from "@/data/about";

type LeaderProps = {
  content: LeaderContent;
};

export function Leader({ content }: LeaderProps) {
  return (
    <section
      id="people"
      className="relative isolate overflow-x-clip bg-linear-to-b from-mist to-tint pt-40 pb-24 lg:pt-[230px] lg:pb-[150px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[-15%] top-0 -z-10 h-[110px] rounded-b-[50%] bg-surface"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[460px_1fr] lg:gap-20 lg:pl-20">
        <div className="reveal group relative aspect-square w-full max-w-[460px] overflow-clip rounded-[4px] rounded-tr-[160px] border-l-4 border-brand sm:rounded-tr-[220px]">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, 460px"
            className="reveal-media object-cover transition-[scale] duration-[1200ms] ease-out-expo group-hover:scale-105 motion-reduce:transition-none"
          />
        </div>

        <div className="reveal">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-10 text-title">{content.heading}</h2>
          <p className="mt-8 max-w-[620px] border-b border-ink/10 pb-6 text-body text-ink/60">
            {content.body}
          </p>
          <p className="mt-8 text-lead text-brand-ink">{content.name}</p>
          <p className="label-micro mt-2 text-ink/60">{content.role}</p>
        </div>
      </div>
    </section>
  );
}

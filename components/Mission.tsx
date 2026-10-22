import type { CSSProperties } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckCircleIcon } from "@/components/ui/icons";
import type { MissionContent } from "@/data/about";

type MissionProps = {
  content: MissionContent;
};

export function Mission({ content }: MissionProps) {
  return (
    <section
      id="mission"
      className="relative isolate overflow-clip pt-24 lg:pt-[150px]"
    >
      <div
        aria-hidden="true"
        className="parallax absolute -top-80 -left-80 -z-10 size-[760px] rounded-full bg-radial from-sky via-mist/50 to-transparent to-70%"
      />

      <div className="container-page">
        <div className="reveal grid gap-6 lg:grid-cols-[316px_1fr]">
          <Eyebrow className="self-start lg:pt-2">{content.eyebrow}</Eyebrow>
          <div>
            <h2 className="max-w-[860px] bg-linear-to-r from-ink from-15% to-periwinkle bg-clip-text text-title leading-[1.16] text-transparent">
              {content.statement}
            </h2>
            <p className="mt-10 max-w-[700px] text-body text-ink/60">
              {content.body}
            </p>
          </div>
        </div>

        <p className="mt-20 flex items-center gap-2 text-small text-brand-ink lg:mt-[140px] lg:justify-end">
          <CheckCircleIcon className="size-4 shrink-0" />
          {content.badge}
        </p>
        <dl className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ "--i": index } as CSSProperties}
              className="reveal group flex min-h-[158px] flex-col justify-between gap-6 rounded-[4px] bg-panel p-5 transition-[translate,background-color] duration-500 ease-out-expo hover:-translate-y-1 hover:bg-sky/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <dt className="label-micro text-ink/70">{stat.label}</dt>
              <dd className="origin-right text-right text-stat text-brand transition-[scale] duration-500 ease-out-expo group-hover:scale-105 motion-reduce:transition-none">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

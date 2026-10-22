import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SectionIntro } from "@/lib/data";

type IntroProps = {
  intro: SectionIntro;
  split?: boolean;
  className?: string;
};

export function Intro({ intro, split = false, className = "" }: IntroProps) {
  return (
    <div
      className={`${split ? "grid gap-6 lg:grid-cols-[700px_1fr]" : ""} ${className}`}
    >
      <Eyebrow className={split ? "self-start lg:pt-2" : ""}>{intro.eyebrow}</Eyebrow>
      <div className={split ? "" : "mt-6"}>
        <h2 className="text-title">{intro.heading}</h2>
        <p className="mt-6 max-w-[640px] text-body text-ink/60">
          {intro.body}
        </p>
      </div>
    </div>
  );
}

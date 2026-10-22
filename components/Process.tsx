import { ProcessStepper } from "@/components/ProcessStepper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { ProcessStep, SectionIntro } from "@/lib/data";

type ProcessProps = {
  intro: SectionIntro;
  steps: readonly ProcessStep[];
};

export function Process({ intro, steps }: ProcessProps) {
  return (
    <section
      id="process"
      className="relative isolate overflow-clip pb-24 lg:pb-[150px]"
    >
      <div
        aria-hidden="true"
        className="parallax absolute top-10 -left-72 -z-10 size-[900px] rounded-full bg-radial from-sky via-mist/60 to-transparent to-70%"
      />
      <div
        aria-hidden="true"
        className="parallax absolute -right-[280px] -bottom-[300px] -z-10 size-[1050px] rounded-full bg-radial from-periwinkle/90 from-20% via-lilac/45 via-50% to-transparent to-70%"
      />

      <div className="reveal container-page flex flex-col items-center text-center">
        <Eyebrow>{intro.eyebrow}</Eyebrow>
        <h2 className="mt-6 text-title">{intro.heading}</h2>
        <p className="mt-5 max-w-[715px] text-body text-ink/60">{intro.body}</p>
      </div>

      <div className="reveal container-page mt-14 lg:mt-[76px]">
        <ProcessStepper steps={steps} />
      </div>
    </section>
  );
}

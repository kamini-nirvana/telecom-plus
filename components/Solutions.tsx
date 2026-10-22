import { SolutionsTabs } from "@/components/SolutionsTabs";
import { Intro } from "@/components/ui/Intro";
import type { SectionIntro, Solution } from "@/lib/data";

type SolutionsProps = {
  intro: SectionIntro;
  solutions: readonly Solution[];
};

export function Solutions({ intro, solutions }: SolutionsProps) {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-clip pt-24 pb-24 lg:pt-[150px] lg:pb-[140px]"
    >
      <div
        aria-hidden="true"
        className="parallax absolute -top-40 -left-40 -z-10 size-[640px] rounded-full bg-radial from-lilac/35 via-sky/25 to-transparent to-70%"
      />

      <Intro intro={intro} split className="reveal container-page" />

      <div className="reveal container-page mt-14 lg:mt-[100px]">
        <SolutionsTabs solutions={solutions} />
      </div>
    </section>
  );
}

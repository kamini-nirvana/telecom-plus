import { Eyebrow } from "@/components/ui/Eyebrow";
import { NumberedList } from "@/components/ui/NumberedList";
import type { AboutPoint } from "@/lib/data";

type AboutProps = {
  content: { eyebrow: string; statement: string };
  points: readonly AboutPoint[];
};

export function About({ content, points }: AboutProps) {
  return (
    <section
      id="about"
      className="relative isolate overflow-x-clip pb-28 lg:pb-[230px]"
    >
      <div
        aria-hidden="true"
        className="parallax absolute -top-24 -right-40 -z-10 size-[720px] rounded-full bg-radial from-mist via-mist/40 to-transparent to-70%"
      />

      <div className="container-page">
        <div className="reveal">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[820px] bg-linear-to-r from-ink from-15% to-periwinkle bg-clip-text text-title leading-[1.16] text-transparent">
            {content.statement}
          </h2>
        </div>

        <div className="mt-12 lg:mt-2 lg:ml-auto lg:w-[41%] lg:min-w-[520px]">
          <NumberedList items={points} />
        </div>
      </div>
    </section>
  );
}

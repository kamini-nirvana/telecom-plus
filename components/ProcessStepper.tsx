"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { FadeSwap } from "@/components/ui/FadeSwap";
import type { ProcessStep } from "@/lib/data";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ProcessStepper({ steps }: { steps: readonly ProcessStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  if (!active) return null;

  const number = pad(activeIndex + 1);
  const total = pad(steps.length);
  const isLast = activeIndex === steps.length - 1;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[480px_1fr] lg:gap-[100px]">
      <ol>
        {steps.map((step, index) => {
          const selected = index === activeIndex;
          return (
            <li
              key={step.id}
              className="border-b border-brand/15 last:border-b-0"
            >
              <button
                type="button"
                aria-current={selected ? "step" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`group grid min-h-20 w-full grid-cols-[72px_1fr] items-center py-3 text-left transition-opacity duration-500 sm:grid-cols-[136px_1fr] ${
                  selected ? "" : "opacity-40 hover:opacity-80"
                }`}
              >
                <span
                  className={`text-title transition-colors duration-500 ${selected ? "text-brand" : ""}`}
                >
                  {pad(index + 1)}
                </span>
                <span>
                  <span
                    className={`label-micro block ${selected ? "text-brand-ink" : ""}`}
                  >
                    {step.eyebrow}
                  </span>
                  <span className="mt-1 block text-lead transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 motion-reduce:transition-none">
                    {step.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        aria-live="polite"
        className="relative isolate overflow-hidden rounded-[4px] rounded-tr-[120px] bg-linear-to-r from-white/90 to-white/60 p-5 sm:h-[520px] sm:rounded-tr-[230px] lg:h-[500px]"
      >
        <span
          aria-hidden="true"
          className="absolute right-0 -bottom-[52px] -z-10 text-[200px] leading-none tracking-tight text-white tabular-nums select-none sm:-bottom-[62px] sm:text-[280px]"
        >
          {number}
        </span>

        <FadeSwap swapKey={active.id} className="flex h-full flex-col">
          <p className="label-micro text-brand-ink">{active.eyebrow}</p>
          <h3 className="mt-1 pr-16 text-lead sm:pr-24">{active.title}</h3>
          <p className="mt-2 max-w-[520px] pr-10 text-small text-ink/60 sm:pr-0">
            {active.body}
          </p>

          <Image
            src={active.image.src}
            alt={active.image.alt}
            width={active.image.width}
            height={active.image.height}
            sizes="(max-width: 640px) 100vw, 360px"
            className="mt-10 h-auto w-full max-w-[360px] rounded-[4px] shadow-card sm:mt-auto"
          />
          <p className="label-micro mt-3 text-brand-ink">
            Step {number} of {total}
          </p>
        </FadeSwap>

        <div className="mt-6 flex justify-end sm:absolute sm:right-5 sm:bottom-5 sm:mt-0">
          <ArrowButton
            variant="dark"
            onClick={() => setActiveIndex(isLast ? 0 : activeIndex + 1)}
          >
            {isLast ? "Back to step 01" : "Next step"}
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

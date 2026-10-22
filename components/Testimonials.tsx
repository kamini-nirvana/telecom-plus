"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useReducedMotion,
} from "motion/react";
import * as m from "motion/react-m";
import { ArrowTile } from "@/components/ui/ArrowButton";
import { PauseIcon, PlayIcon, QuoteIcon } from "@/components/ui/icons";
import type { Testimonial } from "@/lib/data";

type TestimonialsProps = {
  testimonials: readonly Testimonial[];
};

const ROTATE_MS = 7000;

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const count = testimonials.length;
  const timed = count > 1 && !reduce;

  const next = () => setIndex((i) => (i + 1) % count);

  const current = testimonials[index];
  if (!current) return null;

  return (
    <section
      aria-label="Client testimonials"
      className="container-page pb-24 lg:pb-[165px]"
    >
      <div className="reveal relative isolate mx-auto flex min-h-[400px] max-w-[1160px] flex-col justify-end overflow-hidden rounded-[4px] p-6 text-white sm:p-10">
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          sizes="(max-width: 1240px) 100vw, 1160px"
          className="-z-10 object-cover motion-safe:animate-drift"
        />
        <QuoteIcon className="absolute top-5 right-5 w-10 sm:w-[66px]" />

        <LazyMotion features={domAnimation} strict>
          <AnimatePresence mode="wait" initial={false}>
            <m.figure
              key={current.id}
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-[800px] pt-20 pr-10 sm:pr-16"
            >
              <blockquote className="text-quote">{current.quote}</blockquote>
              <figcaption className="mt-5 inline-flex items-center gap-8 border-t border-white/20 pt-5">
                <span className="text-small">
                  <span className="block">{current.author}</span>
                  <span className="mt-1 block text-white/80">
                    {current.context}
                  </span>
                </span>
                {current.href ? (
                  <a
                    href={current.href}
                    aria-label={`Read more from ${current.author}`}
                    className="group grid size-11 shrink-0 place-items-center md:size-[30px]"
                  >
                    <ArrowTile className="bg-white text-ink" />
                  </a>
                ) : null}
              </figcaption>
            </m.figure>
          </AnimatePresence>
        </LazyMotion>

        {timed ? (
          <div className="mt-6 flex justify-end md:absolute md:right-9 md:bottom-5 md:mt-0">
            <button
              type="button"
              aria-label={paused ? "Resume testimonials" : "Pause testimonials"}
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
              className="relative grid size-11 place-items-center rounded-full transition-[background-color,color,scale] duration-300 ease-out-expo hover:scale-105 hover:bg-white hover:text-brand-ink motion-reduce:hover:scale-100"
            >
              <svg
                aria-hidden
                viewBox="0 0 44 44"
                className="absolute inset-0 -rotate-90"
              >
                <circle
                  cx="22"
                  cy="22"
                  r="20.5"
                  fill="none"
                  strokeWidth="3"
                  className="stroke-white/30"
                />
                <circle
                  key={index}
                  cx="22"
                  cy="22"
                  r="20.5"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray={1}
                  style={{
                    animationDuration: `${ROTATE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                  className="animate-ring stroke-white"
                />
              </svg>
              {paused ? (
                <PlayIcon className="size-3" />
              ) : (
                <PauseIcon className="size-3" />
              )}
            </button>
          </div>
        ) : null}
      </div>

      <div className="-mt-0.5 flex justify-center">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.id}
            type="button"
            aria-label={`Show testimonial ${i + 1} of ${count}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className="grid h-11 place-items-center px-[3px]"
          >
            <span
              className={`relative block h-1 overflow-hidden rounded-full bg-brand/30 transition-[width] duration-500 ease-out-expo ${i === index ? "w-10" : "w-1"}`}
            >
              {i === index ? (
                <span
                  key={index}
                  onAnimationEnd={next}
                  style={{
                    animationDuration: `${ROTATE_MS}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                  className={`absolute inset-0 origin-left bg-brand ${timed ? "animate-progress" : ""}`}
                />
              ) : null}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

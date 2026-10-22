import Image from "next/image";
import { ArrowLink } from "@/components/ui/ArrowButton";
import type { NavLink, Photo } from "@/lib/data";

type CardProps = {
  title: string;
  body: string;
  eyebrow?: string;
  image?: Photo;
  link?: NavLink;
};

export function Card({ title, body, eyebrow, image, link }: CardProps) {
  return (
    <article className="group/card relative flex h-full flex-col overflow-clip rounded-[4px] bg-tint transition-[translate,background-color] duration-700 ease-out-expo after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-700 after:ease-out-expo hover:-translate-y-1.5 hover:bg-mist hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none motion-reduce:hover:translate-y-0">
      {image ? (
        <div className="relative aspect-[427/210] overflow-clip">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 430px"
            className="reveal-media object-cover transition-[scale] duration-[1200ms] ease-out-expo group-hover/card:scale-105 motion-reduce:transition-none"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col px-5 pt-9 pb-10 sm:px-[30px]">
        {eyebrow ? (
          <p className="label-micro mb-1.5 text-brand-ink">{eyebrow}</p>
        ) : null}
        <h3 className="text-lead">{title}</h3>
        <p className="mt-4 max-w-[480px] text-small text-ink/60">{body}</p>
        {link ? (
          <ArrowLink href={link.href} className="mt-6">
            {link.label}
          </ArrowLink>
        ) : null}
      </div>
    </article>
  );
}

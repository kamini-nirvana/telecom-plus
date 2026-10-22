import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { HeroContent, SizedImage } from "@/lib/data";

type HeroProps = {
  content: HeroContent;
  clientLogos: readonly SizedImage[];
};

export function Hero({ content, clientLogos }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[680px] flex-col overflow-hidden bg-ink text-white lg:h-[890px]">
      <div className="hero-parallax absolute inset-0 -z-20">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover motion-safe:animate-settle"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-ink/70 to-transparent lg:hidden"
      />

      <div className="hero-fade container-page flex flex-1 flex-col justify-end pt-40 pb-16 lg:pb-[154px]">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h1 className="mt-1 max-w-[600px] text-display">{content.heading}</h1>
        <p className="mt-4 max-w-[600px] text-body text-white/80">
          {content.body}
        </p>
        <div className="mt-10">
          <ArrowButton href={content.cta.href}>{content.cta.label}</ArrowButton>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="group container-page flex h-[110px] overflow-x-auto [scrollbar-width:none] motion-safe:overflow-hidden motion-safe:[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <LogoRow logos={clientLogos} />
          <LogoRow logos={clientLogos} clone />
        </div>
      </div>
    </section>
  );
}

function LogoRow({
  logos,
  clone = false,
}: {
  logos: readonly SizedImage[];
  clone?: boolean;
}) {
  return (
    <ul
      aria-label={clone ? undefined : "Organizations we have worked with"}
      aria-hidden={clone || undefined}
      className={`flex min-w-full shrink-0 items-center justify-around gap-12 px-6 group-hover:[animation-play-state:paused] motion-safe:animate-marquee ${clone ? "motion-reduce:hidden" : ""}`}
    >
      {logos.map((logo) => (
        <li
          key={logo.src}
          className="shrink-0 opacity-80 transition-opacity duration-300 hover:opacity-100"
        >
          <Image
            src={logo.src}
            alt={clone ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
          />
        </li>
      ))}
    </ul>
  );
}

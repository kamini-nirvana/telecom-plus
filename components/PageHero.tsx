import { ArrowButton } from "@/components/ui/ArrowButton";
import type { PageHeroContent } from "@/lib/data";

type PageHeroProps = {
  content: PageHeroContent;
};

export function PageHero({ content }: PageHeroProps) {
  const { breadcrumbs, jumpLinks } = content;

  return (
    <section className="relative isolate flex min-h-[560px] flex-col overflow-clip bg-ink text-white lg:min-h-[600px]">
      <div
        aria-hidden="true"
        className="parallax absolute top-1/3 -right-[520px] -z-10 size-[1200px] rounded-full bg-radial from-cobalt/90 via-cobalt/30 via-40% to-transparent to-70% lg:-right-[360px]"
      />

      <div className="container-page flex flex-1 flex-col justify-end pt-40 pb-16 lg:pb-[98px]">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap text-small text-white/70">
            {breadcrumbs.map((crumb, index) =>
              index === breadcrumbs.length - 1 ? (
                <li key={crumb.href} aria-current="page">
                  {crumb.label}
                </li>
              ) : (
                <li key={crumb.href}>
                  <a href={crumb.href} className="link-wipe hover:text-white">
                    {crumb.label}
                  </a>
                  <span aria-hidden="true" className="px-1">
                    /
                  </span>
                </li>
              ),
            )}
          </ol>
        </nav>

        <h1 className="mt-8 max-w-[540px] text-display">{content.heading}</h1>
        <p className="mt-4 max-w-[600px] text-body text-white/80">
          {content.body}
        </p>
        <div className="mt-12">
          <ArrowButton href={content.cta.href}>{content.cta.label}</ArrowButton>
        </div>
      </div>

      {jumpLinks ? (
        <nav aria-labelledby="jump-links" className="border-t border-white/20">
          <div className="container-page grid grid-cols-2 gap-x-6 py-6 lg:flex lg:h-[110px] lg:items-center lg:justify-between lg:py-0">
            <p id="jump-links" className="col-span-2 text-small text-white/60">
              {jumpLinks.label}
            </p>
            {jumpLinks.links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center gap-6 text-small"
              >
                <span className="text-micro text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="link-wipe">{link.label}</span>
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { ArrowButton } from "@/components/ui/ArrowButton";
import type { ContactDetails, NavLink } from "@/lib/data";

type HeaderProps = {
  navLinks: readonly NavLink[];
  cta: NavLink;
  contact: ContactDetails;
  current?: string;
};

export function Header({ navLinks, cta, contact, current }: HeaderProps) {
  return (
    <>
      <div className="bg-ink text-white">
        <p className="container-page flex h-[50px] items-center text-small">
          Customer support ·&nbsp;
          <a href={contact.phoneHref} className="link-wipe">
            {contact.phone}
          </a>
        </p>
      </div>

      <header className="sticky top-0 z-20 h-0 text-white">
        <div className="relative">
          <div
            aria-hidden="true"
            className="header-backdrop absolute inset-0 -z-10 bg-ink/90 backdrop-blur-md"
          />
          <div className="container-page flex items-center justify-between gap-6 py-3 lg:py-4">
            <Link
              href="/"
              aria-label="Telecom Plus — home"
              className="shrink-0"
            >
              <Image
                src="/images/logo.svg"
                alt=""
                width={156}
                height={41}
                priority
              />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden lg:block lg:flex-1 lg:pl-[calc(36.4%-196px)]"
            >
              <ul className="flex gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={link.href === current ? "page" : undefined}
                      className="link-wipe flex min-h-11 items-center text-small uppercase aria-[current=page]:after:h-0.5 aria-[current=page]:after:transform-none aria-[current=page]:after:bg-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <ArrowButton href={cta.href}>{cta.label}</ArrowButton>
            </div>

            <MobileMenu
              navLinks={navLinks}
              cta={cta}
              contact={contact}
              current={current}
            />
          </div>
        </div>
      </header>
    </>
  );
}

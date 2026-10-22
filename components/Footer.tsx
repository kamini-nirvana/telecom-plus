import Image from "next/image";
import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/icons";
import type { ContactDetails, FooterColumn, SocialLink } from "@/lib/data";

type FooterProps = {
  content: { tagline: string; body: string; legal: string };
  contact: ContactDetails;
  columns: readonly FooterColumn[];
  socialLinks: readonly SocialLink[];
};

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
} as const;

export function Footer({
  content,
  contact,
  columns,
  socialLinks,
}: FooterProps) {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page grid gap-14 pt-10 pb-20 xl:grid-cols-[1fr_minmax(600px,51.5%)] xl:gap-0 xl:pb-[190px]">
        <div className="text-center xl:text-left">
          <Image
            src="/images/logo-footer.svg"
            alt="Telecom Plus — a division of BY Solution"
            width={171}
            height={45}
            className="max-xl:mx-auto"
          />
          <p className="mt-10 max-w-[420px] max-xl:mx-auto text-title leading-[1.15] uppercase">
            {content.tagline}
          </p>
          <p className="mt-5 max-w-[390px] max-xl:mx-auto text-small text-white/60">
            {content.body}
          </p>
          <ul className="mt-5 flex justify-center xl:-ml-2.5 xl:justify-start">
            {socialLinks.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];
              return (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="grid size-11 place-items-center transition-[color,translate] duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-brand motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 xl:pt-[50px]">
          <div>
            <h2 className="text-body">Contact</h2>
            <ul className="mt-5 text-small">
              <li>
                <a
                  href={contact.phoneHref}
                  className="link-wipe inline-flex min-h-6 items-center"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="link-wipe inline-flex min-h-6 items-center gap-2"
                >
                  {contact.email}
                  <ArrowUpRightIcon className="size-2.5" />
                </a>
              </li>
            </ul>
            <h2 className="mt-12 text-body">Mailing address</h2>
            <address className="mt-5 text-small text-white/60 not-italic">
              {contact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-body">{column.title}</h2>
              <ul className="mt-5 text-small text-white/60">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-6 items-center transition-[color,translate] duration-300 ease-out-expo hover:translate-x-1 hover:text-white motion-reduce:hover:translate-x-0"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-small text-white/60 md:flex-row md:items-center md:justify-between max-sm:items-center max-sm:text-center">
          <p>{content.legal}</p>
          <p className="flex flex-wrap items-center gap-x-3">
            <span>
              Designed &amp; Developed by{" "}
              <a
                href="https://www.nirvanacanada.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-wipe font-bold"
              >
                <span className="text-white">Nirvana</span>
                <span className="text-brand">Canada</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { ContactDetails, NavLink } from "@/lib/data";

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  cta: NavLink;
  contact: ContactDetails;
  current?: string;
};

const BAR =
  "absolute left-1/2 h-px w-5 -translate-x-1/2 bg-current transition-transform duration-500 ease-out-expo motion-reduce:transition-none";

const ENTER =
  "transition-[opacity,translate] duration-700 ease-out-expo motion-reduce:transition-none group-data-[open=false]/menu:translate-y-4 group-data-[open=false]/menu:opacity-0 group-data-[open=false]/menu:delay-0";

export function MobileMenu({
  navLinks,
  cta,
  contact,
  current,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    root.style.overflow = "hidden";
    window.addEventListener("keydown", close);

    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className={`relative size-11 transition-colors duration-500 ease-out-expo motion-reduce:transition-none ${open ? "bg-brand text-white" : "bg-white text-ink"}`}
      >
        <span
          className={`${BAR} top-[18px] ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
        />
        <span
          className={`${BAR} top-[25px] ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
        />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Primary"
        data-open={open}
        data-lenis-prevent
        inert={!open}
        className="group/menu fixed inset-0 -z-10 overflow-hidden bg-ink text-white transition-[opacity,visibility] duration-500 ease-out-expo data-[open=false]:invisible data-[open=false]:opacity-0 motion-reduce:transition-none"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-1/4 -right-1/3 size-[42rem] rounded-full bg-[radial-gradient(closest-side,rgb(0_150_235/0.28),transparent)]"
        />

        <div className="absolute inset-x-0 top-32 bottom-0 flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-5 pt-5 pb-8 md:px-10">
          <p
            className={`${ENTER} relative flex items-center gap-2 text-micro tracking-[0.2em] text-white/50 uppercase`}
          >
            <span className="size-1.5 rounded-full bg-brand" />
            Menu
          </p>

          <ul className="relative mt-6 border-t border-white/10">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${120 + index * 60}ms` }}
                className={`${ENTER} border-b border-white/10`}
              >
                <a
                  href={link.href}
                  aria-current={link.href === current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="group flex min-h-18 items-center gap-4 py-4 text-title transition-colors duration-300 hover:text-brand focus-visible:text-brand aria-[current=page]:text-brand"
                >
                  <span className="w-6 text-micro tracking-[0.15em] text-white/40 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{link.label}</span>
                  <ArrowUpRightIcon className="size-3 opacity-40 transition-[translate,opacity] duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-aria-[current=page]:opacity-100 motion-reduce:transition-none" />
                </a>
              </li>
            ))}
          </ul>

          <div
            style={{ transitionDelay: `${180 + navLinks.length * 60}ms` }}
            className={`${ENTER} relative mt-auto pt-10`}
          >
            <ArrowButton
              href={cta.href}
              onClick={() => setOpen(false)}
              className="w-full justify-between"
            >
              {cta.label}
            </ArrowButton>

            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5 text-small">
              <div>
                <dt className="text-micro tracking-[0.2em] text-white/40 uppercase">
                  Call
                </dt>
                <dd className="mt-2">
                  <a href={contact.phoneHref} className="link-wipe">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-micro tracking-[0.2em] text-white/40 uppercase">
                  Email
                </dt>
                <dd className="mt-2">
                  <a href={contact.emailHref} className="link-wipe">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </nav>
    </div>
  );
}

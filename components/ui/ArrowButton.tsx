import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type ArrowButtonProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

type ArrowTileProps = {
  className?: string;
};

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const VARIANTS = {
  light: { shell: "bg-white text-ink hover:text-white focus-visible:text-white", tile: "bg-ink text-white" },
  dark: { shell: "bg-ink text-white", tile: "bg-white text-ink" },
} as const;

const ARROW_MOTION =
  "size-2.5 transition-transform duration-500 ease-out-expo motion-reduce:transition-none";

export function ArrowTile({ className = "" }: ArrowTileProps) {
  return (
    <span
      className={`relative grid size-[30px] shrink-0 place-items-center overflow-hidden ${className}`}
    >
      <ArrowUpRightIcon
        className={`${ARROW_MOTION} group-hover:translate-x-[250%] group-hover:-translate-y-[250%] group-focus-visible:translate-x-[250%] group-focus-visible:-translate-y-[250%]`}
      />
      <ArrowUpRightIcon
        className={`${ARROW_MOTION} absolute -translate-x-[250%] translate-y-[250%] group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0`}
      />
    </span>
  );
}

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-6 w-fit items-center gap-2 text-note text-brand-ink ${className}`}
    >
      <span className="link-wipe">{children}</span>
      <ArrowUpRightIcon className="size-2.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
    </a>
  );
}

export function ArrowButton({
  children,
  variant = "light",
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: ArrowButtonProps) {
  const styles = VARIANTS[variant];
  const classes = `group relative isolate inline-flex min-h-11 items-center gap-5 overflow-hidden py-[5px] pr-[5px] pl-5 text-small whitespace-nowrap transition-[color,scale] duration-500 ease-out-expo active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none ${styles.shell} ${className}`;
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 origin-right scale-x-0 bg-brand-ink transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
      {children}
      <ArrowTile className={styles.tile} />
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}

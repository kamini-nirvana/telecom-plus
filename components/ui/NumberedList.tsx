import type { AboutPoint } from "@/lib/data";

type NumberedListProps = {
  items: readonly AboutPoint[];
};

export function NumberedList({ items }: NumberedListProps) {
  return (
    <ol>
      {items.map((item, index) => (
        <li
          key={item.title}
          className="reveal group grid gap-3 border-b border-ink/10 px-2.5 py-5 transition-colors duration-500 last:border-b-0 hover:bg-tint/70 sm:grid-cols-[1fr_1fr] sm:gap-8"
        >
          <div>
            <p className="text-note text-brand-ink">
              /{String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-body transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 motion-reduce:transition-none">
              {item.title}
            </h3>
          </div>
          <p className="text-small text-ink/60">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

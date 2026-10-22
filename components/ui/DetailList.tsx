import type { Detail } from "@/lib/data";

type DetailListProps = {
  items: readonly Detail[];
  className?: string;
};

export function DetailList({ items, className = "" }: DetailListProps) {
  return (
    <dl className={className}>
      {items.map((item) => (
        <div
          key={item.term}
          className="grid gap-2 border-b border-ink/10 py-5 last:border-b-0 sm:grid-cols-2 sm:gap-10"
        >
          <dt className="label-micro text-brand-ink">{item.term}</dt>
          <dd className="text-small text-ink/60">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

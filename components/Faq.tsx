import { MinusIcon, PlusIcon } from "@/components/ui/icons";
import type { Question } from "@/data/business-communications";

type FaqProps = {
  questions: readonly Question[];
};

export function Faq({ questions }: FaqProps) {
  return (
    <div>
      {questions.map((item) => (
        <details
          key={item.question}
          open
          className="reveal group border-b border-ink/10 py-7 first:pt-0 last:border-b-0"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 text-lead transition-colors duration-300 hover:text-brand-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <PlusIcon className="mt-1.5 size-3 shrink-0 text-brand group-open:hidden" />
            <MinusIcon className="mt-1.5 hidden size-3 shrink-0 text-brand group-open:block" />
          </summary>
          <p className="mt-2 max-w-[620px] text-body text-ink/60">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

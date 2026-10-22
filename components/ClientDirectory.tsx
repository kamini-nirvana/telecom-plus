"use client";

import { useState } from "react";
import { SearchIcon } from "@/components/ui/icons";
import type { ClientLocation } from "@/data/projects";

type ClientDirectoryProps = {
  locations: readonly ClientLocation[];
  labels: {
    searchLabel: string;
    listLabel: string;
    emptyLabel: string;
    previousLabel: string;
    nextLabel: string;
  };
};

const PAGE_SIZE = 6;

const PAGER_BUTTON =
  "grid min-h-9 min-w-9 place-items-center border px-4 text-small transition-colors duration-300 disabled:opacity-40";

export function ClientDirectory({ locations, labels }: ClientDirectoryProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(locations[0]);

  const term = query.trim().toLowerCase();
  const matches = term
    ? locations.filter((location) =>
        `${location.name} ${location.address}`.toLowerCase().includes(term),
      )
    : locations;
  const pageCount = Math.ceil(matches.length / PAGE_SIZE);
  const shown = matches.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative h-[360px] overflow-hidden rounded-[4px] border border-ink/10 bg-panel md:h-[480px] lg:h-auto lg:min-h-[640px]">
        {selected ? (
          <iframe
            key={selected.name}
            title={`Map showing ${selected.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${selected.name}, ${selected.address}`)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full"
          />
        ) : null}
      </div>

      <div>
        <label className="flex h-[52px] items-center gap-3 border border-ink/10 bg-white px-4 transition-colors focus-within:border-brand">
          <SearchIcon className="size-4 shrink-0 text-ink/70" />
          <span className="sr-only">{labels.searchLabel}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(0);
            }}
            placeholder={labels.searchLabel}
            className="h-full min-w-0 flex-1 bg-transparent text-small placeholder:text-ink/60"
          />
        </label>

        <h3 className="mt-7 text-small text-brand-ink uppercase">
          {labels.listLabel}
        </h3>

        {shown.length ? (
          <ul className="mt-4 border-t border-ink/10">
            {shown.map((location) => {
              const active = location === selected;
              return (
                <li key={location.name} className="border-b border-ink/10">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelected(location)}
                    className={`w-full px-4 py-5 text-left transition-colors duration-300 ${
                      active ? "bg-sky/40" : "hover:bg-tint"
                    }`}
                  >
                    <span className="block text-body">{location.name}</span>
                    <span className="mt-1.5 block text-small text-ink/60">
                      {location.address}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p role="status" className="mt-4 text-body text-ink/60">
            {labels.emptyLabel}
          </p>
        )}

        {pageCount > 1 ? (
          <nav
            aria-label="Client location pages"
            className="mt-5 flex flex-wrap gap-3"
          >
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className={`${PAGER_BUTTON} border-sky bg-tint`}
            >
              {labels.previousLabel}
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-current={index === page ? "page" : undefined}
                onClick={() => setPage(index)}
                className={`${PAGER_BUTTON} ${
                  index === page
                    ? "border-ink bg-ink text-white"
                    : "border-sky bg-tint"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              disabled={page === pageCount - 1}
              onClick={() => setPage(page + 1)}
              className={`${PAGER_BUTTON} border-sky bg-tint`}
            >
              {labels.nextLabel}
            </button>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

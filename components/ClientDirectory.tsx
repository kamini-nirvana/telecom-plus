"use client";

import { useState } from "react";
import { LocationMap } from "@/components/LocationMap";
import { ChevronDownIcon, SearchIcon } from "@/components/ui/icons";
import { isInBritishColumbia, type ClientLocation } from "@/data/projects";

type ClientDirectoryProps = {
  locations: readonly ClientLocation[];
  labels: {
    searchLabel: string;
    listLabel: string;
    emptyLabel: string;
    previousLabel: string;
    nextLabel: string;
    showAllLabel: string;
    countLabel: string;
  };
};

const PAGE_SIZE = 8;

const PAGER_BUTTON =
  "grid min-h-9 min-w-9 place-items-center border px-4 text-small transition-colors duration-300 disabled:opacity-40";

export function ClientDirectory({ locations, labels }: ClientDirectoryProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const term = query.trim().toLowerCase();
  const matches = term
    ? locations.filter((location) =>
        `${location.name} ${location.address}`.toLowerCase().includes(term),
      )
    : locations;
  const pageCount = Math.ceil(matches.length / PAGE_SIZE);
  const shown = matches.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const selected = locations.find((l) => l.id === selectedId) ?? null;

  // Pins on the map reflect the current search, so filtering by city
  // narrows both the list and the map together.
  const markers = matches.map((location) => ({
    id: location.id,
    label: location.name,
    coords: location.coords,
  }));
  const fitIds = matches.filter(isInBritishColumbia).map((l) => l.id);

  function select(id: string) {
    setSelectedId(id);
    // Bring the chosen client into view in the list, clearing a search
    // that would otherwise hide it.
    let index = matches.findIndex((l) => l.id === id);
    if (index === -1) {
      setQuery("");
      index = locations.findIndex((l) => l.id === id);
    }
    setPage(Math.max(0, Math.floor(index / PAGE_SIZE)));
  }

  function step(delta: 1 | -1) {
    if (!matches.length) return;
    const current = matches.findIndex((l) => l.id === selectedId);
    const next = (current + delta + matches.length) % matches.length;
    const target = matches[next];
    if (target) select(target.id);
  }

  function pagerWindow() {
    const span = 2;
    const start = Math.max(0, Math.min(page - span, pageCount - 1 - span * 2));
    const end = Math.min(pageCount - 1, start + span * 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative h-[360px] md:h-[480px] lg:h-auto lg:min-h-[640px]">
        <LocationMap
          markers={markers}
          selectedId={selectedId}
          onSelect={select}
          fitIds={fitIds.length ? fitIds : undefined}
          focusZoom={13}
          padding={{ bottom: selected ? 120 : 0 }}
          showAllLabel={labels.showAllLabel}
          ariaLabel={
            selected
              ? `Map showing ${selected.name}`
              : `Map of ${locations.length} client locations`
          }
          className="absolute inset-0 border border-ink/10"
        />

        {selected ? (
          <article
            aria-live="polite"
            className="absolute bottom-2.5 left-2.5 max-w-[calc(100%-20px)] border-t-[3px] border-brand bg-surface p-5 shadow-float md:w-[340px]"
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-micro text-ink/60 uppercase">
              <span>
                {matches.findIndex((l) => l.id === selected.id) + 1} of{" "}
                {matches.length}
              </span>
              <span className="flex gap-1.5">
                <button
                  type="button"
                  aria-label="Previous location"
                  onClick={() => step(-1)}
                  className="grid size-7 place-items-center border border-ink/10 transition-colors hover:bg-tint"
                >
                  <ChevronDownIcon className="size-3 rotate-90" />
                </button>
                <button
                  type="button"
                  aria-label="Next location"
                  onClick={() => step(1)}
                  className="grid size-7 place-items-center border border-ink/10 transition-colors hover:bg-tint"
                >
                  <ChevronDownIcon className="size-3 -rotate-90" />
                </button>
              </span>
            </div>
            <h3 className="text-body">{selected.name}</h3>
            <p className="mt-1.5 text-small text-ink/60">{selected.address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selected.name}, ${selected.address}`)}`}
              target="_blank"
              rel="noreferrer"
              className="link-wipe mt-4 inline-block text-note text-brand-ink"
            >
              Open in Google Maps
            </a>
          </article>
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
              setSelectedId(null);
            }}
            placeholder={labels.searchLabel}
            className="h-full min-w-0 flex-1 bg-transparent text-small placeholder:text-ink/60"
          />
        </label>

        <div className="mt-7 flex items-baseline justify-between gap-4">
          <h3 className="text-small text-brand-ink uppercase">
            {labels.listLabel}
          </h3>
          <p className="text-small text-ink/60">
            {labels.countLabel.replace("{count}", String(matches.length))}
          </p>
        </div>

        {shown.length ? (
          <ul className="mt-4 border-t border-ink/10">
            {shown.map((location) => {
              const active = location.id === selectedId;
              return (
                <li key={location.id} className="border-b border-ink/10">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => select(location.id)}
                    className={`w-full px-4 py-4 text-left transition-colors duration-300 ${
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
            {pagerWindow().map((index) => (
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

"use client";

import { useEffect, useRef, useState } from "react";
import { LocationMap } from "@/components/LocationMap";
import { ArrowTile } from "@/components/ui/ArrowButton";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@/components/ui/icons";
import { isInBritishColumbia, type ClientLocation } from "@/data/projects";
import type { NavLink, Project } from "@/lib/data";

type ProjectsExplorerProps = {
  projects: readonly Project[];
  locations: readonly ClientLocation[];
  defaultProjectId: string;
  allProjects: NavLink;
  allLocations: NavLink;
};

const STEP_BUTTON =
  "grid size-7 place-items-center border border-ink/10 transition-colors hover:bg-tint";

export function ProjectsExplorer({
  projects,
  locations,
  defaultProjectId,
  allProjects,
  allLocations,
}: ProjectsExplorerProps) {
  const defaultProject =
    projects.find((project) => project.id === defaultProjectId) ?? projects[0];
  const [selectedId, setSelectedId] = useState<string | null>(
    defaultProject?.clientId ?? locations[0]?.id ?? null,
  );
  const [query, setQuery] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  // Featured projects lead the list, then every other client site.
  const projectFor = new Map(projects.map((item) => [item.clientId, item]));
  const ordered = [
    ...projects
      .map((item) => locations.find((site) => site.id === item.clientId))
      .filter((site): site is ClientLocation => Boolean(site)),
    ...locations.filter((site) => !projectFor.has(site.id)),
  ];
  const term = query.trim().toLowerCase();
  const shown = term
    ? ordered.filter((site) =>
        `${site.name} ${site.address}`.toLowerCase().includes(term),
      )
    : ordered;

  const index = shown.findIndex((site) => site.id === selectedId);
  const site = index >= 0 ? shown[index] : undefined;
  const project = site ? projectFor.get(site.id) : undefined;

  function select(id: string) {
    setSelectedId(id);
    if (term && !shown.some((item) => item.id === id)) setQuery("");
  }

  function step(delta: 1 | -1) {
    if (!shown.length) return;
    const next = (index + delta + shown.length) % shown.length;
    const target = shown[next];
    if (target) select(target.id);
  }

  // Keep the chosen site visible in the list when it's picked on the map.
  useEffect(() => {
    const row = listRef.current?.querySelector<HTMLElement>(
      '[aria-pressed="true"]',
    );
    row?.scrollIntoView({ block: "nearest" });
  }, [selectedId]);

  return (
    <div className="grid gap-5 lg:grid-cols-[560px_1fr]">
      <div className="flex flex-col gap-2.5">
        <label className="flex h-[52px] items-center gap-3 border border-ink/10 bg-white px-4 transition-colors focus-within:border-brand">
          <SearchIcon className="size-4 shrink-0 text-ink/70" />
          <span className="sr-only">Search client locations</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedId(null);
            }}
            placeholder={`Search ${locations.length} client locations`}
            className="h-full min-w-0 flex-1 bg-transparent text-small placeholder:text-ink/60"
          />
        </label>

        {shown.length ? (
          <div className="relative">
            <ul
              ref={listRef}
              aria-label="Client locations"
              data-lenis-prevent
              className="scrollbar-none flex max-h-[440px] flex-col gap-2.5 overflow-y-auto pb-10 md:max-h-[376px]"
            >
              {shown.map((item) => {
                const featured = projectFor.get(item.id);
                const active = item.id === selectedId;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => select(item.id)}
                      className={`group relative w-full rounded-[4px] border px-4 py-3 text-left transition-colors duration-300 ${
                        active
                          ? "border-transparent bg-linear-to-r from-panel to-sky"
                          : "border-ink/10 bg-surface hover:bg-tint"
                      }`}
                    >
                      {featured ? (
                        <span className="label-micro mb-1 block text-brand-ink">
                          Featured project
                        </span>
                      ) : null}
                      <span className="block text-body">{item.name}</span>
                      <span className="mt-1 block text-small text-ink/60">
                        {featured ? featured.category : item.address}
                      </span>
                      {featured ? (
                        <span
                          className={`absolute top-2.5 right-2.5 transition-opacity duration-300 ${
                            active
                              ? ""
                              : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                          }`}
                        >
                          <ArrowTile className="bg-white" />
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-surface to-transparent"
            />
          </div>
        ) : (
          <p role="status" className="py-4 text-body text-ink/60">
            No client locations match that search.
          </p>
        )}
      </div>

      <div className="relative">
        <LocationMap
          markers={shown.map((item) => ({
            id: item.id,
            label: item.name,
            coords: item.coords,
          }))}
          selectedId={selectedId}
          onSelect={select}
          fitIds={shown.filter(isInBritishColumbia).map((item) => item.id)}
          focus={{ x: 0.72, y: 0.42 }}
          padding={{ left: 380, bottom: 40 }}
          showAllLabel="Show all locations"
          ariaLabel={
            site
              ? `Map of ${shown.length} client locations, showing ${site.name}`
              : `Map of ${shown.length} client locations`
          }
          className="relative h-[300px] shadow-card md:h-[440px]"
        />

        {site ? (
          <article
            aria-live="polite"
            className="mt-2.5 border-t-[3px] border-brand bg-surface p-5 shadow-float md:absolute md:bottom-2.5 md:left-2.5 md:mt-0 md:w-[370px]"
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-micro text-ink/60 uppercase">
              <span>
                {project ? "Featured project · " : "Client site · "}
                {index + 1} of {shown.length}
              </span>
              <span className="flex gap-1.5">
                <button
                  type="button"
                  aria-label="Previous location"
                  onClick={() => step(-1)}
                  className={STEP_BUTTON}
                >
                  <ChevronDownIcon className="size-3 rotate-90" />
                </button>
                <button
                  type="button"
                  aria-label="Next location"
                  onClick={() => step(1)}
                  className={STEP_BUTTON}
                >
                  <ChevronDownIcon className="size-3 -rotate-90" />
                </button>
              </span>
            </div>
            <h3 className="text-body">{project?.title ?? site.name}</h3>
            <p className="label-micro mt-1 text-ink/60">
              {project?.category ?? site.address}
            </p>
            {project ? (
              <p className="mt-1 text-small text-ink/60">{site.address}</p>
            ) : null}
            {project?.description ? (
              <p className="mt-4 text-small text-ink/60">
                {project.description}
              </p>
            ) : null}
            <a
              href={project ? allProjects.href : allLocations.href}
              className="group mt-6 inline-flex min-h-11 items-center gap-2 text-note text-brand-ink md:min-h-0"
            >
              <span className="link-wipe">
                {project ? allProjects.label : allLocations.label}
              </span>
              <ArrowUpRightIcon className="size-2.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
            </a>
          </article>
        ) : null}
      </div>
    </div>
  );
}

"use client";

import { useState, type CSSProperties } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Card } from "@/components/ui/Card";
import type { ProjectCategory, ProjectSummary } from "@/data/projects";

type ProjectGalleryProps = {
  projects: readonly ProjectSummary[];
  categories: readonly ProjectCategory[];
  labels: {
    allLabel: string;
    moreLabel: string;
    emptyLabel: string;
    sitesLabel: string;
    sitesCta: string;
    sitesHref: string;
  };
  siteCount: number;
};

const PAGE_SIZE = 9;

/** A filter needs at least this many projects before it's worth showing. */
const MIN_PER_CATEGORY = 2;

export function ProjectGallery({
  projects,
  categories,
  labels,
  siteCount,
}: ProjectGalleryProps) {
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shownCategories = categories.filter(
    (item) =>
      projects.filter((project) => project.categories.includes(item.id))
        .length >= MIN_PER_CATEGORY,
  );
  const filters = [{ id: null, label: labels.allLabel }, ...shownCategories];
  const labelFor = new Map(categories.map((item) => [item.id, item.label]));
  const matches = category
    ? projects.filter((project) => project.categories.includes(category))
    : projects;

  function selectCategory(id: string | null) {
    setCategory(id);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
        <ul aria-label="Filter projects" className="flex flex-wrap gap-2.5">
          {filters.map((filter) => {
            const active = filter.id === category;
            return (
              <li key={filter.label}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectCategory(filter.id)}
                  className={`min-h-10 border px-[18px] text-small transition-colors duration-300 ${
                    active
                      ? "border-ink bg-ink text-white"
                      : "border-sky bg-tint text-ink/60 hover:text-ink"
                  }`}
                >
                  {filter.label}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="text-small text-ink/60">
          {labels.sitesLabel.replace("{count}", String(siteCount))}
          {" · "}
          <a href={labels.sitesHref} className="link-wipe text-brand-ink">
            {labels.sitesCta}
          </a>
        </p>
      </div>

      {matches.length ? (
        <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {matches.slice(0, visible).map((project, index) => (
            <li
              key={project.id}
              style={{ "--i": index % 3 } as CSSProperties}
              className="reveal"
            >
              <Card
                eyebrow={project.categories
                  .map((id) => labelFor.get(id))
                  .join(" · ")}
                title={project.title}
                body={project.summary}
                image={project.image}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p role="status" className="mt-12 text-body text-ink/60">
          {labels.emptyLabel}
        </p>
      )}

      {matches.length > visible ? (
        <div className="mt-12 flex justify-center">
          <ArrowButton
            variant="dark"
            onClick={() => setVisible(visible + PAGE_SIZE)}
          >
            {labels.moreLabel}
          </ArrowButton>
        </div>
      ) : null}
    </>
  );
}

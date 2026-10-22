"use client";

import { useState, type CSSProperties } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Card } from "@/components/ui/Card";
import type { ProjectCategory, ProjectSummary } from "@/data/projects";

type ProjectGalleryProps = {
  projects: readonly ProjectSummary[];
  categories: readonly ProjectCategory[];
  labels: { allLabel: string; moreLabel: string; emptyLabel: string };
};

const PAGE_SIZE = 9;

export function ProjectGallery({
  projects,
  categories,
  labels,
}: ProjectGalleryProps) {
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filters = [{ id: null, label: labels.allLabel }, ...categories];
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

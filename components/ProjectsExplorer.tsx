"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectMap } from "@/components/ProjectMap";
import { ArrowTile } from "@/components/ui/ArrowButton";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { NavLink, Project } from "@/lib/data";

type ProjectsExplorerProps = {
  projects: readonly Project[];
  defaultProjectId: string;
  allProjects: NavLink;
};

export function ProjectsExplorer({
  projects,
  defaultProjectId,
  allProjects,
}: ProjectsExplorerProps) {
  const [selectedId, setSelectedId] = useState(defaultProjectId);

  const selected =
    projects.find((project) => project.id === selectedId) ?? projects[0];
  if (!selected) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[560px_1fr]">
      <ul className="flex flex-col gap-2.5">
        {projects.map((project) => {
          const active = project.id === selected.id;
          return (
            <li key={project.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedId(project.id)}
                className={`group relative flex min-h-[100px] w-full items-stretch overflow-hidden rounded-[4px] border text-left transition-colors duration-500 sm:h-[140px] ${
                  active
                    ? "border-transparent bg-linear-to-r from-panel to-sky"
                    : "border-ink/10 bg-surface hover:bg-tint"
                }`}
              >
                <span className="relative w-[120px] shrink-0 overflow-hidden sm:w-[240px]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 640px) 120px, 240px"
                    className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110 motion-reduce:transition-none"
                  />
                </span>
                <span className="flex flex-col justify-end gap-1.5 p-4 sm:px-5 sm:pb-5">
                  <span className="text-lead">{project.title}</span>
                  <span className="label-micro text-ink/60">
                    {project.category}
                  </span>
                </span>
                <span
                  className={`absolute top-2.5 right-2.5 transition-opacity duration-300 ${
                    active
                      ? ""
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  <ArrowTile className="bg-white" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="relative">
        <ProjectMap center={selected.coords} label={selected.title} />

        <article
          aria-live="polite"
          className="mt-2.5 border-t-[3px] border-brand bg-surface p-5 shadow-float md:absolute md:bottom-2.5 md:left-2.5 md:mt-0 md:w-[370px]"
        >
          <h3 className="text-body">{selected.title}</h3>
          <p className="label-micro mt-1 text-ink/60">{selected.category}</p>
          {selected.description ? (
            <p className="mt-4 text-small text-ink/60">
              {selected.description}
            </p>
          ) : null}
          <a
            href={allProjects.href}
            className="group mt-6 inline-flex min-h-11 items-center gap-2 text-note text-brand-ink md:min-h-0"
          >
            <span className="link-wipe">{allProjects.label}</span>
            <ArrowUpRightIcon className="size-2.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </a>
        </article>
      </div>
    </div>
  );
}

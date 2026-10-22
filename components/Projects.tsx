import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { NavLink, Project, SectionIntro } from "@/lib/data";

type ProjectsProps = {
  intro: SectionIntro & { allProjects: NavLink };
  projects: readonly Project[];
  defaultProjectId: string;
};

export function Projects({
  intro,
  projects,
  defaultProjectId,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative isolate overflow-x-clip bg-linear-to-b from-mist to-surface pt-28 pb-20 lg:pt-[190px] lg:pb-[100px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-[-15%] top-0 -z-10 h-[110px] rounded-b-[50%] bg-surface"
      />

      <div className="reveal container-page">
        <Eyebrow>{intro.eyebrow}</Eyebrow>
        <h2 className="mt-6 text-title">{intro.heading}</h2>
        <p className="mt-5 max-w-[600px] text-body text-ink/60">{intro.body}</p>
      </div>

      <div className="reveal container-page mt-12 lg:mt-[100px]">
        <ProjectsExplorer
          projects={projects}
          defaultProjectId={defaultProjectId}
          allProjects={intro.allProjects}
        />
      </div>
    </section>
  );
}

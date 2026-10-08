import { profile, type Project } from "@/data/profile";
import Section from "./Section";
import Tag from "./Tag";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border bg-surface p-6 ${
        project.flagship ? "border-accent/40 sm:p-8" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {project.flagship && (
          <span className="rounded-full bg-btn px-2.5 py-0.5 text-xs font-medium text-btn-fg">
            Featured
          </span>
        )}
        {project.label && (
          <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
            {project.label}
          </span>
        )}
      </div>
      <h3 className={`mt-2 font-semibold text-fg ${project.flagship ? "text-2xl" : "text-lg"}`}>
        {project.title}
      </h3>
      <p className="mt-2 text-muted">{project.summary}</p>

      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-fg marker:text-accent">
        {project.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      {/* mt-auto keeps tags and links aligned at the bottom of each card */}
      <div className="mt-auto pt-5">
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
              >
                Play in browser
                <span className="sr-only"> ({project.title}, opens in a new tab)</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
              >
                View code on GitHub
                <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {profile.projects.map((p) => (
          <li key={p.title} className={p.flagship ? "md:col-span-2" : undefined}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

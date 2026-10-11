import type { Project } from "@/data/profile";
import Tag from "./Tag";

function CardLink({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover hover:underline"
    >
      {label}
      <span className="sr-only"> for {title} (opens in a new tab)</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl border bg-surface ${
        project.flagship ? "border-accent/40" : "border-line"
      }`}
    >
      {project.image && (
        // Plain <img>: static export has no image optimizer. Lazy so offscreen cards don't slow the first load.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={960}
          height={540}
          loading="lazy"
          decoding="async"
          className={`w-full border-b border-line object-cover ${
            project.flagship ? "aspect-[21/9]" : "aspect-video"
          }`}
        />
      )}

      <div className={`flex flex-1 flex-col p-6 ${project.flagship ? "sm:p-8" : ""}`}>
        {(project.flagship || project.label) && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
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
        )}
        <h3 className={`font-semibold text-fg ${project.flagship ? "text-2xl" : "text-lg"}`}>
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
                <CardLink href={project.liveUrl} label="Play in browser" title={project.title} />
              )}
              {project.githubUrl && (
                <CardLink href={project.githubUrl} label="View code on GitHub" title={project.title} />
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

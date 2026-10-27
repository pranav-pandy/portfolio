import type { Project } from "@/data/profile";
import ExternalLink from "./ExternalLink";
import StackLine from "./StackLine";

function Links({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;
  return (
    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.92rem]">
      {project.liveUrl && (
        <ExternalLink href={project.liveUrl} srContext={project.title}>
          Play in browser
        </ExternalLink>
      )}
      {project.githubUrl && (
        <ExternalLink href={project.githubUrl} srContext={project.title}>
          Source code
        </ExternalLink>
      )}
    </p>
  );
}

function Stack({ tags }: { tags: string[] }) {
  return <StackLine items={tags} className="mt-4" />;
}

function Details({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-2 leading-relaxed text-fg/90 ${className}`}>
      {items.map((d) => (
        <li key={d} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
          {d}
        </li>
      ))}
    </ul>
  );
}

function Img({ project, className, eager = false }: { project: Project; className: string; eager?: boolean }) {
  if (!project.image) return null;
  return (
    // Plain <img>: static export has no image optimizer.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image.src}
      alt={project.image.alt}
      width={960}
      height={540}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`aspect-video w-full rounded-[3px] bg-surface object-cover ${className}`}
    />
  );
}

/** The one featured project: a wide panel with the write-up beside its image. */
export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="rounded-[4px] border border-line bg-surface p-6 sm:p-8 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-10">
      <div>
        <p className="meta !text-gold-ink">Featured project</p>
        <h3 className="mt-2 text-[1.85rem] leading-tight text-fg sm:text-[2.1rem]">{project.title}</h3>
        <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">{project.summary}</p>
        <h4 className="meta mt-6 uppercase tracking-[0.08em]">What I built</h4>
        <Details items={project.details} className="mt-2 text-[0.97rem]" />
      </div>
      {/* Image with the stack and links under it, so both columns carry weight. */}
      <div className="mt-8 md:mt-1">
        <Img project={project} className="" eager />
        <Stack tags={project.tags} />
        <Links project={project} />
      </div>
    </article>
  );
}

/** A row in the project index: text first, a small supporting image on the right. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="py-8 sm:grid sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_13rem]">
      <div className="min-w-0">
        <h3 className="text-[1.4rem] leading-snug text-fg">
          {project.title}
          {project.label && (
            <span className="meta ml-3 whitespace-nowrap align-[0.2em] !text-[0.72rem] uppercase tracking-[0.08em]">
              {project.label}
            </span>
          )}
        </h3>
        <p className="mt-1.5 text-[1rem] text-muted">{project.summary}</p>
        <Details items={project.details} className="mt-4 text-[0.95rem]" />
        <Stack tags={project.tags} />
        <Links project={project} />
      </div>
      {/* Supporting image only: hidden on phones, where it would push the text down. */}
      <Img project={project} className="hidden sm:mt-1.5 sm:block" />
    </article>
  );
}

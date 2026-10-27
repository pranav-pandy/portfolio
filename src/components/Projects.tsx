import Link from "next/link";
import { profile, mlProjects } from "@/data/profile";
import Section from "./Section";
import { FeaturedProject, ProjectRow } from "./ProjectEntry";

// Link to the ML Projects page, shown as the last entry in the index.
function MlCollectionLink() {
  const thumbs = mlProjects.filter((p) => p.image).slice(0, 3);
  return (
    <Link
      href="/ml-projects"
      className="group mt-2 flex items-center gap-6 rounded-[4px] border border-line-strong px-5 py-5 transition-colors duration-150 hover:border-accent sm:px-6"
    >
      <div aria-hidden="true" className="hidden shrink-0 -space-x-6 sm:flex">
        {thumbs.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.title}
            src={p.image!.src}
            alt=""
            loading="lazy"
            className="h-14 w-20 rounded-[3px] border-2 border-bg object-cover transition-transform duration-200 group-hover:translate-x-[calc(var(--i)*4px)]"
            style={{ ["--i" as string]: i }}
          />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <p className="meta">Collection · {mlProjects.length} projects</p>
        <p className="mt-0.5 font-serif text-[1.35rem] leading-snug text-fg">{profile.mlCollection.title}</p>
        <p className="mt-1 text-[0.95rem] text-muted">{profile.mlCollection.summary}</p>
      </div>
      <span aria-hidden="true" className="text-xl text-accent transition-transform duration-150 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

export default function Projects() {
  const featured = profile.projects.find((p) => p.flagship);
  const rest = profile.projects.filter((p) => !p.flagship);
  return (
    <Section id="projects" title="Projects" kicker="Web, mobile, and ML work. Coursework is labeled.">
      {featured && <FeaturedProject project={featured} />}
      <ul className="mt-4 divide-y divide-line">
        {rest.map((p) => (
          <li key={p.title}>
            <ProjectRow project={p} />
          </li>
        ))}
      </ul>
      <MlCollectionLink />
    </Section>
  );
}

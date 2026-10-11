import Link from "next/link";
import { profile, mlProjects } from "@/data/profile";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

// "Folder" card that opens the ML Projects page, with a 2x2 preview of its images.
function MlFolderCard() {
  const previews = mlProjects.filter((p) => p.image).slice(0, 4);
  return (
    <Link
      href="/ml-projects"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-accent"
    >
      <div aria-hidden="true" className="grid aspect-video grid-cols-2 gap-0.5 border-b border-line bg-line">
        {previews.map((p) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={p.title} src={p.image!.src} alt="" loading="lazy" className="h-full w-full object-cover" />
        ))}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-muted">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2 2.2h8.4A1.5 1.5 0 0 1 21 8.7v9.8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wider">Collection</span>
        </div>
        <h3 className="text-lg font-semibold text-fg">{profile.mlCollection.title}</h3>
        <p className="mt-2 text-muted">
          {mlProjects.length} projects. {profile.mlCollection.summary}
        </p>
        <span className="mt-auto pt-5 text-sm font-medium text-accent group-hover:underline">
          Open collection <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
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
        <li>
          <MlFolderCard />
        </li>
      </ul>
    </Section>
  );
}

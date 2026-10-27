import { profile } from "@/data/profile";
import Section from "./Section";
import LogoTile from "./LogoTile";
import StackLine from "./StackLine";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line">
        {profile.experience.map((job) => (
          <li key={job.company} className="py-9 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-8">
            {/* When and where: a quiet mono column on wide screens, a single line on phones. */}
            <div className="meta mb-3 flex flex-wrap gap-x-3 sm:mb-0 sm:block sm:pt-1.5">
              <p>{job.dates ?? job.type ?? "Volunteer"}</p>
              <p className="sm:mt-1">{job.location}</p>
            </div>

            <article>
              <header className="flex items-start gap-4">
                {job.logo && <LogoTile src={job.logo} />}
                <div className="min-w-0">
                  <h3 className="text-[1.45rem] leading-snug text-fg">{job.role}</h3>
                  <p className="mt-0.5 text-[0.95rem] text-muted">
                    <span className="font-medium text-fg">{job.company}</span>
                    {job.type && job.dates && <> · {job.type}</>}
                  </p>
                </div>
              </header>

              {job.description && (
                <p className="mt-4 max-w-[40rem] text-[0.95rem] leading-relaxed text-muted">
                  {job.description}
                </p>
              )}

              <ul className="mt-4 max-w-[40rem] space-y-2.5 text-[0.98rem] leading-relaxed text-fg/90">
                {job.bullets.map((b) => (
                  <li key={b} className="relative pl-5 before:absolute before:left-0 before:text-accent before:content-['–']">
                    {b}
                  </li>
                ))}
              </ul>

              <StackLine items={job.tech} className="mt-5" />
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { profile } from "@/data/profile";
import Section from "./Section";
import Tag from "./Tag";
import LogoTile from "./LogoTile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6">
        {profile.experience.map((job) => (
          <li key={job.company}>
            <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex items-start gap-4">
                {job.logo && <LogoTile src={job.logo} />}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="text-xl font-semibold text-fg">{job.company}</h3>
                    <p className="text-sm text-muted">{job.location}</p>
                  </div>
                  <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <p className="font-medium text-accent">
                      {job.role}
                      {job.type && <span className="font-normal text-muted"> · {job.type}</span>}
                    </p>
                    {job.dates && <p className="text-sm text-muted">{job.dates}</p>}
                  </div>
                </div>
              </div>

              {job.description && (
                <p className="mt-4 text-sm italic text-muted">{job.description}</p>
              )}

              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-fg marker:text-accent">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

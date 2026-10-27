import { profile } from "@/data/profile";
import Section from "./Section";
import LogoTile from "./LogoTile";

export default function Education() {
  const [primary, ...others] = profile.education;
  return (
    <Section id="education" title="Education">
      {/* Most recent degree gets the space; earlier ones stay compact. */}
      <article className="flex items-start gap-5">
        {primary.logo && <LogoTile src={primary.logo} size="lg" />}
        <div className="min-w-0">
          <h3 className="text-[1.65rem] leading-tight text-fg">{primary.school}</h3>
          <p className="mt-1 text-[1.05rem] text-fg/90">
            {primary.degree}
            {primary.gpa && <span className="text-muted"> · GPA {primary.gpa}</span>}
          </p>
          <p className="meta mt-2">
            {primary.location} · {primary.dates}
            {primary.note && ` · ${primary.note}`}
          </p>
          {primary.courses && (
            <p className="mt-4 max-w-[38rem] text-[0.95rem] leading-relaxed text-muted">
              <span className="text-fg">Coursework: </span>
              {primary.courses.join(", ")}
            </p>
          )}
        </div>
      </article>

      {others.map((ed) => (
        <article key={ed.school} className="mt-9 flex items-start gap-5 border-t border-line pt-8">
          {ed.logo && <LogoTile src={ed.logo} />}
          <div className="min-w-0">
            <h3 className="text-[1.25rem] leading-snug text-fg">{ed.school}</h3>
            <p className="mt-0.5 text-[0.98rem] text-fg/90">
              {ed.degree}
              {ed.gpa && <span className="text-muted"> · GPA {ed.gpa}</span>}
            </p>
            <p className="meta mt-1.5">
              {ed.location} · {ed.dates}
            </p>
            {ed.courses && (
              <p className="mt-3 max-w-[38rem] text-[0.92rem] leading-relaxed text-muted">
                <span className="text-fg">Coursework: </span>
                {ed.courses.join(", ")}
              </p>
            )}
          </div>
        </article>
      ))}
    </Section>
  );
}

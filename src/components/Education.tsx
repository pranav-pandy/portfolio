import { profile } from "@/data/profile";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-6 md:grid-cols-2">
        {profile.education.map((ed) => (
          <li key={ed.school} className="rounded-xl border border-line bg-surface p-6">
            <h3 className="text-lg font-semibold text-fg">{ed.school}</h3>
            <p className="mt-1 font-medium text-accent">{ed.degree}</p>
            <p className="mt-2 text-sm text-muted">
              {ed.location} · {ed.dates}
              {ed.note && ` · ${ed.note}`}
            </p>
            {ed.gpa && (
              <p className="mt-1 text-sm text-fg">
                <span className="font-medium">GPA:</span> {ed.gpa}
              </p>
            )}
            {ed.courses && (
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-medium text-fg">Courses:</span> {ed.courses.join(", ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

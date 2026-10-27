import { profile } from "@/data/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
        {profile.skills.map((group, gi) => (
          <div
            key={group.name}
            // An odd last group spans both columns instead of leaving an empty cell.
            className={`border-t border-line pt-3 ${
              gi === profile.skills.length - 1 && profile.skills.length % 2 === 1 ? "sm:col-span-2" : ""
            }`}
          >
            <dt className="meta uppercase tracking-[0.08em]">{group.name}</dt>
            <dd className="mt-2 max-w-[44rem] text-[1rem] leading-[1.7] text-fg">{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

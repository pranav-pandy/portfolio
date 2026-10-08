import { profile } from "@/data/profile";
import Section from "./Section";
import Tag from "./Tag";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-[10rem_1fr]">
        {profile.skills.map((group) => (
          <div key={group.name} className="contents">
            <dt className="font-semibold text-fg">{group.name}</dt>
            <dd>
              <ul aria-label={group.name} className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

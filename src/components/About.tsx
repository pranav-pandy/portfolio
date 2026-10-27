import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="about" title="About">
      <div className="max-w-[38rem] space-y-5 text-[1.0625rem] leading-[1.75] text-fg/90">
        <p className="font-serif text-[1.35rem] leading-[1.55] text-fg">{lead}</p>
        {rest.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

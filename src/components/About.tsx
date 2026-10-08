import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

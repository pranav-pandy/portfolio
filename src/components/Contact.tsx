import { profile } from "@/data/profile";
import Section from "./Section";
import ExternalLink from "./ExternalLink";

// "https://www.github.com/x" -> "github.com/x"
const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[34rem] text-[1.05rem] leading-relaxed text-muted">{profile.contactNote}</p>
      <p className="mt-5">
        <a
          href={`mailto:${profile.email}`}
          className="link break-all font-serif text-[1.9rem] leading-tight sm:text-[2.4rem]"
        >
          {profile.email}
        </a>
      </p>
      <ul className="meta mt-8 flex flex-wrap gap-x-8 gap-y-2 !text-[0.875rem]">
        <li>
          <ExternalLink href={profile.linkedin}>{display(profile.linkedin)}</ExternalLink>
        </li>
        <li>
          <ExternalLink href={profile.github}>{display(profile.github)}</ExternalLink>
        </li>
      </ul>
    </Section>
  );
}

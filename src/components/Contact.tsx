import { profile } from "@/data/profile";
import Section from "./Section";

// "https://www.github.com/x" -> "github.com/x"
const display = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, newTab: false },
    { label: "LinkedIn", value: display(profile.linkedin), href: profile.linkedin, newTab: true },
    { label: "GitHub", value: display(profile.github), href: profile.github, newTab: true },
  ];

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-lg text-muted">
        I&apos;m open to Software Engineer roles. Email is the best way to reach me.
      </p>
      <ul className="mt-6 space-y-3">
        {links.map((l) => (
          <li key={l.label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="w-24 shrink-0 font-semibold text-fg">{l.label}</span>
            <a
              href={l.href}
              className="break-all text-accent hover:text-accent-hover hover:underline"
              {...(l.newTab && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {l.value}
              {l.newTab && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

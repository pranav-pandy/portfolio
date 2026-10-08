import { profile } from "@/data/profile";

function ButtonLink({
  href,
  children,
  primary = false,
  newTab = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  newTab?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors";
  const style = primary
    ? "bg-btn text-btn-fg hover:bg-btn-hover"
    : "border border-line text-fg hover:border-accent hover:text-accent";
  return (
    <a
      href={href}
      className={`${base} ${style}`}
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="scroll-mt-20 pt-16 pb-10 sm:pt-24 sm:pb-14">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {profile.title}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resume} primary newTab>
              View Resume
            </ButtonLink>
            <ButtonLink href={profile.github} newTab>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} newTab>
              LinkedIn
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`}>Email</ButtonLink>
          </div>
        </div>

        {profile.photo && (
          // Plain <img>: static export has no image optimizer.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            width={176}
            height={176}
            className="h-36 w-36 shrink-0 rounded-full border-4 border-surface object-cover sm:h-44 sm:w-44"
          />
        )}
      </div>
    </section>
  );
}

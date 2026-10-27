import { profile } from "@/data/profile";
import ExternalLink from "./ExternalLink";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="pb-16 pt-14 sm:pb-20 sm:pt-24">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_13rem] md:items-end lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        <div>
          <h1
            id="hero-name"
            className="text-[2.6rem] leading-[1.02] tracking-[-0.025em] text-fg sm:text-6xl lg:text-[4.25rem]"
          >
            {profile.name}
          </h1>
          <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[3px] bg-btn px-4 py-2.5 text-sm font-medium text-btn-fg transition-[background-color,transform] duration-150 hover:bg-btn-hover active:translate-y-px"
            >
              View résumé
              <span className="meta !text-[0.75rem] !text-btn-fg/80">PDF</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
              <li>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
              </li>
              <li>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="link">
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {profile.photo && (
          // Plain <img>: static export has no image optimizer. Above the fold, so load eagerly.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={480}
            height={480}
            fetchPriority="high"
            className="order-first aspect-square w-28 rounded-[3px] object-cover sm:w-36 md:order-none md:w-full"
          />
        )}
      </div>

      <dl className="mt-14 grid gap-x-10 gap-y-5 border-t border-line pt-6 sm:grid-cols-3">
        {profile.facts.map((f) => (
          <div key={f.label}>
            <dt className="meta">{f.label}</dt>
            <dd className="mt-1 text-[0.95rem] text-fg">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import type { ReactNode } from "react";

// Editorial section: a hairline rule, the title in a left rail on wide screens, content on the right.
// The rail title stays in view while you read a long section (Experience, Projects).
export default function Section({
  id,
  title,
  kicker,
  children,
  className = "",
}: {
  id: string;
  title: string;
  kicker?: string; // one short line under the rail title
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-line py-14 sm:py-20 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12 ${className}`}
    >
      <header className="mb-8 lg:mb-0">
        <div className="lg:sticky lg:top-24">
          <h2 id={`${id}-heading`} className="text-[1.75rem] leading-tight text-fg sm:text-3xl">
            {title}
          </h2>
          {kicker && <p className="meta mt-2 max-w-[13rem]">{kicker}</p>}
        </div>
      </header>
      <div className="reveal min-w-0">{children}</div>
    </section>
  );
}

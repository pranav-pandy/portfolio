import type { ReactNode } from "react";

// Shared wrapper: consistent spacing, an anchor id for the nav, and a heading with a gold underline.
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20 py-14 sm:py-16">
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        {title}
        <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-gold" />
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

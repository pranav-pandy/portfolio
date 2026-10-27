import type { ReactNode } from "react";

// Opens in a new tab, says so to screen readers, and shows a small ↗ so sighted users know too.
export default function ExternalLink({
  href,
  children,
  className = "link",
  srContext,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  srContext?: string; // e.g. the project name, so "View code" links are distinguishable
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${className}`}>
      {children}
      <span className="sr-only">
        {srContext ? ` for ${srContext}` : ""} (opens in a new tab)
      </span>
      <span aria-hidden="true" className="ml-0.5 inline-block text-[0.85em] transition-transform duration-150 group-hover:-translate-y-px group-hover:translate-x-px">
        ↗
      </span>
    </a>
  );
}

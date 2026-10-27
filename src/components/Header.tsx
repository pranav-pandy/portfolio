"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Which section is currently being read (home page only), for the nav underline.
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const els = NAV.map((n) => document.getElementById(n.id)).filter((el): el is HTMLElement => !!el);
    // A section counts as "current" while it crosses a band just below the header.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

export default function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const isHome = usePathname() === "/";
  const active = useActiveSection(isHome);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const [first, ...lastParts] = name.split(" ");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/92 backdrop-blur-sm supports-[backdrop-filter]:bg-bg/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-[3px] focus:bg-btn focus:px-3 focus:py-2 focus:text-btn-fg"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group whitespace-nowrap font-serif text-[1.15rem] leading-none text-fg" aria-label={`${name}, home`}>
          {first} <span className="text-muted transition-colors duration-150 group-hover:text-fg max-[359px]:hidden md:max-lg:hidden">{lastParts.join(" ")}</span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NAV.map((item) => {
                const current = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`/#${item.id}`}
                      aria-current={current ? "location" : undefined}
                      className={`relative py-1 text-[0.9rem] transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-accent after:transition-transform after:duration-200 hover:text-fg hover:after:scale-x-100 ${
                        current ? "text-fg after:scale-x-100" : "text-muted after:scale-x-0"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-line md:block" />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[3px] text-muted hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <li key={item.id} className="border-b border-line last:border-b-0">
                <a
                  href={`/#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 font-serif text-[1.25rem] text-fg"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-muted">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

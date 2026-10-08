import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

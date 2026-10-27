import { profile } from "@/data/profile";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="meta mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex gap-6">
          <ExternalLink href={profile.sourceUrl} className="hover:text-fg">
            Site source
          </ExternalLink>
          <a href="#main" className="hover:text-fg">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

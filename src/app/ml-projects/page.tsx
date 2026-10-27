import type { Metadata } from "next";
import Link from "next/link";
import { profile, mlProjects } from "@/data/profile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectRow } from "@/components/ProjectEntry";

export const metadata: Metadata = {
  title: `${profile.mlCollection.title} | ${profile.name}`,
  description: profile.mlCollection.summary,
  alternates: { canonical: "/ml-projects" },
};

export default function MlProjectsPage() {
  return (
    <>
      <Header name={profile.name} />
      <main id="main" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="pb-10 pt-10 sm:pt-14 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-12">
          <nav aria-label="Breadcrumb" className="meta mb-6 lg:mb-0 lg:pt-3">
            <Link href="/#projects" className="hover:text-fg">
              <span aria-hidden="true">←</span> All projects
            </Link>
          </nav>
          <div>
            <h1 className="text-[2.4rem] leading-[1.05] tracking-[-0.02em] text-fg sm:text-5xl">
              {profile.mlCollection.title}
            </h1>
            <p className="mt-4 max-w-[36rem] text-[1.05rem] leading-relaxed text-muted">
              {profile.mlCollection.intro}
            </p>
            <p className="meta mt-3">{mlProjects.length} projects · {profile.mlCollection.summary}</p>
          </div>
        </div>

        <ul className="divide-y divide-line border-t border-line lg:ml-[calc(13rem+3rem)]">
          {mlProjects.map((p) => (
            <li key={p.title}>
              <ProjectRow project={p} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

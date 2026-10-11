import type { Metadata } from "next";
import Link from "next/link";
import { profile, mlProjects } from "@/data/profile";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: `${profile.mlCollection.title} | ${profile.name}`,
  description: profile.mlCollection.summary,
};

export default function MlProjectsPage() {
  return (
    <>
      <Header name={profile.name} />
      <main id="main" className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <nav aria-label="Breadcrumb" className="pt-10 text-sm text-muted">
          <Link href="/#projects" className="hover:text-accent">
            <span aria-hidden="true">←</span> All projects
          </Link>
        </nav>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {profile.mlCollection.title}
          <span aria-hidden="true" className="mt-2 block h-1 w-12 rounded-full bg-gold" />
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{profile.mlCollection.intro}</p>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {mlProjects.map((p) => (
            <li key={p.title}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

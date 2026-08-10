"use client";

import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types/portfolio";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [projects, selectedCategory],
  );

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          description="Showcase your strongest work with a polished project gallery and category filter."
        />
        <div className="mt-10 flex flex-col gap-6">
          <ProjectFilter categories={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </section>
  );
}

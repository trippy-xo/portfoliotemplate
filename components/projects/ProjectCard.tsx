import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border/70 bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={540}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {project.featured ? (
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-background">
            Featured
          </span>
        ) : null}
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Badge key={technology} variant="secondary">
              {technology}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button href={project.liveUrl} variant="secondary" className="inline-flex items-center gap-2">
            Live Demo
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button href={project.githubUrl} variant="ghost" className="inline-flex items-center gap-2">
            GitHub
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

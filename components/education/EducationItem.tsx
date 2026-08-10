import type { Education } from "@/types/portfolio";

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30">
      <p className="text-sm uppercase tracking-[0.2em] text-accent/90">{education.dates}</p>
      <h3 className="mt-4 text-2xl font-semibold text-foreground">{education.qualification}</h3>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{education.institution}</p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{education.description}</p>
    </div>
  );
}

import { formatDateRange } from "@/lib/utils";
import type { Experience as ExperienceType } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";

interface ExperienceItemProps {
  item: ExperienceType;
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="group rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/30">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.company} · {item.location}
          </p>
        </div>
        <p className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent">
          {formatDateRange(item.startDate, item.endDate)}
        </p>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.description}</p>
      <div className="mt-5 space-y-3">
        {item.responsibilities.map((point) => (
          <p key={point} className="text-sm text-foreground/90">• {point}</p>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.technologies.map((technology) => (
          <Badge key={technology} variant="secondary">
            {technology}
          </Badge>
        ))}
      </div>
    </article>
  );
}

import type { Experience as ExperienceType } from "@/types/portfolio";
import { ExperienceItem } from "@/components/experience/ExperienceItem";

interface ExperienceTimelineProps {
  items: ExperienceType[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <ExperienceItem key={`${item.company}-${item.role}`} item={item} />
      ))}
    </div>
  );
}

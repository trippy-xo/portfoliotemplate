import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Experience as ExperienceType } from "@/types/portfolio";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="border-t border-border/70 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          description="A timeline of leadership, consulting, and product work with polished presentation and technology context."
        />
        <div className="mt-12">
          <ExperienceTimeline items={experience} />
        </div>
      </div>
    </section>
  );
}

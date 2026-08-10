import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Education as EducationType } from "@/types/portfolio";
import { EducationItem } from "@/components/education/EducationItem";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          description="Academic achievements and foundational training that support your technical story."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <EducationItem key={`${item.institution}-${item.qualification}`} education={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { SkillCategory as SkillCategoryType } from "@/types/portfolio";
import { SkillCategory } from "@/components/skills/SkillCategory";

interface SkillsProps {
  skills: SkillCategoryType[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          description="Organized skill categories for a clean, easy-to-customize technology showcase."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

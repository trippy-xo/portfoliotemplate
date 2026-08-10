import type { SkillCategory as SkillCategoryType } from "@/types/portfolio";
import { SkillCard } from "@/components/skills/SkillCard";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-background p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

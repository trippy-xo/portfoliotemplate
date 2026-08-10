import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: string;
}

export function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className={cn("rounded-[1.75rem] border border-border/70 bg-background px-5 py-4 text-sm font-medium text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md")}> 
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          {icon.slice(0, 1)}
        </span>
        <span>{name}</span>
      </div>
    </div>
  );
}

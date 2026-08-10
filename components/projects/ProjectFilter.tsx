import type { Dispatch, SetStateAction } from "react";

interface ProjectFilterProps {
  categories: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export function ProjectFilter({ categories, selected, setSelected }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelected(category)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
            selected === category
              ? "border-accent bg-accent/10 text-accent"
              : "border-border bg-background text-foreground hover:border-accent/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

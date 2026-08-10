import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  variant?: "default" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em]",
        variant === "default" && "bg-accent/10 text-accent",
        variant === "secondary" && "bg-accent/15 text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

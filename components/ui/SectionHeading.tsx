import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent/90">Section</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

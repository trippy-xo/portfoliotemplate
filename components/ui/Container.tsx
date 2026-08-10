import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Container({ children, id, className }: ContainerProps) {
  return (
    <section id={id} className={className ?? "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"}>
      {children}
    </section>
  );
}

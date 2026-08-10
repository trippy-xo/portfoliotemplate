import { SocialLinks } from "@/components/ui/SocialLinks";
import type { SocialLink } from "@/types/portfolio";

interface FooterProps {
  socials: SocialLink[];
}

export function Footer({ socials }: FooterProps) {
  return (
    <footer className="border-t border-border/70 bg-background/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/90">Portfolio Template</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Built as a polished one-page portfolio structure with reusable sections and modern UI.
          </p>
        </div>

        <SocialLinks links={socials} />
      </div>
    </footer>
  );
}

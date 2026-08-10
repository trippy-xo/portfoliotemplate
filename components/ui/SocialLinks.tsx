import type { SocialLink } from "@/types/portfolio";
import {
  Github,
  Linkedin,
  Dribbble,
  Mail,
  Smartphone,
} from "lucide-react";

const iconMap: Record<string, typeof Mail> = {
  Github,
  Linkedin,
  Dribbble,
  Mail,
  Smartphone,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        {links.map((item) => {
          const Icon = iconMap[item.icon] ?? Mail;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

import type { NavigationItem } from "@/types/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  navigation: NavigationItem[];
}

export function Navbar({ navigation }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-12 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold tracking-[0.2em] text-foreground/90">
          PORTFOLIO TEMPLATE
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-10 lg:gap-12">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-accent bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90 lg:inline-flex"
          >
            Contact
          </a>
          <MobileMenu navigation={navigation} />
        </div>
      </div>
    </header>
  );
}

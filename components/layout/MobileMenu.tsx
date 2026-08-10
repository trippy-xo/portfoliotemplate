"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import type { NavigationItem } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  navigation: NavigationItem[];
}

export function MobileMenu({ navigation }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="h-11 w-11 p-0"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle mobile menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {open ? (
        <div className="absolute inset-x-4 top-[84px] z-30 rounded-3xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl">
          <nav className="space-y-3">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-accent/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}

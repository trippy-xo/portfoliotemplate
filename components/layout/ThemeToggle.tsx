"use client";

import { useEffect, useReducer } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

type ThemeAction = { type: "init"; theme: Theme } | { type: "toggle" };

function themeReducer(state: Theme, action: ThemeAction) {
  if (action.type === "init") {
    return action.theme;
  }

  return state === "light" ? "dark" : "light";
}

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme") as Theme | null;
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    const defaultTheme = getPreferredTheme();
    dispatch({ type: "init", theme: defaultTheme });
    document.documentElement.dataset.theme = defaultTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    dispatch({ type: "toggle" });
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

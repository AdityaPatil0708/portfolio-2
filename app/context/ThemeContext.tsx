"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return (localStorage.getItem("theme") as Theme | null) ?? "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`relative min-h-screen overflow-x-hidden transition-colors ${
          theme === "dark"
            ? "dark bg-gray-950 text-zinc-100"
            : "bg-white text-[#4a4a4a]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-20 h-60 w-50 rounded-full bg-[#443da3]/18 blur-3xl dark:bg-[#443da3]/18" />
          <div className="absolute -bottom-24 -right-20 h-60 w-50 rounded-full bg-[#443da3]/12 blur-3xl dark:bg-[#443da3]/12" />
          <div className="absolute bottom-0 left-1/5 h-10 w-100 rounded-full bg-[#443da3]/10 blur-3xl dark:bg-[#443da3]/18" />
          <div className="absolute top-0 right-1/5 h-10 w-100 rounded-full bg-[#443da3]/10 blur-3xl dark:bg-[#443da3]/18" />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

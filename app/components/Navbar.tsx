"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav className="w-full flex items-center justify-between px-10 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 md:gap-6 text-[14px] md:text-[15px] font-medium text-[#4a4a4a] dark:text-zinc-300">
        <Link href="/" className="hover:text-[#443da3] dark:hover:text-indigo-400 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-[#443da3] dark:hover:text-indigo-400 transition-colors">
          About
        </Link>
        <Link href="/projects" className="hover:text-[#443da3] dark:hover:text-indigo-400 transition-colors">
          Projects
        </Link>
        <a
          href="https://drive.google.com/file/d/1ZYkzEb4e88bUgi5FrxMlS8fK8yvas0QE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#443da3] dark:hover:text-indigo-400 transition-colors"
        >
          Resume
        </a>
      </div>

      <div className="flex items-center gap-1">
        <Sun className={`transition-opacity ${!isDark ? "text-[#ffa500] opacity-100" : "text-zinc-400 opacity-40"}`} size={20} />
        <button
          onClick={toggleTheme}
          className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
            isDark ? "bg-indigo-500" : "bg-gray-300"
          }`}
          aria-label="Toggle dark mode"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
              isDark ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
        <Moon className={`transition-opacity ${isDark ? "text-[#443da3] opacity-100" : "text-zinc-400 opacity-40"}`} size={20} />
      </div>
    </nav>
  );
}
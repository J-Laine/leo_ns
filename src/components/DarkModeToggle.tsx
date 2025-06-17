// components/DarkModeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme") || (systemPref ? "dark" : "light");
    document.documentElement.classList.toggle("dark", stored === "dark");
    setDark(stored === "dark");
  }, []);

  const toggle = () => {
    const newTheme = dark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  return (
    <button onClick={toggle} className="ml-2 text-sm text-zinc-600 dark:text-zinc-300">
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
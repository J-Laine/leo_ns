// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./DarkModeToggle";

const navItems = [
  { href: "/", label: "Etusivu" },
  { href: "/services", label: "Palvelut" },
  { href: "/about", label: "Tietoa minusta" },
  { href: "/testimonials", label: "Kokemuksia" },
  { href: "/giftcard", label: "Lahjakortti" },
  { href: "/business", label: "Yrityksille" },
  { href: "/contact", label: "Yhteystiedot" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 h-16">
        <Link href="/" className="font-bold text-xl tracking-tight">Leo Pessi</Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 transition ${path === href ? "font-semibold underline" : ""}`}
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 border-b border-zinc-200 dark:border-zinc-700"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}
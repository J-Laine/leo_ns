// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "./DarkModeToggle";

const navItems = [
  { href: "/#about", label: "Tietoa minusta" }, 
  { href: "/#services-pricing", label: "Palvelut ja hinnasto" },
  { href: "/#testimonials", label: "Kokemuksia" },
  { href: "/#giftcard", label: "Lahjakortti" }, 
  { href: "/#business", label: "Yrityksille" },
  { href: "/#contact", label: "Ota yhteyttä" }, 
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const handleNavClick = (href: string) => {
    setOpen(false);

    // If it's a hash link and we're on the home page, scroll to element
    if (href.startsWith("/#") && path === "/") {
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 h-16">
        <Link href="/" className="font-bold text-xl tracking-tight">Koulutettu Hieroja Leo Pessi</Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-blue-600 transition ${path === href ? "font-semibold underline" : ""}`}
              onClick={() => handleNavClick(href)}
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
              onClick={() => handleNavClick(href)}
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
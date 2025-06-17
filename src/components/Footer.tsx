// components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 text-sm text-center py-6 mt-16">
      <p className="opacity-70">&copy; {new Date().getFullYear()} Hieronta Leo Pessi. Kaikki oikeudet pidätetään.</p>
    </footer>
  );
}

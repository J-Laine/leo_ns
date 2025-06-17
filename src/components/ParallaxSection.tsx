// components/ParallaxSection.tsx
"use client";
import { useEffect, useRef } from "react";

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const handleScroll = () => {
      if (!el) return;
      const offset = window.scrollY * 0.3;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="transition-transform duration-300 will-change-transform">
      {children}
    </div>
  );
}
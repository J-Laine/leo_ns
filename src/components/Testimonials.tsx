"use client";

import { useEffect } from 'react';
import '../css/Testimonials.css';

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className = "" }: TestimonialsProps) {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="testimonials" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Google Arvostelut
        </h2>
      </div>

      {/* Elfsight Google Reviews Widget */}
      <div className="elfsight-app-6c91a302-55ad-42eb-9e0b-c24320d9e846" data-elfsight-app-lazy></div>
    </div>
  );
}
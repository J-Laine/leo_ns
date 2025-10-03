"use client";

import { useEffect } from 'react';

interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className = "" }: TestimonialCarouselProps) {
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
    <div className={`w-full max-w-8x2 mx-auto ${className}`}>
      {/* Elfsight Google Reviews Widget */}
      <div className="elfsight-app-9b728c26-d57b-488b-8d8c-42734ea61fe9" data-elfsight-app-lazy></div>
    </div>
  );
}
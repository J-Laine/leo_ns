"use client";

import { useEffect, useState } from 'react';

interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className = "" }: TestimonialCarouselProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.head.appendChild(script);

    // Simple timeout to hide placeholder after reasonable time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3 seconds should be enough for most cases

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Review card component to avoid repetition
  const ReviewCard = ({ className: cardClassName = "" }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 animate-pulse ${cardClassName}`}>
      {/* Stars */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, star) => (
          <div key={star} className="w-4 h-4 bg-yellow-300 rounded-sm mr-1"></div>
        ))}
      </div>
      
      {/* Review text */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/5"></div>
      </div>
      
      {/* User info */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full mr-3"></div>
        <div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20 mb-1"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );

  // Simple placeholder component (without header)
  const ReviewPlaceholder = () => (
    <div className="w-full space-y-4">
      {/* Single row of review cards - responsive */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/* Always show at least 1 card */}
        <ReviewCard />
        
        {/* Show 2nd card on sm and up */}
        <ReviewCard className="hidden sm:block" />
        
        {/* Show 3rd card on md and up */}
        <ReviewCard className="hidden md:block" />
        
        {/* Show 4th card on lg and up */}
        <ReviewCard className="hidden lg:block" />
        
        {/* Show 5th card on xl and up */}
        <ReviewCard className="hidden xl:block" />
      </div>
    </div>
  );

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>

      {/* Always render the widget, but show placeholder overlay if not loaded */}
      <div className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
        {/* Elfsight Google Reviews Widget */}
        <div 
          className="elfsight-app-9b728c26-d57b-488b-8d8c-42734ea61fe9" 
          data-elfsight-app-lazy
        ></div>
        
        {/* Placeholder overlay that fades out - centered */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-white dark:bg-zinc-900 z-10 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-full px-4 sm:px-6 md:px-8">
              <ReviewPlaceholder />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// components/BookingButton.tsx
import Link from 'next/link';

interface BookingButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export function BookingButton({ 
  href = "/varaa-aika", 
  className = "",
  children = "Varaa aika"
}: BookingButtonProps) {
  return (
    <div className={`flex justify-center mt-6 sm:mt-8 w-full ${className}`}>
      <Link 
        href={href}
        className="inline-flex items-center justify-center min-w-40 sm:min-w-48 md:min-w-52 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black/10 dark:border-white/20 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/60 hover:text-white dark:hover:bg-white/60 dark:hover:text-black hover:border-black/20 dark:hover:border-white/30 hover:shadow-xl"
      >
        {children}
      </Link>
    </div>
  );
}
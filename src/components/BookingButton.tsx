// components/BookingButton.tsx
import Link from 'next/link';
import styles from '../css/BookingButton.module.css';

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
    <div className={`${styles.buttonContainer} ${className}`}>
      <Link 
        href={href}
        className={styles.bookingButton}
      >
        {children}
      </Link>
    </div>
  );
}
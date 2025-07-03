"use client";


import { useEffect, useState } from "react";
import styles from '../css/ClockWordAnimation.module.css'

const sentences = ["Kärsitkö niska-hartijakivuista näyttöpäätetyön takia?", "Oletko urheilija ja haluat optimoida suorituskykyäsi?", "Oli vaivasi mikä tahansa, teen parhaani sen ratkaisemiseksi!"];

export default function ClockWordAnimation() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % sentences.length);
        setIsAnimating(false);
      }, 300); // Matches the animation duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-semibold text-2xl md:text-3xl">
      <span className={styles.wordWrapper}>
        <span 
          className={`${styles.rotatingWord} ${isAnimating ? styles.animateOut : styles.animateIn}`}
        >
          {sentences[index]}
        </span>
      </span>
    </h1>
  );
}

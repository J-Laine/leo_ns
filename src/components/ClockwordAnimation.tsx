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
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[95vw] px-4 sm:px-6 md:px-8">
      <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
        <span className={`${styles.wordWrapper} relative inline-block overflow-hidden w-full`}>
          <span 
            className={`${styles.rotatingWord} ${isAnimating ? styles.animateOut : styles.animateIn} block text-center leading-relaxed sm:leading-normal`}
          >
            {sentences[index]}
          </span>
        </span>
      </h1>
    </div>
  );
}

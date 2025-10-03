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
    <div 
      className="w-screen -mx-4 sm:-mx-6 md:-mx-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ 
        backgroundImage: "url('/Banneri.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="px-4 sm:px-6 md:px-8">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center text-white relative z-10">
          <span className={`${styles.wordWrapper} relative inline-block overflow-hidden w-full drop-shadow-lg`}>
            <span 
              className={`${styles.rotatingWord} ${isAnimating ? styles.animateOut : styles.animateIn} block text-center leading-relaxed sm:leading-normal`}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              {sentences[index]}
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import styles from "../../css/ServiceCarousel.module.css";
import { usePrevNextButtons, useDotButtons } from "../../hooks/useCarouselControls";

const slides = [
  {
    title: "Klassinen ja urheiluhieronta",
    description:
      "Hieronta vähentää tai jopa poistaa erilaisia kipu- ja jumitiloja, lisää lihasten ja nivelten liikkuvuutta ja joustavuuta sekä rauhoittaa ja rentouttaa kehoa.",
    background: "/kahvi.jpg",
  },
  {
    title: "IASTM-käsittely",
    description:
      "IASTM on hoitomenetelmä, joka hyödyntää instrumentteja pehmytkudosten käsittelyssä. Se parantaa liikkuvuutta, vähentää kipua ja edistää paranemista.",
    background: "/mansikka.jpg",
  },
  {
    title: "Purentalihashieronta",
    description:
      "Käytetään mm. narskuttelun, huimauksen, tinnituksen ja päänsäryn hoitoon. Hieronta tehdään sekä suun ulko- että sisäpuolelta, ja käsitellään myös niska-kaula-alue.",
    background: "/kokis.jpg",
  },
  {
    title: "Myofaskiaalinen kuppaus / kuivakuppaus",
    description:
      "Kuppaus lieventää kipua, parantaa liikkuvuutta, vapauttaa triggerpisteitä ja edistää lymfanestekiertoa sekä verenkiertoa.",
    background: "/lasi.jpg",
  },
  {
    title: "Kinesioteippaus",
    description:
      "Käytetään tuki- ja liikuntaelinvaivoissa. Teippaus lievittää kipua, ohjaa liikettä ja korjaa asentoa.",
    background: "/lasiV2.jpg",
  },
];

export default function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
  loop: true,
  align: 'center', // Center the active slide
  dragFree: false, // More controlled sliding behavior
  containScroll: 'trimSnaps', // Prevents awkward whitespace during transitions
  skipSnaps: false, // Makes transitions more predictable
  });
  const [scrollProgress, setScrollProgress] = useState<number[]>(
    Array(slides.length).fill(0)
  );

  const { prevDisabled, nextDisabled, scrollPrev, scrollNext } = usePrevNextButtons(emblaApi);
  const { scrollSnaps, selectedIndex, scrollTo } = useDotButtons(emblaApi);

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;
    
    const scrollProgress = emblaApi.scrollProgress();
    const slideCount = emblaApi.slideNodes().length;
    
    const newProgress = Array.from({ length: slideCount }, (_, index) => {
      const scrollSnap = emblaApi.scrollSnapList()[index];
      const diffToTarget = scrollSnap - scrollProgress;
      
      // More extreme parallax effect
      return diffToTarget * -1.4; // Changed from -1.5 to -2 for stronger effect
    });
    
    setScrollProgress(newProgress);
  }, [emblaApi]);

  // Update the useEffect for smooth initialization
  useEffect(() => {
    if (!emblaApi) return;
    
    // Reset to the first non-duplicate slide after initialization
    emblaApi.reInit();
    
    emblaApi.on("scroll", updateParallax);
    emblaApi.on("reInit", updateParallax);
    updateParallax();
    
    return () => {
      emblaApi.off("scroll", updateParallax);
      emblaApi.off("reInit", updateParallax);
    };
  }, [emblaApi, updateParallax]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport_container}>
        <button 
          className={`${styles.embla__button} ${styles.embla__button_prev}`} 
          onClick={scrollPrev}
          disabled={prevDisabled}
          aria-label="Previous slide"
        >
          ←
        </button>
        
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide, index) => (
              <div className={styles.embla__slide} key={index}>
                <div
                  className={styles["embla__parallax-img"]}
                  style={{
                    backgroundImage: `url(${slide.background})`,
                    transform: `translate(-50%, -50%) translateX(${scrollProgress[index] * 100}px)`,
                  }}
                />
                <div className={styles["embla__text-overlay"]}>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className={`${styles.embla__button} ${styles.embla__button_next}`} 
          onClick={scrollNext}
          disabled={nextDisabled}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${index === selectedIndex ? styles["embla__dot--selected"] : ""}`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import styles from "../../css/ServiceCarousel.module.css";
import { usePrevNextButtons, useDotButtons } from "../../hooks/useCarouselControls";

const TWEEN_FACTOR_BASE = 0.1;

const slides = [
  {
    title: "Klassinen ja urheiluhieronta",
    description:
      "Hieronta vähentää tai jopa poistaa erilaisia kipu- ja jumitiloja, lisää lihasten ja nivelten liikkuvuutta ja joustavuutta sekä rauhoittaa ja rentouttaa kehoa.",
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
    duration: 40, 
});
  
  // Existing hooks
  const { prevDisabled, nextDisabled, scrollPrev, scrollNext } = usePrevNextButtons(emblaApi);
  const { scrollSnaps, selectedIndex, scrollTo } = useDotButtons(emblaApi);

  // Parallax-specific refs and state
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(`.${styles.embla__parallax__layer}`) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);
  
  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          if (tweenNode) {
            tweenNode.style.transform = `translateX(${translate}%)`;
          }
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport_container}>
        {/* Previous button */}
        <button 
          className={`${styles.embla__button} ${styles.embla__button_prev}`} 
          onClick={scrollPrev}
          disabled={prevDisabled}
          aria-label="Previous slide"
        >
          ←
        </button>
        
        {/* Main carousel */}
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__parallax}>
                  <div className={styles.embla__parallax__layer}>
                    <Image
                      src={slide.background}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 40vw"
                      style={{ objectFit: 'cover' }}
                      className={styles.embla__parallax__img}
                    />
                  </div>
                </div>
                
                <div className={styles["embla__text-overlay"]}>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Next button */}
        <button 
          className={`${styles.embla__button} ${styles.embla__button_next}`} 
          onClick={scrollNext}
          disabled={nextDisabled}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      
      {/* Dot indicators */}
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
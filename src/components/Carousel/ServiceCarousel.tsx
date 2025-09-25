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
      "Hieronta vähentää tai jopa poistaa erilaisia kipu- ja jumitiloja, lisää lihasten ja nivelten liikkuvuutta ja joustavuuta sekä rauhoittaa ja rentouttaa kehoa.",
    background: "/urheiluhieronta.JPG",
  },
  {
    title: "IASTM-käsittely",
    description:
      "IASTM (Instrument Assisted Soft Tissue Mobilization) on hoitomenetelmä, joka hyödyntää tietynlaisesti muotoiltuja instrumentteja pehmytkudosten, kuten lihasten, jänteiden ja fasciarakenteiden käsittelyssä. Tämä lähestymistapa on suunniteltu parantamaan kudosten liikkuvuutta, vähentämään kipua ja edistämään paranemista erilaisissa tuki- ja liikuntaelinten vaivoissa.",
    background: "/kalvorauta.JPG",
  },
  {
    title: "Purentalihashieronta",
    description:
      "Purentalihashieronta sopii esimerkiksi hampaiden narskuttelusta, huimauksesta, tinnituksesta tai päänsärystä kärsiville. Purentalihashieronnassa käsitellään purentalihaksia sekä suun ulko- että sisäpuolelta. Myös kaulan, niskan ja kallonpohjan lihakset käydään tarkasti läpi.",
    background: "/purentalihashieronta.JPG",
  },
  {
    title: "Myofaskiaalinen kuppaus / kuivakuppaus",
    description:
      "Kuppaus lieventää kipua, parantaa liikkuvuutta, vapauttaa triggerpisteitä ja edistää lymfanestekiertoa sekä verenkiertoa.",
    background: "/kuivakuppaus.JPG",
  },
  {
    title: "Kinesioteippaus",
    description:
      "Kinesioteippaus on erilaisten tuki- ja liikuntaelinvaivojen hoitomenetelmä, jossa käytetään joustavaa ja hengittävää teippiä. Käytetään kiputilojen lievitykseen, asennon korjaamiseen sekä liikkeen ohjaamiseen.",
    background: "/urheiluteippaus.JPG",
  },
];

export default function ServiceCarousel() {
  const [isLargeScreen, setIsLargeScreen] = React.useState(true);
  
  // Check screen size
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1573);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    isLargeScreen ? { 
      loop: true,
      duration: 40, 
    } : { 
      watchDrag: false 
    }
  );
  
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
    if (!emblaApi || !isLargeScreen) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax, setTweenNodes, setTweenFactor, isLargeScreen]);

  return (
    <div className={styles.embla}>
      {isLargeScreen ? (
        // Large screen: Use Embla carousel
        <div className={styles.embla__viewport_container}>
          {/* Previous button */}
          <button 
            className={`${styles.embla__button} ${styles.embla__button_prev}`} 
            onClick={scrollPrev}
            disabled={prevDisabled}
            aria-label="Previous slide"
          >
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
                      alt={`${slide.title} - Leo Pessi hierontapalvelut`}
                      fill
                      quality={95}  // High quality (1-100, default is 75)
                      priority={index === 0 || index === 1 || index === slides.length - 1}  // Preload first, second, and last images
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center center'
                      }}
                      className={styles.embla__parallax__img}
                      placeholder="blur"  // Optional: smooth loading
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyjtlQznqfvv8CRmk=" // Optional: blur placeholder
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
        </button>
      </div>
      ) : null}

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
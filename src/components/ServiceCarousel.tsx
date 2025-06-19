"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import styles from "../css/ServiceCarousel.module.css";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollProgress, setScrollProgress] = useState<number[]>(
    Array(slides.length).fill(0)
  );

  const updateParallax = useCallback(() => {
    if (!emblaApi) return;

    const scrollProgress = emblaApi.scrollProgress();
    const slideCount = emblaApi.slideNodes().length;

    // Calculate parallax effect for each slide
    const newProgress = Array.from({ length: slideCount }, (_, index) => {
      // Get the scroll snap position for this slide
      const scrollSnap = emblaApi.scrollSnapList()[index];
      // Calculate how far we are from this position (normalized)
      const diffToTarget = scrollSnap - scrollProgress;
      // Return the inverted difference as our parallax value
      return diffToTarget * -1;
    });

    setScrollProgress(newProgress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", updateParallax);
    updateParallax();

    return () => {
      emblaApi.off("scroll", updateParallax);
    };
  }, [emblaApi, updateParallax]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div
                className={styles["embla__parallax-img"]}
                style={{
                  backgroundImage: `url(${slide.background})`,
                  transform: `translateX(${scrollProgress[index] * 30}px)`,
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
    </div>
  );
}

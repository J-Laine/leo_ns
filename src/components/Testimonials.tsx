// src/components/Testimonials.tsx
"use client";

import { useState } from 'react';

interface KokemuksiaProps {
  className?: string;
}

export function Testimonials({ className = "" }: KokemuksiaProps) {
  const [visibleCount, setVisibleCount] = useState(1);

  const testimonials = [
    {
      text: "Olen käynyt Leon hieronnassa jo jonkin aikaa ja täytyy sanoa, että hänen palvelunsa täyttävät kovatkin odotukset. Leo tarjoaa rauhallisen ja seesteisen hetken kiireisen arjen keskellä. Näin näyttöpäätteellä työskennellessä niska-hartiaseudun kireydet ja kipu ovat todellisia ongelmia, jotka Leo korjasi ensin lyhyellä intensiivihoidolla ja nyt ylläpidetään optimaalista tilaa säännöllisen hieronnan avulla.\n\nLeon kyky paikantaa kehon jännitykset on vaikuttava, ja hänen otteensa ovat varmat ja tarkoituksenmukaiset. Oli kyse sitten tietokoneen äärellä jumiutuneesta selästä tai intensiivisemmän harjoittelun jälkeisestä lihashuollosta, Leon käsittelyssä on aina tiettyä tarkkuutta ja ymmärrystä ihmisen anatomiasta. Leo osaa yhdistää erilaisia tekniikoita ja hän kuuntelee herkästi asiakkaan toiveita. Tämä kokonaisuus vaatii osaamista, jota ei voi kuin arvostaa.\n\nVoin suositella Leoa lämpimästi niille, jotka arvostavat ammattitaitoista, joustavaa ja henkilökohtaista palvelua ilman ylimääräistä hälinää. Hänellä on taito yhdistää kehonhuollon asiantuntemus ja rauhallinen ilmapiiri tavalla, joka tekee kokemuksesta erityisen.",
      author: "Wilma"
    },
    {
      text: "Sopivalla volumella hoidettu. Tämä on oikeaa palvelua ei ylimääräistä shaipaa",
      author: "Toni"
    },
    {
      text: "Hyvin asiantuntevaa ja ammattitaitoista palvelua! Kävin avaamassa hartia/niska jumeja ja samalla hierottiin selkää. Pääsi myös kokeilemaan kuppausta hartioiden alueella. Kiitos erinomaisesta palvelusta Leo Pessi!",
      author: "Silvia"
    },
    {
      text: "Hyvää palvelua ammattitaidolla. Kivut ja jumit jäi hoitopöydälle 🙌",
      author: "Nuutti"
    },
    {
      text: "Asiansa osaava nuori yrittäjänalku. Ottaa asiakkaan toiveet huomioon ja perustelee toimintaansa osaavasti.",
      author: "Elias"
    },
    {
      text: "Erinomainen hieronta ja asiakaspalvelukokemus. Suosittelen lämpimästi kaikille.",
      author: "Väinö"
    },
    {
      text: "Leo korjasi selkä ongelmani nopean konsultaation jälkeen ja keskittyi hienosti juuri ongelma alueisiin.\n\nPalvelu oli varsin ammattitaitoista ja osaavaa.",
      author: "Joonas"
    },
    {
      text: "Olen käynyt jo 3 kertaa ja joka ikinen käynti auttaa mua tosi paljon! Vahvat kädet ja Leo tietää mitä tekee 🙏🏼❤️",
      author: "Roman"
    },
    {
      text: "Todella hyvä kokemus 75 min purentalihashieronnasta! Akuutti kipu poissa heti käynnin päätteeksi, ja liikkuvuus kunnossa. Kokemus rentouttava, tunnelma oli rauhallinen ja hieroja hienotunteisimpia joita olen tavannut. Palaan Leolle uudelleenkin!",
      author: "Jenna"
    },
    {
      text: "Osaava hieroja, joka selvästi haluaa löytää ongelmakohdat ja auttaa ratkaisemaan ne. Sopivan jämäkkää hierontaa. Suosittelen.",
      author: "Teija"
    }
  ];

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, testimonials.length));
  };

  const handleShowLess = () => {
    setVisibleCount(1);
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;
  const canShowLess = visibleCount > 1;

  return (
    <div id="testimonials" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Asiakkaiden kokemuksia
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-6 sm:gap-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-start">
              {/* Quote Icon */}
              <div className="flex-shrink-0 mr-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-400 dark:text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Testimonial Text */}
                <div className="mb-4">
                  {testimonial.text.split('\n\n').map((paragraph, pIndex) => (
                    <p 
                      key={pIndex}
                      className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-3 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-700 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Buttons */}
      {(hasMore || canShowLess) && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
          {hasMore && (
            <button
              onClick={handleShowMore}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              Näytä lisää arvosteluja ({Math.min(3, testimonials.length - visibleCount)} lisää)
            </button>
          )}

          {canShowLess && (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
              Näytä vähemmän
            </button>
          )}
        </div>
      )}

      {/* Reviews counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Näytetään {visibleCount} / {testimonials.length} arvostelua
        </p>
      </div>
    </div>
  );
}
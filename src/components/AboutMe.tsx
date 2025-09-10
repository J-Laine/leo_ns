// src/components/AboutMe.tsx
import Image from 'next/image';

interface AboutMeProps {
  className?: string;
}

export function AboutMe({ className = "" }: AboutMeProps) {
  const education = [
    { course: "Hierojan ammattitutkinto", year: "2023-2024", institution: "ISLO" },
    { course: "Triggerpisteterapia - kurssi", year: "2024", institution: "OMT training" },
    { course: "Myofaskiaalinen kuppaus - kurssi", year: "2024", institution: "OMT training" },
    { course: "Purentalihashieronnan koulutus", year: "2024", institution: "OsteoHuvi" },
    { course: "Kinesioteippaus - kurssi", year: "2024", institution: "OMT training" },
    { course: "IASTM deep tissue massage course", year: "2025", institution: "Michael Everson" },
    { course: "Opi tutkimaan ja hoitamaan plantaarifaskiittia - kurssi", year: "2025", institution: "Digifysio" },
    { course: "Opi tutkimaan ja hoitamaan tenniskyynärpäätä - kurssi", year: "2025", institution: "Digifysio" },
    { course: "Selkärangan ja SI-nivelen tutkiminen, yleisimmät toimintahäiriöt ja mobilisoiva käsittely - kurssi", year: "2025", institution: "OsteoHuvi" },
  ];

  return (
    <div id="about" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Leo Pessi
        </h2>
        {/* Responsive container that matches sizes attribute */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-4">
          <Image
            src="/profiilikuva.JPG"
            alt="Leo Pessi - Koulutettu hieroja"
            fill
            quality={95}
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            style={{
              objectFit: 'cover',
              objectPosition: '50% 55%'
            }}
            className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 shadow-lg"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyjtlQznqfvv8CRmk="
          />
        </div>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-4">
          Koulutettu Hieroja & urheiluhieroja Tampereella
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 mb-8">
        <div className="space-y-6">
          {/* Greeting */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              Moi!
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Olen Koulutettu hieroja Leo Pessi. Valmistuin koulutetuksi hierojaksi Itä-Suomen liikuntaopistosta 
              Joensuussa keväällä 2024. Kesällä -24 muutin Tampereelle ja nykyään toimin sopimusyrittäjänä 
              ProHierojien tiloissa.
            </p>
          </div>

          {/* Services Description */}
          <div>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Tarjoan monipuolista ja kokonaisvaltaista kehonkäsittelyä niin erilaisten tuki- ja liikuntaelinvaivojen 
              hoitoon kuin myös rentoutumiseen ja palautumiseen. Jokainen hoitokerta räätälöidään asiakkaan yksilöllisten 
              tarpeiden ja toiveiden mukaan. Osaan myös auttaa vastusharjoitteluun ja kehonhuoltoon liittyvissä asioissa. 
              Arvoihini kuuluvat asiakaslähtöisyys, asiantunteva palvelu ja jatkuva kouluttautuminen alalla. Teen kaikkeni 
              varmistaakseni, että jokainen asiakas kokee ainutlaatuisen ja rentouttavan hierontahetken, joka tukee heidän 
              hyvinvointiaan ja terveyttään.
            </p>
          </div>

          {/* Hobbies and Background */}
          <div>
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Harrastuksiini kuuluu kuntosalitreeni, moottoripyöräily ja muu monipuolinen liikunta. Omaan pitkän 
              (n.15 v.) kilpauintitaustan sekä urheilijana, että valmentajana, mikä antaa loistavat lähtökohdat myös 
              ammattiurheilijoiden kanssa työskentelyyn!
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center">
          Koulutukseni
        </h3>

        {/* Grid for Education Items */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-3 sm:p-4 border border-zinc-200 dark:border-zinc-600"
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 leading-tight">
                  {item.course}
                </h4>
                <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-2">
                  <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                    {item.year}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500">
                    {item.institution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Tervetuloa käsittelyyn!
        </h3>
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
          Ota yhteyttä ja sovitaan aika hierontaan - räätälöin hoidon juuri sinun tarpeisiisi.
        </p>
      </div>
    </div>
  );
}
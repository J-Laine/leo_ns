"use client";

import Image from 'next/image';

const services = [
  {
    title: "Klassinen ja urheiluhieronta",
    description:
      "Hieronta vähentää tai jopa poistaa erilaisia kipu- ja jumitiloja, lisää lihasten ja nivelten liikkuvuutta ja joustavuutta sekä rauhoittaa ja rentouttaa kehoa.",
    image: "/urheiluhieronta.JPG",
  },
  {
    title: "IASTM-käsittely",
    description:
      "IASTM (Instrument Assisted Soft Tissue Mobilization) on hoitomenetelmä, joka hyödyntää tietynlaisesti muotoiltuja instrumentteja pehmytkudosten, kuten lihasten, jänteiden ja fasciarakenteiden käsittelyssä.",
    image: "/kalvorauta.JPG",
  },
  {
    title: "Purentalihashieronta",
    description:
      "Purentalihashieronta sopii esimerkiksi hampaiden narskuttelusta, huimauksesta, tinnituksesta tai päänsärystä kärsiville. Purentalihashieronnassa käsitellään purentalihaksia sekä suun ulko- että sisäpuolelta.",
    image: "/purentalihashieronta.JPG",
  },
  {
    title: "Myofaskiaalinen kuppaus / kuivakuppaus",
    description:
      "Kuppaus lieventää kipua, parantaa liikkuvuutta, vapauttaa triggerpisteitä ja edistää lymfanestekiertoa sekä verenkiertoa.",
    image: "/kuivakuppaus.JPG",
  },
  {
    title: "Kinesioteippaus",
    description:
      "Kinesioteippaus on erilaisten tuki- ja liikuntaelinvaivojen hoitomenetelmä, jossa käytetään joustavaa ja hengittävää teippiä. Käytetään kiputilojen lievitykseen, asennon korjaamiseen sekä liikkeen ohjaamiseen.",
    image: "/urheiluteippaus.JPG",
  },
];

export default function MobileServices() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 text-center">
        Palvelut
      </h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-4 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
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
    title: "Dry needling | Akupunktio",
    description:
      "Dry needling on hoitomenetelmä, jossa ohuita neuloja asetetaan suoraan lihaksen triggerpisteisiin eli jännittyneisiin ja kipua aiheuttaviin kohtiin. Tavoitteena on rentouttaa lihasta, vähentää kipua ja parantaa liikehallintaa. Toisin kuin itämaisessa akupunktiossa, dry needling perustuu länsimaiseen lääketieteelliseen ja anatomiseen tietoon. Menetelmä voi auttaa muun muassa lihasjännityksen, päänsäryn, niska- ja selkäkipujen sekä urheiluvammojen hoidossa. Hoidon jälkeen lihas voi tuntua hetkellisesti aralta, mutta useimmat kokevat helpotusta kipu- ja jännitysoireisiin jo ensimmäisen hoitokerran jälkeen. HUOM! Dry needling saatavilla tällä hetkellä vain ylävartalon alueelle. Lisätietoja \"palvelut ja hinnasto\"-kohdasta.",
    image: "/closeupneedle.JPG",
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
      <div className="space-y-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-4 transition-all duration-300"
          >
            {/* Image - almost full width */}
            <div className="w-full mb-4">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 rounded-lg object-cover"
              />
            </div>
            
            {/* Header */}
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
              {service.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
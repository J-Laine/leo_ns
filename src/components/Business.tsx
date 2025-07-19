// src/components/Business.tsx
interface BusinessProps {
  className?: string;
}

export function Business({ className = "" }: BusinessProps) {
  const benefits = [
    "vähennät sairauspoissaoloja",
    "lisäät työtehoa ja keskittymiskykyä", 
    "osoitat arvostusta ja huolenpitoa",
    "luot positiivista työilmapiiriä"
  ];

  return (
    <div id="business" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Yrityksille
        </h2>
        
        {/* Hero Statement */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Hyvinvoiva työntekijä on yrityksen tärkein voimavara!
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Työhyvinvointi näkyy suoraan yrityksen tuloksessa – ja siinä, miten työntekijät jaksavat arjessa. 
            Säännöllinen hieronta on tehokas ja arvostettu tapa edistää työssäjaksamista, ehkäistä tuki- ja 
            liikuntaelinten vaivoja sekä parantaa yleistä työhyvinvointia.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Tarjoamalla työntekijöillesi hierontaa:
        </h3>
        
        <div className="grid gap-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center p-3 bg-zinc-50 dark:bg-zinc-700 rounded-lg border border-zinc-200 dark:border-zinc-600"
            >
              <div className="flex-shrink-0 w-2 h-2 bg-zinc-600 dark:bg-zinc-400 rounded-full mr-4"></div>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tax Information */}
      <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-6 sm:p-8 mb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          Tiesitkö?
        </h3>
        <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Työnantaja voi tarjota hierontaa työntekijöilleen <span className="font-semibold">verovapaana etuna</span>, 
          kun se on osa koko henkilöstölle suunnattua hyvinvointia. Tämä on pieni satsaus, jolla on iso vaikutus!
        </p>
      </div>

      {/* Service Details */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 mb-8">
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Toimin Tampereella ja hieronta voidaan toteuttaa joko <span className="font-medium">työpaikallanne</span> tai 
            <span className="font-medium"> vastaanotollani</span>. Voin laskuttaa suoraan yritystä, mikä tekee 
            järjestelystä helppoa ja vaivatonta.
          </p>
          
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Ota yhteyttä ja autan mielelläni räätälöimään palvelun juuri teidän tarpeisiinne – olipa kyseessä 
            pieni tai suurempi tiimi.
          </p>
        </div>
      </div>
    </div>
  );
}
// src/components/ServicesAndPrices.tsx


import Link from 'next/link';

interface ServicesPricingProps {
  className?: string;
}

export function ServicesAndPrices({ className = "" }: ServicesPricingProps) {
  const mainServices = [
    { service: "Hieronta 30min", price: "40€" },
    { service: "Hieronta 45min", price: "50€" },
    { service: "Hieronta 60min", price: "55€" },
    { service: "Hieronta 75min", price: "65€" },
    { service: "Hieronta 90min", price: "75€" },
    { service: "Hieronta 120min", price: "95€" },
    { service: "Purentalihashieronta 45min", price: "60€" },
    { service: "Purentalihashieronta 60min", price: "65€" },
    { service: "Purentalihashieronta 75min", price: "75€" },
    { service: "Purentalihashieronta 90min", price: "85€" },
  ];

  const additionalServices = [
    { service: "Kuivakuppaus hieronnan yhteydessä", price: "10€" },
    { service: "Päähieronta (+15min)", price: "15€" },
    { service: "Purentalihashieronta (+15min)", price: "15€" },
    { service: "Kineesioteippaus (+15min)", price: "15€" },
    { service: "Hiljainen palvelu", price: "0€" },
  ];

  return (
    <div id="services-pricing" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Palvelut ja hinnasto
        </h2>
        
        {/* Payment methods */}
        <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 sm:p-6 mb-6">
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <span className="font-medium">Maksuvälineinä</span> käyvät käteisen lisäksi yleisimmät pankki- ja luottokortit, 
            <span className="font-medium"> ePassi</span>, <span className="font-medium">Smartum</span> ja <span className="font-medium">Edenred</span>.
          </p>
        </div>
      </div>

      {/* Main Services Table */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg overflow-hidden mb-6">
        <div className="bg-zinc-50 dark:bg-zinc-700 px-4 sm:px-6 py-3 border-b border-zinc-200 dark:border-zinc-600">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Hierontapalvelut</h3>
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Hinta</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {mainServices.map((item, index) => (
                <tr 
                  key={index}
                  className="border-t border-zinc-200 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors duration-200"
                >
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                    {item.service}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 text-right">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Services Table */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg overflow-hidden mb-8">
        <div className="bg-zinc-50 dark:bg-zinc-700 px-4 sm:px-6 py-3 border-b border-zinc-200 dark:border-zinc-600">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Lisäpalvelut</h3>
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Hinta</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {additionalServices.map((item, index) => (
                <tr 
                  key={index}
                  className="border-t border-zinc-200 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors duration-200"
                >
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                    {item.service}
                  </td>
                  <td className="py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 text-right">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Button */}
      <div className="flex justify-center mb-8">
        <Link 
          href="/varaa-aika"
          className="inline-flex items-center justify-center min-w-40 sm:min-w-48 md:min-w-52 px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black/10 dark:border-white/20 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/60 hover:text-white dark:hover:bg-white/60 dark:hover:text-black hover:border-black/20 dark:hover:border-white/30 hover:shadow-xl"
        >
          Varaa aika
        </Link>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-3">
          Ajanvarauksen ehdot ja peruutukset
        </h3>
        <p className="text-sm sm:text-base text-amber-800 dark:text-amber-200 leading-relaxed">
          Peruutukset on tehtävä vähintään <span className="font-semibold">24h ennen</span> varatun ajan alkua. 
          Alle 24h tehdyistä peruutuksista veloitan <span className="font-semibold">50%</span> varatun hoidon hinnasta. 
          Peruuttamattomista ajanvarauksista veloitan <span className="font-semibold">100%</span> varatun hoidon hinnasta.
        </p>
      </div>
    </div>
  );
}
// components/Footer.tsx
import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 mt-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Google Maps - takes up 2 columns on large screens */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Löydä minut
            </h3>
            <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1905.2834567890123!2d23.7610648!3d61.4980128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf1b4b0c8b7d%3A0x1234567890abcdef!2sAleksanterinkatu%2029%2C%2033100%20Tampere!5e0!3m2!1sfi!2sfi!4v1234567890123!5m2!1sfi!2sfi"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="ProHierojat sijainti kartalla"
              />
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-35 lg:col-span-1 order-1 lg:order-5">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Sijainti
            </h3>
            <div className="space-y-7 text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-zinc-500 dark:text-zinc-400 flex-shrink-0" />
                <div>
                  <p className="text-sm sm:text-base">Aleksanterinkatu 29 B18</p>
                  <p className="text-sm sm:text-base">33100, Tampere</p>
                  <p className="font-medium text-sm sm:text-base">ProHierojat</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Koulutettu hieroja & urheiluhieroja Leo Pessi
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Y-tunnus: 3456811-2
                </p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Seuraa minua
              </h4>
              <div className="flex space-x-3 sm:space-x-4"> 
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/p/Koulutettu-hieroja-Leo-Pessi-61562477873997/"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* instagram */}
                <a 
                  href="https://www.instagram.com/koulutettuhieroja_leopessi/"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/discover/koulutettuhieroja-leo"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Empty space - takes up 1 column on large screens */}
          <div className="lg:col-span-1 order-3 lg:order-3 hidden lg:block">
            {/* This div creates the empty space on the right */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Hieronta Leo Pessi. Kaikki oikeudet pidätetään.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a 
                href="/tietosuoja" 
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
              >
                Tietosuoja
              </a>
              <a 
                href="/kayttoehdot" 
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
              >
                Käyttöehdot
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
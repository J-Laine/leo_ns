// components/Footer.tsx
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Location Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Sijainti
            </h3>
            <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-zinc-500 dark:text-zinc-400" />
                <div>
                  <p>Aleksanterinkatu 29 B18</p>
                  <p>33100, Tampere</p>
                  <p className="font-medium">ProHierojat</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Koulutettu hieroja & urheiluhieroja Leo Pessi
                </p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Seuraa meitä
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" // Replace with Facebook URL later
                  className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" // Replace with Instagram URL later
                  className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986c6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8-.568-1.07-.568-2.394 0-3.464.568-1.07 1.719-1.8 3.016-1.8 1.297 0 2.448.73 3.016 1.8.568 1.07.568 2.394 0 3.464-.568 1.07-1.719 1.8-3.016 1.8zm7.119 0c-1.297 0-2.448-.73-3.016-1.8-.568-1.07-.568-2.394 0-3.464.568-1.07 1.719-1.8 3.016-1.8 1.297 0 2.448.73 3.016 1.8.568 1.07.568 2.394 0 3.464-.568 1.07-1.719 1.8-3.016 1.8z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" // Replace with TikTok URL later
                  className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Löydä meidät
            </h3>
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
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
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              &copy; {new Date().getFullYear()} Hieronta Leo Pessi. Kaikki oikeudet pidätetään.
            </p>
            <div className="flex space-x-6 text-sm">
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
// src/components/Giftcard.tsx
"use client";

import { useState } from 'react';

interface LahjakorttiProps {
  className?: string;
}

export function Lahjakortti({ className = "" }: LahjakorttiProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(event.target as HTMLFormElement);
    
     //leon access key
    formData.append("access_key", "c7fda337-67bc-4eaa-9fc4-2493b1b635da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        setError('Viestin lähetys epäonnistui. Yritä uudelleen.');
      }
    } catch (err) {
      setError('Viestin lähetys epäonnistui. Tarkista internetyhteys ja yritä uudelleen.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div id="giftcard" className={`w-full max-w-4xl mx-auto text-center scroll-mt-20 ${className}`}>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-800 rounded-full">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Kiitos viestistäsi!
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300 mb-4">
            Otan yhteyttä sinuun mahdollisimman pian lahjakortin tilauksesta.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-medium"
          >
            Lähetä uusi viesti
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="giftcard" className={`w-full max-w-4xl mx-auto scroll-mt-20 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
          Lahjakortti
        </h2>
        
        {/* Description */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8 mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
            Täydellinen lahja joka tilanteeseen:
          </h3>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
            Olipa kyseessä syntymäpäivä, joulu, äitienpäivä, isänpäivä, vuosipäivä, valmistujaiset, 
            kiitoslahja tai vain halu ilahduttaa.
          </p>
          
          {/* Important Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
            <p className="text-sm sm:text-base text-amber-800 dark:text-amber-200 font-medium">
              <span className="font-semibold">Huom!</span> Lahjakorttia ei voi maksaa hyvinvointi- tai hierontaeduilla.
            </p>
          </div>
          
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Lahjakortin ostaminen onnistuu vaivattomasti toimipisteelläni. Ota yhteyttä alla olevalla 
            lomakkeella ja sovitaan aika lahjakortin noudolle!
          </p>
        </div>
      </div>

      {/* Gift Card Order Form */}
      <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
            Tilaa lahjakortti
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Täytä lomake niin sovitaan aika lahjakortin noudolle
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          {/* Name field */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Nimi *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              placeholder="Etunimi Sukunimi"
              disabled={isSubmitting}
            />
          </div>

          {/* Email field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Sähköpostiosoite *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              placeholder="matti.meikalainen@email.com"
              disabled={isSubmitting}
            />
          </div>

          {/* Message field */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Viesti *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical"
              placeholder="Kerro lahjakortin arvosta ja muista toiveistasi..."
              disabled={isSubmitting}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-semibold bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black/10 dark:border-white/20 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/60 hover:text-white dark:hover:bg-white/60 dark:hover:text-black hover:border-black/20 dark:hover:border-white/30 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white dark:disabled:hover:bg-zinc-900 disabled:hover:text-black dark:disabled:hover:text-white disabled:hover:border-black/10 dark:disabled:hover:border-white/20 disabled:hover:shadow-lg flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Lähetetään...
              </>
            ) : (
              'Lähetä lomake'
            )}
          </button>

          {/* Privacy notice */}
          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
            Lähettämällä lomakkeen hyväksyt, että käsittelemme antamiasi tietoja yhteydenoton tarkoituksessa.
          </p>
        </form>
      </div>
    </div>
  );
}
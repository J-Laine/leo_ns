// src/components/ContactForm.tsx
"use client";

import { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Phone number validation function
  const validatePhoneNumber = (phone: string): boolean => {
    if (!phone.trim()) return true; // Optional field, empty is valid
    
    // Remove all non-digit characters except + for international numbers
    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    
    // Check basic patterns for international phone numbers
    const phonePatterns = [
      /^\+[1-9]\d{1,14}$/, // International format with + (E.164 standard)
      /^\d{7,15}$/, // Local format (7-15 digits)
      /^0\d{8,14}$/, // National format starting with 0
    ];
    
    return phonePatterns.some(pattern => pattern.test(cleanedPhone));
  };

  // Format phone number for better UX
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except + and spaces
    let formatted = value.replace(/[^\d+\s()-]/g, '');
    
    // Limit length to reasonable phone number length
    if (formatted.length > 7) {
      formatted = formatted.substring(0, 17);
    }
    
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    e.target.value = formatted;
    
    // Clear phone error when user starts typing
    if (phoneError) {
      setPhoneError('');
    }
    
    // Validate phone number
    if (formatted && !validatePhoneNumber(formatted)) {
      setPhoneError('Syötä kelvollinen puhelinnumero (esim. +358 40 123 4567 tai 040 123 4567)');
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setPhoneError('');

    const formData = new FormData(event.target as HTMLFormElement);
    const phone = formData.get('phone') as string;
    
    // Validate phone number before submission
    if (phone && !validatePhoneNumber(phone)) {
      setPhoneError('Syötä kelvollinen puhelinnumero tai jätä kenttä tyhjäksi');
      setIsSubmitting(false);
      return;
    }
    
    // Replace with your actual Web3Forms access key
    formData.append("access_key", "5db00de7-ac42-4a6d-ae13-91cb6e46f760");

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
      <div id="contact" className={`w-full max-w-md mx-auto text-center scroll-mt-20 ${className}`}>
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
            Otan yhteyttä sinuun mahdollisimman pian.
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
    <div id="contact" className={`w-full max-w-md mx-auto scroll-mt-20 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
          Ota yhteyttä
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Kerro tarpeistasi ja varaathan ajan hierontaan
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
            Sähköposti *
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

        {/* Phone field with validation */}
        <div>
          <label 
            htmlFor="phone" 
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
          >
            Puhelinnumero
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handlePhoneChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:ring-2 focus:border-transparent transition-colors duration-200 ${
              phoneError 
                ? 'border-red-300 dark:border-red-700 focus:ring-red-500' 
                : 'border-zinc-200 dark:border-zinc-700 focus:ring-blue-500'
            }`}
            placeholder="+358 400 123 456 tai 0400 123 456"
            disabled={isSubmitting}
          />
          {phoneError && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {phoneError}
            </p>
          )}
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Valinnainen.
          </p>
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
            placeholder="Kerro tarpeistasi ja toiveistasi hieronnan suhteen..."
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
          disabled={isSubmitting || !!phoneError}
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
            'Lähetä viesti'
          )}
        </button>
      </form>
    </div>
  );
}
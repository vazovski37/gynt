'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Define the shape of the context value
interface LanguageContextType {
  language: string;
  changeLanguage: (lng: string) => void;
  // You might also want to expose the t function if it's commonly used directly from context
  // t: typeof useTranslation['t'];
}

// Create the context with a default undefined value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const { i18n } = useTranslation();
  // State to hold the current language, initialized with i18n's current language
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Effect to load language from localStorage on initial mount
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && storedLang !== i18n.language) {
      // If a language is stored and different from i18n's current, change it
      i18n.changeLanguage(storedLang);
      setCurrentLanguage(storedLang); // Update internal state
    } else if (!storedLang && i18n.language) {
      // If no language is stored, but i18n has a default, save it
      localStorage.setItem('language', i18n.language);
      setCurrentLanguage(i18n.language);
    }
    // Listen for i18n language changes (e.g., if changed by another part of the app)
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
      localStorage.setItem('language', lng); // Persist any external i18n changes
    };
    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]); // Depend on i18n instance

  // Function to change the language and persist it
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // The useEffect listener will handle updating currentLanguage and localStorage
    // This direct call ensures immediate UI update for components consuming this context
    setCurrentLanguage(lng);
    localStorage.setItem('language', lng);
  };

  // The value provided to consumers of this context
  const contextValue: LanguageContextType = {
    language: currentLanguage,
    changeLanguage,
    // t: useTranslation().t, // Uncomment if you want to provide t directly
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to consume the LanguageContext
export function useLanguage() {
  const context = useContext(LanguageContext);
  const { t } = useTranslation(); // Keep t from useTranslation for convenience

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return { ...context, t }; // Return context values and t from useTranslation
}

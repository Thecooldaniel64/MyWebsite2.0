import React, { createContext, useState, useEffect, useContext } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('es');
  const [translations, setTranslations] = useState<any>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setTranslations(data))
      .catch(err => console.error('Error loading translations:', err));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
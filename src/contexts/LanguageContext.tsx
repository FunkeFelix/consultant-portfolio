
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (language: Language): Record<string, string> => {
  const translations = {
    en: {
      // Header
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'nav.resume': 'Resume',
      
      // Hero
      'hero.tagline': 'Business + Tech = Exponential Impact',
      'hero.title.where': 'Where Business Meets',
      'hero.title.innovation': 'Innovation',
      'hero.subtitle': 'BSc Business + Fullstack Development + LLM Workflows',
      'hero.description': 'I bridge the gap between business strategy and technical execution, transforming complex processes into intelligent, automated solutions that drive real results.',
      'hero.business.title': 'Business Foundation',
      'hero.business.desc': 'BSc Business + Process Optimization',
      'hero.technical.title': 'Technical Mastery',
      'hero.technical.desc': 'Fullstack Development Expertise',
      'hero.ai.title': 'AI Integration',
      'hero.ai.desc': 'LLM-Powered Automation',
      'hero.roi': 'ROI-Focused Solutions',
      'hero.stakeholder': 'Stakeholder Communication',
      'hero.process': 'Process Transformation',
      'hero.cta.impact': 'See Business Impact',
      'hero.cta.transform': 'Transform Your Business',
      
      // Footer
      'footer.tagline': 'Building the future with intelligent code and innovative solutions.',
      'footer.made': 'Made with',
      'footer.and': 'and lots of',
      'footer.rights': 'All rights reserved.',
      'footer.impressum': 'Impressum',
      'footer.impressum.name': 'Name:',
      'footer.impressum.address': 'Address:',
      'footer.impressum.email': 'Email:',
      'footer.impressum.phone': 'Phone:',
      'footer.impressum.vat': 'VAT ID according to § 27a UStG:',
      'footer.impressum.responsible': 'Responsible for content according to § 55 Abs. 2 RStV:',
    },
    de: {
      // Header
      'nav.projects': 'Projekte',
      'nav.skills': 'Fähigkeiten',
      'nav.contact': 'Kontakt',
      'nav.resume': 'Lebenslauf',
      
      // Hero
      'hero.tagline': 'Business + Tech = Exponentieller Einfluss',
      'hero.title.where': 'Wo Business auf',
      'hero.title.innovation': 'Innovation trifft',
      'hero.subtitle': 'BSc Business + Fullstack Development + LLM Workflows',
      'hero.description': 'Ich schließe die Lücke zwischen Geschäftsstrategie und technischer Umsetzung und verwandle komplexe Prozesse in intelligente, automatisierte Lösungen, die echte Ergebnisse erzielen.',
      'hero.business.title': 'Business-Fundament',
      'hero.business.desc': 'BSc Business + Prozessoptimierung',
      'hero.technical.title': 'Technische Meisterschaft',
      'hero.technical.desc': 'Fullstack-Entwicklungsexpertise',
      'hero.ai.title': 'KI-Integration',
      'hero.ai.desc': 'LLM-gestützte Automatisierung',
      'hero.roi': 'ROI-fokussierte Lösungen',
      'hero.stakeholder': 'Stakeholder-Kommunikation',
      'hero.process': 'Prozess-Transformation',
      'hero.cta.impact': 'Business-Impact sehen',
      'hero.cta.transform': 'Ihr Business transformieren',
      
      // Footer
      'footer.tagline': 'Die Zukunft mit intelligentem Code und innovativen Lösungen gestalten.',
      'footer.made': 'Erstellt mit',
      'footer.and': 'und viel',
      'footer.rights': 'Alle Rechte vorbehalten.',
      'footer.impressum': 'Impressum',
      'footer.impressum.name': 'Name:',
      'footer.impressum.address': 'Adresse:',
      'footer.impressum.email': 'E-Mail:',
      'footer.impressum.phone': 'Telefon:',
      'footer.impressum.vat': 'Umsatzsteuer-ID gemäß § 27a UStG:',
      'footer.impressum.responsible': 'Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:',
    }
  };

  return translations[language] || translations.en;
};

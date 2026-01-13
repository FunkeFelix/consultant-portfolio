import { useState } from "react";
import { Code, Heart, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <footer className="bg-black py-12 border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
            
            <div className="flex items-center gap-2 mb-6">
               <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
               <span className="text-lg font-bold text-white">Felix Funke</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-neutral-500 text-sm mb-8">
              <span>Built with</span>
              <Heart className="w-3 h-3 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-3 h-3 text-blue-500" />
              <span>in React & Tailwind</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 text-neutral-600 text-sm">
              <div>© 2025 Felix Funke. All rights reserved.</div>
              <button
                onClick={() => setIsImpressumOpen(true)}
                className="hover:text-white transition-colors underline decoration-neutral-800 underline-offset-4"
              >
                Legal Notice / Impressum
              </button>
            </div>
          </div>
        </div>
      </footer>

      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <button
              onClick={() => setIsImpressumOpen(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">{t('footer.impressum')}</h2>

            <div className="text-neutral-300 space-y-3 text-sm leading-relaxed">
              <p>
                <strong className="text-white block mb-1">Angaben gemäß § 5 TMG</strong>
                Felix Funke<br />
                Nußdorfer Straße 9<br />
                88662 Überlingen<br />
                Deutschland
              </p>
              
              <div className="h-px bg-neutral-800 my-4" />

              <p>
                <strong className="text-white block mb-1">Kontakt</strong>
                Email: felixfunke456@gmail.com<br />
                Tel: +49 (0) 176 6336 4095
              </p>

              <div className="h-px bg-neutral-800 my-4" />

              <p>
                <strong className="text-white block mb-1">Umsatzsteuer-ID</strong>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 346946939
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
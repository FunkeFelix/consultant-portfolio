import { useState } from "react";
import { Code, Heart, X } from "lucide-react";

const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                src="public/logo.png"
                alt="Logo"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-xl font-bold">Felix Funke</span>
            </div>

            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Building the future with intelligent code and innovative
              solutions.
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of</span>
              <Code className="w-4 h-4 text-blue-400" />
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 text-slate-500 text-sm flex flex-col items-center gap-2">
              <button
                onClick={() => setIsImpressumOpen(true)}
                className="underline hover:text-white"
              >
                Impressum
              </button>

              <div>© 2025 Felix Funke. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg max-w-md w-full mx-4 p-6">
            <button
              onClick={() => setIsImpressumOpen(false)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold mb-4">Impressum</h2>

            <div className="text-slate-700 space-y-2 text-sm leading-relaxed">
              <p>
                <strong>Name:</strong> Felix Funke
              </p>
              <p>
                <strong>Adresse:</strong> Nußdorfer Straße 9, 88662 Überlingen,
                Deutschland
              </p>
              <p>
                <strong>E-Mail:</strong> felixfunke456(at)gmail.com
              </p>
              <p>
                <strong>Telefon:</strong> +49 (0) 176 6336 4095
              </p>
              <p>
                <strong>Umsatzsteuer-ID gemäß § 27a UStG:</strong> DE 346946939
              </p>
              <p>
                <strong>
                  Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
                </strong>
                <br />
                Felix Funke
                <br />
                Nußdorfer Straße 9, 88662 Überlingen, Deutschland
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

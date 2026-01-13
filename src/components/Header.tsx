import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ResumeDownload from "./ResumeDownload";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.projects'), id: "projects" },
    { label: t('nav.skills'), id: "skills" },
    { label: t('nav.contact'), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-black/50 backdrop-blur-md border-neutral-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Logo Placeholder or Image */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
              FF
            </div>

            <span className="text-lg font-bold text-white tracking-tight">
              Felix Funke
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="h-4 w-px bg-neutral-800" />
            <LanguageToggle />
            <ResumeDownload />
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-neutral-800 shadow-2xl">
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-medium text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t border-neutral-800 mt-2">
                <div className="flex items-center justify-between">
                   <span className="text-neutral-500 text-sm">Language</span>
                   <LanguageToggle />
                </div>
                <ResumeDownload />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
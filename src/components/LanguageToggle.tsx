
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language === 'en' ? 'DE' : 'EN'}</span>
    </Button>
  );
};

export default LanguageToggle;


import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'uz' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('uz')}
        className={language === 'uz' 
          ? 'bg-uznavy text-white' 
          : 'border-uznavy text-uznavy hover:text-white hover:bg-uznavy'}
      >
        {t('lang.uz')}
      </Button>
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className={language === 'ru' 
          ? 'bg-uznavy text-white' 
          : 'border-uznavy text-uznavy hover:text-white hover:bg-uznavy'}
      >
        {t('lang.ru')}
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' 
          ? 'bg-uznavy text-white' 
          : 'border-uznavy text-uznavy hover:text-white hover:bg-uznavy'}
      >
        {t('lang.en')}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

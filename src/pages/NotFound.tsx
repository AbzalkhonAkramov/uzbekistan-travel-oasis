
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "overlay",
      backgroundColor: "rgba(255, 255, 255, 0.9)"
    }}>
      <div className="text-center max-w-md bg-white/90 p-8 rounded-lg shadow-sm">
        <h1 className="text-6xl font-serif font-bold text-uznavy mb-4">{t('notfound.title')}</h1>
        <div className="w-16 h-0.5 bg-uzvanilla mx-auto mb-8"></div>
        <h2 className="text-2xl font-serif mb-6">{t('notfound.heading')}</h2>
        <p className="text-gray-600 mb-10">
          {t('notfound.description')}
        </p>
        <Link to="/">
          <Button className="bg-uznavy hover:bg-uznavy/90 text-white">
            <ArrowLeft size={16} className="mr-2" /> {t('notfound.back_home')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

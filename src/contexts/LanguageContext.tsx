
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Available languages
export type Language = 'uz' | 'ru' | 'en';

// Language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'uz',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translation data
const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.tours': 'Turlar',
    'nav.about': 'Biz haqimizda',
    'nav.blog': 'Blog',
    'nav.contact': 'Aloqa',
    'nav.book_now': 'Buyurtma qilish',

    // Hero
    'hero.title': 'Oʻzbekistonni kashf eting',
    'hero.description': 'Qadimgi Ipak yoʻli shaharlarining osoyishtaligi va goʻzalligini his qiling, bu yerda tarix va mehmondoʻstlik sizni kutmoqda.',
    'hero.explore_tours': 'Turlarni koʻrish',
    'hero.contact_us': 'Biz bilan bogʻlanish',

    // Contact Page
    'contact.title': 'Biz bilan bogʻlanish',
    'contact.subtitle': 'Turlarimiz haqida savollaringiz bormi yoki Oʻzbekiston sarguzashtingizni rejalashtirmoqchimisiz? Yordam uchun bizning doʻstona jamoamizga murojaat qiling.',
    'contact.get_in_touch': 'Bogʻlanish',
    'contact.get_in_touch_description': 'Jamoamiz sizning mukammal Oʻzbekiston sayohatingizni rejalashtirish uchun yordam beradi. Har qanday savol yoki sayohatingizni rejalashtirish uchun biz bilan bogʻlaning.',
    'contact.office': 'Bizning ofisimiz',
    'contact.call_us': 'Qoʻngʻiroq qiling',
    'contact.email_us': 'Email yozing',
    'contact.message_us': 'Xabar yozing',
    'contact.follow_us': 'Bizni kuzatib boring',
    'contact.send_message': 'Xabar yuboring',
    'contact.full_name': 'To\'liq ismingiz',
    'contact.email': 'Email manzilingiz',
    'contact.subject': 'Mavzu',
    'contact.message': 'Xabar',
    'contact.subject_placeholder': 'Qanday yordam kerak?',
    'contact.message_placeholder': 'Sayohat rejalaringiz yoki savollaringiz haqida bizga ayting...',
    'contact.find_us': 'Bizni toping',

    // NotFound
    'notfound.title': '404',
    'notfound.heading': 'Sahifa topilmadi',
    'notfound.description': 'Siz qidirayotgan sahifa olib tashlangan, nomi oʻzgartirilgan yoki vaqtinchalik mavjud emas.',
    'notfound.back_home': 'Bosh sahifaga qaytish',

    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan',
    'footer.about': 'Biz haqimizda',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',

    // Language Switcher
    'lang.uz': 'O\'zbek',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.tours': 'Туры',
    'nav.about': 'О нас',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.book_now': 'Забронировать',

    // Hero
    'hero.title': 'Откройте для себя Узбекистан',
    'hero.description': 'Ощутите безмятежность и красоту древних городов Шелкового пути, где вас ждут история и гостеприимство.',
    'hero.explore_tours': 'Изучить туры',
    'hero.contact_us': 'Связаться с нами',

    // Contact Page
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'У вас есть вопросы о наших турах или вы готовы спланировать свое приключение в Узбекистане? Обратитесь к нашей дружелюбной команде за помощью.',
    'contact.get_in_touch': 'Связаться',
    'contact.get_in_touch_description': 'Наша команда поможет вам спланировать идеальное путешествие по Узбекистану. Свяжитесь с нами по любым вопросам или чтобы начать планировать ваше путешествие.',
    'contact.office': 'Наш офис',
    'contact.call_us': 'Позвоните нам',
    'contact.email_us': 'Напишите нам',
    'contact.message_us': 'Сообщение',
    'contact.follow_us': 'Подписывайтесь',
    'contact.send_message': 'Отправить сообщение',
    'contact.full_name': 'Полное имя',
    'contact.email': 'Электронная почта',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.subject_placeholder': 'Чем мы можем помочь?',
    'contact.message_placeholder': 'Расскажите нам о своих планах путешествия или вопросах...',
    'contact.find_us': 'Найдите нас',

    // NotFound
    'notfound.title': '404',
    'notfound.heading': 'Страница не найдена',
    'notfound.description': 'Страница, которую вы ищете, могла быть удалена, перемещена, или временно недоступна.',
    'notfound.back_home': 'Вернуться на главную',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.about': 'О нас',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',

    // Language Switcher
    'lang.uz': 'O\'zbek',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.book_now': 'Book Now',

    // Hero
    'hero.title': 'Discover Uzbekistan',
    'hero.description': 'Experience the serenity and beauty of ancient Silk Road cities, where history and hospitality await.',
    'hero.explore_tours': 'Explore Tours',
    'hero.contact_us': 'Contact Us',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Have questions about our tours or ready to plan your Uzbekistan adventure? Reach out to our friendly team for assistance.',
    'contact.get_in_touch': 'Get in Touch',
    'contact.get_in_touch_description': 'Our team is here to help you plan your perfect Uzbekistan adventure. Feel free to contact us with any questions or to start planning your journey.',
    'contact.office': 'Visit Our Office',
    'contact.call_us': 'Call Us',
    'contact.email_us': 'Email Us',
    'contact.message_us': 'Message Us',
    'contact.follow_us': 'Follow Us',
    'contact.send_message': 'Send Message',
    'contact.full_name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.subject_placeholder': 'How can we help you?',
    'contact.message_placeholder': 'Tell us about your travel plans or questions...',
    'contact.find_us': 'Find Us',

    // NotFound
    'notfound.title': '404',
    'notfound.heading': 'Page Not Found',
    'notfound.description': 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    'notfound.back_home': 'Back to Homepage',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.about': 'About Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Language Switcher
    'lang.uz': 'O\'zbek',
    'lang.ru': 'Русский',
    'lang.en': 'English',
  }
};

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, default to 'uz'
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'uz';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

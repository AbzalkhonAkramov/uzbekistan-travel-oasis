
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactPage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} | UzTravel - Toshkent tur agentligi</title>
        <meta name="description" content="Contact UzTravel for inquiries about our tours in Uzbekistan or to book your next adventure. Visit our office in Tashkent or reach us via phone, email, WhatsApp, or Telegram." />
        <meta name="keywords" content="sayohat agentligi Toshkent, Toshkent tur agentligi, turizm xizmatlari Toshkent, O'zbekistonga sayohat qilish" />
      </Helmet>
    
      <div className="pt-24 pb-16 bg-uznavy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-uzvanilla">{t('contact.title')}</h1>
          <p className="text-lg max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">
                <span className="uz-title-decoration">{t('contact.get_in_touch')}</span>
              </h2>
              <p className="text-gray-700 mb-8">
                {t('contact.get_in_touch_description')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-uzvanilla/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-uznavy" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{t('contact.office')}</h3>
                    <address className="not-italic text-gray-700">
                      123 Amir Temur Street<br />
                      Tashkent, 100000<br />
                      Uzbekistan
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-uzvanilla/20 rounded-full flex items-center justify-center mr-4">
                    <Phone size={24} className="text-uznavy" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{t('contact.call_us')}</h3>
                    <p className="text-gray-700">
                      <a href="tel:+998123456789" className="hover:text-uznavy transition-colors">
                        +998 12 345 6789
                      </a>
                      <br />
                      <span className="text-sm">Monday-Friday: 9am - 6pm</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-uzvanilla/20 rounded-full flex items-center justify-center mr-4">
                    <Mail size={24} className="text-uznavy" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{t('contact.email_us')}</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@uztravel.com" className="hover:text-uznavy transition-colors">
                        info@uztravel.com
                      </a>
                      <br />
                      <a href="mailto:booking@uztravel.com" className="hover:text-uznavy transition-colors">
                        booking@uztravel.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-uzvanilla/20 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle size={24} className="text-uznavy" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg">{t('contact.message_us')}</h3>
                    <p className="text-gray-700">
                      <a href="https://t.me/uztravelbot" target="_blank" rel="noopener noreferrer" className="hover:text-uznavy transition-colors">
                        Telegram: @uztravelbot
                      </a>
                      <br />
                      <a href="https://wa.me/998123456789" target="_blank" rel="noopener noreferrer" className="hover:text-uznavy transition-colors">
                        WhatsApp: +998 12 345 6789
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="font-serif font-bold text-lg mb-4">{t('contact.follow_us')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-uznavy text-white rounded-full flex items-center justify-center hover:bg-uznavy/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-uznavy text-white rounded-full flex items-center justify-center hover:bg-uznavy/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-uznavy text-white rounded-full flex items-center justify-center hover:bg-uznavy/80 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-serif font-bold mb-6">{t('contact.send_message')}</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.full_name')}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={language === 'uz' ? "To'liq ismingiz" : language === 'ru' ? "Ваше полное имя" : "Your full name"}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.email')}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.subject')}
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder={t('contact.subject_placeholder')}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t('contact.message_placeholder')}
                      className="w-full h-32"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-uznavy hover:bg-uznavy/90">
                    {t('contact.send_message')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold mb-6 text-center">
            <span className="uz-title-decoration">{t('contact.find_us')}</span>
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47913.86469237817!2d69.25247642090307!3d41.297305694431744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a91bd666d%3A0x79b8c9c2341b8a73!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1684338775378!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UzTravel Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

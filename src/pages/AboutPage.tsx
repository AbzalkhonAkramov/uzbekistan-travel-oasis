
import React from 'react';
import { Check } from 'lucide-react';
import ContactCta from '@/components/home/ContactCta';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About UzTravel | Leading Tur Agentligi O'zbekiston</title>
        <meta name="description" content="Learn about UzTravel, Uzbekistan's premier travel agency. Our experienced team offers the best Uzbekistan tours with expert local guides, comfortable accommodation, and personalized service." />
        <meta name="keywords" content="tur agentligi O'zbekiston, sayohat agentligi Toshkent, turizm xizmatlari Toshkent, O'zbekistonda sayohat qilish" />
      </Helmet>
    
      <div className="pt-24 pb-16 bg-uznavy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-uzvanilla">About UzTravel</h1>
          <p className="text-lg max-w-3xl">
            The leading travel agency in Uzbekistan, dedicated to showcasing the beauty and culture of our country to travelers from around the world.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                <span className="uz-title-decoration">Our Story</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2005, UzTravel began as a small family business with a passion for sharing the wonders of Uzbekistan with international visitors. Over the years, we have grown into a leading travel agency while maintaining our commitment to authentic, personalized experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey started when our founder, Rustam Karimov, recognized the untapped potential of tourism in Uzbekistan. With a deep knowledge of local history and culture, he began hosting small groups of travelers, showing them hidden gems not found in typical guidebooks.
              </p>
              <p className="text-gray-700">
                Today, UzTravel employs over 30 dedicated professionals, including expert guides, travel planners, and logistics specialists. We serve thousands of satisfied clients each year, but we still approach each tour with the same passion and personalized attention that defined our beginnings.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1565686160102-4c79caa38876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Tashkent cityscape" 
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-1/2 bg-uzvanilla/30 -z-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              <span className="uz-title-decoration">Our Mission</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We strive to showcase the authentic beauty, rich history, and warm hospitality of Uzbekistan while providing exceptional service and unforgettable experiences to our guests.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-uzvanilla/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uznavy">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Authentic Experiences</h3>
              <p className="text-gray-700">
                We go beyond typical tourist attractions to connect our guests with local communities, traditions, and hidden gems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-uzvanilla/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uznavy">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Sustainable Tourism</h3>
              <p className="text-gray-700">
                We are committed to responsible tourism practices that benefit local communities and preserve Uzbekistan's cultural and natural heritage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-uzvanilla/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-uznavy">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Expert Local Guides</h3>
              <p className="text-gray-700">
                Our knowledgeable guides share not just facts, but personal insights and stories that bring Uzbekistan's history and culture to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1626779503581-28f2df278375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                      alt="Uzbek textiles" 
                      className="w-full"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1628086087872-59324e6eecbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                      alt="Uzbek pottery" 
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1632874902540-38f20520fb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                      alt="Uzbek architecture" 
                      className="w-full"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1629212099316-6b2e711f85af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                      alt="Uzbek cuisine" 
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-bold mb-6">
                <span className="uz-title-decoration">Why Choose UzTravel?</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">Local Expertise:</strong> Our team consists of passionate local experts who know every corner of Uzbekistan.</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">Personalized Service:</strong> We tailor each tour to match your interests, schedule, and preferences.</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">Quality Accommodations:</strong> We partner with the best hotels and guesthouses for your comfort.</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">Authentic Experiences:</strong> From traditional meals in local homes to artisan workshops.</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">Responsible Tourism:</strong> We support local communities and practice sustainable tourism.</p>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mt-1 mr-2 text-uznavy" />
                  <p className="text-gray-700"><strong className="text-uznavy">24/7 Support:</strong> We're always available to assist you during your journey.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
};

export default AboutPage;

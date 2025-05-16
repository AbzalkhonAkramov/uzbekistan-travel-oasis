
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              <span className="uz-title-decoration">About UzTravel</span>
            </h2>
            <p className="text-gray-700 mb-4">
              UzTravel is Uzbekistan's premier travel agency, specializing in expertly crafted tours 
              that showcase the beauty, history, and culture of our country. With over 15 years of 
              experience, we're dedicated to creating unforgettable journeys through the heart of Central Asia.
            </p>
            <p className="text-gray-700 mb-6">
              Our team consists of passionate local experts who know every corner of Uzbekistan and 
              are committed to providing authentic experiences, comfortable accommodations, and the highest 
              level of service to our guests.
            </p>
            <Link to="/about" className="uz-button-secondary inline-flex items-center">
              More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560713781-d00f6c18f176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="UzTravel Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-4/5 h-full rounded-lg bg-uzvanilla/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              <span className="uz-title-decoration">About UzTravel</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We specialize in creating mindful travel experiences that connect you with Uzbekistan's serene landscapes, 
              rich heritage, and warm hospitality. Our journeys are designed to provide peaceful moments of discovery 
              and cultural immersion.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Led by local experts who cherish and protect Uzbekistan's natural and cultural treasures, 
              we invite you to experience our country's timeless beauty at a gentle pace.
            </p>
            <Link to="/about" className="inline-flex items-center text-uznavy font-medium hover:text-uznavy/80 transition-colors">
              Our Story <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565457730058-1acc84fc4211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="Peaceful Uzbek countryside" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

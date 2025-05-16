
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561634108-ee6f074276e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVuefHx&auto=format&fit=crop&w=1470&q=80')" }}
      >
        <div className="absolute inset-0 bg-uznavy/70"></div>
        <div className="absolute inset-0 opacity-20 uz-pattern-border"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:ml-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            Discover the Magic of Uzbekistan
          </h1>
          <p className="text-lg md:text-xl text-uzvanilla mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Embark on a journey through ancient Silk Road cities, majestic mountains, and 
            experience the rich culture and hospitality of Uzbekistan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/tours">
              <Button className="bg-uzvanilla hover:bg-uzvanilla/90 text-uznavy text-lg w-full sm:w-auto">
                Explore Tours <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-uzvanilla text-uzvanilla hover:bg-uzvanilla/20 text-lg w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

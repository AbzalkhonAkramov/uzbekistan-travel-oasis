
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629212992529-4bcdfb218202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVuefHx&auto=format&fit=crop&w=1470&q=80')" }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0 opacity-10 uz-pattern-border"></div>
      </div>
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="max-w-xl mx-auto md:ml-0 bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-uznavy">
            Discover Uzbekistan
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Experience the serenity and beauty of ancient Silk Road cities, where history and hospitality await.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/tours">
              <Button className="bg-uznavy hover:bg-uznavy/90 text-white text-lg w-full sm:w-auto">
                Explore Tours <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-uznavy text-uznavy hover:bg-uznavy/10 text-lg w-full sm:w-auto">
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

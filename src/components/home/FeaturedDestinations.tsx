
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Registan Square",
    description: "The heart of ancient Samarkand with stunning madrasas and intricate Islamic architecture",
    image: "https://images.unsplash.com/photo-1553069844-997528c1d566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Samarkand"
  },
  {
    id: 2,
    name: "Itchan Kala",
    description: "Ancient inner town of Khiva with impressive city walls and historic monuments",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Khiva"
  },
  {
    id: 3,
    name: "Poi Kalon Complex",
    description: "Historic Islamic complex featuring the magnificent Kalon Minaret and mosque",
    image: "https://images.unsplash.com/photo-1517037673086-83b5c9d06467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Bukhara"
  },
  {
    id: 4,
    name: "Tashkent Modern City",
    description: "Uzbekistan's capital with a blend of modern architecture and historic sites",
    image: "https://images.unsplash.com/photo-1569588482493-f442129ce076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Tashkent"
  },
];

const FeaturedDestinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="uz-title-decoration">Explore Uzbekistan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most beautiful and historical destinations across Uzbekistan's ancient Silk Road cities.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`w-full flex-shrink-0 transition-all duration-700 ease-in-out transform ${
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">{destination.name}</h3>
                    <p className="text-lg text-gray-500 mb-2">
                      <span className="inline-block bg-uzvanilla/30 text-uznavy px-3 py-1 rounded-full text-sm font-medium">
                        {destination.location}
                      </span>
                    </p>
                    <p className="text-gray-700 mb-6 text-lg">{destination.description}</p>
                    <button className="uz-button">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-uznavy w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

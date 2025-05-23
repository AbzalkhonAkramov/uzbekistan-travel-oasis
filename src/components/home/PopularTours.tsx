
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Tour {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  featured: boolean;
}

const tours: Tour[] = [
  {
    id: 1,
    name: "Silk Road Highlights",
    description: "Explore the ancient cities of Samarkand, Bukhara and Khiva in one amazing journey.",
    image: "/photo-1469041797191-50ace28483c3",
    price: 799,
    duration: "7 days",
    location: "Samarkand, Bukhara, Khiva",
    featured: true
  },
  {
    id: 2,
    name: "Tashkent City Tour",
    description: "Discover the vibrant capital of Uzbekistan with its mix of modern and historic sites.",
    image: "/photo-1466442929976-97f336a657be",
    price: 199,
    duration: "2 days",
    location: "Tashkent",
    featured: true
  },
  {
    id: 3,
    name: "Samarkand Weekend",
    description: "Experience the majesty of Registan Square and other treasures of Samarkand.",
    image: "/photo-1426604966848-d7adac402bff",
    price: 299,
    duration: "3 days",
    location: "Samarkand",
    featured: true
  },
];

const PopularTours = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <span className="uz-title-decoration">Experience Uzbekistan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated tours that capture the essence of Uzbekistan's tranquil beauty and rich heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {tours.map((tour) => (
            <div key={tour.id} className="group">
              <Link to={`/tours/${tour.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-uznavy px-4 py-1 rounded-full text-sm font-medium">
                    From ${tour.price}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      <span>{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{tour.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-uznavy transition-colors">{tour.name}</h3>
                  <p className="text-gray-600 mb-0 line-clamp-2">{tour.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/tours">
            <Button variant="outline" className="border-uznavy text-uznavy hover:bg-uzvanilla/20">
              View All Tours <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;

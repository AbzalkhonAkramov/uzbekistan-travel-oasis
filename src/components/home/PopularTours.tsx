
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    image: "https://images.unsplash.com/photo-1602149536755-43fc7e5cc2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 799,
    duration: "7 days",
    location: "Samarkand, Bukhara, Khiva",
    featured: true
  },
  {
    id: 2,
    name: "Tashkent City Tour",
    description: "Discover the vibrant capital of Uzbekistan with its mix of modern and historic sites.",
    image: "https://images.unsplash.com/photo-1565686160102-4c79caa38876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 199,
    duration: "2 days",
    location: "Tashkent",
    featured: true
  },
  {
    id: 3,
    name: "Samarkand Weekend",
    description: "Experience the majesty of Registan Square and other treasures of Samarkand.",
    image: "https://images.unsplash.com/photo-1563389859-480e47a1b47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 299,
    duration: "3 days",
    location: "Samarkand",
    featured: true
  },
  {
    id: 4,
    name: "Bukhara Heritage Tour",
    description: "Visit sacred sites and explore the rich history of beautiful Bukhara.",
    image: "https://images.unsplash.com/photo-1629212099316-6b2e711f85af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 349,
    duration: "4 days",
    location: "Bukhara",
    featured: false
  }
];

const PopularTours = () => {
  const featuredTours = tours.filter(tour => tour.featured);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="uz-title-decoration">Popular Tour Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best of Uzbekistan with our carefully curated tour packages
            designed to showcase the country's rich heritage and natural beauty.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <Card key={tour.id} className="uz-card group h-full flex flex-col">
              <div className="relative overflow-hidden h-60">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-uznavy text-white px-4 py-1 rounded-full font-medium">
                  From ${tour.price}
                </div>
              </div>
              <CardContent className="pt-6 px-6 flex-grow">
                <h3 className="text-xl font-serif font-bold mb-2">{tour.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-2 text-uznavy" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2 text-uznavy" />
                  <span>{tour.duration}</span>
                </div>
                <p className="text-gray-700 mb-4">{tour.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Link to={`/tours/${tour.id}`} className="w-full">
                  <Button className="w-full bg-uznavy hover:bg-uznavy/90">
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/tours">
            <Button variant="outline" className="border-2 border-uznavy text-uznavy hover:bg-uzvanilla/30">
              Browse All Tours <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;

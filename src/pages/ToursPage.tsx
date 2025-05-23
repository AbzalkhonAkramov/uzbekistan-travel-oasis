
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowRight, Search, X } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from 'react-helmet-async';

interface Tour {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  location: string;
  category: string;
  featured: boolean;
}

const allTours: Tour[] = [
  {
    id: 1,
    name: "Silk Road Highlights",
    description: "Explore the ancient cities of Samarkand, Bukhara and Khiva in one amazing journey.",
    image: "/photo-1469041797191-50ace28483c3",
    price: 799,
    duration: "7 days",
    location: "Samarkand, Bukhara, Khiva",
    category: "Cultural",
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
    category: "City",
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
    category: "Weekend",
    featured: true
  },
  {
    id: 4,
    name: "Bukhara Heritage Tour",
    description: "Visit sacred sites and explore the rich history of beautiful Bukhara.",
    image: "/photo-1482938289607-e9573fc25ebb",
    price: 349,
    duration: "4 days",
    location: "Bukhara",
    category: "Cultural",
    featured: false
  },
  {
    id: 5,
    name: "Khiva Ancient City",
    description: "Step back in time in the perfectly preserved walled city of Khiva.",
    image: "/photo-1472396961693-142e6e269027",
    price: 299,
    duration: "3 days",
    location: "Khiva",
    category: "Cultural",
    featured: false
  },
  {
    id: 6,
    name: "Uzbekistan Highlights",
    description: "See the best of Uzbekistan in one comprehensive tour package.",
    image: "/photo-1466442929976-97f336a657be",
    price: 999,
    duration: "10 days",
    location: "Tashkent, Samarkand, Bukhara, Khiva",
    category: "Adventure",
    featured: false
  }
];

const ToursPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const categories = ['All', 'Cultural', 'Adventure', 'City', 'Weekend'];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === 'All' ? '' : category);
  };
  
  const filteredTours = allTours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || tour.category === selectedCategory;
    
    const matchesPrice = tour.price >= priceRange.min && tour.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
      <Helmet>
        <title>Tour Packages | UzTravel - O'zbekistonda tur paketlar</title>
        <meta name="description" content="Browse our extensive collection of tour packages across Uzbekistan. Visit Samarkand, Bukhara, Khiva, and Tashkent with UzTravel's expert guides and comfortable accommodation." />
        <meta name="keywords" content="O'zbekistonda tur paketlar, arzon tur paketlar O'zbekiston, O'zbekiston sayohatlari, ichki turizm O'zbekiston" />
      </Helmet>
      
      <div className="pt-24 pb-16 bg-uznavy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-uzvanilla">Tour Packages</h1>
          <p className="text-lg max-w-3xl">
            Discover the beauty and rich history of Uzbekistan with our carefully curated tour packages.
            From weekend getaways to comprehensive adventures, we have the perfect journey for you.
          </p>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search tours by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      (category === 'All' && selectedCategory === '') || selectedCategory === category
                        ? 'bg-uznavy text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-500 mb-2">Price Range: ${priceRange.min} - ${priceRange.max}</p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600">No tours matching your criteria were found. Please try different filters.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
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
          )}
        </div>
      </section>
    </>
  );
};

export default ToursPage;

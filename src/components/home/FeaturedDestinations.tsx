
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

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
  {
    id: 5,
    name: "Aral Sea Landscape",
    description: "Peaceful desert landscapes and remaining waters of what was once the Aral Sea",
    image: "https://images.unsplash.com/photo-1508030732173-90dc3469c63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Karakalpakstan"
  },
  {
    id: 6,
    name: "Chimgan Mountains",
    description: "Serene mountain landscapes offering peaceful views and outdoor recreation",
    image: "https://images.unsplash.com/photo-1463693396561-31858a322f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Tashkent Region"
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <span className="uz-title-decoration">Discover Peaceful Uzbekistan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the tranquil beauty and timeless landscapes of Uzbekistan's hidden gems.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {destinations.map((destination) => (
              <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/3 px-4">
                <div className="h-full">
                  <Card className="border-0 shadow-none overflow-hidden h-full bg-transparent">
                    <div className="h-80 overflow-hidden rounded-lg mb-6">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <CardContent className="px-0 pb-0">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span>{destination.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-3">{destination.name}</h3>
                      <p className="text-gray-600 mb-0 line-clamp-2">{destination.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mx-2 bg-white border-uznavy text-uznavy hover:bg-uzvanilla/20" />
            <CarouselNext className="relative static mx-2 bg-white border-uznavy text-uznavy hover:bg-uzvanilla/20" />
          </div>
        </Carousel>
        
        <div className="text-center mt-12">
          <Link to="/destinations">
            <Button variant="outline" className="border-uznavy text-uznavy hover:bg-uzvanilla/20 mt-8">
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;

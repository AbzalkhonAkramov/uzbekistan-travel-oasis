
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  image: string;
  text: string;
  rating: number;
  tourName: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "Our experience with UzTravel was exceptional from start to finish. The guides were knowledgeable, accommodations were comfortable, and the itinerary perfectly balanced historic sites with cultural experiences.",
    rating: 5,
    tourName: "Silk Road Highlights"
  },
  {
    id: 2,
    name: "David Chen",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "Exploring Samarkand with UzTravel was a dream come true. The attention to detail and the insider knowledge of our guide made this trip unforgettable. I highly recommend their services.",
    rating: 5,
    tourName: "Samarkand Weekend"
  },
  {
    id: 3,
    name: "Marie Dubois",
    country: "France",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "The hospitality of Uzbek people combined with UzTravel's professional service made our trip outstanding. The traditional meals arranged for us were delicious, and the historical sites were breathtaking.",
    rating: 4,
    tourName: "Bukhara Heritage Tour"
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-uzvanilla text-uzvanilla" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-uznavy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="uz-pattern-border h-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-uzvanilla">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Read about the experiences of travelers who have explored Uzbekistan with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white text-gray-800 overflow-visible">
              <CardContent className="p-6 relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-uznavy">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-12 text-center">
                  <div className="flex justify-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div className="font-bold text-uznavy">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.country}</div>
                  <div className="mt-2 inline-block bg-uzvanilla/30 text-uznavy px-3 py-1 rounded-full text-xs">
                    {testimonial.tourName}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

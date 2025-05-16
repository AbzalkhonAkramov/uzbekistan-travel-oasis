
import React from 'react';
import { Star } from 'lucide-react';

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
    text: "The peacefulness of the countryside and the hospitality of people in every city we visited was truly remarkable. UzTravel made our journey through Uzbekistan unforgettable.",
    rating: 5,
    tourName: "Silk Road Highlights"
  },
  {
    id: 2,
    name: "David Chen",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "The serene beauty of Samarkand at sunrise is something I'll never forget. Our guide showed us quiet spots away from crowds where we could truly appreciate the history.",
    rating: 5,
    tourName: "Samarkand Weekend"
  },
  {
    id: 3,
    name: "Marie Dubois",
    country: "France",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    text: "The tranquility of the desert landscapes and the peaceful atmosphere of the historic sites created a perfect balance of adventure and relaxation.",
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
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            <span className="uz-title-decoration">Guest Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories from travelers who discovered the tranquil beauty of Uzbekistan with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex justify-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-8 text-center">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-uznavy">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

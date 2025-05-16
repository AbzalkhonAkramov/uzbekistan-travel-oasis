
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  return (
    <section className="py-16 md:py-24 bg-uzvanilla/20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden md:block">
            <div className="uz-pattern-border h-full w-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Ready to Experience Uzbekistan?
              </h2>
              <p className="text-gray-700 mb-6">
                Our travel experts are ready to help you plan your perfect journey through the 
                ancient cities and breathtaking landscapes of Uzbekistan. Contact us today!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone size={20} className="text-uznavy mr-3" />
                  <a href="tel:+998123456789" className="text-gray-800 hover:text-uznavy transition-colors">
                    +998 12 345 6789
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={20} className="text-uznavy mr-3" />
                  <a href="mailto:info@uztravel.com" className="text-gray-800 hover:text-uznavy transition-colors">
                    info@uztravel.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <Link to="/contact">
                <Button className="text-lg px-8 py-6 bg-uznavy hover:bg-uznavy/90 mr-4">
                  Contact Us
                </Button>
              </Link>
              <Link to="/tours">
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-uznavy text-uznavy hover:bg-uzvanilla/30">
                  Browse Tours
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;

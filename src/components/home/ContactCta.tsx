
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ContactCta = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-gray-50 rounded-2xl p-12 md:p-16 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Plan Your Uzbekistan Journey
              </h2>
              <p className="text-gray-600 mb-8">
                Let us help you create a peaceful, culturally rich experience in the heart of Central Asia.
                Our travel experts are ready to craft your perfect journey.
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
                <Button className="bg-uznavy hover:bg-uznavy/90 text-white mr-4 mb-4 md:mb-0">
                  Contact Us
                </Button>
              </Link>
              <Link to="/tours">
                <Button variant="outline" className="border-uznavy text-uznavy hover:bg-uzvanilla/20">
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

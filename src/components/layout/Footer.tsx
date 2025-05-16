
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-uznavy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-uzvanilla mb-4">UzTravel</h3>
            <p className="text-gray-300 mb-4">
              Discover the best of Uzbekistan with our expertly crafted tours and travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-uzvanilla transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-uzvanilla transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold text-uzvanilla mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-uzvanilla transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-uzvanilla transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-uzvanilla transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-uzvanilla transition-colors">Travel Tips</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-uzvanilla transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-xl font-serif font-bold text-uzvanilla mb-4">Popular Tours</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-uzvanilla transition-colors">Silk Road Explorer</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-uzvanilla transition-colors">Samarkand Weekend</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-uzvanilla transition-colors">Khiva Ancient City</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-uzvanilla transition-colors">Mountains of Uzbekistan</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif font-bold text-uzvanilla mb-4">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-uzvanilla mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Amir Temur Street, Tashkent, Uzbekistan</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={20} className="text-uzvanilla flex-shrink-0" />
                <a href="tel:+998123456789" className="text-gray-300 hover:text-uzvanilla transition-colors">+998 12 345 6789</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-uzvanilla flex-shrink-0" />
                <a href="mailto:info@uztravel.com" className="text-gray-300 hover:text-uzvanilla transition-colors">info@uztravel.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="uz-pattern-border my-6"></div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} UzTravel. All Rights Reserved.</p>
          <div className="mt-2">
            <Link to="/privacy" className="inline-block mx-2 hover:text-uzvanilla transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="inline-block mx-2 hover:text-uzvanilla transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.tours'), path: '/tours' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="font-serif font-bold text-2xl text-uznavy">UzTravel</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-uznavy font-medium border-b-2 border-uznavy"
                  : "text-gray-600 hover:text-uznavy transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="default" className="bg-uznavy hover:bg-uznavy/90">
            {t('nav.book_now')}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center p-2 rounded-md text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white pb-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-uznavy font-medium border-l-4 border-uznavy pl-2"
                    : "text-gray-600 hover:text-uznavy pl-2 transition-colors"
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 pb-2 flex justify-start">
              <LanguageSwitcher />
            </div>
            <Button variant="default" className="mt-2 bg-uznavy hover:bg-uznavy/90 w-full">
              {t('nav.book_now')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
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
        
        <Button variant="default" className="hidden md:flex bg-uznavy hover:bg-uznavy/90">
          Book Now
        </Button>

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
            <Button variant="default" className="mt-4 bg-uznavy hover:bg-uznavy/90 w-full">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

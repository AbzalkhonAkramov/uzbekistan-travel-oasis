
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold text-uznavy mb-4">404</h1>
        <div className="w-24 h-1 bg-uzvanilla mx-auto mb-6"></div>
        <h2 className="text-2xl font-serif mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-uznavy hover:bg-uznavy/90">
            <ArrowLeft size={16} className="mr-2" /> Back to Homepage
          </Button>
        </Link>
        <div className="mt-12">
          <img 
            src="https://images.unsplash.com/photo-1531299983330-093763e1d962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" 
            alt="Uzbek pattern" 
            className="w-full h-32 object-cover rounded-lg opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif font-bold text-uznavy mb-4">404</h1>
        <div className="w-16 h-0.5 bg-uzvanilla mx-auto mb-8"></div>
        <h2 className="text-2xl font-serif mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-10">
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-uznavy hover:bg-uznavy/90 text-white">
            <ArrowLeft size={16} className="mr-2" /> Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

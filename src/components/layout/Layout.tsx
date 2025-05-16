
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow mt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

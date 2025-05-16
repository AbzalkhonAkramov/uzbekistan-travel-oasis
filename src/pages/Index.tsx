
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutPreview from '@/components/home/AboutPreview';
import PopularTours from '@/components/home/PopularTours';
import Testimonials from '@/components/home/Testimonials';
import ContactCta from '@/components/home/ContactCta';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>UzTravel - Discover Uzbekistan | O'zbekistonda sayohatlar va tur paketlar</title>
        <meta name="description" content="Experience the serenity of Uzbekistan with our guided tours to Samarkand, Bukhara, Khiva, and Tashkent. Book your peaceful journey with UzTravel, the leading travel agency in Tashkent." />
        <meta name="keywords" content="tur agentligi O'zbekiston, O'zbekistonda tur paketlar, Toshkent tur agentligi, O'zbekiston sayohatlari, arzon tur paketlar O'zbekiston" />
      </Helmet>
      
      <main>
        <HeroSection />
        <FeaturedDestinations />
        <AboutPreview />
        <PopularTours />
        <Testimonials />
        <ContactCta />
      </main>
    </>
  );
};

export default Index;

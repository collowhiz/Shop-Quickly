import React from 'react';

// Importing components from your local directory
import Hero from '@/components/Hero/Hero';
import FeatureGrid from '@/components/Features/FeatureGrid';
import SmartFridge from '@/components/Hardware/SmartFridge';
import Testimonials from '@/components/Blog/BlogCard';
import BlogSection from '@/components/Blog/BlogSection';
import MailingList from '@/components/MailingList/MailingList';


export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. Hero & Branding Section [1] */}
      <Hero />

      {/* 2. Feature Discovery Section [1, 2] */}
      <FeatureGrid />

      {/* 3. Hardware Integration (Smart Fridge) Section [3] */}
      <SmartFridge />

      {/* 4. User Testimonials (Emily Johnson) [4] */}
      <Testimonials />

      {/* 5. Latest Blog Articles [4, 5] */}
      <BlogSection />

      {/* 6. Mailing List Signup [6] */}
      <MailingList />

    </main>
  );
}
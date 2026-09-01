'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize AOS for scroll animations
    const AOS = require('aos');
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <BookingForm />
      <Rooms />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}

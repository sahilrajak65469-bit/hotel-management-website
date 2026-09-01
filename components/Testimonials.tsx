'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Executive',
    text: 'An exceptional hotel with outstanding service! The rooms are luxurious and the staff is incredibly attentive. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Entrepreneur',
    text: 'Perfect for business travel. The WiFi is blazing fast, the gym is well-equipped, and the restaurant serves amazing food.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Traveler',
    text: 'Our honeymoon was unforgettable! The presidential suite is breathtaking, and the views are absolutely stunning.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">Guest Reviews</h2>
          <p className="text-xl text-gray-600">What our guests say about their experience</p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="card p-12 text-center"
          >
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-50" />

            {/* Testimonial Text */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[current].text}"
            </p>

            {/* Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-accent text-2xl">
                  ★
                </span>
              ))}
            </div>

            {/* Guest Info */}
            <div className="flex items-center justify-center mb-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="text-lg font-bold text-primary">{testimonials[current].name}</h4>
                <p className="text-sm text-gray-600">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-primary text-white p-3 rounded-full hover:bg-primary/80 transition"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrent(idx)}
              animate={{
                backgroundColor: idx === current ? '#dc2626' : '#d1d5db',
              }}
              className="w-3 h-3 rounded-full transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

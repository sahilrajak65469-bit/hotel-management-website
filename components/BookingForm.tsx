'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Booking:', formData);
    alert('Booking request submitted! Our team will contact you soon.');
  };

  return (
    <section className="relative -mt-32 z-40 max-w-6xl mx-auto px-4 mb-20">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Find Your Perfect Stay</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Check-in Date */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold text-gray-700">
              <Calendar className="inline mr-2" size={18} />
              Check-in
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </motion.div>

          {/* Check-out Date */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold text-gray-700">
              <Calendar className="inline mr-2" size={18} />
              Check-out
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </motion.div>

          {/* Guests */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold text-gray-700">
              <Users className="inline mr-2" size={18} />
              Guests
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Room Type */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-2"
          >
            <label className="block text-sm font-semibold text-gray-700">
              <MapPin className="inline mr-2" size={18} />
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
            >
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="presidential">Presidential</option>
            </select>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn-secondary w-full py-3"
          >
            Search Rooms
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

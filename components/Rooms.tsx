'use client';

import { motion } from 'framer-motion';
import { Star, Wifi, UtensilsCrossed, Dumbbell } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: '$99',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
    amenities: ['WiFi', 'AC', 'TV'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: '$149',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=400&fit=crop',
    amenities: ['WiFi', 'AC', 'Balcony', 'Mini Bar'],
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Luxury Suite',
    price: '$249',
    image: 'https://images.unsplash.com/photo-1618773421522-1d1aad0f6f4b?w=500&h=400&fit=crop',
    amenities: ['WiFi', 'Spa', 'Jacuzzi', 'Lounge'],
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Presidential Suite',
    price: '$399',
    image: 'https://images.unsplash.com/photo-1566195992011-5303c8580549?w=500&h=400&fit=crop',
    amenities: ['All Amenities', 'Private Pool', 'Chef Service'],
    rating: 5.0,
  },
];

export default function Rooms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="rooms" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">Our Rooms</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our exquisite collection of rooms, each designed for ultimate comfort
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden"
            >
              {/* Image */}
              <motion.div
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full font-bold">
                  {room.price}
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{room.name}</h3>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(room.rating) ? 'fill-accent text-accent' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({room.rating})</span>
                </div>

                {/* Amenities */}
                <div className="space-y-2 mb-6">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full"
                >
                  Book Room
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

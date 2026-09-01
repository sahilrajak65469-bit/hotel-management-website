'use client';

import { motion } from 'framer-motion';
import { Wifi, UtensilsCrossed, Dumbbell, Waves, Music, Concierge } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'High-Speed WiFi',
    description: 'Stay connected with our premium internet service',
    icon: Wifi,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 2,
    name: 'Fine Dining',
    description: 'Award-winning restaurants and culinary experiences',
    icon: UtensilsCrossed,
    color: 'from-red-400 to-red-600',
  },
  {
    id: 3,
    name: 'Fitness Center',
    description: 'State-of-the-art gym and wellness facilities',
    icon: Dumbbell,
    color: 'from-green-400 to-green-600',
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Luxurious heated pool with premium amenities',
    icon: Waves,
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    id: 5,
    name: 'Entertainment',
    description: 'Live music and events every weekend',
    icon: Music,
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 6,
    name: '24/7 Concierge',
    description: 'Dedicated assistance for all your needs',
    icon: Concierge,
    color: 'from-orange-400 to-orange-600',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enjoy world-class amenities and services designed for your comfort
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="card p-8 text-center cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <Icon size={32} className="text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="h-1 bg-secondary mx-auto mt-6 rounded-full"
                ></motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

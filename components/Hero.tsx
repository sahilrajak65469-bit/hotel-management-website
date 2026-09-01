'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl z-0"
      ></motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.div variants={item} className="mb-6">
          <span className="text-accent text-lg font-semibold">Welcome to Luxury Living</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Experience Unforgettable Moments
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Indulge in world-class hospitality with our premium rooms and exceptional services
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(220,38,38,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-secondary/90"
          >
            Book Your Stay
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 text-white rounded-lg font-bold text-lg border-2 border-white hover:bg-white/30"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-white rounded-full"></motion.div>
        </div>
      </motion.div>
    </section>
  );
}

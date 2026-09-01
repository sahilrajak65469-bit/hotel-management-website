'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: ['Home', 'Rooms', 'Services', 'Booking', 'Contact'],
    },
    {
      title: 'Hotel Info',
      links: ['About Us', 'Careers', 'Press', 'Policies', 'Sustainability'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'],
    },
  ];

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">🏨 LuxeStay</h3>
            <p className="text-gray-300 leading-relaxed">
              Experience luxury and comfort at our premium hotel. Book your unforgettable stay today.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
              <p className="text-gray-300">123 Hotel Avenue, Luxury City, LC 12345</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-accent" />
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-accent" />
              <a href="mailto:info@luxestay.com" className="text-gray-300 hover:text-white transition">
                info@luxestay.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Rooms', 'Services', 'Booking', 'Admin'].map((link) => (
                <li key={link}>
                  <a
                    href={link === 'Admin' ? '/admin' : '#'}
                    className="text-gray-300 hover:text-accent transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-secondary transition"
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-white/20 mb-8 origin-left"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400"
        >
          <p>
            &copy; {currentYear} LuxeStay Hotel. All rights reserved. | Designed with ❤️ by Your Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../assets/hero-bg.jpg';
import { useNavigate } from 'react-router-dom'; // For Vite projects

const Hero = () => {
  const navigate = useNavigate();

  const scrollToOurStory = () => {
    const element = document.getElementById('our-story');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
            Fashion that respects
          </span>
          <br />
          our planet's future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300"
        >
          LoomLoop – Reviving Craft. Redefining Waste. We combine artisan craftsmanship with sustainable practices to create clothing that looks good, feels good, and does good.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/auth')}
            className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Join Our Wishlist
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToOurStory}
            className="border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
          >
            Discover My Story
          </motion.button>
        </motion.div>
      </div>

      {/* Bouncing Dot at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce w-8 h-8 border-4 border-white rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

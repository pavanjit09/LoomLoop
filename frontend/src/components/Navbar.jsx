import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import loomLogo from '../assets/loom_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { label: 'Our Story', id: 'our-story' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Marketplace', id: 'marketplace' },
    { label: 'Get Started', id: 'get-started' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img
            src={loomLogo}
            alt="LoomLoop Logo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() =>
                location.pathname === '/'
                  ? scrollToSection(item.id)
                  : navigate(`/#${item.id}`)
              }
              className="text-white/90 hover:text-white font-medium relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>

        {isAuthenticated ? (
          <motion.button
            onClick={logout}
            className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Logout
          </motion.button>
        ) : (
          <motion.button
            onClick={() => navigate('/auth')}
            className="bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Login / Sign Up</span>
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;


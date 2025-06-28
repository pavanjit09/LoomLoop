import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import loomLogo from '../assets/loom_logo.png'; // Your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Decorative industrial elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <img 
                src={loomLogo} 
                alt="LoomLoop Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                LoomLoop
              </span>
            </div>
            <p className="text-gray-400">
              Industrial-grade sustainable fashion. Redefining textile waste through engineering and craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Our Story', 'How It Works', 'Artisans', 'Sustainability', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Supply Chain Ethics'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FiMail className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:contact@loomloop.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                  contact@loomloop.com
                </a>
              </div>
              <p className="text-gray-400">
                LoomLoop Industries<br />
                123 Textile Revolution Road<br />
                Bangalore, India 560001
              </p>
            </div>
            <button className="border border-gray-700 hover:border-amber-400 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-lg transition-all flex items-center group">
              <span>Request Media Kit</span>
              <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LoomLoop Industries. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Sustainability Report
            </a>
            <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
              Patents
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiLock, FiUser, FiEdit3, FiGrid } from 'react-icons/fi';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/auth'); // Navigate to signup page
  };

  return (
    <section id="get-started" className="bg-gradient-to-br from-gray-900 to-gray-800 py-24 px-6 relative overflow-hidden">
      {/* Decorative industrial elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gray-700 text-amber-400 text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4 border border-gray-600">
            Premium Features
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Unlock Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Creative Hub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access powerful tools to design sustainable fashion and track your impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Custom Design Studio Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-amber-400/30 transition-all backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg mr-6">
                <FiEdit3 className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Custom Design Studio</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Craft your sustainable apparel with our zero-waste design tools. 
              Select recycled materials, collaborate with artisans, and visualize your creations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <FiLock className="mr-3 text-amber-400" />
                <span>Requires account</span>
              </div>
              <motion.button 
                onClick={handleSignupClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all group"
              >
                <span className="flex items-center justify-center">
                  Sign Up to Design
                  <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Customer Dashboard Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-emerald-400/30 transition-all backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg mr-6">
                <FiGrid className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Customer Dashboard</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Track your orders, measure your sustainability impact, and manage collaborations 
              with artisans—all in one control panel.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <FiLock className="mr-3 text-emerald-400" />
                <span>Requires account</span>
              </div>
              <motion.button 
                onClick={handleSignupClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all group"
              >
                <span className="flex items-center justify-center">
                  Sign Up to Access
                  <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
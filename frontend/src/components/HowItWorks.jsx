import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Sourcing",
    description: "We collect discarded clothes and textile industry scraps, extracting fibers to give waste a new life.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "from-amber-500 to-yellow-400"
  },
  {
    number: 2,
    title: "Crafting",
    description: "The reclaimed fibers are spun into high-quality threads and woven into sustainable fabrics by skilled local artisans.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400"
  },
  {
    number: 3,
    title: "Design",
    description: "Customers share their T-shirt design preferences, and freelance designers submit unique concepts letting creativity take center stage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-400"
  },
  {
    number: 4,
    title: "Delivery",
    description: "The chosen design is printed on an eco-friendly T-shirt and shipped directly to the customer.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-400"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-emerald-500 filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block bg-green-900/30 text-green-400 text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-6 border border-green-400/30"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Our Circular Process
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">LoomLoop</span> Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From discarded textiles to sustainable fashion - our meticulous process ensures quality while protecting our planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${step.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500`}></div>
              <div className="relative bg-gray-800 rounded-xl p-8 h-full flex flex-col items-center text-center border border-gray-700/50 hover:border-gray-600 transition-all duration-300">
                <div className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${step.color} text-white mb-8 relative`}>
                  <span className="absolute text-4xl font-bold text-white/20">{step.number}</span>
                  <div className="z-10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
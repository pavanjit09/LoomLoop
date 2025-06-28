import React from 'react';
import { motion } from 'framer-motion';
import fabricTexture from '../assets/hero-bg.jpg'; // Your texture image

const milestones = [
    {
        year: "2023",
        title: "Concept Born",
        description: "The LoomLoop vision was conceived after witnessing textile waste firsthand at manufacturing facilities."
    },
    {
        year: "2024 Q1",
        title: "Prototype Developed",
        description: "Created first working prototype converting textile waste into wearable fabric with zero water waste."
    },
    {
        year: "2024 Q2",
        title: "First Partner",
        description: "Onboarded first recycling partner - a local textile manufacturer diverting 200kg/week from landfills."
    },
    {
        year: "Now",
        title: "Building Future",
        description: "Developing proprietary technology to automate fiber sorting and increase recycled material quality."
    }
];

const stats = [
    { value: "12,500+", label: "Garments Upcycled" },
    { value: "97%", label: "Less Energy Used" },
    { value: "0", label: "Toxic Chemicals" },
    { value: "3.2M", label: "Liters Water Saved" }
];

const OurStory = () => {
    return (
        <section id="our-story" className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Industrial texture overlay */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `url(${fabricTexture})`,
                    backgroundSize: 'cover',
                    mixBlendMode: 'overlay'
                }}
            ></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400/20 to-transparent"></div>
                <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-emerald-500/10 filter blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="inline-block bg-gray-700 text-amber-400 text-sm px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-6 border border-gray-600"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        Singular Vision
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                        Engineered by <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">One</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        LoomLoop represents my personal commitment to solving fashion's waste crisis through engineering and relentless iteration.
                    </p>
                </motion.div>

                {/* Founder Focus */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Left column - Founder card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm h-full">
                            <div className="flex items-start mb-8">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1 rounded-full mr-6">
                                    <div className="bg-gray-900 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Pavanjit Subash</h3>
                                    <p className="text-amber-400 mb-3">Founder & Engineer</p>
                                    <p className="text-gray-400">CSE Student at NIT Rourkela</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6">
                                With a background in computer science and a passion for sustainable innovation, I'm building LoomLoop to prove that thoughtful technology and solo-driven ideas can reshape entire industries. Every system, process, and digital product is personally engineered, designed, and tested.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://www.linkedin.com/in/pavanjit-subash-b622b3327/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/pavanjit09"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-full transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column - Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">The Industrial Approach</h3>
                        <p className="text-gray-300 mb-6">
                            LoomLoop isn't just another sustainable fashion brand. It's an engineering project to rebuild the textile lifecycle from first principles. Most solutions focus on mitigating harm - we're eliminating it at the source.
                        </p>
                        <p className="text-gray-300 mb-6">
                            The current prototype system achieves 98% material recovery with zero liquid discharge. Our proprietary mechanical process maintains fiber integrity better than chemical alternatives, enabling true circularity without downcycling.
                        </p>
                        <p className="text-gray-300 mb-8">
                            This isn't a side project or hobby. It's a full-stack industrial solution being built to scale. Every decision is driven by physics, material science, and systems engineering - not marketing trends.
                        </p>

                        <div className="bg-gray-800/50 border-l-4 border-amber-400 p-6 rounded-r-lg">
                            <h4 className="text-xl font-bold text-white mb-3">Core Technical Principles</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Mechanical processing only - no chemical treatments</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Closed-loop water recycling system</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Energy recovery from non-recyclable fractions</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                {/* Technical Evolution Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-32 px-4 md:px-8"
                >
                    <h3 className="text-4xl font-extrabold text-white text-center mb-16 tracking-tight">
                        Technical Evolution
                    </h3>

                    <div className="relative">
                        {/* Central timeline track */}
                        <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-gray-600 via-amber-400 to-gray-600 transform md:-translate-x-1/2"></div>

                        <div className="flex flex-col gap-16">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} className="relative flex flex-col md:flex-row md:items-center">

                                    {/* Dot on the timeline */}
                                    <div className="absolute top-6 md:top-1/2 left-4 md:left-1/2 w-5 h-5 bg-amber-400 border-4 border-gray-900 rounded-full transform -translate-y-1/2 md:-translate-x-1/2 z-20 shadow-md"></div>

                                    {/* Content box */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`relative bg-gray-800/60 border border-gray-700 backdrop-blur-sm rounded-xl p-6 md:w-5/12 
              ${index % 2 === 0 ? 'md:ml-auto md:mr-12' : 'md:mr-auto md:ml-12'}`}
                                    >
                                        {/* Decorative background corner */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 transform rotate-45 translate-x-8 -translate-y-8"></div>

                                        <div className="relative z-10">
                                            <span className="inline-block bg-gray-700 text-amber-400 text-xs font-medium px-3 py-1 rounded-full mb-3">
                                                {milestone.year}
                                            </span>
                                            <h4 className="text-2xl font-bold text-white mb-2">{milestone.title}</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold text-white mb-6">Join the Technical Journey</h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        This isn't just about clothing - it's about proving industrial ecology works. Follow the build process or contribute expertise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://github.com/yourprofile/loomloop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all bg-gray-700 rounded-lg group hover:bg-gray-600"
                        >
                            <span className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                View Project Code
                            </span>
                        </a>
                        <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg group hover:shadow-lg">
                            <span className="relative flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Contact for Collaboration
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
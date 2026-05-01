import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about_us.png';

const AboutHistory = () => {
    const stats = [
        { label: 'Years Experience', value: '12', color: 'text-blue-600' },
        { label: 'Happy Customers', value: '20K', color: 'text-blue-600' },
        { label: 'Clients Satisfaction', value: '100%', color: 'text-blue-600' },
    ];

    return (
        <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content Left */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Background Watermark */}
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 0.05, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute -top-16 -left-4 text-7xl md:text-9xl font-bold text-gray-900 select-none pointer-events-none"
                        >
                            HISTORY
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-4 block">
                                OUR HISTORY
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                                Creative and renovate fashion trends
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl">
                                Collaboratively administrate empowered markets via plug-and-play maintain networks. 
                                Dynamically usable procrastinate B2B users after installed base benefits. 
                                Dramatically visualize customer directed convergence without revolutionary ROI.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col"
                                    >
                                        <span className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                                            {stat.value}
                                        </span>
                                        <span className="text-gray-500 text-sm font-medium">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden">
                            <img 
                                src={aboutImg} 
                                alt="About Us" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutHistory;

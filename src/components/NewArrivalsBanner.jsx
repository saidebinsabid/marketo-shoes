import React from 'react';
import { motion } from 'framer-motion';
import arrivalBannerBg from '../assets/arrival_banner.jpg';

const NewArrivalsBanner = () => {
    return (
        <section 
            className="w-full relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] bg-cover bg-center bg-no-repeat overflow-hidden my-16 md:my-24" 
            style={{ backgroundImage: `url(${arrivalBannerBg})` }}
        >
            <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-end">
                {/* Text Content Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[50%] lg:w-[45%] md:pl-8 lg:pl-16 mt-32 md:mt-0"
                >
                    <span className="text-gray-800 tracking-[0.25em] text-xs sm:text-sm font-medium uppercase mb-4 opacity-80">
                        New Arrivals
                    </span>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-[64px] text-gray-900 font-normal tracking-wide leading-snug mb-8">
                        Discover Shoes<br className="hidden sm:block" /> That Look Great
                    </h2>
                    
                    <button className="bg-black hover:bg-gray-800 text-white text-xs font-bold tracking-widest px-10 py-4 transition-colors duration-300 rounded-sm">
                        SHOP NOW
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default NewArrivalsBanner;

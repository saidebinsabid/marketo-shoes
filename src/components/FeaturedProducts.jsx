import React from 'react';
import leftShoe from '../assets/left-shoe.jpg';
import rightShoe from '../assets/right-shoe.jpg';

const FeaturedProducts = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Left Image */}
                <div className="relative w-full flex justify-center group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={leftShoe}
                        alt="The Ultimate Booster"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Double Shine Effect from Right Top to Left Bottom */}
                    <div className="absolute top-0 right-0 w-[100%] h-full z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:shine-sweep_0.9s_ease-in-out_2] pointer-events-none transform translate-x-[150%] skew-x-[60deg]" />
                </div>

                {/* Right Image */}
                <div className="relative w-full flex justify-center group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={rightShoe}
                        alt="Xianix Minimal Roadstars"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Double Shine Effect from Right Top to Left Bottom */}
                    <div className="absolute top-0 right-0 w-[100%] h-full z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:shine-sweep_0.9s_ease-in-out_2] pointer-events-none transform translate-x-[150%] skew-x-[60deg]" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;

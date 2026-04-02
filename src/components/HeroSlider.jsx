import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { GiRunningShoe } from 'react-icons/gi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import redBack from '../assets/red-back.jpg';
import redRun from '../assets/red-run.png';
import redShoe from '../assets/red-banner-shoes.png';

import yellowBack from '../assets/yellow-back.jpg';
import yellowRun from '../assets/yellow-run.png';
import yellowShoe from '../assets/yellow-banner-shoes.png';

import blueBack from '../assets/blue-back.jpg';
import blueRun from '../assets/blue-run.png';
import blueShoe from '../assets/blue-banner-shoes.png';

const sliderData = [
    {
        id: 1,
        color: 'red',
        title: 'Adidas Campus',
        subtitle: 'Our Exclusive',
        description: 'We have all your auto parts needs! Are you looking for the best performance car parts and car accessories',
        price: '$34',
        bgImg: redBack,
        runImg: redRun,
        shoeImg: redShoe,
        btnColor: 'bg-black hover:bg-red-600',
        titleColor: 'text-black',
        subtitleColor: 'text-red-600',
        badgeColor: 'bg-red-600',
    },
    {
        id: 2,
        color: 'yellow',
        title: 'Adidas Campus',
        subtitle: 'Our Exclusive',
        description: 'We have all your auto parts needs! Are you looking for the best performance car parts and car accessories',
        price: '$32',
        bgImg: yellowBack,
        runImg: yellowRun,
        shoeImg: yellowShoe,
        btnColor: 'bg-black hover:bg-yellow-500',
        titleColor: 'text-black',
        subtitleColor: 'text-yellow-500',
        badgeColor: 'bg-yellow-500',
    },
    {
        id: 3,
        color: 'blue',
        title: 'Adidas Campus',
        subtitle: 'Our Exclusive',
        description: 'We have all your auto parts needs! Are you looking for the best performance car parts and car accessories',
        price: '$34',
        bgImg: blueBack,
        runImg: blueRun,
        shoeImg: blueShoe,
        btnColor: 'bg-black hover:bg-blue-500',
        titleColor: 'text-black',
        subtitleColor: 'text-blue-500',
        badgeColor: 'bg-blue-500',
    },
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden flex items-center justify-center pt-6 md:pt-20">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="w-full h-full relative flex items-center justify-center">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 z-0 bg-cover bg-center object-cover opacity-60"
                                style={{ backgroundImage: `url(${slide.bgImg})` }}
                            />

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 items-center justify-center pt-2 md:pt-0">

                                {/* Left Content Column */}
                                <div className="text-center md:text-left space-y-4 md:space-y-6 flex flex-col justify-center items-center md:items-start order-1 md:order-1 pt-0 md:pt-0 z-20">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                                    >
                                        <span className={`text-base md:text-xl font-bold ${slide.subtitleColor} mb-1 md:mb-2 block uppercase tracking-wide`}>
                                            {slide.subtitle}
                                        </span>
                                        <h1 className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold ${slide.titleColor} mb-3 md:mb-6 tracking-tight leading-tight`}>
                                            {slide.title}
                                        </h1>
                                        <p className="hidden md:block text-gray-600 font-medium text-sm md:text-base lg:text-lg max-w-md leading-relaxed mb-8">
                                            {slide.description}
                                        </p>

                                        <button className={`hidden md:flex group relative overflow-hidden ${slide.btnColor} text-white text-xs md:text-sm font-bold tracking-widest px-6 md:px-10 py-3 md:py-4 transition-all duration-300 shadow-lg hover:shadow-xl mt-2 md:mt-0 rounded-sm items-center justify-center`}>
                                            <span className="relative z-10 uppercase flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-3">
                                                <GiRunningShoe className="w-5 h-5 absolute -left-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white" />
                                                View Collections
                                            </span>
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Right Image/Animation Column */}
                                <div className="relative w-full h-[350px] sm:h-[400px] md:h-full flex items-center justify-center order-2 md:order-2 mt-0 md:mt-0">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <div className="relative w-full h-full flex items-center justify-center">

                                                {/* RUN Image - Smoother, smaller, falls from top */}
                                                <motion.img
                                                    key={`run-${slide.id}`}
                                                    src={slide.runImg}
                                                    alt="Run background text"
                                                    initial={{ opacity: 0, y: -400 }}
                                                    animate={{ opacity: 1, y: -20 }} // stops lower
                                                    exit={{ opacity: 0, y: -100 }}
                                                    transition={{
                                                        duration: 1.6,
                                                        ease: [0.16, 1, 0.3, 1],
                                                        delay: 0.1
                                                    }}
                                                    className="absolute w-[45%] md:w-[60%] max-w-[450px] object-contain object-center opacity-80 z-10 -mt-16 sm:-mt-24 md:-mt-32 -ml-28 sm:-ml-16 md:ml-4 md:-left-4 lg:-left-10" // shifted further left on mobile
                                                />

                                                {/* Shoe Image - Smoother, slower slide from right */}
                                                <motion.img
                                                    key={`shoe-${slide.id}`}
                                                    src={slide.shoeImg}
                                                    alt="Shoe Product"
                                                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                                                    animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                                                    exit={{ opacity: 0, clipPath: 'inset(0 0% 0 100%)' }}
                                                    transition={{
                                                        duration: 1.8,
                                                        ease: [0.16, 1, 0.3, 1], // very smooth and slow deceleration
                                                        delay: 0.2
                                                    }}
                                                    className="absolute object-contain z-20 w-[85%] md:w-[105%] max-w-[700px]"
                                                />

                                                {/* Price Badge - Smooth fade and scale */}
                                                <motion.div
                                                    key={`price-${slide.id}`}
                                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                        delay: 0.6
                                                    }}
                                                    className={`absolute z-30 ${slide.badgeColor} text-white font-bold text-xl sm:text-2xl md:text-3xl rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center left-[55%] md:left-[60%] bottom-[20%] md:bottom-[25%] shadow-xl transform -translate-x-1/2`}
                                                >
                                                    {slide.price}
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;

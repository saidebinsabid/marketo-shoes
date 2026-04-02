import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import DiscountProducts from '../components/DiscountProducts';
import PopularProducts from '../components/PopularProducts';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <FeaturedProducts />
            <PopularProducts />
            <ServicesSection />
            <DiscountProducts />
        </>
    );
}

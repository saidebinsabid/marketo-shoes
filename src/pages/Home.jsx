import React from 'react';
import HeroSlider from '../components/HeroSlider';
import NewArrivalsBanner from '../components/NewArrivalsBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import DiscountProducts from '../components/DiscountProducts';
import PopularProducts from '../components/PopularProducts';
import ServicesSection from '../components/ServicesSection';
import ProductColumns from '../components/ProductColumns';

export default function Home() {
    return (
        <>
            <HeroSlider />
            <FeaturedProducts />
            <PopularProducts />
            <ServicesSection />
            <DiscountProducts />
            <NewArrivalsBanner />
            <ProductColumns />
        </>
    );
}

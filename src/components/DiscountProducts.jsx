import React, { useState, useEffect } from 'react';
import discountImg from '../assets/discount-left.jpg';

const DiscountProducts = () => {
    const [products, setProducts] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [activeDiscount, setActiveDiscount] = useState('All');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/shoes.json');
                const data = await response.json();
                
                // Get products with discount
                const discountedProducts = data
                    .filter(p => p.oldPrice && p.oldPrice > p.price)
                    .map(p => {
                        const discountPercent = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
                        return { ...p, discountPercent };
                    });

                // Unique discount percentages sorted descending
                const uniqueDiscounts = [...new Set(discountedProducts.map(p => p.discountPercent))].sort((a, b) => b - a);
                
                // Use top 4 discounts for tabs
                const topDiscounts = uniqueDiscounts.slice(0, 4);
                
                setProducts(discountedProducts);
                setDiscounts(['All', ...topDiscounts]);
            } catch (error) {
                console.error("Error fetching discount shoes data:", error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = activeDiscount === 'All' 
        ? products.slice(0, 6) 
        : products.filter(p => p.discountPercent === activeDiscount).slice(0, 6);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
            {/* Header / Tabs */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 mb-6 lg:mb-8 pb-3">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 w-full md:w-auto mb-4 md:mb-0">Discount Product</h2>
                <div className="flex flex-wrap gap-4 sm:gap-6 w-full md:w-auto justify-start sm:justify-center md:justify-end mb-1 md:mb-0">
                    {discounts.map(discount => {
                        const isActive = activeDiscount === discount;
                        const label = discount === 'All' ? 'All Offers' : `${discount}% Off`;
                        return (
                            <button
                                key={discount}
                                onClick={() => setActiveDiscount(discount)}
                                className={`font-semibold text-[15px] md:text-[17px] relative pb-2 transition-colors duration-300 ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {label}
                                {isActive && (
                                    <span className="absolute left-1/2 -bottom-[12px] -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-red-600" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Image Banner (DESKTOP ONLY) */}
                <div className="hidden lg:block w-1/4 flex-shrink-0">
                    <img 
                        src={discountImg} 
                        alt="Discount Offer" 
                        className="w-full h-full object-cover border border-gray-100 shadow-sm rounded-sm"
                    />
                </div>

                {/* Right Product Grid */}
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="border border-gray-100 bg-white p-5 hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300 group flex flex-col items-center h-full rounded-sm relative">
                                {/* Discount Badge Overlay */}
                                <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2 py-1 rounded-sm shadow-sm z-10">
                                    {product.discountPercent}% OFF
                                </div>

                                <div className="w-full flex-1 flex justify-center items-center overflow-hidden mb-4 h-36">
                                    <img 
                                        src={product.images[0]} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col items-center text-center gap-1.5 mt-auto w-full">
                                    <p className="text-xs text-gray-500 capitalize">{product.brand}</p>
                                    <h3 className="text-[13px] font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">{product.name}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-red-600 font-bold text-[15px]">${product.price.toFixed(2)}</span>
                                        {product.oldPrice && (
                                            <span className="text-gray-400 line-through text-[13px]">${product.oldPrice.toFixed(2)}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="col-span-full py-20 text-center text-gray-500">
                                No products found for this discount.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountProducts;

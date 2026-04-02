import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Column = ({ title, items }) => {
    const [page, setPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePrev = () => {
        setPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    const displayedItems = items.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    return (
        <div className="flex flex-col w-full mb-10 md:mb-0">
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-8 relative">
                <h3 className="font-bold text-[18px] md:text-2xl lg:text-[26px] text-gray-900">{title}</h3>
                
                {/* Custom Red Underline & Arrow */}
                <div className="absolute -bottom-[2px] left-0 h-[2px] bg-red-600 w-20">
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-red-600"></div>
                </div>

                <div className="flex space-x-3 items-center">
                    <button 
                        onClick={handlePrev} 
                        disabled={page === 0}
                        className={`text-gray-400 hover:text-red-600 transition-colors ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <span className="text-2xl md:text-3xl lg:text-[46px] font-light leading-none">&#8249;</span>
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={page >= totalPages - 1 || totalPages === 0}
                        className={`text-gray-400 hover:text-red-600 transition-colors ${page >= totalPages - 1 || totalPages === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <span className="text-2xl md:text-3xl lg:text-[46px] font-light leading-none">&#8250;</span>
                    </button>
                </div>
            </div>

            {/* Items List */}
            <div className="flex flex-col space-y-6">
                {displayedItems.map((shoe) => (
                    <div key={shoe.id} className="flex items-center space-x-5 group cursor-pointer">
                        {/* Image Box */}
                        <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center bg-white p-2 border border-transparent group-hover:border-gray-100 transition-all duration-300">
                            <img 
                                src={shoe.images[0]} 
                                alt={shoe.name} 
                                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-sm" 
                            />
                        </div>
                        {/* Details */}
                        <div className="flex flex-col flex-1 pl-1">
                            <h4 className="font-bold text-[14px] leading-snug text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                                {shoe.name}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-[14px] text-red-600 font-medium">
                                {shoe.onSale && shoe.oldPrice ? (
                                    <>
                                        <span className="text-gray-400 font-normal line-through">${shoe.oldPrice.toFixed(2)}</span>
                                        <span>${shoe.price.toFixed(2)}</span>
                                    </>
                                ) : (
                                    <span>${shoe.price.toFixed(2)}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Fallback if no items */}
                {displayedItems.length === 0 && (
                    <div className="text-gray-400 text-sm py-4">No items found.</div>
                )}
            </div>
        </div>
    );
};

const ProductShowcase = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('/shoes.json')
            .then(res => res.json())
            .then(data => setShoes(data))
            .catch(err => console.error(err));
    }, []);

    // 1. Most Popular (High range shoes -> Sort by price descending)
    const mostPopular = [...shoes].sort((a, b) => b.price - a.price);
    
    // 2. Recent Product (High stock shoes -> Sort by stock descending)
    const recentProduct = [...shoes].sort((a, b) => b.stock - a.stock);
    
    // 3. Most Selling (Top discount shoes -> Filter by sale, sort by difference)
    const mostSelling = [...shoes]
        .filter(s => s.onSale && s.oldPrice)
        .sort((a, b) => {
            const discountA = a.oldPrice - a.price;
            const discountB = b.oldPrice - b.price;
            return discountB - discountA;
        });

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                <Column title="Most Popular" items={mostPopular} />
                <Column title="Recent Product" items={recentProduct} />
                <Column title="Most Selling" items={mostSelling} />
            </div>
        </section>
    );
};

export default ProductShowcase;

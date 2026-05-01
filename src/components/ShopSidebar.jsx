import React from 'react';
import { useShop } from '../context/ShopContext';
import { FiStar } from 'react-icons/fi';

const ShopSidebar = () => {
    const { 
        products, 
        priceRange, 
        setPriceRange, 
        selectedBrand, 
        setSelectedBrand, 
        applyFilters 
    } = useShop();

    // Get unique brands
    const brands = ['All', ...new Set(products.map(p => p.brand))];

    // Get top rated shoes (top 4)
    const topRated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <aside className="w-full space-y-6 lg:space-y-10">
            {/* Price Filter */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-slate-900 border-b pb-2">Price Filter</h3>
                <div className="space-y-4">
                    <input 
                        type="range" 
                        min={priceRange.min} 
                        max={priceRange.max} 
                        value={priceRange.current}
                        onChange={(e) => setPriceRange({...priceRange, current: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <div className="flex justify-between text-sm font-medium text-gray-600">
                        <span>Min: ${priceRange.min}</span>
                        <span>Max: ${priceRange.current}</span>
                    </div>
                    <button 
                        onClick={applyFilters}
                        className="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-black transition-colors font-medium text-sm"
                    >
                        Apply Filter
                    </button>
                </div>
            </div>

            {/* Top Rated Section - Hidden on mobile/tablet */}
            <div className="hidden lg:block bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-slate-900 border-b pb-2">Top Rated</h3>
                <div className="space-y-6">
                    {topRated.map((shoe) => (
                        <div key={shoe.id} className="flex gap-4 items-center group cursor-pointer">
                            <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                                <img src={shoe.images[0]} alt={shoe.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                            </div>
                            <div className="flex-grow min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-red-500 transition-colors">
                                    {shoe.name}
                                </h4>
                                <div className="flex items-center gap-1 my-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FiStar key={i} className={`w-3 h-3 ${i < Math.floor(shoe.rating) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-sm font-bold text-slate-700">${shoe.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brand Filter - Hidden on mobile/tablet */}
            <div className="hidden lg:block bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold mb-6 text-slate-900 border-b pb-2">Brands</h3>
                <div className="space-y-3">
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center gap-3 group cursor-pointer">
                            <div 
                                onClick={() => {
                                    setSelectedBrand(brand);
                                    // applyFilters(); // We can apply filters immediately or wait for the price filter button
                                }}
                                className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                                    selectedBrand === brand ? 'bg-red-500 border-red-500' : 'border-gray-200 group-hover:border-red-400'
                                }`}
                            >
                                {selectedBrand === brand && (
                                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                                )}
                            </div>
                            <span className={`text-sm font-medium transition-colors ${
                                selectedBrand === brand ? 'text-slate-900 font-bold' : 'text-gray-600 group-hover:text-red-500'
                            }`}>
                                {brand}
                            </span>
                        </label>
                    ))}
                </div>
                <button 
                    onClick={applyFilters}
                    className="w-full mt-6 bg-gray-100 text-slate-900 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                    Apply Brand Filter
                </button>
            </div>
        </aside>
    );
};

export default ShopSidebar;

import React, { useState, useEffect } from 'react';

const PopularProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/shoes.json');
                const data = await response.json();
                // Get 4 products to display as popular
                const selected = data.slice(0, 4);
                setProducts(selected);
            } catch (error) {
                console.error("Error fetching shoes data:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Most Popular Products</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="border border-gray-100 bg-white p-6 hover:shadow-[0_4px_20px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col h-full hover:border-transparent cursor-pointer">
                        <div className="flex-1 flex justify-center items-center mb-6 overflow-hidden h-48 py-4">
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 mt-auto">
                            <p className="text-xs text-gray-400 capitalize">{product.category}</p>
                            <h3 className="text-sm font-bold text-gray-800 line-clamp-2 h-10 leading-snug group-hover:text-red-600 transition-colors">{product.name}</h3>
                            <div className="flex items-center gap-2 mt-1 text-[15px] font-bold">
                                {product.oldPrice && (
                                    <span className="text-gray-400 line-through decoration-gray-300 font-medium">${product.oldPrice.toFixed(2)}</span>
                                )}
                                <span className="text-red-600">${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;

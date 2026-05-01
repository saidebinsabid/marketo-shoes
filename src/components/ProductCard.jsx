import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { FiHeart, FiShoppingBag, FiStar, FiEye } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const ProductCard = ({ product, viewMode }) => {
    const { addToCart, addToWishlist } = useShop();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Image sliding logic on hover
    useEffect(() => {
        let interval;
        if (isHovered && product.images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
            }, 1000);
        } else {
            setCurrentImageIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, product.images.length]);

    if (viewMode === 'list') {
        return (
            <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
            >
                <div 
                    className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden relative cursor-pointer p-2 flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={product.images[currentImageIndex]}
                            alt={product.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-contain"
                        />
                    </AnimatePresence>
                </div>
                <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="text-left flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{product.brand}</span>
                            <div className="flex items-center gap-1">
                                <FiStar className="w-3 h-3 fill-red-500 text-red-500" />
                                <span className="text-xs font-bold text-slate-900">{product.rating}</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-extrabold text-slate-800 leading-tight mb-4 tracking-tight">{product.name}</h3>
                        
                        <div className="flex flex-col gap-0.5 border-t border-gray-100 pt-3 mt-auto">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest">Price</span>
                            <div className="flex items-end gap-3">
                                <span className="text-2xl font-black text-red-600 leading-none">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-sm text-gray-400 line-through font-medium mb-0.5">${product.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button onClick={addToCart} className="bg-slate-900 text-white py-2.5 px-6 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-red-500 transition-all text-sm">
                            <FiShoppingBag className="w-4 h-4" /> Add to Cart
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Grid View
    return (
        <motion.div 
            layout
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex flex-col bg-white transition-all duration-300 hover:shadow-lg rounded-md overflow-hidden"
        >
            {/* Image Section - Light Grey Box */}
            <div className="relative w-full aspect-square bg-[#f6f6f6] rounded-sm overflow-hidden cursor-pointer flex items-center justify-center p-10">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImageIndex}
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-contain" 
                    />
                </AnimatePresence>

                {/* Wishlist Button - Shows on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.button 
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            onClick={(e) => { e.stopPropagation(); addToWishlist(); }}
                            className="absolute top-4 right-4 z-30 bg-white p-2.5 rounded-full text-slate-900 hover:bg-red-500 hover:text-white shadow-sm transition-colors"
                        >
                            <FiHeart className="w-4 h-4" />
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Quick View Button - Shows on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-0 inset-x-0 z-30"
                        >
                            <Link 
                                to={`/product/${product.id}`}
                                className="w-[65%] mx-auto bg-slate-900 text-white py-2.5 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all text-xs uppercase tracking-wider shadow-md"
                            >
                                <FiEye className="w-4 h-4" />
                                Quick View
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* New Tag */}
                {product.isNew && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-[9px] font-black px-2.5 py-1 rounded-sm uppercase z-20">
                        New
                    </span>
                )}
            </div>

            {/* Info Section - Centered */}
            <div className="pt-5 pb-2 flex flex-col items-center text-center">
                {/* Category/Brand */}
                <div className="flex justify-center items-center w-full mb-1">
                    <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">{product.brand}</span>
                </div>
                
                {/* Product Name */}
                <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-red-600 transition-colors">
                    {product.name}
                </h3>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-3">
                    <span className="text-lg font-black text-red-600">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-sm text-gray-400 line-through font-medium">${product.oldPrice}</span>
                    )}
                </div>

                {/* Add to Cart */}
                <button 
                    onClick={(e) => { e.stopPropagation(); addToCart(); }}
                    className="mt-4 w-[85%] bg-slate-900 text-white py-2.5 rounded-sm font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all text-xs uppercase tracking-wider"
                >
                    <FiShoppingBag className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
};

export default ProductCard;

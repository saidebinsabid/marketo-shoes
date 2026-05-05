import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import { useShop } from '../context/ShopContext';
import { FiHeart, FiShoppingBag, FiStar, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';


const ProductDetails = () => {
    const product = useLoaderData();
    const { addToCart, addToWishlist, cartItems } = useShop();
    const [mainImage, setMainImage] = useState(product.images[0]);

    const isInCart = cartItems.some(item => item.id === product.id);



    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                    <FiChevronRight className="w-4 h-4" />
                    <Link to="/shop" className="hover:text-slate-900 transition-colors">Shop</Link>
                    <FiChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 font-medium">{product.name}</span>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Gallery Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-gray-100 bg-[#fbfbfb]">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={mainImage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full aspect-square max-w-md bg-white rounded-xl flex items-center justify-center p-8 shadow-sm mb-8 relative"
                                >
                                    {product.isNew && (
                                        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-sm uppercase z-10 shadow-sm">
                                            New
                                        </span>
                                    )}
                                    {product.onSale && (
                                        <span className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-black px-3 py-1.5 rounded-sm uppercase z-10 shadow-sm">
                                            Sale
                                        </span>
                                    )}
                                    <img src={mainImage} alt={product.name} className="w-full h-full object-contain" />
                                </motion.div>
                            </AnimatePresence>
                            
                            <div className="flex gap-4 overflow-x-auto pb-2 w-full max-w-md justify-center">
                                {product.images.map((img, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={`w-20 h-20 flex-shrink-0 bg-white rounded-lg p-2 border-2 transition-all ${mainImage === img ? 'border-slate-900 shadow-md' : 'border-transparent hover:border-gray-200'}`}
                                    >
                                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-2">
                                <span className="text-sm font-bold text-red-500 uppercase tracking-widest">{product.brand}</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">{product.name}</h1>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                                    <FiStar className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span className="text-sm font-bold text-slate-900">{product.rating}</span>
                                </div>
                                <span className="text-sm text-gray-500 font-medium">Category: <span className="text-slate-900">{product.category}</span></span>
                            </div>

                            <div className="flex items-end gap-4 mb-8 pb-8 border-b border-gray-100">
                                <span className="text-4xl font-black text-red-600">${product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-xl text-gray-400 line-through font-medium mb-1">${product.oldPrice}</span>
                                )}
                            </div>

                            <div className="mb-8 flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">Color</span>
                                    <span className="text-sm text-gray-600 font-medium">{product.color}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">Availability</span>
                                    {product.stock > 0 ? (
                                        <span className="text-sm text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full">In Stock ({product.stock})</span>
                                    ) : (
                                        <span className="text-sm text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
                                    )}
                                </div>
                            </div>


                            <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-gray-100">
                                <button 
                                    onClick={() => !isInCart && addToCart(product)}
                                    disabled={product.stock === 0 || isInCart}
                                    className={`flex-1 bg-slate-900 text-white py-4 px-8 rounded-md font-bold flex items-center justify-center gap-3 transition-all text-sm uppercase tracking-wider shadow-lg shadow-slate-900/20 disabled:opacity-60 disabled:cursor-not-allowed
                                        ${isInCart ? 'bg-emerald-600 hover:bg-emerald-600' : 'hover:bg-red-600 disabled:hover:bg-slate-900'}`}
                                >
                                    <FiShoppingBag className="w-5 h-5" /> 
                                    {product.stock === 0 ? 'Out of Stock' : isInCart ? 'Added to Cart ✓' : 'Add to Cart'}
                                </button>
                                <button 
                                    onClick={() => addToWishlist(product)}
                                    className="sm:w-auto bg-white border-2 border-gray-200 text-slate-900 py-4 px-6 rounded-md font-bold flex items-center justify-center gap-2 hover:border-slate-900 transition-all shadow-sm"
                                    title="Add to Wishlist"
                                >
                                    <FiHeart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

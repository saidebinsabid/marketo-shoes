import React from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiShoppingBag, FiX } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';

const WishlistDropdown = ({ isMobile }) => {
    const { wishlistItems, wishlistCount, removeFromWishlist, addToCart, setIsWishlistOpen } = useShop();

    const Content = () => (
        <div className="overflow-y-auto flex-grow">
            {!wishlistItems || wishlistItems.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm">
                    Your wishlist is empty.
                </div>
            ) : (
                <div className="flex flex-col gap-1 p-2">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-3 hover:bg-gray-50 rounded-md transition-colors border-b border-gray-50 last:border-0 group">
                            {/* Small Image */}
                            <div className="w-16 h-16 bg-white border border-gray-100 rounded-md flex-shrink-0 flex items-center justify-center p-1">
                                <img src={item.images && item.images[0]} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                            
                            {/* Info */}
                            <div className="flex-grow flex flex-col justify-center">
                                <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1 line-clamp-1">{item.name}</h5>
                                <span className="text-sm font-black text-red-600">${item.price}</span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button 
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                    title="Remove from Wishlist"
                                >
                                    <FiTrash2 className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={() => {
                                        addToCart(item);
                                        setIsWishlistOpen(false);
                                    }}
                                    className="p-1.5 bg-slate-900 text-white hover:bg-red-500 rounded-md transition-colors flex items-center"
                                    title="Add to Cart"
                                >
                                    <FiShoppingBag className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    if (isMobile) {
        return (
            <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsWishlistOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                />
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-3xl overflow-hidden z-50 flex flex-col max-h-[85vh]"
                >
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <h4 className="font-bold text-lg text-slate-800">My Wishlist</h4>
                            <span className="text-xs bg-red-100 text-red-600 px-2.5 py-1 rounded-full font-bold">{wishlistCount} Items</span>
                        </div>
                        <button onClick={() => setIsWishlistOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                            <FiX className="w-5 h-5" />
                        </button>
                    </div>
                    <Content />
                </motion.div>
            </>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 top-10 w-[350px] bg-white border border-gray-100 shadow-2xl rounded-lg overflow-hidden z-50 cursor-default flex flex-col max-h-[85vh]"
        >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 flex-shrink-0">
                <h4 className="font-bold text-slate-800">My Wishlist</h4>
                <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">{wishlistCount} Items</span>
            </div>
            <Content />
        </motion.div>
    );
};

export default WishlistDropdown;

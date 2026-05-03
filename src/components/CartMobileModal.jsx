import React from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiX } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';

const CartMobileModal = () => {
    const { cartItems, cartCount, removeFromCart, setIsCartOpen } = useShop();
    const cartTotal = cartItems ? cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) : 0;

    return (
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsCartOpen(false)}
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
                        <h4 className="font-bold text-lg text-slate-800">Shopping Cart</h4>
                        <span className="text-xs bg-red-100 text-red-600 px-2.5 py-1 rounded-full font-bold">{cartCount} Items</span>
                    </div>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
                        <FiX className="w-5 h-5" />
                    </button>
                </div>
                
                <div className="overflow-y-auto flex-grow bg-white">
                    {!cartItems || cartItems.length === 0 ? (
                        <div className="p-8 text-center text-gray-500 text-sm">
                            Your cart is empty.
                        </div>
                    ) : (
                        <div className="flex flex-col gap-1 p-2">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 p-3 hover:bg-gray-50 rounded-md transition-colors border-b border-gray-50 last:border-0">
                                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-md flex-shrink-0 flex items-center justify-center p-1">
                                        <img src={item.images && item.images[0]} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <h5 className="text-sm font-bold text-slate-800 leading-tight mb-1 line-clamp-1">{item.name}</h5>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black text-red-600">${item.price}</span>
                                            <span className="text-xs text-gray-400 font-medium">x {item.quantity}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center flex-shrink-0">
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems && cartItems.length > 0 && (
                    <div className="p-5 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Amount</span>
                            <span className="text-xl font-black text-slate-900">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex-1 py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors text-sm">
                                View Cart
                            </button>
                            <button className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 shadow-md transition-colors text-sm">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default CartMobileModal;

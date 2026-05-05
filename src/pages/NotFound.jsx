import React from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome, FiShoppingBag } from 'react-icons/fi';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-20 font-sans overflow-hidden relative">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none translate-y-1/2"></div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                {/* Animated 404 number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 0 }}
                    className="mb-4"
                >
                    <span className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter select-none"
                        style={{
                            background: 'linear-gradient(135deg, #0f172a 0%, #dc2626 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </span>
                </motion.div>

                {/* Animated shoe icon */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex justify-center mb-8"
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
                        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
                    >
                        <FiShoppingBag className="w-16 h-16 text-red-500" />
                    </motion.div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Oops! Page Not Found
                    </h1>
                    <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                        Looks like this page walked out the door! The page you're looking for doesn't exist or has been moved.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 bg-white border-2 border-gray-200 text-slate-900 font-bold px-8 py-4 rounded-xl hover:border-slate-900 transition-all text-sm uppercase tracking-wider shadow-sm"
                    >
                        <FiArrowLeft className="w-5 h-5" /> Go Back
                    </button>
                    <Link
                        to="/"
                        className="flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-all text-sm uppercase tracking-wider shadow-lg shadow-slate-900/20"
                    >
                        <FiHome className="w-5 h-5" /> Back to Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;

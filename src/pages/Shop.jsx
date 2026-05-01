import React from 'react';
import { useShop } from '../context/ShopContext';
import ShopSidebar from '../components/ShopSidebar';
import ShopTopBar from '../components/ShopTopBar';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
    const { 
        filteredProducts, 
        loading, 
        viewMode, 
        currentPage, 
        setCurrentPage, 
        productsPerPage 
    } = useShop();

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Sidebar */}
                <div className="w-full lg:w-72 flex-shrink-0">
                    <ShopSidebar />
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <ShopTopBar />

                    {/* Products Grid/List */}
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={viewMode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className={`grid gap-6 ${
                                viewMode === 'grid' 
                                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                                : 'grid-cols-1 md:grid-cols-2'
                            }`}
                        >
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product) => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        viewMode={viewMode} 
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <h3 className="text-2xl font-bold text-slate-400">No products found matching your filters.</h3>
                                    <p className="text-gray-500 mt-2">Try adjusting your price range or brand selection.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination */}
                    <Pagination 
                        totalItems={filteredProducts.length}
                        itemsPerPage={productsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Shop;

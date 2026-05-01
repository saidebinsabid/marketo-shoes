import React from 'react';
import { useShop } from '../context/ShopContext';
import { FiGrid, FiList } from 'react-icons/fi';

const ShopTopBar = () => {
    const { filteredProducts, viewMode, setViewMode } = useShop();

    return (
        <div className="hidden lg:flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-8 gap-4">
            <div className="text-slate-700 font-medium">
                Showing <span className="text-slate-900 font-bold">{filteredProducts.length}</span> Products
            </div>
            
            <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">View</span>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all ${
                            viewMode === 'grid' 
                            ? 'bg-red-500 text-white shadow-lg shadow-red-200' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                        title="Grid View"
                    >
                        <FiGrid className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all ${
                            viewMode === 'list' 
                            ? 'bg-red-500 text-white shadow-lg shadow-red-200' 
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        }`}
                        title="List View"
                    >
                        <FiList className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopTopBar;

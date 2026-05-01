import React, { createContext, useState, useEffect, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Filters
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000, current: 1000 });
    const [selectedBrand, setSelectedBrand] = useState('All');
    
    // UI State
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    
    // Cart & Wishlist
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    // Fetch products
    useEffect(() => {
        fetch('/shoes.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                
                // Find min/max prices
                const prices = data.map(p => p.price);
                const min = Math.min(...prices);
                const max = Math.max(...prices);
                setPriceRange({ min, max, current: max });
                
                setLoading(false);
            })
            .catch(err => console.error("Error fetching shoes:", err));
    }, []);

    // Apply filters
    const applyFilters = () => {
        let updated = [...products];

        // Brand filter
        if (selectedBrand !== 'All') {
            updated = updated.filter(p => p.brand === selectedBrand);
        }

        // Price filter
        updated = updated.filter(p => p.price <= priceRange.current);

        setFilteredProducts(updated);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const addToCart = () => setCartCount(prev => prev + 1);
    const addToWishlist = () => setWishlistCount(prev => prev + 1);

    const value = {
        products,
        filteredProducts,
        loading,
        priceRange,
        setPriceRange,
        selectedBrand,
        setSelectedBrand,
        viewMode,
        setViewMode,
        currentPage,
        setCurrentPage,
        productsPerPage,
        cartCount,
        wishlistCount,
        addToCart,
        addToWishlist,
        applyFilters
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

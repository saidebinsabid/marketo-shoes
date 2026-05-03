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
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    const cartCount = cartItems.length;
    const wishlistCount = wishlistItems.length;

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

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    const addToWishlist = (product) => {
        setWishlistItems(prev => {
            if (!prev.find(item => item.id === product.id)) {
                return [...prev, product];
            }
            return prev;
        });
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
    };

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
        cartItems,
        wishlistItems,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        applyFilters
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

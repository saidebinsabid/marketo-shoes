import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiHeart, FiShoppingBag, FiUser } from "react-icons/fi";
import { useShop } from "../context/ShopContext";
import WishlistDropdown from "./WishlistDropdown";
import CartDropdown from "./CartDropdown";
import logoImg from "../assets/icons.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    cartCount, 
    wishlistCount,
    isCartOpen,
    setIsCartOpen,
    isWishlistOpen,
    setIsWishlistOpen
  } = useShop();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Shop", path: "/shop" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white transition-all duration-300 font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="Marketo Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 xl:space-x-14">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-red-500 ${
                    isActive ? "text-red-500" : "text-gray-700"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>

          {/* Right Section (Icons + Get Started Button) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex items-center space-x-4">
              {/* Wishlist Button */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsWishlistOpen(!isWishlistOpen);
                    setIsCartOpen(false); // Close cart if open
                  }}
                  className="text-gray-700 hover:text-red-500 transition-colors relative focus:outline-none"
                >
                  <FiHeart className="h-6 w-6" />
                  <span className="absolute -top-1 -right-2 bg-gray-200 text-gray-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                </button>

                {/* Wishlist Dropdown */}
                <AnimatePresence>
                  {isWishlistOpen && <WishlistDropdown />}
                </AnimatePresence>
              </div>

              {/* Cart Button */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setIsCartOpen(!isCartOpen);
                    setIsWishlistOpen(false); // Close wishlist if open
                  }}
                  className="text-gray-700 hover:text-red-500 transition-colors relative focus:outline-none"
                >
                  <FiShoppingBag className="h-6 w-6" />
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                </button>

                {/* Cart Dropdown */}
                <AnimatePresence>
                  {isCartOpen && <CartDropdown />}
                </AnimatePresence>
              </div>

            </div>
            {/* User Account / Login Route */}
            <Link
              to="/signup"
              className="text-gray-700 hover:text-red-500 transition-colors focus:outline-none flex items-center justify-center bg-gray-50 hover:bg-red-50 p-2.5 rounded-full"
              title="Account"
            >
              <FiUser className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? "text-red-500 bg-red-50"
                        : "text-gray-700 hover:text-red-500 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <div className="pt-4 flex flex-col gap-4 px-3">
                <div className="flex items-center justify-around mb-2 border-t border-gray-100 pt-4">
                  <button onClick={() => { setIsWishlistOpen(true); toggleMenu(); }} className="flex flex-col items-center gap-1 text-gray-700 hover:text-red-500">
                    <div className="relative">
                      <FiHeart className="h-6 w-6" />
                      <span className="absolute -top-1 -right-2 bg-gray-200 text-gray-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {wishlistCount}
                      </span>
                    </div>
                    <span className="text-xs font-medium">Wishlist</span>
                  </button>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <button onClick={() => { setIsCartOpen(true); toggleMenu(); }} className="flex flex-col items-center gap-1 text-gray-700 hover:text-red-500">
                    <div className="relative">
                      <FiShoppingBag className="h-6 w-6" />
                      <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {cartCount}
                      </span>
                    </div>
                    <span className="text-xs font-medium">Cart</span>
                  </button>
                </div>
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className="w-full text-center bg-slate-900 text-white px-6 py-3 rounded hover:bg-black transition-colors font-medium shadow-sm hover:shadow-md block mt-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Modals */}
      <div className="md:hidden">
        <AnimatePresence>
          {isWishlistOpen && <WishlistDropdown isMobile={true} />}
          {isCartOpen && <CartDropdown isMobile={true} />}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopLayout() {
    return (
        <div className="min-h-screen font-sans flex flex-col bg-gray-50/30">
            <Navbar />
            <main className="flex-grow pt-32 pb-20"> {/* Higher padding for shop page */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutLayout() {
    return (
        <div className="min-h-screen font-sans flex flex-col bg-white">
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 to account for fixed navbar */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

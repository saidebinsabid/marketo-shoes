import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

export default function HomeLayout() {
    return (
        <div className="min-h-screen font-sans">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

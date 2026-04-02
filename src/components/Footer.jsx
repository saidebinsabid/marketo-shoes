import React from 'react';
import { FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaGlobe, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#f4f4f4] pt-16">
            <div className="w-full mx-auto px-8 md:px-16 lg:px-24 xl:px-32 relative">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 lg:pr-12">
                    
                    {/* Column 1: Company Info */}
                    <div className="flex flex-col space-y-5">
                        <p className="text-[13px] lg:text-[15px] leading-relaxed text-gray-500 pr-4">
                            Company guarantee secured transaction by signing a debt guarantee guarantee contract with Bank for the amount of cash payment by the customer
                        </p>
                        <p className="text-[13px] lg:text-[15px] leading-relaxed text-gray-500 pr-4">
                            17 Princess Road, London, Greater<br />
                            London NW1 8JR, UK
                        </p>
                        <div>
                            <button className="bg-[#cc001b] hover:bg-red-800 transition-colors text-white text-[12px] lg:text-[14px] font-bold px-6 py-3 flex items-center gap-2 rounded-sm mt-2">
                                <FaMapMarkerAlt />
                                View On Map
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Our Stores */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold text-gray-800 text-[15px] lg:text-[18px] mb-2">Our Stores</h4>
                        <ul className="space-y-3">
                            {['New York', 'London SF', 'Cockfosters BP', 'Los Angeles', 'Chicago', 'Las Vegas', 'Albarto'].map(store => (
                                <li key={store}>
                                    <a href="#" className="text-[13px] lg:text-[15px] text-gray-500 hover:text-red-600 transition-colors">{store}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold text-gray-800 text-[15px] lg:text-[18px] mb-2">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-[13px] lg:text-[15px] text-blue-500 hover:underline">Support Center</a></li>
                            {['Term & Conditions', 'Shipping', 'Privacy Policy', 'Help', 'Products Return', 'FAQS'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[13px] lg:text-[15px] text-gray-500 hover:text-red-600 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Subscribe */}
                    <div className="flex flex-col space-y-4">
                        <h4 className="font-bold text-gray-800 text-[15px] lg:text-[18px] mb-2">Subscribe</h4>
                        <p className="text-[13px] lg:text-[15px] leading-relaxed text-gray-500">
                            Don't miss to subscribe to our new feeds, kindly fill the form below. Company guarantee secured transaction by signing a debt guarantee guarantee contract
                        </p>
                        
                        {/* Back to Top - Vertical, right aligned */}
                        <div className="pt-4 flex justify-end">
                            <div 
                                onClick={scrollToTop}
                                className="inline-flex flex-col w-fit bg-[#5fb710] text-white cursor-pointer hover:bg-green-600 transition-colors items-center justify-center py-4 px-3 rounded-sm shadow-sm gap-3"
                            >
                                <FaArrowUp className="text-[13px]" />
                                <span 
                                    className="text-[9px] font-bold tracking-widest uppercase"
                                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                                >
                                    BACK TOP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-gray-200 bg-white md:bg-transparent">
                <div className="w-full mx-auto px-8 md:px-16 lg:px-24 xl:px-32 py-5 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-[12px] lg:text-[14px] text-gray-400 mb-4 md:mb-0">
                        Copyrights By Saide Bin Sabid - 2026
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/in/saide-bin-sabid/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="https://github.com/saidebinsabid" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all">
                            <FaGithub size={14} />
                        </a>
                        <a href="https://saide-bin-sabid.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white transition-all">
                            <FaGlobe size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile floating Back to Top button */}
            <div 
                onClick={scrollToTop}
                className="lg:hidden fixed bottom-6 right-6 bg-[#5fb710] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors z-50"
            >
                <FaArrowUp />
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { FaCarSide, FaUsers } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

const ServicesSection = () => {
    const services = [
        { id: 1, icon: FaCarSide, title: "Free Delivery", subtitle: "from $70", iconSize: "36px" },
        { id: 2, icon: FaUsers, title: "99% Customer", subtitle: "feedbacks", iconSize: "32px" },
        { id: 3, icon: FiRefreshCcw, title: "10 Days", subtitle: "for free return", iconSize: "30px" },
        { id: 4, icon: RiSecurePaymentLine, title: "Payment", subtitle: "secure system", iconSize: "35px" },
        { id: 5, icon: BiSupport, title: "24/7", subtitle: "online supports", iconSize: "35px" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            <div className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between items-stretch gap-4 sm:gap-5 lg:gap-0 lg:bg-white lg:border lg:border-gray-100/50 lg:shadow-[0_2px_20px_rgb(0,0,0,0.03)] lg:divide-x divide-gray-100">
                {services.map(service => (
                    <div 
                        key={service.id} 
                        className="flex items-center gap-3 sm:gap-4 py-4 px-5 sm:px-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 rounded-sm w-auto flex-grow-0 lg:flex-1 lg:bg-transparent lg:border-none lg:shadow-none lg:rounded-none lg:py-8 lg:px-6 justify-start lg:justify-center group relative cursor-pointer hover:shadow-md hover:-translate-y-1 lg:hover:bg-white lg:hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] lg:hover:-translate-y-2 lg:hover:z-10"
                    >
                        <service.icon className="text-red-600 flex-shrink-0 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ease-out" style={{ fontSize: service.iconSize }} />
                        <div className="whitespace-nowrap">
                            <h4 className="font-bold text-gray-800 text-[14px] sm:text-[15px] leading-tight group-hover:text-red-600 transition-colors duration-300">{service.title}</h4>
                            <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5 group-hover:text-gray-600 transition-colors duration-300">{service.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;

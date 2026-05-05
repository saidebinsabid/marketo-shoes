import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const ContactInfoCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="bg-red-50 text-red-500 p-5 rounded-2xl mb-2">
                    <FiMapPin className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Store</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">123 Shoe Street<br />Fashion Avenue<br />New York, NY 10001</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-50 text-blue-500 p-5 rounded-2xl mb-2">
                    <FiMail className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Email Us</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">support@marketoshoes.com<br />sales@marketoshoes.com</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="bg-emerald-50 text-emerald-500 p-5 rounded-2xl mb-2">
                    <FiPhone className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Call Us</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoCards;

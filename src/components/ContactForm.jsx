import React from 'react';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl shadow-2xl shadow-slate-200/50 border border-gray-100 relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Send us a Message</h2>
                    <p className="text-gray-500">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                            <input type="text" placeholder="John" className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                            <input type="text" placeholder="Doe" className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Subject</label>
                        <input type="text" placeholder="How can we help?" className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900" />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                        <textarea rows="5" placeholder="Write your message here..." className="w-full bg-slate-50/50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-slate-900 resize-none"></textarea>
                    </div>

                    <button type="submit" className="bg-slate-900 text-white font-bold text-lg py-4 px-8 rounded-xl flex items-center justify-center gap-3 hover:bg-red-600 transition-colors mt-4 shadow-lg shadow-slate-900/20">
                        <FiSend className="w-5 h-5" /> Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

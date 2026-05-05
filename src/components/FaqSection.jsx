import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const FaqSection = ({ faqs }) => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-500">Find quick answers to common questions about our shoes and services.</p>
            </div>

            <div className="flex flex-col gap-4">
                {faqs && faqs.length > 0 ? (
                    faqs.map((faq) => (
                        <div key={faq.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <button 
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                                <div className={`text-slate-400 transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180 text-red-500' : ''}`}>
                                    <FiChevronDown className="w-5 h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openFaq === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No FAQs available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default FaqSection;

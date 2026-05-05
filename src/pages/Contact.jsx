import React from 'react';
import { useLoaderData } from 'react-router';
import ContactHeader from '../components/ContactHeader';
import ContactInfoCards from '../components/ContactInfoCards';
import ContactForm from '../components/ContactForm';
import FaqSection from '../components/FaqSection';

const Contact = () => {
    const faqs = useLoaderData();

    return (
        <div className="bg-slate-50 min-h-screen py-16 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <ContactHeader />
                <div className="mb-24">
                    <ContactInfoCards />
                    <ContactForm />
                </div>
                <FaqSection faqs={faqs} />
            </div>
        </div>
    );
};

export default Contact;

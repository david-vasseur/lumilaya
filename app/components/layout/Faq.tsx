"use client"

import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Script from 'next/script';
import { faqs } from '@/app/data';

function Faq() {

    const [isVisible, setIsVisible] = useState(false);
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold: 0.1 }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const toggleQuestion = (id: number) => {
        setOpenQuestion(openQuestion === id ? null : id);
    };

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "about": faq.about,
            "keywords": faq.keywords,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.split(';').map((s: string) => s.trim()).join('<br>')
            }
        }))
    };

    return (
        <section 
            ref={sectionRef}
            className="w-full bg-linear-to-t from-zinc-600 to-zinc-300 py-16 lg:py-24"
        >
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl text-teal-800 font-merry font-black mb-4">On nous demande souvent...</h2>
                </div>

                <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                    key={faq.id}
                    className={`bg-pink-50 rounded-xl overflow-hidden transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <button
                            onClick={() => toggleQuestion(faq.id)}
                            className="cursor-pointer w-full px-6 py-4 text-left flex items-center justify-between hover:bg-pink-100 transition-colors duration-300"
                        >
                            <span className=" text-gray-900 font-merry font-bold">{faq.question}</span>
                            <ChevronDown 
                                className={`flex-none w-5 h-5 text-teal-600 transform transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${openQuestion === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className={`px-6 pb-4 pt-2 text-gray-700 font-merry`}>{faq.answer}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ChevronRight, Leaf, Sparkles } from 'lucide-react'
import Link from 'next/link';

function Bento() {

    useGSAP(() => {

        gsap.from('.brand-text', {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.brand-section',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1
        }
      });

      gsap.from('.category-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.categories-section',
            start: 'top 70%'
        }
      });

    })

    return (
        <>
            <section className="brand-section py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="brand-text text-2xl md:text-3xl font-light text-[#2C2C2C] leading-relaxed">
                        Chaque bougie <span className="italic font-extrabold">LUMILAYA</span> est une invitation au voyage sensoriel,
                        fabriquée à la main avec des ingrédients 100% naturels et des mèches en coton bio.
                    </p>
                </div>
            </section>

            <section className="categories-section py-20 px-6 bg-linear-to-b from-[#FDFBF7] to-[#F5F1EB]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-16 tracking-wide">
                        Nos Collections
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href={"/bougies-emotions"}
                            className="category-card group relative h-[500px] rounded-lg overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors duration-500" />
                            <div className="relative h-full flex flex-col items-center justify-center p-8 text-[#FDFBF7]">
                                <Leaf className="w-16 h-16 mb-6 opacity-90" />
                                <h3 className="text-3xl font-light mb-4 tracking-wider">Bougies Emotions & Plaisirs</h3>
                                <p className="text-center opacity-90 max-w-sm">
                                Cire végétale pure, essences botaniques brutes, pour une atmosphère authentique
                                </p>
                                <span className="mt-8 flex items-center gap-2 text-sm tracking-wide opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                                    Explorer <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>

                        <Link
                            href={"/bougies-parfumees"}
                            className="category-card group relative h-[500px] rounded-lg overflow-hidden"
                            >
                            <div className="absolute inset-0 bg-linear-to-br from-[#D4C5B9] to-[#B4A59A] group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors duration-500" />
                            <div className="relative h-full flex flex-col items-center justify-center p-8 text-[#FDFBF7]">
                                <Sparkles className="w-16 h-16 mb-6 opacity-90" />
                                <h3 className="text-3xl font-light mb-4 tracking-wider">Bougies Entre Terre & Ciel</h3>
                                <p className="text-center opacity-90 max-w-sm">
                                Compositions olfactives raffinées, notes envoûtantes, pour une expérience luxueuse
                                </p>
                                <span className="mt-8 flex items-center gap-2 text-sm tracking-wide opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                                Explorer <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bento
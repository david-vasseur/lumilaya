"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ChevronRight, Leaf, Sparkles } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

function Bento() {

    const brandRef = useRef(null);
    const spanRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {

        gsap.to(brandRef.current, {
            y: -200,
            duration: 1,
            scrollTrigger: {
                trigger: '.brand-section',
                start: 'top 70%',
                end: 'top 40%',
                scrub: 1
            }
        })

        gsap.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'top 60%',
                scrub: 1
            }
        })

        gsap.fromTo(spanRef.current, 
            { scaleX: 0 },
            { scaleX: 1, scrollTrigger: {
                    trigger: spanRef.current,
                    start: 'top 90%',
                    end: 'top 30%',
                    scrub: 1
                }  }
        )

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
            <section id="boutique" className="brand-section relative z-5 py-32 px-6">
                <div ref={brandRef} className="max-w-4xl relative mx-auto text-center bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E] px-10 py-20 overflow-hidden rounded-lg shadow-xl">
                    <p className="brand-text relative text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed z-2">
                        Chaque bougie <span className="font-ballet text-4xl md:text-5xl">Lumi'laya</span> est une invitation au voyage sensoriel,
                        fabriquée à la main avec des ingrédients 100% naturels et des mèches en coton bio.
                    </p>
                    <Image src={"/images/footer.webp"} fill alt='logo' className="z-0 object-contain" />
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                <h2 ref={titleRef} className="text-4xl relative z-0 text-gray-600 text-center tracking-wide">
                    Nos Collections
                </h2>
            </div>
            <span ref={spanRef} className="block relative z-2 w-2/3 h-1 mx-auto bg-linear-to-r from-transparent via-[#5A7B6E] to-transparent"></span>
            <span className="block relative z-2 w-2/3 h-15 mx-auto bg-[#FDFBF7]"></span>

            <section className="categories-section py-20 px-6">
                
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Link
                            href={"/bougies-emotions"}
                            className="category-card group relative h-[500px] rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image src={"/images/produits/plaisir.webp"} fill alt='image Emotion & Plaisir' className="group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors duration-500" />
                            <div className="relative h-full flex flex-col items-center justify-center p-8 text-[#FDFBF7]">
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
                            href={"/bougies-rituel"}
                            className="category-card group relative h-[500px] rounded-lg overflow-hidden shadow-xl"
                            >
                                <Image src={"/images/produits/terre.webp"} fill alt='image Emotion & Plaisir' className="group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-[#2C2C2C]/20 group-hover:bg-[#2C2C2C]/10 transition-colors duration-500" />
                            <div className="relative h-full flex flex-col items-center justify-center p-8 text-[#FDFBF7]">
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
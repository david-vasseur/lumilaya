"use client"

import { IProduct } from '@/type/product';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

interface IBest {
    products: IProduct[];
}

function Best({ products }: IBest) {

    const spanRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {

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

        gsap.from('.product-card', {
            y: 80,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.bestsellers-section',
                start: 'top 70%'
            }
        });

    }, [])

    return (
        <section id='best-seller' className="bestsellers-section py-32 px-6 bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E]">
            <div className="max-w-7xl mx-auto">
                <h2 ref={titleRef} className="text-4xl relative z-0 text-gray-600 text-center tracking-wide">
                    Best-Sellers
                </h2>
                <span ref={spanRef} className="block relative z-2 w-2/4 h-1 mx-auto bg-linear-to-r from-transparent via-[#5A7B6E] to-transparent"></span>
                <span className="block relative z-2 w-2/3 h-15 mx-auto bg-transparent "></span>

                <div className="grid md:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                    <div key={index} className="product-card group cursor-pointer">
                        <Link href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`} className={`mb-4 p-10`}>
                            <div className="relative w-full h-80 border border-zinc-400 shadow-xl rounded-lg overflow-hidden p-10">
                                <Image fill src={product.images[0]} alt='image bougie' className="object-cover group-hover:scale-105 duration-700 transition-all" />
                                <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block bg-[#FDFBF7]/90 text-[#2C2C2C] text-xs px-3 py-1 rounded-full">
                                {product.collection === "Terre" ? "Entre Terre & Ciel" : "Emotions & Plaisirs"}
                                </span>
                                <div className="absolute inset-0 bg-[#2C2C2C]/5 group-hover:bg-[#2C2C2C]/0 transition-colors duration-500" />
                            </div>
                            </div>                         
                            
                            
                        </Link>
                        <h3 className="text-lg font-light text-[#2C2C2C] mb-1">{product.name}</h3>
                        <p className="text-[#2C2C2C]/60 text-sm">{product.variants[0].price.toFixed(2)} €</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Best;
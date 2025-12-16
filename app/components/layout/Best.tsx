"use client"

import { IProduct } from '@/type/product';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ShoppingCart, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

interface IBest {
    products: IProduct[];
}

function Best({ products }: IBest) {

    const [activeSlide, setActiveSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && activeSlide < products.length - 1) {
            setActiveSlide(prev => prev + 1);
        }
        if (isRightSwipe && activeSlide > 0) {
            setActiveSlide(prev => prev - 1);
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    const handleAddToCart = (e: React.MouseEvent, product: IProduct) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Ajouté au panier:', product.name);
        // Logique d'ajout au panier ici
    };

    return (
        <section id='best-seller' className="bestsellers-section relative py-20 md:py-32 overflow-hidden">
            {/* Background splitté */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#FDFBF7]" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#7A9B8E]/10 to-transparent" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#7A9B8E]/5 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 ref={titleRef} className="text-4xl md:text-5xl font-light text-[#2C2C2C] tracking-wide mb-4">
                        Nos Best-Sellers
                    </h2>
                    <span ref={spanRef} className="block w-24 h-0.5 mx-auto bg-linear-to-r from-transparent via-[#7A9B8E] to-transparent" />
                    <p className="mt-6 text-[#2C2C2C]/70 max-w-2xl mx-auto">
                        Les bougies préférées de notre communauté, élues pour leur parfum envoûtant et leur qualité exceptionnelle
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="product-card group">
                            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                {/* Image Container */}
                                <Link 
                                    href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                    className="block relative"
                                >
                                    <div className="relative w-full h-80 overflow-hidden">
                                        <Image 
                                            fill 
                                            src={product.images[0]} 
                                            alt={product.name}
                                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Badge Collection */}
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#2C2C2C] text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                                                <Sparkles className="w-3 h-3 text-[#7A9B8E]" />
                                                {product.collection === "Terre" ? "Entre Terre & Ciel" : "Émotions & Plaisirs"}
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                {/* Content */}
                                <div className="p-6">
                                    <Link 
                                        href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                    >
                                        <h3 className="text-xl font-light text-[#2C2C2C] mb-2 group-hover:text-[#7A9B8E] transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <p className="text-2xl font-medium text-[#7A9B8E] mb-6">
                                        {product.variants[0].price.toFixed(2)} €
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#7A9B8E] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#6A8B7E] transition-all duration-300 hover:shadow-lg hover:scale-105"
                                        >
                                            <ShoppingCart className="w-4 h-4" />
                                            Ajouter
                                        </button>
                                        <Link
                                            href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                            className="flex-1 flex items-center justify-center border-2 border-[#7A9B8E] text-[#7A9B8E] px-4 py-3 rounded-xl font-medium hover:bg-[#7A9B8E] hover:text-white transition-all duration-300"
                                        >
                                            Découvrir
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden relative">
                    <div 
                        ref={carouselRef}
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{ 
                                transform: `translateX(-${activeSlide * (100)}%)`,
                                paddingRight: '20%'
                            }}
                        >
                            {products.map((product, index) => (
                                <div 
                                    key={index} 
                                    className="w-full shrink-0 px-4"
                                    style={{ 
                                        opacity: index === activeSlide ? 1 : 0.5,
                                        transition: 'opacity 0.5s'
                                    }}
                                >
                                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                        {/* Image Container */}
                                        <Link 
                                            href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                            className="block relative"
                                        >
                                            <div className="relative w-full h-96 overflow-hidden">
                                                <Image 
                                                    fill 
                                                    src={product.images[0]} 
                                                    alt={product.name}
                                                    className="object-cover" 
                                                />
                                                
                                                {/* Badge Collection */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#2C2C2C] text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                                                        <Sparkles className="w-3 h-3 text-[#7A9B8E]" />
                                                        {product.collection === "Terre" ? "Entre Terre & Ciel" : "Émotions & Plaisirs"}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Content */}
                                        <div className="p-6">
                                            <Link 
                                                href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                            >
                                                <h3 className="text-xl font-light text-[#2C2C2C] mb-2">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="text-2xl font-medium text-[#7A9B8E] mb-6">
                                                {product.variants[0].price.toFixed(2)} €
                                            </p>

                                            {/* CTA Buttons */}
                                            <div className="flex gap-3">
                                                <button
                                                    onClick={(e) => handleAddToCart(e, product)}
                                                    className="flex-1 flex items-center justify-center gap-2 bg-[#7A9B8E] text-white px-4 py-3.5 rounded-xl font-medium active:scale-95 transition-transform shadow-lg"
                                                >
                                                    <ShoppingCart className="w-4 h-4" />
                                                    Ajouter
                                                </button>
                                                <Link
                                                    href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`}
                                                    className="flex-1 flex items-center justify-center border-2 border-[#7A9B8E] text-[#7A9B8E] px-4 py-3.5 rounded-xl font-medium active:scale-95 transition-transform"
                                                >
                                                    Découvrir
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === activeSlide 
                                        ? 'w-8 bg-[#7A9B8E]' 
                                        : 'w-2 bg-[#7A9B8E]/30'
                                }`}
                                aria-label={`Aller à la slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Best;
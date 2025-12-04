"use client"

import { IProduct } from '@/type/product';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

interface IBest {
    products: IProduct[];
}

function Best({ products }: IBest) {

    // const [isPending, startTransition] = useTransition();

    // const handleClick = () => {
    //     startTransition(async () => {
    //   await seedProduct(); // appel côté serveur
    //   alert("Produit Tendresse ajouté !");
    // });
    // };

    useGSAP(() => {

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

        gsap.from('.ethic-item', {
            x: -60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.ethic-section',
                start: 'top 70%'
            }
        });

    }, [])

    return (
        <section className="bestsellers-section py-32 px-6 bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl relative z-0 text-gray-600 text-center tracking-wide mb-4">
                    Best-Sellers
                </h2>
                <p className="text-center text-[#2C2C2C]/60 mb-16">
                    Les créations préférées de notre communauté
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                    <div key={index} className="product-card group cursor-pointer">
                        <Link href={product.collection === "Terre" ? `bougies-rituel/${product.slug}` : `bougies-emotions/${product.slug}`} className={`mb-4 p-10`}>
                            <div className="relative w-full h-80 border border-zinc-400 shadow-xl rounded-lg overflow-hidden p-10">
                                <Image fill src={product.images[0]} alt='image bougie' className="object-cover group-hover:scale-105 duration-700 transition-all" />
                                <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block bg-[#FDFBF7]/90 text-[#2C2C2C] text-xs px-3 py-1 rounded-full">
                                {product.collection === "Terre" ? "Entre Terre & Ciel" : "Emotion & Plaisir"}
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
            {/* <div>
                <button
                    onClick={handleClick}
                    disabled={isPending}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                    >
                    {isPending ? "En cours..." : "Ajouter le produit Tendresse"}
                </button>
            </div> */}
        </section>
    )
}

export default Best
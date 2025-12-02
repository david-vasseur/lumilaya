"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Best() {

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
        <section className="bestsellers-section py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-4 tracking-wide">
                    Best-Sellers
                </h2>
                <p className="text-center text-[#2C2C2C]/60 mb-16">
                    Les créations préférées de notre communauté
                </p>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                    { name: 'Forêt d\'Eucalyptus', type: 'Naturelle', color: 'from-[#7A9B8E]' },
                    { name: 'Rose de Mai', type: 'Parfumée', color: 'from-[#D4C5B9]' },
                    { name: 'Lavande Provençale', type: 'Naturelle', color: 'from-[#7A9B8E]' },
                    { name: 'Figue & Bois de Cèdre', type: 'Parfumée', color: 'from-[#D4C5B9]' }
                    ].map((product, index) => (
                    <div key={index} className="product-card group cursor-pointer">
                        <div className={`relative h-80 mb-4 rounded-lg overflow-hidden bg-linear-to-br ${product.color} to-[#F5F1EB]`}>
                            <div className="absolute inset-0 bg-[#2C2C2C]/5 group-hover:bg-[#2C2C2C]/0 transition-colors duration-500" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="inline-block bg-[#FDFBF7]/90 text-[#2C2C2C] text-xs px-3 py-1 rounded-full">
                                {product.type}
                                </span>
                            </div>
                            </div>
                            <h3 className="text-lg font-light text-[#2C2C2C] mb-1">{product.name}</h3>
                            <p className="text-[#2C2C2C]/60 text-sm">42€</p>
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
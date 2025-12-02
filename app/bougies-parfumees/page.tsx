"use client"

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Clock, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Rose de Mai',
    description: 'Florale et élégante',
    duration: '50h',
    price: '48€',
    signature: true
  },
  {
    name: 'Figue & Bois de Cèdre',
    description: 'Fruitée et boisée',
    duration: '48h',
    price: '46€',
    signature: false
  },
  {
    name: 'Vanille Bourbon',
    description: 'Gourmande et enveloppante',
    duration: '52h',
    price: '50€',
    signature: true
  },
  {
    name: 'Agrumes & Bergamote',
    description: 'Pétillante et lumineuse',
    duration: '45h',
    price: '44€',
    signature: false
  },
  {
    name: 'Jasmin & Néroli',
    description: 'Sensuelle et raffinée',
    duration: '50h',
    price: '49€',
    signature: true
  },
  {
    name: 'Ambre & Patchouli',
    description: 'Orientale et mystérieuse',
    duration: '55h',
    price: '52€',
    signature: false
  },
  {
    name: 'Pivoine & Musc Blanc',
    description: 'Délicate et poudrée',
    duration: '48h',
    price: '47€',
    signature: false
  },
  {
    name: 'Oud & Cuir',
    description: 'Intense et sophistiquée',
    duration: '60h',
    price: '58€',
    signature: true
  }
];

function BougiesParfumees() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.page-subtitle', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
      });

      gsap.from('.product-grid-card', {
        y: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 70%'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-[#D4C5B9]" />
            <h1 className="page-title text-5xl font-light text-[#2C2C2C] tracking-wide">
              Bougies Parfumées
            </h1>
          </div>
          <p className="page-subtitle text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto leading-relaxed">
            Des compositions olfactives raffinées et envoûtantes.
            Élaborées par des maîtres parfumeurs, nos créations signature transforment votre intérieur en un sanctuaire de luxe.
          </p>
        </div>

        <div className="products-grid grid md:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-grid-card group cursor-pointer"
            >
              <div className="relative h-96 mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-[#D4C5B9] to-[#B4A59A] transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-[#2C2C2C]/10 group-hover:bg-[#2C2C2C]/5 transition-colors duration-500" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block bg-[#FDFBF7]/90 text-[#2C2C2C] text-xs px-3 py-1 rounded-full">
                    Parfumée
                  </span>
                  {product.signature && (
                    <div className="bg-[#2C2C2C]/80 text-[#FDFBF7] text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>Signature</span>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-[#FDFBF7]">
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock className="w-4 h-4" />
                    <span>{product.duration}</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-[#FDFBF7]/20 group-hover:text-[#FDFBF7]/40 transition-colors duration-500" />
                </div>
              </div>

              <h3 className="text-lg font-light text-[#2C2C2C] mb-1">
                {product.name}
              </h3>
              <p className="text-[#2C2C2C]/60 text-sm mb-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#2C2C2C] font-normal">{product.price}</span>
                <button className="text-[#D4C5B9] hover:text-[#2C2C2C] text-sm transition-colors">
                  Voir le produit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#D4C5B9]/20 to-[#7A9B8E]/10 rounded-lg p-12 text-center">
          <Sparkles className="w-12 h-12 text-[#D4C5B9] mx-auto mb-6" />
          <h2 className="text-2xl font-light text-[#2C2C2C] mb-4">
            L'art de la parfumerie
          </h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto leading-relaxed">
            Chaque fragrance est une invitation au voyage. Nos compositions exclusives allient tradition et modernité,
            créant des accords olfactifs uniques qui éveilleront vos sens et sublimeront votre quotidien.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BougiesParfumees;

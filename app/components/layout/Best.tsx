"use client";

import { IProduct } from "@/type/product";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShoppingCart, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IBest {
  products: IProduct[];
}

function Best({ products }: IBest) {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  /* --------------------------------
     GSAP – animation card active
  --------------------------------- */
  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.to(card, {
        scale: index === activeIndex ? 1 : 0.95,
        opacity: index === activeIndex ? 1 : 0.6,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  }, [activeIndex]);

  /* --------------------------------
     IntersectionObserver – mobile
  --------------------------------- */
  useEffect(() => {
    if (!mobileTrackRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: mobileTrackRef.current,
        threshold: 0.6,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  /* --------------------------------
     Scroll to card (dots)
  --------------------------------- */
  const scrollToCard = (index: number) => {
    cardsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  return (
    <section
      id="best-seller"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* ---------------- Header ---------------- */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4">
          Nos Best-Sellers
        </h2>
        <span className="block w-24 h-0.5 mx-auto bg-[#7A9B8E]" />
        <p className="mt-6 text-[#2C2C2C]/70 max-w-2xl mx-auto">
          Les bougies préférées de notre communauté
        </p>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg">
            <Link href={`/bougies-${product.collection === "Terre" ? "rituel" : "emotions"}/${product.slug}`}>
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <Image
                  fill
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover"
                />
              </div>
            </Link>

            <div className="p-6">
              <h3 className="text-xl font-light mb-2">{product.name}</h3>
              <p className="text-2xl font-medium text-[#7A9B8E] mb-4">
                {product.variants[0].price.toFixed(2)} €
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="md:hidden">
        <div
          ref={mobileTrackRef}
          className="
            flex gap-[5vw]
            overflow-x-auto
            scroll-snap-x
            scroll-snap-mandatory
            px-[10vw]
            scrollbar-hide
            py-6
          "
        >
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => {(cardsRef.current[index] = el)}}
              data-index={index}
              className="
                w-[80vw]
                shrink-0
                scroll-snap-center
              "
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Image */}
                <Link
                  href={`/bougies-${product.collection === "Terre" ? "rituel" : "emotions"}/${product.slug}`}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      fill
                      src={product.images[0]}
                      alt={product.name}
                      className="object-cover"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1 bg-white/90 px-3 py-1.5 rounded-full text-xs">
                        <Sparkles className="w-3 h-3 text-[#7A9B8E]" />
                        {product.collection === "Terre"
                          ? "Entre Terre & Ciel"
                          : "Émotions & Plaisirs"}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">
                    {product.name}
                  </h3>

                  <p className="text-2xl font-medium text-[#7A9B8E] mb-6">
                    {product.variants[0].price.toFixed(2)} €
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#7A9B8E] text-white py-3 rounded-xl">
                      <ShoppingCart className="w-4 h-4" />
                      Ajouter
                    </button>

                    <Link
                      href={`/bougies-${product.collection === "Terre" ? "rituel" : "emotions"}/${product.slug}`}
                      className="flex-1 flex items-center justify-center border-2 border-[#7A9B8E] text-[#7A9B8E] py-3 rounded-xl"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- Dots ---------------- */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#7A9B8E]"
                  : "w-2 bg-[#7A9B8E]/30"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Best;

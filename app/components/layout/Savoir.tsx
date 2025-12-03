"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SavoirFaire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        },
      });

      // Panel 2 → slide from right over panel 1
      tl.fromTo(
        panelsRef.current[1],
        { x: "100%", opacity: 1 },
        { x: "0%", opacity: 1, duration: 1, ease: "power1.out" }
      );

      // Panel 4 → slide from bottom over panel 2
      tl.fromTo(
        panelsRef.current[2],
        { y: "100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 1, ease: "power1.out" }
      );

      // Animate text with SplitText
      panelsRef.current.forEach((panel) => {
        const split = new SplitText(panel.querySelector(".text"), {
          type: "lines,words,chars",
        });

        const images = gsap.utils.toArray(imagesRef.current)

        gsap.fromTo(images, 
          { scale: 0.4 },
          { scale: 3,stagger: 0.05, scrollTrigger: {
            trigger: panelsRef.current[0],
            start: "top 80%",
            end: "bottom -=125%",
            scrub: 0.5,
          }, }
        )

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
          opacity: 0,
          y: 20,
          stagger: 0.05,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[200vh] overflow-hidden"
        >
        {/* Panel 1 */}
        <div
            ref={(el) => {(panelsRef.current[0] = el!)}}
            className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 overflow-hidden px-4"
        >
            {/* Texte */}
            <div className="text-center bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E] p-10 rounded-lg max-w-xl shadow-lg z-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-600">
                Fabrication artisanale
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                Chaque création est conçue avec soin, utilisant uniquement des ingrédients naturels et locaux, pour garantir qualité et authenticité.
                </p>
            </div>

            {/* Images */}
            <img
            ref={(el) => {(imagesRef.current[0] = el!)}}
                src="/images/produits/liberation.webp"
                alt="Artisan 1"
                className="absolute w-32 md:w-48 top-[20%] left-[10%] rotate-[-10deg] shadow-xl"
            />
            <img
            ref={(el) => {(imagesRef.current[1] = el!)}}
                src="/images/produits/ancrage.webp"
                alt="Artisan 2"
                className="absolute w-32 md:w-48 top-[50%] right-[15%] rotate-[5deg] shadow-xl"
            />
            <img
            ref={(el) => {(imagesRef.current[2] = el!)}}
                src="/images/produits/douceur.webp"
                alt="Artisan 3"
                className="absolute w-32 md:w-48 bottom-[15%] left-[50%] -translate-x-1/2 rotate-[-5deg] shadow-xl"
            />
        </div>

      {/* Panel 2 */}
      <div
        ref={(el) => {(panelsRef.current[1] = el!)}}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E] z-20"
      >
        <div className="text text-4xl font-bold text-center px-4">
          Ingrédients naturels
        </div>
        <img
          src="/images/natural.png"
          alt="Ingrédients naturels"
          className="absolute bottom-10 right-10 w-1/3"
        />
      </div>

      {/* Panel 4 */}
      <div
        ref={(el) => {(panelsRef.current[2] = el!)}}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-blue-200 z-30"
      >
        <div className="text text-4xl font-bold text-center px-4">
          Création locale
        </div>
        <img
          src="/images/local.png"
          alt="Création locale"
          className="absolute top-10 left-10 w-1/3"
        />
      </div>
    </div>
  );
}


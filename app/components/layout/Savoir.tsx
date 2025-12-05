"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

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
        { y: "100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 1, ease: "power1.out" }
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
            end: "top 70%",
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
    className="relative w-full h-[200vh] overflow-hidden bg-[#FDFBF7]"
  >

    {/* PANEL 1 — INGRÉDIENTS */}
    <div
      ref={(el) => {(panelsRef.current[0] = el!)}}
      className="absolute inset-0 h-screen flex flex-col items-center justify-center z-10 px-6"
    >
      <div className="max-w-2xl text-center space-y-6">
        <span className="text-[#7A9B8E] text-sm tracking-widest uppercase">
          Qualité & sécurité
        </span>

        <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] text text">
          🌿 Ingrédients sains & naturels
        </h2>

        <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
          Des cires végétales, des mèches en coton et des parfums soigneusement
          sélectionnés pour respecter votre air, votre intérieur et votre
          bien-être.
        </p>
      </div>

      <img
        ref={(el) => {(imagesRef.current[0] = el!)}}
        src="/images/landing/savoir1.webp"
        className="absolute w-40 md:w-56 bottom-[10%] left-[10%] rotate-[-6deg] shadow-2xl rounded-xl"
        alt="Ingrédients naturels"
      />
    </div>

    {/* PANEL 2 — FAIT MAIN */}
    <div
      ref={(el) => {(panelsRef.current[1] = el!)}}
      className="absolute inset-0 h-screen flex flex-col items-center justify-center bg-[#F4F1EC] z-20 px-6"
    >
      <div className="max-w-2xl text-center space-y-6">
        <span className="text-[#7A9B8E] text-sm tracking-widest uppercase">
          Savoir-faire
        </span>

        <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] text text">
          🕯️ Fabriqué à la main en France
        </h2>

        <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
          Chaque bougie est coulée artisanalement, en petites séries, avec une
          attention extrême portée aux détails et aux finitions.
        </p>
      </div>

      <img
        ref={(el) => {(imagesRef.current[1] = el!)}}
        src="/images/landing/savoir2.webp"
        className="absolute w-40 md:w-56 top-[18%] right-[12%] rotate-[4deg] shadow-2xl rounded-xl"
        alt="Fabrication artisanale"
      />
    </div>

    {/* PANEL 3 — LIVRAISON */}
    <div
      ref={(el) => {(panelsRef.current[2] = el!)}}
      className="absolute inset-0 h-screen flex flex-col items-center justify-center bg-[#ECE9E3] z-30 px-6"
    >
      <div className="max-w-2xl text-center space-y-6">
        <span className="text-[#7A9B8E] text-sm tracking-widest uppercase">
          Expérience client
        </span>

        <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] text text">
          🚚 Expédition rapide & soignée
        </h2>

        <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
          Vos commandes sont préparées avec attention, emballées avec soin et
          expédiées rapidement pour une expérience irréprochable.
        </p>
      </div>

      <img
        ref={(el) => {(imagesRef.current[2] = el!)}}
        src="/images/landing/savoir3.webp"
        className="absolute w-40 md:w-56 bottom-[12%] right-[15%] rotate-[-3deg] shadow-2xl rounded-xl"
        alt="Livraison soignée"
      />
    </div>

  </div>
);
}



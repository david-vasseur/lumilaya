"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const images = [image3Ref.current, image2Ref.current, image1Ref.current];

    // gsap.fromTo(
    //   images,
    //   {
    //     scale: 0.8,
    //     opacity: 0,
    //     y: 100,
    //   },
    //   {
    //     scale: 1,
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.2,
    //     stagger: 0.2,
    //     ease: 'power3.out',
    //   }
    // );

    // gsap.to(image1Ref.current, {
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: 1,
    //   },
    //   y: 150,
    //   ease: 'none',
    // });

    // gsap.to(image2Ref.current, {
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: 1,
    //   },
    //   y: 100,
    //   ease: 'none',
    // });

    // gsap.to(image3Ref.current, {
    //   scrollTrigger: {
    //     trigger: heroRef.current,
    //     start: 'top top',
    //     end: 'bottom top',
    //     scrub: 1,
    //   },
    //   y: 50,
    //   ease: 'none',
    // });
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden bg-[url('/images/test2.465Z.png')] bg-cover bg-no-repeat bg-right">
      <div className="absolute inset-0 -translate-y-1/6 flex items-center justify-center">
        {/* <div className="relative w-full max-w-6xl h-[600px]">
          <div
            ref={image3Ref}
            className="absolute left-[10%] top-[10%] w-[350px] h-[450px] rounded-lg overflow-hidden shadow-2xl z-10"
          >
            <img
              src="/images/image_1.png"
              alt="Bougie naturelle"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={image2Ref}
            className="absolute left-[35%] top-[20%] w-[400px] h-[500px] rounded-lg overflow-hidden shadow-2xl z-20"
          >
            <img
              src="/images/image_3.png"
              alt="Collection de bougies"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={image1Ref}
            className="absolute right-[10%] top-[15%] w-[380px] h-[480px] rounded-lg overflow-hidden shadow-2xl z-30"
          >
            <img
              src="/images/image_2.png"
              alt="Bougie artisanale"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center z-40">
        <h1 className="text-6xl font-light text-stone-800 mb-4">Lumières Naturelles</h1>
        <p className="text-xl text-stone-600">L'art de la bougie artisanale</p>
      </div>
    </section>
  );
};

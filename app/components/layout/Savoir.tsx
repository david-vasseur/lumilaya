"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Leaf, Hand, Truck, Award, Shield, Heart, CheckCircle, Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { useDeviceStore } from "@/lib/store/deviceStore";

export default function SavoirFaire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const { isMobile } = useDeviceStore();
  console.log(isMobile);
  

useGSAP(() => {
  if (!containerRef.current) return;



  // ============================================
  // ✅ TIMELINE PANELS (SEULE PARTIE EN SCRUB)
  // ============================================
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  if (panelsRef.current[1]) {
    tl.fromTo(
      panelsRef.current[1],
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power1.out" }
    );
  }

  if (panelsRef.current[2]) {
    tl.fromTo(
      panelsRef.current[2],
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power1.out" }
    );
  }

  // ============================================
  // ✅ ANIMATIONS D’ENTRÉE TEXTES (SANS SCRUB)
  // ============================================
  // panelsRef.current.forEach(panel => {
  //   const title = panel.querySelector(".title-text");
  //   const subtitle = panel.querySelector(".subtitle-text");
  //   const desc = panel.querySelector(".description");

  //   if (title) {
  //     gsap.from(title, {
  //       opacity: 1,
  //       y: 30,
  //       duration: 0.7,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: panel,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   }

  //   if (subtitle) {
  //     gsap.from(subtitle, {
  //       opacity: 1,
  //       y: 20,
  //       duration: 0.6,
  //       delay: 0.1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: panel,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   }

  //   if (desc) {
  //     gsap.from(desc, {
  //       opacity: 1,
  //       y: 25,
  //       duration: 0.6,
  //       delay: 0.2,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: panel,
  //         start: "top 80%",
  //         toggleActions: "play none none none",
  //       },
  //     });
  //   }
  // });

  // // ============================================
  // // ✅ FEATURE CARDS (ENTRÉE SIMPLE)
  // // ============================================
  // panelsRef.current.forEach(panel => {
  //   const features = panel.querySelectorAll(".feature-card");

  //   if (!features.length) return;

  //   gsap.from(features, {
  //     opacity: 0,
  //     y: 30,
  //     scale: 0.95,
  //     duration: 0.6,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: panel,
  //       start: "top 75%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // });

  // // ============================================
  // // ✅ STATS (ENTRÉE SIMPLE)
  // // ============================================
  // panelsRef.current.forEach((panel, index) => {
  //   const stats = panel.querySelectorAll(".stat-item");

  //   if (!stats.length) return;

  //   gsap.from(stats, {
  //     opacity: 0,
  //     x: index % 2 === 0 ? -30 : 30,
  //     duration: 0.6,
  //     stagger: 0.1,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: panel,
  //       start: "top 75%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // });

  // // ============================================
  // // ✅ IMAGES (ENTRÉE SIMPLE, PLUS DE SCRUB)
  // // ============================================
  // imagesRef.current.forEach(img => {
  //   gsap.from(img, {
  //     opacity: 0,
  //     scale: 0.9,
  //     duration: 0.7,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: img,
  //       start: "top 85%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // });

  // // ============================================
  // // ✅ BADGES
  // // ============================================
  // panelsRef.current.forEach(panel => {
  //   const badge = panel.querySelector(".badge");
  //   if (!badge) return;

  //   gsap.from(badge, {
  //     opacity: 0,
  //     scale: 0,
  //     rotation: -180,
  //     duration: 0.7,
  //     ease: "back.out(2)",
  //     scrollTrigger: {
  //       trigger: panel,
  //       start: "top 80%",
  //       toggleActions: "play none none none",
  //     },
  //   });
  // });

  // // ============================================
  // // ✅ FLOATING BADGES (ANIMATION PERMANENTE)
  // // ============================================
  // panelsRef.current.forEach(panel => {
  //   const floatingBadge = panel.querySelector(".floating-badge");
  //   if (!floatingBadge) return;

  //   gsap.to(floatingBadge, {
  //     y: -15,
  //     duration: 2,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //   });
  // });
}, []);



  

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300svh] overflow-hidden"
    >
      {/* PANEL 1 — INGRÉDIENTS */}
      <div
        ref={(el) => {
          panelsRef.current[0] = el!;
        }}
        className="absolute inset-0 h-screen flex items-center justify-center  z-10 bg-linear-to-br from-[#FDFBF7] via-[#F9F6F0] to-[#F5F1EB] overflow-hidden"
      >
        {/* Background decoratif complexe */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#7A9B8E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#5A7B6E] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6A8B7E] rounded-full blur-3xl"></div>
        </div>

        {/* Pattern décoratif */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #7A9B8E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Contenu gauche - 7 colonnes sur desktop */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 pt-30 xl:pt-0">
              <div className="badge hidden xl:inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[#7A9B8E]/20">
                <Leaf className="w-5 h-5 text-[#7A9B8E]" />
                <span className="text-sm font-semibold text-[#7A9B8E] tracking-wide uppercase">
                  Qualité & Sécurité Premium
                </span>
              </div>

              <h2 className="title-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl  font-extralight text-[#2C2C2C] leading-[1.1]">
                Ingrédients sains & 100% naturels
              </h2>

              <p className="subtitle-text text-xl sm:text-2xl text-[#7A9B8E] font-light">
                La pureté au cœur de chaque création
              </p>

              <p className="description text-base sm:text-lg lg:text-xl text-[#2C2C2C]/70 leading-relaxed max-w-2xl">
                Nous sélectionnons avec une exigence absolue chaque ingrédient qui compose nos bougies. 
                Des cires végétales premium aux huiles essentielles certifiées, en passant par nos mèches 
                en coton biologique : aucun compromis n'est fait sur la qualité. Votre santé, votre bien-être 
                et celui de votre famille sont notre priorité.
              </p>

              {/* Feature cards */}
              <div className="hidden xl:grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Cire 100% végétale</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Soja et coco premium, sans OGM</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Huiles essentielles pures</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Certifiées bio, origine contrôlée</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Mèches coton bio</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Sans plomb, combustion propre</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Zéro additif</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Ni paraben, ni phtalate, ni CMR</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hidden xl:flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-[#2C2C2C]/10">
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">100%</div>
                  <div className="text-sm text-[#2C2C2C]/60">Ingrédients naturels</div>
                </div>
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">0</div>
                  <div className="text-sm text-[#2C2C2C]/60">Produit chimique</div>
                </div>
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">Bio</div>
                  <div className="text-sm text-[#2C2C2C]/60">Certification</div>
                </div>
              </div>
            </div>

            {/* Image droite - 5 colonnes sur desktop */}
            <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[650px] mt-8 lg:mt-0">
              <div className="relative w-full h-full">
                <img
                  ref={(el) => {
                    imagesRef.current[0] = el!;
                  }}
                  src="/images/landing/savoir1.webp"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                  alt="Ingrédients naturels premium"
                />
                {/* Badge flottant premium */}
                <div className="floating-badge absolute -top-4 -right-4 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl deco-icon">
                  <div className="flex flex-col items-center gap-2">
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#7A9B8E]" />
                    <span className="text-xs font-semibold text-[#2C2C2C]">Premium</span>
                  </div>
                </div>
                {/* Badge secondaire */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl p-4 sm:p-5 shadow-2xl deco-icon">
                  <div className="flex flex-col items-center gap-2 text-white">
                    <Star className="w-10 h-10 sm:w-12 sm:h-12 fill-white" />
                    <span className="text-xs font-semibold">5 étoiles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL 2 — FAIT MAIN */}
      <div
        ref={(el) => {
          panelsRef.current[1] = el!;
        }}
        className="absolute inset-0 h-screen flex items-center justify-center z-20 bg-gradient-to-br from-[#F5F1EB] via-[#F0EDE6] to-[#ECE9E3] overflow-hidden"
      >
        {/* Background decoratif */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#7A9B8E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#5A7B6E] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6A8B7E] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image gauche - 5 colonnes sur desktop */}
            <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-[650px] order-2 lg:order-1">
              <div className="relative w-full h-full">
                <img
                  ref={(el) => {
                    imagesRef.current[1] = el!;
                  }}
                  src="/images/landing/savoir2.webp"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
                  alt="Fabrication artisanale"
                />
                {/* Badge flottant */}
                <div className="floating-badge absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl deco-icon">
                  <div className="flex flex-col items-center gap-2">
                    <Hand className="w-10 h-10 sm:w-12 sm:h-12 text-[#7A9B8E]" />
                    <span className="text-xs font-semibold text-[#2C2C2C]">Artisan</span>
                  </div>
                </div>
                {/* Badge France */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#002395] to-[#ED2939] rounded-2xl p-4 sm:p-5 shadow-2xl deco-icon">
                  <div className="flex flex-col items-center gap-1 text-white">
                    <span className="text-2xl">🇫🇷</span>
                    <span className="text-xs font-semibold">Made in FR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu droite - 7 colonnes sur desktop */}
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 lg:order-2 pt-20 xl:pt-0">
              <div className="badge hidden xl:inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[#7A9B8E]/20">
                <Hand className="w-5 h-5 text-[#7A9B8E]" />
                <span className="text-sm font-semibold text-[#7A9B8E] tracking-wide uppercase">
                  Savoir-faire d'excellence
                </span>
              </div>

              <h2 className="title-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2C2C2C] leading-[1.1]">
                Fabriqué à la main en Provence
              </h2>

              <p className="subtitle-text text-xl sm:text-2xl text-[#7A9B8E] font-light">
                L'artisanat au service de la perfection
              </p>

              <p className="description text-base sm:text-lg lg:text-xl text-[#2C2C2C]/70 leading-relaxed max-w-2xl">
                Dans notre atelier provençal, chaque bougie est une œuvre unique. Nos artisans experts 
                maîtrisent l'art ancestral de la coulée à la main, combiné aux techniques modernes les plus 
                avancées. Petites séries, attention minutieuse aux détails, contrôle qualité rigoureux : 
                nous prenons le temps nécessaire pour créer l'excellence.
              </p>

              {/* Feature cards */}
              <div className="hidden xl:grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Hand className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Coulée manuelle</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Geste artisan, précision maximale</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Petites séries</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Collections limitées, exclusives</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Contrôle qualité</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Inspection à chaque étape</p>
                    </div>
                  </div>
                </div>

                <div className="feature-card bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2C2C2C] mb-1">Made in Provence</h3>
                      <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">Atelier maison dans le gard</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="hidden xl:flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-[#2C2C2C]/10">
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">6</div>
                  <div className="text-sm text-[#2C2C2C]/60">Années d'expertise</div>
                </div>
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">5</div>
                  <div className="text-sm text-[#2C2C2C]/60">Artisans passionnés</div>
                </div>
                <div className="stat-item">
                  <div className="text-3xl sm:text-4xl font-light text-[#7A9B8E] mb-1">48h</div>
                  <div className="text-sm text-[#2C2C2C]/60">Temps de fabrication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PANEL 3 — LIVRAISON */}
      {/* PANEL 3 — PREMIUM */}
<div
  ref={(el) => {
    panelsRef.current[2] = el!;
  }}
  className="absolute inset-0 h-screen flex items-center justify-center z-30 bg-gradient-to-br from-[#F5F1EB] via-[#F0EDE6] to-[#ECE9E3] overflow-hidden"
>
  {/* Background decoratif */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute top-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-[#7A9B8E] rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-[#5A7B6E] rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
      {/* Contenu - texte à gauche sur desktop */}
      <div className="w-full lg:col-span-7 space-y-4 md:space-y-6 lg:space-y-8">
        <div className="badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg border border-[#7A9B8E]/20">
          <Truck className="w-4 md:w-5 h-4 md:h-5 text-[#7A9B8E]" />
          <span className="text-xs md:text-sm font-semibold text-[#7A9B8E] tracking-wide uppercase">
            Premium
          </span>
        </div>

        <h2 className="title-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2C2C2C] leading-[1.1]">
          Qualité Premium & Services Exclusifs
        </h2>

        <p className="subtitle-text text-lg md:text-xl lg:text-2xl text-[#7A9B8E] font-light">
          L’excellence dans chaque détail
        </p>

        <p className="description text-sm md:text-base lg:text-lg xl:text-xl text-[#2C2C2C]/70 leading-relaxed">
          Nous sélectionnons les meilleurs matériaux et assurons un service client irréprochable. 
          Livraison rapide, packaging soigné, et une expérience haut de gamme pour chaque bougie.
        </p>

        {/* Feature cards */}
        <div className="hidden xl:grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
          <div className="feature-card bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Truck className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-[#2C2C2C] mb-1">Livraison rapide</h3>
                <p className="text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed">Chez vous en 24-48h</p>
              </div>
            </div>
          </div>

          <div className="feature-card bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-[#2C2C2C] mb-1">Emballage soigné</h3>
                <p className="text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed">Coffrets premium et élégants</p>
              </div>
            </div>
          </div>

          <div className="feature-card bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-[#2C2C2C] mb-1">Satisfaction garantie</h3>
                <p className="text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed">Échange ou remboursement facile</p>
              </div>
            </div>
          </div>

          <div className="feature-card bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border border-[#7A9B8E]/10 hover:border-[#7A9B8E]/30 transition-all hover:shadow-xl">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-[#2C2C2C] mb-1">Évaluation 5★</h3>
                <p className="text-xs md:text-sm text-[#2C2C2C]/60 leading-relaxed">Clients satisfaits et fidèles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 border-t border-[#2C2C2C]/10">
          <div className="stat-item">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-[#7A9B8E] mb-1">24/7</div>
            <div className="text-xs md:text-sm text-[#2C2C2C]/60">Support client</div>
          </div>
          <div className="stat-item">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-[#7A9B8E] mb-1">Livraison</div>
            <div className="text-xs md:text-sm text-[#2C2C2C]/60">Express & soignée</div>
          </div>
          <div className="stat-item">
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-[#7A9B8E] mb-1">Packaging</div>
            <div className="text-xs md:text-sm text-[#2C2C2C]/60">Premium design</div>
          </div>
        </div>
      </div>

      {/* Image à droite sur desktop */}
      <div className="w-full lg:col-span-5 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] lg:order-2">
        <div className="relative w-full h-full">
          <img
            ref={(el) => {
              imagesRef.current[2] = el!;
            }}
            src="/images/landing/savoir3.webp"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            alt="Premium service"
          />
          {/* Badges flottants */}
          <div className="floating-badge absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 shadow-2xl deco-icon">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <Award className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#7A9B8E]" />
              <span className="text-[10px] md:text-xs font-semibold text-[#2C2C2C]">Premium</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gradient-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 shadow-2xl deco-icon">
            <div className="flex flex-col items-center gap-1 md:gap-2 text-white">
              <Star className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-white" />
              <span className="text-[10px] md:text-xs font-semibold">5★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}



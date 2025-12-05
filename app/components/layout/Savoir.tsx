"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Leaf, Hand, Truck, Award, Shield, Heart, CheckCircle, Star } from "lucide-react";

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

      // Panel 2 → slide from bottom over panel 1
      tl.fromTo(
        panelsRef.current[1],
        { y: "100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 1, ease: "power1.out" }
      );

      // Panel 3 → slide from bottom over panel 2
      tl.fromTo(
        panelsRef.current[2],
        { y: "100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 1, ease: "power1.out" }
      );

      // Animate text with SplitText
      panelsRef.current.forEach((panel, index) => {
        const titleElement = panel.querySelector(".title-text");
        if (titleElement) {
          const split = new SplitText(titleElement, {
            type: "lines,words,chars",
          });

          gsap.from(split.chars, {
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 60%",
              scrub: 0.5,
            },
            opacity: 0,
            y: 30,
            rotationX: -90,
            transformOrigin: "50% 50%",
            stagger: 0.015,
            ease: "power2.out",
          });
        }

        // Animate subtitle
        gsap.from(panel.querySelector(".subtitle-text"), {
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            end: "top 65%",
            scrub: 0.5,
          },
          opacity: 0,
          y: 20,
          ease: "power2.out",
        });

        // Animate description
        gsap.from(panel.querySelector(".description"), {
          scrollTrigger: {
            trigger: panel,
            start: "top 70%",
            end: "top 60%",
            scrub: 0.5,
          },
          opacity: 0,
          y: 25,
          ease: "power2.out",
        });

        // Animate feature cards
        const features = panel.querySelectorAll(".feature-card");
        gsap.from(features, {
          scrollTrigger: {
            trigger: panel,
            start: "top 65%",
            end: "top 55%",
            scrub: 0.5,
          },
          opacity: 0,
          y: 30,
          scale: 0.95,
          stagger: 0.1,
          ease: "power2.out",
        });

        // Animate stats
        const stats = panel.querySelectorAll(".stat-item");
        gsap.from(stats, {
          scrollTrigger: {
            trigger: panel,
            start: "top 60%",
            end: "top 50%",
            scrub: 0.5,
          },
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
          stagger: 0.1,
          ease: "power2.out",
        });
      });

      // Animate images with scale and rotation
      imagesRef.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { scale: 0.6, opacity: 0, rotation: index % 2 === 0 ? -15 : 15 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            scrollTrigger: {
              trigger: panelsRef.current[index],
              start: "top 80%",
              end: "top 50%",
              scrub: 0.8,
            },
            ease: "power2.out",
          }
        );
      });

      // Animate badges
      panelsRef.current.forEach((panel) => {
        gsap.from(panel.querySelector(".badge"), {
          scrollTrigger: {
            trigger: panel,
            start: "top 85%",
            end: "top 75%",
            scrub: 0.5,
          },
          scale: 0,
          opacity: 0,
          rotation: -180,
          ease: "back.out(2)",
        });
      });

      // Animate decorative elements
      panelsRef.current.forEach((panel) => {
        const decoElements = panel.querySelectorAll(".deco-icon");
        gsap.from(decoElements, {
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 70%",
            scrub: 0.5,
          },
          scale: 0,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(1.7)",
        });
      });

      // Floating animation for badges
      panelsRef.current.forEach((panel) => {
        const floatingBadge = panel.querySelector(".floating-badge");
        if (floatingBadge) {
          gsap.to(floatingBadge, {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[200vh] overflow-hidden"
    >
      {/* PANEL 1 — INGRÉDIENTS */}
      <div
        ref={(el) => {
          panelsRef.current[0] = el!;
        }}
        className="absolute inset-0 h-screen flex items-center justify-center z-10 bg-linear-to-br from-[#FDFBF7] via-[#F9F6F0] to-[#F5F1EB] overflow-hidden"
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
            <div className="lg:col-span-7 space-y-6 lg:space-y-8">
              <div className="badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[#7A9B8E]/20">
                <Leaf className="w-5 h-5 text-[#7A9B8E]" />
                <span className="text-sm font-semibold text-[#7A9B8E] tracking-wide uppercase">
                  Qualité & Sécurité Premium
                </span>
              </div>

              <h2 className="title-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#2C2C2C] leading-[1.1]">
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
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
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
              <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-[#2C2C2C]/10">
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
            <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[#7A9B8E]/20">
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
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
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
              <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 border-t border-[#2C2C2C]/10">
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
      <div
        ref={(el) => {
          panelsRef.current[2] = el!;
        }}
        className="absolute inset-0 h-screen flex items-center justify-center z-30 bg-gradient-to-br from-[#ECE9E3] to-[#E5DFD3] overflow-hidden"
      >
        {/* Background decoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#7A9B8E] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5A7B6E] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu gauche */}
          <div className="space-y-8">
            <div className="badge inline-flex items-center gap-2 bg-[#7A9B8E]/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#7A9B8E]/20">
              <Truck className="w-5 h-5 text-[#7A9B8E]" />
              <span className="text-sm font-medium text-[#7A9B8E] tracking-wide">
                Expérience client
              </span>
            </div>

            <h2 className="title-text text-5xl md:text-6xl font-light text-[#2C2C2C] leading-tight">
              Expédition rapide & soignée
            </h2>

            <p className="description text-xl text-[#2C2C2C]/70 leading-relaxed max-w-xl">
              Vos commandes sont préparées avec amour, emballées avec soin et
              expédiées rapidement pour une expérience irréprochable.
            </p>

            {/* Points clés */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#7A9B8E] rounded-full"></div>
                <span className="text-[#2C2C2C]/60">Livraison offerte dès 50€</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#7A9B8E] rounded-full"></div>
                <span className="text-[#2C2C2C]/60">Emballage écologique</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#7A9B8E] rounded-full"></div>
                <span className="text-[#2C2C2C]/60">Expédition sous 48h</span>
              </div>
            </div>
          </div>

          {/* Image droite */}
          <div className="relative h-[500px] lg:h-[600px]">
            <img
              ref={(el) => {
                imagesRef.current[2] = el!;
              }}
              src="/images/landing/savoir3.webp"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] object-cover rounded-3xl shadow-2xl"
              alt="Livraison soignée"
            />
            {/* Badge flottant */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-xl icon-deco">
              <Truck className="w-10 h-10 text-[#7A9B8E]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



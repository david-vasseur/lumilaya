"use client"

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { 
    Leaf, 
    Mountain, 
    Sparkles, 
    Heart, 
    Users,
    Award,
    Quote
} from 'lucide-react';

const NotreHistoirePage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero animations
        gsap.from('.hero-title-word', {
            y: 150,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            delay: 0.2
        });

        gsap.from('.hero-subtitle', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 0.8
        });

        // Parallax image hero
        gsap.to('.hero-image', {
            y: 200,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: .5,
            }
        });

        // Story sections avec parallax
        const storySections = gsap.utils.toArray('.story-section') as HTMLElement[];
        
        storySections.forEach((section, index) => {
            // Image parallax
            gsap.to(section.querySelector('.story-image'), {
                y: index % 2 === 0 ? 100 : -100,
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            // Content fade in
            gsap.from(section.querySelector('.story-content'), {
                x: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                }
            });
        });

        // Valeurs cards
        gsap.from('.value-card', {
            y: 100,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.values-section',
                start: 'top 70%',
            }
        });

        // Citation animation
        gsap.from('.quote-section', {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.quote-section',
                start: 'top 75%',
            }
        });

        // Chiffres clés avec counter
        const stats = gsap.utils.toArray('.stat-number') as HTMLElement[];
        stats.forEach((stat) => {
            const value = parseInt(stat.getAttribute('data-value') || '0');
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                },
                onUpdate: function() {
                    stat.textContent = Math.ceil(parseFloat(stat.textContent || '0')).toString();
                }
            });
        });

        // Timeline décorative
        gsap.from('.timeline-line', {
            scaleY: 0,
            transformOrigin: 'top',
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: '.timeline-section',
                start: 'top 60%',
                end: 'bottom 40%',
                scrub: 1,
            }
        });

        gsap.from('.timeline-dot', {
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.timeline-section',
                start: 'top 60%',
            }
        });

    }, []);

    return (
        <div ref={pageRef} className="bg-[#FDFBF7] overflow-hidden">
            {/* Hero Section */}
            <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background image avec parallax */}
                <Image src={"/images/histoire/histoire6.webp"} fill alt='' className="hero-image object-cover" />
                <div className="hero-image absolute inset-0 -z-10">
                    
                    <div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E]/90 via-[#6A8B7E]/80 to-[#5A7B6E]/90 z-10" />
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 left-20 w-96 h-96 bg-zinc-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2C2C2C] rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="relative translate-y-50 text-center px-6 max-w-5xl">
                    <div className="overflow-hidden mb-8">
                        <h1 className="text-7xl md:text-9xl font-extralight text-zinc-100 tracking-tight leading-none">
                            <span className="hero-title-word inline-block">Notre</span>{' '}
                            <span className="hero-title-word inline-block">Histoire</span>
                        </h1>
                    </div>
                    <p className="hero-subtitle text-2xl md:text-3xl text-zinc-100 font-light">
                        Un voyage entre tradition et innovation, inspiré par la pureté des sommets
                    </p>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Les débuts - Section 1 */}
            <section className="story-section relative py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image côté gauche */}
                        <div className="relative lg:order-1">
                            <div className="story-image relative aspect-square xl:aspect-auto xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                <Image fill src={"/images/histoire/histoire1.webp"} alt="artisan qui coule une bougie" />
                                {/* <div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Mountain className="w-40 h-40 text-white/20" />
                                    </div>
                                </div> */}
                            </div>
                            {/* Badge flottant */}
                            <div className="absolute -top-6 -right-6 bg-white rounded-full p-6 shadow-xl">
                                <Leaf className="w-12 h-12 text-[#7A9B8E]" />
                            </div>
                        </div>

                        {/* Contenu côté droit */}
                        <div className="story-content lg:order-2 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#7A9B8E]/10 px-4 py-2 rounded-full mb-4">
                                <span className="text-sm font-medium text-[#7A9B8E]">2019 - Les débuts</span>
                            </div>
                            <h2 className="text-5xl font-light text-[#2C2C2C] leading-tight">
                                Une lumière née d’un renouveau
                            </h2>
                            <div className="space-y-4 text-lg text-[#2C2C2C]/70 leading-relaxed">
                                <p>
                                    Tout commence à un moment charnière de la vie. Après la naissance de son fils, la fondatrice de LUMILAYA ressent le besoin profond de ralentir, 
                                    de se recentrer, de retrouver de la sérénité dans un quotidien bouleversé. C’est dans cette quête d’apaisement qu’elle se tourne vers la création, 
                                    presque instinctivement, comme une thérapie douce.
                                </p>
                                <p>
                                    Les premières bougies naissent alors, façonnées pour le plaisir, guidées par l’amour des matières naturelles et des senteurs enveloppantes. Très vite, 
                                    l’évidence s’impose : ce qui n’était qu’un refuge intime devient un projet de vie. Les marchés locaux, les salons du bien-être, les premières rencontres… 
                                    LUMILAYA prend forme, portée par une vision simple : créer une lumière qui apaise, inspire et reconnecte à l’essentiel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Décoration flottante */}
                <div className="absolute top-40 right-10 opacity-5">
                    <Sparkles className="w-64 h-64 text-[#7A9B8E]" />
                </div>
            </section>

            {/* Citation */}
            <section className="quote-section py-20 bg-linear-to-br from-[#F5F1EB] to-[#E5DFD3]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Quote className="w-16 h-16 text-[#7A9B8E] mx-auto mb-8 opacity-30" />
                    <blockquote className="text-3xl md:text-4xl font-light text-[#2C2C2C] leading-relaxed mb-8">
                        "Chaque bougie que nous créons est une invitation au voyage, 
                        une célébration de la nature et de ses bienfaits."
                    </blockquote>
                    <p className="text-lg text-[#2C2C2C]/60">
                        — Camille, Fondatrice
                    </p>
                </div>
            </section>

            {/* L'artisanat - Section 2 (inversée) */}
            <section className="story-section relative py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Contenu côté gauche */}
                        <div className="story-content lg:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-[#7A9B8E]/10 px-4 py-2 rounded-full mb-4">
                                <span className="text-sm font-medium text-[#7A9B8E]">2020 - L'artisanat</span>
                            </div>
                            <h2 className="text-5xl font-light text-[#2C2C2C] leading-tight">
                                La quête de la perfection
                            </h2>
                            <div className="space-y-4 text-lg text-[#2C2C2C]/70 leading-relaxed">
                                <p>
                                    Des mois de recherche, d'expérimentation, d'échecs et de victoires. 
                                    Nous avons testé des dizaines de cires végétales, d'essences naturelles, 
                                    de mèches en coton biologique.
                                </p>
                                <p>
                                    Notre objectif : créer des bougies qui respectent à la fois votre santé, 
                                    votre intérieur et notre planète. Aucun compromis sur la qualité, 
                                    aucune concession sur nos valeurs.
                                </p>
                            </div>

                            {/* Stats en mini */}
                            <div className="grid grid-cols-2 gap-6 pt-8">
                                <div className="bg-[#F5F1EB] rounded-xl p-6">
                                    <div className="text-4xl font-light text-[#7A9B8E] mb-2 stat-number" data-value="100">0</div>
                                    <div className="text-sm text-[#2C2C2C]/60">Tests réalisés</div>
                                </div>
                                <div className="bg-[#F5F1EB] rounded-xl p-6">
                                    <div className="text-4xl font-light text-[#7A9B8E] mb-2 stat-number" data-value="6">0</div>
                                    <div className="text-sm text-[#2C2C2C]/60">Mois de développement</div>
                                </div>
                            </div>
                        </div>

                        {/* Image côté droit */}
                        <div className="relative lg:order-2">
                            <div className="story-image relative aspect-square xl:aspect-auto xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image src={"/images/histoire/histoire3.webp"} fill alt="test artisant bougie" />
                                {/* <div className="absolute inset-0 bg-linear-to-tl from-[#7A9B8E] to-[#5A7B6E]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-40 h-40 text-white/20" />
                                    </div>
                                </div> */}
                            </div>
                            {/* Badge flottant */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-6 shadow-xl">
                                <Heart className="w-12 h-12 text-[#7A9B8E]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline décorative */}
            <section className="timeline-section relative py-32 bg-linear-to-b from-[#FDFBF7] to-[#F5F1EB]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-light text-[#2C2C2C] text-center mb-20">
                        Notre évolution
                    </h2>

                    <div className="relative">
                        {/* Ligne centrale */}
                        <div className="timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#7A9B8E] -translate-x-1/2" />

                        {/* Points de timeline */}
                        <div className="space-y-24">
                            {/* 2019 */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12 text-right">
                                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2">2019</h3>
                                    <p className="text-[#2C2C2C]/60">La naissance du projet</p>
                                </div>
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#7A9B8E] rounded-full border-4 border-[#FDFBF7] shadow-lg z-10" />
                                <div className="w-1/2 pl-12" />
                            </div>

                            {/* 2020 */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12" />
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#7A9B8E] rounded-full border-4 border-[#FDFBF7] shadow-lg z-10" />
                                <div className="w-1/2 pl-12">
                                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2">2020</h3>
                                    <p className="text-[#2C2C2C]/60">Première collection artisanale</p>
                                </div>
                            </div>

                            {/* 2021 */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12 text-right">
                                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2">2021</h3>
                                    <p className="text-[#2C2C2C]/60">Marchés dans le gard</p>
                                </div>
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#7A9B8E] rounded-full border-4 border-[#FDFBF7] shadow-lg z-10" />
                                <div className="w-1/2 pl-12" />
                            </div>

                            {/* 2023 */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12" />
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#7A9B8E] rounded-full border-4 border-[#FDFBF7] shadow-lg z-10" />
                                <div className="w-1/2 pl-12">
                                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2">2023</h3>
                                    <p className="text-[#2C2C2C]/60">Nouvelle gamme rituel</p>
                                </div>
                            </div>

                            {/* 2024 */}
                            <div className="relative flex items-center">
                                <div className="w-1/2 pr-12 text-right">
                                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2">2025</h3>
                                    <p className="text-[#2C2C2C]/60">Boutique en ligne</p>
                                </div>
                                <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#7A9B8E] rounded-full border-4 border-[#FDFBF7] shadow-lg z-10" />
                                <div className="w-1/2 pl-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos valeurs */}
            <section className="values-section py-32 bg-[#FDFBF7]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-[#7A9B8E]/10 px-4 py-2 rounded-full mb-6">
                            <Heart className="w-5 h-5 text-[#7A9B8E]" />
                            <span className="text-sm font-medium text-[#7A9B8E]">Nos valeurs</span>
                        </div>
                        <h2 className="text-5xl font-light text-[#2C2C2C] mb-6">
                            Ce qui nous anime
                        </h2>
                        <p className="text-xl text-[#2C2C2C]/60 max-w-3xl mx-auto">
                            Des principes qui guident chacune de nos actions, chaque jour
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Leaf className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Naturel & Pur</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                100% d'ingrédients naturels, sans compromis. La nature est notre source d'inspiration 
                                et notre plus grande alliée.
                            </p>
                        </div>

                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Fait main</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                Chaque bougie est coulée à la main avec amour et attention. 
                                L'artisanat est au cœur de notre démarche.
                            </p>
                        </div>

                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Communauté</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                Vous êtes au centre de notre univers. Votre satisfaction et votre bien-être 
                                sont notre priorité.
                            </p>
                        </div>

                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Mountain className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Éco-responsable</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                Emballages recyclables, circuit court, ingrédients locaux. 
                                Nous minimisons notre impact à chaque étape.
                            </p>
                        </div>

                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Excellence</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                Nous ne nous contentons jamais du minimum. Chaque détail compte, 
                                de la sélection des matières à la finition.
                            </p>
                        </div>

                        <div className="value-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
                            <div className="w-16 h-16 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E] rounded-2xl flex items-center justify-center mb-6">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-light text-[#2C2C2C] mb-4">Authenticité</h3>
                            <p className="text-[#2C2C2C]/60 leading-relaxed">
                                Transparence totale sur nos pratiques et nos ingrédients. 
                                Ce que vous voyez est ce que vous obtenez.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E]">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2C2C2C] rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <Mountain className="w-20 h-20 text-white/20 mx-auto mb-8" />
                    <h2 className="text-5xl font-light text-white mb-8">
                        Rejoignez l'aventure LUMILAYA
                    </h2>
                    <p className="text-2xl text-white/90 mb-12 leading-relaxed">
                        Découvrez nos bougies et laissez-vous emporter par la magie de la nature
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/boutique"
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#7A9B8E] px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all shadow-xl"
                        >
                            Découvrir la boutique
                        </a>
                        <a 
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotreHistoirePage;
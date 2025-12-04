"use client"

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowDown, Leaf } from 'lucide-react';

export const HeroSection = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		// Animation d'entrée
		tl.from('.hero-badge', {
			scale: 0,
			opacity: 0,
			duration: 0.8,
			ease: 'back.out(1.7)',
			delay: 0.3
		})
		.from('.hero-title-line', {
			y: 120,
			opacity: 0,
			duration: 1.2,
			stagger: 0.15,
		}, '-=0.4')
		.from('.hero-subtitle', {
			y: 40,
			opacity: 0,
			duration: 1,
		}, '-=0.8')
		.from('.hero-cta', {
			y: 40,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15
		}, '-=0.6')
		.from('.scroll-indicator', {
			y: -20,
			opacity: 0,
			duration: 0.8,
		}, '-=0.4');

		// Animation de sortie au scroll
		gsap.to(imageRef.current, {
			scale: 1.2,
			opacity: 0.3,
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: 1.5,
			}
		});

		gsap.to(".hero-cta", {
			yPercent: 200,
			scale: 1.2,
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: 1.5,
			}
		})

		gsap.to(overlayRef.current, {
			opacity: 0.8,
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: 'bottom top',
				scrub: 1.5,
			}
		});

		gsap.to(contentRef.current, {
			y: -150,
			opacity: 0,
			scrollTrigger: {
				trigger: heroRef.current,
				start: 'top top',
				end: '50% top',
				scrub: 1,
			}
		});

	}, []);

	return (
		<section ref={heroRef} className="relative h-screen overflow-hidden">
			{/* Image de fond avec Next.js Image */}
			<div ref={imageRef} className="absolute inset-0">
				<Image 
					src="/images/test2.465Z.png"
					alt="Himalaya avec bougie naturelle"
					fill
					priority
					quality={100}
					className="object-cover object-right"
				/>
			</div>

			{/* Overlay gradient pour améliorer la lisibilité */}
			<div 
				ref={overlayRef}
				className="absolute inset-0 bg-linear-to-br from-[#2C2C2C]/60 via-[#2C2C2C]/40 to-transparent"
			/>
			{/* Contenu principal */}
			<div ref={contentRef} className="relative h-full flex items-center justify-center z-10">
				<div className="text-center px-6 max-w-5xl">

					{/* Titre principal avec effet de découpe */}
					<div className="overflow-hidden mb-2 py-7">
						<h1 className="hero-title-line text-7xl md:text-9xl lg:text-9xl font-base font-ballet! text-white ">
							<em>Lumi'laya</em>
						</h1>
					</div>

					{/* <div className="overflow-hidden mb-8">
						<p className="hero-title-line text-2xl md:text-3xl font-light text-white/90 tracking-widest">
							L'ESSENCE DE L'HIMALAYA
						</p>
					</div> */}

					{/* Sous-titre */}
					<p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
						Des bougies artisanales inspirées de la pureté des sommets. 
						Cire végétale, essences naturelles, pour une lumière qui élève l'âme.
					</p>

					{/* Call-to-actions */}
					<div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link 
							href="/#boutique"
							className=" group relative inline-flex items-center gap-3 bg-white text-[#2C2C2C] px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all shadow-2xl overflow-hidden"
						>
							<span className="relative z-10">Découvrir la collection</span>
							<ArrowDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform relative z-10" />
							<div className="absolute inset-0 bg-linear-to-r from-[#7A9B8E] to-[#5A7B6E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						</Link>

						<Link 
							href="/notre-histoire"
							className=" inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
						>
							<span>Notre histoire</span>
						</Link>
					</div>

					{/* Éléments de confiance */}
					<div className="hero-subtitle flex items-center justify-center gap-8 mt-16 text-white/70 text-sm">
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#7A9B8E] rounded-full animate-pulse" />
							<span>Fabrication française</span>
						</div>
						<div className="hidden sm:block w-px h-4 bg-white/30" />
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#7A9B8E] rounded-full animate-pulse" />
							<span>Cire 100% végétale</span>
						</div>
						<div className="hidden sm:block w-px h-4 bg-white/30" />
						<div className="flex items-center gap-2">
							<div className="w-2 h-2 bg-[#7A9B8E] rounded-full animate-pulse" />
							<span>Huiles essentielles pures</span>
						</div>
					</div>
				</div>
			</div>

			{/* Indicateur de scroll animé */}
			<div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
				<div className="flex flex-col items-center gap-3 animate-bounce">
					<span className="text-white/70 text-xs uppercase tracking-widest">Découvrir</span>
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
						<div className="w-1 h-2 bg-white/70 rounded-full animate-pulse" />
					</div>
				</div>
			</div>

			{/* Vignette décorative en bas */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#FDFBF7] to-transparent z-20" />
		</section>
	);
};

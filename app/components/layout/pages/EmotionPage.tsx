"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Clock, Sparkles, ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { IProduct } from '@/type/product';

gsap.registerPlugin(ScrollTrigger);

interface EmotionPageProps {
  products: IProduct[];
}

function EmotionPage({ products }: EmotionPageProps) {

    	useGSAP(() => {
		// Animation Hero
		gsap.from('.hero-content', {
			y: 100,
			opacity: 0,
			duration: 1.2,
			ease: 'power3.out',
			delay: 0.3
		});

		gsap.from('.hero-badge', {
			scale: 0,
			opacity: 0,
			duration: 0.8,
			ease: 'back.out(1.7)',
			delay: 0.5
		});

		// Animation grille produits
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

		// Animation section finale
		gsap.from('.final-section', {
			y: 60,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.final-section',
				start: 'top 80%'
			}
		});
	}, []);

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
			{/* Hero Section */}
			<div className="relative h-[80vh] overflow-hidden">
				<Image fill alt="image d'une bougie" src={"/images/produits/emotion.webp"} className="object-cover object-bottom" />
				{/* Contenu Hero */}
				<div className="relative h-full flex items-center justify-center">
					<div className="hero-content text-center px-6 max-w-4xl">
						<div className="hero-badge inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full mb-8">
							<Leaf className="w-4 h-4" />
							<span className="text-sm font-medium">Collection 100% Naturelle</span>
						</div>

						<h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-wide">
							Emotions & Plaisirs
						</h1>

						<p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
							Des créations authentiques aux essences botaniques brutes.
							Cire végétale pure, parfums naturels, pour une atmosphère saine et apaisante.
						</p>

						<button className="inline-flex items-center gap-3 bg-white text-[#7A9B8E] px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl group">
							<span className="font-medium">Découvrir la collection</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
						<div className="w-1 h-2 bg-white/50 rounded-full"></div>
					</div>
				</div>
			</div>

			{/* Section Produits */}
			<div className="max-w-7xl mx-auto px-6 py-20">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-light text-[#2C2C2C] mb-4">
						Notre sélection
					</h2>
					<p className="text-lg text-[#2C2C2C]/60 max-w-2xl mx-auto">
						Chaque bougie est une invitation au voyage sensoriel
					</p>
				</div>

				<div className="products-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					{products.map((product, index) => (
						<Link
							key={index}
							href={`/bougies-emotions/${product.slug}`}
							className="product-grid-card group"
						>
							<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
								<div className="relative h-80 overflow-hidden">
									<Image 
										fill 
										src={product.images[0]} 
										alt={product.name}
										className="object-cover group-hover:scale-110 transition-transform duration-700" 
									/>
									<div className="absolute inset-0 bg-linear-to-t from-[#2C2C2C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									{/* Badge */}
									<div className="absolute top-4 left-4">
										<span className="inline-block bg-white/95 backdrop-blur-sm text-[#7A9B8E] text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
											100% Naturel
										</span>
									</div>

									{/* Durée */}
									<div className="absolute bottom-4 left-4 right-4">
										<div className="flex items-center justify-between text-white">
											<div className="flex items-center gap-2 bg-[#2C2C2C]/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
												<Clock className="w-4 h-4" />
												<span className="text-sm">{product.variants[0].duration}h</span>
											</div>
											<button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
												<Heart className="w-5 h-5 text-[#7A9B8E]" />
											</button>
										</div>
									</div>

									{/* Icône décorative */}
									<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
										<Sparkles className="w-16 h-16 text-white/0 group-hover:text-white/30 transition-all duration-500" />
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-light text-[#2C2C2C] mb-2 group-hover:text-[#7A9B8E] transition-colors">
										{product.name}
									</h3>
									<p className="text-[#2C2C2C]/60 text-sm mb-4 line-clamp-2 leading-relaxed">
										{product.intro}
									</p>
									<div className="flex items-center justify-between pt-4 border-t border-[#2C2C2C]/5">
										<div>
											<span className="text-xs text-[#2C2C2C]/50 block mb-1">À partir de</span>
											<span className="text-2xl font-light text-[#2C2C2C]">{product.variants[0].price.toFixed(2)} €</span>
										</div>
										<div className="flex items-center gap-2 text-[#7A9B8E] text-sm font-medium group-hover:gap-3 transition-all">
											Découvrir
											<ArrowRight className="w-4 h-4" />
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Section finale améliorée */}
				<div className="final-section relative rounded-3xl overflow-hidden">
					<div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E]">
						<div className="absolute inset-0 opacity-10">
							<div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
							<div className="absolute bottom-10 left-10 w-80 h-80 bg-[#2C2C2C] rounded-full blur-3xl"></div>
						</div>
					</div>

					<div className="relative p-16 text-center">
						<div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
							<Leaf className="w-10 h-10 text-white" />
						</div>

						<h2 className="text-4xl font-light text-white mb-6">
							L'essence de la nature
						</h2>

						<p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
							Nos bougies naturelles sont formulées sans parfum de synthèse.
							Seules des huiles essentielles pures et des extraits botaniques composent nos créations,
							pour un air intérieur sain et une combustion propre.
						</p>

						<div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
							<div className="text-center">
								<div className="text-5xl font-light text-white mb-2">100%</div>
								<div className="text-white/80">Cire végétale</div>
							</div>
							<div className="text-center">
								<div className="text-5xl font-light text-white mb-2">0</div>
								<div className="text-white/80">Additif chimique</div>
							</div>
							<div className="text-center">
								<div className="text-5xl font-light text-white mb-2">50+</div>
								<div className="text-white/80">Heures de combustion</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default EmotionPage;
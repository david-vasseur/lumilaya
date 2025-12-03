"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

	useGSAP(() => {
		gsap.from('.footer-brand', {
			y: 60,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.footer-container',
				start: 'top 80%',
			}
		});

		gsap.from('.footer-column', {
			y: 80,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.footer-container',
				start: 'top 75%',
			}
		});

		gsap.from('.footer-social', {
			scale: 0,
			opacity: 0,
			duration: 0.6,
			stagger: 0.1,
			ease: 'back.out(1.7)',
			scrollTrigger: {
				trigger: '.footer-socials',
				start: 'top 85%',
			}
		});

		gsap.from('.footer-bottom', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: '.footer-bottom',
				start: 'top bottom',
                end: 'botom top'
			}
		});
	}, []);

	return (
		<footer className="relative bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E] text-white overflow-hidden">
			{/* Effets de lumière décoratifs */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-80 h-80 bg-[#2C2C2C] rounded-full blur-3xl"></div>
			</div>

			<div className="footer-container relative max-w-7xl mx-auto px-6 pt-20 pb-8">
				{/* Contenu principal */}
				<div className="grid lg:grid-cols-12 gap-12 mb-16">
					{/* Brand Section */}
					<div className="footer-brand lg:col-span-4">
						<div className="flex items-center gap-3 mb-6">
							<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
								<Image width={48} height={48} src={'/images/footer.webp'} alt='logo' />
							</div>
							<span className="text-2xl font-light font-ballet">Lumi'laya</span>
						</div>
						<p className="text-white/80 leading-relaxed mb-6">
							Des créations authentiques aux essences botaniques brutes. 
							Cire végétale pure, parfums naturels, pour une atmosphère saine et apaisante.
						</p>
						<div className="footer-socials flex gap-4">
							<a 
								href="#" 
								className="footer-social w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a 
								href="#" 
								className="footer-social w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a 
								href="#" 
								className="footer-social w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
							>
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Navigation */}
					<div className="footer-column lg:col-span-2">
						<h3 className="text-lg font-medium mb-6">Navigation</h3>
						<ul className="space-y-3">
							<li>
								<Link href="/" className="text-white/80 hover:text-white transition-colors">
									Accueil
								</Link>
							</li>
							<li>
								<Link href="/boutique" className="text-white/80 hover:text-white transition-colors">
									Boutique
								</Link>
							</li>
							<li>
								<Link href="/a-propos" className="text-white/80 hover:text-white transition-colors">
									À propos
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-white/80 hover:text-white transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Collections */}
					<div className="footer-column lg:col-span-3">
						<h3 className="text-lg font-medium mb-6">Collections</h3>
						<ul className="space-y-3">
							<li>
								<Link href="/bougies-emotions" className="text-white/80 hover:text-white transition-colors">
									Émotions & Plaisir
								</Link>
							</li>
							<li>
								<Link href="/bougies-naturelles" className="text-white/80 hover:text-white transition-colors">
									Entre Terre & Ciel
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="footer-column relative z-2 lg:col-span-3">
						<h3 className="text-lg font-medium mb-6">Nous contacter</h3>
						<ul className="space-y-4">
							<li className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-white/80 shrink-0 mt-0.5" />
								<span className="text-white/80 leading-relaxed">
									123 Rue de la Lavande<br />
									13100 Aix-en-Provence
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Phone className="w-5 h-5 text-white/80 shrink-0" />
								<a href="tel:+33123456789" className="text-white/80 hover:text-white transition-colors">
									+33 1 23 45 67 89
								</a>
							</li>
							<li className="flex items-center gap-3">
								<Mail className="w-5 h-5 text-white/80 shrink-0" />
								<a href="mailto:contact@bougies-naturelles.fr" className="text-white/80 hover:text-white transition-colors">
									contact@bougies-naturelles.fr
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Séparateur */}
				<div className="h-px bg-white/20 mb-8"></div>

				{/* Bottom section */}
				<div className="footer-bottom flex flex-col lg:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-2 text-white/60 text-sm">
						<Leaf className="w-4 h-4" />
						<span>© 2025 DVWEB-agency. Tous droits réservés.</span>
					</div>

					{/* Liens légaux - petits en bas à droite */}
					<div className="flex items-center gap-6 text-xs text-white/50">
						<Link href="/cgv" className="hover:text-white/80 transition-colors">
							CGV
						</Link>
						<span>•</span>
						<Link href="/politique-confidentialite" className="hover:text-white/80 transition-colors">
							Politique de confidentialité
						</Link>
						<span>•</span>
						<Link href="/mentions-legales" className="hover:text-white/80 transition-colors">
							Mentions légales
						</Link>
					</div>
				</div>
			</div>

			{/* Icône décorative */}
			<div className="absolute z-0 bottom-10 right-10 opacity-100 pointer-events-none">
				<Image height={400} width={400} src={"/images/footer.webp"} alt='logo'/>
			</div>
		</footer>
	);
};

export default Footer;
"use client"

import { useRef, useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { 
    MapPin, 
    Phone, 
    Mail, 
    Clock, 
    Send, 
    MessageCircle,
    Instagram,
    Facebook,
    Youtube,
    Sparkles
} from 'lucide-react';
import Image from 'next/image';

// Interface pour le formulaire de contact
interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

// Données fictives pour les posts Instagram/TikTok
const socialPosts = [
    {
        id: 1,
        platform: 'instagram',
        image: '/images/social/post1.jpg',
        url: 'https://instagram.com/p/xxxxx'
    },
    {
        id: 2,
        platform: 'instagram',
        image: '/images/social/post2.jpg',
        url: 'https://instagram.com/p/xxxxx'
    },
    {
        id: 3,
        platform: 'instagram',
        image: '/images/social/post3.jpg',
        url: 'https://instagram.com/p/xxxxx'
    },
    {
        id: 4,
        platform: 'instagram',
        image: '/images/social/post4.jpg',
        url: 'https://instagram.com/p/xxxxx'
    },
];

const ContactPage = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        } as ContactForm,
        onSubmit: async ({ value }) => {
            setIsSubmitting(true);
            // Logique d'envoi du formulaire
            console.log(value);
            
            // Simuler l'envoi
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setIsSubmitting(false);
            // Afficher un message de succès
            alert("Votre message a bien été envoyé !");
        },
    });

    useGSAP(() => {
        // gsap.from('.contact-hero', {
        //     y: 100,
        //     opacity: 0,
        //     duration: 1.2,
        //     ease: 'power3.out',
        //     delay: 0.2
        // });

        // gsap.from('.contact-info-card', {
        //     y: 80,
        //     opacity: 0,
        //     duration: 0.8,
        //     stagger: 0.15,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //         trigger: '.contact-info-section',
        //         start: 'top 75%',
        //     }
        // });

        // gsap.from('.form-section', {
        //     x: -100,
        //     opacity: 0,
        //     duration: 1,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //         trigger: '.contact-form-container',
        //         start: 'top 75%',
        //     }
        // });

        // gsap.from('.map-section', {
        //     x: 100,
        //     opacity: 0,
        //     duration: 1,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //         trigger: '.contact-form-container',
        //         start: 'top 75%',
        //     }
        // });

        // gsap.from('.social-card', {
        //     y: 60,
        //     opacity: 0,
        //     duration: 0.8,
        //     stagger: 0.1,
        //     ease: 'power3.out',
        //     scrollTrigger: {
        //         trigger: '.social-section',
        //         start: 'top 75%',
        //     }
        // });

        // gsap.from('.social-post', {
        //     scale: 0.8,
        //     opacity: 0,
        //     duration: 0.6,
        //     stagger: 0.1,
        //     ease: 'back.out(1.7)',
        //     scrollTrigger: {
        //         trigger: '.social-feed',
        //         start: 'top 80%',
        //     }
        // });
    }, []);

    return (
        <div ref={sectionRef} className="min-h-screen bg-[#FDFBF7]">
            {/* Hero Section */}
            <div className="relative h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-[#7A9B8E] via-[#6A8B7E] to-[#5A7B6E]">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2C2C2C] rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-32 h-32 text-white/10" />
                </div>

                <div className="contact-hero relative h-full flex items-center justify-center text-center px-6">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2 rounded-full mb-6">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Nous contacter</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
                            Parlons ensemble
                        </h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Une question ? Un projet ? Notre équipe est là pour vous répondre
                        </p>
                    </div>
                </div>
            </div>

            {/* Informations de contact */}
            <div className="contact-info-section max-w-7xl mx-auto px-6 -mt-20 relative z-10 mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="contact-info-card bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-14 h-14 bg-[#7A9B8E]/10 rounded-full flex items-center justify-center mb-6">
                            <Phone className="w-7 h-7 text-[#7A9B8E]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#2C2C2C] mb-2">Téléphone</h3>
                        <a href="tel:+33123456789" className="text-[#2C2C2C]/60 hover:text-[#7A9B8E] transition-colors block mb-2">
                            +33 6 18 65 95 10
                        </a>
                    </div>

                    <div className="contact-info-card bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-14 h-14 bg-[#7A9B8E]/10 rounded-full flex items-center justify-center mb-6">
                            <Mail className="w-7 h-7 text-[#7A9B8E]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#2C2C2C] mb-2">Email</h3>
                        <a href="mailto:contact@lumilaya.fr" className="text-[#2C2C2C]/60 hover:text-[#7A9B8E] transition-colors block mb-2">
                            contact@lumilaya.fr
                        </a>
                    </div>

                    <div className="contact-info-card bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                        <div className="w-14 h-14 bg-[#7A9B8E]/10 rounded-full flex items-center justify-center mb-6">
                            <Clock className="w-7 h-7 text-[#7A9B8E]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#2C2C2C] mb-2">Horaires</h3>
                        <p className="text-[#2C2C2C]/60 leading-relaxed">
                            Lun - Ven : 9h - 19h<br />
                            Sam : 10h - 16h<br />
                            Dim : Fermé
                        </p>
                    </div>
                </div>
            </div>

            {/* Formulaire et Carte */}
            <div className="contact-form-container max-w-7xl mx-auto px-6 mb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Formulaire */}
                    <div className="form-section bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
                        <h2 className="text-3xl font-light text-[#2C2C2C] mb-3">
                            Envoyez-nous un message
                        </h2>
                        <p className="text-[#2C2C2C]/60 mb-8">
                            Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                        </p>

                        <form 
                            className="space-y-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.handleSubmit();
                            }}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <form.Field name="firstName">
                                    {({ state, handleBlur, handleChange }) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                                Prénom <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#7A9B8E] focus:outline-none transition"
                                                placeholder="Votre prénom"
                                                value={state.value}
                                                onBlur={handleBlur}
                                                onChange={(e) => handleChange(e.target.value)}
                                            />
                                        </motion.div>
                                    )}
                                </form.Field>

                                <form.Field name="lastName">
                                    {({ state, handleBlur, handleChange }) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                                Nom <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#7A9B8E] focus:outline-none transition"
                                                placeholder="Votre nom"
                                                value={state.value}
                                                onBlur={handleBlur}
                                                onChange={(e) => handleChange(e.target.value)}
                                            />
                                        </motion.div>
                                    )}
                                </form.Field>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <form.Field name="email">
                                    {({ state, handleBlur, handleChange }) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="email"
                                                className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#7A9B8E] focus:outline-none transition"
                                                placeholder="votre@email.com"
                                                value={state.value}
                                                onBlur={handleBlur}
                                                onChange={(e) => handleChange(e.target.value)}
                                            />
                                        </motion.div>
                                    )}
                                </form.Field>

                                <form.Field name="phone">
                                    {({ state, handleBlur, handleChange }) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                                Téléphone
                                            </label>
                                            <input 
                                                type="tel"
                                                className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#7A9B8E] focus:outline-none transition"
                                                placeholder="06 12 34 56 78"
                                                value={state.value}
                                                onBlur={handleBlur}
                                                onChange={(e) => handleChange(e.target.value)}
                                            />
                                        </motion.div>
                                    )}
                                </form.Field>
                            </div>

                            <form.Field name="subject">
                                {({ state, handleBlur, handleChange }) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                            Sujet <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            value={state.value}
                                            onBlur={handleBlur}
                                            onChange={(e) => handleChange(e.target.value)}
                                            className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] focus:border-[#7A9B8E] focus:outline-none transition"
                                        >
                                            <option value="">Choisissez un sujet</option>
                                            <option value="info">Demande d'information</option>
                                            <option value="commande">Question sur une commande</option>
                                            <option value="partenariat">Partenariat</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </motion.div>
                                )}
                            </form.Field>

                            <form.Field name="message">
                                {({ state, handleBlur, handleChange }) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            rows={6}
                                            value={state.value}
                                            onBlur={handleBlur}
                                            placeholder="Votre message..."
                                            onChange={(e) => handleChange(e.target.value)}
                                            className="w-full rounded-lg border-2 border-[#2C2C2C]/10 bg-[#FDFBF7] py-3 px-4 text-[#2C2C2C] placeholder-[#2C2C2C]/40 focus:border-[#7A9B8E] focus:outline-none transition resize-none"
                                        />
                                    </motion.div>
                                )}
                            </form.Field>

                            <motion.button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-[#7A9B8E] text-white py-4 rounded-xl font-medium text-lg hover:bg-[#6A8B7E] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                whileHover={{ scale: !isSubmitting ? 1.02 : 1 }}
                                whileTap={{ scale: !isSubmitting ? 0.98 : 1 }}    
                            >
                                {isSubmitting ? (
                                    "Envoi en cours..."
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Envoyer le message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>

                    {/* Social */}
                    <div className="map-section bg-white flex flex-col justify-between items-center rounded-2xl overflow-hidden shadow-xl h-full min-h-[600px]">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center mt-10 gap-2 bg-[#7A9B8E]/10 px-4 py-2 rounded-full mb-4">
                                <Instagram className="w-5 h-5 text-[#7A9B8E]" />
                                <span className="text-sm font-medium text-[#7A9B8E]">Suivez-nous</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl text-[#2C2C2C] font-light mb-4">
                                Rejoignez notre communauté
                            </h2>
                            <p className="text-[#2C2C2C]/60 max-w-2xl mx-auto">
                                Découvrez nos coulisses, nouveautés et inspirations au quotidien
                            </p>
                        </div>
                        {/* Boutons réseaux sociaux */}
                    <div className="grid md:grid-rows-3 gap-6 mb-16 w-7/8">
                        <a 
                            href="https://instagram.com/lumilaya" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Instagram className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#2C2C2C] mb-1">Instagram</h3>
                                    <p className="text-[#2C2C2C]/60 text-sm">@lumilaya</p>
                                </div>
                            </div>
                        </a>

                        <a 
                            href="https://facebook.com/lumilaya" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#1877F2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Facebook className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#2C2C2C] mb-1">Facebook</h3>
                                    <p className="text-[#2C2C2C]/60 text-sm">LUMILAYA</p>
                                </div>
                            </div>
                        </a>

                        <a 
                            href="https://youtube.com/@lumilaya" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Youtube className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#2C2C2C] mb-1">YouTube</h3>
                                    <p className="text-[#2C2C2C]/60 text-sm">LUMILAYA</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    </div>
                </div>
            </div>

            {/* Section Réseaux Sociaux */}
            <div className="social-section bg-linear-to-b from-[#F5F1EB] to-[#FDFBF7] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    

                    

                    {/* Feed Instagram/TikTok */}
                    <div className="social-feed">
                        <h3 className="text-2xl font-light text-[#2C2C2C] mb-8 text-center">
                            Nos dernières publications
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {socialPosts.map((post) => (
                                <a
                                    key={post.id}
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-post relative aspect-square rounded-xl overflow-hidden group bg-linear-to-br from-[#7A9B8E] to-[#5A7B6E]"
                                >
                                    {/* Image placeholder - remplacer par vraie image */}
                                    <div className="absolute inset-0 bg-[#2C2C2C]/10 group-hover:bg-[#2C2C2C]/5 transition-all" />
                                    
                                    {/* Icône centrale */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" />
                                    </div>

                                    {/* Overlay au hover */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#2C2C2C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <Instagram className="w-6 h-6 text-white" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
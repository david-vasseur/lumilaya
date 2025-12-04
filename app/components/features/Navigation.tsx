"use client"

import { Flame, MenuIcon, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModalStore } from '@/lib/store/modalStore';
import CartItem from '../ui/CartItem';
import Cart from './Cart';
import { useCartStore } from '@/lib/store/cartStore';
import Image from 'next/image';
import { useDeviceStore } from '@/lib/store/deviceStore';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "motion/react";


function Navigation() {

    const path = usePathname();
    const { openModal } = useModalStore();
    const { items } = useCartStore();
    const { isMobile } = useDeviceStore();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const NUM_BANDS = 4;
    const bands = Array.from({ length: NUM_BANDS });

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#2C2C2C]/10">
            
            {isMobile ? (
                    <>
                        <div className="absolute w-screen h-[10vh] flex justify-between items-center px-5 z-50000">
                            <div className="flex gap-2 cursor-pointer">
                                <ShoppingCart 
                                    className="w-6 h-6 text-[#7A9B8E] group-hover:text-[#2C2C2C] transition-colors" 
                                    onClick={() => {openModal(<Cart />)} }
                                />
                                <span className="text-[#7A9B8E] font-bold">{items.length}</span>
                            </div>
                            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className={`w-8 h-8 text-cyan-100`} />
                                    </motion.div>						
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <MenuIcon className="w-8 h-8 text-text-[#7A9B8E]" />
                                    </motion.div>						
                                )}
                                </AnimatePresence>
                            </div>			
                        </div>
                        <AnimatePresence mode="wait">
                            {isMenuOpen && (
                            <>			
                                <motion.div 
                                    key="overlay"
                                    className="fixed h-screen w-screen backdrop-blur-[0.5px] top-0 z-20 flex"
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    {bands.map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex-1 bg-zinc-300"
                                            variants={{
                                                initial: { translateX: "600%" },
                                                animate: { translateX: 0 },
                                                exit: { translateX: "600%" },
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: "easeInOut",
                                                delay: i * 0.05, 
                                            }}
                                        />
                                    ))}
                                </motion.div>		
                                <div className="w-full pl-10 pt-15">
                                    <motion.ul 
                                        className="relative z-30 space-y-6 text-3xl mt-20 font-bold text-[#7A9B8E]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2, delay: 0.5, ease: "easeInOut" }}
                                    >
                                        {["Accueil", "Emotions & Plaisirs", "Entre Terre & Ciel", "Nous contacter"].map((item, index) => (
                                            <>
                                                <motion.li 
                                                    onClick={() => setIsMenuOpen(false)}
                                                    key={index}
                                                    initial={{ opacity: 0, translateY: 100 }}
                                                    animate={{ opacity: 1, translateY: 0 }}
                                                    exit={{ opacity: 0, translateY: 100, transition: { duration: 0.2 } }} // sans delay ici
                                                    transition={{
                                                    duration: 0.2,
                                                    delay: isMenuOpen ? 0.3 + index * 0.2 : 0, // delay seulement à l'ouverture
                                                    ease: "easeInOut",
                                                    }}
                                                >
                                                    <Link href={`${item === "Accueil" ? "/" : item === "Emotions & Plaisirs" ? "/bougies-emotions" : item === "Entre Terre & Ciel" ? "/bougies-rituel" : "/contact"}`}>
                                                        {item}
                                                    </Link>
                                                </motion.li>
                                            </>
                                        ))}
                                    </motion.ul>	
                                </div>
                            </>		
                            )}
                        </AnimatePresence>
                    </>
                ) : (
                    <div className="mx-auto px-6 py-4 flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2 group">
                    <div className="h-10 w-20 relative -my-4">
                        <Image fill alt='logo lumilaya' src={"/images/logo.webp"} />
                    </div>
                </Link>

                <div className="flex gap-8">
                    <Link 
                        href={"/"}
                        className={`text-sm tracking-wide transition-colors ${
                        path === "/"
                            ? 'text-[#2C2C2C] font-medium'
                            : 'text-[#2C2C2C]/60 hover:text-[#2C2C2C]'
                        }`}
                    >
                        Accueil
                    </Link>
                    <Link
                        href={"/bougies-emotions"}
                        className={`text-sm tracking-wide transition-colors ${
                        path === "/bougies-emotions"
                            ? 'text-[#2C2C2C] font-medium'
                            : 'text-[#2C2C2C]/60 hover:text-[#2C2C2C]'
                        }`}
                    >
                        Bougies Emotions & Plaisirs
                    </Link>
                    <Link
                        href={"/bougies-rituel"}
                        className={`text-sm tracking-wide transition-colors ${
                        path === "/bougies-rituel"
                            ? 'text-[#2C2C2C] font-medium'
                            : 'text-[#2C2C2C]/60 hover:text-[#2C2C2C]'
                        }`}
                    >
                        Bougies Entre Terre & Ciel
                    </Link>
                    <Link 
                        href={"/contact"}
                        className={`text-sm tracking-wide transition-colors ${
                        path === "/contact"
                            ? 'text-[#2C2C2C] font-medium'
                            : 'text-[#2C2C2C]/60 hover:text-[#2C2C2C]'
                        }`}
                    >
                        Nous contacter
                    </Link>
                </div>
                <div className="flex gap-2 cursor-pointer">
                    <ShoppingCart 
                        className="w-6 h-6 text-[#7A9B8E] group-hover:text-[#2C2C2C] transition-colors" 
                        onClick={() => {openModal(<Cart />)} }
                    />
                    <span className="text-[#7A9B8E] font-bold">{items.length}</span>
                </div>
            </div>
                )}
            
            
        </nav>
    );
}

export default Navigation;
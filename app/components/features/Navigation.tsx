"use client"

import { Flame, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useModalStore } from '@/lib/store/modalStore';
import CartItem from '../ui/CartItem';
import Cart from './Cart';
import { useCartStore } from '@/lib/store/cartStore';


function Navigation() {

    const path = usePathname();
    const { openModal } = useModalStore();
    const { items } = useCartStore();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#2C2C2C]/10">
            <div className="mx-auto px-6 py-4 flex items-center justify-between">
                <Link href={"/"} className="flex items-center gap-2 group">
                    <Flame className="w-6 h-6 text-[#7A9B8E] group-hover:text-[#2C2C2C] transition-colors" />
                    <span className="text-xl font-light tracking-wider text-[#2C2C2C]">
                        LUMILAYA
                    </span>
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
                        href={"/bougies-parfumees"}
                        className={`text-sm tracking-wide transition-colors ${
                        path === "/bougies-parfumees"
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
        </nav>
    );
}

export default Navigation;
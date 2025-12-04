"use client"

import { useCartStore } from "@/lib/store/cartStore"
import CartItem from "../ui/CartItem";
import Link from "next/link";
import { useModalStore } from "@/lib/store/modalStore";
import { usePathname } from "next/navigation";
import { TotalProduct } from "../actions/product.action";
import { useEffect, useState } from "react";

function Cart() {

    const [total, setTotal] = useState<number>(0);
    const { items } = useCartStore();
    const { closeModal, isOpen } = useModalStore();
    const path = usePathname();
    
    useEffect(() => {

    const fetchTotal = async () => {
        const serverItems = items.map(item => ({
            productId: item.productId,
            variantId: item.id,
            qty: item.qty
        }));

        const result = await TotalProduct(serverItems);
        setTotal(result);
    };

    if (items.length > 0) {
        fetchTotal();
    } else {
        setTotal(0);
    }
    }, [items]);
    
    return (
        <div className="flex flex-col gap-10 items-center">
            <h2 className="font-semibold text-gray-600">Recapitulatif de votre panier</h2>
            <div className="w-full flex flex-col gap-5">
                <div className="grid grid-cols-[60%_10%_15%_15%] py-4 border-b border-zinc-400">
                
                    <p className="flex items-center justify-center">Produit</p>
                          
                    <span className="flex items-center justify-center">Qté</span>
                   
                    <span className="flex items-center justify-center">Prix €</span>
                    <span></span>
                </div>
                {items.map((item, index) => (
                    <CartItem key={index} id={item.id} name={item.name} image={item.image} price={Number((item.price * item.qty).toFixed(2))} qty={item.qty} />
                ))}
                
            </div>
            <span>Total de commande : {total.toFixed(2)} €</span>
            {path !== "/checkout" && isOpen  && (
                <Link 
                    href={"/checkout"}
                    onClick={() => closeModal()}
                    className="cursor-pointer flex-1 bg-[#7A9B8E] text-white py-4 rounded-lg hover:bg-[#6A8B7E] px-5 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                    Valider le panier
                </Link>
            )}
            
        </div>
    )
}

export default Cart;
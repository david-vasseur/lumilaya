"use client"

import { IProduct } from '@/type/product';
import Best from './Best'

async function BestProducts() {
    const products: IProduct[] = [
        {
            id: 1,
            collection: "Terre",
            name: "Protection",
            slug: "bougie-protection",
            description: [
                "",
                ""
                ],
            intro: "",
            theme: [
                "", // tête
                "", // Coeur
                "" // fond
            ],
            images: [
                "/images/produits/protection.webp",
                "",
                "",
                "",
                ""
            ],
            caracteristique: {
                composition: "",
                meche: "",
                parfum: "",
                combustion: "",
                poids: "",
                contenant: "",
                fabrication: ""
            },
            variants: [
                { id: 1, name: "Bougie Protection 200g", duration: "30", price: 32 }
            ],
            stock: true,
            promo: 0,
            like: 0,
            createdAt: new Date()
        },
        {
            id: 2,
            collection: "Emotion",
            name: "Magie",
            slug: "bougie-magie",
            description: [
                "",
                ""
             ],
            intro: "",
            theme: [
                "", // tête
                "", // Coeur
                "" // fond
            ],
            images: [
                "/images/produits/magie.webp",
                "",
                "",
                ""
            ],
            caracteristique: {
                composition: "",
                meche: "",
                parfum: "",
                combustion: "",
                poids: "",
                contenant: "",
                fabrication: "",
            },
            variants: [
                { id: 1, name: "Bougie Magie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
            createdAt: new Date()
        },
        {
            id: 3,
            collection: "Terre",
            name: "Libération",
            slug: "bougie-liberation",
            description: [
                "",
                ""
            ],
            intro: "", 
            theme: [
                "", // tête
                "", // Coeur
                "" // fond
            ],
            images: [
                "/images/produits/liberation.webp",
                "",
                "",
                "",
                ""
            ],
            caracteristique: {
                composition: "",
                meche: "",
                parfum: "",
                combustion: "",
                poids: "",
                contenant: "",
                fabrication: ""
            },
            variants: [
                { id: 1, name: "Bougie Libération 200g", duration: "30", price: 32 }
            ],
            stock: true,
            promo: 0,
            like: 0,
            createdAt: new Date()
        }
    ]

    return <Best products={products} />
}

export default BestProducts
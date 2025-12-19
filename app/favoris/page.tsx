"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Heart } from "lucide-react";
import { useFavoritesStore } from "@/lib/store/favoriteStore";
import { IProduct } from "@/type/product";
import { GetFavoriteProducts } from "../components/actions/product.action";
import { transformProduct } from "@/lib/utils/utilsFunction";

export default function FavoritesPage() {
    const { favorites } = useFavoritesStore();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadFavorites = async () => {
        if (!favorites.length) {
            setProducts([]);
            setLoading(false);
            return;
        }

        const ids = favorites.map((f) => f.id);
        const result = await GetFavoriteProducts(ids);
        const finalResult = result.map(transformProduct);

        setProducts(finalResult);
        setLoading(false);
        };

        loadFavorites();
    }, [favorites]);

    if (loading) {
        return (
        <div className="container mx-auto py-20 text-center text-[#2C2C2C]/60">
            Chargement de vos favoris…
        </div>
        );
    }

    if (!products.length) {
        return (
        <div className="container min-h-svh mx-auto py-20 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-[#7A9B8E]" />
            <h1 className="text-2xl font-light text-[#2C2C2C] mb-2">
            Aucun favori pour le moment
            </h1>
            <p className="text-[#2C2C2C]/60">
            Ajoutez des bougies à vos favoris pour les retrouver ici.
            </p>
        </div>
        );
    }

    return (
        <div className="container min-h-svh mx-auto py-16">
        <h1 className="text-3xl font-light text-[#2C2C2C] mb-10">
            Mes favoris
        </h1>

        <div className="products-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {products.map((product) => (
            <Link
                key={product.id}
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
                        <span className="text-sm">
                            {product.variants[0].duration}h
                        </span>
                        </div>
                    </div>
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
                        <span className="text-xs text-[#2C2C2C]/50 block mb-1">
                        À partir de
                        </span>
                        <span className="text-2xl font-light text-[#2C2C2C]">
                        {product.variants[0].price.toFixed(2)} €
                        </span>
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
        </div>
    );
}

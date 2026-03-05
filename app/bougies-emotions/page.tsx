import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import EmotionPage from "../components/layout/pages/EmotionPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// OPTIMISATION 1 : On remplace force-dynamic par ISR. 
// La page est régénérée au maximum toutes les heures (3600s), 
// ce qui la rend instantanée pour l'utilisateur et Google.
export const revalidate = 3600; 

// Définir la base URL pour éviter les soucis de liens relatifs
const BASE_URL = "https://www.lumilaya.fr";

export async function generateMetadata(): Promise<Metadata> {
    const products: IProduct[] = await ProductList("Emotion");
    
    // Définition de base pour éviter la duplication de code
    const metaTitle = "Bougies Émotions & Plaisirs | Collection Artisanale | Lumilaya";
    const metaDesc = "Découvrez notre collection de bougies artisanales 'Emotions & Plaisirs'. Cire 100% naturelle, parfums de Grasse, fabriquées en France.";
    const pageUrl = "/bougies-emotions";

    // Gestion du cas vide (Soft 404 UX)
    if (!products || products.length === 0) {
        return {
            title: "Bougies Émotion - Lumilaya",
            description: "Collection bientôt disponible.",
            robots: { index: false, follow: true } 
        };
    }

    return {
        metadataBase: new URL(BASE_URL),
        title: metaTitle,
        description: metaDesc,
        // OPTIMISATION 2 : Le Canonical manquant
        alternates: {
            canonical: pageUrl,
        },
        // OPTIMISATION 3 : Contrôle explicite des robots
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: {
            title: metaTitle,
            description: metaDesc,
            type: "website",
            url: pageUrl,
            siteName: "Lumilaya",
            locale: "fr_FR",
            images: [
                {
                    url: "/images/produits/plaisir.webp",
                    width: 800,
                    height: 600,
                    alt: "Bougies artisanales collection émotions"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: metaTitle,
            description: metaDesc,
            images: ["/images/produits/plaisir.webp"],
        },
    };
}

async function BougiesEmotions() {
    const products = await ProductList("Emotion");
    if (products) {
        console.log("les produits", products);
    } else {
        console.log("les produits ne sont pas récupéré");
    }
    
    

    if (!products || products.length === 0) {
        notFound();
    }

    // OPTIMISATION 4 : Données Structurées (JSON-LD)
    // Cela aide Google à comprendre qu'il s'agit d'une liste de produits
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Collection Bougies Émotions",
        "description": "Une sélection de bougies artisanales françaises pour chaque émotion.",
        "numberOfItems": products.length,
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${BASE_URL}/bougies-emotions/${product.slug}`,
            "name": product.name,
            "image": product.images?.[0] || "", 
            "offers": {
                "@type": "Offer",
                "price": product.variants[0].price,
                "priceCurrency": "EUR",
                "availability": product.stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            }
        }))
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": BASE_URL
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Bougies Émotions",
            "item": `${BASE_URL}/bougies-emotions`
        }]
    };

    return (
        <>
            {/* Injection du JSON-LD pour Google */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
            />            
            <EmotionPage products={products} />
        </>
    );
}

export default BougiesEmotions;

import ProductList, { GetItemBySlug } from '@/app/components/actions/product.action';
import { getAverageRating, getReviewCount } from '@/app/components/actions/review.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';


interface Props {
    params: { slug: string };
}

// OPTIMISATION 1 : Génération Statique (SSG)
// Cela permet à Next.js de construire toutes les pages produits au build
// Résultat : Chargement instantané pour l'utilisateur.
export async function generateStaticParams() {
    const products = await ProductList("Emotion");
	console.log(products.map(p => p.slug));
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// On définit la fréquence de mise à jour (ISR) si on ajoute un produit ou change un prix
export const revalidate = 3600; 
export const dynamicParams = true;

const BASE_URL = "https://www.lumilaya.fr";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // Pas besoin de await params dans les versions récentes, mais ok si Next 13/14
    console.log("Rendering slug page", params);
    // OPTIMISATION 2 : Fetch unique et ciblé
    // On utilise la fonction précise plutôt que de charger toute la liste
    const result = await GetItemBySlug(slug);

    if (!result || !result.product) {
        return {
            title: "Produit introuvable - Lumilaya",
            robots: { index: false, follow: true } 
        };
    }

    const { product } = result;
    const pageUrl = `/bougies-emotions/${product.slug}`;

    return {
        metadataBase: new URL(BASE_URL),
        title: `Bougie ${product.name} | Collection Émotion | Lumilaya`,
        // Utilise la description courte du produit si elle existe, sinon un fallback optimisé
        description: product.description 
            ? product.description[0].substring(0, 160) 
            : `Découvrez la bougie artisanale ${product.name}. Fabrication française et cire naturelle.`,
        alternates: {
            canonical: pageUrl,
        },
            twitter: {
            card: "summary_large_image",
            title: `Bougie ${product.name}`,
            description: `Découvrez la bougie ${product.name} artisanale.`,
            images: `${BASE_URL}/${product.images[0]}`, 
        },
        openGraph: {
            title: `Bougie ${product.name} - Lumi'Laya`,
            description: `Une expérience sensorielle unique avec la bougie ${product.name}.`,
            type: "website", 
            url: pageUrl,
            images: [
                {
                    url: `${BASE_URL}/${product.images[0]}`,
                    width: 800,
                    height: 800,
                    alt: `Bougie artisanale ${product.name}`
                }
            ],
        },
        // Ajout de métadonnées spécifiques aux produits pour les réseaux sociaux
        other: {
            "product:price:amount": product.variants[0].price.toString(),
            "product:price:currency": "EUR",
            "product:availability": product.stock ? "in stock" : "out of stock",
        }
    };
}

async function ProductDetail({ params }: Props) {
    const { slug } = await params;
    const result = await GetItemBySlug(slug);   

    // Si pas de produit, on déclenche la vraie page 404 de Next.js
    if (!result || !result.product) {
        notFound();
    }

    const { product, suggests } = result;

    const reviewNote = await getAverageRating(product.id);
    const reviewCount = await getReviewCount(product.id)

    // OPTIMISATION 3 : Schema.org Product (JSON-LD)
    // C'est LE point le plus important pour le e-commerce
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.images.map(img => img.startsWith('http') ? img : `${BASE_URL}${img.startsWith('/') ? '' : '/'}${img}`),
        "description": product.description,
        "sku": `BE-${product.variants[0].id}`, 
        "brand": {
            "@type": "Brand",
            "name": "Lumilaya"
        },
        "offers": {
            "@type": "Offer",
            "url": `${BASE_URL}/bougies-emotions/${product.slug}`,
            "priceCurrency": "EUR",
            "price": product.variants[0].price,
            "availability": product.stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    // Breadcrumb spécifique au produit
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": "Bougies Émotions", "item": `${BASE_URL}/bougies-emotions` },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `${BASE_URL}/bougies-emotions/${product.slug}` }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
            />
            <EmotionSlug product={product} suggest={suggests} averageRating={reviewNote} reviewCount={reviewCount} />
        </>
    );
}

export default ProductDetail;
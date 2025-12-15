import ProductList, { GetItemBySlug } from '@/app/components/actions/product.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
	const products = await ProductList("Terre");
	return products.map((product) => ({
		slug: product.slug,
	}));
}

// ISR : page régénérée toutes les heures
export const revalidate = 3600;

const BASE_URL = "https://www.lumilaya.fr";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = params;
    const result = await GetItemBySlug(slug);

    if (!result || !result.product) {
        return {
            title: "Produit introuvable - Lumilaya",
            robots: { index: false, follow: true }
        };
    }

    const { product } = result;
    const pageUrl = `/bougies-rituel/${product.slug}`;
    const mainImage = product.images[0].startsWith('http') 
        ? product.images[0] 
        : `${BASE_URL}${product.images[0].startsWith('/') ? '' : '/'}${product.images[0]}`;

    return {
        metadataBase: new URL(BASE_URL),
        title: `Bougie ${product.name} | Collection Entre Terre & Ciel | Lumilaya`,
        description: product.description 
            ? product.description[0].substring(0, 160)
            : `Découvrez la bougie artisanale ${product.name}. Fabrication française et cire naturelle.`,
        alternates: { canonical: pageUrl },
        openGraph: {
            title: `Bougie ${product.name} - Artisanat Français`,
            description: `Une expérience sensorielle unique avec la bougie ${product.name}.`,
            type: "website",
            url: pageUrl,
            images: [
                {
                    url: mainImage,
                    width: 800,
                    height: 800,
                    alt: `Bougie artisanale ${product.name}`
                }
            ]
        },
        other: {
            "product:price:amount": product.variants[0].price.toString(),
            "product:price:currency": "EUR",
            "product:availability": product.stock ? "in stock" : "out of stock",
        }
    };
}

async function ProductDetail({ params }: Props) {
    const { slug } = params;
    const result = await GetItemBySlug(slug);

    if (!result || !result.product) {
        notFound();
    }

    const { product, suggests } = result;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.images.map(img => img.startsWith('http') ? img : `${BASE_URL}${img.startsWith('/') ? '' : '/'}${img}`),
        "description": product.description,
        "sku": `BE-${product.variants[0].id}`,
        "brand": { "@type": "Brand", "name": "Lumilaya" },
        "offers": {
            "@type": "Offer",
            "url": `${BASE_URL}/bougies-rituel/${product.slug}`,
            "priceCurrency": "EUR",
            "price": product.variants[0].price,
            "availability": product.stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    };

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": "Bougies Émotions", "item": `${BASE_URL}/bougies-rituel` },
            { "@type": "ListItem", "position": 3, "name": product.name, "item": `${BASE_URL}/bougies-rituel/${product.slug}` }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }} />
            <EmotionSlug product={product} suggest={suggests} />
        </>
    );
}

export default ProductDetail;

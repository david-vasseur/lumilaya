import ProductList, { GetItemBySlug } from '@/app/components/actions/product.action';
import { getAverageRating, getReviewCount } from '@/app/components/actions/review.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: { slug: string };
}

export const revalidate = 3600;
export const dynamicParams = true;

const BASE_URL = "https://www.lumilaya.fr";

export async function generateStaticParams() {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return [];
    }

	const products = await ProductList("Terre");
	console.log(products.map(p => p.slug));
	return products.map((product) => ({
		slug: product.slug,
	}));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
        title: "Lumilaya",
        description: "Bougies artisanales françaises"
        };
    }

    const { slug } = await params;
    const result = await GetItemBySlug(slug);

    if (!result || !result.product) {
        return {
            title: "Produit introuvable - Lumilaya",
            robots: { index: false, follow: true }
        };
    }

    const { product } = result;
    const pageUrl = `/bougies-rituel/${product.slug}`;
    
    return {
        metadataBase: new URL(BASE_URL),
        title: `Bougie ${product.name} | Collection Entre Terre & Ciel | Lumilaya`,
        description: product.description 
            ? product.description[0].substring(0, 160)
            : `Découvrez la bougie artisanale ${product.name}. Fabrication française et cire naturelle.`,
        alternates: { canonical: pageUrl },
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
    const { slug } = await params;
    const result = await GetItemBySlug(slug);

    if (!result || !result.product) {
        notFound();
    }

    const { product, suggests } = result;

    const reviewNote = await getAverageRating(product.id);
        const reviewCount = await getReviewCount(product.id)

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
            <EmotionSlug product={product} suggest={suggests} averageRating={reviewNote} reviewCount={reviewCount} />
        </>
    );
}

export default ProductDetail;

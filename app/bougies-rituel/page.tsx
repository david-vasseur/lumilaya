import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import RituelPage from "../components/layout/pages/RituelPage";
import { Metadata } from "next";


export const revalidate = 3600;

const BASE_URL = "https://www.lumilaya.fr";

export async function generateMetadata(): Promise<Metadata> {
  const products: IProduct[] = await ProductList("Terre");

  const pageUrl = "/bougies-rituel";
  const metaTitle = "Bougies Entre Terre & Ciel | Collection Artisanale | Lumilaya";
  const metaDesc = "Explorez notre collection de bougies artisanales 'Entre Terre & Ciel'. Fabrication 100% française, ingrédients naturels, parfum unique.";

  if (!products || products.length === 0) {
    return {
      title: "Bougies Entre Terre & Ciel - Lumilaya",
      description: "Collection bientôt disponible.",
      robots: { index: false, follow: true }, 
    };
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: metaTitle,
    description: metaDesc,
    alternates: { canonical: pageUrl },
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
          url: "/images/produits/terre.webp",
          width: 800,
          height: 600,
          alt: "Bougies artisanales collection Rituel"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: ["/images/produits/terre.webp"],
    },
  };
}

async function BougiesRituels() {
  const products: IProduct[] = await ProductList("Terre");
  if (!products) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Collection Bougies Entre Terre & Ciel",
    "description": "Une sélection de bougies artisanales françaises pour chaque rituel.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `${BASE_URL}/bougies-rituel/${product.slug}`,
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
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Bougies Entre Terre & Ciel", "item": `${BASE_URL}/bougies-rituel` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />
      <RituelPage products={products} />
    </>
  );
}

export default BougiesRituels;

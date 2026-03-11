import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import EmotionPage from "../components/layout/pages/EmotionPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// OPTIMISATION 1 : On remplace force-dynamic par ISR. 
// La page est régénérée au maximum toutes les heures (3600s), 
// ce qui la rend instantanée pour l'utilisateur et Google.
export const dynamic = "force-dynamic"; 

// Définir la base URL pour éviter les soucis de liens relatifs
const BASE_URL = "https://www.lumilaya.fr";


// export async function generateMetadata(): Promise<Metadata> {
    
//     // Définition de base pour éviter la duplication de code
//     const metaTitle = "Bougies Émotions & Plaisirs | Collection Artisanale | Lumilaya";
//     const metaDesc = "Découvrez notre collection de bougies artisanales 'Emotions & Plaisirs'. Cire 100% naturelle, parfums de Grasse, fabriquées en France.";
//     const pageUrl = "/bougies-emotions";

//     return {
//         metadataBase: new URL(BASE_URL),
//         title: metaTitle,
//         description: metaDesc,
//         // OPTIMISATION 2 : Le Canonical manquant
//         alternates: {
//             canonical: pageUrl,
//         },
//         // OPTIMISATION 3 : Contrôle explicite des robots
//         robots: {
//             index: true,
//             follow: true,
//             googleBot: {
//                 index: true,
//                 follow: true,
//                 "max-video-preview": -1,
//                 "max-image-preview": "large",
//                 "max-snippet": -1,
//             },
//         },
//         openGraph: {
//             title: metaTitle,
//             description: metaDesc,
//             type: "website",
//             url: pageUrl,
//             siteName: "Lumilaya",
//             locale: "fr_FR",
//             images: [
//                 {
//                     url: "/images/produits/plaisir.webp",
//                     width: 800,
//                     height: 600,
//                     alt: "Bougies artisanales collection émotions"
//                 }
//             ]
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: metaTitle,
//             description: metaDesc,
//             images: ["/images/produits/plaisir.webp"],
//         },
//     };
// }

async function getProducts() {
    return [
        {
            id: 1,
            createdAt: new Date(),
            collection: "Emotion",
            name: "Tendresse",
            slug: "bougie-tendresse",
            description: [
                "Dès les premières notes, la praline dévoile sa gourmandise délicate et légèrement caramélisée. La noix de coco apporte ensuite une touche douce et solaire, tandis que la vanille vient sublimer l’ensemble avec sa profondeur chaude et veloutée. L’accord de ces senteurs crée une atmosphère tendre et réconfortante, parfaite pour transformer votre intérieur en un véritable cocon de douceur. Allumer la bougie Tendresse, c’est s’offrir un moment de douceur absolue. La flamme éclaire délicatement la pièce pendant que le parfum gourmand se diffuse peu à peu, créant une ambiance chaleureuse et apaisante.", 
                "Les notes sucrées et crémeuses installent une atmosphère douce et rassurante, comme une parenthèse où l’on se sent enveloppé de bien-être. L’air se parfume d’une gourmandise subtile qui invite à ralentir, à savourer l’instant présent et à profiter d’un intérieur transformé en refuge délicat. Un parfum tendre et réconfortant qui accompagne parfaitement les moments de calme et de sérénité."
            ],
            intro: "Une rencontre délicieusement gourmande entre la douceur sucrée de la praline, la rondeur exotique de la noix de coco et la chaleur réconfortante de la vanille. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum enveloppant qui invite instantanément à la détente et au plaisir des sens.",
            theme: [
                "Praline", // tête
                "Noix de coco", // Coeur
                "Vanille" // fond
            ],
            images: [
                "/images/produits/tendresse.webp",
                "/images/produits/tendresse2.webp",
                "/images/produits/tendresse3.webp",
                "/images/produits/tendresse4.webp"
            ],
            caracteristique: {
            composition: "Cire de coco et de soja 100% naturelle",
            meche: "Mèche en coton bio",
            parfum: "Fragrance de Grasse",
            combustion: "Combustion",
            poids: "150",
            contenant: "Pot en béton fait main",
            fabrication: "France"
            },
            variants: [
                { id: 1, name: "Bougie Tendresse 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
        },
        {
            id: 2,
            createdAt: new Date(),
            collection: "Emotion",
            name: "Vitalité",
            slug: "bougie-vitalite",
            description: [
                "Dès les premières notes, le citron vert libère une fraîcheur acidulée et vibrante, apportant une sensation immédiate de légèreté et de clarté. Le gingembre vient ensuite révéler son caractère légèrement épicé et stimulant, créant un équilibre subtil entre fraîcheur et chaleur. L’ensemble compose un parfum vivifiant et moderne, idéal pour insuffler une belle énergie et réveiller l’ambiance de votre espace de vie.", 
                "Allumer la bougie Vitalité, c’est inviter une vague de fraîcheur et d’énergie dans son quotidien. La flamme éclaire doucement la pièce tandis que les notes citronnées et épicées se diffusent progressivement, apportant une sensation de dynamisme et de renouveau.Le parfum évoque un moment où l’on retrouve de l’élan, de la clarté et une belle sensation de légèreté. L’accord vif et stimulant crée une atmosphère inspirante, parfaite pour accompagner un moment de créativité, de concentration ou simplement pour donner un nouveau souffle à votre intérieur. Une invitation à réveiller les sens et à profiter pleinement d’une ambiance lumineuse et revitalisante."
            ],
            intro: "Une rencontre pétillante entre la fraîcheur vive du citron vert et l’énergie chaleureuse du gingembre. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum tonique et lumineux qui éveille les sens et dynamise l’atmosphère de votre intérieur.",
            theme: [
                "Citron vert", // tête
                "Cardamome", // Coeur
                "Gingembre" // fond
            ],
            images: [
                "/images/produits/vitalite.webp",
                "/images/produits/vitalite1.webp",
                "/images/produits/vitalite2.webp",
                "/images/produits/vitalite3.webp"
            ],
            caracteristique: {
            composition: "Cire de coco et de soja 100% naturelle",
            meche: "Mèche en coton bio",
            parfum: "Fragrance de Grasse",
            combustion: "Combustion",
            poids: "150",
            contenant: "Pot en béton fait main",
            fabrication: "France"
            },
            variants: [
                { id: 1, name: "Bougie Vitalité 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
        },
        {
            id: 3,
            createdAt: new Date(),
            collection: "Emotion",
            name: "Douceur",
            slug: "bougie-douceur",
            description: [
                "Dès les premières notes, la fleur de coton dévoile sa fraîcheur douce et lumineuse, évoquant la sensation réconfortante d’un linge propre et léger. Le musc vient ensuite apporter une touche subtilement poudrée et chaleureuse, tandis que la fleur de lotus révèle une élégance florale délicate. L’ensemble crée une harmonie douce et raffinée, idéale pour instaurer une ambiance paisible et sereine dans votre espace de vie.", 
                "Allumer la bougie Douceur, c’est s’offrir un instant de calme et de légèreté. La flamme diffuse une lumière apaisante tandis que le parfum se déploie lentement dans la pièce, créant une atmosphère pure et enveloppante.Peu à peu, l’air se remplit de notes délicates qui invitent à ralentir et à savourer l’instant présent. Le parfum évoque une sensation de cocon, un moment simple où l’on se sent profondément apaisé. Votre intérieur se transforme alors en un refuge de tranquillité, un espace doux et lumineux où le corps se relâche et où l’esprit retrouve sa sérénité."
            ],
            intro: "Une rencontre délicate entre la pureté aérienne de la fleur de coton, la douceur enveloppante du musc et la grâce florale de la fleur de lotus. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum tendre et apaisant qui transforme instantanément l’atmosphère de votre intérieur.",
            theme: [
                "Fleur de Coton", // tête
                "Fleur de Lotus", // Coeur
                "Musc" // fond
            ],
            images: [
                "/images/produits/douceur.webp",
                "/images/produits/douceur2.webp",
                "/images/produits/douceur3.webp",
                "/images/produits/douceur4.webp"
            ],
            caracteristique: {
            composition: "Cire de coco et de soja 100% naturelle",
            meche: "Mèche en coton bio",
            parfum: "Fragrance de Grasse",
            combustion: "Combustion",
            poids: "150",
            contenant: "Pot en béton fait main",
            fabrication: "France",
            },
            variants: [
                { id: 1, name: "Bougie Douceur 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
        },
        {
            id: 4,
            createdAt: new Date(),
            collection: "Emotion",
            name: "Magie",
            slug: "bougie-magie",
            description: [
                "Dès les premières notes, la cannelle éveille les sens avec son caractère épicé et réconfortant. Le caramel apporte ensuite une touche sucrée et veloutée, tandis que la vanille vient adoucir l’ensemble avec sa rondeur délicate. L’harmonie de ces senteurs crée une ambiance gourmande et rassurante, comme un moment de douceur que l’on s’offre pour se sentir pleinement bien chez soi.", 
                "Allumer la bougie Magie, c’est ouvrir la porte à un univers chaleureux et enveloppant. La flamme danse doucement tandis que les notes sucrées et épicées se diffusent subtilement dans la pièce, créant une atmosphère douce et réconfortante.Le parfum rappelle ces instants simples et précieux où l’on se laisse porter par une sensation de bien-être : une soirée tranquille, un moment pour soi, ou le plaisir d’un intérieur qui devient un véritable cocon. La chaleur gourmande des accords parfumés installe une ambiance apaisante et conviviale, invitant naturellement à ralentir et à savourer l’instant présent. "
            ],
            intro: "Une rencontre délicieusement gourmande entre la chaleur épicée de la cannelle, la douceur fondante du caramel et la tendresse enveloppante de la vanille. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum chaleureux qui transforme instantanément l’atmosphère de votre intérieur.",
            theme: [
                "Caramel", // tête
                "Cannelle", // Coeur
                "Vanille" // fond
            ],
            images: [
                "/images/produits/magie.webp",
                "/images/produits/magie1.webp",
                "/images/produits/magie3.webp",
                "/images/produits/magie4.webp"
            ],
            caracteristique: {
            composition: "Cire de coco et de soja 100% naturelle",
            meche: "Mèche en coton bio",
            parfum: "Fragrance de Grasse",
            combustion: "Combustion",
            poids: "150",
            contenant: "Pot en béton fait main",
            fabrication: "France",
            },
            variants: [
                { id: 1, name: "Bougie Magie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
        },
        {
            id: 5,
            createdAt: new Date(),
            collection: "Emotion",
            name: "Harmonie",
            slug: "bougie-harmonie",
            description: [
                "Dès les premières notes, la bergamote apporte une sensation de fraîcheur vive et délicate, comme un souffle léger qui éclaire l’atmosphère. Peu à peu, le vétiver révèle ses accents boisés et apaisants, apportant profondeur et stabilité à la composition. L’alliance de ces deux notes crée un parfum harmonieux, à la fois rafraîchissant et réconfortant, idéal pour instaurer une ambiance sereine et équilibrée dans votre intérieur.", 
                "Allumer la bougie Harmonie, c’est créer un espace où tout semble s’apaiser naturellement. La flamme diffuse une lumière douce tandis que les notes fraîches et boisées se déploient délicatement dans la pièce.Le parfum installe une atmosphère claire et apaisante, propice au calme et à la présence à soi. La vivacité de la bergamote apporte une touche lumineuse, tandis que le vétiver ancre l’ambiance dans une douceur chaleureuse et enveloppante. Peu à peu, votre intérieur se transforme en un véritable refuge de tranquillité, un lieu où l’on respire plus profondément et où l’esprit retrouve son équilibre. "
            ],
            intro: "Une rencontre subtile entre la fraîcheur lumineuse de la bergamote et la profondeur boisée du vétiver. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum élégant et équilibré qui invite naturellement à la détente.",
            theme: [
                "Bergamote", // tête
                "Freesia", // Coeur
                "Vetiver" // fond
            ],
            images: [
                "/images/produits/harmonie(1).webp",
                "/images/produits/harmonie(2).webp",
                "/images/produits/harmonie(3).webp",
                "/images/produits/harmonie(4).webp"
            ],
            caracteristique: {
            composition: "Cire de coco et de soja 100% naturelle",
            meche: "Mèche en coton bio",
            parfum: "Fragrance de Grasse",
            combustion: "Combustion",
            poids: "150",
            contenant: "Pot en béton fait main",
            fabrication: "France"
            },
            variants: [
                { id: 1, name: "Bougie Harmonie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
            ],
            stock: true,
            promo: 0,
            like: 0,
        }
    ]    
}

async function BougiesEmotions() {
   
    const products = await getProducts();
   
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

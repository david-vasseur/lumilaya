import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Products ---
    await prisma.product.createMany({
        data: [
            {
                collection: "Emotion",
                name: "Tendresse",
                slug: "bougie-tendresse",
                description: JSON.stringify([
                    "Dès les premières notes, la praline dévoile sa gourmandise délicate et légèrement caramélisée. La noix de coco apporte ensuite une touche douce et solaire, tandis que la vanille vient sublimer l’ensemble avec sa profondeur chaude et veloutée. L’accord de ces senteurs crée une atmosphère tendre et réconfortante, parfaite pour transformer votre intérieur en un véritable cocon de douceur. Allumer la bougie Tendresse, c’est s’offrir un moment de douceur absolue. La flamme éclaire délicatement la pièce pendant que le parfum gourmand se diffuse peu à peu, créant une ambiance chaleureuse et apaisante.", 
                    "Les notes sucrées et crémeuses installent une atmosphère douce et rassurante, comme une parenthèse où l’on se sent enveloppé de bien-être. L’air se parfume d’une gourmandise subtile qui invite à ralentir, à savourer l’instant présent et à profiter d’un intérieur transformé en refuge délicat. Un parfum tendre et réconfortant qui accompagne parfaitement les moments de calme et de sérénité."
                ]),
                intro: "Une rencontre délicieusement gourmande entre la douceur sucrée de la praline, la rondeur exotique de la noix de coco et la chaleur réconfortante de la vanille. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum enveloppant qui invite instantanément à la détente et au plaisir des sens.",
                theme: JSON.stringify([
                    "Praline", // tête
                    "Noix de coco", // Coeur
                    "Vanille" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/tendresse.webp",
                    "/images/produits/tendresse2.webp",
                    "/images/produits/tendresse3.webp",
                    "/images/produits/tendresse4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en béton fait main",
                fabrication: "France"
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Tendresse 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Vitalité",
                slug: "bougie-vitalite",
                description: JSON.stringify([
                    "Dès les premières notes, le citron vert libère une fraîcheur acidulée et vibrante, apportant une sensation immédiate de légèreté et de clarté. Le gingembre vient ensuite révéler son caractère légèrement épicé et stimulant, créant un équilibre subtil entre fraîcheur et chaleur. L’ensemble compose un parfum vivifiant et moderne, idéal pour insuffler une belle énergie et réveiller l’ambiance de votre espace de vie.", 
                    "Allumer la bougie Vitalité, c’est inviter une vague de fraîcheur et d’énergie dans son quotidien. La flamme éclaire doucement la pièce tandis que les notes citronnées et épicées se diffusent progressivement, apportant une sensation de dynamisme et de renouveau.Le parfum évoque un moment où l’on retrouve de l’élan, de la clarté et une belle sensation de légèreté. L’accord vif et stimulant crée une atmosphère inspirante, parfaite pour accompagner un moment de créativité, de concentration ou simplement pour donner un nouveau souffle à votre intérieur. Une invitation à réveiller les sens et à profiter pleinement d’une ambiance lumineuse et revitalisante."
                ]),
                intro: "Une rencontre pétillante entre la fraîcheur vive du citron vert et l’énergie chaleureuse du gingembre. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum tonique et lumineux qui éveille les sens et dynamise l’atmosphère de votre intérieur.",
                theme: JSON.stringify([
                    "Citron vert", // tête
                    "Cardamome", // Coeur
                    "Gingembre" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/vitalite.webp",
                    "/images/produits/vitalite1.webp",
                    "/images/produits/vitalite2.webp",
                    "/images/produits/vitalite3.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en béton fait main",
                fabrication: "France"
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Vitalité 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Douceur",
                slug: "bougie-douceur",
                description: JSON.stringify([
                    "Dès les premières notes, la fleur de coton dévoile sa fraîcheur douce et lumineuse, évoquant la sensation réconfortante d’un linge propre et léger. Le musc vient ensuite apporter une touche subtilement poudrée et chaleureuse, tandis que la fleur de lotus révèle une élégance florale délicate. L’ensemble crée une harmonie douce et raffinée, idéale pour instaurer une ambiance paisible et sereine dans votre espace de vie.", 
                    "Allumer la bougie Douceur, c’est s’offrir un instant de calme et de légèreté. La flamme diffuse une lumière apaisante tandis que le parfum se déploie lentement dans la pièce, créant une atmosphère pure et enveloppante.Peu à peu, l’air se remplit de notes délicates qui invitent à ralentir et à savourer l’instant présent. Le parfum évoque une sensation de cocon, un moment simple où l’on se sent profondément apaisé. Votre intérieur se transforme alors en un refuge de tranquillité, un espace doux et lumineux où le corps se relâche et où l’esprit retrouve sa sérénité."
                ]),
                intro: "Une rencontre délicate entre la pureté aérienne de la fleur de coton, la douceur enveloppante du musc et la grâce florale de la fleur de lotus. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum tendre et apaisant qui transforme instantanément l’atmosphère de votre intérieur.",
                theme: JSON.stringify([
                    "Fleur de Coton", // tête
                    "Fleur de Lotus", // Coeur
                    "Musc" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/douceur.webp",
                    "/images/produits/douceur2.webp",
                    "/images/produits/douceur3.webp",
                    "/images/produits/douceur4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en béton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Douceur 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Magie",
                slug: "bougie-magie",
                description: JSON.stringify([
                    "Dès les premières notes, la cannelle éveille les sens avec son caractère épicé et réconfortant. Le caramel apporte ensuite une touche sucrée et veloutée, tandis que la vanille vient adoucir l’ensemble avec sa rondeur délicate. L’harmonie de ces senteurs crée une ambiance gourmande et rassurante, comme un moment de douceur que l’on s’offre pour se sentir pleinement bien chez soi.", 
                    "Allumer la bougie Magie, c’est ouvrir la porte à un univers chaleureux et enveloppant. La flamme danse doucement tandis que les notes sucrées et épicées se diffusent subtilement dans la pièce, créant une atmosphère douce et réconfortante.Le parfum rappelle ces instants simples et précieux où l’on se laisse porter par une sensation de bien-être : une soirée tranquille, un moment pour soi, ou le plaisir d’un intérieur qui devient un véritable cocon. La chaleur gourmande des accords parfumés installe une ambiance apaisante et conviviale, invitant naturellement à ralentir et à savourer l’instant présent. "
                ]),
                intro: "Une rencontre délicieusement gourmande entre la chaleur épicée de la cannelle, la douceur fondante du caramel et la tendresse enveloppante de la vanille. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum chaleureux qui transforme instantanément l’atmosphère de votre intérieur.",
                theme: JSON.stringify([
                    "Caramel", // tête
                    "Cannelle", // Coeur
                    "Vanille" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/magie.webp",
                    "/images/produits/magie1.webp",
                    "/images/produits/magie3.webp",
                    "/images/produits/magie4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en béton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Magie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Harmonie",
                slug: "bougie-harmonie",
                description: JSON.stringify([
                    "Dès les premières notes, la bergamote apporte une sensation de fraîcheur vive et délicate, comme un souffle léger qui éclaire l’atmosphère. Peu à peu, le vétiver révèle ses accents boisés et apaisants, apportant profondeur et stabilité à la composition. L’alliance de ces deux notes crée un parfum harmonieux, à la fois rafraîchissant et réconfortant, idéal pour instaurer une ambiance sereine et équilibrée dans votre intérieur.", 
                    "Allumer la bougie Harmonie, c’est créer un espace où tout semble s’apaiser naturellement. La flamme diffuse une lumière douce tandis que les notes fraîches et boisées se déploient délicatement dans la pièce.Le parfum installe une atmosphère claire et apaisante, propice au calme et à la présence à soi. La vivacité de la bergamote apporte une touche lumineuse, tandis que le vétiver ancre l’ambiance dans une douceur chaleureuse et enveloppante. Peu à peu, votre intérieur se transforme en un véritable refuge de tranquillité, un lieu où l’on respire plus profondément et où l’esprit retrouve son équilibre. "
                ]),
                intro: "Une rencontre subtile entre la fraîcheur lumineuse de la bergamote et la profondeur boisée du vétiver. Confectionnée avec une cire de soja 100 % naturelle et des fragrances de haute qualité, cette bougie diffuse un parfum élégant et équilibré qui invite naturellement à la détente.",
                theme: JSON.stringify([
                    "Bergamote", // tête
                    "Freesia", // Coeur
                    "Vetiver" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/harmonie(1).webp",
                    "/images/produits/harmonie(2).webp",
                    "/images/produits/harmonie(3).webp",
                    "/images/produits/harmonie(4).webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en béton fait main",
                fabrication: "France"
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Harmonie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Terre",
                name: "Ancrage",
                slug: "bougie-ancrage",
                description: JSON.stringify([
                    "Ancrage est une invitation à revenir dans son corps. A s'enraciner profondément. A se sentir solide, stable et en securite. Chaque flamme devient un point d'appui. Un espace ou l'on retrouve sa force interieure, ou la confiance reprend sa place, et ou les nouveaux departs se construisent sur des bases solides. Ce n'est pas seulement une bougie. C'est une fondation interieure.",
                    "Cette bougie est faite pour vous si : • Vous ressentez un manque de stabilité • Vous avez besoin de renforcer votre confiance en vous • Vous traversez un nouveau départ • Vous souhaitez retrouver une sécurité intérieure • Vous vivez des émotions intenses ou fluctuantes • Vous avez besoin de vous recentrer et de vous ancrer • Vous voulez poser des bases solides dans votre vie. Les pierres et leurs vertus : Jaspe Rouge — Pierre d'ancrage et de vitalité. Renforce la confiance en soi. Apporte courage et détermination. Stabilise les émotions. Soutient les nouveaux projets. Il donne force et stabilité et aide à avancer avec assurance. Obsidienne Noire — Pierre de protection et de vérité. Favorise l'enracinement profond. Aide à libérer les peurs inconscientes. Apporte stabilité et lucidité. Soutient les périodes de transformation."
                ]),
                intro: "La bougie Ancrage a ete creee pour accompagner celles qui ressentent le besoin de se stabiliser, de renforcer leur confiance et de poser des bases solides dans leur vie. Elle soutient les periodes de changement, les nouveaux departs et les moments ou l'on a besoin de retrouver un sentiment de securite interieure.",
                theme: JSON.stringify([
                    "encens",
                    "Cèdre",
                    "Bois de santal & musc"
                ]),
                images: JSON.stringify([
                    "/images/produits/ancrage.webp",
                    "/images/produits/ancrage2.webp",
                    "/images/produits/ancrage3.webp",
                    "/images/produits/ancrage4.webp",
                    "/images/produits/ancrage5.webp"
                ]),
                caracteristique: JSON.stringify({
                    composition: "Cire de coco et de soja 100% naturelle",
                    meche: "Meche en coton bio",
                    parfum: "Fragrance de Grasse",
                    combustion: "Combustion",
                    poids: "200",
                    contenant: "Pot en beton fait main",
                    fabrication: "France"
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Ancrage 200g", duration: "30", price: 32 }
                ]),
                stock: true,
                promo: 0,
                like: 0
            },
            {
    collection: "Terre",
    name: "Introspection",
    slug: "bougie-introspection",
    description: JSON.stringify([
        "La bougie Introspection a été créée comme un outil d'accompagnement pour celles qui ressentent le besoin de ralentir, de faire le point et de se reconnecter à leur monde intérieur. Elle invite à créer un espace de silence et d'écoute. Allumée en conscience, sa flamme devient un point d'ancrage pour observer ses émotions, clarifier ses pensées et accueillir les réponses déjà présentes en soi.",
        "Cette bougie est faite pour vous si : • Vous ressentez le besoin de réfléchir à une situation • Vous souhaitez développer votre intuition • Vous traversez une période de questionnement • Vous avez besoin de méditer et de ralentir • Vous voulez observer vos émotions avec plus de conscience • Vous aspirez à un moment de retour à vous-même. Les pierres et leurs vertus : Améthyste — Pierre de sagesse et d'élévation intérieure. Favorise la clarté mentale. Apaise le mental et les pensées envahissantes. Soutient la méditation et l'intuition. Aide à prendre du recul émotionnel. Elle invite au calme intérieur et ouvre l'espace de conscience. Labradorite — Pierre d'intuition et de protection énergétique. Aide à mieux comprendre ses émotions. Favorise l'introspection profonde. Soutient les périodes de réflexion intérieure. Protège des influences extérieures."
    ]),
    intro: "Introspection est une invitation à ralentir. À revenir à soi. À écouter ce qui murmure à l'intérieur. Chaque flamme devient un espace de silence, un moment suspendu pour observer ses émotions, clarifier ses pensées et se reconnecter à son intuition. Ce n'est pas seulement une bougie. C'est un rendez-vous avec vous-même.",
    theme: JSON.stringify([
        "Citron", // tête
        "Magnolia", // coeur
        "Cedre et musc" // fond
    ]),
    images: JSON.stringify([
        "/images/produits/introspection.webp",
        "/images/produits/introspection2.webp",
        "/images/produits/introspection3.webp",
        "/images/produits/introspection4.webp",
        "/images/produits/introspection5.webp"
    ]),
    caracteristique: JSON.stringify({
        composition: "Cire de coco et de soja 100% naturelle",
        meche: "Meche en coton bio",
        parfum: "Fragrance de Grasse",
        combustion: "Combustion",
        poids: "200",
        contenant: "Pot en beton fait main",
        fabrication: "France"
    }),
    variants: JSON.stringify([
        { id: 1, name: "Bougie Introspection 200g", duration: "30", price: 32 }
    ]),
    stock: true,
    promo: 0,
    like: 0
},
{
    collection: "Terre",
    name: "Libération",
    slug: "bougie-liberation",
    description: JSON.stringify([
        "La bougie Libération a été créée comme un outil d'accompagnement émotionnel, pour celles qui ressentent le besoin de déposer ce qui pèse, de laisser partir l'ancien et de se réaligner avec leur vérité intérieure. Elle invite à ralentir, à respirer et à créer un espace sacré de lâcher-prise. Allumée en conscience, sa flamme devient un point d'ancrage pour libérer les tensions émotionnelles, apaiser le cœur et accueillir un nouveau souffle.",
        "Cette bougie est faite pour vous si : Vous ressentez un trop-plein émotionnel. Vous avez besoin de lâcher prise sur une situation ou une période de vie. Vous souhaitez libérer des blocages émotionnels. Vous traversez une phase de transition ou de transformation. Vous cherchez à vous réaligner avec vous-même. Vous aspirez à un rituel doux pour retrouver apaisement et clarté intérieure. Pierres naturelles et vertus : Pierre de Lune — Favorise l'intuition et l'écoute intérieure. Apaise les émotions instables. Accompagne les cycles de transformation. Soutient les périodes de transition. Quartz Rose — Pierre du cœur et de l'amour de soi. Aide à libérer les blessures émotionnelles. Apporte douceur, réconfort et sécurité affective. Encourage le pardon et l'apaisement. Les pierres sont intégrées avec intention et choisies pour soutenir un processus de libération en douceur."
    ]),
    intro: "Libération est une invitation à déposer ce qui pèse. À laisser partir l'ancien. À desserrer les tensions invisibles. Chaque flamme devient un passage, un espace sacré où l'on relâche les blocages et où l'on se réaligne avec son cœur. Ce n'est pas seulement une bougie. C'est un moment pour respirer, ressentir et se libérer.",
    theme: JSON.stringify([
        "Fleur de lotus", // tête
        "Bergamotte, jasmin", // Coeur
        "Santal et musc" // fond
    ]),
    images: JSON.stringify([
        "/images/produits/liberation.webp",
        "/images/produits/liberation2.webp",
        "/images/produits/liberation3.webp",
        "/images/produits/liberation4.webp",
        "/images/produits/liberation5.webp"
    ]),
    caracteristique: JSON.stringify({
        composition: "Cire de coco et de soja 100% naturelle",
        meche: "Meche en coton bio",
        parfum: "Fragrance de Grasse",
        combustion: "Combustion",
        poids: "200",
        contenant: "Pot en beton fait main",
        fabrication: "France"
    }),
    variants: JSON.stringify([
        { id: 1, name: "Bougie Libération 200g", duration: "30", price: 32 }
    ]),
    stock: true,
    promo: 0,
    like: 0
},
{
    collection: "Terre",
    name: "Protection",
    slug: "bougie-protection",
    description: JSON.stringify([
        "La bougie Protection a été créée comme un véritable soutien énergétique pour celles qui ressentent le besoin de purifier leur espace, de se protéger des énergies négatives et de retrouver un sentiment de paix intérieure. Allumée en conscience, sa flamme devient un point d'ancrage sécurisant. Elle accompagne les moments de fatigue émotionnelle, les périodes de tension ou simplement le besoin de se sentir protégée dans son environnement.",
        "Cette bougie est faite pour vous si : • Vous ressentez des énergies lourdes autour de vous • Vous avez besoin de purifier votre intérieur • Vous souhaitez renforcer votre protection énergétique • Vous traversez une période stressante • Vous aspirez à plus de sérénité et de stabilité • Vous voulez créer un cocon protecteur chez vous. Pierres naturelles et vertus : Tourmaline noire — Absorbe les énergies négatives. Favorise l'ancrage. Protège et stabilise. Œil de Tigre — Repousse les influences négatives. Renforce la confiance. Apporte force et équilibre émotionnel."
    ]),
    intro: "Protection est une invitation à vous recentrer. À purifier votre espace. À vous sentir en sécurité. Chaque flamme devient un bouclier doux, un espace sacré où les énergies lourdes se dissipent, où l’agitation extérieure s’apaise et où la sérénité retrouve sa place. Ce n'est pas seulement une bougie. C'est un cocon énergétique.",
    theme: JSON.stringify([
        "Cannelle", // tête
        "Cedre, patchouli", // Coeur
        "Bois de santal" // fond
    ]),
    images: JSON.stringify([
        "/images/produits/protection.webp",
        "/images/produits/protection2.webp",
        "/images/produits/protection3.webp",
        "/images/produits/protection4.webp",
        "/images/produits/protection5.webp"
    ]),
    caracteristique: JSON.stringify({
        composition: "Cire de coco et de soja 100% naturelle",
        meche: "Meche en coton bio",
        parfum: "Fragrance de Grasse",
        combustion: "Combustion",
        poids: "200",
        contenant: "Pot en beton fait main",
        fabrication: "France"
    }),
    variants: JSON.stringify([
        { id: 1, name: "Bougie Protection 200g", duration: "30", price: 32 }
    ]),
    stock: true,
    promo: 0,
    like: 0
}
        ]
    });

  console.log("✅ Seed terminé !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
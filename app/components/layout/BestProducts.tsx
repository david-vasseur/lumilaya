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
                "La bougie Protection a été créée comme un véritable soutien énergétique pour celles qui ressentent le besoin de purifier leur espace, de se protéger des énergies négatives et de retrouver un sentiment de paix intérieure. Allumée en conscience, sa flamme devient un point d'ancrage sécurisant. Elle accompagne les moments de fatigue émotionnelle, les périodes de tension ou simplement le besoin de se sentir protégée dans son environnement.",
                "Cette bougie est faite pour vous si : • Vous ressentez des énergies lourdes autour de vous • Vous avez besoin de purifier votre intérieur • Vous souhaitez renforcer votre protection énergétique • Vous traversez une période stressante • Vous aspirez à plus de sérénité et de stabilité • Vous voulez créer un cocon protecteur chez vous. Pierres naturelles et vertus : Tourmaline noire — Absorbe les énergies négatives. Favorise l'ancrage. Protège et stabilise. Œil de Tigre — Repousse les influences négatives. Renforce la confiance. Apporte force et équilibre émotionnel."
            ],
            intro: "Protection est une invitation à vous recentrer. À purifier votre espace. À vous sentir en sécurité. Chaque flamme devient un bouclier doux, un espace sacré où les énergies lourdes se dissipent, où l’agitation extérieure s’apaise et où la sérénité retrouve sa place. Ce n'est pas seulement une bougie. C'est un cocon énergétique.",
            theme: [
                "Cannelle", // tête
                "Cedre, patchouli", // Coeur
                "Bois de santal" // fond
            ],
            images: [
                "/images/produits/protection.webp",
                "/images/produits/protection2.webp",
                "/images/produits/protection3.webp",
                "/images/produits/protection4.webp",
                "/images/produits/protection5.webp"
            ],
            caracteristique: {
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Meche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en beton fait main",
                fabrication: "France"
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
            createdAt: new Date()
        },
        {
            id: 3,
            collection: "Terre",
            name: "Libération",
            slug: "bougie-liberation",
            description: [
                "La bougie Libération a été créée comme un outil d'accompagnement émotionnel, pour celles qui ressentent le besoin de déposer ce qui pèse, de laisser partir l'ancien et de se réaligner avec leur vérité intérieure. Elle invite à ralentir, à respirer et à créer un espace sacré de lâcher-prise. Allumée en conscience, sa flamme devient un point d'ancrage pour libérer les tensions émotionnelles, apaiser le cœur et accueillir un nouveau souffle.",
                "Cette bougie est faite pour vous si : Vous ressentez un trop-plein émotionnel. Vous avez besoin de lâcher prise sur une situation ou une période de vie. Vous souhaitez libérer des blocages émotionnels. Vous traversez une phase de transition ou de transformation. Vous cherchez à vous réaligner avec vous-même. Vous aspirez à un rituel doux pour retrouver apaisement et clarté intérieure. Pierres naturelles et vertus : Pierre de Lune — Favorise l'intuition et l'écoute intérieure. Apaise les émotions instables. Accompagne les cycles de transformation. Soutient les périodes de transition. Quartz Rose — Pierre du cœur et de l'amour de soi. Aide à libérer les blessures émotionnelles. Apporte douceur, réconfort et sécurité affective. Encourage le pardon et l'apaisement. Les pierres sont intégrées avec intention et choisies pour soutenir un processus de libération en douceur."
            ],
            intro: "Libération est une invitation à déposer ce qui pèse. À laisser partir l'ancien. À desserrer les tensions invisibles. Chaque flamme devient un passage, un espace sacré où l'on relâche les blocages et où l'on se réaligne avec son cœur. Ce n'est pas seulement une bougie. C'est un moment pour respirer, ressentir et se libérer.",
            theme: [
                "Fleur de lotus", // tête
                "Bergamotte, jasmin", // Coeur
                "Santal et musc" // fond
            ],
            images: [
                "/images/produits/liberation.webp",
                "/images/produits/liberation2.webp",
                "/images/produits/liberation3.webp",
                "/images/produits/liberation4.webp",
                "/images/produits/liberation5.webp"
            ],
            caracteristique: {
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Meche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en beton fait main",
                fabrication: "France"
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
import { IProduct } from '@/type/product'
import { TopRatedProducts } from '../actions/product.action'
import Best from './Best'

async function BestProducts() {
    let products: IProduct[] = []

    if (process.env.SKIP_BUILD_STATIC_GENERATION === "true") {
        // Mock minimal pour que le composant ne plante pas
        products = [
        {
            id: 0,
            collection: "Émotion",
            name: "Produit test",
            slug: "produit-test",
            images: [],
            variants: [],
            description: [],
            intro: "",
            theme: [],
            caracteristique: {
            composition: "",
            meche: "",
            parfum: "",
            combustion: "",
            poids: "",
            contenant: "",
            fabrication: "",
            },
            stock: true,
            promo: 0,
            like: 0,
            createdAt: new Date(),
        },
        ]
    } else {
        products = await TopRatedProducts()
    }

    return <Best products={products} />
}

export default BestProducts
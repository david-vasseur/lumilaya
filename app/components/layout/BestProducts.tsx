import { TopRatedProducts } from '../actions/product.action'
import Best from './Best'

async function BestProducts() {

    const products = await TopRatedProducts();

    return (
        <>
            <Best products={products} />
        </>
    )
}

export default BestProducts
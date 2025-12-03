import { useCartStore } from '@/lib/store/cartStore';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';

interface ICartItem {
    id: number,
    image: string,
    name: string,
    price: number,
    qty: number
}

function CartItem({ id, image, name, price, qty = 1 }: ICartItem) {

    const { deleteItem } = useCartStore();

    return (
        <div className="grid grid-cols-[60%_10%_15%_15%] items-center justify-between py-4 border-b border-zinc-400">
            <div className="flex gap-5 items-center">
                <Image src={image} width={40} height={40} alt='image produit' className="rounded-lg" />
                <p>{name}</p>
            </div>            
            <span className="flex items-center justify-center">{qty}</span>
            <span className="flex items-center justify-center">{price} €</span>
            <div 
                className="flex items-center justify-center cursor-pointer"
                onClick={() => deleteItem(id)}
                >
                <Trash2 className="text-red-400/90" />
            </div>
        </div>
    )
}

export default CartItem;
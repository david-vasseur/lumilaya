"use client"

import Cart from "../components/features/Cart"
import { CheckoutForm } from "../components/features/form/CheckOutForm"

function page() {
    return (
        <div className="min-h-screen pt-14 flex">
            <div className="pt-5 sticky top-14 w-1/3 max-w-7xl border-r border-gray-500/60 text-gray-800 h-screen">
                <Cart />
            </div>
            <div className="pt-5 flex-2">
                <CheckoutForm />
            </div>            
        </div>
    )
}

export default page
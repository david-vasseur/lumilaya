"use client"

import Cart from "../components/features/Cart"
import { CheckoutForm } from "../components/features/form/CheckOutForm"

function page() {
    return (
        <div className="min-h-screen">
            <div className="pt-20 mx-auto max-w-7xl text-gray-800">
                <Cart />
            </div>
            <CheckoutForm />
        </div>
    )
}

export default page
"use client"

import React, { useTransition } from 'react'
import { seedProduct } from '../features/form/Seed.action';

function Seed() {

    const [isPending, startTransition] = useTransition();

    const handleClick = () => {
        startTransition(async () => {
            await seedProduct(); // appel côté serveur
            alert("data ajoutée");
        });
    };

    return (
        <div>
            <button
                    onClick={handleClick}
                    disabled={isPending}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                    >
                    {isPending ? "En cours..." : "Ajouter le produit Tendresse"}
                </button>
        </div>
    )
}

export default Seed
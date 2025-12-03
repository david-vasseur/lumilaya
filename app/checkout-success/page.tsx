import Link from "next/link";

export default function CheckoutSuccessPage({
    searchParams,
    }: {
    searchParams: { session_id?: string };
    }) {
    const sessionId = searchParams.session_id;

    if (!sessionId) {
        return (
            <div className="h-screen flex flex-col gap-10 items-center justify-center">
                <p className="text-2xl text-gray-600">Paiement introuvable.</p>
                <Link href={"/"} className="bg-gray-300 px-6 py-3 rounded-lg shadow-2xl text-gray-600">Retour à l'accueil</Link>
            </div>
        )

    }

    return (
        <div className="h-screen flex flex-col gap-10 items-center justify-center">
            <h1>✅ Paiement confirmé</h1>
            <p>Merci pour votre commande !</p>
            <p>
                Session ID : <strong>{sessionId}</strong>
            </p>
        </div>
    );
}

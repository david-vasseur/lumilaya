import { IFaq } from "./types/faq";

export const faqs: IFaq[] = [
    {
        id: 1,
        question: "Qu'est ce qui rend vos bougies artisanales spéciales ?",
        answer: "Nos bougies sont fabriquées à la main avec des produits 100% naturels, comme la cire de coco et des parfums naturels. Chaque bougie est unique et conçue pour offrir une combustion uniforme",
        about: "Bougies artisanales",
        keywords: ["bougie naturelle", "fait main", "parfum"]
    },
    {
        id: 2,
        question: "Combien de temps brûle une bougie ?",
        answer: "La durée de combustion varie selon la taille de la bougie;Petite bougie (50g): environ 10 heures; Moyenne (150g): environ 30 heures; Grande (300g): jusqu'à 60 heures",
        about: "Durée de combustion",
        keywords: ["temps de combustion", "bougie", "durée"]
    },
    {
        id: 3,
        question: "Comment entretenir ma bougie pour qu'elle dure plus longtemps ?",
        answer: "Coupez la mèche à 0.5cm avant chaque utilisation; Laissez la cire fondre uniformément à chaque brûlage; Evitez les courants d'air pour une combustion stable",
        about: "Entretien de bougie",
        keywords: ["mèche", "cire", "astuce"]
    },
    {
        id: 4,
        question: "Vos bougies sont-elles sûres pour les enfants et les animaux ?",
        answer: "Nos bougies sont faites sans produits chimiques nocifs, mais elles restent une flamme ouverte. Il est donc recommandé de ne jamais laisser une bougie allumée sans surveillance, surtout autour des enfants et des animaux.",
        about: "Sécurité",
        keywords: ["enfants", "animaux", "prudence"]
    },
    {
        id: 5,
        question: "Puis-je passer commande pour une livraison personnalisée ou un cadeau ?",
        answer: "Oui ! Nous proposons des options de personnalisation, comme le choix de parfum ou de couleur, ainsi que des emballages cadeaux. Vous pouvez sélectionner ces options lors de votre commande en ligne.",
        about: "Personnalisation et cadeau",
        keywords: ["personnalisé", "cadeau", "livraison"]
    },
    {
        id: 6,
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons les paiements via Stripe, donc vous pouvez régler par carte bancaire ou wallet compatible. Vos informations bancaires ne sont jamais stockées sur notre site pour garantir la sécurité.",
        about: "Paiement",
        keywords: ["Stripe", "carte bancaire", "sécurité"]
    },
    {
        id: 7,
        question: "Comment suivre ma commande ?",
        answer: "Une fois votre commande passée, vous recevrez un email de confirmation avec un lien de suivi. Vous pourrez consulter l'état de votre commande jusqu'à la livraison.",
        about: "Suivi de commande",
        keywords: ["commande", "suivi", "livraison"]
    }
];
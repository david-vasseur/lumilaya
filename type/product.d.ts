export interface IProduct {
  id: string;
  collection: string;
  name: string;
  slug: string;
  description: string[] | null; // tableau de textes
  intro: string;
  theme: string[]; // tableau de textes
  images: string[]; // tableau d'URLs
  caracteristique: {
    composition: string;
    meche: string;
    parfum: string;
    combustion: string;
    poids: string;
    contenant: string;
    fabrication: string;
  };
  variants: {
    id: number;
    name: string;
    duration: string;
    price: number;
  }[];
  stock: boolean;
  promo?: number;
  like?: number;
  createdAt: Date;
}

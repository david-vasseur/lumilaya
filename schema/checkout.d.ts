export interface ICheckout {
  // Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Adresse de livraison
  shippingAddress: string;
  shippingCity: string;
  shippingPostalCode: string;
  shippingCountry: string;

  // Adresse de facturation
  billingAddress: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;

  // Conditions générales de vente
  acceptCGV: boolean;
}
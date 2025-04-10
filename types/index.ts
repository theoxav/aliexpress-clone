export type Product = {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
};

export type Products = Product[];

export type Address = {
  id: string;
  contactName: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

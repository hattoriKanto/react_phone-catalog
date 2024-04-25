export type ProductTrimmed = {
  prodId: string;
  img: string;
  name: string;
  category: string;
  price: number;
};

export type ProductInCart = {
  product: ProductTrimmed;
  quantity: number;
};

export type ProductInCart = {
  prodId: string;
  product: {
    img: string;
    name: string;
    category: string;
    price: number;
  };
  quantity: number;
};

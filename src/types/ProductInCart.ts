import { Product } from './Product';

export type ProductInCart = {
  prodId: number;
  product: Product;
  quantity: number;
};

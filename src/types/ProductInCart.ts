import { Product } from './Product';

export interface ProductInCart {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  product: Product;
}

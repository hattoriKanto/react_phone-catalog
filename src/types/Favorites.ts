import { Product } from "./Product";

export interface Favorite {
  id: number;
  userId: number;
  productId: number;
  product: Product;
}

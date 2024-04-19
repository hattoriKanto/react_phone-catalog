import { Product } from '../../types';

export type CartContextType = {
  cart: Product[];
  cartQuantity: number;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  clearCart: () => void;
  isProductInCart: (id: number) => boolean;
  totalPrice: number;
};

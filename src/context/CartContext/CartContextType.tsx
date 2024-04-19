import { Product } from '../../Types';

export type CartContextType = {
  cart: Product[];
  cartQuantity: number;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  clearCart: () => void;
  isProductInCart: (id: number) => boolean;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

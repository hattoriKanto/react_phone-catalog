import { ProductInCart } from '../../types';

export type CartContextType = {
  cart: ProductInCart[];
  cartQuantity: number;
  addToCart: (product: ProductInCart) => void;
  deleteFromCart: (productId: string) => void;
  clearCart: () => void;
  isProductInCart: (id: string) => boolean;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
};

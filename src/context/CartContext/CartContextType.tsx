import { ProductInCart, ProductTrimmed } from '../../types';

export type CartContextType = {
  cart: ProductInCart[];
  cartQuantity: number;
  addToCart: (product: ProductTrimmed) => void;
  deleteFromCart: (productId: string) => void;
  clearCart: () => void;
  isProductInCart: (id: string) => boolean;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
};

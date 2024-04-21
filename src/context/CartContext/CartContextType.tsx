import { Product, ProductInCart } from '../../types';

export type CartContextType = {
  cart: ProductInCart[];
  cartQuantity: number;
  addToCart: (product: Product) => void;
  deleteFromCart: (productId: number) => void;
  clearCart: () => void;
  isProductInCart: (id: number) => boolean;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};

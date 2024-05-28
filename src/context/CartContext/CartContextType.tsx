import { ProductInCart } from '../../types';

export type CartContextType = {
  cart: ProductInCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
  cartQuantity: number;
};

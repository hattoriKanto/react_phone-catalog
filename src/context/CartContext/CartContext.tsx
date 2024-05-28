import React, { createContext, useEffect, useState } from 'react';
import { CartContextType } from './CartContextType';
import { ProductInCart } from '../../types';
import { getUserCart } from '../../utils';

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  cartQuantity: 0,
});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<ProductInCart[]>([]);
  const cartQuantity = cart.reduce((accum, product) => {
    accum += product.quantity;

    return accum;
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await getUserCart();

        setCart(data);
      } catch (error) {
        throw new Error('Failed to fetch cart');
      }
    };

    fetchCart();
  }, []);

  const cartState: CartContextType = {
    cart,
    setCart,
    cartQuantity,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};

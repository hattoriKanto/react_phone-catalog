import React, { createContext, useMemo, useState } from 'react';
import { CartContextType } from './CartContextType';
import { Product } from '../../types';

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

type Props = {
  children: React.ReactNode;
};

const CARD_KEY = 'card';

const saveCartToLocalStorage = (currentCart: Product[]) => {
  localStorage.setItem(CARD_KEY, JSON.stringify(currentCart));
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const currentCart = localStorage.getItem(CARD_KEY);

    if (currentCart === null) {
      return [];
    }

    try {
      return JSON.parse(currentCart);
    } catch (error) {
      localStorage.removeItem(CARD_KEY);

      return [];
    }
  });

  const cartQuantity = useMemo(() => cart.length, [cart]);

  const addToCart = (product: Product) => {
    if (!cart.some((item: Product) => item.id === product.id)) {
      const updatedCart = [...cart, product];
  
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  const deleteFromCart = (productId: number) => {
    const updatedCart = cart.filter(
      (product: Product) => product.id !== productId,
    );

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CARD_KEY);
  };

  const isProductInCart = (id: number) => {
    return cart.some((product: Product) => product.id === id);
  };

  const cartState: CartContextType = {
    cart,
    cartQuantity,
    addToCart,
    deleteFromCart,
    clearCart,
    isProductInCart,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};

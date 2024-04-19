import React, { createContext, useMemo, useState } from 'react';
import { CartContextType } from './CartContextType';
import { Product } from '../../types';

export const CartContext = createContext<CartContextType>({
  cart: [],
  cartQuantity: 0,
  addToCart: (product: Product) => {},
  deleteFromCart: (productId: number) => {},
  clearCart: () => {},
  isProductInCart: (id: number) => false,
  increaseQuantity: (productId: number) => {},
  decreaseQuantity: (productId: number) => {},
});

type ProductInCart = {
  prodId: number;
  product: Product;
  quantity: number;
};

type Props = {
  children: React.ReactNode;
};

const CARD_KEY = 'card';

const saveCartToLocalStorage = (currentCart: ProductInCart[]) => {
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
    if (!cart.some((item: ProductInCart) => item.prodId === product.id)) {
      const updatedCart = [
        ...cart,
        { prodId: product.id, product, quantity: 1 },
      ];

      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  const deleteFromCart = (productId: number) => {
    const updatedCart = cart.filter(
      (product: ProductInCart) => product.prodId !== productId,
    );

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CARD_KEY);
  };

  const isProductInCart = (id: number) => {
    return cart.some((product: ProductInCart) => product.prodId === id);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map((product: ProductInCart) => {
      if (product.prodId === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
    });
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    if (
      cart.find((product: ProductInCart) => product.prodId === productId)
        .quantity === 1
    ) {
      deleteFromCart(productId);
      return;
    }

    const updatedCart = cart.map((product: ProductInCart) => {
      if (product.prodId === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
    });

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const cartState: CartContextType = {
    cart,
    cartQuantity,
    addToCart,
    deleteFromCart,
    clearCart,
    isProductInCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );
};

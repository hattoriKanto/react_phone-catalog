import React, { createContext, useMemo, useState } from 'react';
import { Product } from '../../types';
import { FavoritesContextType } from './FavoritesContextType';

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  favoritesQuantity: 0,
  addToFavorites: () => {},
  deleteFromFavorites: () => {},
  isProductInFavorites: () => false,
});

type Props = {
  children: React.ReactNode;
};

const FAVORITES_KEY = 'favorites';

const saveFavoritesToLocalStorage = (currentFavorites: Product[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(currentFavorites));
};

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const currentFavorites = localStorage.getItem(FAVORITES_KEY);

    if (currentFavorites === null) {
      return [];
    }

    try {
      return JSON.parse(currentFavorites);
    } catch (error) {
      localStorage.removeItem(FAVORITES_KEY);

      return [];
    }
  });

  const favoritesQuantity = useMemo(() => favorites.length, [favorites]);

  const addToFavorites = (product: Product) => {
    if (!favorites.some((item: Product) => item.id === product.id)) {
      const updatedFavorites = [
        ...favorites,
        product,
      ];

      setFavorites(updatedFavorites);
      saveFavoritesToLocalStorage(updatedFavorites);
    }
  };

  const deleteFromFavorites = (productId: number) => {
    const updatedFavorites = favorites.filter(
      (product: Product) => product.id !== productId,
    );

    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  const isProductInFavorites = (id: number) => {
    return favorites.some((product: Product) => product.id === id);
  };

  const favoritesState: FavoritesContextType = {
    favorites,
    favoritesQuantity,
    addToFavorites,
    deleteFromFavorites,
    isProductInFavorites,
  };

  return (
    <FavoritesContext.Provider value={favoritesState}>{children}</FavoritesContext.Provider>
  );
};

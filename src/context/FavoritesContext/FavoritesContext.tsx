import React, { createContext, useMemo, useState } from 'react';
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

const saveFavoritesToLocalStorage = (currentFavorites: string[]) => {
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

  const addToFavorites = (product: string) => {
    if (!favorites.some((item: string) => item === product)) {
      const updatedFavorites = [...favorites, product];

      setFavorites(updatedFavorites);
      saveFavoritesToLocalStorage(updatedFavorites);
    }
  };

  const deleteFromFavorites = (productId: string) => {
    const updatedFavorites = favorites.filter(
      (product: string) => product !== productId,
    );

    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  const isProductInFavorites = (id: string) => {
    return favorites.some((product: string) => product === id);
  };

  const favoritesState: FavoritesContextType = {
    favorites,
    favoritesQuantity,
    addToFavorites,
    deleteFromFavorites,
    isProductInFavorites,
  };

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  );
};

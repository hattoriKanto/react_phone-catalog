import React, { createContext, useEffect, useMemo, useState } from 'react';
import { FavoritesContextType } from './FavoritesContextType';
import { getUserFavorites } from '../../utils';
import { Favorite } from '../../types/Favorites';

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},
  isLoading: true,
  setIsLoading: () => {},
  favoritesQuantity: 0,
});

type Props = {
  children: React.ReactNode;
};

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getUserFavorites();
        setFavorites(data);
      } catch (error) {
        throw new Error('Failed to fetch favorites');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const favoritesQuantity = useMemo(() => favorites.length, [favorites]);

  const favoritesState = useMemo(
    () => ({
      favorites,
      setFavorites,
      isLoading,
      setIsLoading,
      favoritesQuantity,
    }),
    [favorites, setFavorites, isLoading, setIsLoading, favoritesQuantity],
  );

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  );
};

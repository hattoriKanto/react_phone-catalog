import React, { createContext, useEffect, useMemo, useState } from 'react';
import { FavoritesContextType } from './FavoritesContextType';
import { getUserFavorites } from '../../utils';
import { useParams } from 'react-router-dom';
import { Favorite } from '../../types/Favorites';

export const FavoritesContext = createContext<FavoritesContextType>({
  normalizedUserId: 1,
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
  const { userId } = useParams<{ userId?: string }>();
  const normalizedUserId = userId ? Number(userId) : 1;

  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getUserFavorites(normalizedUserId);

        setFavorites(data);
      } catch (error) {
        throw new Error('Failed to fetch favorites');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [normalizedUserId]);

  const favoritesQuantity = useMemo(() => favorites.length, [favorites]);

  const favoritesState = useMemo(
    () => ({
      normalizedUserId,
      favorites,
      setFavorites,
      isLoading,
      setIsLoading,
      favoritesQuantity,
    }),
    [
      normalizedUserId,
      favorites,
      setFavorites,
      isLoading,
      setIsLoading,
      favoritesQuantity,
    ],
  );

  return (
    <FavoritesContext.Provider value={favoritesState}>
      {children}
    </FavoritesContext.Provider>
  );
};

import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext/FavoritesContext';

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};

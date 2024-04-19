import { Product } from '../../types';

export type FavoritesContextType = {
  favorites: Product[];
  favoritesQuantity: number;
  addToFavorites: (product: Product) => void;
  deleteFromFavorites: (productId: number) => void;
  isProductInFavorites: (id: number) => boolean;
};

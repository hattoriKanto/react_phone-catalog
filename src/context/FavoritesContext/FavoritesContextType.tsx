export type FavoritesContextType = {
  favorites: string[];
  favoritesQuantity: number;
  addToFavorites: (product: string) => void;
  deleteFromFavorites: (productId: string) => void;
  isProductInFavorites: (id: string) => boolean;
};

import { Favorite } from "../../types/Favorites";

export type FavoritesContextType = {
  favorites: Favorite[];
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  favoritesQuantity: number;
};

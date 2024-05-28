import { Product, ProductExpanded } from '../../types';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  AddToCartAndFavStack,
  AddToCartButton,
  AddToCartTypography,
  AddToFavouritesButton,
} from './CartAndFavouriteBlock.styles';
import { useEffect, useState } from 'react';
import {
  addToFavorites,
  getOneFavorite,
  isProductInFavorites,
  removeFromFavorites,
} from '../../utils';
import { Favorite } from '../../types/Favorites';

type Props = {
  product: ProductExpanded;
};

export const CartAndFavouriteBlock: React.FC<Props> = ({ product }) => {
  const { setFavorites } = useFavoritesContext();
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const { addToCart, deleteFromCart, isProductInCart } = useCartContext();

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const checkFavorites = async () => {
      const result = await isProductInFavorites(product.id);
      setIsInFavorites(result);
    };

    checkFavorites();
  }, [userId, product.id]);

  const toggleAddToCard = (
    product: ProductExpanded,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isInCart) {
      addToCart({
        prodId: product.slug,
        img: product.images[0],
        name: product.name,
        category: product.category,
        price: product.price,
      });
    } else {
      deleteFromCart(product.slug);
    }
  };

  const toggleAddToFavorites = async (
    product: Product,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      if (!isInFavorites) {
        await addToFavorites(product.id);

        const newFavorite = await getOneFavorite(product.id);

        if (newFavorite) {
          setFavorites((currentFavorites: Favorite[]) => [
            ...currentFavorites,
            newFavorite,
          ]);
        }
      } else {
        await removeFromFavorites(product.id);

        setFavorites((currentFavorites: Favorite[]) =>
          currentFavorites.filter(
            favorite => favorite.product.id !== product.id,
          ),
        );
      }

      const result = await isProductInFavorites(product.id);

      setIsInFavorites(result);
    } catch (error) {
      throw new Error('Failed to toggle favorites');
    }
  };

  const isInCart = isProductInCart(product.slug);

  return (
    <AddToCartAndFavStack direction="row" spacing={2}>
      <AddToCartButton
        variant={!isInCart ? 'contained' : 'outlined'}
        onClick={event => toggleAddToCard(product, event)}
        color="accent"
      >
        <AddToCartTypography variant="button" color="white">
          {!isInCart ? 'Add to cart' : 'Added'}
        </AddToCartTypography>
      </AddToCartButton>
      <AddToFavouritesButton
        aria-label="add to favorites"
        onClick={event => toggleAddToFavorites(product, event)}
      >
        {!isInFavorites ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon color="secondaryAccent" />
        )}
      </AddToFavouritesButton>
    </AddToCartAndFavStack>
  );
};

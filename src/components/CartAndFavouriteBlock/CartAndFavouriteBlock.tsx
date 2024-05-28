import { Product, ProductExpanded, ProductInCart } from '../../types';
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
  addProductToCart,
  addToFavorites,
  deleteProductFromCart,
  getOneFavorite,
  getOneProductInCart,
  isProductInCart,
  isProductInFavorites,
  removeFromFavorites,
} from '../../utils';
import { Favorite } from '../../types/Favorites';

type Props = {
  product: ProductExpanded;
};

export const CartAndFavouriteBlock: React.FC<Props> = ({ product }) => {
  const { setCart, cart } = useCartContext();
  const { setFavorites, favorites } = useFavoritesContext();
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const checkFavorites = async () => {
      const result = await isProductInFavorites(product.id);
      setIsInFavorites(result);
    };

    const checkCart = async () => {
      const result = await isProductInCart(product.id);
      setIsInCart(result);
    };

    checkFavorites();
    checkCart();
  }, [favorites, cart]);

  const toggleAddToCard = async (product: Product, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      if (!isInCart) {
        await addProductToCart(product.id);

        const newCartProduct = (await getOneProductInCart(
          product.id,
        )) as ProductInCart;

        setCart((currentCart: ProductInCart[]) => [
          ...currentCart,
          newCartProduct,
        ]);
      } else {
        await deleteProductFromCart(product.id);

        setCart((currentCart: ProductInCart[]) =>
          currentCart.filter(
            productInCart => productInCart.productId !== product.id,
          ),
        );
      }

      const result = await isProductInCart(product.id);

      setIsInCart(result);
    } catch (error) {
      throw new Error('Failed to toggle `Add to cart`');
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

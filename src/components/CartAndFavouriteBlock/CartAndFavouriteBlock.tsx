import { ProductExpanded } from '../../types';
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

type Props = {
  product: ProductExpanded;
};

export const CartAndFavouriteBlock: React.FC<Props> = ({ product }) => {
  const { addToCart, deleteFromCart, isProductInCart } = useCartContext();
  const { addToFavorites, deleteFromFavorites, isProductInFavorites } =
    useFavoritesContext();

  const toggleAddToCard = (
    product: ProductExpanded,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isInCart) {
      addToCart({
        prodId: product.id,
        img: product.images[0],
        name: product.name,
        category: product.category,
        price: product.priceDiscount,
      });
    } else {
      deleteFromCart(product.id);
    }
  };

  const toggleAddToFavorites = (
    product: ProductExpanded,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isInFavorites) {
      addToFavorites(product.id);
    } else {
      deleteFromFavorites(product.id);
    }
  };

  const isInCart = isProductInCart(product.id);
  const isInFavorites = isProductInFavorites(product.id);

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

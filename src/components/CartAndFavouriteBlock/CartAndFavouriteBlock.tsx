import { Button, IconButton, Stack, Typography } from '@mui/material';
import { ProductExpanded } from '../../types';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type Props = {
  product: ProductExpanded;
};

export const CartAndFavouriteBlock: React.FC<Props> = ({ product }) => {
  let id = sessionStorage.getItem('shownProduct');

  id ? id : (id = '0');

  const { addToCart, deleteFromCart, isProductInCart } = useCartContext();
  const { addToFavorites, deleteFromFavorites, isProductInFavorites } =
    useFavoritesContext();

  const toggleAddToCard = (
    product: ProductExpanded,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isInCart && id) {
      addToCart({
        id: +id,
        name: product.name,
        price: product.priceDiscount,
        image: product.images[0],
        category: product.category,
        itemId: product.id,
        fullPrice: product.priceRegular,
        screen: product.screen,
        capacity: product.capacity,
        color: product.color,
        ram: product.ram,
        year: 0,
      });
    } else if (id) {
      deleteFromCart(+id);
    }
  };

  const toggleAddToFavorites = (
    product: ProductExpanded,
    event: React.MouseEvent,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isInFavorites) {
      addToFavorites({
        ...product,
        id: +id,
        price: product.priceDiscount,
        image: product.images[0],
        itemId: product.id,
        fullPrice: product.priceRegular,
        year: 0,
      });
    } else {
      deleteFromFavorites(+id);
    }
  };

  const isInCart = isProductInCart(+id);
  const isInFavorites = isProductInFavorites(+id);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        variant={!isInCart ? 'contained' : 'outlined'}
        onClick={event => toggleAddToCard(product, event)}
        color="accent"
        sx={{
          width: '260px',
          height: '48px',
          py: 1,
          '&.MuiButton-contained': { color: '#fff' },
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Typography
          variant="button"
          color="white"
          sx={{ textTransform: 'none', textDecoration: 'none' }}
        >
          {!isInCart ? 'Add to cart' : 'Added'}
        </Typography>
      </Button>
      <IconButton
        sx={{
          border: 1,
          borderColor: '#B4BDC3',
          color: 'black',
          width: '48px',
          height: '48px',
        }}
        aria-label="add to favorites"
        onClick={event => toggleAddToFavorites(product, event)}
      >
        {!isInFavorites ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteIcon color="secondaryAccent" />
        )}
      </IconButton>
    </Stack>
  );
};

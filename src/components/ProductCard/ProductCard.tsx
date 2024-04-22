import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types';
import {
  Button,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { id, name, price, fullPrice, screen, capacity, ram, image } = product;
  const { addToCart, deleteFromCart, isProductInCart } = useCartContext();
  const { addToFavorites, deleteFromFavorites, isProductInFavorites } =
    useFavoritesContext();

  const toggleAddToCard = (product: Product) => {
    if (!isInCart) {
      addToCart(product);
    } else {
      deleteFromCart(product.id);
    }
  };

  const toggleAddToFavorites = (product: Product) => {
    if (!isInFavorites) {
      addToFavorites(product);
    } else {
      deleteFromFavorites(product.id);
    }
  };

  const isInCart = isProductInCart(id);
  const isInFavorites = isProductInFavorites(id);

  return (
    <>
      <Card
        sx={{
          boxSizing: 'border-box',
          maxWidth: 272,
          maxHeight: 506,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: 1,
          borderColor: '#E2E6E9',
        }}
      >
        <CardContent sx={{ m: 1, p: '32px' }}>
          <Link
            to={`/${product.category}/${product.itemId}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <CardMedia
              component="img"
              height="50%"
              image={image}
              sx={{
                height: 196,
                maxWidth: 208,
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
            <Typography variant="h4" component="div" sx={{ pt: '24px' }}>
              {name}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 1, pb: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {`$${price}`}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#89939A',
                  textDecoration: 'line-through',
                }}
              >
                {`$${fullPrice}`}
              </Typography>
            </Stack>

            <Divider />

            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: 'space-between', pt: 2 }}
            >
              <Typography variant="body1" sx={{ color: '#89939A' }}>
                Screen
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                {screen}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: 'space-between', pt: 0.5 }}
            >
              <Typography variant="body1" sx={{ color: '#89939A' }}>
                Capacity
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                {capacity}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: 'space-between', pt: 0.5 }}
            >
              <Typography variant="body1" sx={{ color: '#89939A' }}>
                RAM
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'black', fontWeight: 'bold' }}
              >
                {ram}
              </Typography>
            </Stack>
          </Link>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              pt: 2,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Button
              variant={!isInCart ? 'contained' : 'outlined'}
              onClick={() => toggleAddToCard(product)}
              color="accent"
              sx={{
                width: '160px',
                py: 1,
                '&.MuiButton-contained': { color: '#fff' },
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
              sx={{ border: 1, borderColor: '#B4BDC3', color: 'black' }}
              aria-label="add to favorites"
              onClick={() => toggleAddToFavorites(product)}
            >
              {!isInFavorites ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon color="secondaryAccent" />
              )}
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

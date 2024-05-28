import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types';
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useCartContext } from '../../hooks/useCartContext';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  addToFavorites,
  removeFromFavorites,
  isProductInFavorites,
  getOneFavorite,
} from '../../utils/useFetchData';
import { Favorite } from '../../types/Favorites';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    images,
    category,
    slug,
  } = product;

  const { setFavorites } = useFavoritesContext();
  const { addToCart, deleteFromCart, isProductInCart } = useCartContext();
  const userId = localStorage.getItem('userId');

  //
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const currentImg = images[0];

  //
  useEffect(() => {
    const checkFavorites = async () => {
      const result = await isProductInFavorites(product.id);
      setIsInFavorites(result);
    };

    checkFavorites();
  }, [userId, product.id]);

  const toggleAddToCard = (product: Product, event: React.MouseEvent) => {
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

  //
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
    <Link
      to={`/${category}/${slug}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
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
          borderColor: 'element.main',
        }}
      >
        <CardContent sx={{ width: '100%', m: 1, p: '32px' }}>
          <CardMedia
            component="img"
            height="50%"
            image={currentImg}
            sx={{
              height: 196,
              maxWidth: 208,
              objectFit: 'contain',
              objectPosition: 'center',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
          <Box
            sx={{
              pt: 1,
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 2,
              }}
            />
          </Box>
          <Box
            height={36}
            sx={{
              pt: 1,
              pb: 1,
            }}
          >
            <Tooltip title={name}>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitLineClamp: 2,
                }}
              >
                {name}
              </Typography>
            </Tooltip>
          </Box>

          <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              ${price}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: 'secondary.main',
                textDecoration: 'line-through',
              }}
            >
              ${fullPrice}
            </Typography>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: 'space-between', pt: 2 }}
          >
            <Typography variant="body1" sx={{ color: 'secondary.main' }}>
              Screen
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'black',
                fontWeight: 'bold',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: 1,
                paddingLeft: 2,
              }}
            >
              {screen}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: 'space-between', pt: 0.5 }}
          >
            <Typography variant="body1" sx={{ color: 'secondary.main' }}>
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
            <Typography variant="body1" sx={{ color: 'secondary.main' }}>
              RAM
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'black', fontWeight: 'bold' }}
            >
              {ram}
            </Typography>
          </Stack>

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
              onClick={event => toggleAddToCard(product, event)}
              color="accent"
              sx={{
                width: '160px',
                py: 1,
                '&.MuiButton-contained': { color: 'white.main' },
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
              sx={{ border: 1, borderColor: 'icon.main', color: 'black' }}
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
        </CardContent>
      </Card>
    </Link>
  );
};

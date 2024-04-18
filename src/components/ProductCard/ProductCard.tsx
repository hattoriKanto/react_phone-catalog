import { useState } from 'react';
import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../types/Product';
import {
  Button,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, fullPrice, screen, capacity, ram, image } = product;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  return (
    <Card
      sx={{
        boxSizing: 'border-box',
        width: 272,
        height: 506,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: '#E2E6E9',
      }}
    >
      <CardMedia
        component="img"
        height="50%"
        image={image}
        sx={{
          pt: 4,
          height: 196,
          width: 208,
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
      <CardContent sx={{ m: 1 }}>
        <Typography variant="h6" component="div">
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
          sx={{ justifyContent: 'space-between', pt: 1 }}
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

        <Grid container spacing={2} sx={{ pt: 4, alignItems: 'center' }}>
          <Grid item xs={8}>
            <Button
              variant={!isCart ? 'contained' : 'outlined'}
              onClick={() => setIsCart(prev => !prev)}
              color="accent"
            >
              Add to cart
            </Button>
          </Grid>

          <Grid item xs={4}>
            <IconButton
              sx={{ border: 1, borderColor: '#B4BDC3', color: 'black' }}
              aria-label="add to favorites"
              onClick={() => setIsFavorite(prev => !prev)}
            >
              {!isFavorite ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon sx={{ color: '#476DF4' }} />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

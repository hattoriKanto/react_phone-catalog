import {
  Box,
  Button,
  Fade,
  Grid,
  Slide,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { Product } from '../../types';
import { getUserFavorites } from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import Container from '../../components/Container/Container';
import { BreadCrumbsComponent, CardSkeleton } from '../../components';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Favorite {
  id: number;
  userId: number;
  productId: number;
  product: Product;
}

export const FavoritesPage: React.FC = () => {
  //c
  const { userId } = useParams<{ userId?: string }>();
  const normalizedUserId = userId ? Number(userId) : 1;

  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getUserFavorites(normalizedUserId);

        setFavorites(data);
      } catch (error) {
        throw new Error('Failed to fetch favorites');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();

    // const intervalId = setInterval(fetchFavorites, 1000);

    // return () => clearInterval(intervalId);
  }, [normalizedUserId]);

  const favoritesQuantity = useMemo(() => favorites.length, [favorites]);
  const visibleProducts = favorites.map((favorite: Favorite) => favorite.product);

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <Container>
      <BreadCrumbsComponent />
      <Stack>
        <Slide in={true} direction="down" timeout={800}>
          <Typography variant="h1" sx={{ pt: 4 }}>
            Favorites
          </Typography>
        </Slide>

        {favoritesQuantity === 0 && (
          <Fade in={true} timeout={800}>
            <Stack
              direction={'column'}
              spacing={2}
              sx={{ alignItems: 'center' }}
            >
              <Box
                sx={{
                  alignSelf: 'center',
                  width: '20vmax',
                  height: '20vmax',
                }}
              >
                <script
                  src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                  type="module"
                ></script>
                <DotLottiePlayer
                  src="https://lottie.host/c8067ef1-5de7-41f4-9b0d-bae99305efb5/IuWIJHiZqR.json"
                  background="transparent"
                  loop
                  autoplay
                ></DotLottiePlayer>
              </Box>
              <Typography variant="h4" sx={{ pt: 2 }}>
                Looks like you have not added anything to your favorites.
              </Typography>
              <Link to="/">
                <Button
                  variant="contained"
                  color="accent"
                  sx={{
                    width: '160px',
                    alignSelf: 'center',
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
                    Return To Shop
                  </Typography>
                </Button>
              </Link>
            </Stack>
          </Fade>
        )}

        {favoritesQuantity !== 0 && (
          <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
            {favoritesQuantity === 1
              ? `${favoritesQuantity} item`
              : `${favoritesQuantity} items`}
          </Typography>
        )}
      </Stack>
      <Box display={'flex'} justifyContent={'center'}>
        <CustomGrid>
          {isLoading ? (
            <>
              {Array.from(new Array(4)).map(() => (
                <GridStyled item xs={1} md={1} key={uuidv4()}>
                  <CardSkeleton />
                </GridStyled>
              ))}
            </>
          ) : (
            <>
              {visibleProducts?.map((product: Product) => (
                <GridStyled item xs={1} md={1} key={product.id}>
                  <ProductCard product={product} setFavorites={setFavorites} />
                </GridStyled>
              ))}
            </>
          )}
        </CustomGrid>
      </Box>
    </Container>
  );
};

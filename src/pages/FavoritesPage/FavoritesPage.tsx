import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import { Box, Grid, Typography, styled } from '@mui/material';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import Container from '../../components/Container/Container';
import { BreadCrumbsComponent } from '../../components';

export const FavoritesPage: React.FC = () => {
  const { favorites, favoritesQuantity } = useFavoritesContext();
  const { isLoading, data, error } = useFetchData<Product>('products.json');

  const visibleFavourites = data.filter(item =>
    favorites.includes(item.itemId),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <Container>
      <BreadCrumbsComponent />
      <Typography variant="h1">Favorites</Typography>
      {favoritesQuantity !== 0 && (
        <Typography variant="body1" color="secondary" sx={{ px: 18, pb: 4 }}>
          {favoritesQuantity === 1
            ? `${favoritesQuantity} item`
            : `${favoritesQuantity} items`}
        </Typography>
      )}
      <Box display={'flex'} justifyContent={'center'}>
        <CustomGrid>
          {visibleFavourites?.map(product => (
            <GridStyled item xs={1} md={1} key={product.id}>
              <ProductCard product={product} />
            </GridStyled>
          ))}
        </CustomGrid>
      </Box>
    </Container>
  );
};

import { Grid, Stack, Typography, styled } from '@mui/material';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import { useLocation } from 'react-router-dom';
import Container from '../Container/Container';

export const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.slice(1);

  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const filteredData = data?.filter(data => data.category === categoryName);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <>
      <Container>
        <Stack sx={{ px: '2rem' }}>
          <Typography variant="h1" sx={{ pt: 4 }}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
            {filteredData.length} models
          </Typography>
        </Stack>
      </Container>

      <CustomGrid>
        {filteredData?.map(phone => (
          <GridStyled item xs={1} md={1} key={phone.id}>
            <ProductCard product={phone} />
          </GridStyled>
        ))}
      </CustomGrid>
    </>
  );
};

export default CategoryPage;

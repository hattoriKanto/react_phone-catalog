import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import { useLocation, useSearchParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import BreadCrumbsComponent from '../../components/BreadCrumbs/BreadCrumbsComponent';
import { useMemo } from 'react';
import { getFilter } from '../../functions/getFilter';

export const CategoryPage = () => {
  const location = useLocation();
  const categoryName = location.pathname.slice(1);
  const { data, error } = useFetchData<Product>('products.json');

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const visibleProducts = useMemo(() => {
    return getFilter({ data, query });
  }, [data, query]);

  const filteredData = visibleProducts?.filter(
    data => data.category === categoryName,
  );

  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <>
      <Container>
        <BreadCrumbsComponent />
        <Stack sx={{ px: '2rem' }}>
          <Typography variant="h1" sx={{ pt: 4 }}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </Typography>
          {filteredData.length > 0 && (
            <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
              {filteredData.length} models
            </Typography>
          )}
          {filteredData.length === 0 && (
            <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
              There are no {categoryName} matching the query
            </Typography>
          )}
        </Stack>
        <Box display={'flex'} justifyContent={'center'}>
          <CustomGrid>
            {filteredData?.map(phone => (
              <GridStyled item xs={1} md={1} key={phone.id}>
                <ProductCard product={phone} />
              </GridStyled>
            ))}
          </CustomGrid>
        </Box>
      </Container>
    </>
  );
};

export default CategoryPage;

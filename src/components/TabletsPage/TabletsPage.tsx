import { CustomGrid } from '../CustomGrid';
import { ProductCard } from '../ProductCard/ProductCard';
import useFetchData from '../../utils/useFetchData';
import { Product } from '../../types';
import { Grid, Typography, styled } from '@mui/material';

export const TabletsPage = () => {
  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const filteredData = data.filter(product => product.category === 'tablets');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <>
      <Typography variant="h1" sx={{ px: 18, pt: 2 }}>
        Tablets
      </Typography>
      <Typography variant="body1" color="secondary" sx={{ px: 18 }}>
        {filteredData.length} models
      </Typography>
      <CustomGrid>
        {filteredData?.map(tablet => (
          <GridStyled item xs={1} md={1} key={tablet.id}>
            <ProductCard product={tablet} />
          </GridStyled>
        ))}
      </CustomGrid>
    </>
  );
};

export default TabletsPage;

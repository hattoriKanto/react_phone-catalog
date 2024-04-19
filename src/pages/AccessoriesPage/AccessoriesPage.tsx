import { CustomGrid } from '../../components/CustomGrid';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import useFetchData from '../../utils/useFetchData';
import { Product } from '../../Types';
import { Grid, Typography, styled } from '@mui/material';

const AccessoriesPage = () => {
  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const filteredData = data.filter(
    product => product.category === 'accessories',
  );

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
        Accessories
      </Typography>
      <Typography variant="body1" color="secondary" sx={{ px: 18 }}>
        {filteredData.length} models
      </Typography>
      <CustomGrid>
        {filteredData?.map(accessory => (
          <GridStyled item xs={1} md={1} key={accessory.id}>
            <ProductCard product={accessory} />
          </GridStyled>
        ))}
      </CustomGrid>
    </>
  );
};

export default AccessoriesPage;

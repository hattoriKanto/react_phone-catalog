import { Grid, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';

export const PhonePage: FC = () => {
  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const filteredData = data?.filter(data => data.category === 'phones');

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
        Phones
      </Typography>
      <Typography variant="body1" color="secondary" sx={{ px: 18 }}>
        {filteredData.length} models
      </Typography>
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

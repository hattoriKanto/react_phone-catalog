import {
  Grid,
  styled,
} from '@mui/material';
import { FC } from 'react';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';

export const PhonePage: FC = () => {
  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const slicedData = data?.slice(0, 5);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    }
  })

  return (
      <CustomGrid>
        {slicedData?.map(phone => (
          <GridStyled item xs={1} md={1} key={phone.id}>
            <ProductCard product={phone} />
          </GridStyled>
        ))}
      </CustomGrid>
  );
};

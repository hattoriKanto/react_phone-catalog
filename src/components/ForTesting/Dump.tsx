import { Stack } from '@mui/material';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';

export const Dump: FC = () => {
  const { data } = useFetchData<Product>('products.json');

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ pt: 1, pb: 1 }}>
        {data.length > 0 && <ProductCard product={data[0]} />}
        {data.length > 0 && <ProductCard product={data[1]} />}
        {data.length > 0 && <ProductCard product={data[2]} />}
      </Stack>
    </>
  );
};

import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { NewModels } from '../NewModels/NewModels';
import { HotPrices } from '../HotPrices/HotPrices';

export const Dump: FC = () => {
  const { data } = useFetchData<Product>('products.json');

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ pt: 1, pb: 1 }}>
        {data.length > 0 && <ProductCard product={data[0]} />}
        {data.length > 0 && <ProductCard product={data[1]} />}
        {data.length > 0 && <ProductCard product={data[2]} />}
      </Stack>

      <NewModels></NewModels>
      <HotPrices></HotPrices>

      <Typography variant="h1">Some test</Typography>
      <Typography variant="h2">Some test</Typography>
      <Typography variant="h3">Some test</Typography>
      <Typography variant="h4">Some test</Typography>
      <Typography variant="subtitle1">Some test</Typography>
      <Typography variant="button">Some test</Typography>
      <Typography variant="body1">Some test</Typography>
      <Typography variant="caption">Some test</Typography>
    </>
  );
};

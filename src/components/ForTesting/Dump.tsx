import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';

export const Dump: FC = () => {
  const { data } = useFetchData<Product>('products.json');

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ pt: 1, pb: 1 }}>
        {data.length > 0 && <ProductCard product={data[2]} />}
        {data.length > 0 && <ProductCard product={data[0]} />}
      </Stack>

      <Typography variant="h1">Some test</Typography>
      <Typography variant="h2">Some test</Typography>
      <Typography variant="h3">Some test</Typography>
      <Typography variant="h4">Some test</Typography>
      <Typography variant="subtitle1">Some test</Typography>
      <Typography variant="button">Some test</Typography>
      <Typography variant="body1">Some test</Typography>
      <Typography variant="caption">Some test</Typography>
      <BurgerMenu></BurgerMenu>
    </>
  );
};

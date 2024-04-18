import { Typography } from '@mui/material';
import { FC } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import useFetchData from '../../utils/useFetchData';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';

export const Dump: FC = () => {
  const { data } = useFetchData<Product>('products.json');

  return (
    <>
      <ProductCard product={data[0]} />
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

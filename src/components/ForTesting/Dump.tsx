import { Typography } from '@mui/material';
import { FC } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { ProductCard } from '../ProductCard/ProductCard';

export const Dump: FC = () => {
  //const { data } = useFetchData<Product[]>('products.json');

  const prod = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  };

  //console.log(data[0]);

  return (
    <>
      <ProductCard product={prod} />
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

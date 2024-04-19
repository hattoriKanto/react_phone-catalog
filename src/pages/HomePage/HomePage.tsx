import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { CustomGrid } from '../../components/CustomGrid';

export const HomePage: FC = () => {
  type Category = {
    img: string;
    name: string;
    amount: number;
  };

  const categories: Category[] = [
    {
      img: 'public/img/category-accessories.webp',
      name: 'Mobile phones',
      amount: 0,
    },
    {
      img: 'public/img/category-accessories.webp',
      name: 'Tablets',
      amount: 0,
    },
    {
      img: 'public/img/category-accessories.webp',
      name: 'Accessories',
      amount: 0,
    },
  ];

  return (
    <>
      <Box>
        <Typography variant="h1" sx={{ px: 18, pt: 2 }}>
          Welcome to Nice Gadgets store!
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ px: 18, pt: 2 }}>
          Shop by category
        </Typography>
        <CustomGrid>
          {categories.map(category => (
            <Box component="img" src={category.img}></Box>
          ))}
        </CustomGrid>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ px: 18, pt: 2 }}>
          Brand new models
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ px: 18, pt: 2 }}>
          Hot prices
        </Typography>
      </Box>
    </>
  );
};

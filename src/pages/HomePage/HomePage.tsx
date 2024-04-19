import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { CustomGrid } from '../../components/CustomGrid';
import { CategoryCard } from '../../components/CategoryCard';
import { Category } from '../../types/Category';
import useFetchData from '../../utils/useFetchData';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

export const HomePage: FC = () => {
  const { data } = useFetchData<Product>('products.json');

  const categories: Category[] = [
    {
      id: 0,
      img: 'public/img/category-phones.webp',
      background: '#6D6474',
      name: 'Mobile phones',
      amount: data.filter(product => product.category === 'phones').length,
      path: '/phones',
    },
    {
      id: 1,
      img: 'public/img/category-tablets.png',
      background: '#8D8D92',
      name: 'Tablets',
      amount: data.filter(product => product.category === 'tablets').length,
      path: '/tablets',
    },
    {
      id: 2,
      img: 'public/img/category-accessories.png',
      background: '#973D5F',
      name: 'Accessories',
      amount: data.filter(product => product.category === 'accessories').length,
      path: '/accessories',
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
        <Typography variant="h2" sx={{ px: 18, pt: 2, pb: '24px' }}>
          Shop by category
        </Typography>
        <CustomGrid
          columns={{
            DT: 3,
            LT: 3,
            TB: 3,
          }}
        >
          {categories.map(category => (
            <Link
              to={category.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <CategoryCard category={category} />
            </Link>
          ))}
        </CustomGrid>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ px: 18, pt: 2, pb: '24px' }}>
          Brand new models
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ px: 18, pt: 2, pb: '24px' }}>
          Hot prices
        </Typography>
      </Box>
    </>
  );
};

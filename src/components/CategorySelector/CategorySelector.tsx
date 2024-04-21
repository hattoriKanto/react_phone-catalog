import { Box } from '@mui/material';
import { CustomGrid } from '../CustomGrid';
import useFetchData from '../../utils/useFetchData';
import { Product } from '../../types';

const categories = [
  {
    name: 'Mobile phones',
    color: '#6D6474',
    img: 'public/img/category-phones.webp',
  },
  {
    name: 'Tablets',
    color: '#6D6474',
    img: 'public/img/category-tablets.png',
  },
  {
    name: 'Accessories',
    color: '#D53C51',
    img: 'public/img/category-accessories.png',
  },
];

export const CategorySelector = () => {
  const { data } = useFetchData<Product>('products.json');

  const filteredData = data?.filter(data => data.category === 'phones');

  return (
    <CustomGrid>
      {categories.map(category => (
        <Box></Box>
      ))}
    </CustomGrid>
  );
};

import { Box, Slide, Typography, styled } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import { Category } from '../../types/Category';
import useFetchData, { getDiscounts } from '../../utils/useFetchData';
import { Product } from '../../types';
import { CategorySelector } from '../../components/CategorySelector';
import Slider from '../../components/Slider';
import { ProductSliderFabric } from '../../components/ProductSliderFabric/ProductSliderFabric';

const SliderOnPageContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0',
  },
  [theme.breakpoints.up('md')]: {
    paddingInline: '32px',
  },
}));

export const HomePage: FC = () => {
  const { data } = useFetchData<Product>('products');
  const [discountProducts, setDiscountProducts] = useState<Product[]>([]);
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchDiscounts = async () => {
      const discounts = await getDiscounts();
      setDiscountProducts(discounts);
    };
    fetchDiscounts();

    const fetchNewProducts = async () => {
      const newProducts = await getDiscounts();
      setNewProducts(newProducts);
    };
    fetchNewProducts();
  }, []);

  const categories: Category[] = [
    {
      id: 0,
      img: 'img/category-phones.webp',
      background: '#6D6474',
      name: 'Mobile phones',
      amount: data.filter(product => product.category === 'phones').length,
      path: '/phones',
    },
    {
      id: 1,
      img: 'img/category-tablets.png',
      background: '#8D8D92',
      name: 'Tablets',
      amount: data.filter(product => product.category === 'tablets').length,
      path: '/tablets',
    },
    {
      id: 2,
      img: 'img/category-accessories.png',
      background: '#973D5F',
      name: 'Accessories',
      amount: data.filter(product => product.category === 'accessories').length,
      path: '/accessories',
    },
  ];

  return (
    <>
      <Container>
        <Slide in={true} direction="down">
          <Box py={2} id="1">
            <Typography variant="h1" sx={{ pt: 2 }}>
              Welcome to Nice Gadgets store!
            </Typography>
          </Box>
        </Slide>
      </Container>
      <SliderOnPageContainer>
        <Slider />
      </SliderOnPageContainer>
      <Container>
        <Box py={2} id="2">
          <ProductSliderFabric title="New models" products={discountProducts} />
        </Box>
        <Box py={2} id="3">
          <CategorySelector categories={categories} />
        </Box>
        <Box py={2} id="4">
          <ProductSliderFabric title="Hot prices" products={newProducts} />
        </Box>
      </Container>
    </>
  );
};

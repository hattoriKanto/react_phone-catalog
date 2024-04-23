import { FC } from 'react';
import useFetchData from '../../utils/useFetchData';
import { useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ProductExpanded } from '../../types/ProductExpanded';

import './ProductPage.css';
import { ImageSelector } from '../../components/ImageSelector';
import { Button, Divider, Stack, Typography } from '@mui/material';
import Container from '../../components/Container/Container';
import { About } from '../../components/AboutSection';
import { ProductWrapper, StyledFlexWrapper } from './ProductPage.styles';
import ChangeColorSizeBlock from '../../components/ChangeColorSizeBlock/ChangeColorSizeBlock';

export const ProductPage: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const category = pathname.split('/')[1];
  const prodId = pathname.split('/')[2];

  const { data, isLoading, error } = useFetchData<ProductExpanded>(
    `${category}.json`,
  );

  const selector = prodId.split('-').slice(0, 3).join('-');
  const product = data.find(prod => prod.id === prodId) || null;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {product && (
        <Container>
          <Button
            onClick={() => history.back()}
            startIcon={<ArrowBackIosNewIcon />}
            color="secondary"
            sx={{
              lineHeight: '100%',
            }}
          >
            Back
          </Button>
          <Typography variant="h1">{product.name}</Typography>
          <ProductWrapper>
            <ImageSelector images={product.images} />
            <ChangeColorSizeBlock selector={selector}/>
          </ProductWrapper>

          <StyledFlexWrapper>
            <About description={product.description} />
            <Stack sx={{ flex: 1 }}>
              <Typography variant="h3">Tech specs</Typography>

              <Divider />
            </Stack>
          </StyledFlexWrapper>
        </Container>
      )}
    </>
  );
};

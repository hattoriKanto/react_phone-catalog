/* #region IMPORTS */
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Container, Typography } from '@mui/material';

import './ProductPage.css';
import {
  ProductInfoWrapper,
  ProductWrapper,
  StyledFlexWrapper,
} from './ProductPage.styles';

import {
  About,
  ChangeColorSizeBlock,
  ImageSelector,
  PriceBlock,
  TechSpecs,
  SmallSpecsBlock,
  BreadCrumbsComponent,
  RecommendedProducts,
  CartAndFavouriteBlock,
  // CartAndFavouriteBlock,
} from '../../components';
import { getOneProductBySlug } from '../../utils/useFetchData';
import { ProductExpanded } from '../../types';
/* #endregion */

export const ProductPage: FC = () => {
  const [product, setProduct] = useState<ProductExpanded | null>(null);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    getOneProductBySlug('products' + pathname).then(setProduct);
  }, [pathname]);

  return (
    <>
      {product && (
        <Container>
          <BreadCrumbsComponent product={product} />
          <Button
            onClick={() => history.back()}
            startIcon={<ArrowBackIosNewIcon />}
            color="secondary"
            sx={{
              lineHeight: '100%',
              pt: 4,
              pb: 1,
            }}
          >
            Back
          </Button>
          <Typography variant="h1" pb={3}>
            {product.name}
          </Typography>
          <ProductWrapper>
            <ImageSelector images={product.images} />
            <ProductInfoWrapper>
              <ChangeColorSizeBlock currentProduct={product} />
              <PriceBlock price={product.price} fullPrice={product.fullPrice} />
              <CartAndFavouriteBlock product={product} />
              <SmallSpecsBlock
                screen={product.screen}
                resolution={product.resolution}
                ram={product.ram}
                processor={product.processor}
              />
            </ProductInfoWrapper>
          </ProductWrapper>
          <StyledFlexWrapper>
            <About description={product.description} />
            <TechSpecs product={product} />
          </StyledFlexWrapper>
          <Box sx={{ pb: { xs: 3, sm: 6 } }}>
            <RecommendedProducts slug={product.slug} />
          </Box>
        </Container>
      )}
    </>
  );
};

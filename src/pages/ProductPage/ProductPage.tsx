/* #region IMPORTS */
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Container, Typography } from '@mui/material';

import './ProductPage.css';
import {
  ProductInfoWrapper,
  ProductWrapper,
  StyledFlexWrapper,
} from './ProductPage.styles';

import useFetchData from '../../utils/useFetchData';
import { ProductExpanded } from '../../types/ProductExpanded';
import {
  About,
  CartAndFavouriteBlock,
  ChangeColorSizeBlock,
  ImageSelector,
  PriceBlock,
  TechSpecs,
  SmallSpecsBlock,
  RecommendedProducts,
  BreadCrumbsComponent,
} from '../../components';
/* #endregion */

export const ProductPage: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const category = pathname.split('/')[1];
  const prodId = pathname.split('/')[2];

  const { data, isLoading, error } = useFetchData<ProductExpanded>(
    `${category}.json`,
  );

  const selector = prodId.split('-').slice(0, 3).join('-');
  const product = data.find(prod => prod.id === prodId) as ProductExpanded;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    namespaceId,
    name,
    priceRegular,
    priceDiscount,
    color,
    images,
    description,
    resolution,
    processor,
    screen,
    ram,
  } = product || null;

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
            {name}
          </Typography>
          <ProductWrapper>
            <ImageSelector images={images} />
            <ProductInfoWrapper>
              <ChangeColorSizeBlock selector={selector} />
              <PriceBlock price={priceDiscount} fullPrice={priceRegular} />
              <CartAndFavouriteBlock product={product} />
              <SmallSpecsBlock
                screen={screen}
                resolution={resolution}
                ram={ram}
                processor={processor}
              />
            </ProductInfoWrapper>
          </ProductWrapper>
          <StyledFlexWrapper>
            <About description={description} />
            <TechSpecs product={product} />
          </StyledFlexWrapper>
          <Box sx={{ pb: { xs: 3, sm: 6 } }}>
            <RecommendedProducts
              name={namespaceId}
              color={color}
            ></RecommendedProducts>
          </Box>
        </Container>
      )}
    </>
  );
};

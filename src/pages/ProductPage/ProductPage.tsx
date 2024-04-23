import { FC } from 'react';
import useFetchData from '../../utils/useFetchData';
import { useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ProductExpanded } from '../../types/ProductExpanded';
import './ProductPage.css';
import { ImageSelector } from '../../components/ImageSelector';
import { Box, Button, Typography } from '@mui/material';
import Container from '../../components/Container/Container';
import { About } from '../../components/AboutSection';
import { StyledFlexWrapper } from './ProductPage.styles';
import BreadCrumbsComponent from '../../components/BreadCrumbs/BreadCrumbsComponent';
import { TechSpecs } from '../../components/TechSpecsSection';
import Recommended from '../../components/RecommendedProducts/Recommended';

export const ProductPage: FC = () => {
  const location = useLocation();
  const { pathname } = location;

  const category = pathname.split('/')[1];
  const prodId = pathname.split('/')[2];
  const { data, isLoading, error } = useFetchData<ProductExpanded>(
    `${category}.json`,
  );

  const product = data.find(prod => prod.id === prodId) || null;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
            }}
          >
            Back
          </Button>
          <Typography variant="h1">{product.name}</Typography>
          <ImageSelector images={product.images} />
          <StyledFlexWrapper>
            <About description={product.description} />
            <TechSpecs product={product} />
          </StyledFlexWrapper>
          <Box sx={{ pb: { xs: 3, sm: 6 } }}>
            <Recommended
              name={product.namespaceId}
              color={product.color}
            ></Recommended>
          </Box>
        </Container>
      )}
    </>
  );
};

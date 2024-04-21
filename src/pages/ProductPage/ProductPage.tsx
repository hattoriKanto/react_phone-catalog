import { FC } from 'react';
import useFetchData from '../../utils/useFetchData';
import { useLocation } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ProductExpanded } from '../../types/ProductExpanded';

import './ProductPage.css';
import { ImageSelector } from '../../components/ImageSelector';
import { Button, Typography } from '@mui/material';

export const ProductPage: FC = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[1];
  const prodId = location.pathname.split('/')[2];
  const { data, isLoading, error } = useFetchData<ProductExpanded>(
    `${category}.json`,
  );

  const product = data.find(prod => prod.id === prodId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button
        onClick={() => history.back()}
        startIcon={<ArrowBackIosNewIcon />}
        sx={{
          marginLeft: 18,
          marginTop: '40px',
          color: '#89939A',
          lineHeight: '100%',
        }}
      >
        Back
      </Button>
      <Typography variant="h1" sx={{ px: 18, pt: '16px' }}>
        {product?.name}
      </Typography>
      {product && <ImageSelector images={product.images} />}
    </>
  );
};

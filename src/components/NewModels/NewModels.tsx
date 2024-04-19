import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import products from '../../../public/api/products.json';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import { CustomGrid } from '../CustomGrid';

const newModelsList = products.filter(({ year }) => year === 2022);

export const NewModels: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  // const productsPerRow = isLargeScreen ? 4 : (isMediumScreen ? 2 : 1);
  const productsPerRow = 4;
  // const { sm, md, lg } = customBreakpoints.values;

  const handleClickPrev = () => {
    setStartIndex(Math.max(startIndex - productsPerRow, 0));
  };

  const handleClickNext = () => {
    setStartIndex(
      Math.min(startIndex + productsPerRow, products.length - productsPerRow),
    );
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Brand new models
        </Typography>

        <Box>
          <Button onClick={handleClickPrev} disabled={startIndex === 0}>
            <ArrowBack />
          </Button>

          <Button
            onClick={handleClickNext}
            disabled={startIndex + productsPerRow >= newModelsList.length}
          >
            <ArrowForward />
          </Button>
        </Box>
      </Box>

      <CustomGrid>
        {newModelsList
          .slice(startIndex, startIndex + productsPerRow)
          .map((product: Product) => (
            <ProductCard product={product} key={product.id}></ProductCard>
          ))}
      </CustomGrid>
    </Box>
  );
};

// sx={{
//   display: 'flex',
//   justifyContent: 'space-between',
//   marginBottom: '24px',
// }}

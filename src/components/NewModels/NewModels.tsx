import React, { useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import products from '../../../public/api/products.json';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Product } from '../../Types';
import { ProductCard } from '../ProductCard/ProductCard';
import { CustomGrid } from '../CustomGrid';
import { useTheme } from '@mui/material/styles';
import { customBreakpoints } from '../../theme/breakpoints.config';
import { customTypography } from '../../theme/typography.config';

const newModelsList = products.filter(({ year }) => year === 2022);

export const NewModels: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  let productsPerRow = 4;
  const { sm, md, lg } = customBreakpoints.values;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg));
  const isLaptop = useMediaQuery(theme.breakpoints.between(md, lg));
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, md));
  const isMobile = useMediaQuery(theme.breakpoints.down(sm));

  switch(true) {
    case isDesktop:
      productsPerRow = 4;
      break;
    case isLaptop:
      productsPerRow = 3;
      break;
    case isTablet:
      productsPerRow = 2;
      break;
    case isMobile:
      productsPerRow = 1;
      break;
  }

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
        <Typography variant="h2" gutterBottom sx={customTypography.h2}>
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

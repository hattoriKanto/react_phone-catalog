import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Product } from '../../types';
import { FC, useEffect, useState } from 'react';
import { customBreakpoints } from '../../theme/breakpoints.config';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { customTypography } from '../../theme/typography.config';
import { CustomGrid } from '../CustomGrid';
import { ProductCard } from '../ProductCard/ProductCard';
import { getRecommendedProducts } from '../../utils';

interface RecommendedProps {
  slug: string;
}

export const RecommendedProducts: FC<RecommendedProps> = ({ slug }) => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  let productsPerRow = 4;
  const { sm, md, lg } = customBreakpoints.values;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg));
  const isLaptop = useMediaQuery(theme.breakpoints.between(md, lg));
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, md));
  const isMobile = useMediaQuery(theme.breakpoints.down(sm));

  useEffect(() => {
    const url = 'products/' + slug + '/recommended';
    getRecommendedProducts(url).then(setRecommendedProducts);
    setStartIndex(0);
  }, [slug]);

  switch (true) {
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
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleClickNext = () => {
    setStartIndex(
      Math.min(startIndex + 1, recommendedProducts.length - productsPerRow),
    );
  };

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h2" gutterBottom sx={customTypography.h2}>
          You may also like
        </Typography>

        <Box>
          <Button onClick={handleClickPrev} disabled={startIndex === 0}>
            <ArrowBack />
          </Button>

          <Button
            onClick={handleClickNext}
            disabled={startIndex + productsPerRow >= recommendedProducts.length}
          >
            <ArrowForward />
          </Button>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <CustomGrid>
          {recommendedProducts
            .slice(startIndex, startIndex + productsPerRow)
            .map((product: Product) => (
              <GridStyled item xs={1} md={1} key={product.slug}>
                <ProductCard product={product} key={product.slug}></ProductCard>
              </GridStyled>
            ))}
        </CustomGrid>
      </Box>
    </Box>
  );
};

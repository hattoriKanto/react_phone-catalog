import {
  Box,
  Button,
  Grid,
  Grow,
  Pagination,
  Slide,
  Stack,
  Typography,
  styled,
  Fade,
  useMediaQuery,
} from '@mui/material';
import { Product } from '../../types';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import { useLocation, useSearchParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { CardSkeleton } from '../../components/ProductCard';
import React, { useEffect, useState } from 'react';
import { getSearchWith } from '../../utils/searchHelper';
import { BreadCrumbsComponent } from '../../components';
import CategorySort from '../../components/CategorySort/CategorySort';
import { CategoryPriceRange } from '../../components/CategoryPriceRange/CategoryPriceRange';
import { useSearchContext } from '../../hooks/useSearchContext';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { customBreakpoints } from '../../theme/breakpoints.config';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { apiDBurl } from '../../utils/config';

export const CategoryPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = location.pathname;

  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);
  const [minPrice, setMinPrice] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleData, setVisibleData] = React.useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${apiDBurl}products${categoryName}`, {
        params: searchParams,
      });

      setVisibleData(data.products);
      setProductCount(data.productCount);
      setMaxPrice(data.maxPrice);
      setMinPrice(data.minPrice);
      setPageCount(data.pageCount);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const { isSearchOpen, setIsSearchOpen, handleClearSearch } =
    useSearchContext();
  const page = searchParams.get('page') || 1;
  const perPage = searchParams.get('perPage') || 4;

  useEffect(() => {
    fetchProducts();
  }, [searchParams, categoryName]);

  const { sm } = customBreakpoints.values;
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up(sm));

  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  function handlePageChange(_: React.ChangeEvent<unknown>, value: number) {
    const newSearchParams = getSearchWith(searchParams, {
      page: value.toString(),
    });

    setSearchParams(newSearchParams);
  }

  return (
    <>
      <Container>
        <BreadCrumbsComponent />
        <Stack>
          <Slide in={true} direction="down" key={categoryName.slice(2)}>
            <Typography variant="h1" sx={{ pt: 4 }}>
              {categoryName.slice(1).charAt(0).toUpperCase() +
                categoryName.slice(2)}
            </Typography>
          </Slide>

          {visibleData.length > 0 && (
            <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
              {productCount} models
            </Typography>
          )}
          <script
            src="https://lottie.host/e89ed2b8-0df9-4829-a67e-c5e194a38103/J35UHBqEvn.json"
            type="module"
          ></script>
          {visibleData.length === 0 && (
            <Fade in={true} timeout={800}>
              <Stack
                direction={'column'}
                spacing={2}
                sx={{ alignItems: 'center', pt: 3 }}
              >
                <Typography variant="h4">
                  There are no {categoryName.slice(1)} matching the query.
                </Typography>
                <Box
                  sx={{
                    alignSelf: 'center',
                    width: '20vmax',
                    height: '20vmax',
                  }}
                >
                  <DotLottiePlayer
                    src="https://lottie.host/e89ed2b8-0df9-4829-a67e-c5e194a38103/J35UHBqEvn.json"
                    background="transparent"
                    loop
                    autoplay
                    speed={0.75}
                  ></DotLottiePlayer>
                </Box>
                <Typography variant="h4" sx={{}}>
                  Go ahead & explore {categoryName.slice(1)} full list.
                </Typography>
                <Button
                  variant="contained"
                  color="accent"
                  sx={{
                    width: '160px',
                    alignSelf: 'center',
                    py: 1,
                    '&.MuiButton-contained': { color: '#fff' },
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                  onClick={() => {
                    if (isSearchOpen) {
                      setIsSearchOpen(false);
                      handleClearSearch();
                    }
                  }}
                >
                  <Typography
                    variant="button"
                    color="white"
                    sx={{ textTransform: 'none', textDecoration: 'none' }}
                  >
                    Show ALL
                  </Typography>
                </Button>
              </Stack>
            </Fade>
          )}

          {!!visibleData.length && (
            <Stack direction={'column'}>
              <CategorySort />
              <CategoryPriceRange
                minPriceInCategory={minPrice}
                maxPriceInCategory={maxPrice}
              />
            </Stack>
          )}
        </Stack>
        <Box display={'flex'} justifyContent={'center'}>
          <CustomGrid>
            {isLoading ? (
              <>
                {Array.from(new Array(20)).map((_, index) => (
                  <GridStyled item xs={1} md={1} key={index}>
                    <CardSkeleton />
                  </GridStyled>
                ))}
              </>
            ) : (
              <>
                {visibleData?.map(product => (
                  <Grow key={product.id} in={true} timeout={800}>
                    <GridStyled item xs={1} md={1}>
                      <ProductCard product={product} />
                    </GridStyled>
                  </Grow>
                ))}
              </>
            )}
          </CustomGrid>
        </Box>

        {!!visibleData.length && (
          <Pagination
            siblingCount={!isTablet ? 0 : 1}
            size={!isTablet ? 'medium' : 'large'}
            color="primary"
            page={Number(page)}
            onChange={handlePageChange}
            count={perPage === 'All' ? 1 : pageCount}
            sx={{
              py: 4,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        )}
      </Container>
    </>
  );
};

export default CategoryPage;

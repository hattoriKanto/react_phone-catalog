import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { CustomGrid } from '../../components/CustomGrid';
import { useLocation, useSearchParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { CardSkeleton } from '../../components/ProductCard';
import React, { useEffect, useMemo } from 'react';
import { getFilter } from '../../functions/getFilter';
import { getSearchWith } from '../../utils/searchHelper';
import { BreadCrumbsComponent } from '../../components';
import CategorySort from '../../components/CategorySort/CategorySort';
import { SortBy } from '../../types/SortBy';
import { CategoryPriceRange } from '../../components/CategoryPriceRange/CategoryPriceRange';

function getSlicedData(data: Product[], page: number, perPage: string) {
  if (perPage === 'All') {
    return data;
  }

  const startIndex = (page - 1) * Number(perPage);
  const endIndex = startIndex + Number(perPage);

  return data.slice(startIndex, endIndex);
}

function getSortedData(data: Product[], sortBy: string) {
  switch (sortBy) {
    case 'alphabetically':
      return data.sort((a, b) => a.name.localeCompare(b.name));
    case 'cheapest':
      return data.sort((a, b) => a.price - b.price);
    case 'newest':
      return data.sort((a, b) => b.id - a.id);
    default:
      return data;
  }
}

export const CategoryPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = location.pathname.slice(1);
  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const query = searchParams.get('query');
  const page = searchParams.get('page') || 1;
  const perPage = searchParams.get('perPage') || 4;
  const sortBy = searchParams.get('sortBy') || SortBy.Alphabetically;

  useEffect(() => {
    const newSearchParams = getSearchWith(searchParams, {
      page: '1',
    });
    setSearchParams(newSearchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  const pricesInCategory = data
    .filter(product => product.category === categoryName)
    .map(product => product.price);

  const minPriceInCategory =
    Math.floor(Math.min(...pricesInCategory) / 100) * 100;
  const maxPriceInCategory =
    Math.ceil(Math.max(...pricesInCategory) / 100) * 100;

  const minPrice = searchParams.get('minPrice') || `${minPriceInCategory}`;
  const maxPrice = searchParams.get('maxPrice') || `${maxPriceInCategory}`;

  const visibleProducts = useMemo(() => {
    return getFilter({ data, query, minPrice, maxPrice });
  }, [data, query, minPrice, maxPrice]);

  const filteredData = visibleProducts?.filter(
    data => data.category === categoryName,
  );

  const sortedData = getSortedData(filteredData, sortBy);

  const slicedData = getSlicedData(
    sortedData,
    Number(page),
    perPage.toString(),
  );

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
          <Typography variant="h1" sx={{ pt: 4 }}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </Typography>
          {filteredData.length > 0 && (
            <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
              {filteredData.length} models
            </Typography>
          )}
          {filteredData.length === 0 && (
            <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
              There are no {categoryName} matching the query
            </Typography>
          )}

          {!!filteredData.length && (
            <Stack direction={'column'}>
              <CategorySort />
              <CategoryPriceRange
                maxPriceInCategory={maxPriceInCategory}
                minPriceInCategory={minPriceInCategory}
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
                {slicedData?.map(phone => (
                  <GridStyled item xs={1} md={1} key={phone.id}>
                    <ProductCard product={phone} />
                  </GridStyled>
                ))}
              </>
            )}
          </CustomGrid>
        </Box>

        {!!filteredData.length && (
          <Pagination
            size="large"
            color="primary"
            page={Number(page)}
            onChange={handlePageChange}
            count={
              perPage === 'All'
                ? 1
                : Math.ceil(filteredData.length / Number(perPage))
            }
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

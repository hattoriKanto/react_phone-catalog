import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
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
import BreadCrumbsComponent from '../../components/BreadCrumbs/BreadCrumbsComponent';
import { getSearchWith } from '../../utils/searchHelper';

const perPageStates = [4, 8, 16];

function getSlicedData(data: Product[], page: number, perPage: string) {
  if (perPage === 'All') {
    return data;
  }

  const startIndex = (page - 1) * Number(perPage);
  const endIndex = startIndex + Number(perPage);

  return data.slice(startIndex, endIndex);
}

export const CategoryPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryName = location.pathname.slice(1);
  const { data, error } = useFetchData<Product>('products.json');
  const filteredData = data?.filter(data => data.category === categoryName);

  const page = searchParams.get('page') || 1;
  const perPage = searchParams.get('perPage') || 4;

  const slicedData = getSlicedData(
    filteredData,
    Number(page),
    perPage.toString(),
  );

  if (error) return <p>Error: {error.message}</p>;

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    const newSearchParams = getSearchWith(searchParams, {
      page: value.toString(),
    });

    setSearchParams(newSearchParams);
  }

  function handlePerPageChange(
    event: React.SelectChangeEvent<HTMLInputElement>,
  ) {
    const newSearchParams = getSearchWith(searchParams, {
      perPage: event.target.value,
    });

    setSearchParams(newSearchParams);
  }

  return (
    <>
      <Container>
        <BreadCrumbsComponent />
        <Stack sx={{ px: '2rem' }}>
          <Typography variant="h1" sx={{ pt: 4 }}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </Typography>
          <Typography variant="body1" color="secondary" sx={{ pb: 4 }}>
            {filteredData.length} models
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Items per page
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={perPage}
              label="Items per page"
              sx={{ width: '128px' }}
              onChange={handlePerPageChange}
            >
              <MenuItem value="All" key="All">
                <em>All</em>
              </MenuItem>
              {perPageStates.map(pagPerPage => (
                <MenuItem key={pagPerPage} value={pagPerPage}>
                  {pagPerPage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Box display={'flex'} justifyContent={'center'}>
          <CustomGrid>
            {slicedData?.map(phone => (
              <GridStyled item xs={1} md={1} key={phone.id}>
                <ProductCard product={phone} />
              </GridStyled>
            ))}
          </CustomGrid>
        </Box>

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
      </Container>
    </>
  );
};

export default CategoryPage;

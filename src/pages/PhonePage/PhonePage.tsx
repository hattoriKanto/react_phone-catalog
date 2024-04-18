import {
  Grid,
  useMediaQuery,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
  IconButton,
  Stack,
  Divider,
  Container,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FC } from 'react';
import theme from '../themes';
import { Product } from '../../types';
import useFetchData from '../../utils/useFetchData';
import { ProductCard } from '../../components/ProductCard/ProductCard';

export const PhonePage: FC = () => {
  const { sm, lg } = theme.breakpoints.values;

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg)); // 1200px and up
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, lg)); // 640px to 1199px
  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639px

  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const slicedData = data?.slice(0, 5);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  interface GridProps {
    columns: number;
  }

  const getGridProps = (): GridProps => {
    switch (true) {
      case isDesktop:
        return {
          columns: 4,
        };
      case isTablet:
        return {
          columns: 2,
        };
      case isMobile:
        return {
          columns: 1,
        };
      default:
        return {
          columns: 4,
        };
    }
  };

  const gridProps = getGridProps();

  return (
    <Container>
      <Grid
        container
        width={'80vw'}
        columnSpacing={2}
        justifyContent={'flex-start'}
        rowSpacing={'40px'}
        margin={'0 auto'}
        {...gridProps}
      >
        {slicedData?.map(phone => (
          <Grid item xs={1} spacing={16} md={1}>
            <ProductCard product={phone} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

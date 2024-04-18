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
import useFetchData from '../../utils/client';
import { Product } from '../../Types/Product';

export const PhonePage: FC = () => {
  const { sm, lg } = theme.breakpoints.values;

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg)); // 1200px and up
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, lg)); // 640px to 1199px
  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639px

  const { data, isLoading, error } = useFetchData<Product>('products.json');

  const slicedData = data?.slice(0, 4);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  interface GridProps {
    columns: number;
  }

  // const getCardSize = () => {
  //   const calculateSize = (columnsAcmount: number) =>
  //     slicedData
  //       ? slicedData.length >= columnsAcmount
  //         ? 1
  //         : columnsAcmount / slicedData.length
  //       : 1;

  //   switch (true) {
  //     case isDesktop:
  //       return calculateSize(4);
  //     case isTablet:
  //       return calculateSize(2);
  //     case isMobile:
  //       return calculateSize(1);
  //     default:
  //       return calculateSize(4);
  //   }
  // };

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
        {...gridProps}
      >
        {slicedData?.map(phone => (
          <Grid item xs={1} spacing={16} md={1}>
            <Card
              key={phone.id}
              sx={{
                maxHeight: 506,
                width: 272,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: 1,
                borderColor: '#E2E6E9',
              }}
            >
              <CardMedia
                component="img"
                height="50%"
                image={phone.image}
                sx={{ width: '50%', pt: 3 }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {phone.name}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {phone.fullPrice}$
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#89939A',
                      textDecoration: 'line-through',
                    }}
                  >
                    {phone.price}$
                  </Typography>
                </Stack>

                <Divider />

                <Grid
                  container
                  spacing={2}
                  sx={{ pt: 4, justifyContent: 'space-between' }}
                >
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#89939A' }}>
                      Screen
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      sx={{ color: 'black', fontWeight: 'bold' }}
                    >
                      5.8" OLED
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#89939A' }}>
                      Capacity
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography
                      variant="body1"
                      sx={{ color: 'black', fontWeight: 'bold' }}
                    >
                      64 GB
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: '#89939A' }}>
                      RAM
                    </Typography>
                  </Grid>
                  <Grid xs={6}>
                    <Typography
                      variant="body1"
                      sx={{ color: 'black', fontWeight: 'bold' }}
                    >
                      4 GB
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ pt: 4 }}>
                  <Grid item xs={8}>
                    <Button variant="contained" sx={{ bgcolor: '#F86800' }}>
                      Add to cart
                    </Button>
                  </Grid>

                  <Grid item xs={4}>
                    <IconButton
                      sx={{
                        border: 1,
                        borderColor: '#B4BDC3',
                        color: 'black',
                      }}
                      aria-label="add to favorites"
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

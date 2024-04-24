import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grow,
  GrowProps,
  Stack,
  Typography,
} from '@mui/material';
import Container from '../../components/Container/Container';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from '../../components/CartItem';
import { useState } from 'react';
import { CartModal } from '../../components/CartModal';
import { TransitionProps } from '@mui/material/transitions';
import { Toast } from '../../components/Toast';
import { Transition } from '../../types';
import { BreadCrumbsComponent } from '../../components';

export const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<
          React.ReactNode,
          string | React.JSXElementConstructor<React.ReactNode>
        >;
      }
    >;
    message: string;
    status: 'warning' | 'success' | null;
  }>({
    open: false,
    Transition: Grow,
    message: '',
    status: null,
  });

  const handleEmpty = (Transition: Transition) => {
    setIsToastOpen({
      open: true,
      Transition,
      message: 'Cart is empty',
      status: 'warning',
    });
  };

  function GrowTransition(props: GrowProps) {
    return <Grow {...props} />;
  }

  const { cart, cartQuantity } = useCartContext();
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <>
      <Container>
        <BreadCrumbsComponent />
        <Typography variant="h1" component="h2" sx={{ py: 2 }}>
          Cart
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ width: { md: '70%', xs: '100%' }, pr: { sm: 2, xs: 0 } }}>
            {cartQuantity > 0 &&
              cart.map(item => (
                <Box key={item.prodId} sx={{ pb: 2 }}>
                  <CartItem product={item.product} />{' '}
                </Box>
              ))}
          </Box>
          <Box
            sx={{
              width: { md: '30%', xs: '100%' },
              position: 'sticky',
              top: '72px',
              height: 'fit-content',
            }}
          >
            <Card>
              <CardContent>
                <Stack direction="column" spacing={2}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h2">{`$${totalPrice}`}</Typography>
                    <Typography variant="body1" color="secondary">
                      Total for {cartQuantity}{' '}
                      {cartQuantity === 1 ? 'item' : 'items'}
                    </Typography>
                  </Box>
                  <Divider variant="middle" />
                  <Button
                    variant="contained"
                    color="accent"
                    sx={{
                      width: '100%',
                      py: 1,
                      '&.MuiButton-contained': { color: '#fff' },
                      textTransform: 'none',
                    }}
                    onClick={() =>
                      cart.length !== 0
                        ? setIsModalOpen(true)
                        : handleEmpty(GrowTransition)
                    }
                  >
                    Checkout
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <CartModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setIsToastOpen={setIsToastOpen}
      />
      <Toast isToastOpen={isToastOpen} setIsToastOpen={setIsToastOpen} />
    </>
  );
};

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import Container from '../../components/Container/Container';
import { useCartContext } from '../../hooks/useCartContext';
import CartItem from '../../components/CartItem';

const CartPage = () => {
  const { cart, cartQuantity, clearCart } = useCartContext();

  return (
    <Container>
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
              <Box sx={{ pb: 2 }}>
                <CartItem product={item.product} />{' '}
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            width: { md: '30%', xs: '100%' },
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
                  <Typography variant="h6">Total Price: $0</Typography>
                  <Typography variant="subtitle1">
                    Total Items: {cartQuantity}
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
                  onClick={() => clearCart()}
                >
                  Checkout
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};
export default CartPage;

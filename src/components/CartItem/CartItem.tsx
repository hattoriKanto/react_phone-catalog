import Container from '../Container/Container';
import {
  CartItemWrapper, ContainerLeftSide, ContainerRightSide,
  ContentContainer,
  DeleteButton,
  DeleteIcon, IconButtonQuantityMinus, IconButtonQuantityPlus,
  Image,
  ProductImage, ProductName, ProductQuantity,
} from './CartItem.styles.tsx';
import { Typography } from '@mui/material';
import { Product } from '../../types';
import React from 'react';

type Props = {
  product: Product;
};
const CartItem: React.FC<Props> = ({ product}) => {
  const { name, price, image } = product;

  return (
    <Container>
      <CartItemWrapper>
        <ContentContainer
          spacing={{ xs: 2, sm: 3, md: 4 }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          <ContainerLeftSide
            spacing={{ xs: 2, sm: 3 }}
            direction={{ xs: 'row' }}
          >
            <DeleteButton>
              <DeleteIcon />
            </DeleteButton>

            <ProductImage>
              <Image src={image} />
            </ProductImage>

            <ProductName to="/">
              <Typography variant="body1">
                {name}
              </Typography>
            </ProductName>
          </ContainerLeftSide>

          <ContainerRightSide
            spacing={{ sm: 3 }}
            direction={{ xs: 'row' }}
          >
            <ProductQuantity>
              <IconButtonQuantityMinus />
              <Typography variant="body1">
                1
              </Typography>
              <IconButtonQuantityPlus />
            </ProductQuantity>

            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {`$${price}`}
            </Typography>
          </ContainerRightSide>
        </ContentContainer>
      </CartItemWrapper>
    </Container>
  )
};

export default CartItem;

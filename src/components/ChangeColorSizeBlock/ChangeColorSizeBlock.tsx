import { Box } from '@mui/material';
import {
  Capacity,
  Capacityes,
  CapacityValue,
  Color,
  Colors,
  ColorWrapper,
  LineBox,
  OptionsTitle,
} from './ChangeColorSizeBlock.styles.tsx';
import { ProductExpanded } from '../../types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ColorsAvailable } from '../../types/Colors.ts';
import { getProductsByNamespaceId } from '../../utils/useFetchData.ts';

type Props = {
  currentProduct: ProductExpanded;
};

export const ChangeColorSizeBlock: React.FC<Props> = ({ currentProduct }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { namespaceId, colorsAvailable, capacityAvailable } = currentProduct;
  const [products, setProducts] = useState<ProductExpanded[]>([]);

  useEffect(() => {
    getProductsByNamespaceId('products', namespaceId).then(setProducts);
  }, [namespaceId]);

  const getProductUrl = (id: string) => {
    const rootPath = pathname.split('/').slice(0, -1).join('/');
    const newPath = rootPath + '/' + id;

    return newPath;
  };

  return (
    <Box>
      <Box>
        <OptionsTitle>Available colors</OptionsTitle>
        <Colors>
          {colorsAvailable.map(color => {
            const productMatchColor =
              products.find(
                product =>
                  product.color === color &&
                  product.capacity === currentProduct.capacity,
              ) || null;
            const tempColor =
              ColorsAvailable[color as keyof typeof ColorsAvailable];
            return (
              <ColorWrapper
                to={getProductUrl(productMatchColor?.slug as string)}
                key={color}
                className={color === currentProduct.color ? 'active' : ''}
              >
                <Color style={{ backgroundColor: tempColor }} />
              </ColorWrapper>
            );
          })}
        </Colors>
      </Box>
      <LineBox />
      <Box>
        <OptionsTitle>Select capacity</OptionsTitle>
        <Capacityes>
          {capacityAvailable.map(capacity => {
            const productMatchCapacity =
              products.find(
                product =>
                  product.capacity === capacity &&
                  product.color === currentProduct.color,
              ) || null;
            return (
              <Capacity
                to={getProductUrl(productMatchCapacity?.slug as string)}
                key={capacity}
                className={capacity === currentProduct.capacity ? 'active' : ''}
              >
                <CapacityValue>{capacity}</CapacityValue>
              </Capacity>
            );
          })}
        </Capacityes>
      </Box>
      <LineBox />
    </Box>
  );
};

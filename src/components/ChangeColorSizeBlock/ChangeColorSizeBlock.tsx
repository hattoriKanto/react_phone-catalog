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
import useFetchData from '../../utils/useFetchData.ts';
import { ProductExpanded } from '../../types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ColorsAvailable } from '../../types/Colors.ts';

type Props = {
  prodId: string;
  category: string;
  pathname: string;
};

export const ChangeColorSizeBlock: React.FC<Props> = ({ prodId, category }) => {
  const { data } = useFetchData<ProductExpanded>(`${category}.json`);
  const selectedData = data.find(data => data.id === prodId);

  const loc = useLocation();

  const getProductUrl = (specification: string, isColor: boolean) => {
    const pathnameToArray = loc.pathname.split('-');
    let newPathName = loc.pathname;
    if (isColor) {
      pathnameToArray.splice(-1, 1, specification);
      newPathName = pathnameToArray.join('-');
    } else {
      pathnameToArray.splice(-2, 1, specification.toLowerCase());
      newPathName = pathnameToArray.join('-');
    }

    return newPathName;
  };

  return (
    <Box>
      <Box>
        <OptionsTitle>Available colors</OptionsTitle>
        <Colors>
          {selectedData?.colorsAvailable.sort().map((color, i) => {
            const tempColor =
              ColorsAvailable[color as keyof typeof ColorsAvailable];
            return (
              <ColorWrapper
                to={getProductUrl(color, true)}
                key={i}
                className={selectedData?.color === color ? 'active' : ''}
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
          {selectedData?.capacityAvailable.map(item => (
            <Capacity
              to={getProductUrl(item, false)}
              key={item}
              className={selectedData?.capacity === item ? 'active' : ''}
            >
              <CapacityValue>{item}</CapacityValue>
            </Capacity>
          ))}
        </Capacityes>
      </Box>
      <LineBox />
    </Box>
  );
};

import { Box } from '@mui/material';
import {
  Capacity,
  Capacityes,
  CapacityValue,
  Color,
  Colors,
  ColWrapper,
  LineBox,
  OptionsTitle,
} from './ChangeColorSizeBlock.styles.tsx';
import useFetchData from '../../utils/useFetchData.ts';
import { ProductExpanded } from '../../types';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ColorsAvailable } from '../../types/Colors.ts';

type Props = {
  prodId: string;
  category: string;
  pathname: string;
};

export const ChangeColorSizeBlock: React.FC<Props> = ({
  prodId,
  category,
  pathname,
}) => {
  const { data } = useFetchData<ProductExpanded>(`${category}.json`);
  const selectedData = data.find(data => data.id === prodId);

  const initialColor = pathname.split('-').slice(-1).join();
  const initialCapacity = pathname
    .split('-')
    .slice(-2, -1)
    .join()
    .toUpperCase();

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedCapacity, setSelectedCapacity] = useState(initialCapacity);

  const navigate = useNavigate();
  const loc = useLocation();

  const selectSpecifications = (specification: string, isColor: boolean) => {
    const pathnameToArray = loc.pathname.split('-');
    let newPathName = loc.pathname;

    if (isColor) {
      pathnameToArray.splice(-1, 1, specification);
      newPathName = pathnameToArray.join('-');
    } else {
      pathnameToArray.splice(-2, 1, specification.toLowerCase());
      newPathName = pathnameToArray.join('-');
    }

    navigate(newPathName, { replace: true });
  };

  const handleChangeColor = (newColor: string) => {
    selectSpecifications(newColor, true);
  };

  const handleCapacity = (newCapacity: string) => {
    selectSpecifications(newCapacity, false);
  };

  return (
    <Box>
      <Box>
        <OptionsTitle>Available colors</OptionsTitle>
        <Colors>
          {selectedData?.colorsAvailable.map((color, i) => {
            const tempColor =
              ColorsAvailable[color as keyof typeof ColorsAvailable];
            return (
              <ColWrapper
                onClick={() => {
                  handleChangeColor(color);
                  setSelectedColor(color);
                }}
                key={i}
                className={selectedColor === color ? 'active' : ''}
              >
                <Color style={{ backgroundColor: tempColor }} />
              </ColWrapper>
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
              key={item}
              onClick={() => {
                handleCapacity(item);
                setSelectedCapacity(item);
              }}
              className={selectedCapacity === item ? 'active' : ''}
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

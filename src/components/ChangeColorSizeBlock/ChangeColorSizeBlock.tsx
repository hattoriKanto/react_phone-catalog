import { Box } from '@mui/material';
import {
  Capacity,
  Capacityes, CapacityValue,
  Color,
  Colors,
  ColWrapper,
  LineBox,
  OptionsTitle,
} from './ChangeColorSizeBlock.styles.tsx';
import useFetchData from '../../utils/useFetchData.ts';
import { ProductExpanded } from '../../types';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { ColorsAvailable } from '../../types/Colors.ts';

type Props = {
  prodId: string,
  category: string,
  pathname: string,
}

const ColorsAvailable = {
  gold: '#FCDBC1',
  white: '#F0F0F0',
  midnightgreen: '#5F7170',
  mignight: '#545D75',
  spacegray: '#4C4C4C',
  rosegold: '#FCD3C1',
  silver: '#DDDDDD',
  green: '#a8dac5',
  yellow: '#ffe681',
  purple: '#cfcad9',
  red: '#c9233b',
  spaceblack: '#3b3937',
  coral: '#fa604d',
  pink: '#f8dbd5',
  blue: '#1f5e7b',
  sierrablue: '#93a8c0',
  graphite: '#736e6b',
  skyblue: '#cad7e5',
  starlight: '#dcd5ca',
  black: '#000000'
}

const ChangeColorSizeBlock: React.FC<Props> = ({ prodId, category, pathname }) => {
  const { data} = useFetchData<ProductExpanded>(`${category}.json`);
  const selectedData = data.find(data => data.id === prodId);

  console.log(selectedData)

  const initialColor = pathname.split('-').slice(-1).join();
  const initialCapacity = pathname.split('-').slice(-2, -1).join().toUpperCase();

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

  useEffect(() => {

  })
  return (
    <Box>
      <Box>
        <OptionsTitle>Available colors</OptionsTitle>
        <Colors>
          {selectedData?.colorsAvailable.map(color => {

              const tempColor = ColorsAvailable[color];
              console.log(tempColor);
            return (
                <ColWrapper
                  onClick={() => {
                    handleChangeColor(color)
                    setSelectedColor(color)
                  }}
                  key={tempColor}
                  className={selectedColor === color ? 'active' : ''}
                >
                  <Color style={{backgroundColor: tempColor}} />
                </ColWrapper>
              )
          }
          )}
        </Colors>
      </Box>
      <LineBox/>
      <Box>
        <OptionsTitle>Select capacity</OptionsTitle>
        <Capacityes>
          {selectedData?.capacityAvailable.map(item =>
            <Capacity
              key={item}
              onClick={() => {
                handleCapacity(item)
                setSelectedCapacity(item);
              }}
              className={selectedCapacity === item ? 'active' : ''}
            >
              <CapacityValue>{item}</CapacityValue>
            </Capacity>
          )}
        </Capacityes>
      </Box>
      <LineBox/>
    </Box>
  )
}

export default ChangeColorSizeBlock;

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
import { Product } from '../../types';

type Props = {
  selector: string,
}

const ChangeColorSizeBlock: React.FC<Props> = ({ selector}) => {
  const { data} = useFetchData<Product>('products.json');
  const filteredData = data?.filter(data => data.name.toLowerCase().split(' ').slice(0, 3).join('-') === selector);
  const colorVariants = filteredData
    .map(item => item.color)
    .filter((value, i, arr) => {
    return arr.indexOf(value) === i;
  });

  const capacityVariants = filteredData
    .map(item => item.capacity)
    .filter((value, i, arr) => {
      return arr.indexOf(value) === i;
    });

  return (
    <Box>
      <Box>
        <OptionsTitle>Available colors</OptionsTitle>
        <Colors>
          {colorVariants.map(color =>
          <ColWrapper>
            <Color style={{backgroundColor: color}}
            ></Color>
          </ColWrapper>
          )}
        </Colors>
      </Box>
      <LineBox></LineBox>
      <Box>
        <OptionsTitle>Select capacity</OptionsTitle>
        <Capacityes>
          {capacityVariants.map(item =>
            <Capacity>
              <CapacityValue>{item}</CapacityValue>
            </Capacity>
          )}
        </Capacityes>
      </Box>
      <LineBox></LineBox>
    </Box>
  )
}

export default ChangeColorSizeBlock;

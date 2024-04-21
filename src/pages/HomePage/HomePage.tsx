import { FC } from 'react';
import { NewModels } from '../../components/NewModels/NewModels';
import { HotPrices } from '../../components/HotPrices/HotPrices';
import Container from '../../components/Container/Container';
import { Box } from '@mui/material';

export const HomePage: FC = () => {
  return (
    <main>
      <Container>
        <Box py={2}>
          <NewModels></NewModels>
        </Box>
        <Box>
          <HotPrices></HotPrices>
        </Box>
      </Container>
    </main>
  );
};

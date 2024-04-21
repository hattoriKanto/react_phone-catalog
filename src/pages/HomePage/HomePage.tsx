import { FC } from 'react';
import { NewModels } from '../../components/NewModels/NewModels';
import { HotPrices } from '../../components/HotPrices/HotPrices';
import Container from '../../components/Container/Container';
import { Box, Typography } from '@mui/material';
import { customTypography } from '../../theme/typography.config';
import { CategorySelector } from '../../components/CategorySelector';

export const HomePage: FC = () => {
  return (
    <main>
      <Container>
        <Box py={2}>
          <NewModels></NewModels>
        </Box>
        <Box>
          <Typography variant="h2" gutterBottom sx={customTypography.h2}>
            Shop by category
            <CategorySelector />
          </Typography>
        </Box>
        <Box>
          <HotPrices></HotPrices>
        </Box>
      </Container>
    </main>
  );
};

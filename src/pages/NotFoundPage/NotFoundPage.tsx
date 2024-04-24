import { FC } from 'react';
import Container from '../../components/Container/Container';
import { Box, Button, Typography } from '@mui/material';

export const NotFoundPage: FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          py: 2,
        }}
      >
        <Typography variant="h1" sx={{ pt: 2, alignSelf: 'center' }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ pt: 2, alignSelf: 'center' }}>
          UH OH! You're lost.
        </Typography>
        <Typography variant="body1" sx={{ py: 2, alignSelf: 'center' }}>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back.
        </Typography>
        <Button
          variant="contained"
          color="accent"
          onClick={() => window.history.back()}
          sx={{
            width: '160px',
            alignSelf: 'center',
            py: 1,
            '&.MuiButton-contained': { color: '#fff' },
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Typography
            variant="button"
            color="white"
            sx={{ textTransform: 'none', textDecoration: 'none' }}
          >
            Back
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

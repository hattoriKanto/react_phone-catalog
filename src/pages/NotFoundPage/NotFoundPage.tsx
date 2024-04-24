import { FC } from 'react';
import Container from '../../components/Container/Container';
import { Box, Button, Typography } from '@mui/material';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';

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
        <Box sx={{ alignSelf: 'center', width: '20vmax' }}>
          <script
            src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
            type="module"
          ></script>{' '}
          <DotLottiePlayer
            src="https://lottie.host/28a4a784-d2a9-4a53-8df5-b0a782a0cd52/e6ZDyuv7H3.json"
            background="transparent"
            loop
            autoplay
          ></DotLottiePlayer>
        </Box>

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

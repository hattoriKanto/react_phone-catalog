import { Box, styled } from '@mui/material';

export const Overlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '64px',
  right: '0',
  zIndex: '29',
  width: '100vw',
  height: '100vh',
  backgroundColor: theme.palette.primary.main,
  opacity: 0.4,
}));

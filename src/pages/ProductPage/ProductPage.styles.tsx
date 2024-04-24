import { Box, Stack, styled } from '@mui/material';

export const StyledFlexWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',

  [theme.breakpoints.up('xs')]: {
    marginTop: '56px',
    marginBottom: '56px',
    flexDirection: 'column',
    gap: '56px',
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: '64px',
    gap: '64px',
  },

  [theme.breakpoints.up('lg')]: {
    marginTop: '80px',
    flexDirection: 'row',
  },
}));

export const ProductWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '64px',

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.down('lg')]: {
    gap: '0',
    justifyContent: 'space-between',
  },
}));

export const ProductInfoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',

  [theme.breakpoints.down('md')]: {
    margin: '0 auto',
  },
}));

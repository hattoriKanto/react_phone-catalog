import { Box, Stack, styled } from '@mui/material';

export const StyledFlexWrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
    gap: '56px',
  },

  [theme.breakpoints.up('sm')]: {
    gap: '64px',
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
}));

export const ProductWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
})

import { Button, IconButton, Stack, Typography, styled } from '@mui/material';

export const AddToCartButton = styled(Button)(({ theme }) => ({
  width: '100%',
  minWidth: '180px',
  height: '48px',
  py: 1,
  '&.MuiButton-contained': { color: theme.palette.white.main },
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const AddToCartTypography = styled(Typography)({
  textTransform: 'none',
  textDecoration: 'none',
});

export const AddToCartAndFavStack = styled(Stack)({
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const AddToFavouritesButton = styled(IconButton)(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.icon.main,
  color: theme.palette.primary.main,
  width: '48px',
  height: '48px',
}));

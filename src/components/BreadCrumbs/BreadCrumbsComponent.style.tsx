import { Link, styled } from '@mui/material';

export const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.primary.main,
  transition: 'transform 500ms',

  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

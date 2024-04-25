import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Theme } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBurgerMenu = styled('aside')(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: '64px',
  right: '0',
  zIndex: 30,
  paddingTop: '24px',
  width: '40vw',
  height: 'calc(100vh - 48px)',
  background: theme.palette.white.main,
  overflow: 'auto',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },

  [theme.breakpoints.down('md')]: {
    top: '48px',
    width: '100%',
  },
}));

export const StyledBurgerFlexWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '30px',
  height: '100%',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    top: '48px',
    left: 0,
  },
}));

export const StyledBurgerNav = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const StyledBurgerList = styled(List)(() => ({
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

export const StyledBurgerItem = styled(ListItem)(() => ({
  padding: '0',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBurgerLink = styled(NavLink)(({
  theme,
  issvg,
}: {
  theme: Theme;
  issvg: string;
}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: issvg === 'true' ? 'center' : 'flex-start',
    width: issvg === 'true' ? '50vw' : '80vw',
    minHeight: issvg === 'true' ? '20vh' : '40px',
    paddingLeft: issvg === 'true' ? '0' : '24px',
    textDecoration: 'none',
    fontWeight: '700',

    borderTop:
      issvg === 'true' ? `1px solid ${theme.palette.element.main}` : 'none',

    '&:last-child': {
      borderLeft:
        issvg === 'true' ? `1px solid ${theme.palette.element.main}` : 'none',
    },

    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      minHeight: issvg === 'true' ? '14vh' : '80px',
      paddingLeft: '0',
    },
  };
});

export const StyledBurgerWrapperButton = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

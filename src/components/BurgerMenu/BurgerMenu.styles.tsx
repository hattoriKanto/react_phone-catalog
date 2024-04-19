import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Theme } from '@mui/material';
import { styled } from '@mui/system';

export const StyledBurgerMenu = styled('aside')(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  top: '48px',
  left: 0,
  zIndex: 30,
  paddingTop: '24px',
  width: '100%',
  height: 'calc(100vh - 48px)',
  background: theme.palette.white.main,
  overflow: 'auto',

  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    display: 'flex',
  },
}));

export const StyledBurgerFlexWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '30px',
  height: '100%',
}));

export const StyledBurgerNav = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
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
    justifyContent: 'center',
    width: issvg === 'true' ? '50vw' : '80vw',
    minHeight: issvg === 'true' ? '64px' : '40px',
    textDecoration: 'none',

    borderTop:
      issvg === 'true' ? `1px solid ${theme.palette.element.main}` : 'none',
    borderBottom: issvg === 'true' ? '3px solid transparent' : 'none',

    transition: 'border-bottom 500ms',

    '&:hover': {
      borderBottom:
        issvg === 'true' ? `3px solid ${theme.palette.primary.main}` : 'none',
    },

    '&:hover > span': {
      borderBottom:
        issvg === 'false' ? `2px solid ${theme.palette.primary.main}` : 'none',
    },

    '&:last-child': {
      borderLeft:
        issvg === 'true' ? `1px solid ${theme.palette.element.main}` : 'none',
    },
  };
});

export const StyledBurgerWrapperButton = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

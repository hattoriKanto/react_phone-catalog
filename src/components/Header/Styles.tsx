import { AppBar, Box, Container, List, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HeaderBar = styled(AppBar)(() => ({
  position: 'sticky',

  background: 'transparent',

  boxShadow: 'none',
  borderBottom: '1px solid #e2e6e9',

  transition: 'none',
}));

export const HeaderContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const HeaderNavigation = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
}));

export const HeaderLinks = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const HeaderLogoLink = styled(NavLink)(() => ({
  paddingInline: '10px',
  display: 'flex',
  alignItems: 'center',
  minHeight: '64px',
}));

export const HeaderNavLinks = styled(NavLink)(
  ({ borderleft }: { borderleft: string }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingInline: '10px',
    minHeight: '64px',

    textDecoration: 'none',

    borderBottom: '3px solid transparent',
    borderLeft: borderleft === 'true' ? '1px solid #e2e6e9' : 'none',

    transition: 'border-bottom 500ms',

    '&:hover': {
      borderBottom: '3px solid #0f0f11',
    },

    '&:active': {
      color: 'initial',
    },

    '&:last-child': {
      borderRight: borderleft === 'true' ? '1px solid #e2e6e9' : 'none',
    },
  }),
);

export const NavList = styled(List)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
}));

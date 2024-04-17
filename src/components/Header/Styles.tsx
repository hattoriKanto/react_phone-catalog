import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HeaderBar = styled(AppBar)(() => ({
  position: 'sticky',

  background: '#fff',
  color: 'inherit',
  boxShadow: 'none',
  borderBottom: '1px solid #e2e6e9',

  transition: 'none',
}));

export const HeaderContainer = styled(Container)(() => ({
  paddingInline: '24px',
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
  ({ borderLeft }: { borderLeft: boolean }) => ({
    paddingInline: '10px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '64px',

    borderBottom: '3px solid transparent',

    transition: 'border-bottom 500ms',
    borderLeft: borderLeft ? '1px solid #e2e6e9' : 'none',

    '&:hover': {
      borderBottom: '3px solid #0f0f11',
    },

    '&:last-child': {
      borderRight: borderLeft ? '1px solid #e2e6e9' : 'none',
    },
  }),
);

export const HeaderNavButton = styled(Button)(() => ({
  padding: '0',
  width: '100%',

  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',

  '&:hover': {
    background: 'transparent',
  },
}));

export const NavList = styled(List)(() => ({
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
}));

export const NavListItem = styled(ListItem)(() => ({
  padding: '0',
}));

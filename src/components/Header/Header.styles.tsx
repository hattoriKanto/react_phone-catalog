import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Theme,
  styled,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  background: `${theme.palette.white.main}`,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.element.main}`,
}));

export const StyledFlexWrapper = styled(Box)(() => ({
  paddingInline: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    gap: '32px',
  },
}));

export const StyledWrapperButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    display: 'none',
  },
}));

export const StyledLogoLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: '64px',
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    minHeight: '48px',
  },
}));

export const StyledLogo = styled('img')(({ theme }) => ({
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    height: '22px',
  },
}));

export const StyledNav = styled(Box)(({ theme }) => ({
  display: 'flex',
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    display: 'none',
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    gap: '32px',
  },
  [`@media (max-width:800px)`]: {
    gap: '24px',
  },
}));

export const StyledItem = styled(ListItem)(() => ({
  padding: '0',
}));

export const StyledButton = styled(Button)(() => ({
  padding: '0',
  borderRadius: '0',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '11px',
  '&:hover': {
    background: 'transparent',
  },
}));

export const StyledBurgerButton = styled(Button)(({ theme }) => ({
  display: 'none',
  padding: '0',
  minWidth: 'unset',
  minHeight: '48px',
  width: '48px',

  borderRadius: '0',
  borderLeft: `1px solid ${theme.palette.element.main}`,
  borderRight: `1px solid ${theme.palette.element.main}`,
  borderBottom: '3px solid transparent',

  transition: 'border-bottom 500ms',

  '&:hover': {
    background: 'transparent',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },

  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    display: 'flex',
  },
}));

export const StyledLink = styled(NavLink)(({
  theme,
  issvg,
}: {
  theme: Theme;
  issvg: boolean;
}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '64px',
    textDecoration: 'none',

    borderLeft: issvg ? '1px solid #e2e6e9' : 'none',
    borderBottom: '3px solid transparent',

    transition: 'border-bottom 500ms',

    '&:hover': {
      borderBottom: '3px solid #0f0f11',
    },

    '&:last-child': {
      borderRight: issvg ? '1px solid #e2e6e9' : 'none',
    },

    [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
      minHeight: '48px',
      width: issvg ? '48px' : 'inherit',
    },
  };
});

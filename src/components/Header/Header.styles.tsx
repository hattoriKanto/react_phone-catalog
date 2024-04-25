import {
  AppBar,
  Box,
  Button,
  IconButton,
  Input,
  List,
  ListItem,
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
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '48px',
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    gap: '32px',
  },
}));

export const StyledWrapperButton = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledLogoLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  minHeight: '64px',
  zIndex: 1,
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    minHeight: '48px',
  },
}));

export const StyledLogo = styled('img')(({ theme }) => ({
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    height: '22px',
  },
}));

export const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledList = styled(List)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '64px',
  [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
    gap: '24px',
  },
}));

export const StyledItem = styled(ListItem)(() => ({
  padding: '0',
}));

export const DesktopButtonsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledButton = styled(Button)(() => ({
  padding: '0',
  borderRadius: '0',
  fontWeight: '700',
  fontSize: '12px',
  height: '100%',
  '&:hover': {
    background: 'transparent',
  },
}));

export const StyledSearchWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',

  [theme.breakpoints.down('md')]: {
    gap: '10px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: '6px',
  },
}));

export const StyledSearchButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  minHeight: '64px',
  width: '64px',

  svg: {
    width: '24px',
    height: '24px',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    right: '0',
    bottom: '0',
    display: 'block',
    width: '100%',
    height: '3px',
    transform: 'scaleX(0)',
    backgroundColor: theme.palette.primary.main,
    transition: 'transform 500ms',
  },

  '&:hover, &:active': {
    background: 'transparent',
  },

  '&:hover::after, &.active::after': {
    transform: 'scaleX(1)',
  },

  [theme.breakpoints.down('md')]: {
    width: '48px',
    minHeight: '48px',
    svg: {
      width: '16px',
      height: '16px',
    },
  },
}));

export const StyledSearchInput = styled(Input)(({ theme }) => ({
  padding: '12px',
  height: '40px',
  width: '350px',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.secondary.main}`,
  outline: 'none',

  input: {
    padding: '0',
  },

  '&:before, &:after': {
    display: 'none',
  },

  '&:hover, &:active, &:focus': {
    border: `1px solid ${theme.palette.primary.main}`,
  },

  [theme.breakpoints.down('md')]: {
    height: '32px',
    padding: '8px',
    fontSize: '12px',
  },

  [theme.breakpoints.down('md')]: {
    height: '28px',
    padding: '6px',
    fontSize: '10px',
  },
}));

export const StyledBurgerButton = styled(Button)(({ theme }) => ({
  display: 'none',
  padding: '0',
  minWidth: 'unset',
  minHeight: '64px',
  width: '64px',
  borderRadius: '0',

  svg: {
    width: '24px',
    height: '24px',
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    right: '0',
    bottom: '0',
    display: 'block',
    width: '100%',
    height: '3px',
    transform: 'scaleX(0)',
    backgroundColor: theme.palette.primary.main,
    transition: 'transform 500ms',
  },

  '&:hover': {
    background: 'transparent',
  },

  '&:hover::after, &.active::after': {
    transform: 'scaleX(1)',
  },

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },

  [theme.breakpoints.down('md')]: {
    width: '48px',
    minHeight: '48px',
    svg: {
      width: '16px',
      heigth: '16px',
    },
  },
}));

export const StyledLink = styled(NavLink)(({ theme }) => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '64px',
    textDecoration: 'none',

    '&:after': {
      content: '""',
      position: 'absolute',
      right: '0',
      bottom: '0',
      display: 'block',
      width: '100%',
      height: '3px',
      transform: 'scaleX(0)',
      backgroundColor: theme.palette.primary.main,
      transition: 'transform 500ms',
    },

    '&:hover::after, &.active::after': {
      transform: 'scaleX(1)',
    },

    [theme.breakpoints.down('md')]: {
      minHeight: '48px',
    },
  };
});

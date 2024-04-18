import { Box, Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const FooterLogoLink = styled(Link)(({ theme }) => ({
  [theme.breakpoints.up('mobile')]: {
    marginBottom: '32px',
  },
  [theme.breakpoints.up('tablet')]: {
    marginBottom: 0,
  },
}));

export const BackToTopButton = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontFamily: 'Mont-Bold, sefif',
  fontWeight: 700,
  fontSize: '12px',
  color: '#89939A',
  textTransform: 'none',
  textDecoration: 'none',
  padding: '0',
  transition: '0,2s easy-out',

  [theme.breakpoints.up('mobile')]: {
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#0F0F11',
  },
  '&:focus': {
    outline: 'none',
  },
}));

export const Footer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: 32,
  paddingBottom: 32,
  marginTop: '700px',
}));

export const FooterLinks = styled(Stack)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.up('mobile')]: {
    flexDirection: 'column',
    marginBottom: '32px',
  },
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row',
    marginBottom: 0,
  },
}));

export const FooterLink = styled(Link)({
  fontFamily: 'Mont-Bold, serif',
  fontWeight: 800,
  fontSize: 12,
  color: '#89939A',
  textTransform: 'uppercase',
  textDecoration: 'inherit',

  '&:hover': {
    color: '#0F0F11',
  },
});

export const ButtonToTopIcon = styled('img')({
  display: 'inline-block',
  rotate: '-90deg',
  marginLeft: 8,
  textDecoration: 'none',
});

export const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
  paddingLeft: 0,
  [theme.breakpoints.up('mobile')]: {
    flexDirection: 'column',
    alignItems: 'start',
  },
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

import { TypographyOptions } from '@mui/material/styles/createTypography';

export const customTypography: TypographyOptions = {
  fontFamily: 'Mont, Arial, sans-serif',
  h1: {
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: '-0.01em',
    '@media (max-width:640px)': {
      fontSize: '32px',
      lineHeight: '41px',
    },
  },
  h2: {
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '41px',
    '@media (max-width:640px)': {
      fontSize: '22px',
      lineHeight: '31px',
    },
  },
  h3: {
    fontWeight: 700, // Bold for desktop
    fontSize: '22px',
    lineHeight: '31px',
    '@media (max-width:640px)': {
      fontWeight: 600, // SemiBold for mobile
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
  h4: {
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '26px',
    '@media (max-width:640px)': {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  subtitle1: {
    // Assuming this is for Uppercase text
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '11px',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0',
  },
  body1: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    letterSpacing: '0',
  },
  caption: {
    // Assuming this is for small text
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '15px',
    letterSpacing: '0',
  },
};

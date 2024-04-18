import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

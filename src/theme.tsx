import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 640,
      desktop: 1200,
    },
  },
});

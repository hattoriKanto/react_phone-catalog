import '@mui/material/styles';

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface PaletteOptions {
    accent?: {
      main?: string;
    };
    secondaryAccent?: {
      main?: string;
    };
    icon?: {
      main?: string;
    };
    element?: {
      main?: string;
    };
    hoverBg: {
      main?: string;
    };
    white: {
      main?: string;
    };
    green: {
      main?: string;
    };
    red: {
      main?: string;
    };
  }
}

export const customPalette = {
  primary: {
    main: '#0F0F11',
  },
  secondary: {
    main: '#89939A',
  },
  accent: {
    main: '#F86800',
  },
  secondaryAccent: {
    main: '#476DF4',
  },
  icon: {
    main: '#B4BDC3',
  },
  element: {
    main: '#e2e6e9',
  },
  hoverBg: {
    main: '#FAFBFC',
  },
  white: {
    main: '#FFFFFF',
  },
  green: {
    main: '#27AE60',
  },
  red: {
    main: '#EB5757',
  },
};

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true; // Explicitly declare 'accent' as a valid color
  }
}

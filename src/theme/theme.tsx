import { ThemeProvider, createTheme } from '@mui/material';
import { customPalette } from './palete.config';
import { customBreakpoints } from './breakpoints.config';
import { customTypography } from './typography.config';

const theme = createTheme({
  palette: customPalette,
  breakpoints: customBreakpoints,
  typography: customTypography,
});

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

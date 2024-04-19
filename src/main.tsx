import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root.tsx';
import { CustomThemeProvider } from './theme/theme.tsx';
import { CssBaseline } from '@mui/material';
import { CartProvider } from './context/CartContext/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <CartProvider>
        <CssBaseline />
        <Root />
      </CartProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
);

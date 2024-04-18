import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
);

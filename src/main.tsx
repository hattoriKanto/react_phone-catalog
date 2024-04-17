import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root.tsx';
import { CustomThemeProvider } from './theme/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Root />
    </CustomThemeProvider>
  </React.StrictMode>,
);

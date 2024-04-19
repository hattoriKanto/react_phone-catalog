import { Container as MuiContainer } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => (
  <MuiContainer
    sx={{
      maxWidth: { md: 1200, sm: 576, xs: 288 },
    }}
    disableGutters
  >
    {children}
  </MuiContainer>
);

export default Container;

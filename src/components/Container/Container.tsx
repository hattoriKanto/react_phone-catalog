import { Container as MuiContainer} from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => (
  <MuiContainer sx={{
    maxWidth: {desktop: 1200, tablet: 576, mobile: 288},
  }} disableGutters>
    {children}
  </MuiContainer>
)

export default Container;

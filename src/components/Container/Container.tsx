import { Container as MuiContainer } from '@mui/material';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <MuiContainer
      sx={({ breakpoints }) => ({
        maxWidth: { md: 1200, sm: 576, xs: 288 },
        [breakpoints.up('xs')]: {
          paddingInline: '16px',
        },
        [breakpoints.up('sm')]: {
          paddingInline: '24px',
        },
        [breakpoints.up('md')]: {
          paddingInline: '32px',
        },
      })}
      disableGutters
    >
      {children}
    </MuiContainer>
  );
};

export default Container;

import { Button, Typography } from '@mui/material';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <main>
      <Typography variant="h1">Welcome to Nice Gadgets Store!</Typography>
      {/* button below created to check if mui is working */}
      <Button variant="contained">Hello world</Button>
    </main>
  );
};

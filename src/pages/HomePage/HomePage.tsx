import { Button } from '@mui/material';
import { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <main>
      <h1>Welcome to Nice Gadgets Store!</h1>
      {/* button below created to check if mui is working */}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </main>
  );
};

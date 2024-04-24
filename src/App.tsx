import { Header } from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Box } from '@mui/material';

function App() {
  const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);

  return (
    <>
      <Header
        isBurgerMenuShown={isBurgerMenuShown}
        onBurgerToggle={setIsBurgerMenuShown}
      />
      {isBurgerMenuShown && (
        <BurgerMenu
          isBurgerMenuShown={isBurgerMenuShown}
          onBurgerToggle={setIsBurgerMenuShown}
        ></BurgerMenu>
      )}
      <Box sx={{ minHeight: 'calc(100vh - 64px - 125px)' }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default App;

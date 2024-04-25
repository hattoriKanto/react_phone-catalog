import { Header } from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Box } from '@mui/material';

function App() {
  const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isBurgerMenuShown) {
      setIsBurgerMenuShown(false);
    }
  };

  return (
    <>
      <Header
        isSearchOpen={isSearchOpen}
        isBurgerMenuShown={isBurgerMenuShown}
        onBurgerToggle={setIsBurgerMenuShown}
        onSearchToggle={setIsSearchOpen}
        handleSearchIconClick={handleSearchIconClick}
      />
      {isBurgerMenuShown && (
        <>
          <BurgerMenu
            isBurgerMenuShown={isBurgerMenuShown}
            onBurgerToggle={setIsBurgerMenuShown}
          />
          <Box
            sx={{
              position: 'fixed',
              top: '64px',
              right: '0',
              zIndex: '29',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'black',
              opacity: 0.4,
            }}
          />
        </>
      )}
      <Box sx={{ minHeight: 'calc(100vh - 64px - 125px)' }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default App;

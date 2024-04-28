import { Header } from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Box } from '@mui/material';
import { toggleBurgerMenu } from './functions';
import { useBurgerMenuContext } from './hooks/useBurgerMenuContext';
import { Overlay } from './components';

function App() {
  const { isBurgerMenuShown, setIsBurgerMenuShown } = useBurgerMenuContext();

  return (
    <>
      <Header />
      {isBurgerMenuShown && (
        <>
          <BurgerMenu />
          <Overlay
            onClick={() =>
              toggleBurgerMenu(setIsBurgerMenuShown, isBurgerMenuShown)
            }
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

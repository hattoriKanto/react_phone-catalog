import { Header } from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Box } from '@mui/material';
import { toggleBurgerMenu } from './functions';
import { useBurgerMenuContext } from './hooks/useBurgerMenuContext';
import { Overlay } from './components';
import { useEffect, useState } from 'react';

function App() {
  const { isBurgerMenuShown, setIsBurgerMenuShown } = useBurgerMenuContext();
  const [hasToken, setHasToken] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorage = () => {
      setHasToken(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  if (
    !hasToken &&
    (location.pathname === '/favorites' || location.pathname === '/cart')
  ) {
    navigate('/');
  }

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

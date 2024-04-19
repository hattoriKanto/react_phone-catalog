import { Header } from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

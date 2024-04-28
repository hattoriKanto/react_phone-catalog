import { useContext } from 'react';
import { BurgerMenuContext } from '../context/BurgerMenuContext/BurgerMenuContext';

export const useBurgerMenuContext = () => {
  const context = useContext(BurgerMenuContext);

  if (!context) {
    throw new Error('');
  }

  return context;
};

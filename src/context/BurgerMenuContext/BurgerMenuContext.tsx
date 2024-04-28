import React, { useState } from 'react';
import { BurgerMenuProps, BurgerMenuProviderProps } from '.';

export const BurgerMenuContext = React.createContext<BurgerMenuProps>({
  isBurgerMenuShown: false,
  setIsBurgerMenuShown: () => {},
});

export const BurgerMenuContextProvider: React.FC<BurgerMenuProviderProps> = ({
  children,
}) => {
  const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);

  const burgerMenuState = { isBurgerMenuShown, setIsBurgerMenuShown };

  return (
    <BurgerMenuContext.Provider value={burgerMenuState}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

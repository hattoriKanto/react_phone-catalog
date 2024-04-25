export interface BurgerMenuProps {
  isBurgerMenuShown: boolean;
  setIsBurgerMenuShown: (isBurgerMenuShown: boolean) => void;
}

export interface BurgerMenuProviderProps {
  children: React.ReactNode;
}

export const toggleBurgerMenu = (
  onBurgerToggle: (isBurgerMenuShown: boolean) => void,
  isBurgerMenuShown: boolean,
) => {
  onBurgerToggle(!isBurgerMenuShown);

  document.querySelector('body')?.classList.toggle('scroll-disable');
};

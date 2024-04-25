import { useLocation } from 'react-router-dom';
import { HeaderOtherLinks } from '../../types';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledBurgerWrapperButton } from './BurgerMenu.styles';
import { BurgerActiveLink } from './BurgerActiveLink';
import React from 'react';

interface Props {
  isBurgerMenuShown: boolean;
  onBurgerToggle: (isBurgerMenuShown: boolean) => void;
}

export const BurgerMenuButtons: React.FC<Props> = ({
  isBurgerMenuShown,
  onBurgerToggle,
}) => {
  const locationPathname = useLocation().pathname;

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return locationPathname === HeaderOtherLinks.cart ? (
        <ShoppingCartIcon
          color="primary"
          sx={{ width: '20px', height: '20px' }}
        ></ShoppingCartIcon>
      ) : (
        <ShoppingCartOutlinedIcon
          color="primary"
          sx={{ width: '20px', height: '20px' }}
        ></ShoppingCartOutlinedIcon>
      );
    }

    return locationPathname === HeaderOtherLinks.favorites ? (
      <FavoriteIcon
        color="primary"
        sx={{ width: '20px', height: '20px' }}
      ></FavoriteIcon>
    ) : (
      <FavoriteBorderIcon
        color="primary"
        sx={{ width: '20px', height: '20px' }}
      ></FavoriteBorderIcon>
    );
  };

  return (
    <StyledBurgerWrapperButton>
      {Object.entries(HeaderOtherLinks).map(([text, link]) => {
        return (
          <BurgerActiveLink
            key={text}
            label={handleChangeIcon(link)}
            to={link}
            isBurgerMenuShown={isBurgerMenuShown}
            onBurgerToggle={onBurgerToggle}
          />
        );
      })}
    </StyledBurgerWrapperButton>
  );
};

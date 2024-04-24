import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderOtherLinks } from '../../types';
import { ActiveLink, StyledWrapperButton } from '.';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';
import Badge from '@mui/material/Badge';

export const NavBarButtons: React.FC = () => {
  const locationPathname = useLocation().pathname;
  const { cartQuantity } = useCartContext();
  const { favoritesQuantity } = useFavoritesContext();

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return (
        <Badge badgeContent={cartQuantity} color="info" max={99}>
          {locationPathname === HeaderOtherLinks.cart ? (
            <ShoppingCartIcon
              color="primary"
              sx={{ width: '20px', height: '20px' }}
            ></ShoppingCartIcon>
          ) : (
            <ShoppingCartOutlinedIcon
              color="primary"
              sx={{ width: '20px', height: '20px' }}
            ></ShoppingCartOutlinedIcon>
          )}
        </Badge>
      );
    }

    return (
      <Badge badgeContent={favoritesQuantity} color="info" max={99}>
        {locationPathname === HeaderOtherLinks.favorites ? (
          <FavoriteIcon
            color="primary"
            sx={{ width: '20px', height: '20px' }}
          ></FavoriteIcon>
        ) : (
          <FavoriteBorderIcon
            color="primary"
            sx={{ width: '20px', height: '20px' }}
          ></FavoriteBorderIcon>
        )}
      </Badge>
    );
  };

  return (
    <StyledWrapperButton>
      {Object.entries(HeaderOtherLinks).map(([text, link]) => {
        return (
          <ActiveLink
            key={text}
            label={handleChangeIcon(link)}
            to={link}
            activeStyle={{}}
          />
        );
      })}
    </StyledWrapperButton>
  );
};

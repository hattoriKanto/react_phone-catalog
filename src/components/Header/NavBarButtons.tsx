import React from 'react';
import { useLocation } from 'react-router-dom';

import { HeaderOtherLinks } from '../../types';
import { ActiveLink, StyledWrapperButton } from '.';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavBarButtons: React.FC = () => {
  const locationPathname = useLocation().pathname;

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return locationPathname === HeaderOtherLinks.cart ? (
        <ShoppingCartIcon
          color="primary"
          sx={{ width: '16px', height: '16px' }}
        ></ShoppingCartIcon>
      ) : (
        <ShoppingCartOutlinedIcon
          color="primary"
          sx={{ width: '16px', height: '16px' }}
        ></ShoppingCartOutlinedIcon>
      );
    }

    return locationPathname === HeaderOtherLinks.favourites ? (
      <FavoriteIcon
        color="primary"
        sx={{ width: '16px', height: '16px' }}
      ></FavoriteIcon>
    ) : (
      <FavoriteBorderIcon
        color="primary"
        sx={{ width: '16px', height: '16px' }}
      ></FavoriteBorderIcon>
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
            activeStyle={{
              borderBottom: '3px solid #0f0f11',
            }}
          />
        );
      })}
    </StyledWrapperButton>
  );
};

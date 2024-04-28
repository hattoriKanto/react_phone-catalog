import { useLocation } from 'react-router-dom';
import { HeaderOtherLinks } from '../../types';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  StyledBurgerIconWrapper,
  StyledBurgerWrapperButton,
} from './BurgerMenu.styles';
import { BurgerActiveLink } from './BurgerActiveLink';
import React from 'react';
import { Badge } from '@mui/material';
import { useCartContext } from '../../hooks/useCartContext';
import { useFavoritesContext } from '../../hooks/useFavoritesContext';

export const BurgerMenuButtons: React.FC = () => {
  const { cartQuantity } = useCartContext();
  const { favoritesQuantity } = useFavoritesContext();
  const locationPathname = useLocation().pathname;

  const handleChangeIcon = (link: string) => {
    if (link === HeaderOtherLinks.cart) {
      return (
        <Badge badgeContent={cartQuantity} color="info" max={99}>
          {locationPathname === HeaderOtherLinks.cart ? (
            <StyledBurgerIconWrapper>
              <ShoppingCartIcon
                sx={{ width: '100%', height: '100%' }}
                color="primary"
              />
            </StyledBurgerIconWrapper>
          ) : (
            <StyledBurgerIconWrapper>
              <ShoppingCartOutlinedIcon
                sx={{ width: '100%', height: '100%' }}
                color="primary"
              />
            </StyledBurgerIconWrapper>
          )}
        </Badge>
      );
    }

    return (
      <Badge badgeContent={favoritesQuantity} color="info" max={99}>
        {locationPathname === HeaderOtherLinks.favorites ? (
          <StyledBurgerIconWrapper>
            <FavoriteIcon
              sx={{ width: '100%', height: '100%' }}
              color="primary"
            />
          </StyledBurgerIconWrapper>
        ) : (
          <StyledBurgerIconWrapper>
            <FavoriteBorderIcon
              sx={{ width: '100%', height: '100%' }}
              color="primary"
            />
          </StyledBurgerIconWrapper>
        )}
      </Badge>
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
          />
        );
      })}
    </StyledBurgerWrapperButton>
  );
};
